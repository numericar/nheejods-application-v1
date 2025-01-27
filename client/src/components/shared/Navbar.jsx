export default function Navbar() {
    return (
        <header>
            <nav className="bg-white w-screen h-15 shadow-lg">
                <div className="container mx-auto h-full flex justify-between items-center">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-end gap-3">
                            <h1 className="font-bold text-4xl">
                                <span className="text-orange-400">หนี้</span>
                                <span className="text-blue-500">จด</span>
                            </h1>
                            <span className="text-gray-500 text-[11px] mb-1">
                                DEVELOPMENT VERSION 1.0
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end gap-5 items-center w-1/2 h-full">
                        <a
                            href="#"
                            className="bg-orange-400 text-white w-1/4 text-center px-6 py-2 rounded-lg font-bold transition-all cursor-pointer hover:bg-orange-300"
                        >
                            เข้าสู่ระบบ
                        </a>
                        <a
                            href="#"
                            className="bg-blue-500 text-white w-1/4 text-center px-6 py-2 rounded-lg font-bold transition-all cursor-pointer hover:bg-blue-400"
                        >
                            สมัครสมาชิก
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
