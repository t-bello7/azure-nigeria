import SectionHeader from "../molecules/SectionHeader";
import { sponsorsData } from "../../assets/data";

function Sponsors() {
  return (
    <div className="container mx-auto my-5 grid max-w-[80%] justify-items-center">
      <SectionHeader
        heading="The perfect spot to highlight Partners"
        subHeading="Partners"
      />
      <p className="mt-3 text-center font-montserrat text-sm">
        Azure Community is honored to have the following major
        {' '}
        <br />
        companies as its partners and sponsors
      </p>
      <div className="my-4 grid aspect-[2/1] w-[80%] grid-cols-2 gap-4 rounded border-[1px] border-black p-5 ">
        {sponsorsData.map((item) => (
          <div className="relative" key={item.id}>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <img src={item.img} alt="sponsors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
