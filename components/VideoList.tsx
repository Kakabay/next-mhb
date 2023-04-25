import { IVideo } from "@/typings/video.type";
import SectionTitle from "./SectionTitle";
import VideoItem from "./VideoItem";
import { v4 } from "uuid";
import { FiMoreHorizontal } from "react-icons/fi";

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
      {isExtendable ? (
        <div className="flex justify-center">
          <button
            type="button"
            className="flex gap-2 rounded-five py-2 px-2 w-[180px] bg-mlightblue items-center justify-center"
          >
            <FiMoreHorizontal color="white" width={14} height={7} />
            <span className="font-redhat text-lg font-bold text-white">
              Ýene gör
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default VideoList;
