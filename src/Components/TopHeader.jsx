import logo from "../assets/logo.jpeg";
import bd_logo from "../assets/bd_logo.png";
const TopHeader = () => {
    return (
        <div className="w-full bg-gradient-to-b from-sky-100 to-white py-6 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Left Logo */}
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                    <img
                        src={logo}
                        alt="ASOK Logo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center Content */}
                <div className="text-center px-4">
                    <p className="text-lg font-bold text-blue-800">
                        আন্তর্জাতিক মানবাধিকার সংস্থা
                    </p>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-1">
                        আইন সহায়তা কেন্দ্র(আসক) ফাউন্ডেশন
                    </h1>

                    <p className="text-lg font-semibold text-blue-700 mt-2">
                        International Human Rights
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-sky-700 mt-1">
                        Ain Shohaota Kendra(ASOK) Foundation
                    </h2>

                    <p className="text-sm text-gray-700 mt-2">
                        Approved by the Govt. of the People’s Re-public of Bangladesh
                    </p>

                    <span className="inline-block mt-3 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded">
                        Gov. Reg No. - SSO 3576/1996
                    </span>
                        
                    <span className="inline-block ml-3 mt-3 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded">
                        Gov. Reg No. - S-9417/2009
                    </span>
                </div>

                {/* Right Logo */}
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                    <div className="">
                        <img
                            src={bd_logo}
                            alt="bd Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopHeader;
