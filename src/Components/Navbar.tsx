import { useState, type JSX } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  label: string;
  href?: string; // in-page anchor (e.g. "#space-hire") on the same page
  path?: string; // separate route (e.g. "/Contact-Us") via react-router
  children?: NavLink[]; // dropdown sub-links (parent itself is not clickable)
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  {
    label: "Space Hire",
    children: [
      { label: "Business & Meeting Room Space", path: "/Business-Meeting-Room" },
      { label: "Workshop and Classes", path: "/Workshop-and-Classes" },
      { label: "Functions & Events Space", path: "/Functions-and-Events" },
      { label: "Hens", path: "/Hens" },
    ],
  },
  { label: "Classes with Glasses", path: "/Classes-with-Glasses" },
  { label: "Contact Us", path: "/Contact-Us" },
];

// Replace with your hosted logo URL (e.g. from your CDN, S3, Cloudinary, etc.)
const LOGO_URL: string =
  "https://res.cloudinary.com/dquki4xol/image/upload/v1783426287/d4a01a430831011737c7fb48582955b98a541eb3_sec1z3.png";

function NavItem({
  link,
  active,
  onClick,
}: {
  link: NavLink;
  active: boolean;
  onClick?: () => void;
}) {
  const className = `text-[15px] font-medium transition-colors hover:text-[#F5A25D] ${
    active ? "text-[#F5A25D]" : "text-[#1E2A4A]"
  }`;

  if (link.path) {
    return (
      <Link to={link.path} onClick={onClick} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  );
}

// Desktop dropdown for links that have children (e.g. "Space Hire")
function NavDropdown({
  link,
  active,
  isChildActive,
}: {
  link: NavLink;
  active: boolean;
  isChildActive: (child: NavLink) => boolean;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#F5A25D] ${
          active ? "text-[#F5A25D]" : "text-[#1E2A4A]"
        }`}
      >
        {link.label}
        <ChevronDown
          size={15}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Dropdown panel */}
      <div
        className="invisible absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-lg transition-all duration-200
        group-hover:visible group-hover:translate-y-2 group-hover:opacity-100"
      >
        {link.children?.map((child) => {
          const childActive = isChildActive(child);
          return (
            <Link
              key={child.label}
              to={child.path ?? "#"}
              className={`block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#F5A25D]/10 hover:text-[#F5A25D] ${
                childActive
                  ? "bg-[#F5A25D]/10 font-medium text-[#F5A25D]"
                  : "text-[#1E2A4A]"
              }`}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Mobile accordion for links that have children
function MobileNavDropdown({
  link,
  onNavigate,
  isChildActive,
  defaultOpen,
}: {
  link: NavLink;
  onNavigate: () => void;
  isChildActive: (child: NavLink) => boolean;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-[15px] font-medium text-[#1E2A4A]"
      >
        {link.label}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="mt-2 flex flex-col gap-3 pl-3">
          {link.children?.map((child) => {
            const childActive = isChildActive(child);
            return (
              <Link
                key={child.label}
                to={child.path ?? "#"}
                onClick={onNavigate}
                className={`text-sm transition-colors hover:text-[#F5A25D] ${
                  childActive ? "font-semibold text-[#F5A25D]" : "text-gray-600"
                }`}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const isPathActive = (path?: string): boolean => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  // Determine which nav link matches the current route.
  // "/" only counts as active on an exact match so it doesn't
  // stay highlighted once you've navigated to another page.
  const isActive = (link: NavLink): boolean => {
    if (link.children) {
      return link.children.some((child) => isPathActive(child.path));
    }
    return isPathActive(link.path);
  };

  const isChildActive = (child: NavLink): boolean => isPathActive(child.path);

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_URL}
            alt="Hustle Studios logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <NavDropdown
                key={link.label}
                link={link}
                active={isActive(link)}
                isChildActive={isChildActive}
              />
            ) : (
              <NavItem key={link.label} link={link} active={isActive(link)} />
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-[#1E2A4A] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-gray-100 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <MobileNavDropdown
                key={link.label}
                link={link}
                onNavigate={() => setOpen(false)}
                isChildActive={isChildActive}
                defaultOpen={isActive(link)}
              />
            ) : (
              <NavItem
                key={link.label}
                link={link}
                active={isActive(link)}
                onClick={() => setOpen(false)}
              />
            )
          )}
        </div>
      )}
    </header>
  );
}