export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">
              GitFlow TP
            </h1>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              À propos
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Démarrer
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
