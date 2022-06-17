// селектор получения пользователя из редюсера (по запросу)
export const userSelector = (state) => state.currentUser.currentUser;
export const loadingSelector = (state) => state.loadingUser.loadingUser;
export const errorSelector = (state) => state.errorUser.errorUser;
