import React, { useState } from 'react';
import styled from 'styled-components';
import type { MethodType, MaterialType } from '~types/index';

export interface IOption {
  value: string;
  name: MethodType | MaterialType;
}

interface IOptionProps {
  title: string;
  options: IOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ title, options, onChange }: IOptionProps) => {
  return (
    <select defaultValue={title} onChange={onChange}>
      <option value={title} disabled hidden>
        {title}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
