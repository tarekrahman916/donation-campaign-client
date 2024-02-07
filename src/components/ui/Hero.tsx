import heroImage from "@/assets/Hero.jpg";
import Image from "next/image";
import SearchField from "./SearchField";

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:text-gray-100">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center lg:pl-10">
        <div className="p-5">
          <h1 className=" font-bold  text-5xl">
            I Grow By Helping People In Need
          </h1>
          <SearchField />
        </div>
        <div>
          <Image src={heroImage} alt="top_banner" width={800} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
