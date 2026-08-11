import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { PageHero, Reveal } from "@/widgets/ui";
import { site } from "@/data/site";
import { useLang } from "@/i18n";

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

export function Contact() {
  const { t } = useLang();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const details = [
    { icon: MapPinIcon, label: t.contact.details.address, value: t.contact.details.addressValue },
    { icon: PhoneIcon, label: t.contact.details.call, value: site.phone, href: site.phoneHref },
    { icon: EnvelopeIcon, label: t.contact.details.email, value: site.email, href: site.emailHref },
    { icon: ClockIcon, label: t.contact.details.hours, value: t.contact.details.hoursValue },
  ];

  const fields = [
    { name: "name", label: t.contact.form.name, type: "text", autoComplete: "name" },
    { name: "email", label: t.contact.form.email, type: "email", autoComplete: "email" },
    { name: "phone", label: t.contact.form.phone, type: "tel", autoComplete: "tel" },
    { name: "subject", label: t.contact.form.subject, type: "text" },
  ];

  const validate = (v) => {
    const e = {};
    const msg = t.contact.form.errors;
    if (!v.name.trim()) e.name = msg.name;
    if (!v.email.trim()) e.email = msg.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = msg.emailInvalid;
    if (!v.subject.trim()) e.subject = msg.subject;
    if (!v.message.trim()) e.message = msg.message;
    return e;
  };

  const update = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(emptyForm);
    }
  };

  const inputClass = (name) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-ink transition placeholder:text-steel-400 focus:outline-none focus:ring-2 ${
      errors[name]
        ? "border-brand-400 focus:ring-brand-200"
        : "border-steel-200 focus:border-steel-400 focus:ring-steel-200"
    }`;

  return (
    <>
      <PageHero
        image="/img/heroes/hero-contact.jpg"
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.lede}
      />

      <section className="py-16 sm:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          {/* Details */}
          <div className="min-w-0">
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.contact.intro.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.contact.intro.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-5">{t.contact.intro.body}</p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {details.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal
                  key={label}
                  delay={i * 80}
                  className="flex items-start gap-4 rounded-2xl border border-steel-200 bg-white p-5 transition duration-300 hover:border-brand-200 hover:shadow-lg"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-steel-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block break-all font-semibold text-ink transition-colors hover:text-brand-500"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words font-semibold text-ink">{value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal
            delay={120}
            className="min-w-0 rounded-3xl border border-steel-200 bg-white p-6 shadow-[0_32px_90px_-40px_rgba(10,15,28,0.4)] sm:p-9"
          >
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <CheckCircleIcon className="h-9 w-9" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">
                  {t.contact.form.success.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel-500">
                  {t.contact.form.success.body}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-steel-200 px-6 py-3 text-sm font-semibold text-ink transition hover:border-steel-400"
                >
                  {t.contact.form.success.again}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3 className="font-display text-xl font-bold text-ink">
                  {t.contact.form.title}
                </h3>
                <p className="mt-1.5 text-sm text-steel-500">{t.contact.form.subtitle}</p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={field.name === "subject" ? "sm:col-span-2" : ""}
                    >
                      <label
                        htmlFor={field.name}
                        className="mb-1.5 block text-sm font-medium text-steel-700"
                      >
                        {field.label}
                        {field.name !== "phone" && <span className="text-brand-500"> *</span>}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        value={values[field.name]}
                        onChange={update(field.name)}
                        aria-invalid={Boolean(errors[field.name])}
                        aria-describedby={
                          errors[field.name] ? `${field.name}-error` : undefined
                        }
                        className={inputClass(field.name)}
                      />
                      {errors[field.name] && (
                        <p id={`${field.name}-error`} className="mt-1.5 text-xs text-brand-600">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-steel-700"
                    >
                      {t.contact.form.message}
                      <span className="text-brand-500"> *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={update("message")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${inputClass("message")} resize-y`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-brand-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition duration-300 hover:bg-brand-600 sm:w-auto"
                >
                  {t.contact.form.submit}
                  <PaperAirplaneIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;
