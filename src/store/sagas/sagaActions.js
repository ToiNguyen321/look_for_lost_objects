const AUTH = {
  LOGIN_PENDING: 'LOGIN_PENDING',
  REGISTER_PENDING: 'REGISTER_PENDING',
  LOGOUT_PENDING: 'LOGOUT_PENDING',
};

const NEWS = {
  NEWS_PENDING: 'NEWS_PENDING',
};

export const S_TYPES = {
  ...AUTH,
  ...NEWS,
};

export const S_ACTIONS = {
  loginPending: (params) => ({type: S_TYPES.LOGIN_PENDING, params}),
  registerPending: (params) => ({type: S_TYPES.REGISTER_PENDING, params}),
  newsPending: (params) => ({type: S_TYPES.NEWS_PENDING, params}),
};
