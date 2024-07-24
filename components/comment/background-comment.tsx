import {Comment, CommentProps} from "./comment";
import {obtenerCommentarios, Paginacion} from "@/actions";

export const BackgroundComment = () => {
    const comments: Paginacion<CommentProps> = obtenerCommentarios(0, 9);
    return (
        <div className="z-20 absolute -top-32 flex items-center justify-center w-full">
            <div className="grid gap-2 min-w-max lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div className="grid gap-2">
                    {comments.data.slice(0,3).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
                <div className="grid gap-2 mt-32">
                    {comments.data.slice(0,3).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
                <div className="grid gap-2">
                    {comments.data.slice(0,3).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
            </div>
        </div>
    )
}