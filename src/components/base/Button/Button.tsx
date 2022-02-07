import { ReactChild } from 'react';
import styled from 'styled-components';

interface ButtonProp {
  children: ReactChild;
  isPrimary: boolean;
}

const Button = ({ children, isPrimary = false, ...props }: ButtonProp) => {
  const primaryStyle: React.CSSProperties = isPrimary
    ? {
        backgroundColor: '#2196F3',
        color: '#FFFFFF',
      }
    : {
        backgroundColor: '#FFFFFF',
        color: '#2196F3',
        border: '1px solid #2196F3',
        boxSizing: 'border-box',
      };

  return (
    <ButtonContainer type="button" style={{ ...primaryStyle }} {...props}>
      {children}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  display: flex;
  justify-content: column;
  align-items: center;
  height: 32px;
  padding: 6px 12px;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  border-radius: 4px;
  :active {
    opacity: 0.7;
  }
`;

export default Button;
