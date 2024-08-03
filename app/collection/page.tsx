import {obtenerData} from "@/data/achievement";
import {ContentCollection} from "@/components/collection/content-collection";

export default function ColletionPage() {
    const allAchievements = obtenerData()
    return (
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center container py-6">
            {allAchievements.map(achievement =>
                <ContentCollection key={achievement.id} achievement={achievement}/>
            )}
        </main>
    );
}