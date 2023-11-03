import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { TrophyTwoTone, CompassTwoTone, BulbTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function GlassWoolPanel() {
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
                Glass Wool Panel & Mineral Wool Panel
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                This product is made of insulation material, glass wool or
                mineral wool as nonflammable material. It prevents to spread the
                fire in case of fire and does not cause poisonous gas, which is
                harmful to human body.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12">
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
        <p className="m-auto mt-4 w-6/12 text-center text-gray-600">
          It is a sandwich panel, which is made by using glass wool (glass
          fiber) as insulation that is made of fibrous mineralized fiber, which
          is made of fibrous silica sand. It has excellent insulation, sound
          absorption and elasticity.
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
              <p className="mt-4 text-xl font-bold text-black">
                Outstanding insulation function
              </p>
              <p className="mt-2">
                Its heat transmission rate is very low and is excellent in
                insulation and heat preservation thus excellent in saving cost
                heating and cooling of building
              </p>
            </div>
            <div className="box2 ">
              <div className="trophy_icon bg-gray-200">
                <BulbTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-6 text-xl font-bold text-black">
                Excellent insulation efficiency
              </p>
              <p className="mt-2">
                The authorities related to building equipment have approved that
                our mineral panel has predominant adiabatic efficiency and
                excellent noise-absorption effeciency owning to the layer of the
                air in the fibroid material
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
                Perfect incombustible quality
              </p>
              <p className="mt-2">
                Glass wool both first-grade nonflammable materials and pure
                inorganic thermal insulating materials, doesn't emit toxic gas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="urenthan_pictures mt-12">
        <div className="category_list">
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={"/products/urenthane-panel"}
              className="link_texts mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              1. Urenthane Panel
            </Link>
          </Typography>

          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={"/products/glass-wool-panel"}
              className="link_texts-active mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              2. Glass Wool Panel
            </Link>
          </Typography>
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={"/products/metal-panel"}
              className="link_texts mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              3. Metal Panel
            </Link>
          </Typography>
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={"/products/eps-panel"}
              className="link_texts mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              4. EPS Panel
            </Link>
          </Typography>
          <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
          >
            <Link
              to={"/products/others"}
              className="link_texts mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              5. Others
            </Link>
          </Typography>
        </div>

        <div>
          <img
            className="mb-12"
            src="/roofPics/glass/product02_01.jpeg"
            alt=""
          />
          <hr />
          <img
            className="mb-12"
            src="/roofPics/glass/product02_02.jpeg"
            alt=""
          />
          <img
            className="mb-14"
            src="/roofPics/glass/product02_03.jpeg"
            alt=""
          />
          <img
            className="mb-12"
            src="/roofPics/glass/product02_04.jpeg"
            alt=""
          />
          <img
            className="mb-16"
            src="/roofPics/glass/product02_05.jpeg"
            alt=""
          />
        </div>
      </section>

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default GlassWoolPanel;
