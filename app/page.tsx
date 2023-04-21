import LinkBlock from "@/components/home/LinkBlock";
import MainSwiper from "@/components/home/MainSwiper";

const Home = () => {
  return (
    <main className="grid grid-cols-home_custom">
      <h1 className="hidden">HOME</h1>
      <MainSwiper />
      <div className="grid grid-cols-2 grid-rows-3">
        <LinkBlock href="/advertising" content="Mahabat" color="#5461F0" />
        <LinkBlock href="/live" content="Göni Ýaýlym" color="#EB4765" />
      </div>
    </main>
  );
};

export default Home;
