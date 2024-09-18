import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}




// import React from "react";

// const Button = ({
//   childern,
//   type = "button",
//   bgColor = "bg-blue-600",
//   textColor = "text-white",
//   className = "",
//   ...props
// }) {


//   return (
//     <div>
//       <button
//         type="button"
//         className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
//         {...props}
//       >
//         {childern}0000
//       </button>
//     </div>
//   );
// };

// export default Button;
