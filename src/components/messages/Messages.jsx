import "./messages.css";
import clsx from "clsx";
import { StyledMessage } from "./styled-message.ts";


// export const Messages = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["message", variant];

//   if (outlined) classNames.push("is-outlined");
//   if (elevated) classNames.push("is-elevated");

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

//another
// export const Messages = ({ variant, outlined, elevated, children }) => { //with clsx
  

//   return (
//     // <p className={clsx(   //main  comment 
//     //   'message',
//     //   variant,
//     //   outlined && "is-outlined",
//     //   elevated && "is-elevated"
//     // )}>{children}</p>

//     <p className={clsx(   //alternative
//         "message", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}>
//       {children}
//     </p>
//   );

//another

//   //  const classNames = clsx(css[variant], {   //with .module.css
//   //     
//   //      "is-outlined": outlined,
//   //      "is-elevated": elevated,
//   //    });
//   //  return <p className={}>{children}</p>

//};

export const Messages = ({ variant, outlined, elevated, children }) => { //with styled-components  install need

  return <StyledMessage outlined={outlined} elevated={elevated}>{children}</StyledMessage>;

}
