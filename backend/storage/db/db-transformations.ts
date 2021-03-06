import { User } from '../../types/User'
import { MatchWithId } from '../../types/Match'
import { Game } from '../../types/Game'
import { Player } from '../../types/Player'

export const createUserFromDbRow = (userRow): User => ({
  id: Number(userRow.Id),
  name: userRow.Name,
  active: Boolean(userRow.Active),
})

export const createPlayerFromDbRow = (player): Player => ({
  id: Number(player.Id),
  name: player.Name,
  rating: Number(player.Rating),
  active: Boolean(player.Active),
  initialRating: Number(player.InitialRating),
})

export const createMatchFromDbRow = (matchRow): MatchWithId => {
  const team1Player2Array = matchRow.Team1Player2Id ? [{
    id: Number(matchRow.Team1Player2Id),
    matchRating: Number(matchRow.Team1Player2Rating),
  }] : []

  const team2Player2Array = matchRow.Team2Player2Id ? [{
    id: Number(matchRow.Team2Player2Id),
    matchRating: Number(matchRow.Team2Player2Rating),
  }] : []

  return {
    id: Number(matchRow.Id),
    team1: [
      {
        id: Number(matchRow.Team1Player1Id),
        matchRating: Number(matchRow.Team1Player1Rating),
      },
      ...team1Player2Array,
    ],
    team2: [
      {
        id: Number(matchRow.Team2Player1Id),
        matchRating: Number(matchRow.Team2Player1Rating),
      },
      ...team2Player2Array,
    ],
    date: matchRow.Date,
    winningTeamRatingChange: Number(matchRow.WinningTeamRatingChange),
    losingTeamRatingChange: Number(matchRow.LosingTeamRatingChange),
    team1Won: Boolean(matchRow.Team1Won),
  }
}

export const createGameFromDbRow = (gameRow): Game => ({
  id: Number(gameRow.Id),
  name: gameRow.Name,
  description: gameRow.Description,
})
