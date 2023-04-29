import React from "react";
import FormControl from "./FormControl";
import { Controller } from "react-hook-form";

const TextInput = ({ control, label, id, name, type }) => {
  return (
    <FormControl>
      <label htmlFor={id} className="mb-3">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input type={type} className="p-2" id={id} {...field} />
        )}
      />
    </FormControl>
  );
};

export default TextInput;
