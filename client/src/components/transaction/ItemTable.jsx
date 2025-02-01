import itemTableConfig from "../../configs/ItemTableConfig";

export default function ItemTable({ tableType }) {
    if (tableType !== itemTableConfig.INCOME && tableType !== itemTableConfig.EXPENSE) {
        throw new Error("Item table type not support");
    }

    const createItemButtonClasses = (tableType === itemTableConfig.EXPENSE) ? "bg-red-400 hover:bg-red-300" : "bg-green-500 hover:bg-green-400";

    return (
        <table className="table-auto border border-gray-300 w-full">
            <thead>
                <tr className="bg-gray-300">
                    <th className="text-start py-2 px-5 border border-gray-400">ชื่อ</th>
                    <th className="text-start py-2 px-5 border border-gray-400">จำนวนเงิน</th>
                    <th className="text-start py-2 px-5 border border-gray-400"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-gray-100">
                    <td className="border border-gray-400">
                        <input type="text" className="w-full py-2 px-5 outline-none" placeholder="ระบุชื่อรายการ..." />
                    </td>
                    <td className="border border-gray-400">
                        <input type="text" className="w-full py-2 px-5  outline-none" placeholder="ระบุจำนวนเงิน..." />
                    </td>
                    <td className="border border-gray-400">
                        <button className={`py-2 px-5 transition-all w-fulld cursor-pointer text-white ${createItemButtonClasses}`}>เพิ่ม</button>
                    </td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="py-2 px-5 border border-gray-400">Shopee</td>
                    <td className="py-2 px-5 border border-gray-400">2000</td>
                    <td className="py-2 px-5 border border-gray-400">dd</td>
                </tr>
            </tbody>
        </table>
    )
}