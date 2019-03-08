import styled from 'styled-components';
import variables from './../variables';

const ListCon = styled.ul`
  margin: 0 auto 1rem auto;
  padding: 0;
  text-align: center;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,0.12),0 7px 10px -5px rgba(0,0,0,0.15);
  border-radius: 8px;
  overflow: hidden;
  @media (min-width: ${variables.bpMedium}) {
    width: 450px;
  }

  &.topPlayers {
    li:nth-child(1) {
      font-size: 28px;
      color: ${variables.cTopPlayerGold}
    }
    li:nth-child(2) {
      font-size: 22px;
      color: ${variables.cTopPlayerSilver}
    }
    li:nth-child(3) {
      font-size: 18px;
      color: ${variables.cTopPlayerBronze}
    }
  }
`

const ListItem = styled.li`
  padding: ${variables.baseSpacing};
  display: ${props => props.Display};
  grid-template-columns: ${props => props.Column};
  color: ${variables.cBlack};
  list-style: none;
  border-bottom: 1px solid ${variables.bgColor};
  background: ${variables.bgColorList};

  :last-child {
    border-bottom: none;
  }
  :nth-child(even) {
    background: ${variables.bgColorListSec}
  }
`

export { ListCon, ListItem};