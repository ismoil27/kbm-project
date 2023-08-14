import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { servicesData } from "@/data/services-data";
import Marquee from "react-fast-marquee";

export function Services() {
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/services_page.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-4xl font-black"
              >
                EXPECT SUPERIOR RECRUITMENT CYCLE
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Helping Professionals Shape Their Career Move
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className=" pb-20 pt-20">
        <div className="gap-15 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2">
          {servicesData.map(({ color, title, icon, description }) => (
            <FeatureCard
              key={title}
              color={color}
              title={title}
              icon={React.createElement(icon, {
                className: "w-5 h-5 text-white",
              })}
              description={description}
            />
          ))}
        </div>
      </section>

      <h1 className="mb-6 text-center text-4xl font-bold">Our Focus Sectors</h1>
      <div class="container relative m-auto mb-10 flex overflow-x-hidden">
        <Marquee>
          <span class="mx-10 text-2xl"> FINANCE AND ACCOUNTING</span>
          <span class="mx-10 text-2xl"> CORPORATE FUNCTIONS</span>
          <span class="mx-10 text-2xl"> MANUFACTURING & ENGINEERING</span>
          <span class="mx-10 text-2xl"> INFORMATION TECHNOLOGY</span>
          <span class="mx-10 text-2xl"> HEALTHCARE</span>
          <span class="mx-10 text-2xl"> SALES & MARKETING</span>
          <span class="mx-10 text-2xl"> SUPPLY CHAIN</span>
          <span class="mx-10 text-2xl"> HOSPITALITY</span>
          <span class="mx-10 text-2xl"> EDUCATION</span>
        </Marquee>
      </div>

      {/* ============== Section 1 ================= */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-44 flex flex-wrap items-center">
            <div className="mx-auto -mt-2 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <SparklesIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography className="mb-8 text-3xl font-normal text-blue-gray-500">
                Our search expertise and organizational consulting experience
                empower our clients to develop high-performing leaders, teams,
                and organizations not only in South Korea, but also in other
                regions.
              </Typography>
            </div>
            <div className="mx-auto mt-9 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardBody>
                  <video
                    autoPlay={true}
                    loop
                    muted
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/JS_Scouts_Forge_is_a_specialized_global_recruitment_firm_located.mp4?alt=media&token=4b6ce6ac-4e71-4d9e-9b79-2298c0dda58b"
                    }
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Section 2 ============= */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-36 flex flex-wrap items-center">
            <div className="mx-auto mt-9 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardBody>
                  <video
                    autoPlay={true}
                    loop
                    muted
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/video1.mp4?alt=media&token=05abdd65-0c7b-4e0c-b516-b4b53919cb01"
                    }
                  />
                </CardBody>
              </Card>
            </div>

            <div className="mx-auto -mt-2 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UserGroupIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography className="mb-8 text-3xl font-normal text-blue-gray-500">
                With its aim to become a pioneer in executive search, it is
                already on the track to lead the way by offering Permanent
                Placement service. For 5 years, we’ve helped various global
                companies and also local conglomerates.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      {/* ============ Section 3 ================ */}
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-36 flex flex-wrap items-center">
            <div className="mx-auto -mt-2 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <RocketLaunchIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography className="mb-8 text-3xl font-normal text-blue-gray-500">
                Our relationship-based approach lets us execute a search with
                uncommon speed, sophistication and precision. Through our
                tech-enabled assessments, we help clients shrink the haystack
                and find the right match. And after a successful placement, we
                offer clients the consultative expertise they need to thrive
                long-term.
              </Typography>
            </div>
            <div className="mx-auto mt-9 flex w-full justify-center px-4 md:w-5/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardBody>
                  <video
                    autoPlay={true}
                    loop
                    muted
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/client.mp4?alt=media&token=dc69e94b-cf9d-4ec8-8ded-ff07f243fe51"
                    }
                  />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default Services;
