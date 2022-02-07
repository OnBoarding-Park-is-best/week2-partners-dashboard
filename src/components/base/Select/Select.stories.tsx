import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select, { IOption } from './Select';

export default {
  title: 'base/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  title,
  options,
  onChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(selected) ? prev : [...prev, selected],
    );
  };

  return <Select title={title} options={options} onChange={handleChange} />;
};

const METHOD_OPTIONS: IOption[] = [
  { value: '밀링', name: '밀링' },
  { value: '선반', name: '선반' },
];

const MATERIAL_OPTIONS: IOption[] = [
  { value: '알루미늄', name: '알루미늄' },
  { value: '탄소강', name: '탄소강' },
  { value: '구리', name: '구리' },
  { value: '합금강', name: '합금강' },
  { value: '강철', name: '강철' },
];

export const Method = Template.bind({});
Method.args = {
  title: '가공 방식',
  options: METHOD_OPTIONS,
};

export const Material = Template.bind({});
Material.args = {
  title: '재료',
  options: MATERIAL_OPTIONS,
};
