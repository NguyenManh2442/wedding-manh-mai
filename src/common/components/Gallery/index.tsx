import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import * as CS from 'src/common/components/Styles';

// Define the URL of the API endpoint
const apiUrl = 'https://api.sheetapi.rest/api/v1/sheet/lwaSpUlrv39QiKJx5Y1GV';

// Define an interface for the data structure you expect from the API
interface ImageObject {
  original: string;
  thumbnail: string;
}

// Function to call the API and handle the response
async function fetchData(): Promise<ImageObject[]> {
  try {
    const response = await fetch(apiUrl);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response into a typed object
    const data: ImageObject[] = await response.json();

    // Return the data
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function Gallery() {
  let listImages: ImageObject[] = []
  fetchData().then(data => {
    for (const item of data) {
      var itemImage: ImageObject = {
        original: 'https://drive.google.com/thumbnail?id=' + item.original + '&sz=w1000',
        thumbnail: 'https://drive.google.com/thumbnail?id=' + item.thumbnail + '&sz=w1000',
      };
      listImages.push(itemImage);
    }
  }).catch(error => {
    console.error('Error:', error);
  });

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Gallery</CS.CommonTitle>
      <CS.CommonBody>
        <ReactImageGallery
          items={listImages}
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
