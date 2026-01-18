import logo from "../assets/logo.jpeg";
import bd_logo from "../assets/bd_logo.png";

const TopHeader = () => {
    return (
        <div className="w-full bg-gradient-to-b from-sky-100 to-white py-4 md:py-6 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-center space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                            <img src={logo} alt="ASOK Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                            <img src={bd_logo} alt="BD Logo" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-sm font-bold text-blue-800">আন্তর্জাতিক মানবাধিকার সংস্থা</p>
                        <h1 className="text-lg font-extrabold text-blue-900 mt-1">আইন সহায়তা কেন্দ্র(আসক) ফাউন্ডেশন</h1>
                        <p className="text-sm font-semibold text-blue-700 mt-1">International Human Rights</p>
                        <h2 className="text-base font-bold text-sky-700 mt-1">Ain Shohaota Kendra(ASOK) Foundation</h2>
                        <p className="text-xs text-gray-700 mt-1">Approved by the Govt. of the People's Re-public of Bangladesh</p>
                        <div className="flex flex-col space-y-2 mt-2">
                            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">Gov. Reg No. - SSO 3576/1996</span>
                            <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">Gov. Reg No. - S-9417/2009</span>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between">
                    {/* Left Logo */}
                    <div className="w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                        <img src={logo} alt="ASOK Logo" className="w-full h-full object-cover" />
                    </div>

                    {/* Center Content */}
                    <div className="text-center px-4 flex-1">
                        <p className="text-sm lg:text-lg font-bold text-blue-800">আন্তর্জাতিক মানবাধিকার সংস্থা</p>
                        <h1 className="text-xl lg:text-3xl xl:text-4xl font-extrabold text-blue-900 mt-1">আইন সহায়তা কেন্দ্র(আসক) ফাউন্ডেশন</h1>
                        <p className="text-sm lg:text-lg font-semibold text-blue-700 mt-2">International Human Rights</p>
                        <h2 className="text-base lg:text-xl xl:text-2xl font-bold text-sky-700 mt-1">Ain Shohaota Kendra(ASOK) Foundation</h2>
                        <p className="text-xs lg:text-sm text-gray-700 mt-2">Approved by the Govt. of the People's Re-public of Bangladesh</p>
                        <div className="flex flex-wrap justify-center gap-2 mt-3">
                            <span className="bg-red-600 text-white text-xs lg:text-sm font-bold px-3 lg:px-4 py-1 rounded">Gov. Reg No. - SSO 3576/1996</span>
                            <span className="bg-red-600 text-white text-xs lg:text-sm font-bold px-3 lg:px-4 py-1 rounded">Gov. Reg No. - S-9417/2009</span>
                        </div>
                    </div>

                    {/* Right Logo */}
                    <div className="w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                        <img src={bd_logo} alt="BD Logo" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
