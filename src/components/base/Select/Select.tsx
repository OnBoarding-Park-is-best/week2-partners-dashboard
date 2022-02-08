import React, { useEffect, useState } from 'react';
import type { MethodType, MaterialType } from '~types/index';
import { Option } from './Option';
import { Arrow } from './Icons';
import styled, { css } from 'styled-components';

export type OptionType = {
  name: MethodType | MaterialType;
  id: MethodType | MaterialType;
  checked: boolean;
};
interface SelectProps {
  title: string;
  options: OptionType[];
  isChecked: boolean;
  checkedOptionNumber: number;
  isMouseOn: boolean;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select = ({
  title,
  options,
  isChecked,
  checkedOptionNumber,
  isMouseOn,
  onMouseEnter,
  onMouseLeave,
  onChange,
}: SelectProps) => {
  return (
    <Container onMouseEnter={onMouseEnter}>
      <Wrapper checked={isChecked}>
        <SelectTitle>
          {title}
          {checkedOptionNumber > 0 && `(${checkedOptionNumber})`}
        </SelectTitle>
        <Arrow checked={isChecked} />
      </Wrapper>
      {isMouseOn && (
        <Option
          options={options}
          onChange={onChange}
          onMouseLeave={onMouseLeave}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div<{ checked: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  &: hover {
    border: 1px solid #2196f3;
  }
  ${(props) =>
    props.checked &&
    css`
      background-color: #1565c0;
      span {
        color: #fff !important;
      }
    `}
`;

const SelectTitle = styled.span`
  display: flex;
  align-items: center;
  margin-right: 11px;
  margin-bottom: 2px;
  padding: 0 1px;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #323d45;
`;

export default Select;
