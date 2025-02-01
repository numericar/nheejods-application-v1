import SummaryFinancial from "../components/shared/SummaryFinancial";
import Filter from "../components/boxs/Filter";
import Item from "../components/boxs/Item";
import { useDispatch, useSelector } from "react-redux";

export default function Boxs() {
    const dispatch = useDispatch();

    const boxs = useSelector((state) => state.box.boxs);

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
