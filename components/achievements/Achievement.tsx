export default function EmptyAchievementComponent() {
    return (
        <div className="bg-custom-gradient-achievement w-1/2 h-1/2 border-4 border-white rounded-2xl">
            <div className="w-full h-full flex justify-center items-center">
                <img src={"static/images/example.png"} width={100} height={0} alt={"wenas"}/>
            </div>
            <p className="text-center text-amber-400">
                La camiseta de la empresa
            </p>
        </div>
    );
}