/** @format */

export function setSearchedBeer(state, beer) {
  state.searchedBeer = beer || [];
}

export function setLoginFlag(state, payload) {
  state.isLogin = payload;
}
