import React from 'react'
import { PositionDiv, KingDiv, TextSpan, ListItem, StyledLink } from '../../../styles/blocks'
import { createProfilePath } from '../../const/routes'

const trophies = [
  require('../../../media/trophy-1.svg'),
  require('../../../media/trophy-2.svg'),
  require('../../../media/trophy-3.svg'),
]

export const LeaderboardRow = ({ player, king, position, points }) => (
  <ListItem>
    <PositionDiv>{
      position > 3 ? (position + '.') : <img src={trophies[position - 1]} />
    }</PositionDiv>
    {king && king.id === player.id
      ? <KingDiv>King of The Hill<br/>since {king.since.toLocaleDateString()}</KingDiv>
      : ''}
    <TextSpan>
      <StyledLink to={createProfilePath(player.id)}>{player.name} ({points})</StyledLink>
    </TextSpan>
  </ListItem>
)
