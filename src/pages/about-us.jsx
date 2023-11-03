import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import {
  CheckCircleTwoTone,
  TrophyTwoTone,
  CompassTwoTone,
  BulbTwoTone,
} from "@ant-design/icons";

export function AboutUs() {
  return (
    <>
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

      {/* ========== Section 1 ============= */}
      <section className="mb-20 mt-20">
        <div className="flex justify-between px-32">
          <div className="mr-20">
            <img
              src="/roofPics/roofing-professional-workers.jpg"
              alt=""
              className="about_page_img"
            />
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
                </div>
                <div>
                  <div className="flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p>Satisfied Guaranteed</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="mb-4 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p>Precise Builder</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p>Excellence Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <h1 className="mt-2 text-center text-4xl font-bold">Core Values</h1>
        <p className="m-auto mt-4 w-6/12 text-center text-gray-400">
          We believe in open and honest communication. You can trust us to
          provide accurate information, fair pricing, and a commitment to
          integrity in every interaction.
        </p>

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
          </div>
        </div>
      </section>

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
        </div>
      </section>

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
