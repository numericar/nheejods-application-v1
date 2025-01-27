import SummaryFinancial from "../components/shared/SummaryFinancial";
import Filter from "../components/boxs/Filter";

export default function Boxs() {
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
            <p>Boxs Page</p>
        </div>
    );
}
