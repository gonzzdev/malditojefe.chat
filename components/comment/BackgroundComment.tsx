import {Comment, CommentProps} from "@/components";
import {obtenerCommentarios, Paginacion} from "@/actions";

export function BackgroundComment(){
    const commentsLeft: Paginacion<CommentProps> = obtenerCommentarios(0, 3);
    const commentsMiddle: Paginacion<CommentProps> = obtenerCommentarios(1, 3);
    const commentsRight: Paginacion<CommentProps> = obtenerCommentarios(2, 3);
    return (
        <div className="z-20 absolute -top-32 flex items-center justify-center w-full">
            <div className="grid gap-2 min-w-max lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
                <div className="grid gap-2">
                    {commentsLeft.data.map((comments) => {
                        return <Comment key={comments.id.toString()} {...comments}/>
                    })}
                </div>
                <div className="grid gap-2 mt-32">
                    {commentsMiddle.data.map((comments) => {
                        return <Comment key={comments.id.toString()} {...comments}/>
                    })}
                </div>
                <div className="grid gap-2">
                    {commentsRight.data.map((comments) => {
                        return <Comment key={comments.id.toString()} {...comments}/>
                    })}
                </div>
            </div>
        </div>
    )
}