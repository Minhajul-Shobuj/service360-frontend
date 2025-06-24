import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F16] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + About */}
        <div>
          <div className="text-white text-xl font-bold flex items-center gap-2 mb-4">
            <span className="text-green-500">Pro</span>Cleaning
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Stay updated with our latest cleaning tips, service updates, and
            helpful articles on maintaining a spotless home.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">Our Team</Link>
            </li>
          </ul>
        </div>

        {/* Know More Links */}
        <div>
          <h4 className="font-semibold mb-3">Know More</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <input
            type="email"
            placeholder="Email Goes here"
            className="w-full mb-3 px-4 py-2 rounded-md bg-transparent border border-gray-500 text-sm placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-green-500 text-white px-5 py-2 rounded-md text-sm hover:bg-green-600 transition">
            Send
          </button>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 pt-6">
        2024 “Procleaning” All Rights Reserved
      </div>
    </footer>
  );
}
