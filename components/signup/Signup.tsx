import React from "react";
import Header from "../Home/Header";

const Signup = () => {
  return (
    <div className="pt-16">
      
      <section className="w-full min-h-screen flex bg-[#E3EAEC] px-32 py-12 4xl:py-20 justify-between">
        <div className="w-5/12 gap-9 h-[27rem]  flex flex-col justify-evenly">
          <p className="text-4xl 4xl:text-6xl font-semibold text-[#1C2B31] pr-7">
            Invest in real-estate with Social yield capital
          </p>
          <p className="text-base 4xl:text-2xl font-medium text-[#1C2B31]">
            Before you can Invest
          </p>
          <p className="text-[#6B7579] 4xl:text-xl w-10/12">
            By submitting this form, you are starting the registration process.
            As part of your registration, we will ask you to answer some
            questions about investing, your investment preferences (including
            what type of investor you are) and finally to provide some
            information about yourself. You will not be able to invest for the
            first 24-hours after starting your registration. This is to allow
            you to carefully consider whether these investments are right for
            you. During this period you will be able to review the investment
            opportunities available on the site as well as our content on real
            estate investment opportunities.
          </p>
        </div>
        <div className="w-5/12">
          <div className="bg-[#F6F8F9] rounded-sm p-8 ">
            <p className="text-L-Primary text-3xl font-semibold">
              Create an account
            </p>
            <p className="text-L-Secondary text-base font-medium py-3">
              By registering on our platform, you are requesting to see the full
              offer and to be able to invest.
            </p>
            <section className="flex flex-col gap-6">
              <div className="flex gap-2 ">
                <div className="flex flex-col w-[14.75rem] 2xl:w-6/12">
                  <span className="text-L-Secondary">First name</span>
                  <input
                    type="text"
                    placeholder="Eg.Peter"
                    className="p-[12px_20px] rounded outline-none  border-2 border-Border"
                  />
                </div>
                <div className="flex flex-col w-56 2xl:w-6/12">
                  <span className="text-L-Secondary">Last name</span>
                  <input
                    type="text"
                    placeholder="Eg.Peter"
                    className="p-[12px_20px] rounded outline-none  border-2 border-Border"
                  />
                </div>
              </div>
              <div className="flex flex-col ">
                <span className="text-L-Secondary">Email</span>
                <input
                  type="text"
                  placeholder="Eg.Peter@gmail.com"
                  className="p-[12px_20px] rounded outline-none  border-2 border-Border"
                />
              </div>

              <div className="flex flex-col ">
                <span className="text-L-Secondary">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="p-[12px_20px] rounded outline-none border-2 border-Border"
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-L-Secondary">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="p-[12px_20px] rounded outline-none border-2 border-Border"
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-L-Secondary">Confirm your password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="p-[12px_20px] rounded outline-none border-2 border-Border"
                />
              </div>
            </section>
            <div className="">
            <button className="w-full bg-Brand/Primary rounded-full text-center text-Sur-White my-7 p-[12px_20px]">Create my account</button>
        </div>
          </div>
          
        </div>
       
      </section>
    </div>
  );
};

export default Signup;
