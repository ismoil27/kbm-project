import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { CheckCircleTwoTone } from "@ant-design/icons";

export function Projects() {
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
                Discover our roofing expertise in action. Each project showcases
                our commitment to quality, innovation, and precision. Explore
                the stories behind our exceptional roofing solutions.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* ============= section 1 ====================== */}
      <section className="featured_project">
        <span className="featured_project_top font-bold">
          Featured Projects
        </span>

        <div className="featured_project_top flex justify-between">
          <div>
            <p className="mt-6 text-5xl">Metal Roof</p>
            <p className="mt-2 text-5xl">Installation</p>
          </div>
          <div className="w-[350px] ">
            <p className="text-gray-600">
              Our projects tell a story of transformation. From strengthening
              structures to enhancing energy efficiency, we're your trusted
              partner in roofing solutions. Explore our portfolio and witness
              the impact of excellence.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center">
              <CheckCircleTwoTone className="mr-4" />
              <p className="text-gray-600">Achievement</p>
            </div>
            <div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Transformation </p>
              </div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Innovation</p>
              </div>
              <div className="mb-2 flex items-center">
                <CheckCircleTwoTone className="mr-4" />
                <p className="text-gray-600">Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ Section 2 ================== */}
      <section className="section2_testimony mb-20 flex flex-wrap justify-center">
        <div className="mb-20 mr-36">
          <img
            className="projects_pics"
            src="/roofPics/projects/projects1_1.jpeg"
            alt=""
          />
          {/* <p className=" my-6 text-[#ff1a1a]">Commercial Roofing</p> */}
          <p className="mb-4 mt-4 text-3xl">Meta Tech Factory</p>
          <p className="w-[540px] text-gray-600">
            We had the privilege of collaborating with Meta Tech, delivering a
            roofing solution that perfectly met their needs. Our roofing panels
            ensured long-lasting durability and airtight protection,
            contributing to the efficiency and safety of the Meta Tech facility.
            This project exemplifies our commitment to quality craftsmanship and
            client satisfaction."
          </p>
          {/* <div className="projects_page_texts mt-6 w-[520px]">
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
          </div> */}
        </div>
        <div>
          <img
            className="projects_pics"
            src="/roofPics/projects/projects1_2.jpeg"
            alt=""
          />
          {/* <p className=" my-6 text-[#ff1a1a]">Residential Roofing</p> */}
          <p className="mb-4 mt-4 text-3xl">Jinhap Factory</p>
          <p className="w-[540px] text-gray-600">
            Our roofing panels played a pivotal role in the successful
            completion of the Jinhap Factory project in Daejeon. We provided a
            robust and efficient roofing solution, ensuring the factory's
            structural integrity and weather protection. This project
            exemplifies our dedication to reliability and performance in every
            roofing installation.
          </p>
          {/* <div className="projects_page_texts mt-6 w-[520px]">
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
          </div> */}
        </div>
        <div className="mb-20 mr-36">
          <img
            className="projects_pics"
            src="/roofPics/projects/projects1_3.jpeg"
            alt=""
          />
          {/* <p className=" my-6 text-[#ff1a1a]">After Storm Damage</p> */}
          <p className="mb-4 mt-4 text-3xl">Hanla Steel Factory</p>
          <p className="w-[540px] text-gray-600">
            Our team proudly provided roofing solutions for the Hanla Steel
            project in Korea. With our top-quality roofing panels, we ensured
            the facility's durability and energy efficiency. This project
            exemplifies our commitment to delivering excellence in every
            installation.
          </p>
          {/* <div className="projects_page_texts mt-6 w-[520px]">
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
          </div> */}
        </div>
        <div>
          <img
            className="projects_pics"
            src="/roofPics/projects/projects1_4.jpeg"
            alt=""
          />
          {/* <p className=" my-6 text-[#ff1a1a]">Commercial Roofing</p> */}
          <p className="mb-4 mt-4 text-3xl">
            Carbon Compound materials Company
          </p>
          <p className="w-[540px] text-gray-600">
            We were honored to collaborate with Carbon Compound Materials in
            Korea to enhance their facility with our roofing panels. Our expert
            team delivered a sustainable roofing solution, ensuring the utmost
            protection for their valuable assets. This project stands as a
            testament to our commitment to innovation and quality.
          </p>
          {/* <div className="projects_page_texts mt-6 w-[520px]">
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
          </div> */}
        </div>
      </section>

      <div className="bg-[#000422]">
        <Footer />
      </div>
    </>
  );
}

export default Projects;
