import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { useNavigate } from "react-router-dom";

import {
  CheckCircleTwoTone,
  TrophyTwoTone,
  ClockCircleTwoTone,
  WalletTwoTone,
  TagTwoTone,
  CompassTwoTone,
  BulbTwoTone,
} from "@ant-design/icons";

export function Services() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/client.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-4xl font-black"
              >
                WE FIND TALENT YOU WANT TO HIRE
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

      <div className="bg-[#000422]">
        {/* bg-blue-gray-50/50 */}
        <Footer />
      </div>
    </>
  );
}

export default Services;
