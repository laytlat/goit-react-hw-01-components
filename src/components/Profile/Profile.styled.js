import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 40px;
  margin-bottom: 100px;

  background-color: white;

  border: 1px solid black;
  border-radius: 6px;
`;

export const DescriptionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-top: 20px;

  font-size: 22px;
  font-weight: 500;
`;

export const UserTag = styled.p`
  margin-top: 10px;
  color: grey;
`;

export const UserLocation = styled.p`
  margin-top: 10px;
  color: grey;
`;

export const UserStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: grey;

  border-top: 1px solid black;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;

  padding: 15px 20px;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const UserStatsLabel = styled.span`
  font-size: 10px;
`;

export const UserStatsQuantity = styled.span`
  font-size: 10px;
`;
