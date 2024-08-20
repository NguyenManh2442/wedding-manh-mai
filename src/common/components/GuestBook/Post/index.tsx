import * as CS from 'src/common/components/Styles';
import * as S from './Styles';

interface PostProps {
  name: string;
  message: string;
  date: Date;
}

function Post({ name, message, date }: PostProps) {
  return (
    <>
      <S.PostBox>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td style={{ width: '65%' }}>
                <S.PostTitle>{name}</S.PostTitle>
              </td>
              <td style={{ width: '25%' }}>
                <S.PostDate>
                  {date.toLocaleDateString()}
                </S.PostDate>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <S.PostContent>{message}</S.PostContent>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </S.PostBox>
    </>
  );
}

export default Post;
