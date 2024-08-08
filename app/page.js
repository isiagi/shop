import Header from "./ui/header/Header";
import CardUi from "./ui/card/Card";
import SectionHeader from "./ui/sectionHeader/SectionHeader";
import Banner from "./ui/banner/Banner";
import GridBanner from "./ui/banner/GridBanner";
import ServiceBanner from "./ui/banner/ServiceBanner";
import MiniBanner from "./ui/miniBanner/MiniBanner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-fluid gap-4 px-5 py-9">
        {Array.from({ length: 3 }).map((_, index) => (
          <MiniBanner key={index} />
        ))}
      </div>
      <div>
        <SectionHeader />
        <div className="p-6 grid grid-cols-fluid gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardUi key={index} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-fluid gap-4 px-5 py-9">
        {Array.from({ length: 2 }).map((_, index) => (
          <MiniBanner key={index} />
        ))}
      </div>

      <div>
        <SectionHeader />
        <div className="p-6 grid grid-cols-fluid gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardUi key={index} pathname={"/"} />
          ))}
        </div>
      </div>
      <GridBanner />
      <div>
        <SectionHeader />
        <div className="p-6 grid grid-cols-fluid gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <CardUi key={index} />
          ))}
        </div>
      </div>
      <Banner />
      <ServiceBanner />
    </>
  );
}
