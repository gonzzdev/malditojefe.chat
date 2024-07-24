import {Comment, CommentProps} from "./comment";
import {obtenerCommentarios, Paginacion} from "@/actions";

export const BackgroundComment = () => {
    const comments: Paginacion<CommentProps> = obtenerCommentarios(0, 10);
    return (
        <div className="z-20 absolute -top-32 flex items-center justify-center w-full">
            <div className="grid gap-4 min-w-max lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div className="grid gap-4 auto-rows-max">
                    {comments.data.slice(0,4).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
                <div className="grid gap-4 mt-32 auto-rows-max">
                    {comments.data.slice(3,7).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
                <div className="grid gap-4 auto-rows-max">
                    {comments.data.slice(4,8).map((comment) => {
                        return <Comment key={comment.id.toString()} {...comment}/>
                    })}
                </div>
            </div>
        </div>
    )
}