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
                Sapien, eget egestas et sociis donec mauris nulla nisl hac
                ornare non pellentesque nunc, amet, elit tristique sit viverra
                risus ornare at nunc turpis.
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
              Professional and Expert Roofing Contractor
            </h1>
            <p className="mb-6 leading-7 text-blue-gray-500">
              Tortor, fames vitae penatibus sed et pharetra mi, mattis est donec
              amet ac egestas urna, nascetur sem arcu libero, in lacinia amet
              eget sem neque amet elit venenatis etiam eget eget phasellus quam
              aliquet sed gravida non varius sit faucibus dictumst quis et arcu
              dapibus non consequat, venenatis, scelerisque duis purus etiam
              amet bibendum adipiscing at odio penatibus quis volutpat dis quis
              egestas lectus.
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
        <h1 className="mt-2 text-center text-4xl font-bold">Our Core Values</h1>
        <p className="m-auto mt-4 w-6/12 text-center text-gray-400">
          Ipsum ornare eu nibh sagittis nunc quisque viverra fringilla egestas
          dictumst nisl, vestibulum diam nisi suscipit eros, consectetur sapien
          nullam mi facilisis magna sem
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
            Augue ut malesuada neque, venenatis enim odio velit imperdiet
            aliquet justo, blandit massa purus risus amet cras pellentesque nibh
            tellus senectus condimentum interdum orci arcu ullamcorper volutpat
            proin eu malesuada neque, sit condimentum amet dolor, tempus varius
            nec at nam donec sit quam euismod habitasse feugiat quisque
            dignissim morbi et nunc facilisi facilisis etiam eros, tellus
            convallis venenatis sit tempor diam, et mattis aliquet.
          </div>
        </div>
        <div className="mt-20 flex">
          <div className="mr-20 flex-[1_1_0%] text-3xl font-bold">
            Our Vision
          </div>
          <div className="w-64 flex-[3_3_0%] text-gray-600">
            Vulputate venenatis turpis sit ultricies donec accumsan nullam
            malesuada in dolor adipiscing facilisis eget turpis odio enim
            senectus quis consequat dolor, condimentum odio risus scelerisque
            faucibus quam proin tempor proin sit ac sapien nunc, urna eget
            adipiscing nulla vestibulum in eget pellentesque elit justo, auctor
            proin nulla sapien.
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
