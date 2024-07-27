import {obtenerData} from "@/data/comments";
import {CommentProps} from "@/components/comment/comment";

export interface Paginacion<T> {
    data: T[],
    currentPage: number,
    totalPage: number,
    total: number
}


export const obtenerCommentarios = (currentPage: number, size: number): Paginacion<CommentProps> => {
    const dataTotal = obtenerData()
    const totalPage = Math.round(dataTotal.length / size);
    const total = dataTotal.length
    const inicioPaginacion = currentPage * size;
    const finalPaginacion = (currentPage + 1) * size
    if (inicioPaginacion > total)
        return {
            data: [],
            currentPage,
            totalPage,
            total
        }
    const data = dataTotal.slice(inicioPaginacion, finalPaginacion)
    return {
        data,
        currentPage,
        totalPage,
        total
    }
}