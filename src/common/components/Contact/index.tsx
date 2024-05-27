import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';

import * as CS from 'src/common/components/Styles';
import { color } from 'src/common/utils/styles';
import CircleIcon from '../CircleIcon';

function Contact() {
  const defaultMessage = 'Chúc mừng đám cưới của Mạnh ❤ Mai!';

  return (
    <CS.CommonContainer>
      <CS.HorizontalBar />
      <CS.CommonMargin margin="30px" />
      <CS.CommonBody>
        <CS.CommonTextContainer>
          <CS.CommonTable>
            <tbody>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>Liên hệ chú rể</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:0965729726">
                    <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
                  <a href={'sms:0965729726?&body=' + defaultMessage}>
                    <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <CS.CommonSubSubTitle>Liên hệ cô dâu</CS.CommonSubSubTitle>
                </td>
                <td style={{ padding: '0px 0px 0px 20px' }}>
                  <a href="tel:010-2361-4112">
                    <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                  </a>
                </td>
                <td style={{ padding: '0px 0px 0px 10px' }}>
                  <a href={'sms:010-2361-4112?&body=' + defaultMessage}>
                    <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                  </a>
                </td>
              </tr>
            </tbody>
          </CS.CommonTable>
        </CS.CommonTextContainer>
        <CS.CommonMargin margin="50px" />
        <CS.CommonSubTitle>LIÊN HỆ VỚI GIA ĐÌNH</CS.CommonSubTitle>
        <CS.CommonTable>
          <tbody>
            <tr>
              <td colSpan={2}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>Nhà trai</CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonTextContainer>
                  <CS.CommonSubSubTitle>Nhà gái</CS.CommonSubSubTitle>
                </CS.CommonTextContainer>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>
                  Bố <b>chú rể:</b><br></br><br></br>
                  Nguyễn Văn Long
                </CS.CommonSubSubTitle>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>
                  Bố <b>cô dâu:</b><br></br><br></br>
                  Dương Văn Nhã
                </CS.CommonSubSubTitle>
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:0986933765">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href={'sms:0986933765?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:010-7777-6414">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-7777-6414?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <CS.CommonSubSubTitle>
                  Mẹ <b>chú rể:</b><br></br><br></br>
                  Giáp Thị Oanh
                </CS.CommonSubSubTitle>
              </td>
              <td colSpan={2} style={{ padding: '0px 0px 0px 60px' }}>
                <CS.CommonSubSubTitle>
                  Mẹ <b>cô dâu:</b><br></br><br></br>
                  Nguyễn Thị Nga
                </CS.CommonSubSubTitle>
              </td>
            </tr>
            <tr>
              <td>
                <a href="tel:010-8547-0476">
                  <CircleIcon Icon={PhoneIcon} color={color.groomColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-8547-0476?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.groomColor} />
                </a>
              </td>
              <td style={{ padding: '0px 0px 0px 60px' }}>
                <a href="tel:010-3777-7118">
                  <CircleIcon Icon={PhoneIcon} color={color.brideColor} />
                </a>
              </td>
              <td>
                <a href={'sms:010-3777-7118?&body=' + defaultMessage}>
                  <CircleIcon Icon={SmsIcon} color={color.brideColor} />
                </a>
              </td>
            </tr>
          </tbody>
        </CS.CommonTable>
      </CS.CommonBody>
      <CS.CommonMargin margin="40px" />
    </CS.CommonContainer>
  );
}

export default Contact;
