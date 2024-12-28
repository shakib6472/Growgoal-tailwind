function generateValues() {
  let values = {};
  for (let i = 1; i <= 1000; i++) {
    values[`${i}px`] = `${i}px`;
  }
  for (let i = 1; i <= 100; i++) {
    values[`${i}/100`] = `${i}%`;
    values[`${i}/100vh`] = `${i}vh`;
    values[`${i}/100vw`] = `${i}vw`;
  }
  return values;
}
function generateSpacingValues() {
  let spacingValues = {};

  for (let size = 0; size <= 800; size++) {
    spacingValues[`${size}px`] = `${size}px`;
  }
  for (let i = 1; i <= 100; i++) {
    spacingValues[`${i}/100`] = `${i}%`;
  }

  return spacingValues;
}
function generateLineHeightValues() {
  let lineHeightValues = {
    "extra-loose": "2.5",
    1.0: "1.0",
  };

  for (let size = 1.11; size <= 3.99; size += 0.01) {
    let roundedSize = Math.round(size * 100) / 100;
    let sizeString = roundedSize.toFixed(2);
    lineHeightValues[sizeString] = sizeString;
  }

  return lineHeightValues;
}
function generateBorderRadiusValues() {
  let borderRadiusValues = {
    inherit: "inherit",
    "4xl": "2rem",
  };

  for (let size = 0; size <= 800; size++) {
    borderRadiusValues[`${size}px`] = `${size}px`;
  }

  return borderRadiusValues;
}
function generateScreenBreakpoints() {
  return {
    xs: { min: "450px" },
    xl: { min: "1300px" },
    "2xl": { min: "1500px" },
    "max-xs": { max: "451px" },
    "max-sm": { max: "641px" },
    "max-md": { max: "769px" },
    "max-lg": { max: "1025px" },
    "max-xl": { max: "1300px" },
    "max-2xl": { max: "1500px" },
    "mm-xs-sm": { min: "450px", max: "640px" },
    "mm-xs-md": { min: "450px", max: "769px" },
    "mm-xs-lg": { min: "450px", max: "1025px" },
    "mm-sm-md": { min: "640px", max: "768px" },
    "mm-sm-lg": { min: "640px", max: "1024px" },
    "mm-md-lg": { min: "769px", max: "1025px" },
    "mm-lg-xl": { min: "1024px", max: "1300px" },
    "mm-md-xl": { min: "768px", max: "1300px" },
    "mm-sm-xl": { min: "640px", max: "1300px" },
    "mm-xs-xl": { min: "450px", max: "1300px" },
    "mm-xl-2xl": { min: "1300px", max: "1500px" },
    "mm-lg-2xl": { min: "1024px", max: "1500px" },
    "mm-md-2xl": { min: "768px", max: "1500px" },
    "mm-sm-2xl": { min: "640px", max: "1500px" },
    "mm-xs-2xl": { min: "450px", max: "1500px" },
  };
}
function generateFlexGrow() {
  let flexGrow = {};
  for (let i = 2; i <= 9; i++) {
    flexGrow[i] = i;
  }
  return flexGrow;
}
function generateBorderWidth() {
  let borderWidth = {
    DEFAULT: "1px",
    half: "0.5px",
    0: "0",
  };
  for (let i = 2; i <= 20; i++) {
    borderWidth[i] = `${i}px`;
  }
  return borderWidth;
}
function generateZIndex() {
  let zIndex = {};
  for (let i = 1; i <= 100; i++) {
    zIndex[i] = `${i}`;
  }
  return zIndex;
}
function generateTransitionProperties() {
  return {
    none: "none",
    all: "all",
    default:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    height: "height",
    width: "width",
    spacing: "margin, padding",
    border: "border, border-color, border-width",
    borderRadius: "border-radius",
    backgroundImage: "background-image",
    backgroundColor: "background-color",
    fontSize: "font-size",
    lineHeight: "line-height",
    textColor: "color",
    zIndex: "z-index",
    scale: "scale",
    rotate: "rotate",
    translate: "translate",
    skew: "skew",
    flex: "flex",
    order: "order",
    gridTemplateColumns: "grid-template-columns",
    gridColumn: "grid-column-start, grid-column-end",
    gridColumnStart: "grid-column-start",
    gridColumnEnd: "grid-column-end",
    gridTemplateRows: "grid-template-rows",
    gridRow: "grid-row-start, grid-row-end",
    gridRowStart: "grid-row-start",
    gridRowEnd: "grid-row-end",
  };
}
function generateOpacity() {
  let opacities = {};
  for (let i = 1; i <= 100; i++) {
    opacities[i] = `${i * 0.01}`;
  }
  return opacities;
}
function generateTracking() {
  let spacings = {};
  for (let i = 1; i <= 40; i++) {
    spacings[`${i}px`] = `${i}px`;
  }
  return spacings;
}
function generateAspectRatios() {
  let ratios = {};
  for (let i = 1.1; i < 20; i += 0.1) {
    const ratio = i.toFixed(1);
    ratios[`${ratio}/1`] = ratio;
  }
  return ratios;
}

function generateLineClampValues() {
    let lineClampValues = {};
    for (let i = 1; i <= 20; i++) {
        lineClampValues[i] = `${i}`;
    }
    return lineClampValues;
}

