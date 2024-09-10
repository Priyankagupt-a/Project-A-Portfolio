import React from "react";
import { pricingOptions } from "../constants"; // Make sure your options are updated for a portfolio
import { CheckCircle2 } from "lucide-react";

const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 font-bold">
        Services & Pricing
      </h2>
      <p className="text-center text-lg max-w-3xl mx-auto text-neutral-500 mb-10">
        Whether you're looking for responsive UI designs, dynamic React applications, or clean, maintainable code, I offer flexible services to suit your needs. Choose the right package for your project.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {pricingOptions.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="p-10 border border-neutral-700 rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <p className="text-4xl mb-6 font-semibold">
                {item.title}
                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl font-bold">{item.price}</span>
                <span className="text-neutral-400 tracking-tight text-lg"> /Month</span>
              </p>
              <ul className="mb-8 space-y-4">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <CheckCircle2 className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="h-12 mt-10 tracking-tight inline-flex 
                justify-center items-center text-center w-full text-xl font-semibold
                 bg-gradient-to-r from-orange-500 to-orange-800 text-white py-3 rounded-lg transition duration-200 hover:bg-orange-600"
              >
                Get Started
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
