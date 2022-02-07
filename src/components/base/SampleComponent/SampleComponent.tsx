import React from 'react';
interface SampleComponentProps {
  onClick: React.MouseEventHandler;
  selected?: boolean;
}

const SampleComponent = ({ onClick, selected }: SampleComponentProps) => {
  return <div onClick={onClick}>{selected ? 'yes' : 'no'}</div>;
};

SampleComponent.defaultProps = {
  selected: false,
};

export default SampleComponent;
