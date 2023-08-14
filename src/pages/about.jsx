import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";

import icon1 from "../../public/img/icon1.png";
import icon2 from "../../public/img/icon2.png";
import icon3 from "../../public/img/icon3.png";
import icon4 from "../../public/img/icon4.png";

export function About() {
  return (
    <>
      <div
        className="justify-centerpt-16 relative flex h-screen content-center items-center"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/about_company_page.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h3" color="white" className="font-black">
                BEST SOLUTIONS FOR YOUR NEXT HR STRATEGIC MOVE !
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                {/* WE CREATE OPPORTUNITIES FOR PEOPLE TO REACH THEIR POTENTIAL */}
                We Create Opportunities For People To Reach Their Potential
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-40 flex flex-wrap items-center">
            <div className="mx-auto -mt-9 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 text-4xl font-bold"
                color="blue-gray"
              >
                What makes us different?
              </Typography>
              <Typography className="mb-8 text-2xl  font-normal text-blue-gray-500">
                JS Scouts Forge facilitates relationships and champions the
                process of ‘professional hiring’ to help create stronger and
                longer-lasting engagements between global companies and
                outstanding candidates.
                <br />
                <br />
                With an industry reputation for delivering results we are the
                go-to talent finders for various clients. We work with everyone
                from tech start-ups to global brands who all demand the best
                service and talent.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Our Values
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Being true to ourselves and others. We feel the true
                    improvement when there is a mutual achievement in clients
                    and candidates for their process moving forward.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-32 pt-12">
        <div className="container mx-auto">
          {/* <PageTitle heading="">
            JS Scouts Forge is a global recruitment agency specializing in mid
            to senior level of recruitment. Our specialized recruiters are
            masters in multiple industries by connecting great companies and
            outstanding candidates across the globe with its base in Seoul. We
            provide a number of benefits for employers looking to expand their
            workforce, such as, provides access to a broad range of job
            candidates, offers a streamlined recruitment process, and provides a
            wealth of expertise in the recruitment process. We work with our
            clients to design optimal organization structures, roles, and
            responsibilities. We help them hire the right people and advise them
            on how to reward and motivate their workforce while developing
            professionals as they navigate and advance their careers. We provide
            a full cycle of HR solution services such as recruitment, job
            searches, career advice, CV writing, career coaching, outplacement,
            and training.
          </PageTitle> */}

          <div className="mb-10">
            <p className="mx-auto w-full text-center text-2xl leading-10">
              JS Scouts Forge is a global recruitment agency specializing in mid
              to senior level of recruitment. Our specialized recruiters are
              masters in multiple industries by connecting great companies and
              outstanding candidates across the globe with its base in Seoul. We
              provide a number of benefits for employers looking to expand their
              workforce, such as, provides access to a broad range of job
              candidates, offers a streamlined recruitment process, and provides
              a wealth of expertise in the recruitment process. We work with our
              clients to design optimal organization structures, roles, and
              responsibilities. We help them hire the right people and advise
              them on how to reward and motivate their workforce while
              developing professionals as they navigate and advance their
              careers. We provide a full cycle of HR solution services such as
              recruitment, job searches, career advice, CV writing, career
              coaching, outplacement, and training.
            </p>
          </div>

          <Typography
            variant="h3"
            className="mt-20 text-center text-4xl font-bold"
            color="blue-gray"
          >
            JS Scouts Forge stands for KCHC:
          </Typography>
          <div className="mt-8 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center">
              <img src={icon1} alt="" />
              <p className="text-xl font-bold">Knowledge</p>
              <p className="text-center text-xl">
                We are insatiably curious, always learning new innovative and
                unique things.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon2} alt="" />
              <p className="text-xl font-bold">Creativity</p>
              <p className="text-center text-xl">
                We apply the same principles that we were founded on to solve
                recruitment challenges.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon3} alt="" />
              <p className="text-xl font-bold">Honesty</p>
              <p className="text-center text-xl">
                We say what we mean and we do what we say. We hold ourselves to
                the highest standards.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon4} alt="" />
              <p className="text-xl font-bold">Collaboration</p>
              <p className="text-center text-xl">
                Recruitment only works when all parties come together with the
                same goal and vision.
              </p>
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

export default About;
