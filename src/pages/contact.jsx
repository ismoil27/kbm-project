import { Input, Textarea, Button } from "@material-tailwind/react";
import { ContactTitle } from "@/widgets/layout/contact-title";

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
      <div className="relative  flex h-screen content-center items-center justify-center pb-32 pt-48">
        <div className="absolute top-0 h-full w-full bg-[url('../../public/img/contact_page.avif')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <section className="relative  bg-blue-gray-100/100 px-4 py-24">
            <ContactTitle heading="Contact us">
              Call or simply message us using the form below and we’ll get
              straight back in touch.
            </ContactTitle>
            <form className="mx-auto mt-12 max-w-3xl text-center">
              <div className="mb-8 flex gap-8">
                <Input size="lg" label="Enter your Full Name" />
                <Input size="lg" label="Enter you Email Address" />
              </div>
              <div className="mb-8 flex gap-8">
                <Input size="lg" label="Enter your Company Name" />
                <Input size="lg" label="Enter you Phone Number" />
              </div>
              <Textarea size="lg" label="Message" rows={8} />

              <Button
                // onClick={sendEmail}
                variant="gradient"
                size="lg"
                className="mt-8"
              >
                Send
              </Button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
