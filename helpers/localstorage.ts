'use client'

import {Achievement} from "@/data/achievement";

const NAME_ACHIEVEMENT = "achiviements"

export const saveAchievement = (achievement: Achievement) => {
    const achievementsItem = localStorage.getItem(NAME_ACHIEVEMENT)
    if (achievementsItem) {
        const achievements = JSON.parse(achievementsItem) as Achievement[]
        const existAchievement = achievements.some(achi => achi.id === achievement.id)
        if (!existAchievement) {
            localStorage.setItem(NAME_ACHIEVEMENT, JSON.stringify([...achievements, achievement]));
        }
    }
    localStorage.setItem(NAME_ACHIEVEMENT, JSON.stringify([achievement]));
}

export const readAchievement = (): Achievement[] => {
    const achievementsItem = localStorage.getItem(NAME_ACHIEVEMENT)
    if (achievementsItem) {
        return JSON.parse(achievementsItem) as Achievement[]
    }
    return []
}