import styled from "styled-components";

export const ContainerHome = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HomeWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  min-height: 500px;
`;

export const CityList = styled.section`
  order: 0;
  margin: 0 35px 0 30px;
  width: 180px;
`;

export const CityDetail = styled.section`
  order: 1;
  width: 200px;
`;
