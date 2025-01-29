import { FaCircle } from "react-icons/fa"
import RickLevel from "./RickLevel";

export default function Item({ boxItem }) {
    return (
        <div className="border-solid border-1 border-gray-500 p-3 rounded-lg flex flex-col items-center gap-3 cursor-pointer hover:text-white hover:bg-linear-to-r hover:from-orange-400/70 hover:to-blue-500/70">
            <h1 className="font-bold text-lg">{boxItem.month}</h1>
            <div className="flex flex-col items-center">
                <span>ยอดคงเหลือ</span>
                <span className="font-bold text-2xl">{boxItem.remaining}</span>
            </div>
            <div className="flex justify-between w-50">
                <div className="flex items-center gap-2 text-green-600">
                    <FaCircle />
                    <span>{boxItem.incomeSummary}</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                    <FaCircle />
                    <span>{boxItem.expensesSummary}</span>
                </div>
            </div>
            <div>
                <RickLevel />
                <p className="text-center font-bold text-2xl">30.00%</p>
            </div>
        </div>
    )
}