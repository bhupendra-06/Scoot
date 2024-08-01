import React from "react";
import { useState } from "react";
import PageHeading from "../PageHeading";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import { useRef, useEffect } from 'react';

const Contact = () => {
  // GSAP ANIMATION
    useGSAP(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".gsapUp", {
        y: 100,
        duration: 1,
        opacity: 0,
        stagger: 0.2,
      });
      gsap.from(".gsapL", {
        x: 150,
        duration: 1,
        delay:0.8,
        opacity: 0,
        stagger: 0.3,
        
      });
    }, []);


  //   FORM VALUES
  const initValues = { name: "", email: "", phone: "", message: "" };

  const initState = { isLoading: false, error: "", values: initValues };
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <>
      <div className="duration-300 bg-gray flex items-center justify-center">
        <div className=" lg:h-fit overflow-hidden text-white w-full">
          <PageHeading heading="Contact" />
          <section className="p-2 md:px-20 relative z-10 overflow-hidden">
            <div className="container">
              <div className="-mx-4 flex flex-wrap lg:justify-between">
                <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                  <div className="mb-12 px-[20px] pt-10  sm:px-[1px]  max-w-[570px] lg:mb-0">
                    <h2 className="gsapUp mb-4 text-[25px] sm:text-4xl font-bold uppercase text-yellow">
                      get in touch with us
                    </h2>
                    <p className="mb-9 text-sm leading-5 gsapUp text-dim-grey text-center md:text-justify">
                      We&apos;re excited to hear from you! Whether you&apos;re
                      ready to begin your journey or you have questions about
                      our services, our team is here to help you every step of
                      the way. Feel free to get in touch using the contact
                      details provided below.
                    </p>
                    <div className="gsapL mb-8 flex w-full max-w-[370px]">
                      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden  rounded bg-light-yellow text-yellow sm:h-[70px] sm:max-w-[70px]">
                        <GrLocation className="text-2xl" />
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 sm:text-xl text-base font-bold text-black">
                          Our Location
                        </h4>
                        <p className="lg:text-[14px]  text-[12px] text-body-color text-black">
                          A-7/170 BD Office Shankar Nagar, Raipur, 110018
                        </p>
                      </div>
                    </div>

                    <div className="gsapL mb-8 flex w-full max-w-[370px]">
                      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-light-yellow text-yellow sm:h-[70px] sm:max-w-[70px]">
                        <FaWhatsapp className="text-2xl" />
                      </div>
                      <div className="w-full text-black">
                        <h4 className="mb-1 text-base sm:text-xl font-bold ">
                          WhatsApp Number
                        </h4>
                        <p className="text-sm lg:text-[14px]  text-body-color">
                          +91-XXXXX XXXXX
                        </p>
                      </div>
                    </div>
                    <div className="gsapL mb-8 flex w-full max-w-[370px] text-black">
                      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-light-yellow text-yellow sm:h-[70px] sm:max-w-[70px]">
                        <MdOutlineLocalPhone className="text-3xl" />
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base sm:text-xl font-bold ">
                          Phone Number
                        </h4>
                        <p className="text-sm lg:text-[14px]  text-body-color">
                          +91-XXXXX XXXXX
                        </p>
                      </div>
                    </div>

                    <div className="gsapL mb-8 flex w-full max-w-[370px] text-black">
                      <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-light-yellow text-yellow sm:h-[70px] sm:max-w-[70px]">
                        <MdEmail className="text-3xl" />
                      </div>
                      <div className="w-full">
                        <h4 className="mb-1 text-base sm:text-xl font-bold ">
                          Email Address
                        </h4>
                        <p className="text-sm lg:text-[14px] text-body-color">
                          Info@scoot.bhupendra.deepak
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* CONTACT FORM */}
                <div className="gsapUp w-full lg:pt-24 px-4 lg:w-1/2 xl:w-5/12">
                  <div className="relative rounded-lg bg-light-yellow p-8 border shadow-md sm:p-12">
                    <form>
                      <ContactInputBox
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder="Your Name"
                      />
                      <ContactInputBox
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder="Your Email"
                      />
                      <ContactInputBox
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                        name="phone"
                        placeholder="Your Phone"
                      />
                      <ContactTextArea
                        row="6"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder="Your Message"
                        name="message"
                        defaultValue=""
                      />

                      <div>
                        <button
                          type="submit"
                          className="p-3 w-full rounded-[12px] bg-yellow text-white border-2 border-yellow font-bold transition duration-300 hover:scale-95 "
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                    {/* SMALL DOTS IN BACKGROUND */}
                    {/* <div>
                        <span className="absolute -right-9 -top-10 z-[-1]"></span>
                        <span className="absolute -right-10 top-[90px] z-[-1]">
                          <svg
                            width={34}
                            height={134}
                            viewBox="0 0 34 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="31.9993"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#13C296"
                            />
                          </svg>
                        </span>
                        <span className="absolute -bottom-7 -left-7 z-[-1]">
                          <svg
                            width={107}
                            height={134}
                            viewBox="0 0 107 134"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="104.999"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 104.999 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 104.999 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 104.999 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 104.999 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 104.999 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 104.999 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 104.999 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 104.999 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 104.999 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="104.999"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 104.999 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 90.3333 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 90.3333 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 90.3333 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 90.3333 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 90.3333 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 90.3333 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 90.3333 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 90.3333 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 90.3333 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="90.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 90.3333 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 75.6654 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 31.9993 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 75.6654 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 31.9993 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 75.6654 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 31.9993 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 75.6654 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 31.9993 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 75.6654 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 31.9993 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 75.6654 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 31.9993 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 75.6654 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 31.9993 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 75.6654 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 31.9993 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 75.6654 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 31.9993 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="75.6654"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 75.6654 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="31.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 31.9993 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 60.9993 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 17.3333 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 60.9993 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 17.3333 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 60.9993 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 17.3333 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 60.9993 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 17.3333 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 60.9993 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 17.3333 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 60.9993 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 17.3333 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 60.9993 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 17.3333 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 60.9993 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 17.3333 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 60.9993 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 17.3333 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="60.9993"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 60.9993 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="17.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 17.3333 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 46.3333 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={132}
                              r="1.66667"
                              transform="rotate(180 2.66536 132)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 46.3333 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="117.333"
                              r="1.66667"
                              transform="rotate(180 2.66536 117.333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 46.3333 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="102.667"
                              r="1.66667"
                              transform="rotate(180 2.66536 102.667)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 46.3333 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={88}
                              r="1.66667"
                              transform="rotate(180 2.66536 88)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 46.3333 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="73.3333"
                              r="1.66667"
                              transform="rotate(180 2.66536 73.3333)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 46.3333 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={45}
                              r="1.66667"
                              transform="rotate(180 2.66536 45)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 46.3333 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={16}
                              r="1.66667"
                              transform="rotate(180 2.66536 16)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 46.3333 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy={59}
                              r="1.66667"
                              transform="rotate(180 2.66536 59)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 46.3333 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="30.6666"
                              r="1.66667"
                              transform="rotate(180 2.66536 30.6666)"
                              fill="#13C296"
                            />
                            <circle
                              cx="46.3333"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 46.3333 1.66665)"
                              fill="#13C296"
                            />
                            <circle
                              cx="2.66536"
                              cy="1.66665"
                              r="1.66667"
                              transform="rotate(180 2.66536 1.66665)"
                              fill="#13C296"
                            />
                          </svg>
                        </span>
                      </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-10 lg:px-20 h-60 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.61653467295!2d81.69987624167221!3d21.160335569159546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c41db20a7489%3A0x4bfac41adac13b4a!2sAtal%20Nagar-Nava%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1722412005095!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }} // Use curly braces for inline styles
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full bg-[#ffffffe1] text-black resize-none rounded border px-[14px] py-3 text-base text-body-color outline-none focus:border-yellow"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-4">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="bg-[#ffffffe1] text-gray-600 w-full rounded border px-[14px] py-3 text-base text-body-color outline-none focus:border-yellow"
        />
      </div>
    </>
  );
};
