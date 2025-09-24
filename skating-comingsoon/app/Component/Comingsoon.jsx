"use client"
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* <div className="">
         <img
          src="../images/Frame 52757.png"
          alt="Walking Illustration"
           className="w-auto h-auto mt-20 animate-skate"
        />
        <img
          src="../images/Vector.png"
          alt="Walking Illustration"
           className="w-auto h-auto"
        />
        
      </div> */}
       <div className="relative mt-36">
         <img
          src="../images/Frame 52757.png"
          alt="Walking Illustration"
           className="w-auto h-auto mt-20 animate-skate absolute top-[-120px] z-1 "
        />

        <img
          src="../images/Frame 1000000879.png"
          alt="Walking Illustration"
           className="w-100"
        />
        
      </div>

      <div className="text-center  rounded-md p-2  ">
        <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-[75px] font-[700] text-[#9B7B2D] mb-5">
          COMING SOON!!
        </h2>
        <p
          className="font-[Poppins] font-medium text-center"
          style={{
            fontSize: "19.25px",
            color: "black",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "1%",
          }}
        >
          We're working hard to finish the website and we'll be ready to launch
          after this brief today.
        </p>
      </div>

      <div className="mt-10 overflow-hidden relative w-full">
        <div className="flex animate-scroll gap-0">
        
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 1"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 2"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 3"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg4.png"
            alt="Gallery 4"
            className="rounded-lg w-100"
          />

     
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 1"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 2"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg3.png"
            alt="Gallery 3"
            className="rounded-lg w-100"
          />
          <img
            src="../images/Comingsoonimg4.png"
            alt="Gallery 4"
            className="rounded-lg w-100"
          />
        </div>

        <style jsx>{`
        
        `}</style>

      </div>
    </div>
  );
};

export default ComingSoon;
