import { createSelector } from "reselect"
import { generateMatchRatingChanges, computeLongestWinStreak, computeWinRatio } from "./matches-computations";

const fillUsers = (team, state) => team.map(player => {
    const user = state.users.users.find(user => user.id == player.id)
    return {
        ...user,
        matchRating: player.matchRating
    }
})

const getMatches = (state) => state.matches.matches.map(match => ({
    ...match,
    team1: fillUsers(match.team1, state),
    team2: fillUsers(match.team2, state)
}))

const userPlayedMatch = (userId, match) => {
    const allPlayers = [...match.team1, ...match.team2]
    return allPlayers.find((player) => player.id == userId)
}

export const getLastMatches = createSelector(
    getMatches,
    matches => [...matches].sort((match1, match2) => match2.date - match1.date) 
)

const getLastMatchesForUser = createSelector(
    getLastMatches,
    (state, props) => Number(props.match.params.userId),
    (matches, userId) => matches.filter((match) => userPlayedMatch(userId, match))
)

const generateStatisticsForUser = (userId, userMatches) => ({
    matchChanges: generateMatchRatingChanges(userId, userMatches),
    longestStreak: computeLongestWinStreak(userId, userMatches),
    winRatio: computeWinRatio(userId, userMatches),
    totalMatches: userMatches.length
})

export const getStatisticsForUser = createSelector(
    getLastMatchesForUser,
    (state, props) => Number(props.match.params.userId),
    (userMatches, userId) => generateStatisticsForUser(userId, userMatches)
)
