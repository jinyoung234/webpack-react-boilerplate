import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import type { Preview } from "@storybook/react";
import { globalStyle } from "../src/styles/globalStyle";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={(theme) => theme}>
        <Global styles={globalStyle} />
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
