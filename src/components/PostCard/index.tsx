import { formatDistanceToNow } from "date-fns"
import ptBr from 'date-fns/locale/pt-BR'

import Link from "next/link"
import { formatDateToNow } from "../../utils/dateFormatter"

interface PostProps {
    title: string,
    body: string,
    number: number,
    created_at: string
}

export function PostCard({ title, body, number, created_at }: PostProps) {
    return (
        <Link href={`/post/${number}`}>
            <div className="border-2 border-transparent flex flex-col bg-base-post w-[26rem] h-[16.25rem] rounded-lg cursor-pointer hover:border-base-label hover:border-solid hover:border-2">
                <div className="m-8 overflow-hidden">
                    <div className="flex gap-4 justify-between">
                        <h2 className="text-base-title font-bold text-xl w-[75%]">{title}</h2>
                        <span className="text-sm text-base-span w-auto self-start">
                            {formatDateToNow(created_at)}
                        </span>
                    </div>

                    <p className="text-base-text mt-5 leading-6">{body}</p>

                </div>
            </div>
        </Link>
    )
}