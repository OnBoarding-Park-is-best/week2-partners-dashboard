import { ReactChild } from 'react';
import styled from 'styled-components';
import refresh from '~assets/images/refresh.png';

interface ResetButtonProp {
  children: ReactChild;
  onClick: React.MouseEventHandler;
}

const ResetButton = ({ children, onClick, ...props }: ResetButtonProp) => {
  return (
    <ResetButtonContainer onClick={onClick} {...props}>
      <ImageContainer src={refresh} alt="refresh" />
      {children}
    </ResetButtonContainer>
  );
};

const ResetButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  font-family: Noto Sans KR Regular;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  gap: 12px;
  color: #2196f3;
  margin-left: 16px;
  :active {
    opacity: 0.7;
  }
`;

const ImageContainer = styled.img`
  width: 16px;
  height: 16px;
`;

export default ResetButton;
