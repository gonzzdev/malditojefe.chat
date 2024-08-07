import {Comment, CommentProps} from "./comment";
import {getMessagesBoss, Paginacion} from "@/actions";

export const BackgroundComment = async () => {
    const comments= await getMessagesBoss(0, 10);
    return (
        <div className="z-20 absolute -top-32 flex items-center justify-center w-full">
            <div className="grid gap-4 min-w-max grid-cols-1 md:grid-cols-3">
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