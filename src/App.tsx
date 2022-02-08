import React from 'react';
import styled from 'styled-components';
import { NavBar } from '~components/domain';
import { Select, Toggle } from '~components/base';
import useApp from '~hooks/useApp';

function App() {
  const {
    list,
    inBusiness,
    methodList,
    materialList,
    handleFilterChange,
    handleFilterReset,
    handleItemCard,
    handleToggle,
  } = useApp();

  return (
    <>
      <NavBar />
      <Container>
        <Wrapper>
          <DashboardTitleContainer>
            <h1>들어온 요청</h1>
            <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
          </DashboardTitleContainer>
          <FilterContainer>
            <Filter>
              <Select
                title="가공방식"
                options={methodList}
                onChange={handleFilterChange}
              />
              <Select
                title="재료"
                options={materialList}
                onChange={handleFilterChange}
              />
              {handleFilterReset()}
            </Filter>
            <ToggleSection>
              <Toggle onClick={handleToggle} active={inBusiness} />
              <ToggleText>상담중인 요청만 보기</ToggleText>
            </ToggleSection>
          </FilterContainer>
          <ContentContainer>
            {list ? handleItemCard() : '들어온 요청이 없습니다.'}
          </ContentContainer>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 155px;
  width: 100%;
  height: calc(100vh - 80px);
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    height: calc(100vh - 48px);
    padding: 24px 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 1130px;
`;

const DashboardTitleContainer = styled.div`
  h1 {
    font-weight: 600;
    font-size: 1.42rem;
    line-height: 1.6em;
  }
  p {
    font-weight: 400;
    font-size: 1.14rem;
    line-height: 1.5em;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.42em;
  }
`;

const Filter = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ToggleSection = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.span`
  margin-left: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;

  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`;

export default App;
