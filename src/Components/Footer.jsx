import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 px-8 py-12 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo + Slogan */}
        <div>
            <h2 className="text-2xl font-bold text-blue-600">LearnMate</h2>
          <p className="text-sm">
            LearnMate — Empowering learners and educators through smart course management.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-blue-500 transition">Courses</a></li>
            <li><a href="/signup" className="hover:text-blue-500 transition">Sign Up</a></li>
          </ul>
        </div>

        {/* Column 3: Support & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-blue-500 transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact</a></li>
            <li><a href="/help" className="hover:text-blue-500 transition">Help Center</a></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} LearnMate. All rights reserved.
      </div>
    </footer>
  );
}
