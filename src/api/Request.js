import SAxios from './SAxios';
// try to push all urls of every module on every row...
import Urls from './Urls';

const processResponse = (promise) => {
  return promise
    .then((response) => {
      return {error: null, data: response.data.data};
    })
    .catch((error) => {
      return {error, data: error.response.data.error};
    });
};

export const buildGetParams = (params, haveQuestionMark = false) => {
  if (!params || params.length === 0) {
    return '';
  }
  if (haveQuestionMark) {
    return `&${Object.entries(params)
      .map((x) => `${x[0]}=${x[1]}`)
      .join('&')}`;
  }
  return `?${Object.entries(params)
    .map((x) => `${x[0]}=${x[1]}`)
    .join('&')}`;
};

/** ----Begin Account requests*/
export const auth_login = (params) => {
  return processResponse(SAxios.post(`${Urls.URL_AUTH}/login`, params));
};
