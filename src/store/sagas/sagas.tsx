import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSuccess, fetchFailed } from "../actions/usesActions";
import { fetchListUser } from "../../services/users";
import { USERS_FETCH_REQUESTED } from "../reducers/userReducer";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any) {
  try {
    const users = yield call(fetchListUser, action.payload.url);
    yield put(fetchSuccess(users.data));
  } catch (e) {
    yield put(fetchFailed(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of users.
*/
function* mySaga() {
  yield takeEvery(USERS_FETCH_REQUESTED, fetchUser);
}

export default mySaga;
