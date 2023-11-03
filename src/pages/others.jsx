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
