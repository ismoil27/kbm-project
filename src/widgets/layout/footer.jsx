import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { products } from "@/data/products-data";
import { site } from "@/data/site";
import { useLang } from "@/i18n";

const year = new Date().getFullYear();

const socials = [
  { name: "linkedin", label: "LinkedIn" },
  { name: "instagram", label: "Instagram" },
  { name: "youtube", label: "YouTube" },
];

export function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.about, to: "/about-us" },
    { label: t.nav.projects, to: "/projects" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer className="bg-ink text-steel-300">
      <div className="shell py-16 sm:py-20">
        {/* Centred while stacked, reverting to columns from lg up. */}
        <div className="grid gap-12 text-center md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10 lg:text-left">
          <div className="md:col-span-2 lg:col-span-1">
            <img
              src={site.logo}
              alt={site.legalName}
              className="mx-auto h-24 w-auto object-contain lg:mx-0"
            />
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-steel-200 lg:mx-0">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex justify-center gap-3 lg:justify-start">
              {socials.map(({ name, label }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-steel-300 transition duration-300 hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <i className={`fa-brands fa-${name}`} />
                </a>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex justify-around">
            <div className="mr-28">
              <p className="mb-3 text-xl font-bold text-white">Contact Info</p>
              <p className="text_color">South Korea</p>
              <p className="text_color">07075438180</p>
              <p className="text_color">koreabuildingmaterials@gmail.com</p>
            </div>
            <div className="mr-28">
              <p className="mb-3 text-xl font-bold text-white">Quick Links</p>
              <a href="">
                <p className="text_color">
                  <a href="/">Home</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/about-us">About Us</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/products/urenthane-panel">Products</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/projects">Projects</a>
                </p>
              </a>
              <a href="">
                <p className="text_color">
                  <a href="/contact">Contact Us</a>
                </p>
              </a>
            </div>
            <div>
              <p className="mb-3 text-xl font-bold text-white">Our Service</p>
              <a href="">
                <p className="text_color">Commercial Roofing</p>
              </a>
              <a href="">
                <p className="text_color">Residential Roofing</p>
              </a>
              <a href="">
                <p className="text_color">After Storm Damage</p>
              </a>
              <a href="">
                <p className="text_color">Finance & Insurance</p>
              </a>
            </div>
=======

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-steel-200 transition-colors hover:text-brand-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.products}
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={product.path}
                    className="text-steel-200 transition-colors hover:text-brand-400"
                  >
                    {t.products[product.slug].shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex justify-center gap-3 lg:justify-start">
                <MapPinIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-steel-200">{t.contact.details.addressValue}</span>
              </li>
              <li className="flex justify-center gap-3 lg:justify-start">
                <PhoneIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={site.phoneHref}
                  className="text-steel-200 transition-colors hover:text-brand-400"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex justify-center gap-3 lg:justify-start">
                <EnvelopeIcon className="h-5 w-5 shrink-0 text-brand-500" />
                <a
                  href={site.emailHref}
                  className="break-all text-steel-200 transition-colors hover:text-brand-400"
                >
                  {site.email}
                </a>
              </li>
            </ul>
>>>>>>> origin
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-steel-400">
            {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
