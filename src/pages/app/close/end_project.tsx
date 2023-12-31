import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "~/components/header/Header";
import { CloseSideBar } from "~/components/sideBars/CloseSideBar";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  
} from "framer-motion"
import { FormContainer } from "~/components/used/FormContainer";
import { EndProjectPopUp } from "~/components/popup/end-project-popup";


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)

  const [isOpenProjectEnd , setIsOpenProjectEnd] = useState<boolean>(false)

  const x = useMotionValue(0);

  // useMotionValueEvent(x, "animationStart", () => {
  //   console.log("animation started on x")
  // })
  
  useMotionValueEvent(x, "change", (latest) => {
   
    if(latest > 100){
      setIsOpenProjectEnd(true)
      return
    }
  })

  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

 

  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
        <EndProjectPopUp isOpen={isOpenProjectEnd} setIsOpen={setIsOpenProjectEnd} />
       <CloseSideBar isOpen={isOpen} setIsOpen={setIsOpen}  />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
       <motion.div className="example-container rounded-lg !h-[94%] flex justify-center items-center !w-[95%] mx-auto" style={{ background }}>
      <motion.div
        className="box"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg className="progress-icon" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;