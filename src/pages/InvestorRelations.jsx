import React from "react";
import { Invstbg } from "../assets";

const InvestorRelations = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-[#0000006c] w-full h-full z-10"></div>
        <img className="w-full object-cover h-[300px] xl:h-[400px]" src={Invstbg} alt="" />
        <div className="absolute top-0 left-0 flex flex-col  justify-center text-center items-center z-20 text-white h-full">
          <div className="w-[95%] md:w-[80%] xl:w-[70%] mx-auto">
            <h2 className="text-2xl xl:text-5xl font-semibold">
              Investing in Tomorrow's Energy Landscape: Partner with Eallisto
            </h2>
            <p className="text-sm md:text-base xl:px-10 pt-5">
              Eallisto Energies off ers a compelling vista for investors seeking
              both robust returns and the profound satisfaction of contributing
              to a planet powered by clean energy.
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 xl:w-10/12 mx-auto py-10 flex flex-col gap-8 xl:text-lg">
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            A Sector Surging with Potential
          </h5>
          <p>
            The renewable energy realm is experiencing exponential growth,
            fueled by a global imperative for sustainability and an
            ever-increasing demand for clean power solutions.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">Strategic Land Visionaries</h5>
          <p>
            Our proactive approach to identifying and cultivating prime land for
            large-scale solar endeavors ensures a vibrant and impactful
            portfolio of projects poised for success.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            Harvesting Sustainable Returns
          </h5>
          <p>
            Our business model is engineered to yield attractive returns for our
            partners through masterful project execution, optimized energy
            distribution, and astute long-term operational stewardship.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            A Tangible Legacy of Sustainability
          </h5>
          <p>
            By joining forces with Eallisto Energies, you directly contribute to
            a signifi cant reduction in carbon emissions, nurturing a more
            sustainable and vibrant future for all.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            A Leadership Team of Visionaries
          </h5>
          <p>
            Our leadership comprises seasoned experts in energy, fi nance, and
            transformative project development, ensuring prudent investment
            management and the realization of ambitious goals.
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="font-medium text-lg xl:text-2xl">
            Transparency as Our Guiding Principle
          </h5>
          <p>
            We are steadfast in our commitment to providing our investors with
            clear, comprehensive, and timely insights into project milestones,
            fi nancial performance, and our collective environmental impact.
          </p>
        </div>
        <div className="space-y-2">
        <h5 className="font-medium text-lg xl:text-2xl">
        Explore Partnership Pathways
        </h5>
        <h5 className="font-medium text-lg xl:text-2xl">
        Unveil Our Investor Blueprint
        </h5>
        <h5 className="font-medium text-lg xl:text-2xl">
        Connect with Our Investment Visionaries
        </h5>

      </div>
      </div>
    </>
  );
};

export default InvestorRelations;
