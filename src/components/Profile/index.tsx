import Image from "next/future/image";
import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'


interface ProfileProps {
    user: {
        name: string
        login: string
        company: string
        followers: number
        bio: string
        avatarUrl: string
    }
}

export function Profile({ user }: ProfileProps) {
    return (
        <>
            <div className="bg-base-profile w-[100%] h-[13.25rem] flex rounded-[10px]">
                <Image
                    className="my-8 mx-10 rounded-lg"
                    src={user.avatarUrl}
                    width={148}
                    height={148}
                    alt=""
                />

                <div className="mt-10">
                    <h1 className="text-base-title text-2xl font-bold leading-[130%]">{user.name}</h1>
                    <p className="text-base-text mt-3">
                        {user.bio}
                    </p>

                    <div className="flex gap-6 mt-6 text-base-subtitle">
                        <span className="flex items-center gap-2"><FaGithub size={16.88} className="text-base-label" />
                            {user.login}
                        </span>
                        <span className="flex items-center gap-2"><FaBuilding size={16.88} className="text-base-label" />
                            {user?.company ? user.company : 'Autonomous'}
                        </span>
                        <span className="flex items-center gap-2"><FaUserFriends size={16.88} className="text-base-label" />
                            {user.followers} seguidores
                        </span>
                    </div>
                </div>

                <div>
                    <a
                        className="h-aut relative top-10 right-[3.25rem] text-brand-blue font-bold text-xs"
                        href={"https://www.github.com/" + user.login} target="_blank" rel="noreferrer">
                        <span className="flex gap-2 hover:border-b hover:border-brand-blue">
                            GITHUB <FaExternalLinkAlt />
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}