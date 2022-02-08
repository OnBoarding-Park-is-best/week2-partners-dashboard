import React, { useCallback, useEffect, useState } from 'react';
import type {
  ApiReturnType,
  OptionType,
  MethodType,
  MaterialType,
} from '~types/index';
import { ResetButton } from '~components/base';
import { ItemCard, DefaultContainer } from '~components/domain';
import { fetchApi } from '~api/fetchApi';

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

const useApp = () => {
  const [list, setList] = useState<ApiReturnType[]>([]);
  const [methodList, setMethodList] = useState<OptionType[]>(METHOD_OPTIONS);
  const [materialList, setMaterialList] =
    useState<OptionType[]>(MATERIAL_OPTIONS);
  const [inBusiness, setInBusiness] = useState<boolean>(false);

  const handleItemCard = useCallback(() => {
    const methodFilter: MethodType[] = methodList
      .map(({ name, checked }) => (checked ? name : ''))
      .filter((one) => one !== '') as MethodType[];
    const materialFilter: MaterialType[] = materialList
      .map(({ name, checked }) => (checked ? name : ''))
      .filter((one) => one !== '') as MaterialType[];
    let result: ApiReturnType[] = list;

    if (inBusiness) {
      result = result.filter(({ status }) => status === '상담중');
    }
    // 가공 방식 필터가 있을 때
    if (methodFilter.length) {
      result = result.filter(({ method }) =>
        methodFilter.every((one) => method.includes(one)),
      );
    }
    // 재료 필터가 있을 때
    if (materialFilter.length) {
      result = result.filter(({ material }) =>
        materialFilter.every((one) => material.includes(one)),
      );
    }
    if (list.length && !result.length) return <DefaultContainer />;
    return result.map((item, idx) => <ItemCard key={idx} requestInfo={item} />);
  }, [list, methodList, materialList, inBusiness]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const filter = (prev: OptionType[]) => {
        return prev.map((option) =>
          option.id === e.target.id
            ? { ...option, checked: !option.checked }
            : option,
        );
      };
      if (METHOD_OPTIONS.some((one) => one.name === e.target.id)) {
        setMethodList((prev) => filter(prev));
        return;
      }
      setMaterialList((prev) => filter(prev));
    },
    [],
  );

  const handleToggle = useCallback(() => {
    setInBusiness((prev) => !prev);
  }, []);

  const handleFilterReset = useCallback(() => {
    const handleReset = () => {
      setMethodList((prev) => prev.map((one) => ({ ...one, checked: false })));
      setMaterialList((prev) =>
        prev.map((one) => ({ ...one, checked: false })),
      );
    };
    if (
      methodList.some(({ checked }) => checked) ||
      materialList.some(({ checked }) => checked)
    ) {
      return <ResetButton onClick={handleReset}>필터링 리셋</ResetButton>;
    }
    return <></>;
  }, [methodList, materialList]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const data = await fetchApi();
        setList(data);
      } catch (e) {
        console.log(e);
      }
    };
    handleFetch();
  }, []);

  return {
    list,
    inBusiness,
    methodList,
    materialList,
    handleFilterChange,
    handleFilterReset,
    handleItemCard,
    handleToggle,
  };
};

export default useApp;
