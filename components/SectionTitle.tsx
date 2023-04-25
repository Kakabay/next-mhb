import { SlEye } from "react-icons/sl";

interface IProps {
  title: string;
  views?: number;
}

const SectionTitle = ({ title, views }: IProps) => {
  return (
    <div className="section-title flex flex-col gap-5">
      <h2 className="font-aeroport text-[32px] font-bold">{title}</h2>
      {views ? (
        <div className="flex gap-2">
          <SlEye
            color="#494949"
            width={22}
            height={13}
            className="w-[22px] h-[13px]"
          />
          <span className="font-redhat text-lg font-normal text-[#494949]">
            {views}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default SectionTitle;
