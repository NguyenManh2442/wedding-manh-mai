import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

interface FloatingShareProps {
  showAccount: boolean;
}

function FloatingShare({ showAccount = false }: FloatingShareProps) {
  return (
    <S.FloatingShareContainer>
      <CS.ImageContainer
        width="40px"
      >
        <a
          href="https://www.m.me/100004787133054"
          target="_blank"
          rel="Tiến Mạnh"
        >
          <CS.MainImg

            src="/images/share/blue-message-icon.png"
            alt="Logo message"
          />
        </a>
      </CS.ImageContainer>
      <CS.ImageContainer
        width="40px"
      >
        <a
          href="https://www.m.me/100005123344946"
          target="_blank"
          rel="Sao Mai"
        >
          <CS.MainImg
            src="/images/share/pink-messenger-icon.png"
            alt="Logo message"
          />
        </a>
      </CS.ImageContainer>
    </S.FloatingShareContainer>
  );
}

export default FloatingShare;
