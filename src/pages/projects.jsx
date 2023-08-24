import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { CheckCircleTwoTone } from "@ant-design/icons";

export function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/projects_page.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto mt-10 w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-6xl font-black"
              >
                Projects
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Sapien, eget egestas et sociis donec mauris nulla nisl hac
                ornare non pellentesque nunc, amet, elit tristique sit viverra
                risus ornare at nunc turpis.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* ============= section 1 ====================== */}
      <section className="featured_project">
        <span className="featured_project_top font-bold">Featured Project</span>

        <div className="featured_project_top flex justify-between">
          <div>
            <p className="mt-6 text-5xl">Metal Roof</p>
            <p className="mt-2 text-5xl">Installation</p>
          </div>
          <div className="w-[350px] ">
            <p className="text-gray-600">
              Eleifend lorem magna nulla tristique amet, at eleifend in ipsum
              pellentesque ut fermentum ullamcorper vulputate augue scelerisque
              volutpat magna eget libero dui quam eu ut lacus sem suscipit lacus
              facilisis fames pellentesque.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center">
              <CheckCircleTwoTone className="mr-4" />
              <p className="text-gray-600">Nec aliquet fringilla massa</p>
            </div>
            <div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Vitae scelerisque </p>
              </div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Aliquam sed pulvinar</p>
              </div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Ultricies augue semper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ Section 2 ================== */}
      <section className="section2_testimony mb-20 flex flex-wrap justify-center">
        <div className="mb-20 mr-36">
          <img
            src="/roofPics/projects1.jpeg"
            alt=""
            width={"560px"}
            height={"220px"}
          />
          <p className=" my-6 text-[#ff1a1a]">Commercial Roofing</p>
          <p className="mb-4 text-3xl">Built-Up Flat Roof Installation</p>
          <p className="w-[540px] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </p>
          <div className="projects_page_texts mt-6 w-[520px]">
            <p className=" ml-6">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. "
            </p>
            <div className="flex items-center">
              <img
                src="/roofPics/human/person_pic1.png"
                alt=""
                className="projects_person_pic"
              />
              <span>Edward B. Suarez</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/roofPics/projects2.jpeg"
            alt=""
            width={"560px"}
            height={"220px"}
          />
          <p className=" my-6 text-[#ff1a1a]">Residential Roofing</p>
          <p className="mb-4 text-3xl">Shingle Roof Replacement</p>
          <p className="w-[540px] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </p>
          <div className="projects_page_texts mt-6 w-[520px]">
            <p className="ml-6">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. "
            </p>
            <div className="flex items-center">
              <img
                src="/roofPics/human/person_pic1.png"
                alt=""
                className="projects_person_pic"
              />
              <span>Edward B. Suarez</span>
            </div>
          </div>
        </div>
        <div className="mb-20 mr-36">
          <img
            src="/roofPics/projects3.jpeg"
            alt=""
            width={"560px"}
            height={"220px"}
          />
          <p className=" my-6 text-[#ff1a1a]">After Storm Damage</p>
          <p className="mb-4 text-3xl">Wood Shake Roof Repair</p>
          <p className="w-[540px] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </p>
          <div className="projects_page_texts mt-6 w-[520px]">
            <p className="ml-6">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. "
            </p>
            <div className="flex items-center">
              <img
                src="/roofPics/human/person_pic1.png"
                alt=""
                className="projects_person_pic"
              />
              <span>Edward B. Suarez</span>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/roofPics/projects4.jpeg"
            alt=""
            width={"560px"}
            height={"220px"}
          />
          <p className=" my-6 text-[#ff1a1a]">Commercial Roofing</p>
          <p className="mb-4 text-3xl">Commercial Skylight Installation</p>
          <p className="w-[540px] text-gray-600">
            Risus varius adipiscing nam mauris, sit vel nunc lorem lacus, ut
            volutpat enim orci molestie est et lorem laoreet sit quis amet, nunc
            sed quam pretium nibh et, urna proin euismod sagittis.
          </p>
          <div className="projects_page_texts mt-6 w-[520px]">
            <p className="ml-6">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. "
            </p>
            <div className="flex items-center">
              <img
                src="/roofPics/human/person_pic1.png"
                alt=""
                className="projects_person_pic"
              />
              <span>Edward B. Suarez</span>
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

export default Projects;
