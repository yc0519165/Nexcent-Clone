import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Secrion1 } from "../components/Secrion1";
import { Section10 } from "../components/Section10";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";
import { Section4 } from "../components/Section4";
import { Section5 } from "../components/Section5";
import { Section6 } from "../components/Section6";
import Section7 from "../components/Section7";
import { Section8 } from "../components/Section8";
import { Section9 } from "../components/Section9";

export const Home = () => {
  return (
    <>
      <div className="h-auto w-full  selection:bg-[#C2F578] selection:text-black">
        <Header />
        <Secrion1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Footer />
      </div>
    </>
  );
};
