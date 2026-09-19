
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-slate-600 font-sans my-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Brand Info (Left) */}
          <div className="md:col-span-5 space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-linear-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white text-xs tracking-wider shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Dev<span className="text-pink-500">Stack</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                GitHub
              </a>
              <a href="#" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                PRODUCT
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                COMPANY
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                LEGAL
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}