import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  TrophyIcon,
  LightBulbIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { PageHero, Reveal, SectionHeading, Counter } from "@/widgets/ui";
import { useLang } from "@/i18n";

const valueIcons = [TrophyIcon, LightBulbIcon, UserGroupIcon];
const milestoneValues = [2000, 2700, 5];
const milestoneSuffix = ["", "+", ""];

export function AboutUs() {
  const { t } = useLang();

  return (
    <>
<<<<<<< HEAD
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/roofPics/roofing_aboutus.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto mt-10 w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-6xl font-black"
              >
                About Us
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                A Legacy of Building Products - Serving Homes and Businesses
                with Trustworthy Product Solutions.
              </Typography>
            </div>
          </div>
        </div>
      </div>
=======
      <PageHero
        image="/img/heroes/hero-about.jpg"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.lede}
      />
>>>>>>> origin

      {/* Intro split */}
      <section className="py-16 sm:py-24">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="overflow-hidden rounded-3xl">
            <img
              src="/roofPics/roofing-professional-workers.jpg"
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-smooth hover:scale-105 lg:aspect-[4/5]"
            />
<<<<<<< HEAD
          </div>
          <div className="about_page_right">
            <h1 className="mb-6 text-4xl font-bold leading-10">
              Professional and Expert Building Products Company
            </h1>
            <p className="mb-6 leading-7 text-blue-gray-500">
              As a professional and expert building product company, we bring a
              wealth of experience and technical proficiency to every project.
              Our team of certified professionals is dedicated to delivering
              top-tier building solutions that prioritize quality and
              craftsmanship. With a commitment to staying at the forefront of
              industry advancements, we ensure that our clients benefit from the
              latest innovations and materials. When you choose us as your
              building company, you're not just investing in a service; you're
              investing in the peace of mind that comes from working with a true
              industry expert.
            </p>
            <div className="flex justify-between">
              <div>
                <div className="mb-4 flex items-center">
                  <CheckCircleTwoTone className="mr-4" />
                  <p>Certified Company</p>
=======
          </Reveal>

          <div>
            <Reveal className="eyebrow mb-4">
              <span className="h-px w-8 bg-brand-500" />
              {t.about.story.eyebrow}
            </Reveal>
            <Reveal delay={60}>
              <h2 className="heading-lg">{t.about.story.title}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lede mt-5">{t.about.story.body1}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="lede mt-4">{t.about.story.body2}</p>
            </Reveal>

            <Reveal delay={240} className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.story.assurances.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-steel-700">{item}</span>
>>>>>>> origin
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-y border-steel-200 bg-steel-50 py-14">
        <div className="shell grid gap-10 text-center sm:grid-cols-3">
          {t.about.milestones.map((item, i) => (
            <Reveal key={item.label} delay={i * 90}>
              <div className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
                {i === 0 ? (
                  milestoneValues[i]
                ) : (
                  <Counter to={milestoneValues[i]} suffix={milestoneSuffix[i]} />
                )}
              </div>
              <p className="mt-2 text-sm text-steel-500">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

<<<<<<< HEAD
        <div className="relative mt-10 flex h-[400px] flex-wrap justify-center p-6">
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
                Our certified professionals bring years of industry experience
                to ensure top-quality product solutions.
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
                Our commitment to exceptional workmanship and unwavering quality
                sets us apart in the building industry.
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
                Customer-Centric Approach:
              </p>
              <p className="mt-2">
                Your satisfaction is our driving force. We listen, understand,
                and tailor our services to meet your unique needs and exceed
                your expectations.
              </p>
            </div>
=======
      {/* Core values */}
      <section className="py-16 sm:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow={t.about.values.eyebrow}
            title={t.about.values.title}
            description={t.about.values.description}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.about.values.items.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 90}
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
>>>>>>> origin
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className=" relative mb-10 flex justify-center p-10 pt-0">
        <video
          width={"80%"}
          height={"400px"}
          autoPlay={true}
          muted
          loop
          src={"/videos/road.mp4"}
          className=""
        />
        <div className="bg_pic_logo_about"></div>
      </section>

      <section className="mt-18 flex flex-col bg-[#f3f3f3;] px-44 py-20">
        <div className="flex">
          <div className="mr-20 flex-[1_1_0%] text-3xl font-bold">
            Our Mission
          </div>
          <div className="w-64 flex-[3_3_0%] text-gray-600">
            At Korean Building Materials, our mission is to provide superior
            building solutions that not only protect your investments but also
            enhance the comfort and beauty of your spaces. We are driven by a
            dedication to quality, integrity, and customer satisfaction. Our
            goal is to be your trusted partner, offering expertise, reliability,
            and peace of mind for every project, whether big or small. We strive
            to build lasting relationships and roofs that stand the test of
            time, making your safety and satisfaction our ultimate priority.
          </div>
        </div>
        <div className="mt-20 flex">
          <div className="mr-20 flex-[1_1_0%] text-3xl font-bold">
            Our Vision
          </div>
          <div className="w-64 flex-[3_3_0%] text-gray-600">
            At Korean Building Materials, our vision is to be the leading
            building products company known for setting industry standards in
            innovation, sustainability, and customer-centric solutions. We
            aspire to create a world where every roof we touch not only protects
            but also inspires, adding value to the lives of those we serve. We
            envision a future where our commitment to excellence and
            environmental responsibility becomes a benchmark for the building
            industry. With unwavering dedication to quality, safety, and
            customer satisfaction, we aim to leave a legacy of trust,
            reliability, and roofs that stand the test of time.
          </div>
=======
      {/* Video */}
      <section className="pb-16 sm:pb-24">
        <div className="shell">
          <Reveal className="overflow-hidden rounded-3xl shadow-2xl shadow-ink/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="/videos/road.mp4"
              className="aspect-video w-full object-cover"
            />
          </Reveal>
>>>>>>> origin
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-steel-50 py-16 sm:py-24">
        <div className="shell space-y-12">
          {[t.about.mission, t.about.vision].map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="grid gap-4 border-t border-steel-300 pt-8 lg:grid-cols-[1fr_2.4fr] lg:gap-12"
            >
              <h2 className="heading-md">{item.title}</h2>
              <p className="lede">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="shell flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <h2 className="heading-md max-w-xl text-white">{t.about.cta.title}</h2>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-brand-600"
          >
            {t.about.cta.button}
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
