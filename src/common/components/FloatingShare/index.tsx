import LinkIcon from '@mui/icons-material/Link';

import * as CS from 'src/common/components/Styles';
import * as S from './Styles';
import CircleIcon from '../CircleIcon';
import { color } from 'src/common/utils/styles';
import copyToClipboard from 'src/common/utils';

interface FloatingShareProps {
  showAccount: boolean;
}

function FloatingShare({ showAccount = false }: FloatingShareProps) {
  var shareUrlAddress =
    'https://wedding-invitation-hazel.vercel.app?showAccount=' +
    showAccount.toString();

  const shareKakao = (shareUrl: string) => {
    window.Kakao.Share.sendDefault({
      objectType: 'location',
      address: '서울 구로구 디지털로26길 38 지타워몰 2층',
      addressTitle: '지타워컨벤션',
      content: {
        title: '인환 ♥︎ 채윤 결혼식',
        description: '2023년 4월 8일\n많이 많이 축하해주세요~♥︎',
        imageUrl:
          'https://wedding-invitation-hazel.vercel.app/images/studio/SYD_0613.jpg',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      social: {
        likeCount: 17171771,
        commentCount: 486,
        sharedCount: 1052,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <S.FloatingShareContainer>
      <CS.ImageContainer
        width="40px"
      >
        <a
          href="https://www.facebook.com/messages/t/100004787133054"
          target="_blank"
          rel="Tiến Mạnh"
        >
          <CS.MainImg

            src="/images/share/blue-message-icon2.png"
            alt="Logo message"
          />
        </a>
      </CS.ImageContainer>
      <CS.ImageContainer
        width="40px"
      >
        <a
          href="https://www.facebook.com/messages/t/100005123344946"
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
