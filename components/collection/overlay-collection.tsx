'use client'
import {useAchievements} from "@/hooks";
import {CardCollection} from "@/components/exports";

export const OverlayCollection = () => {
    const {achievement, isShow} = useAchievements();

    return (
        <div className="absolute right-10 top-10 z-20">
            {isShow && <CardCollection url={achievement!.url} name={achievement!.name} isAchievement={true}/>}
        </div>
    )
}