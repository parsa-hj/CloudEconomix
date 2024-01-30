import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../assets/images/benefit-one.png";
  import benefitTwoImg from "../assets/images/benefit-two.png";
  
  const benefitOne = {
    title: "Supercharge Cloud Savings",
    desc: "Maximize your cost efficiency with CloudEconomix's advanced cloud cost optimization. Our platform conducts thorough surveys, pinpointing areas for immediate savings. Utilize our intuitive dashboard and actionable insights to make informed decisions. ",
    image: benefitOneImg,
    bullets: [
      {
        title: "Understand your customers",
        desc: "Gain valuable insights into your customers' cloud usage patterns. Tailor your cloud strategy to meet their needs and expectations.",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Optimize Your Cloud Spending",
        desc: "Uncover the true potential for savings with our cloud cost survey. Identify areas for cost reduction and efficient resource allocation.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Drive customer retention",
        desc: "Retain your customers with cost-effective cloud solutions. Stay competitive and ensure long-term satisfaction.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Perks of using CloudEconomix",
    desc: "Elevate your cloud management with CloudEconomix's comprehensive suite of features. Enjoy seamless integration, real-time analytics, and personalized recommendations.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Unlock More Advantages",
        desc: "Explore additional benefits with CloudEconomix. Utilize our user-friendly interface and advanced features to streamline your cloud cost management further.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Mobile Responsive",
        desc: "CloudEconomix is designed as mobile-first responsive, ensuring a seamless experience across all devices.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Powered by React.js & TailwindCSS",
        desc: "CloudEconomix harnesses the latest technologies and tools, providing a robust foundation for your cloud cost optimization journey.",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};