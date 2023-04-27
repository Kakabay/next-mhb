import { ISource } from '../typings/source.type';
import Image from 'next/image';

const Aside = () => {
  const samples: ISource[] = [
    { id: 1, img: '/video_source_1.jpg', name: 'Ashgabat' },
    { id: 2, img: '/video_source_2.jpg', name: 'Altyn Asyr' },
    { id: 3, img: '/video_source_3.jpg', name: 'Radio' },
    { id: 4, img: '/video_source_4.jpg', name: 'Miras' },
    { id: 5, img: '/video_source_1.jpg', name: 'Ashgabat' },
    { id: 6, img: '/video_source_2.jpg', name: 'Altyn Asyr' },
    { id: 7, img: '/video_source_3.jpg', name: 'Radio' },
    { id: 8, img: '/video_source_4.jpg', name: 'Miras' },
    { id: 9, img: '/video_source_1.jpg', name: 'Ashgabat' },
    { id: 10, img: '/video_source_2.jpg', name: 'Altyn Asyr' },
    { id: 11, img: '/video_source_3.jpg', name: 'Radio' },
    { id: 12, img: '/video_source_4.jpg', name: 'Miras' },
  ];

  return (
    <aside className="aside flex flex-col gap-3 pr-7 border border-t-0 border-l-0 border-b-0 border-r-gray-400 h-fit w-fit pb-5">
      {samples.map((image) => (
        <div
          className="aside-img w-14 h-14 rounded-full overflow-hidden border py-3 px-2 bg-white border-gray-500"
          key={image.id}>
          <Image
            src={image.img}
            alt={`source_${image.name}`}
            unoptimized
            unselectable="off"
            className="h-full w-full object-contain"
            width={44}
            height={44}
          />
        </div>
      ))}
    </aside>
  );
};

export default Aside;
