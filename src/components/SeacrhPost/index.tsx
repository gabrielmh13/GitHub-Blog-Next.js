import { useForm } from "react-hook-form"
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormValidationScheme = zod.object({
    query: zod.string()
})

type searchFormData = zod.infer<typeof searchFormValidationScheme>

interface SearchPostProps {
    getPosts: (query: string) => void
    quantityPosts: number
}

export function SearchPost({ getPosts, quantityPosts }: SearchPostProps) {
    const searchForm = useForm<searchFormData>({
        resolver: zodResolver(searchFormValidationScheme),
        defaultValues: {
            query: ""
        }
    })

    const { handleSubmit, register, reset } = searchForm

    function handleSearchFormSubmit(data: searchFormData) {
        getPosts(data.query)
        reset()
    }

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg text-base-subtitle">Publicações</h2>
                <span className="text-sm text-base-span">{quantityPosts} publicações</span>
            </div>
            <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
                <input
                    className="outline-none w-full bg-base-input h-12 rounded-md border border-base-border p-4 text-base-text placeholder:text-base-label focus:border-brand-blue"
                    type="text"
                    placeholder="Buscar Conteúdo"
                    {...register('query')}
                />
            </form>
        </div>
    )
}