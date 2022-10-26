import Link from "next/link";
import { FaChevronLeft, FaExternalLinkAlt, FaGithub, FaCalendarDay, FaComment } from "react-icons/fa";
import { formatDateToNow } from "../../utils/dateFormatter";


interface PostHeaderProps {
    title: string
    login: string
    created_at: string,
    comments: number
}

export function PostHeader({ login, title, comments, created_at }: PostHeaderProps) {
    return (
        <div className="bg-base-profile w-[54rem] h-[13.25rem] flex flex-col justify-center rounded-[10px] p-8">
            <div className="w-full flex justify-between">
                <Link href='/'>
                    <div className="flex items-center gap-2 text-brand-blue text-xs font-bold">
                        <FaChevronLeft /> Voltar
                    </div>
                </Link>

                <a href={"https://www.github.com/" + process.env.NEXT_PUBLIC_USERNAME + '/' + process.env.NEXT_PUBLIC_REPO} target="_blank" rel="noreferrer">
                    <div className="flex items-center gap-2 text-brand-blue text-xs font-bold">
                        VER NO GITHUB <FaExternalLinkAlt />
                    </div>
                </a>
            </div>

            <h1 className="mt-5 text-base-title text-2xl font-bold">{title}</h1>

            <div className="flex gap-6 mt-6 text-base-subtitle">
                <span className="flex items-center gap-2">
                    <FaGithub size={16.88} className="text-base-label" />
                    {login}
                </span>
                <span className="flex items-center gap-2">
                    <FaCalendarDay size={16.88} className="text-base-label" />
                    {formatDateToNow(created_at)}
                </span>
                <span className="flex items-center gap-2">
                    <FaComment size={16.88} className="text-base-label" />
                    {comments} comentários
                </span>
            </div>
        </div>
    )
}