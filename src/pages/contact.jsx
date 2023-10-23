import { Input, Textarea, Button } from "@material-tailwind/react";
import { ContactTitle } from "@/widgets/layout/contact-title";
import { Typography } from "@material-tailwind/react";
import {
  EnvironmentTwoTone,
  PhoneTwoTone,
  MailTwoTone,
} from "@ant-design/icons";

import React from "react";

export const Contact = () => {
  // const sendEmail = () => {
  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     Username: "Asadbek Abduvoitov",
  //     Password: "password",
  //     To: "abduvoitovasadbek3@gmail.com",
  //     From: "karol5@gmail.com",
  //     Subject: "This is the subject",
  //     Body: "And this is the body",
  //   }).then((message) => alert(message));
  // };
  return (
    <>
      <div
        className="relative flex content-center items-center justify-center pb-32 pt-16"
        style={{ height: "60vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/contac_us.jpeg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto mt-10 w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h3"
                color="white"
                className="mb-6 text-6xl font-black"
              >
                Contact Us
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                We're just a message away. Reach out to us for all your roofing
                inquiries, and we'll promptly respond to assist you. Your
                roofing project is important to us, and we're here to make it a
                reality.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-20 mt-20 flex justify-center">
        <div className="flex justify-center">
          <div className="mr-20">
            <p className="text-6xl font-bold">
              Get in Touch with <br /> Our Roofing Experts
            </p>
            {/* <p className="mt-6 w-[500px] text-gray-600">
              Condimentum ultrices vitae dictumst augue id porta sed accumsan ut
              amet varius nibh neque faucibus iaculis interdum erat eget.
            </p> */}
            <br />
            <p className="w-[500px] text-gray-500">
              Our team is ready to assist you with your roofing needs. If you
              have questions, need a quote, or want to discuss a project, please
              don't hesitate to reach out. We look forward to hearing from you
              and helping you with your roofing requirements.
            </p>

            <div className="mt-10 flex items-center pl-10">
              <EnvironmentTwoTone
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Address
                </p>
                <p className="text-gray-600">123 5th Ave, New York, NY 10021</p>
              </div>
            </div>

            <div className="mt-10 flex items-center pl-10">
              <PhoneTwoTone
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />

              <div className="mr-20">
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Call Us
                </p>
                <p className="text-gray-600">+1 123 456 7890</p>
              </div>

              <MailTwoTone
                style={{
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgb(226 232 240)",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />

              <div>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Work Sans, sans-serif",
                  }}
                >
                  Email Us
                </p>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
          </div>
          <div className="contact_form flex-1">
            <div className="h-[630px] w-[600px] pl-10 pr-10 pt-10 ">
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Full name"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  type="email"
                  size="lg"
                  label="Active email"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Phone number"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Input
                  required
                  size="lg"
                  label="Subject"
                  className="input_size h-[56px]"
                />
              </div>
              <div className="mb-10">
                <Textarea
                  size="lg"
                  label="Message*"
                  className="input_size h-[80px]"
                />
              </div>
              <Button color="secondary"> Send Request </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
