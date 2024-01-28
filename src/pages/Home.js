import React from 'react'
import Container from "../components/container.js";
import heroImg from "../assets/images/hero.png";
import Benefits from '../components/benefits.js';
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data.js";

function Home() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
               SAVE ON CLOUD COSTS
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              CloudEconomix is your go-to solution for optimizing cloud expenses. Our platform conducts in-depth surveys on your cloud costs, 
              providing tailored price optimizations. Powered by React.js & TailwindCSS, and completely open-source.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/survey"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get Started Now!
              </a>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <SectionTitle
        pretitle="CloudEconomix Benefits"
        title=" Why should you choose CloudEconomix for cloud cost optimization?">
        CloudEconomix is a free platform for startups and indie projects. 
        It's built with React.js & TailwindCSS, and it's completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
    </>
  )
}

export default Home