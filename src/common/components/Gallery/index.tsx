import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as CS from 'src/common/components/Styles';

function Gallery() {
  const images = [
    {
      original: '/images/mobile/VVT01244.jpg',
      thumbnail: '/images/mobile/VVT01244.jpg',
    },
    {
      original: '/images/mobile/VVT01098.jpg',
      thumbnail: '/images/mobile/VVT01098.jpg',
    },
    {
      original: '/images/mobile/VVT01127.jpg',
      thumbnail: '/images/mobile/VVT01127.jpg',
    },
    {
      original: '/images/mobile/VVT01272.jpg',
      thumbnail: '/images/mobile/VVT01272.jpg',
    },
    {
      original: '/images/mobile/VVT01269.jpg',
      thumbnail: '/images/mobile/VVT01269.jpg',
    },
    {
      original: '/images/mobile/VVT00360.jpg',
      thumbnail: '/images/mobile/VVT00360.jpg',
    },
    {
      original: '/images/mobile/VVT00420.jpg',
      thumbnail: '/images/mobile/VVT00420.jpg',
    },
    {
      original: '/images/mobile/VVT00443.jpg',
      thumbnail: '/images/mobile/VVT00443.jpg',
    },
    {
      original: '/images/mobile/VVT00469.jpg',
      thumbnail: '/images/mobile/VVT00469.jpg',
    },
    {
      original: '/images/mobile/VVT00554.jpg',
      thumbnail: '/images/mobile/VVT00554.jpg',
    },
    {
      original: '/images/mobile/VVT00585.jpg',
      thumbnail: '/images/mobile/VVT00585.jpg',
    },
    {
      original: '/images/mobile/VVT00616.jpg',
      thumbnail: '/images/mobile/VVT00616.jpg',
    },
    {
      original: '/images/mobile/VVT00691.jpg',
      thumbnail: '/images/mobile/VVT00691.jpg',
    },
    {
      original: '/images/mobile/VVT00855.jpg',
      thumbnail: '/images/mobile/VVT00855.jpg',
    },
    {
      original: '/images/mobile/VVT00327.jpg',
      thumbnail: '/images/mobile/VVT00327.jpg',
    },
    {
      original: '/images/mobile/VVT00002.jpg',
      thumbnail: '/images/mobile/VVT00002.jpg',
    },
    {
      original: '/images/mobile/VVT00019.jpg',
      thumbnail: '/images/mobile/VVT00019.jpg',
    },
    {
      original: '/images/mobile/VVT00024.jpg',
      thumbnail: '/images/mobile/VVT00024.jpg',
    },
    {
      original: '/images/mobile/VVT00054.jpg',
      thumbnail: '/images/mobile/VVT00054.jpg',
    },
    {
      original: '/images/mobile/VVT00093.jpg',
      thumbnail: '/images/mobile/VVT00093.jpg',
    },
    {
      original: '/images/mobile/VVT00221.jpg',
      thumbnail: '/images/mobile/VVT00221.jpg',
    },
    {
      original: '/images/mobile/VVT00168.jpg',
      thumbnail: '/images/mobile/VVT00168.jpg',
    },
    {
      original: '/images/mobile/VVT00336.jpg',
      thumbnail: '/images/mobile/VVT00336.jpg',
    },
    {
      original: '/images/mobile/VVT00144.jpg',
      thumbnail: '/images/mobile/VVT00144.jpg',
    },
  ];

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Gallery</CS.CommonTitle>
      <CS.CommonBody>
        <ReactImageGallery
          items={images}
          lazyLoad={true}
          thumbnailPosition="right"
          showIndex={true}
          autoPlay={true}
          slideInterval={4000}
        />
      </CS.CommonBody>
      <CS.CommonMargin margin="50px" />
    </CS.CommonContainer>
  );
}

export default Gallery;
