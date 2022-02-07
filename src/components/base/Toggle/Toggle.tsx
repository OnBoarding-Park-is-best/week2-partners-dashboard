import React from 'react';
import styled from 'styled-components';

interface IProp {
  onClick: React.MouseEventHandler;
  active: boolean;
}

const Toggle = ({ onClick, active }: IProp) => {
  return (
    <Wrapper onClick={onClick}>
      <Track />
      <Knob active={active} />
    </Wrapper>
  );
};

Toggle.defaultProps = {
  active: false,
};

const Wrapper = styled.div`
  position: relative;
  width: 37px;
  height: 20px;
`;

const Track = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  right: 0;
  width: 34px;
  height: 14px;
  border-radius: 34px;
  background: #c2c2c2;
`;

const Knob = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0px;
  right: ${(props) => (props.active ? '-4px' : '17px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f5f5f5;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s ease-in-out;
`;

export default Toggle;
