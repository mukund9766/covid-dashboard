import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const StatisticCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StatisticCard = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 10px;
  flex-basis: 30%;

  @media (max-width: 768px) {
    flex-basis: 80%;
  }
`;

export const ChartContainer = styled.div`
  margin-bottom: 20px;
`;

export const DropdownContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Dropdown = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  appearance: none;
  background-color: #fff;
`;