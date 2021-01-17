const LOGIN_KEY = "unique-key";

interface JWT {
  expiresAt: number;
}

const getDetails = (): JWT | null => {
  return JSON.parse(localStorage.getItem(LOGIN_KEY) || "null");
};

const saveDetails = (jwt: JWT) => {
  return localStorage.setItem(LOGIN_KEY, JSON.stringify(jwt));
};

export const loginDetailsCache = {
  get: getDetails,
  set: saveDetails,
};