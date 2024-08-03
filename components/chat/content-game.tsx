import {FormChat} from "@/components/chat/form-chat";
import {AwardsProvider} from "@/contexts/awardsContext";
import {OverlayCollection} from "@/components/collection/overlay-collection";

export const ContentGame = ()=>{
    return (
        <AwardsProvider>
            <OverlayCollection/>
            <FormChat/>
        </AwardsProvider>

    )
}