import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "./Button";

const PricingCard = () => {
    // const classes = classNames("mx-auto px-3 py-1.5 border bg-yellow-400");
  return (
    
    <div className="p-4  w-[360px] shadow-md m-4 rounded-xl bg-gray-50 border">
      <div className="py-4">
        <h3 className="font-bold text-xl">Hobby</h3>
        <p className="font-bold text-4xl">$0</p>
        <p className="text-sm">Start your next side project</p>
      </div>
    
      {/* Description */}
      <div className="py-8">
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Support for 35+ Frameworks</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Functions(Serverles)</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Automatic CI/CD (Git Integration)</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Support for 35+ Frameworks</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Web Analytics</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Fast Globally (Edge Network)</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Community Support</p>
        <p className="text-gray-400  flex items-center py-1 text-sm"> <FaCircleCheck className="text-black mr-2" />Starter Database (KV, Postgres)</p>
      </div>

      {/* Button */}
      <div className="py-6">
        <Button className={`px-3 py-2 border-[1px]  border-black flex justify-between items-center w-full rounded-md`} >
            <p className="text-sm">Start Deploying</p>
        </Button>
      </div>

    </div>
  );
};

export default PricingCard;
