import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode
  variant: string
}

export enum VariantType {  //const handler
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    backgroundColor: "gray",
    color: "white",
};

const getBgColor = (variant: VariantType) => {
  switch (variant) {
    case VariantType.INFO:
      return "blue";
    case VariantType.SUCCESS:
      return "green";
    case "error":
      return "red";
    case "warning":
      return "orange";
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};
  
// export const Alert = ({ children }) => {

//     return <p style={alertStyles}>{children}</p>
// }

export const Alert = (props: AlertProps) => {
  const { children, variant } = props

  return <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>{children}</p>

}