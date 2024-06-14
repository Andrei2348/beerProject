import axiosClient from '@/axiosClient'

export function searchBeer({ commit }, keyword) {
  axiosClient.get(`/?name=*${keyword}*`).then(({ data }) => {
    commit('setSearchedBeer', data)
  })
}
