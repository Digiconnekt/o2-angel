/* eslint-disable react/no-unescaped-entities */

import { NavLink } from "react-router-dom";

const data = [
  {
    img: "ammara-herbs.jpg",
    href: "https://www.amaaraherbs.com/",
    content:
      "Offers a wide range of herbal teas including Ashwagandha, Gokshura, Brahmi, Satavari and major herbs",
  },
  {
    img: "ziffyhealth.png",
    href: "https://www.ziffytech.com",
    content:
      "Integrating healthcare stakeholder through innovative concepts like e-Clinics in rural areas apart from tele-medicine services.",
  },
  {
    img: "urbanMatrix.svg",
    href: "https://www.urbanmatrix.co.in/",
    content: "Building micro category Drones",
  },
  {
    img: "brain-wired.webp",
    href: "https://www.brainwired.in/",
    content: "Fit bits for cattle, specifically Desi Cows",
  },
  {
    img: "eeki-foods.png",
    href: "https://eeki.com/",
    content:
      "Growing all kinds of Indian & Exotic Fruiting Veggies with Patentpending Plant Growth System.",
  },
  {
    img: "cultivate.svg",
    href: "https://www.cultyvate.com/",
    content: "IoT based precision farming",
  },
  {
    img: "bosonq.webp",
    href: "https://www.bosonqpsi.com/",
    content:
      "Quantum Computing powered cloud simulation software for enterprise customers",
  },
  {
    img: "SKY-AIR.png",
    href: "https://www.skyeair.tech",
    content: "Drones as a delivery services",
  },
  {
    img: "fabheads.png",
    href: "https://fabheads.com/",
    content: "Indigenously developed continuous fiber 3D printers",
  },
  {
    img: "green-tiger.png",
    href: "https://greentiger.in/",
    content: "Developing Dual fuel powertrain for two wheelers",
  },
  {
    img: "tuttifrutti.png",
    href: "https://www.tuttifrutti.in/",
    content: "Game Developing Studio",
  },
  {
    img: "navars.png",
    href: "https://navarsedutech.com/",
    content: "STEM based Space & Astronomy Education",
  },
  {
    img: "ceres-foods.png",
    href: "https://ceresfoods.in/",
    content:
      "Offers a wide range of heritage Indian regional dishes and authentic Asian sauces to every kitchen, ",
  },
  {
    img: "clensta.png",
    href: "https://clensta.com/",
    content: "Waterless Soap, Shampoo and Toothpaste and other FMCG products ",
  },
  {
    img: "janitri.png",
    href: "https://www.janitri.in/",
    content: "Offers medical-grade fetal and maternal monitoring solutions",
  },
  {
    img: "dinnos.webp",
    href: "https://dinoos.co/",
    content: "Traditional and Healthy Indian Snacks",
  },
  {
    img: "switch-my-loan.png",
    href: "https://www.switchmyloan.in/",
    content: "Loans marketplace",
  },
  {
    img: "velectron-labs.png",
    href: "https://voidelectron.com/",
    content: "Developer of wearable medical technology",
  },
  {
    img: "abhitantrik.avif",
    href: "https://www.abhiyantriksolutions.in/",
    content:
      "Self-moving smart switches and smart fan regulators with patented technology",
  },
  {
    img: "regrip.png",
    href: "https://regrip.in/",
    content: "Reliable technology for re-cycling tyres",
  },
  {
    img: "vgenomics.png",
    href: "https://www.vgenomics.in/",
    content:
      "AI driven developer of innovative diagnostics,prognostics and therapeutic solutions for rare diseases",
  },
  {
    img: "space-fields.png",
    href: "http://www.spacefields.in/",
    content:
      "Custom-design and build next generation dual-use rocket propulsion systems for commercial spaceflight",
  },
];

const PortfolioList = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14 lg:py-24 overflow-x-hidden">
        <div className="grid grid-cols-12 items-center gap-y-10 md:gap-10">
          {data.map((item, i) => (
            <NavLink
              key={i}
              to={item.href}
              target="_blank"
              className="col-span-12 md:col-span-6 lg:col-span-4 border p-10 rounded-lg shadow-md hover:shadow-none hover:bg-gray-200 cursor-pointer transition-all duration-300 h-full flex flex-col justify-center gap-5"
            >
              <figure className="w-32 sm:w-52 h-32 mx-auto">
                <img
                  src={`../../../../images/portfolio/${item.img}`}
                  alt="portfolio image"
                  className="w-full h-full object-contain"
                />
              </figure>
              <p className="text-gray-500">{item.content}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
