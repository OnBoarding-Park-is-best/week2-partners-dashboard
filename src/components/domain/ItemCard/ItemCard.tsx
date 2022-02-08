import styled from 'styled-components';
import { Button } from '~components/base';

interface requestInfoProp {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

interface ItemCardProp {
  requestInfo: requestInfoProp;
}

const ItemCard = ({ requestInfo, ...props }: ItemCardProp) => {
  const handleValueList = (list: string[]) => list.join(', ');

  return (
    <ItemCardContainer {...props}>
      <Title>{requestInfo.title}</Title>
      {requestInfo.status === '상담중' && (
        <InBusinessContainer>상담중</InBusinessContainer>
      )}
      <ClientText>{requestInfo.client}</ClientText>
      <DueText>{requestInfo.due}까지 납기</DueText>
      <Divider />
      <DetailContainer>
        <InfoContent>
          <Text>도면개수</Text>
          <InfoValueText>{requestInfo.count}개</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>총 수량</Text>
          <InfoValueText>{requestInfo.amount}개</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>가공방식</Text>
          <InfoValueText>{handleValueList(requestInfo.method)}</InfoValueText>
        </InfoContent>
        <InfoContent>
          <Text>재료</Text>
          <InfoValueText>{requestInfo.material}</InfoValueText>
        </InfoContent>
      </DetailContainer>
      <ButtonContainer>
        <Button isPrimary={true}>요청 내역 보기</Button>
        <Button isPrimary={false}>채팅하기</Button>
      </ButtonContainer>
    </ItemCardContainer>
  );
};

const ItemCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 24px 16px;
  max-width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 2px #2196f3 inset;
  }
  @media screen and (max-width: 767px) {
    height: 344px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #323d45;
  margin-bottom: 4px;
`;

const InBusinessContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  position: absolute;
  right: 16px;
  top: 24px;
  background: #ffffff;
  border: 1px solid #ffa000;
  box-sizing: border-box;
  border-radius: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.67;
  color: #ffa000;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  min-width: 70px;
`;

const ClientText = styled(Text)`
  font-weight: 500;
`;

const DueText = styled(Text)`
  margin-top: 24px;
  color: #939fa5;
  @media screen and (max-width: 767px) {
    margin-top: 16px;
  }
`;

const InfoValueText = styled(Text)`
  font-weight: 700;
`;

const Divider = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  border: none;
  background-color: #e5e5e5;
  margin: 16px 0;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

const InfoContent = styled.div`
  display: flex;
  flex: 1;
  gap: 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 24px;
  gap: 8px;
`;

export default ItemCard;
