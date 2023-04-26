import Aside from '@/components/Aside';
import React from 'react';
import VideoList from '@/components/VideoList';

const VideoItem = () => {
  const samples: IVideo[] = [
    {
      id: 1,
      img: '/videos_1.jpg',
      title: 'Ilkinji 1000 gün',
      views: '610K',
      premium: true,
      source: { id: 1, img: '/video_source_1.jpg', name: 'Ashgabat' },
    },
    {
      id: 2,
      img: '/videos_2.jpg',
      title: 'Maşgala Gatnaşyklary',
      views: '251K',
      premium: false,
      source: { id: 2, img: '/video_source_2.jpg', name: 'Altyn Asyr' },
    },
    {
      id: 3,
      img: '/videos_3.jpg',
      title: 'Owaz Top-10',
      views: '78K',
      premium: false,
      source: { id: 3, img: '/video_source_3.jpg', name: 'Radio' },
    },
    {
      id: 4,
      img: '/videos_4.jpg',
      title: 'Arhiw',
      views: '251K',
      premium: true,
      source: { id: 4, img: '/video_source_4.jpg', name: 'Miras' },
    },
  ];

  return (
    <div className="video-item mt-6">
      <div className="container">
        <div className="video-item-wrapper flex flex-row gap-8">
          <Aside />
          <div className="video-item-inner">
            <VideoList items={samples} isExtendable sectionTitle="Baglanyşykly Wideolar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
