import { v4 as uuidv4 } from "uuid";
import davidImg from "../imgs/david-okoye.jpg";
import joyKirkImg from "../imgs/joy-kir.jpg";
import olaImg from "../imgs/ola-williams.jpeg";
import henkImg from "../imgs/henk-boolman.jpeg";
import azureCommunityImg from "../imgs/azure-community.jpeg";
import venturesImg from "../imgs/ventures.png";

const aboutConference = `Azure Nigeria Community conference is Africa’s largest community-driven Microsoft Cloud Technology event that brings together business leaders, IT experts, world-leading speakers, large customers, Microsoft partners, and thousands of delegates. It offers in-depth technical learning and an ideal professional networking environment for all attendees. The Azure Nigeria conference offers cutting-edge technology content, in both business and technology arenas, representing a perfect learning and professional opportunity. our attendees will get to learn from hundreds of educational sessions, dozens of real-life case studies, and panel discussions, delivered by 100+ world-class experts from across the world.`;

const keyNoteSpeakers = [
  {
    id: uuidv4(),
    name: "Mrs Olatomiwa Williams",
    role: "Country Director(Nigeria and Ghana)",
    company: "Microsoft",
    twitterProfile: "olatomiwaw",
    img: olaImg,
  },
  {
    id: uuidv4(),
    name: "Joylynn Kiriu",
    role: "Senior Global Azure Security Advocate",
    company: "Microsoft",
    twitterProfile: "",
    img: joyKirkImg,
  },
  {
    id: uuidv4(),
    name: "Scott Hanselman",
    role: "Partner PM",
    company: "Microsoft",
    twitterProfile: "shanselman",
    img: henkImg,
  },
  {
    id: uuidv4(),
    name: "Jorge Maia",
    role: "Principal IoT and Cloud Architect (Microsoft MVP, MCT)",
    company: "CrazyTechLabs",
    twitterProfile: "jorgemaia",
    img: davidImg,
  },
];

const organizers = [
  {
    name: "David Okeyode",
  },
  {
    name: "Japhlet Nwamu",
  },
  {
    name: "Imoh Etuk",
  },
  {
    name: "Promise Nwachukwu",
  },
  {
    name: "Rapheal Gab-Momoh",
  },
  {
    name: "Joseph Roland",
  },
  {
    name: "Paul Oyemakinwa",
  },
  {
    name: "Oluwaseyi Oluwawumiju",
  },
  {
    name: "David Abu",
    role: "Cloud Advocate Power Bi",
    company: "Microsoft",
  },
  {
    name: "Oluwatosi (Tosin) Anishere",
    role: "Consultant",
  },
  {
    name: "Issa Rukayat Arinola",
    role: "Support Specialist",
  },
  {
    name: "Gbenga Oridupa",
    role: "Tech Consultant",
  },
  {
    name: "Ayodeji Folaring",
    phone_number: "+2348023037488",
  },
];

const sponsorsData = [
  {
    id: uuidv4(),
    name: "Azure Community",
    img: azureCommunityImg,
  },
  {
    id: uuidv4(),
    name: "Ventures",
    img: venturesImg,
  },
];

export {
  keyNoteSpeakers, organizers, aboutConference, sponsorsData
};
