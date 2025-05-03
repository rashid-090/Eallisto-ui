import React from "react";
import { Sustabg } from "../assets";

const SustainabilityAndEasg = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-[#0000006c] w-full h-full z-10"></div>
        <img
          className="w-full object-cover object-top h-[300px] xl:h-[400px]"
          src={Sustabg}
          alt=""
        />
        <div className="absolute top-0 left-0 flex flex-col  justify-center text-center items-center w-full z-20 text-white h-full">
          <div className="w-[95%] md:w-[80%] xl:w-[70%] mx-auto">
            <h2 className="text-2xl xl:text-4xl font-semibold">
              Our Enduring Promise: Sustainability &<br/> Responsible Growth ESG
            </h2>
          </div>
        </div>
      </div>
      <div className="w-11/12 xl:w-10/12 mx-auto py-10 flex flex-col gap-8 xl:text-lg">
        <div className="space-y-2">
          <p>
            At Eallisto Energies, sustainability isn't a mere business tactic;
            it's the very essence of our purpose, woven into the fabric of our
            every action. We embrace Environmental, Social, and Governance (ESG)
            principles with unwavering dedication, recognizing our profound
            responsibility to generations yet to come and the delicate balance
            of our planet.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="text-2xl xl:text-3xl pb-2 font-semibold">
            Our ESG Commitments
          </h5>
          <h5 className="font-medium text-lg xl:text-2xl">
            Environmental Stewardship
          </h5>
          <p>
            We actively promote the adoption of clean energy technologies,
            reduce carbon emissions through our projects, and strive for
            environmentally responsible practices in all our endeavors.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            Social Responsibility:
          </h5>
          <p>
            We are dedicated to fostering positive relationships with the
            communities in which we operate, creating local employment
            opportunities, and adhering to the highest ethical standards.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">Good Governance</h5>
          <p>
            We maintain transparent and accountable corporate governance
            practices, ensuring responsible decision-making and long-term value
            creation for all stakeholders.
          </p>
        </div>
        <div className="space-y-2">
          <p>
            By choosing Eallisto Energies, you are not only investing in
            reliable and cost-effective energy solutions but also partnering
            with a company that prioritizes a sustainable and equitable future
            for all.
          </p>
        </div>
      </div>
    </>
  );
};

export default SustainabilityAndEasg;
