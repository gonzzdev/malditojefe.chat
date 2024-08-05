'use client'
import {useContext, useEffect, useState} from "react";
import {AwardsContext} from "@/contexts/awardsContext";
import {Achievement, getDataAchievement} from "@/data/achievement";
import {saveAchievement} from "@/helpers";

export const useAchievements = () => {
    const {counter} = useContext(AwardsContext)
    const achievements = getDataAchievement();
    const [achievement, setAchievement] = useState<Achievement>()
    const [isShow, setIsShow] = useState<boolean>()
    useEffect(() => {
        // Encontro un premio
        const achievement = achievements
            .find(data => data.range === counter)
        let timeOut: NodeJS.Timeout;
        // Si encontro un prermio mostrarlo
        if (achievement) {
            setAchievement(achievement)
            saveAchievement(achievement)
            setIsShow(true)
            timeOut = setTimeout(() => {
                setIsShow(false)
            }, 5000);
        }
        return () => {
            if(timeOut){
                clearTimeout(timeOut);
            }
        };
    }, [counter]);

    return {
        achievement,
        isShow
    }

}