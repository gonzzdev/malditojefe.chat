import EmptyAchievementComponent from "@/components/achievements/EmptyAchievement";
import AchievementComponent from "@/components/achievements/Achievement";

export default function ColletionPage(){
    return (
        <main className="h-screen w-screen grid grid-cols-4">
                <EmptyAchievementComponent />
                <AchievementComponent />
        </main>
    );
}