import Image from "next/image";
import React from "react";

const FooterBanner = () => {
  return (
    <div className="p-20 bg-gradient-to-br from-stone-300 to-stone-500 relative overflow-hidden">
      <div className="relative flex flex-col gap-8 justify-center items-center z-50">
        <div className="text-stone-800 flex flex-col justify-center items-center gap-4">
          <h1 className="text-9xl font-light">
            Big Summer <span className="font-bold">Sale</span>
          </h1>
          <span className="text-2xl">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </span>
        </div>
        <button className="uppercase border-2 border-stone-800 cursor-pointer px-14 py-4 rounded-xl text-stone-800 hover:bg-stone-800  hover:text-slate-200 transition-all duration-400 font-bold tracking-wider">
          shop now
        </button>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/img/footer/ipad-1.svg"
          alt="ipad"
          width={250}
          height={200}
          priority
          className="absolute left-8 z-1"
        />
        <Image
          src="/img/footer/ipad-2.svg"
          alt="ipad"
          width={400}
          height={250}
          priority
          className="absolute bottom-2 left-[-80px]"
        />
        <Image
          src="/img/footer/element.svg"
          alt="elem"
          width={400}
          height={250}
          priority
          className="absolute top-[-80px] left-[200px]"
        />
        <Image
          src="/img/footer/iphone.svg"
          alt="iphone"
          width={300}
          height={350}
          priority
          className="absolute top-[-20px] right-[-120px]"
        />
        <Image
          src="/img/footer/apple-watch.svg"
          alt="apple watch"
          width={400}
          height={300}
          className="absolute right-0 bottom-[-100px]"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
