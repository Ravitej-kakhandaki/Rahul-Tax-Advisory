import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/results", label: "Results" },
  { to: "/audit", label: "Free Assessment" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#F9F6F0]/85 border-b border-[#1C3F39]/10" data-testid="site-header">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <Link to="/" className="flex items-baseline gap-2 group" data-testid="nav-logo">
          <span className="font-serif-display text-2xl md:text-[26px] text-[#1C3F39] tracking-tight">Rahul Tax Advisory</span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.25em] text-[#A85A46] font-sub">est. 2025</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-sub text-[13px] lg:text-[14px]">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `transition-colors whitespace-nowrap ${isActive ? "text-[#A85A46]" : "text-[#1C3F39] hover:text-[#A85A46]"}`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/portal" className="btn-ghost text-sm" data-testid="nav-portal">Client Portal</Link>
              <button onClick={onLogout} className="text-sm font-sub text-[#1C3F39]/70 hover:text-[#A85A46] whitespace-nowrap" data-testid="nav-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-sub text-[#1C3F39] hover:text-[#A85A46] whitespace-nowrap" data-testid="nav-login">Sign in</Link>
              <Link to="/book" className="btn-primary text-[13px] lg:text-sm whitespace-nowrap" data-testid="nav-book">
                Book CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden p-2 text-[#1C3F39]" onClick={() => setOpen((s) => !s)} aria-label="menu" data-testid="nav-menu-toggle">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1C3F39]/10 bg-[#F9F6F0]" data-testid="mobile-menu">
          <div className="flex flex-col px-6 py-6 gap-4 font-sub">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-[#1C3F39] text-lg" data-testid={`mnav-${n.label.toLowerCase()}`}>
                {n.label}
              </NavLink>
            ))}
            {user ? (
              <>
                <Link to="/portal" onClick={() => setOpen(false)} className="btn-ghost justify-center" data-testid="mnav-portal">Client Portal</Link>
                <button onClick={onLogout} className="text-left text-[#A85A46]" data-testid="mnav-logout">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="text-[#1C3F39]" data-testid="mnav-login">Sign in</Link>
                <Link to="/book" onClick={() => setOpen(false)} className="btn-primary justify-center" data-testid="mnav-book">Book a CPA Growth Call</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1C3F39] text-[#F9F6F0] mt-20" data-testid="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="kicker text-[#E2B8A9]">Rahul Tax Advisory</p>
            <h3 className="font-serif-display text-4xl md:text-5xl leading-tight mt-4">
              Let's scale your tax practice — without scaling the overhead.
            </h3>
            <Link to="/book" className="btn-terra mt-8" data-testid="footer-book">
              Book a free 30-min CPA Growth Call <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 font-sub text-sm">
            <div>
              <p className="text-[#E2B8A9] uppercase text-[11px] tracking-[0.22em] mb-4">Services</p>
              <ul className="space-y-2 text-[#F9F6F0]/85">
                <li><Link to="/services">Tax Preparation</Link></li>
                <li><Link to="/services">Tax Planning</Link></li>
                <li><Link to="/services">Bookkeeping</Link></li>
                <li><Link to="/services">CPA Outsourcing</Link></li>
                <li><Link to="/services">Notice Resolution</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[#E2B8A9] uppercase text-[11px] tracking-[0.22em] mb-4">Firm</p>
              <ul className="space-y-2 text-[#F9F6F0]/85">
                <li><Link to="/about">About Rahul</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/audit">Free Capacity Assessment</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login">Client Portal</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[#E2B8A9] uppercase text-[11px] tracking-[0.22em] mb-4">Contact</p>
              <ul className="space-y-2 text-[#F9F6F0]/85">
                <li>rahul@rahultaxadvisory.com</li>
                <li>Mon–Fri · 9am–7pm IST</li>
                <li>Serving CPA firms across US</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[#F9F6F0]/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#F9F6F0]/55 font-sub">
          <p>© {new Date().getFullYear()} Rahul Tax Advisory. All rights reserved.</p>
          <p>This site provides general information only and does not constitute tax, legal, or accounting advice.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
