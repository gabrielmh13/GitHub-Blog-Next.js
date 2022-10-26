import { GetServerSideProps } from "next"
import { MarkdownContent } from "../../components/MakrdownContent"

import { PostHeader } from "../../components/PostHeader"
import { api } from "../../lib/axios"

interface PostProps {
    postInfo: {
        title: string,
        body: string,
        login: string,
        created_at: string,
        comments: number
    }
}

export default function Post({ postInfo }: PostProps) {
    return (
        <div className="max-w-[54rem] flex flex-col items-center">
            <div className="mt-[-6.6rem]">
                <PostHeader login={postInfo.login} title={postInfo.title} comments={postInfo.comments} created_at={postInfo.created_at} />
            </div>

            <div className="py-10 px-8 text-base-text">
                <MarkdownContent content={postInfo.body} />
            </div>
        </div>
    )
}


export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({ params }) => {
    const postId = params.id

    const response = api(`/repos/${process.env.NEXT_PUBLIC_USERNAME}/${process.env.NEXT_PUBLIC_REPO}/issues/${postId}`)
    const postData = await response

    return {
        props: {
            postInfo: {
                title: postData.data.title,
                body: postData.data.body,
                login: postData.data.user.login,
                created_at: postData.data.created_at,
                comments: postData.data.comments
            }
        }
    }
}