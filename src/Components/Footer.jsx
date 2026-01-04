export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#0A4D9C] via-[#0C6EDB] to-[#0A4D9C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Address */}
        <div>
          <div className="bg-white w-28 h-28 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-[#0A4D9C] font-extrabold text-3xl">AS</span>
          </div>

          <p className="text-sm leading-6 text-blue-100">
            <strong>Dhaka Office</strong><br />
            37/2, Fayena Tower (Lift-4)<br />
            4/A Calvert Road,<br />
            Purana Paltan, Dhaka-1000
          </p>

          <p className="mt-4 text-sm font-semibold text-blue-200">
            Technical Support
          </p>

          <div className="flex gap-2 mt-2">
            <div className="bg-white text-[#0A4D9C] px-2 py-1 text-xs rounded">
              a2i
            </div>
            <div className="bg-white text-[#0A4D9C] px-2 py-1 text-xs rounded">
              ICT
            </div>
            <div className="bg-white text-[#0A4D9C] px-2 py-1 text-xs rounded">
              UNDP
            </div>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Posts:</h3>

          <ul className="space-y-4 text-sm text-blue-100 leading-6">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Honorable Chairman's invitation to the Paris Marriott Charles de
              Gaulle Hotel!
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition">
              Invitation to Mr. Md. Shamsul Alam, Honorable Chairman of the Legal
              Aid Center and Human Rights Foundation, to the Paris Marriott
              Charles de Gaulle Hotel in Paris, France, from January 24–27!
            </li>
          </ul>
        </div>

        {/* Just for You */}
        <div>
          <h3 className="text-xl font-bold mb-4">Just for You:</h3>

          <ul className="space-y-4 text-sm text-blue-100 leading-6">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Honorable Chairman's invitation to the Paris Marriott Charles de
              Gaulle Hotel!
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition">
              Invitation to Mr. Md. Shamsul Alam, Honorable Chairman of the Legal
              Aid Center and Human Rights Foundation, to the Paris Marriott
              Charles de Gaulle Hotel in Paris, France, from January 24–27!
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <ul className="space-y-3 text-sm text-blue-100">
            <li>📞 +88 01552288823</li>
            <li>📞 +880 1618-541238</li>
            <li>✉️ asokbd24@gmail.com</li>
            <li>✉️ dailytathosangbad@gmail.com</li>
            <li>🌐 dailytathosangbad.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {["f", "📷", "▶", "💬"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-white text-[#0A4D9C] flex items-center justify-center rounded shadow hover:bg-yellow-300 transition cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-blue-100">
        © {new Date().getFullYear()} Ain Soheyata Kendro ASOK O Manabadhikar Foundation. All rights reserved.
      </div>
    </footer>
  );
}
