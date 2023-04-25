import LinkBlock from "@/components/home/LinkBlock";
import MainSwiper from "@/components/home/MainSwiper";
import Marque from "@/components/home/Marque";
import SmallSwiper from "@/components/home/SmallSwiper";
import Toolbar from "@/components/home/Toolbar";

const Home = () => {
  const images: string[] = [
    "/small_banner_1.jpg",
    "/small_banner_2.jpg",
    "/small_banner_3.jpg",
    "/small_banner_4.jpg",
  ];
  return (
    <main className="grid grid-cols-home_custom">
      <h1 className="hidden">HOME</h1>
      <Toolbar />
      <MainSwiper />
      <div className="grid grid-cols-2 grid-rows-full3 h-home overflow-hidden">
        <LinkBlock href="/advertising" content="Mahabat" color="#5461F0" />
        <LinkBlock href="/live" content="Göni Ýaýlym" color="#EB4765" />
        <SmallSwiper images={images} />
        <SmallSwiper images={images} />
        <SmallSwiper images={images} />
        <SmallSwiper images={images} />
      </div>
      <Marque />
    </main>
  );
};

export default Home;
