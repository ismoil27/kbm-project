import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import Marquee from "react-fast-marquee";

import icon1 from "../../public/img/icon1.png";
import icon2 from "../../public/img/icon2.png";
import icon3 from "../../public/img/icon3.png";
import icon4 from "../../public/img/icon4.png";
import { PhoneTwoTone, TrophyTwoTone } from "@ant-design/icons";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/roof_home.jpeg')] bg-cover bg-center" />

        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <p className="-mt-11 text-xl text-white">
            Your Best Local Roofing Service
          </p>
          <h1 className="mt-4 w-3/5 text-7xl text-white">
            Leading Roofing Service in Daejeon Areas
          </h1>
          <p className="mt-10 w-3/5 text-lg text-white">
            Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
            tellus aliquet tellus iaculis tempus, sollicitudin massa duis
            eleifend egestas turpis sit etiam commodo viverra lacinia.
          </p>
          <button className=" mt-4 rounded-none border-2 p-4 px-8  text-white hover:bg-[#c95746]">
            View our Services
          </button>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          {/* <div className=" grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <>
                <FeatureCard
                  key={title}
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white ",
                  })}
                  description={description}
                />
              </>
            ))}
          </div> */}
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-14 w-full px-4 md:w-5/12">
              {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
              {/* <Typography
                variant="h1"
                className="width-[200px]  mb-3  font-sans text-5xl text-5xl font-bold"
                color="blue-gray"
              > */}
              <h1 className="  mb-3  font-sans text-[45px]  font-bold">
                Your Hometown Roofing Services Provider
              </h1>
              {/* </Typography> */}
              <Typography className="mb-8  text-xl font-normal text-blue-gray-500">
                Condimentum ultrices vitae dictumst augue id porta sed accumsan
                ut amet varius nibh neque faucibus iaculis interdum erat eget.
                Rutrum ut volutpat scelerisque auctor ultrices lectus ultrices
                ullamcorper massa diam etiam amet a, nulla pulvinar sapien,
                ornare lectus nullam a faucibus diam et lorem diam nullam
                commodo, vestibulum, pulvinar nisl suspendisse diam venenatis
                enim nunc integer orci quam risus sit neque, fusce massa
                vulputate pretium.
              </Typography>
              <PhoneTwoTone
                twoToneColor={"red"}
                style={{
                  padding: "10px",
                  fontSize: "40px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                }}
              />

              <span className="mx-6 ">24/7 Emergency Roofing Service.</span>
              <br />
              <span className="ms-20 font-bold text-[#c95746]">
                +1 123 111 2345
              </span>
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

      {/* <Typography
        variant="h2"
        className="mt-10 text-center font-bold"
        color="blue-gray"
      >
        JS Scouts Forge stands for KCHC:
      </Typography> */}

      {/* <div className="mt-14 grid grid-cols-1 gap-12 gap-x-24 px-6 md:grid-cols-2 xl:grid-cols-4"> */}
      <div className="mx-2 flex">
        <div
          className="picture_img1 picture_img flex flex-col items-center p-10"
          style={{ width: "358px", height: "500px" }}
        >
          <p className="absolute left-10 z-10 mb-40 text-left text-2xl text-white">
            01.
          </p>
          <p className="z-10 mt-52 w-full text-3xl text-white">
            Commercial <br /> Roofing
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
            magna et dolor diam ultricies.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white">
            Learn More
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
            Residential <br /> Roofing
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Aliquam orci blandit non risus viverra sed iaculis nunc neque augue
            tincidunt diam turpis nisl.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white">
            Learn More
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
            Amet proin sed ac ut diam varius pharetra tortor eget augue massa
            pretium turpis praesent.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white">
            Learn More
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
            Financing & <br /> Insurance
          </p>
          <p className="z-10 mt-2 w-full text-white">
            Sed ac, morbi vel viverra scelerisque tellus arcu eget ut duis fames
            in quam gravida.
          </p>
          <p className="z-10 mt-10 w-full cursor-pointer text-xl text-white">
            Learn More
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
          Ipsum ornare eu nibh sagittis nunc quisque viverra fringilla egestas
          dictumst nisl, vestibulum diam nisi suscipit eros, consectetur sapien
          nullam mi facilisis magna sem
        </p>

        <div className="mt-20 flex flex-wrap justify-center">
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
          <div className="box1 ">
            <div className="trophy_icon bg-gray-200">
              <TrophyTwoTone />
            </div>
            <p className="mt-8 text-xl text-black">Qualified Expert</p>
            <p className="mt-2">
              Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
              magna et dolor diam ultricies.
            </p>
          </div>
        </div>

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
      </section>

      <div className="bg-gray-300">
        <Footer />
      </div>
    </>
  );
}

export default Home;
