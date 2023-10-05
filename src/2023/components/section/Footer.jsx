import twitterIcon from "../../assets/icons/twitter.svg";

function Footer() {
  return (
    <div className="bg-black py-12 text-white">
      <div className="container mx-auto grid max-w-[80%] justify-items-start gap-8 py-4 font-montserrat md:grid-cols-4">
        <div className="space-y-4 md:col-span-2">
          <h3 className="font-clashDisplay text-[20px] font-bold">
            <span className="font-bold text-white">Azure</span>
            <span className="text-lightPurple">Community Nigeria</span>
          </h3>
          <p>
            Azure Nigeria Community conference is Africa’s largest
            community-driven Microsoft Cloud Technology event that brings
            together business leaders, IT experts, world-leading speakers, large
            customers, Microsoft partners, and thousands of delegates. It offers
            in-depth technical learning and an ideal professional networking
            environment for all attendees.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lightPurple font-bold capitalize">
            {" "}
            Connect with Us
            {" "}
          </h3>
          <ul className="space-y-2">
            <li> Overview </li>
            <li> FAQs </li>
            <li className="flex items-center gap-2">
              <span className="text-lightPurple"> Follow us </span>
              <img
                src={twitterIcon}
                alt="instagram icon "
                className="aspect-square w-6 text-white"
              />
              <img
                src={twitterIcon}
                alt="twitter icon "
                className="aspect-square w-6"
              />
              <img
                src={twitterIcon}
                alt="facebook icon "
                className="aspect-square w-6"
              />
              <img
                src={twitterIcon}
                alt="linkedin icon "
                className="aspect-square w-6"
              />
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lightPurple font-bold capitalize">
            {" "}
            Contact Us
            {" "}
          </h3>
          <ul>
            <li className="space-y-3">
              <span className="flex items-center gap-2">
                {/* <img src={twitterIcon} alt="call icon" /> */}
                <span> +234 679 81819 </span>
              </span>
              <span className="flex items-center gap-2">
                {/* <img src={twitterIcon} alt="location icon" /> */}
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
