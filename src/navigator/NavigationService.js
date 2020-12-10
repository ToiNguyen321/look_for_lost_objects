import {CommonActions} from '@react-navigation/native';

const config = {};

export function setNavigator(nav) {
  if (nav.current) {
    config.navigator = nav.current;
  }
}

export function navigate(routeName, params) {
  if (config.navigator && routeName) {
    let action = CommonActions.navigate({name: routeName, params});
    config.navigator.dispatch(action);
  }
}

export function goBack() {
  if (config.navigator) {
    let action = CommonActions.goBack({});
    config.navigator.dispatch(action);
  }
}

export const navigationAvailbe = () => {
  return (
    config.navigator && config.navigator.getCurrentRoute().name !== 'Login'
  );
};

export const routeParam = (route, paramKey, defaultValue) => {
  if (
    !route ||
    !route.params ||
    route.params[`${paramKey}`] === undefined ||
    route.params[`${paramKey}`] === null
  ) {
    return defaultValue;
  }
  return route.params[`${paramKey}`];
};
