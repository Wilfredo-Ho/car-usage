export const getMenu = state => {
    return state.tabMenu;
};

export const getActivePath = state => state.activePath;

//重定向
export const redirect =  (state) => (path) => {
    let arr = state.tabMenu
    let len = arr.length
    let index = arr.findIndex(item => item.path === path)

    if (index === len - 1) {
        return arr[len - 2].path
    } else {
        return arr[index + 1].path
    }
}