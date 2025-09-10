export const Footer = () => {
  return (
    <footer className="bg-[#001219] rounded-3xl p-8 text-center space-y-3">
      {/* Name with sparkle emoji ✨ */}
      <p className="text-[#e9d8a6] font-semibold text-lg flex items-center justify-center gap-2">
        ✨ Abhijith Suresh Kumar
      </p>

      {/* Email with mail emoji 📩 */}
      <p className="text-[#e9d8a6] flex items-center justify-center gap-2">
        <span>📩</span>
        <a
          href="mailto:abhijithsuresh08@gmail.com"
          className="hover:text-primary transition-colors"
        >
          abhijithsuresh08@gmail.com
        </a>
      </p>

      {/* Extra touch: copyright */}
      <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Abhijith Suresh Kumar. All rights reserved.
      </p>
    </footer>
  );
};
