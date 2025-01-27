import Dropdown from "../shared/Dropdown";

export default function Filter() {
    const months = ["ทั้งหมด", "มกราคม", "กุมภาพันธ์", "มีนาคม"];
    const years = [2024, 2025, 2026];

    function selectItemHandle(value) {
        console.log("------")
        console.log(value);
    }

    return (
        <div className="flex justify-end gap-5">
            <Dropdown items={months} onSelect={selectItemHandle} />
            <Dropdown items={years} onSelect={selectItemHandle} />
            <button>ค้นหา</button>
        </div>
    )
}