import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { TrophyTwoTone, CompassTwoTone, BulbTwoTone } from "@ant-design/icons";

export function Products() {
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
                Products
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

      <section className="mt-6">
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

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default Products;
