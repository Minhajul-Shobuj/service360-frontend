export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <img src="/logo.svg" alt="ProCleaning Logo"  /> */}
        <div>
          <h1 className="font-semibold text-lg text-black leading-none">
            Pro<span className="text-green-500">Cleaning</span>
          </h1>
          <p className="text-xs text-gray-500 leading-none">
            Cleaning Services company
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#" className="text-green-500">
          Home
        </a>
        <a href="#" className="hover:text-green-500">
          About us
        </a>
        <a href="#" className="hover:text-green-500">
          Service
        </a>
        <a href="#" className="hover:text-green-500">
          Blog
        </a>
        <a href="#" className="hover:text-green-500">
          Contact
        </a>
      </div>

      {/* Call to Action */}
      <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-medium">
        Get a quote
      </button>
    </nav>
  );
}
