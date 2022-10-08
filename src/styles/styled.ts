import styled, { CreateStyled } from "@emotion/styled";
import { useTheme as _useTheme } from "emotion-theming";

import { HardsandsTheme } from "./theme";

export const useTheme = (...args: Parameters<typeof _useTheme>) =>
  _useTheme<HardsandsTheme>(...args);
// @ts-ignore
export default styled as CreateStyled<HardsandsTheme>;
