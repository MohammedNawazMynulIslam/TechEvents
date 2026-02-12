import Link from "next/link";
import SignOut from "./auth/SignOut";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(10, 10, 15, 0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    }}>
      <div className="container flex justify-between items-center py-4 px-6">
        <div className="nav-brand">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold gradient-text tracking-tight">
              Eventry
            </span>
          </Link>
        </div>

        <ul className="flex items-center gap-6">
          <li>
            <SignOut />
          </li>
          <li>
            <span className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 cursor-pointer relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </li>
          <li>
            <span className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 cursor-pointer relative group">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
