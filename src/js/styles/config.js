import { css } from 'styled-components';

export const colors = {
  white: '#FCFCFF',
  black: '#0A0A15',
  greyDark: '#1A1C22',
  grey: '#252A30',
  greyMiddle: '#383A41',
  greyMiddleLight: '#70767F',
  greyLight: '#C5C8CD',
  greyVeryLight: '#D9DCE0',
  blue: '#1166FF',
  cyan: '#21D7FF',
  yellow: '#FFE070',
  red: '#ED1C24',
  mint: '#9BDAD8',
  jeans: '#4C5C74',
};

export const text = {
  middle: colors.greyMiddle,
  light: colors.greyLight,
  veryLight: colors.greyVeryLight,
  dark: colors.black,
  em: colors.cyan,
};

export const mixins = {
  shadow: css`
    box-shadow: 1px 3px 5px 2px ${text.veryLight}80;
  `,
  hideText: css`text-indent: -9999px`,
  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  clearfix: css`
    ::before,
    ::after {
      content: "";
      display: table;
      clear: both;
    }
  `,
  box(color) {
    return css`
      border: 1px solid ${color || text.veryLight};
      border-radius: 5px;
      box-shadow: 1px 3px 5px 2px ${color || text.veryLight}80;
    `;
  },
};
