import { IVideo } from "@/typings/video.type";
import SectionTitle from "./SectionTitle";
import VideoItem from "./VideoItem";
import { v4 } from "uuid";

interface IProps {
  sectionTitle?: string;
  isSlides?: boolean;
  isExtendable?: boolean;
  items: IVideo[];
}

const VideoList = ({ isSlides, sectionTitle, items, isExtendable }: IProps) => {
  return (
    <div className="video-list flex flex-col gap-8">
      {sectionTitle ? <SectionTitle title={sectionTitle} /> : null}
      <div className="grid grid-cols-four gap-x-2 gap-y-6">
        {items.map((item) => (
          <VideoItem
            img={item.img}
            premium={item.premium}
            source={item.source}
            title={item.title}
            views={item.views}
            id={item.id}
            key={v4()}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
