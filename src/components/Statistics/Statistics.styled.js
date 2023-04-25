import styled from '@emotion/styled';

export const StatisticSection = styled.section``;

export const Title = styled.h2`
  font-size: 40px;
  padding: 30px;

  text-align: center;
`;

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatisticListItem = styled.li`
  display: flex;
align-items: : center;
justify-content: center;
  flex-direction: column;

  gap: 5px;
  padding: 20px;
  width: 50px;

  background-color: ${props => {
    return props.randomColor;
  }};
`;

export const StatisticLabel = styled.span`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const StatisticPercentage = styled.span`
  font-size: 25px;
  text-align: center;
  color: white;
`;
