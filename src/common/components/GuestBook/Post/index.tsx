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
              <td style={{ width: '400px' }}>
                <S.PostTitle>{name}</S.PostTitle>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <S.PostContent>{message}</S.PostContent>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <S.PostDate>
                  {date.toLocaleDateString()}
                </S.PostDate>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </S.PostBox>
    </>
  );
}

export default Post;
