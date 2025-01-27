import Logo from "../components/shared/Logo";

export default function Login() {
    return (
        <div className="container mx-auto h-[calc(100vh-60px)]">
            <div className="flex justify-center items-center h-full text-gray-600">
                <div className="w-1/3">
                    <h1 className="text-center mb-5 font-bold text-2xl">เข้าสู่ระบบ<Logo /></h1>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label className="block mb-1 font-bold">อีเมล</label>
                            <input 
                                type="email" 
                                className="border-solid border-1 border-gray-400 p-2 rounded-lg w-full outline-none" />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold">รหัสผ่าน</label>
                            <input 
                                type="password" 
                                className="border-solid border-1 border-gray-400 p-2 rounded-lg w-full outline-none" />
                        </div>
                        <button className="bg-orange-400 py-2 text-white rounded-lg mt-10 transition-all cursor-pointer hover:bg-orange-300">เข้าสู่ระบบ</button>
                        <span>
                            ยังไม่มีบัญชีผู้ใช้ ? มา <span className="text-blue-500 font-bold transition-all hover:text-blue-400">สมัครสมาชิก</span> กัน
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}
