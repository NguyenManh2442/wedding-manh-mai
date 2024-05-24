import { color } from 'src/common/utils/styles';
import styled from 'styled-components';

export const FlowerCardTextContainer = styled.div`
  width: 270px;
  height: 80px;
  padding: 5px 0px;
  border-radius: 20px;
  background-color: ${color.barunsonFlowerColor};
`;

export const FlowerCardImageContainer = styled.div`
  position: absolute;

  width: 130px;
  margin-top: -35px;
  margin-left: -15px;
`;

export const FlowerCardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FlowerCardPBold = styled.p`
  font-size: 0.8rem;

  line-height: 0.5rem;
`;

export const FlowerCardP = styled.p`
  font-size: 0.8rem;
  margin-left: 15px;
  margin-top: 5px;
  line-height: 20px;
`;

export const FlowerCardTd = styled.td`
  width: 100%;
  color: black;
  text-align: left;
`;
