import {getMessagesUserRecent, getMessagesUserTop} from "@/actions";
import {Comment, CommentProps, Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/exports";

export const ContentRaking = async () => {
    const messagesTop = await getMessagesUserTop()
    const messagesRecient = await getMessagesUserRecent()
    return (
        <Tabs defaultValue="top">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="top">Top 100</TabsTrigger>
                <TabsTrigger value="recent">Recientes</TabsTrigger>
            </TabsList>
            <TabsContent value="top"
                         className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {messagesTop.map(message => <Comment key={message.id} {...message}/>)}
            </TabsContent>
            <TabsContent value="recent"
                         className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                {messagesRecient.map(message => <Comment key={message.id} {...message}/>)}
            </TabsContent>
        </Tabs>
    )
}