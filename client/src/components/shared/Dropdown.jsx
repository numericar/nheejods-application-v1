import { useState } from "react";
import { FaSortDown } from "react-icons/fa";
export default function Dropdown(props) {
    const { items, onSelect } = props;

    if (!items || !Array.isArray(items)) {
        throw Error("items should be array");
    }

    const [isOpen, setIsOpen] = useState(false);
    const [selectedVal, setSelectedVal] = useState(items[0]);

    function openHandle() {
        const isOpenSwap = !isOpen;
        setIsOpen(isOpenSwap);
    }

    function selectValHandle(selectIndex) {
        setSelectedVal(items[selectIndex]);
        setIsOpen(false);
        onSelect(items[selectIndex]);
    }

    return (
        <div className="relative">
            <div
                className="border-solid border-gray-500 border-1 px-5 py-2 rounded-lg cursor-pointer bg-white flex justify-between"
                onClick={openHandle}
            >
                <span>{selectedVal}</span>
                <FaSortDown />
            </div>
            <div
                className={
                    "absolute bg-white w-full border-1 border-solid border-gray-500 rounded-lg overflow-hidden right-0 top-12" +
                    (isOpen ? "" : " hidden")
                }
            >
                {items && items.map((value, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:bg-gray-200 px-5 py-2"
                        onClick={() => selectValHandle(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}
