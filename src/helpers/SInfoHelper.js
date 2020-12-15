import SInfo from 'react-native-sensitive-info';
const sharedPreferencesName = '';
const keychainService = 'LookForLostObjects';

const SInfoHelper = {
  setItem: async function (key, value) {
    return SInfo.setItem(key, JSON.stringify(value), {
      sharedPreferencesName,
      keychainService,
    });
  },
  getItem: async function (key) {
    const value = await SInfo.getItem(key, {
      sharedPreferencesName,
      keychainService,
    });
    return JSON.parse(value);
  },
  deleteItem: async function (key) {
    return SInfo.deleteItem(key, {
      sharedPreferencesName,
      keychainService,
    });
  },
};

export default SInfoHelper;
