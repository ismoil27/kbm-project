import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { products } from "@/data/products-data";
import { site } from "@/data/site";
import { useLang, LANGUAGES } from "@/i18n";

function Logo({ className = "h-14 sm:h-16" }) {
  return (
    <img
      src={site.logo}
      alt={site.legalName}
      className={`${className} w-auto object-contain`}
    />
  );
}

<<<<<<< HEAD
Navbar.defaultProps = {
  brandName: <img src="/roofPics/logo.png" alt="" className="logo_home" />,
  className: "text-xl",
  action: (
    <a href="/contact" target="">
      {/* <Button variant="gradient" size="sm" fullWidth>
        Send CV
      </Button> */}
    </a>
  ),
};
=======
function LangSwitch({ className = "" }) {
  const { lang, setLang } = useLang();
>>>>>>> origin

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-white/25 bg-white/10 p-0.5 backdrop-blur-sm ${className}`}
    >
      {LANGUAGES.map(({ code, label, name }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={name}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition duration-300 ${
            lang === code ? "bg-brand-500 text-white" : "text-white/70 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLang();

  const links = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about-us" },
    { label: t.nav.products, to: "/products/urenthane-panel", children: products },
    { label: t.nav.projects, to: "/projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onProducts = pathname.startsWith("/products");

  // Brand-coloured underline: active links keep it, others grow it on hover.
  const underline =
    "relative after:absolute after:inset-x-3 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-brand-500 after:transition-transform after:duration-300 after:ease-smooth";
  const bar = (active) => (active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100");
  const linkColor = (active) =>
    active ? "text-white" : "text-white/80 hover:text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? "border-b border-white/10 bg-ink/95 py-2 shadow-lg shadow-ink/20 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent py-3"
        }`}
      >
        <nav className="shell flex items-center justify-between gap-4">
          <Link to="/" aria-label={site.legalName}>
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) =>
              link.children ? (
                <li key={link.label} className="group relative">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold transition-colors ${underline} ${bar(
                      onProducts
                    )} ${linkColor(onProducts)}`}
                  >
                    {link.label}
                    <ChevronDownIcon className="h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 ease-smooth group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(10,15,28,0.4)]">
                      {link.children.map((product) => {
                        const copy = t.products[product.slug];
                        return (
                          <NavLink
                            key={product.slug}
                            to={product.path}
                            className={({ isActive }) =>
                              `block rounded-xl px-3 py-2.5 transition-colors ${
                                isActive ? "bg-brand-50" : "hover:bg-steel-50"
                              }`
                            }
                          >
                            <span className="block text-sm font-semibold text-ink">
                              {copy.name}
                            </span>
                            <span className="mt-0.5 block text-xs text-steel-400">
                              {copy.tagline}
                            </span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block px-3 py-2 text-sm font-semibold transition-colors ${underline} ${bar(
                        isActive
                      )} ${linkColor(isActive)}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <LangSwitch />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition duration-300 hover:bg-brand-600"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.nav.getQuote}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LangSwitch />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={mobileOpen}
              className="rounded-lg p-2 text-white"
            >
              <Bars3Icon className="h-7 w-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] overflow-hidden lg:hidden ${
          mobileOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white transition-transform duration-500 ease-smooth ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Dark strip so the white part of the logo stays readable */}
          <div className="flex items-center justify-between bg-ink px-5 py-4">
            <Logo className="h-12" />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label={t.nav.closeMenu}
              className="rounded-lg p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-steel-100">
                  <button
                    onClick={() => setProductsOpen((v) => !v)}
                    aria-expanded={productsOpen}
                    className="flex w-full items-center justify-between px-2 py-4 text-left text-base font-semibold text-ink"
                  >
                    {link.label}
                    <ChevronDownIcon
                      className={`h-5 w-5 text-steel-400 transition-transform duration-300 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-smooth ${
                      productsOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {link.children.map((product) => (
                        <NavLink
                          key={product.slug}
                          to={product.path}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-3 text-sm transition-colors ${
                              isActive
                                ? "bg-brand-50 font-semibold text-brand-600"
                                : "text-steel-600 hover:bg-steel-50"
                            }`
                          }
                        >
                          {t.products[product.slug].name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block border-b border-steel-100 px-2 py-4 text-base font-semibold transition-colors ${
                      isActive ? "text-brand-500" : "text-ink hover:text-brand-500"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          <div className="border-t border-steel-100 p-4">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
