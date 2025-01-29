export default function RickLevel({ level }) {
    if (level < 1 || level > 4) {
        throw Error("Level should between 1 - 4");
    }

    function levelConditionDisplay(reqLevel) {
        return level >= reqLevel;
    }

    return (
        <diV className="grid grid-cols-4 gap-2">
            { levelConditionDisplay(1) ? <div className="h-[0.4rem] bg-green-500"></div> : <div className="h-[0.4rem] bg-gray-400"></div> }
            { levelConditionDisplay(2) ? <div className="h-[0.4rem] bg-yellow-500"></div> : <div className="h-[0.4rem] bg-gray-400"></div> }
            { levelConditionDisplay(3) ? <div className="h-[0.4rem] bg-red-500"></div> : <div className="h-[0.4rem] bg-gray-400"></div> }
            { levelConditionDisplay(4) ? <div className="h-[0.4rem] bg-red-900"></div> : <div className="h-[0.4rem] bg-gray-400"></div> }
        </diV>
    )
}