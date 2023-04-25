import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
import VideoList from "@/components/VideoList";
import { IVideo } from "@/typings/video.type";

const Treasury = () => {
  const samples: IVideo[] = [
    {
      id: 1,
      img: "/videos_1.jpg",
      title: "Ilkinji 1000 gün",
      views: "610K",
      premium: true,
      source: { id: 1, img: "/video_source_1.jpg", name: "Ashgabat" },
    },
    {
      id: 2,
      img: "/videos_2.jpg",
      title: "Maşgala Gatnaşyklary",
      views: "251K",
      premium: false,
      source: { id: 2, img: "/video_source_2.jpg", name: "Altyn Asyr" },
    },
    {
      id: 3,
      img: "/videos_3.jpg",
      title: "Owaz Top-10",
      views: "78K",
      premium: false,
      source: { id: 3, img: "/video_source_3.jpg", name: "Radio" },
    },
    {
      id: 4,
      img: "/videos_4.jpg",
      title: "Arhiw",
      views: "251K",
      premium: true,
      source: { id: 4, img: "/video_source_4.jpg", name: "Miras" },
    },
    {
      id: 5,
      img: "/videos_1.jpg",
      title: "Ilkinji 1000 gün",
      views: "610K",
      premium: false,
      source: { id: 1, img: "/video_source_1.jpg", name: "Ashgabat" },
    },
    {
      id: 6,
      img: "/videos_2.jpg",
      title: "Maşgala Gatnaşyklary",
      views: "251K",
      premium: false,
      source: { id: 2, img: "/video_source_2.jpg", name: "Altyn Asyr" },
    },
    {
      id: 7,
      img: "/videos_3.jpg",
      title: "Owaz Top-10",
      views: "78K",
      premium: false,
      source: { id: 3, img: "/video_source_3.jpg", name: "Radio" },
    },
    {
      id: 8,
      img: "/videos_4.jpg",
      title: "Arhiw",
      views: "251K",
      premium: true,
      source: { id: 4, img: "/video_source_4.jpg", name: "Miras" },
    },
    {
      id: 9,
      img: "/videos_1.jpg",
      title: "Ilkinji 1000 gün",
      views: "610K",
      premium: false,
      source: { id: 1, img: "/video_source_1.jpg", name: "Ashgabat" },
    },
    {
      id: 10,
      img: "/videos_2.jpg",
      title: "Maşgala Gatnaşyklary",
      views: "251K",
      premium: false,
      source: { id: 2, img: "/video_source_2.jpg", name: "Altyn Asyr" },
    },
    {
      id: 11,
      img: "/videos_3.jpg",
      title: "Owaz Top-10",
      views: "78K",
      premium: true,
      source: { id: 3, img: "/video_source_3.jpg", name: "Radio" },
    },
    {
      id: 12,
      img: "/videos_4.jpg",
      title: "Arhiw",
      views: "251K",
      premium: true,
      source: { id: 4, img: "/video_source_4.jpg", name: "Miras" },
    },
    {
      id: 13,
      img: "/videos_1.jpg",
      title: "Ilkinji 1000 gün",
      views: "610K",
      premium: false,
      source: { id: 1, img: "/video_source_1.jpg", name: "Ashgabat" },
    },
    {
      id: 14,
      img: "/videos_2.jpg",
      title: "Maşgala Gatnaşyklary",
      views: "251K",
      premium: true,
      source: { id: 2, img: "/video_source_2.jpg", name: "Altyn Asyr" },
    },
    {
      id: 15,
      img: "/videos_3.jpg",
      title: "Owaz Top-10",
      views: "78K",
      premium: false,
      source: { id: 3, img: "/video_source_3.jpg", name: "Radio" },
    },
    {
      id: 16,
      img: "/videos_4.jpg",
      title: "Arhiw",
      views: "251K",
      premium: true,
      source: { id: 4, img: "/video_source_4.jpg", name: "Miras" },
    },
  ];

  return (
    <div className="treasury">
      <div className="container">
        <div className="treasury-inner pt-8 pb-14">
          <h1 className="hidden">Treasury</h1>
          <div className="treasury-top flex flex-col gap-6">
            <SearchBar />
            <Categories />
            <VideoList items={samples} isExtendable sectionTitle="Ählisi" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
