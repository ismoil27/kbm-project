import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { TrophyTwoTone, CompassTwoTone, BulbTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function Others() {
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
                Others
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                Other Accessories
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="mt-12">
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
        <p className="m-auto mt-4 w-6/12 text-center text-gray-600">
          The fire-retardant EPS panel can be applied to all parts of the same
          application as the existing EPS, and it prevents various fire
          accidents with excellent fire retardant.
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
                Excellent economy
              </p>
              <p className="mt-2">
                It is made from standard meterial and is produced in order. It
                can be installed very quickly and many hours for installation
                can be saved to a considerable extent thus very economical
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
              <p className="mt-6 text-xl font-bold text-black">
                Creating sanitary surroundings
              </p>
              <p className="mt-2">
                Its surface is made with zinc galvanized steel plate with
                coating of fluorine or silicone polyester thus it is easy to
                clean inside thus lending to creation of hygienic environment.
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
                Withstanding extreme temperature
              </p>
              <p className="mt-2">
                By its quality of possessing flame retardation in the measure of
                49 times of concrete its insulation effect is quite
                extraordinary.
              </p>
            </div>
          </div>
        </div>
      </section> */}

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
              className="link_texts mb-2 flex items-center gap-1 p-1 text-xl font-normal"
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
              className="link_texts-active mb-2 flex items-center gap-1 p-1 text-xl font-normal"
            >
              {" "}
              5. Others
            </Link>
          </Typography>
        </div>

        <div>
          <img
            className="mb-12"
            src="/roofPics/others/product05_01.jpg"
            alt=""
          />
          <hr />
          <img
            className="mb-16"
            src="/roofPics/others/product05_02.jpg"
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

export default Others;
