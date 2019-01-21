export const addMenuItem = (state, { item }) => {
    state.tabMenu.find(menu => menu.path === item.path) || state.tabMenu.push(item);
    state.activePath = item.path;
}

export const removeMenuItem = (state, { path }) => {
    let index = state.tabMenu.findIndex(item => item.path === path);
    state.tabMenu.splice(index, 1);
}

export const setActivePath = ( state, {path}) => {
    state.activePath = path;
}