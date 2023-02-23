import styled from '@emotion/styled';

export const Card = styled.div`
  color: black;
  margin: 0 auto;

  border: 1px solid black;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  width: 25%;
  padding-top: 15px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50%;
`;

export const DescriptionItem = styled.p`
  margin-bottom: 10px;
  color: ${props => (props.name ? 'black' : 'rgba(131, 119, 119, 0.896)')};
  font-weight: ${props => props.name && 'bold'};
  font-size: ${props => props.name && 'large'};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid black;
  border-bottom: none;
  border-right: none;
  flex-basis: calc(100% / 3);
  background-color: rgba(246, 244, 244, 0.726);
  padding: 15px 0;
  gap: 3px;

  :first-child {
    border-left: none;
  }
`;

export const StatsQuantity = styled.span`
  font-weight: bolder;
`;

export const StatsLabel = styled.span``;
