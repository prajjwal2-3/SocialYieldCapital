import React from "react";

const Sub = () => {
  return (
    <div className="flex border-b border-black/20">
      <section className="w-4/12 h-40 pt-10 pb-10 flex flex-col border-r border-black/20 items-center justify-center">
        <p className="text-4xl font-semibold text-[#507B8B]">$ 879m</p>
        <p className="text-[#6B7579]">Total Investment</p>
      </section>
      <section className="w-4/12 h-40 pt-10 pb-10 flex flex-col border-r border-black/20 items-center justify-center">
        <p className="text-4xl font-semibold text-[#507B8B]">400+</p>
        <p className="text-[#6B7579]">Properties Listed</p>
      </section>
      <section className="w-4/12 h-40 pt-10 pb-10 flex flex-col 
       border-black/20 items-center justify-center">
        <p className="text-4xl font-semibold text-[#507B8B]">23K+</p>
        <p className="text-[#6B7579]">Investors Joined</p>
      </section>
    </div>
  );
};

export default Sub;
