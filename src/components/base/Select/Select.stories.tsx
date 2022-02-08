import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select, { OptionType } from './Select';

export default {
  title: 'base/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  title,
  options,
  isMouseOn,
  isChecked,
  onMouseEnter,
  onMouseLeave,
  onChange,
}) => {
  const [checkOption, setCheckOption] = useState(isChecked);
  const [showOptions, setShowOptions] = useState(isMouseOn);
  const [optionList, setOptionList] = useState(options);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptionList((prev) =>
      prev.map((option) =>
        option.id === e.target.id
          ? { ...option, checked: !option.checked }
          : option,
      ),
    );
  };

  useEffect(() => {
    const checkedOptionStates: boolean[] = optionList.map((option) => {
      return option.checked;
    });
    const checkedOptions: boolean[] = checkedOptionStates.filter(
      (checked) => checked === true,
    );
    setCheckOption(checkedOptions.length > 0 ? true : false);
  }, [optionList]);

  return (
    <Select
      title={title}
      options={optionList}
      isChecked={checkOption}
      isMouseOn={showOptions}
      onMouseEnter={(e) => {
        e.preventDefault();
        setShowOptions(true);
      }}
      onMouseLeave={(e) => {
        e.stopPropagation();
        setShowOptions(false);
      }}
      onChange={handleChange}
    />
  );
};

const METHOD_OPTIONS: OptionType[] = [
  { name: '밀링', id: '밀링', checked: false },
  { name: '선반', id: '선반', checked: false },
];

const MATERIAL_OPTIONS: OptionType[] = [
  { name: '알루미늄', id: '알루미늄', checked: false },
  { name: '탄소강', id: '탄소강', checked: false },
  { name: '구리', id: '구리', checked: false },
  { name: '합금강', id: '합금강', checked: false },
  { name: '강철', id: '강철', checked: false },
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
