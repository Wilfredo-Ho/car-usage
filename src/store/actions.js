export const addMenuItem = ({ commit }, item) => {
    commit('addMenuItem', { item })
}

export const removeMenuItem = ({ commit }, path) => {
    commit('removeMenuItem', {path})
}

export const setActivePath = ({ commit }, path) => {
    commit('setActivePath', { path })
}