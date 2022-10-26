import { formatDistanceToNow } from "date-fns"
import ptBr from 'date-fns/locale/pt-BR'

export const formatDateToNow = (date: string) => {
    const dateString = formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBr
    })

    return dateString
}