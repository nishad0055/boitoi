import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
       <div className="flex justify-center items-center" >
          <div className="text-center text-white">
              <h2 className="lg:text-6xl text-4xl font-serif font-bold mb-2" >2000 + Used Books On Sale</h2>
              <p className="text-lg" >Buy And Sell Used Books In Bangladesh. Search And Buy Second Hand Books Near You. Post Free Ad To Sell Old Books In City</p>
              <div className=" mt-5">
                <button className="btn btn-outline btn-warning mr-4 lg:text-xl" >Sell Books</button>
                <button className="btn btn-outline btn-warning lg:text-xl" >Buy Books</button>
              </div>
          </div>
       </div>
    </div>
  );
};

export default Hero;
