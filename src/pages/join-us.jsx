import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function JoinUs() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/join_us.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-4xl font-black"
              >
                TOGETHER, WE ARE MORE THAN
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 mt-10">
        {/* <h1 className="mb-8 text-center text-5xl">Join JS Scouts Forge</h1> */}
        <p className="mx-auto w-2/3 text-center text-2xl leading-10">
          Join JS Scouts Forge and let’s build your next career together…
          <br />
          At JS Scouts Forge, we say that we do more than find people jobs, we
          help build careers. That statement rings true not just for the
          candidates we help, but for ourselves as well. When you join our team,
          you will immediately feel the engaged culture around you. Our team is
          built around passion and dedication to our candidates, clients and
          each other. From the moment you begin, we have a path of excellence
          for you with our training and development team. Join our competitive
          team and become part of the family.
          <br />
          Please contact us for more internal opportunities.
        </p>
        <div className="m-4">
          <Button
            onClick={() => navigate("/contact")}
            className="m-auto flex text-xl"
            variant="outlined"
          >
            search opportunities <ArrowLongRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>

      <div className="bg-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default JoinUs;
