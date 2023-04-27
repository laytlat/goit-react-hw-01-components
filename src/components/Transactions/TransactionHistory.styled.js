import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border-spacing: 0;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHeader = styled.tr`
  background-color: #5eb8d1;
`;

export const TableHeaderTitle = styled.th`
  padding: 10px 5px;
  width: 200px;

  color: white;
  font-weight: 700;

  :not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const BodyTable = styled.tbody`
  border-spacing: 0;
`;

export const BodyCell = styled.td`
  padding: 10px;
  :not(:last-child) {
    border-right: 1px solid grey;
  }

  text-align: center;
`;

export const BodyTableLine = styled.tr`
  :nth-child(2n) {
    background-color: #d4d4d4;
  }
`;
