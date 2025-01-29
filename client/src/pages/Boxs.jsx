import SummaryFinancial from "../components/shared/SummaryFinancial";
import Filter from "../components/boxs/Filter";
import Item from "../components/boxs/Item";

export default function Boxs() {
    const boxs = [{
        boxId: 1,
        month: "มกราคม",
        remaining: 20000,
        incomeSummary: 30000,
        expensesSummary: 10000,
        rickLevel: 2,
        expensesPercen: 30
    },{
        boxId: 2,
        month: "กุมภาพันธ์",
        remaining: 20000,
        incomeSummary: 30000,
        expensesSummary: 10000,
        rickLevel: 2,
        expensesPercen: 30
    },{
        boxId: 3,
        month: "มีนาคม",
        remaining: 20000,
        incomeSummary: 30000,
        expensesSummary: 10000,
        rickLevel: 2,
        expensesPercen: 30
    },{
        boxId: 4,
        month: "เมษายน",
        remaining: 20000,
        incomeSummary: 30000,
        expensesSummary: 10000,
        rickLevel: 2,
        expensesPercen: 30
    }];

    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-between items-end">
                <div className="w-2/3">
                    <SummaryFinancial />
                </div>
                <div className="w-1/3">
                    <Filter />
                </div>
            </div>
            <hr className="my-5 text-gray-400" />
            <div className="grid grid-cols-4 gap-5 xl:grid-cols-5">
                {boxs && boxs.map((item) => (
                    <Item key={item.boxId} boxItem={item} />
                ))}
            </div>
        </div>
    );
}
