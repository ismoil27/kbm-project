import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { CheckCircleTwoTone } from "@ant-design/icons";

export function Services() {
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/roofPics/services-page.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto mt-10 w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-6xl font-black"
              >
                Services
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                Sapien, eget egestas et sociis donec mauris nulla nisl hac
                ornare non pellentesque nunc, amet, elit tristique sit viverra
                risus ornare at nunc turpis.
              </Typography>
            </div>
          </div>
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
        <h1 className="mt-2 text-center text-4xl font-bold">
          Our Roofing Services
        </h1>
        <p className="m-auto mt-4 w-6/12 text-center text-gray-400">
          Ipsum ornare eu nibh sagittis nunc quisque viverra fringilla egestas
          dictumst nisl, vestibulum diam nisi suscipit eros, consectetur sapien
          nullam mi facilisis magna sem
        </p>

        <div className="relative mt-10 flex h-[400px] flex-wrap justify-center p-6">
          <div className="flex flex-wrap justify-center">
            <div className="box1 ">
              <div className="text-blue" style={{ color: "blue" }}>
                01.
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Roof Installation
              </p>
              <p className="mt-2">
                Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
                magna et dolor diam ultricies.
              </p>
            </div>
            <div className="box1 ">
              <div className="text-blue" style={{ color: "blue" }}>
                02.
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Roof Replacement
              </p>
              <p className="mt-2">
                Enim nec sed suspendisse tempus ultrices posuere elementum nulla
                viverra vel sed odio orci duis ipsum.
              </p>
            </div>
            <div className="box1 ">
              <div className="text-blue" style={{ color: "blue" }}>
                03.
              </div>
              <p className="mt-8 text-xl font-bold text-black">Roof Repair</p>
              <p className="mt-2">
                Sed elit auctor aenean ut arcu congue lacus quis viverra augue
                turpis vivamus in commodo dui.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-36">
        <div className="relative">
          <img
            src="/roofPics/services1.jpeg"
            className="services_pics"
            alt=""
          />
          <div className="pic_texts absolute z-10">
            <img
              src="/roofPics/logo_red.png"
              alt=""
              className="ml-16 mt-12 text-xl text-white"
              style={{
                height: "40px",
                width: "40px",
                fontWeight: 600,
              }}
            />
            <p className="mb-6 ml-16 mt-10 text-5xl text-white text-white">
              Commercial Roofing
            </p>
            <p className="ml-16 text-lg text-white">
              Vitae dictum tellus sed eu arcu amet tincidunt dignissim.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="mr-20 w-[40%] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </div>
          <div className="ml-10">
            <div className="flex justify-between">
              <div className="mr-36">
                <div className="mb-2 flex items-center">
                  <CheckCircleTwoTone className="mr-4" />
                  <p className="text-gray-600">Built-up Flat Roofing</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">EPDM Roofing</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">TPO Roofing</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center">
                  <CheckCircleTwoTone className="mr-4" />
                  <p className="text-gray-600">PVC Roofing</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Commercial Skylight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 px-36">
        <div className="relative">
          <img
            src="/roofPics/services2.jpeg"
            className="services_pics"
            alt=""
          />
          <div className="pic_texts absolute z-10">
            <img
              src="/roofPics/logo_red.png"
              alt=""
              className="ml-16 mt-12 text-xl text-white"
              style={{
                height: "40px",
                width: "40px",
                fontWeight: 600,
              }}
            />
            <p className="mb-6 ml-16 mt-10 text-5xl text-white text-white">
              Residential Roofing
            </p>
            <p className="ml-16 text-lg text-white">
              Vitae dictum tellus sed eu arcu amet tincidunt dignissim.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="mr-20 w-[40%] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </div>
          <div className="ml-10">
            <div className="flex justify-between">
              <div className="mr-36">
                <div className="mb-2 flex items-center">
                  <CheckCircleTwoTone className="mr-4" />
                  <p className="text-gray-600">Shingle Roofing</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Metal Roofing</p>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Tile Roofing</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Slate Roofing</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center">
                  <CheckCircleTwoTone className="mr-4" />
                  <p className="text-gray-600">Flat Roofing</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Wood Shake Roofing</p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Skylight Roofing</p>
                  </div>
                  <div className="mb-2 flex items-center">
                    <CheckCircleTwoTone className="mr-4" />
                    <p className="text-gray-600">Low Slope Roofing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-36 mt-40 px-36">
        <p className="mb-10 text-5xl">Our Working Process</p>
        <div className="flex">
          {/* ======= 1 ======== */}
          <div className="mr-6">
            <span className="service_line mr-6 flex items-center text-[#ff1a1a]">
              01.
            </span>
            <p className="mb-4 mt-6 text-2xl">Consultation</p>
            <span className="text-gray-600">
              Odio aliquet auctor amet neque risus nulla quis nunc vulputate
              porttitor fames leo diam tempor bibendum.
            </span>
          </div>

          {/* ======= 2 ======== */}
          <div className="mr-6">
            <span className="service_line mr-6 flex items-center text-[#ff1a1a]">
              02.
            </span>
            <p className="mb-4 mt-6 text-2xl">Proposal</p>
            <span className="text-gray-600">
              Magna gravida euismod sagittis orci leo, pharetra nisl, rhoncus,
              cras nec ultrices purus turpis sit interdum.
            </span>
          </div>

          {/* ======= 3 ======== */}
          <div className="mr-6">
            <span className="service_line mr-6 flex items-center text-[#ff1a1a]">
              03.
            </span>
            <p className="mb-4 mt-6 text-2xl">Installation</p>
            <span className="text-gray-600">
              Sed risus arcu suscipit viverra nisl augue nec nibh eget ornare
              lacus, vel varius ut amet.
            </span>
          </div>

          {/* ======= 4 ======== */}
          <div>
            <span className="service_line  flex items-center text-[#ff1a1a]">
              04.
            </span>
            <p className="mb-4 mt-6 text-2xl">Inspection</p>
            <span className="text-gray-600">
              Turpis bibendum enim purus sit ac tortor rhoncus tortor
              condimentum eget blandit lectus nec tellus cras.
            </span>
          </div>
        </div>
      </section>

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default Services;
