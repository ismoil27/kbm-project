import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { TrophyTwoTone, CompassTwoTone, BulbTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function MetalPanel() {
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
                Metal Panel
              </Typography>
              <Typography variant="lead" color="white" className=" opacity-80">
                Metal Panel which can produce beautiful and noble appearance
                allows you to create new and fantastic space with modern sense.
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
        <h1 className="mt-2 text-center text-4xl font-bold">Our Core Values</h1>
        <p className="m-auto mt-4 w-6/12 text-center text-gray-600">
          Metal Panel by securing steel strength of the panel itself and
          flatness can create refined and neat exterior which could not be
          created by conventional sandwich panels. Thus it is creating an
          innovation in exterior finishing materials for architecture. Also by
          using steel plate of melt galvanization continuosly coated with
          fluorine resin of super anti-weathering element its long life is
          assured.
        </p>
        <div className="relative mt-10 flex h-[400px] flex-wrap justify-center p-6">
          <div className="flex flex-wrap justify-center">
            <div className="box2 ">
              <div className="trophy_icon bg-gray-200">
                <TrophyTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-4 text-xl font-bold text-black">
                Beautiful Exterior Look is Presented.
              </p>
              <p className="mt-2">
                It is a boltless type and by virtue of large size flat and
                beautiful corugated panel when it is used in modern architecture
                beautiful exterior can be formed and elegant architecture can be
                created.
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
                Low Construction cost
              </p>
              <p className="mt-2">
                By using standardized large size panel assembly and work
                execution are fast and simple thus cost saving more than
                expected can be assured.
              </p>
            </div>
            <div className="box2 ">
              <div className="trophy_icon bg-gray-200">
                <CompassTwoTone
                  twoToneColor={"blue"}
                  style={{
                    fontSize: "30px",
                  }}
                />
              </div>
              <p className="mt-8 text-xl font-bold text-black">
                High Strength And Sturdiness
              </p>
              <p className="mt-2">
                Independent structure by high strength material. Its
                waterproofing feature is perfect and has also perfect joint by
                using various materials thus adding more elegance and beauty of
                the architecture when completed.
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
              className="link_texts-active mb-2 flex items-center gap-1 p-1 text-xl font-normal  "
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
            src="/roofPics/metal/product03_01.jpeg"
            alt=""
          />
          <hr />
          <img
            className="mb-12"
            src="/roofPics/metal/product03_02.jpeg"
            alt=""
          />
          <img
            className="mb-14"
            src="/roofPics/metal/product03_03.jpeg"
            alt=""
          />
          <img
            className="mb-16"
            src="/roofPics/metal/product03_04.jpeg"
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

export default MetalPanel;
