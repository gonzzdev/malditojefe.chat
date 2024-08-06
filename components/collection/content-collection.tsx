'use client'
import {readAchievement} from "@/helpers";
import {Achievement} from "@/data/achievement";
import {CardCollection} from "@/components/collection/card-collection";
import {CardNotCollection} from "@/components/collection/card-not-collection";

export const ContentCollection = ({achievement}: { achievement: Achievement }) => {
    const achievements = readAchievement()
    const CollectionComponent = () => {
        if (achievements.some(a => achievement.id == a.id)) {
            return <CardCollection key={achievement.id} url={achievement.url} name={achievement.name} isAchievement={false}/>
        }
        return <CardNotCollection key={achievement.id}/>
    }
    return (
        <CollectionComponent/>
    )
}