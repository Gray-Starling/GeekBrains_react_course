// селектор получения постов из редюсера (по запросу)
export const getPostsList = (state) => {
  return state.posts.posts;
};

// селектор получения статуса загрузки постов.
export const loadingPostsList = (state) => {
  return state.loading.loading;
};

// селектор получения статуса ошибки при запросе постов
export const errorPostsList = (state) => {
  return state.error.error;
};
