import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
  ];

  const dropdownLinks = [
    { name: "Home", href: "#" },
    { name: "Case Study", href: "#case-study" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "404", href: "#404" },
  ];

  return (
    <header className="relative bg-[#f3f3f3] text-[#222222]">
      <nav
        className="relative mx-auto flex h-[77px] items-center px-5"
        aria-label="Main"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          aria-label="Home"
          className="flex shrink-0 items-center gap-[14px]"
        >
          <svg
            viewBox="0 0 44 44"
            fill="black"
            className="h-11 w-11 shrink-0"
            aria-hidden="true"
          >
            <circle cx="10" cy="19" r="8" />
            <path d="M24 3c10 0 17 6 17 16H24z" />
            <path d="M17 29c0-6 5-8 11-6h13c0 11-7 19-17 19-5 0-7-6-7-13z" />
            <circle cx="12" cy="33" r="4" />
          </svg>

          <span className="text-[28px] font-light italic tracking-[-0.02em]">
            Finox
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="ml-auto flex h-[42px] w-[42px] flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-[#222] transition-all duration-300 ${
              menuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#222] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[#222] transition-all duration-300 ${
              menuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Navigation Menu */}
        <div
          className={`
            absolute left-0 right-0 top-full z-50
            flex-col items-start gap-5 border-t border-[#ddd]
            bg-[#f3f3f3] px-5 pb-6 pt-4
            md:static md:ml-0 md:flex md:flex-1 md:flex-row
            md:items-center md:gap-0 md:border-0 md:bg-transparent
            md:p-0
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          {/* Navigation Links */}
          <ul className="flex w-full flex-col items-start gap-[18px] md:ml-10 md:w-auto md:flex-row md:items-center md:gap-[42px] lg:ml-78">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[17px] font-normal text-[#2b2b2b] transition-opacity hover:opacity-60"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Dropdown */}
            <li className="relative w-full md:w-auto">
              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className="relative"
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={dropdownOpen}
                  className="flex items-center gap-2.5 text-[17px] text-[#2b2b2b] transition-opacity hover:opacity-60"
                >
                  Pages
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-[14px] w-[14px] transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M2 4.5l5 5 5-5" />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full z-50">
                    {/* Your dropdown menu items */}
                  </div>
                )}
              </div>

              <ul
                className={`
                  mt-2 min-w-[180px] rounded-xl bg-white p-1.5
                  md:absolute md:left-[-16px] md:top-[calc(100%+14px)]
                  md:z-50 md:mt-0 md:border md:border-[#ddd]
                  md:shadow-[0_10px_30px_#0000001a]
                  ${dropdownOpen ? "block" : "hidden"}
                `}
              >
                {dropdownLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-[9px] text-[15px] transition-colors hover:bg-[#e8e8e8]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(2).map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[17px] font-normal text-[#2b2b2b] transition-opacity hover:opacity-60"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="md:ml-96  ">
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-2 border-b-[1.5px] border-[#222] pb-[1px] text-[18px] leading-tight transition-opacity hover:opacity-70"
            >
              Book A Call
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-0.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path d="M3 13L13 3M5 3h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
