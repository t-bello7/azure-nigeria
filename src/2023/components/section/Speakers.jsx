import { keyNoteSpeakers } from "../../assets/data/index";
import SpeakersCard from "../molecules/SpeakersCard";
import SectionHeader from "../molecules/SectionHeader";

function Speakers() {
  return (
    <div className="container mx-auto max-w-[80%]">
      <SectionHeader
        heading="Developers, Cloud Engineers"
        subHeading="Speakers"
      />
      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-4">
        {keyNoteSpeakers.map((item) => (
          <SpeakersCard key={item?.id} speakerData={item} />
        ))}
      </div>
    </div>
  );
}

export default Speakers;
