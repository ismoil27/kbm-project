import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

export function Candidates() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/candidate.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-4xl font-black"
              >
                WE HAVE GOT THE MARKET COVERED
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 mt-10">
        <h1 className="mb-8 text-center text-5xl">
          We’ve Got The Market Covered.
        </h1>

        <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
          <div className="container mx-auto">
            <div className="mt-36 flex flex-wrap items-center">
              <div className="mx-auto -mt-2 w-full px-4 md:w-5/12">
                <Typography className="mb-8 text-xl font-normal text-blue-gray-500">
                  With a resourcing portfolio built over 5 years we are the
                  go-to professional recruiter for all client roles. Join the
                  best in class SMEs, Start-Ups, Consumer Brands and Global
                  Leaders who hire with us. Popular recruiting sectors include
                  Sales, IT, Tech & Digital, eCommerce, Marketing, Finance,
                  Retail, Customer Experience & Operations, Supply Chain,
                  Engineering & Manufacturing, HR and Executive. During the
                  process with JS Scouts Forge, each of our candidates will
                  first be interviewed by specialized recruiters who are an
                  expert that can truly engage with you to understand your
                  skills, experience and your career aspirations.
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
                        "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/JS%20SCOUTS%20FORGE.mp4?alt=media&token=c73d8d7c-23fc-47bf-a068-9fcd9d3029ec"
                      }
                    />
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <p className="mb-6  mt-6 text-center text-4xl font-bold">
          SPECIALIZED FIELDS
        </p>

        <div class="container relative m-auto mb-10 mt-10 flex overflow-x-hidden">
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

        <div className="container m-4 m-auto mb-10">
          <Button
            onClick={() => navigate("/contact")}
            className="m-auto mb-6 flex text-xl"
            variant="outlined"
          >
            Submit your Resume <ArrowLongRightIcon className="ml-2 h-6 w-6" />
          </Button>

          <p className="text-l text-center">
            Please send us your Resume and career aspirations at{" "}
            <a className="text-cyan-600" href="mailto:ceo@jsscoutsforge.com">
              ceo@jsscoutsforge.com
            </a>{" "}
            and our specialized recruiter will reach you back for the meeting
            very soon. Looking forward to having the best opportunity for your
            next career.
          </p>
        </div>
      </div>

      <div className="bg-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default Candidates;
