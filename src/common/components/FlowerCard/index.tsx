import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function FlowerCard() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonBody>
        <CS.CommonMargin margin="20px" />
        <CS.MainImg src="https://drive.google.com/thumbnail?id=1gTQqopfWaDAitodXV4PWsSqQ1o_Y1Cwr&sz=w1000" alt="Love, love, love" />
        <CS.CommonMargin margin="20px" />
        <S.FlowerCardBody>
          <S.FlowerCardTextContainer>
            <CS.CommonTable>
              <tbody>
                <tr>
                  <S.FlowerCardTd>
                    <S.FlowerCardP>Chúng tớ sẽ thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tớ 🩷</S.FlowerCardP>
                  </S.FlowerCardTd>
                </tr>
              </tbody>
            </CS.CommonTable>
          </S.FlowerCardTextContainer>
        </S.FlowerCardBody>
      </CS.CommonBody>
      <CS.CommonMargin />
    </CS.CommonContainer>
  );
}

export default FlowerCard;
