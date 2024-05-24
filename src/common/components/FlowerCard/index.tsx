import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

function FlowerCard() {
  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonBody>
        <CS.MainImg
          src="/images/barunson/tit_remittance_fla.png"
          alt="Love, love, love"
        />
        <S.FlowerCardBody>
          <S.FlowerCardTextContainer>
            <CS.CommonTable>
              <tbody>
                <tr>
                  <S.FlowerCardTd margin-left="50px">
                    <S.FlowerCardP>Chúng tớ sẽ thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng tớ 🩷</S.FlowerCardP>
                  </S.FlowerCardTd>
                  {/* <td>
                      <S.FlowerCardImageContainer>
                        <CS.MainImg
                          src="/images/barunson/flowers_img_v2.png"
                          alt="Love, love, love"
                        />
                      </S.FlowerCardImageContainer>
                    </td> */}
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
