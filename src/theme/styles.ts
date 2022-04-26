const brandRing = {
  ring: 2,
  ringColor: "brand.500",
};

export const buttonStyles = {
  variants: {
    primary: {
      ...brandRing,
      // color: mode("white", "gray.800")(props),
      color: "gray.800",
      backgroundColor: "brand.200",
      // backgroundColor: mode("brand.500", "brand.200")(props),

      _hover: {
        // backgroundColor: mode("brand.600", "brand.300")(props),
      },

      _active: {
        // backgroundColor: mode("brand.700", "brand.400")(props),
      },
    },
  },
};

export const inputSelectStyles = {
  Input: {
    variants: {
      filled: {
        field: {
          _focus: {
            borderColor: "brand.500",
            ...brandRing,
          },
        },
      },
    },
  },
};

export const checkboxStyles = {
  baseStyle: {
    control: {
      _focus: { ...brandRing },
    },
  },
};
