import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";

import {
  PhoneTwoTone,
  TrophyTwoTone,
  ClockCircleTwoTone,
  WalletTwoTone,
  TagTwoTone,
  CompassTwoTone,
  BulbTwoTone,
} from "@ant-design/icons";
import Number from "@/data/numberAnime";

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
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto mt-14 w-full px-4 md:w-5/12">
              <h1 className="  mb-3  font-sans text-[45px]  font-bold">
                Your Hometown Roofing Services Provider
              </h1>
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
                twoToneColor={"blue"}
                style={{
                  padding: "10px",
                  fontSize: "40px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                }}
              />

              <span className="mx-6 ">24/7 Emergency Roofing Service.</span>
              <br />
              <span className="ms-20 font-bold text-[blue]">
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

        <div className=" relative mt-10 flex h-[700px] flex-wrap justify-center p-6">
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
                Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
                magna et dolor diam ultricies.
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
                Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
                magna et dolor diam ultricies.
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
                Quality Professionals
              </p>
              <p className="mt-2">
                Ut amet, risus aliquam sapien amet porta magna quam dictum arcu
                magna et dolor diam ultricies.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <ClockCircleTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Flexible Schedule
              </p>
              <p className="mt-2">
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <WalletTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                Affordable Package
              </p>
              <p className="mt-2">
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
            </div>
            <div className="box1 ">
              <div className="trophy_icon bg-gray-200">
                <TagTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">Special Offer</p>
              <p className="mt-2">
                Sem in eget faucibus massa arcu et elementum sed massa nulla
                dolor felis dictumst malesuada non.
              </p>
            </div>
            <div className="bg_pic_logo"></div>
          </div>
        </div>
      </section>
      <section className="mt-52">
        <div class="mx-2.5 mb-40 flex justify-center">
          <div className="mx-20 flex  flex-col items-center leading-6">
            <h1 className="text-8xl font-bold ">
              <Number n={1280} />
            </h1>
            <span>Commercial Projects</span>
          </div>

          <div className="mx-20 flex flex-col items-center leading-6">
            <h1 className="text-8xl font-bold ">
              <Number n={1420} />
            </h1>
            <span>Residential Projects</span>
          </div>

          <div className="mx-20 flex flex-col  items-center leading-6">
            <h1 className="flex text-8xl font-bold">
              <Number n={20} />+
            </h1>
            <span>Hard Working Employees</span>
          </div>

          <div className="mx-20 flex flex-col items-center leading-6">
            <h1 className="text-8xl font-bold ">
              <Number n={800} />
            </h1>
            <span>Happy Customers</span>
          </div>
        </div>
      </section>

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default Home;

{
  /* <div className="bg-[#000422]"> */
}
