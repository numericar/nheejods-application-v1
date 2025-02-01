import { useParams } from "react-router-dom"
import SummaryFinancial from "../components/shared/SummaryFinancial";
import ItemTable from "../components/transaction/ItemTable";
import itemTableConfig from "../configs/ItemTableConfig";
import { useSelector, useDispatch } from "react-redux";
import { getBoxById } from "../reducers/boxSlice";
import { useEffect } from "react";

export default function Transaction() {
    const dispatch = useDispatch();

    const { boxId } = useParams();
    const box = useSelector((state) => state.box.boxSelected);

    useEffect(() => {
        console.log(box);
    }, [box]);

    dispatch(getBoxById(boxId));

    return (
        <div className="container mx-auto">
            <div className="mt-5">
                <SummaryFinancial />
            </div>
            <hr className="my-5 text-gray-400" />
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <p>รายการรายรับ</p>
                    <ItemTable tableType={itemTableConfig.EXPENSE} /> 
                </div>
                <div>
                    <p>รายการรายจ่าย</p>
                    <ItemTable tableType={itemTableConfig.INCOME} /> 
                </div>
            </div>
        </div>
    )
}