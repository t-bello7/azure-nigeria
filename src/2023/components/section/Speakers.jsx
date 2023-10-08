import { motion } from "framer-motion";
import { keyNoteSpeakers } from "../../assets/data/index";
import SpeakersCard from "../molecules/SpeakersCard";
import SectionHeader from "../molecules/SectionHeader";

// let easing = [0.6, -0.05, 0.01, 0.99]

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
// const title = {
//   hidden: {
//     y: 60,
//     opacity: 0
//   },
//   show: {
//     y: 0,
//     opacity:1,
//     transition: {
//       delay: 2,
//       duration: 0.6,
//       ease: easing
//     }
//   }
// }

function Speakers() {
  return (
    <motion.div className="container mx-auto max-w-[80%]">
      <SectionHeader
        heading="Developers, Cloud Engineers"
        subHeading="Speakers"
      />
      <motion.div
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{
          once: false,
        }}
        className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-4"
      >
        {keyNoteSpeakers.map((item) => (
          <SpeakersCard key={item?.id} speakerData={item} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Speakers;
