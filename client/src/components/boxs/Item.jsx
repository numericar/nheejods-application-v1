import { FaCircle } from "react-icons/fa"
import RickLevel from "./RickLevel";

export default function Item({ boxItem }) {
    return (
        <div className="
            border-solid 
            border-1 
            border-gray-500 
            p-3 
            rounded-lg 
            flex 
            flex-col 
            items-center 
            gap-3 
            cursor-pointer 
            hover:bg-linear-to-r 
            hover:from-orange-400/10 
            hover:to-blue-500/10">
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
            <div className="w-40 mx-auto">
                <RickLevel level={3} />
                <p className="text-center font-bold text-2xl mt-3">30.00%</p>
            </div>
        </div>
    )
}