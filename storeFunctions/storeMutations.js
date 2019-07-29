import {
  GET_APP,
  GET_PAGES,
  SET_SCROLLED,
  VIEW_MENU
} from './mutation-types.js'

const stateMutations = () => ({
  [GET_APP] (state, data) {
    state.app = data
  },
  // [GET_BLOG] (state, data) {
  //   state.blog = data
  // },
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  [SET_SCROLLED] (state, data) {
    state.scrolled = data
  },
  [VIEW_MENU] (state, data) {
    state.menu = data
  }
})

export default stateMutations
