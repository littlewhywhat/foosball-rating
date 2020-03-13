import { put, takeEvery, call, take, select } from 'redux-saga/effects'
import { getMatches, addMatch } from './matches-effects'
import { getUsersSaga } from '../users/users-saga'
import { MatchesActions } from './matches-actions'
import { inProgress, success, failure } from '../api/request-status'
import { GamesActions } from '../games/games-actions'
import { getSelectedGame } from '../games/games-selectors'

const convertDateInMatch = match => ({
  ...match,
  date: new Date(match.date),
})

function* getMatchesSaga() {
  try {
    const response = yield call(getMatches)
    const matches = response.data.map(convertDateInMatch)
    yield put(MatchesActions.Creators.matchesLoaded(matches))
  } catch (error) {
    console.error(error)
  }
}

function* addMatchSaga(action) {
  try {
    const selectedGame = yield select(getSelectedGame)
    yield put(MatchesActions.Creators.updateStatus(inProgress))
    yield call(addMatch, selectedGame.name, action.match)
    yield call(getMatchesSaga)
    // Need to reload users because ratings have changed
    yield call(getUsersSaga)
    yield put(MatchesActions.Creators.updateStatus(success))
  } catch (error) {
    console.error(error)
    const message = error.response ? error.response.data : error.message
    yield put(MatchesActions.Creators.updateStatus(failure(message)))
  }
}

export function* matchesSaga() {
  const action = yield take(GamesActions.Types.SELECT_GAME)
  yield call(getMatchesSaga, action)
  yield takeEvery(MatchesActions.Types.ADD_MATCH, addMatchSaga)
}
