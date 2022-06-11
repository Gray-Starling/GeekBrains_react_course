// селектор получения чатов из редюсера
export const getListOfChats = (state) => {
  return state.chatList.chatList;
};
