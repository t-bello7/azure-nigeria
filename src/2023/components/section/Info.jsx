import SectionHeader from "../molecules/SectionHeader";

function Info() {
  return (
    <div className="container mx-auto max-w-[80%]">
      <SectionHeader
        heading="About the Conference"
        subHeading="An Event Apart"
      />

      <div className="m-6 flex flex-col items-center justify-around space-y-3 rounded-xl p-12 shadow-2xl">
        {/* <p className='text-2xl'>

                Azure Nigeria Community conference is Africa’s largest community-driven Microsoft Cloud Technology event that brings together business leaders, IT experts, world-leading speakers, large customers, Microsoft partners, and thousands of delegates. It offers in-depth technical learning and an ideal professional networking environment for all attendees.
                </p> */}
        <p className="">
          The Azure Nigeria conference offers cutting-edge technology content,
          in both business and technology arenas, representing a perfect
          learning and professional opportunity. Our attendees will get to learn
          from hundreds of educational sessions,
          {' '}
          <br />
          dozens of real-life case studies, and panel discussions, delivered by
          100+ world-class experts from across the world.
        </p>

        <h2 className="border-b-2 border-violet-900 text-2xl ">Our Vision</h2>
        <p className="">
          Our Vision is to build a community that encourages collaboration, and
          mentorship to enhance human capability in Azure technologies thereby
          empowering 2 million Nigerians in 5 years!
        </p>
        <h2 className="border-b-2 border-violet-900 text-2xl ">Our Mission</h2>
        <p className="">
          To accelerate growth and empower 2 million Nigerians in Azure Cloud
          development, Cloud DevOps, Cloud Security, Blockchain, and Opensource
          in 5 years
        </p>
      </div>
    </div>
  );
}

export default Info;
