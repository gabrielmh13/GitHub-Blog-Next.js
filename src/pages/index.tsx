import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";
import { Profile } from "../components/Profile";
import { api } from "../lib/axios";

import ReactLoading from 'react-loading'
import { SearchPost } from "../components/SeacrhPost";

interface HomeProps {
  userData: {
    name: string
    login: string
    company: string
    followers: number
    bio: string
    avatarUrl: string
  }
}

interface PostState {
  title: string,
  body: string,
  number: number,
  created_at: string
}

const repository = process.env.NEXT_PUBLIC_REPO

export default function Home({ userData }: HomeProps) {
  const [posts, setPosts] = useState<PostState[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api(`/search/issues?q=${query}%20repo:${userData.login}/${repository}`)
      const postsData = response.data.items

      setPosts(postsData)
    }
    finally {
      setIsLoading(false)
    }
  }, [userData.login])

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <div className="max-w-[54rem] flex flex-col items-center">
      <div className="mt-[-6.6rem]">
        <Profile user={userData} />
      </div>
      <div className="mt-[4.5rem] w-full">
        <SearchPost getPosts={getPosts} quantityPosts={posts.length} />
      </div>
      {isLoading ?
        <ReactLoading
          type="spin"
          className="mt-10"
        />
        :
        <>
          <div className="mw-full grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            {posts.map((post) => {
              return (

                <PostCard key={post.number} title={post.title} body={post.body} number={post.number} created_at={post.created_at} />

              )
            })}
          </div>
        </>
      }
    </div >
  )
}

export const getServerSideProps = async () => {
  const userInforesponse = api(`/users/${process.env.NEXT_PUBLIC_USERNAME}`)

  const userData = await userInforesponse

  return {
    props: {
      userData: {
        name: userData.data.name,
        login: userData.data.login,
        company: userData.data.company,
        followers: userData.data.followers,
        bio: userData.data.bio,
        avatarUrl: userData.data.avatar_url
      }
    }
  }
}