import { useRef } from 'react';
import * as CS from 'src/common/components/Styles';
import copyToClipboard from 'src/common/utils';

function MapCard() {
  const mapRef = useRef<HTMLElement | null | any>(null);

  const name = '지타워컨벤션';
  const lat = 37.4800335;
  const lon = 126.8953833;

  const navigateNaverMap = () => {
    location.href =
      'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=' +
      lat +
      '&elng=' +
      lon +
      '&etitle=' +
      name;
  };

  const navigateKakaoMap = () => {
    location.href =
      'https://map.kakao.com/link/to/' + name + ',' + lat + ',' + lon;
  };

  const navigateTMap = () => {
    location.href =
      'https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx7179ddde21ca4bfb8e6b03c710138f41&name=' +
      name +
      '&lon=' +
      lon +
      '&lat=' +
      lat;
  };

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>ADDRESS</CS.CommonTitle>
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <b style={{ color: '#6fa8dc' }}>
              Địa chỉ nhà trai:{' '}
              <a href="https://maps.app.goo.gl/sC5vxCkaYH3zVotY7" style={{ color: 'black' }} target="_blank">
                Chản Làng - Yên Sơn - Lục Nam - Bắc Giang
              </a>
              <br></br>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <b style={{ color: '#db7290' }}>
              Địa chỉ nhà gái:{' '}
              <a href="https://maps.app.goo.gl/w6PZ3AzYpWwVUW6R7" style={{ color: 'black' }} target="_blank">
                Nội Chùa - Yên Sơn - Lục Nam - Bắc Giang
              </a>
              <br></br>
            </b>
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="10px" />
        <CS.CommonMargin margin="50px" />
        <CS.CommonMargin margin="30px" />
        <CS.CommonSubTitle>DRESS CODE</CS.CommonSubTitle>
        <CS.CommonTextContainer>
          <CS.CommonP>
            <u>
              <a><b>Hãy khoác lên mình những trang phục bạn cảm thấy đẹp nhất!</b></a>
            </u>
            <br></br>
            <b>Hoặc</b>
            <br></br>
            <a>
              <b>Bạn có thể mặc như sau để có những bức ảnh đẹp:</b>
            </a>
            <br></br>- Trang phục vintage<br></br>- Quần âu đen + Áo sơ mơ trắng (Nam)<br></br>- Trang phục thập niên 8x
          </CS.CommonP>
        </CS.CommonTextContainer>
        <CS.MainImg src="/images/studio/SYD_0487.jpg" alt="Love, love, love" />
        {/* <iframe width="100%" height="300px" src="https://www.youtube.com/embed/F1yZONgVB5I?si=ZhZBkdtP3cWeDLgO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> */}
        <CS.CommonMargin margin="50px" />
      </CS.CommonBody>
    </CS.CommonContainer>
  );
}

export default MapCard;
