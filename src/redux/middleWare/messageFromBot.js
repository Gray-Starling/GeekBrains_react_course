/**
 * Мидлвар отвечающий за ответ бота через промежуток времени
 */
export const setTimerForMessageFromBot = (store) => (next) => (action) => {
  const delay = action?.meta?.delay;
  if (action.type !== "ADD_MESSAGE_FROM_BOT" && !delay) {
    return next(action);
  } else {
    const timeOut = setTimeout(() => next(action), delay);
    return () => {
      clearTimeout(timeOut);
    };
  }
};
