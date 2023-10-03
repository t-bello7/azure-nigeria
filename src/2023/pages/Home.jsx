import Navbar from "../components/molecules/Navbar";
import Jumbotron from "../components/section/Jumbotron";
import Info from "../components/section/Info";
import Session from "../components/section/Session";
import Speakers from "../components/section/Speakers";
import Sponsors from "../components/section/Sponsors";
import Organizers from "../components/section/Organizers";
import Footer from "../components/section/Footer";

function Home() {
  return (
    <div className="relative overflow-scroll font-montserrat text-[12px] md:text-[14px]">
      <Navbar />
      <Jumbotron />
      <Info />
      <Session />
      <Speakers />
      <Sponsors />
      <Organizers />
      <Footer />
    </div>
  );
}

export default Home;
