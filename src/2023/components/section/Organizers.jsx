import SectionHeader from "../molecules/SectionHeader";
import { organizers } from "../../assets/data";

function Organizers() {
  return (
    <div className="container mx-auto max-w-[80%]">
      <SectionHeader
        heading="Meet the amazing Team"
        subHeading="Organizers and Contributors "
      />
      <div className="flex flex-wrap justify-center gap-1">
        {organizers.map((item) => (
          <div key={item.id} className="aspect-square w-fit bg-black ">
            {item.img ? <img src={item.img} alt="organizers" /> : item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organizers;
