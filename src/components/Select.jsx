import { nanoid } from "@reduxjs/toolkit";
import React, { useId } from "react";

function Select({ options, label, className = "null", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">

      {label && (
        
        <label htmlFor="id" className="hero">
          <select
            {...props}
            id={id}
            ref={ref}
            className={`text-center ${className}`}
          >
            {options?.map((option) => (
              <option key={nanoid()} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      )}
    </div>
  );
}

export default React.forwardRef(Select);
