import * as CS from 'src/common/components/Styles';

function MapCard() {
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
            <a><b>Hãy khoác lên mình những trang phục mà bạn cảm thấy đẹp nhất, tự tin nhất nha!</b></a>
            <br></br>
            <b>Hoặc</b>
            <br></br>
            <a>
              <b>Bạn có thể mặc như sau để có những bức ảnh đẹp cho riêng mình:</b>
            </a>
            <br></br>
            - Trang phục vintage<br></br>
            - Quần âu, ống rộng, sơmi, áo phông cổ tròn (Nam)<br></br>
            - Trang phục thập niên 8x<br></br>
            - Quần ống rộng, ống loe, sơmi đuôi tôm, váy/yếm bò, hoạ tiết kẻ nhiều màu, chấm bi,…(Nữ)<br></br>
            <b>(Mọi thứ đều không bắt buộc)</b>
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
