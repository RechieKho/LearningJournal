export type NumericStyleUnit = `${number}${
  | "px"
  | "rem"
  | "em"
  | "vh"
  | "vw"
  | "%"}`;
interface InlineStyle {
  width?: NumericStyleUnit;
  height?: NumericStyleUnit;
}
export const createStyle = (style: InlineStyle) => style;
