import { IVideo } from "@/typings/video.type";
import Image from "next/image";
import Premium from "./Premium";
import Link from "next/link";

const VideoItem = ({ img, source, title, views, premium }: IVideo) => {
  return (
    <Link href={"/"} className="video-list-item flex flex-col gap-2">
      <div className="relative h-[160px] w-full overflow-hidden rounded-five">
        <Image
          src={img}
          alt={`video_${img}`}
          unoptimized
          unselectable="off"
          className="top-0 left-0 w-full h-full object-cover z-0 absolute"
          width={280}
          height={160}
        />
        <Image
          src={"/play.svg"}
          alt={`video_${img}`}
          unoptimized
          unselectable="off"
          className="top-[50%] left-[50%] w-[52px] h-[52px] object-cover z-10 -translate-x-[50%] -translate-y-[50%] absolute"
          width={52}
          height={52}
        />
        {premium ? <Premium /> : null}
      </div>
      <div className="flex gap-3 justify-start items-center">
        <div className="rounded-full border border-solid border-[#929292] w-11 h-11 overflow-hidden">
          <Image
            src={source.img}
            alt={`source_${source.img}`}
            unoptimized
            unselectable="off"
            className="h-full w-full object-contain"
            width={44}
            height={44}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-mw_sans font-bold text-lg text-black">{title}</h3>
          <span className="font-redhat text-lg font-normal text-black">{`${views} Views`}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;
