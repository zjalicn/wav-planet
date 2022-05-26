import {
  theme as base,
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

import {
  buttonStyles,
  inputSelectStyles,
  checkboxStyles,
  linkStyles,
} from "./styles";

const theme = extendTheme(
  {
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    components: {
      Button: { ...buttonStyles },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: { ...checkboxStyles },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
