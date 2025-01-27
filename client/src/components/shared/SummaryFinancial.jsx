export default function SummaryFinancial() {
    return (
        <diV>
            <h1 className="mb-2 font-bold">สรุปการเงิน</h1>
            <div className="flex gap-5">
                <div className="border-solid border-1 border-green-700 text-green-700 py-1 rounded-lg w-3/14 bg-green-100">
                    <div className="px-4">
                        <p>รายรับ</p>
                        <p className="text-3xl text-center">20,000</p>
                    </div>
                </div>
                <div className="border-solid border-1 border-red-700 text-red-700 py-1 rounded-lg w-3/14 bg-red-100">
                    <div className="px-4">
                        <p>รายจ่าย</p>
                        <p className="text-3xl text-center">10,000</p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-orange-400 text-white py-1 rounded-lg w-3/14 font-bold">
                    <div className="px-4">
                        <p>คงเหลือ</p>
                        <p className="text-3xl text-center">10,000</p>
                    </div>
                </div>
            </div>
        </diV>
    );
}
