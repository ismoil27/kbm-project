<<<<<<< HEAD
import { Input, Textarea, Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
=======
import React, { useState } from "react";
>>>>>>> origin
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

<<<<<<< HEAD
export const Contact = () => {
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/contac_us.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto mt-10 w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-6xl font-black"
              >
                Contact Us
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We're just a message away. Reach out to us for all your building
                inquiries, and we'll promptly respond to assist you. Your
                building project is important to us, and we're here to make it a
                reality.
              </Typography>
=======
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
>>>>>>> origin
            </div>
          </div>

<<<<<<< HEAD
      <section className="mb-20 mt-20 flex justify-center">
        <div className="flex justify-center">
          <div className="mr-20">
            <p className="text-6xl font-bold">
              Get in Touch with <br /> Our Building Products
              <br />
              Experts
            </p>
            {/* <p className="mt-6 w-[500px] text-gray-600">
              Condimentum ultrices vitae dictumst augue id porta sed accumsan ut
              amet varius nibh neque faucibus iaculis interdum erat eget.
            </p> */}
            <br />
            <p className="w-[500px] text-gray-500">
              Our team is ready to assist you with your building needs. If you
              have questions, need a quote, or want to discuss a project, please
              don't hesitate to reach out. We look forward to hearing from you
              and helping you with your building requirements.
            </p>

            <div className="mt-10 flex items-center pl-10">
              <EnvironmentTwoTone
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Address
                </p>
                <p className="text-gray-600">South Korea</p>
              </div>
            </div>

            <div className="mt-10 flex items-center pl-10">
              <PhoneTwoTone
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />

              <div className="mr-20">
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Call Us
                </p>
                <p className="text-gray-600">07075438180</p>
=======
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
>>>>>>> origin
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
<<<<<<< HEAD
                  Email Us
                </p>
                <p className="text-gray-600">
                  koreabuildingmaterials@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="contact_form flex-1">
            <div className="h-[630px] w-[600px] pl-10 pr-10 pt-10 ">
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Full name"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  type="email"
                  size="lg"
                  label="Active email"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Phone number"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Subject"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Textarea
                  size="lg"
                  label="Message*"
                  className="input_size h-[80px]"
                />
              </div>
              <Button color="secondary"> Send Request </Button>
            </div>
          </div>
=======
                  {t.contact.form.submit}
                  <PaperAirplaneIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
>>>>>>> origin
        </div>
      </section>
    </>
  );
}

export default Contact;