const colorWithOpacity = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};
module.exports = {
  prefix: 'twg-',
  content: [
    './src/**/*.{html,njk,js}',
    './src/pages/**/*.{html,njk,js}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        xs: "100%",
        sm: "641px",
        md: "768px",
        lg: "1024px",
        xl: "1246px",
        "2xl": "1500px",
      },
    },
    extend: {
      colors: {
        dark: {
          100: colorWithOpacity("dark-100"),
          200: colorWithOpacity("dark-200"),
          300: colorWithOpacity("dark-300"),
          400: colorWithOpacity("dark-400"),
          500: colorWithOpacity("dark-500"),
          600: colorWithOpacity("dark-600"),
          700: colorWithOpacity("dark-700"),
          800: colorWithOpacity("dark-800"),
          900: colorWithOpacity("dark-900"),
        },
        light: {
          100: colorWithOpacity("light-100"),
          200: colorWithOpacity("light-200"),
          300: colorWithOpacity("light-300"),
          400: colorWithOpacity("light-400"),
          500: colorWithOpacity("light-500"),
          600: colorWithOpacity("light-600"),
          700: colorWithOpacity("light-700"),
          800: colorWithOpacity("light-800"),
          900: colorWithOpacity("light-900"),
        },
        primary: {
          100: colorWithOpacity("primary-100"),
          200: colorWithOpacity("primary-200"),
          300: colorWithOpacity("primary-300"),
          400: colorWithOpacity("primary-400"),
          500: colorWithOpacity("primary-500"),
          600: colorWithOpacity("primary-600"),
          700: colorWithOpacity("primary-700"),
          800: colorWithOpacity("primary-800"),
          900: colorWithOpacity("primary-900"),
        },
        secondary: {
          100: colorWithOpacity("secondary-100"),
          200: colorWithOpacity("secondary-200"),
          300: colorWithOpacity("secondary-300"),
          400: colorWithOpacity("secondary-400"),
          500: colorWithOpacity("secondary-500"),
          600: colorWithOpacity("secondary-600"),
          700: colorWithOpacity("secondary-700"),
          800: colorWithOpacity("secondary-800"),
          900: colorWithOpacity("secondary-900"),
        },
        accent: {
          100: colorWithOpacity("accent-100"),
          200: colorWithOpacity("accent-200"),
          300: colorWithOpacity("accent-300"),
          400: colorWithOpacity("accent-400"),
          500: colorWithOpacity("accent-500"),
          600: colorWithOpacity("accent-600"),
          700: colorWithOpacity("accent-700"),
          800: colorWithOpacity("accent-800"),
          900: colorWithOpacity("accent-900"),
        },
        danger: {
          100: colorWithOpacity("danger-100"),
          200: colorWithOpacity("danger-200"),
          300: colorWithOpacity("danger-300"),
          400: colorWithOpacity("danger-400"),
          500: colorWithOpacity("danger-500"),
          600: colorWithOpacity("danger-600"),
          700: colorWithOpacity("danger-700"),
          800: colorWithOpacity("danger-800"),
          900: colorWithOpacity("danger-900"),
        },
        success: {
          100: colorWithOpacity("success-100"),
          200: colorWithOpacity("success-200"),
          300: colorWithOpacity("success-300"),
          400: colorWithOpacity("success-400"),
          500: colorWithOpacity("success-500"),
          600: colorWithOpacity("success-600"),
          700: colorWithOpacity("success-700"),
          800: colorWithOpacity("success-800"),
          900: colorWithOpacity("success-900"),
        },
        warning: {
          100: colorWithOpacity("warning-100"),
          200: colorWithOpacity("warning-200"),
          300: colorWithOpacity("warning-300"),
          400: colorWithOpacity("warning-400"),
          500: colorWithOpacity("warning-500"),
          600: colorWithOpacity("warning-600"),
          700: colorWithOpacity("warning-700"),
          800: colorWithOpacity("warning-800"),
          900: colorWithOpacity("warning-900"),
        },
      },
      height: generateValues(),
      maxHeight: generateValues(),
      minHeight: generateValues(),
      width: generateValues(),
      maxWidth: generateValues(),
      minWidth: generateValues(),
      fontSize: generateSpacingValues(),
      padding: generateSpacingValues(),
      margin: generateSpacingValues(),
      spacing: generateSpacingValues(),
      borderRadius: generateBorderRadiusValues(),
      flexGrow: generateFlexGrow(),
      screens: generateScreenBreakpoints(),
      lineHeight: generateLineHeightValues(),
      inset: generateSpacingValues(),
      textOpacity: generateOpacity(),
      letterSpacing: generateTracking(),
      aspectRatio: generateAspectRatios(),
      outlineOffset: generateValues(),
      fontFamily: {
        body: "var(--body-font)",
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      transitionProperty: generateTransitionProperties(),
      borderWidth: generateBorderWidth(),
      zIndex: generateZIndex(),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animation-delay"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".wh-full": {
          width: "100%",
          height: "100%",
        },
      };

      for (let i = 1; i <= 1000; i++) {
        newUtilities[`.wh-${i}px`] = {
          width: `${i}px`,
          height: `${i}px`,
        };
      }

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
