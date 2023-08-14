import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

export function Clients() {
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
      <div className="mb-10 mt-10">
        <h1 className="mb-8 text-center text-5xl">
          We Find Talent You Want To Hire
        </h1>

        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
          <div className="container mx-auto">
            <div className="mt-36 flex flex-wrap items-center">
              <div className="mx-auto -mt-2 w-full px-4 md:w-5/12">
                <Typography className="mb-8 text-2xl font-normal text-blue-gray-500">
                  Our management takes care of our clients’ needs in a
                  professional way and gets engaged to provide solutions by
                  searching the market for candidates mapped to their
                  requirements. Our clients review shortlisted candidates within
                  a few business days, then can pick who they would like to
                  proceed further. We professionally prepare the candidates and
                  guide them to the interview.
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
                        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/JS%20SCOUTS%20FORGE%20(1).mp4?alt=media&token=7af1566f-743f-4167-a08b-bcd00ed8fea2"
                      }
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <p className="mb-6 mt-6 text-center text-4xl font-bold">
          SPECIALIZED FIELDS
        </p>
        <div class="container relative m-auto mb-10 flex overflow-x-hidden">
          <br />
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
        <div className="m-4 mb-10">
          <Button
            onClick={() => navigate("/contact")}
            className=" m-auto flex text-xl "
            variant="outlined"
          >
            Your talent research starts here{" "}
            <ArrowLongRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>

        <p className="text-l text-center">
          Please let us know your needs at{" "}
          <a className="text-cyan-600" href="mailto:ceo@jsscoutsforge.com">
            ceo@jsscoutsforge.com
          </a>{" "}
          and our specialized recruiter will reach you back for the detailed
          meeting very soon.
          <br />
          Looking forward to having win-win cooperation.
        </p>
      </div>

      <div className="bg-gray-300">
        {/* bg-blue-gray-50/50 */}
        <Footer />
      </div>
    </>
  );
}

export default Clients;
