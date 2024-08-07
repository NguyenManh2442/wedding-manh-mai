import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import MusicPlayer from "src/common/components/Music/MusicPlayer";

function Invitation() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="40px" />
      <CS.CommonTitle>Em hỏi anh hạnh phúc là gì?</CS.CommonTitle>
      <CS.CommonBody>
        <S.InvitationBody>
          Anh cười bảo: Ờ thì như mình vậy<br></br>
          Là bên nhau suốt ngày không bay nhảy<br></br>
          Là im lìm nghe hạnh phúc dịu êm!<br></br>
          <br></br>
          Là mỗi sáng cùng nhau chào bình minh<br></br>
          Tay trong tay đón nắng vàng tươi mới<br></br>
          Là chiều tà ngắm hoàng hôn phơi phới<br></br>
          Đôi mắt nhìn nhau chẳng cần nói một lời.<br></br>
          <br></br>
          Em hỏi anh hạnh phúc là chi?<br></br>
          Anh đáp rằng: hạnh phúc là chúng mình<br></br>
          Là hai trái tim hòa chung nhịp đập<br></br>
          Là cùng bên nhau đến trọn kiếp người.
        </S.InvitationBody>
        <CS.CommonTable>
          <tbody>
            <tr>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_groom_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                <b>Tiến Mạnh</b> &nbsp;&nbsp;🩷&nbsp;&nbsp;
              </S.InvitationImageTd>
              <S.InvitationImageTd
                backgroundImage="/images/brush_trans_bride_light.png"
                style={{ padding: '0px 0px 0px 5px' }}
              >
                <b>Sao Mai</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </S.InvitationImageTd>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.CommonMargin margin="20px" />
      <CS.MainImg src="https://drive.google.com/thumbnail?id=1w56n6HqNXD2ksL1bY-8CtUvAXgvLdwHy&sz=w1000" alt="Love, love, love" />
      <CS.CommonMargin margin="15px" />
      <MusicPlayer />
    </CS.CommonContainer>
  );
}

export default Invitation;
