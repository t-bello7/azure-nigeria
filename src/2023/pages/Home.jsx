// import { useState, useRef, useEffect } from "react";
// import {
//   useScroll, useSpring, useTransform
// } from "framer-motion";
import Navbar from "../components/molecules/Navbar";
import Jumbotron from "../components/section/Jumbotron";
import Info from "../components/section/Info";
import Session from "../components/section/Session";
import Speakers from "../components/section/Speakers";
import Sponsors from "../components/section/Sponsors";
import Organizers from "../components/section/Organizers";
import Footer from "../components/section/Footer";

function Home() {
  // const { scrollYProgress } = useScroll();
  // const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 });

  // const contentRef = useRef(null);
  // const [contentHeight, setContentHeight] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (contentRef.current) {
  //       setContentHeight(contentRef.current.scrollHeight);
  //     }
  //   };
  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [contentRef]);
  // const y = useTransform(smoothProgress, (value) => value * -(contentHeight - window.innerHeight));

  return (
    <>
      {/* <div style={{ height: contentHeight }} /> */}
      <div>
        <Navbar />
        <Jumbotron />
        <Info />
        <Session />
        <Speakers />
        <Sponsors />
        <Organizers />
        <Footer />
      </div>
    </>
  );
}

export default Home;
