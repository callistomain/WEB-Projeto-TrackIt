const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/";
const habits = BASE_URL + "habits/";

export const url = {
  signUp: BASE_URL + "auth/sign-up",
  login:  BASE_URL + "auth/login",

  habits,
  habitsDelete:   (id) => habits + id,
  habitsToday:            habits + "today",
  habitsCheck:    (id) => habits + id + "/check",
  habitsUncheck:  (id) => habits + id + "/uncheck",
  habitsHistory:          habits + "history/daily"
};