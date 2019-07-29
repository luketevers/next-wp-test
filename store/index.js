import storeActions from '../storeFunctions/storeActions'
import storeMutations from '../storeFunctions/storeMutations'

export const state = () => ({
  app: {},
  // blog: {},
  loading: true,
  pages: {},
  scrolled: {},
  menu: {}
})

export const actions = storeActions()

export const mutations = storeMutations()
