import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const COLORS = {
  WHITE: '#fff',
  BLUE: '#3389ff',
  BLACK: '#18191a',
  ORANGE: 'orange',
  GREEN: 'green',
  GRAY: 'gray',
};

const DIMENTSIONS = {
  WIDTH: width,
  HEIGHT: height,
};

const FONT_SIZE = {
  BIG_HEADER: 22,
  HEADER: 18,
  CONTENT: 15,
  DESCRIPTION: 13,
  TINY: 11,
};

const BORDER_RADIUS = {
  VERY_BIG: 15,
  BIG: 10,
  SMALL: 5,
  VERY_SMALL: 3,
};

const SHADOW_BOX = (elevation, shadowColor = '#000') => {
  return {
    shadowColor,
    shadowOffset: {
      width: 0,
      height: elevation > 1 ? elevation / 2 : 1,
    },
    shadowOpacity: 0.18 + elevation * 0.02,
    shadowRadius: 1.0 + elevation * 0.41,
    elevation,
  };
};
export {COLORS, FONT_SIZE, DIMENTSIONS, BORDER_RADIUS, SHADOW_BOX};
