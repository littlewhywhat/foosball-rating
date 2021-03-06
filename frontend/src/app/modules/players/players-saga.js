import { put, takeEvery, call, select } from 'redux-saga/effects'
import { getPlayers, addPlayer } from './players-effects'
import { PlayersActions } from './players-actions'
import { inProgress, success, failure } from '../api/request-status'
import { GamesActions } from '../games/games-actions'

export function* getPlayersSaga(action) {
  try {
    const response = yield call(getPlayers, action.selectedGame.name)
    yield put(PlayersActions.Creators.playersLoaded(response.data))
  } catch (error) {
    console.error(error)
  }
}

function* addPlayerSaga(action) {
  try {
    const state = yield select()
    yield put(PlayersActions.Creators.updateStatus(inProgress))
    yield call(addPlayer, state.selectedGame.name, action.player)
    yield call(getPlayersSaga)
    yield put(PlayersActions.Creators.updateStatus(success))
  } catch (error) {
    console.error(error)
    const message = error.response ? error.response.data : error.message
    yield put(PlayersActions.Creators.updateStatus(failure(message)))
  }
}

export function* playersSaga() {
  yield takeEvery(GamesActions.Types.SELECT_GAME, getPlayersSaga)
  yield takeEvery(PlayersActions.Types.ADD_PLAYER, addPlayerSaga)
}
