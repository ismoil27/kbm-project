import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  ArrowRightIcon,
  PhoneIcon,
  ShieldCheckIcon,
  FireIcon,
  SparklesIcon,
  ClockIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Reveal, Counter, SectionHeading, HeroSlider } from "@/widgets/ui";
import { products } from "@/data/products-data";
import { site } from "@/data/site";
import { useLang } from "@/i18n";

const heroSlides = [
  "/img/heroes/hero-home-1.jpg",
  "/img/heroes/hero-home-2.jpg",
  "/img/heroes/hero-home-3.jpg",
];

const statValues = [1280, 1420, 20, 800];
const statSuffix = ["", "", "+", ""];

const whyIcons = [
  FireIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
];

export function Home() {
  const { t } = useLang();

  return (
    <>
<<<<<<< HEAD
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="blur-blackish absolute top-0 h-full w-full bg-[url('../../public/img/roof_home1.jpeg')] bg-cover bg-center" />

        <div className="absolute top-0 h-full w-full bg-cover bg-center " />
        <div className="max-w-8xl container relative mx-auto">
          <p className="mt-11 text-xl text-white">Your Best Partner</p>
          <h1 className="mt-4 w-3/5 text-7xl text-white">
            Leading Building Products in South Korea
          </h1>
          <p className="mt-10 w-3/5 text-lg text-white">
            Elevate your home's protection and curb appeal with our expert
            building products, ensuring your peace of mind under every weather
            condition.
          </p>
          <button
            onClick={() => navigate("/products/urenthane-panel")}
            className="mt-4 rounded-none border-2 p-4 px-8  text-white hover:bg-[#c95746]"
          >
            View our Products
          </button>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-14 w-full px-4 md:w-5/12">
              <h1 className="  mb-3  font-sans text-[45px]  font-bold">
                Your Hometown Building Products Provider
              </h1>
              <Typography className="mb-8  text-xl font-normal text-blue-gray-500">
                From residential roof repairs to commercial installations,
                Korean Building Materials is here to exceed your expectations.
                Explore our website to discover our portfolio of completed
                projects and to learn more about our services. Ready to get
                started? Contact us today for a free consultation and quote.
              </Typography>
              <PhoneTwoTone
                twoToneColor={"blue"}
                style={{
                  padding: "10px",
                  fontSize: "40px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                }}
              />

              <span className="mx-6 ">24/7 Contact Number.</span>
              <br />
              <span className="ms-20 font-bold text-[blue]">07075438180</span>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-7/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardBody>
                  <video
                    autoPlay={true}
                    loop
                    muted
                    src={"/videos/roofing2.mp4"}
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-2 flex justify-center">
        <div
          className="picture_img1 picture_img flex flex-col items-center p-10"
          style={{ width: "358px", height: "500px" }}
        >
          <p className="absolute left-10 z-10 mb-40 text-left text-2xl text-white">
            01.
          </p>
          <p className="z-10 mt-52 w-full text-3xl text-white">
            Commercial <br /> Building
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Transforming commercial roofs into assets of durability and
            dependability, one project at a time.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white hover:underline">
            <a href="/products/urenthane-panel">Learn More</a>
          </p>
          <div className="overlay_background"></div>
        </div>
        <div
          className="picture_img2 picture_img flex flex-col items-center p-10"
          style={{ width: "358px", height: "500px" }}
        >
          <p className="absolute left-10 z-10  mb-40 text-left text-2xl text-white">
            02.
          </p>

          <p className="z-10 mt-52 w-full text-3xl text-white">
            Residential <br /> Building
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Elevating residential roofs with skill, precision, and care,
            enhancing the safety and comfort of your home.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white hover:underline">
            <a href="/products/urenthane-panel">Learn More</a>
          </p>
          <div className="overlay_background"></div>
        </div>
        <div
          className="picture_img3 picture_img flex flex-col items-center p-10"
          style={{ width: "358px", height: "500px" }}
        >
          <p className="absolute left-10 z-10  text-left text-2xl text-white">
            03.
          </p>
          <p className="z-10 mt-52 w-full text-3xl text-white">
            After Storm <br /> Damage
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Restoring storm-damaged roofs to their former glory, ensuring safety
            and peace of mind for homeowners.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white hover:underline">
            <a href="/products/urenthane-panel">Learn More</a>
          </p>
          <div className="overlay_background"></div>
        </div>
        <div
          className="picture_img4 picture_img flex flex-col items-center p-10"
          style={{ width: "358px", height: "500px" }}
        >
          <p className="absolute left-10 z-10  text-left text-2xl text-white">
            04.
          </p>
          <p className="z-10 mt-52 w-full text-3xl text-white">
            Financing <br />
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Empowering your building dreams with flexible financing options for
            a secure and worry-free investment
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white hover:underline">
            <a href="/products/urenthane-panel">Learn More</a>
          </p>
          <div className="overlay_background"></div>
        </div>
      </div>

      <section className="mt-20">
        <img
          src="/roofPics/logo_red.png"
          alt=""
          style={{
            height: "40px",
            width: "40px",
            fontWeight: 600,
            margin: "auto",
          }}
        />
        <h1 className="mt-2 text-center text-4xl font-bold">Why Choose Us</h1>
        <p className="m-auto mt-4 w-6/12 text-center text-gray-400">
          We're not just your building experts; we're your partners in progress.
          Our commitment to excellence drives us to exceed your expectations.
        </p>

        <div className=" relative mt-10 flex h-[700px] flex-wrap justify-center p-6">
          <div className="flex flex-wrap justify-center">
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <TrophyTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Qualified Expert
              </p>
              <p className="mt-2">
                We turn your building dreams into a reality, one shingle at a
                time. Your satisfaction is our top priority, from the first nail
                to the final inspection.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <BulbTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Workmanship Quality
              </p>
              <p className="mt-2">
                With us, your project is not just a task, but a testament to our
                passion. Quality craftsmanship and customer satisfaction are our
                guiding stars.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <CompassTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Quality Professionals
              </p>
              <p className="mt-2">
                Trust in a team that's as committed to your vision as you are.
                When you choose us, you choose unwavering reliability and a
                promise of excellence.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <ClockCircleTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Flexible Schedule
              </p>
              <p className="mt-2">
                Your building needs, our unwavering commitment. We are always
                here to help you!
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <WalletTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Affordable Package
              </p>
              <p className="mt-2">
                Get the building you deserve at a price you can afford. Our
                competitive pricing ensures everyone can access top-notch
                building products.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <TagTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">Special Offer</p>
              <p className="mt-2">
                Affordability is our promise, satisfaction is our guarantee.
                Building products solutions that fit your budget without
                compromising on performance.
              </p>
            </div>
            <div className="bg_pic_logo"></div>
          </div>
        </div>
      </section>
      <section className="mt-52">
        <div class="mx-2.5 mb-40 flex justify-center">
          <div className="mx-20 flex  flex-col items-center leading-6">
            <h1 className="text-8xl font-bold ">
              <Number n={1280} />
            </h1>
            <span>Commercial Projects</span>
          </div>
=======
      {/* ============ Hero ============ */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden pb-20 pt-28 sm:min-h-[660px] sm:pb-24 sm:pt-32 lg:min-h-[88vh]">
        <HeroSlider images={heroSlides} />

        {/* Light overall tint keeps the photo obvious; the left-hand gradient
            does the heavy lifting only where the copy sits. */}
        <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/90 to-transparent"
          aria-hidden="true"
        />

        <div className="shell relative">
          <div className="max-w-2xl">
            <Reveal className="eyebrow mb-4 text-brand-400">
              <span className="h-px w-8 bg-brand-400" />
              {t.home.eyebrow}
            </Reveal>
>>>>>>> origin

            <Reveal delay={80}>
              <h1 className="text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
                {t.home.title}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base [text-shadow:0_2px_18px_rgba(10,15,28,0.75)]">
                {t.home.lede}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/products/urenthane-panel"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-500/25 transition duration-300 hover:bg-brand-600"
                >
                  {t.home.ctaPrimary}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-ink/60 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-ink/80"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {t.home.ctaSecondary}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ Stats ============ */}
      <section className="border-b border-steel-200 bg-white py-10 sm:py-12">
        <div className="shell grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {t.home.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70} className="text-center lg:text-left">
              <div className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
                <Counter to={statValues[i]} suffix={statSuffix[i]} />
              </div>
              <p className="mt-1 text-xs text-steel-500 sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ Capability marquee ============ */}
      <section className="border-b border-steel-200 bg-steel-50 py-5">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {t.home.capabilities.map((item) => (
            <span
              key={item}
              className="mx-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-steel-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============ Intro + video ============ */}
      <section className="py-20 sm:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.home.intro.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.home.intro.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-5">{t.home.intro.body}</p>
            </Reveal>

            <Reveal delay={180} className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.home.intro.points.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-steel-700">{item}</span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={240}>
              <a
                href={site.phoneHref}
                className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-steel-200 bg-white p-4 transition duration-300 hover:border-brand-300 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-steel-400">
                    {t.home.intro.phoneLabel}
                  </span>
                  <span className="block font-display text-lg font-bold text-ink">
                    {site.phone}
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120} className="overflow-hidden rounded-3xl shadow-2xl shadow-ink/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/roofing2.mp4"
              className="aspect-video h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ Products ============ */}
      <section className="bg-steel-50 py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.productsSection.eyebrow}
            title={t.home.productsSection.title}
            description={t.home.productsSection.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const copy = t.products[product.slug];
              return (
                <Reveal key={product.slug} delay={i * 80}>
                  <Link
                    to={product.path}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-steel-200 bg-white transition duration-500 ease-smooth hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-30px_rgba(10,15,28,0.4)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
                      <img
                        src={product.cover}
                        alt={copy.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-bold text-ink">{copy.name}</h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-500">
                        {copy.tagline}
                      </p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-500">
                        {copy.summary}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-brand-500">
                        {t.common.learnMore}
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ Why choose us ============ */}
      <section className="py-20 sm:py-28">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.why.eyebrow}
            title={t.home.why.title}
            description={t.home.why.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 70}
                  className="group rounded-2xl border border-steel-200 bg-white p-7 transition duration-500 ease-smooth hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_28px_70px_-32px_rgba(10,15,28,0.35)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-steel-50 text-brand-500 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-500">{item.body}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-[url('/img/heroes/hero-projects.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="shell relative text-center">
          <Reveal>
            <h2 className="heading-lg mx-auto max-w-2xl text-white">{t.home.cta.title}</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              {t.home.cta.body}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
              >
                {t.common.contactTeam}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
              >
                {t.common.seeProjects}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;
