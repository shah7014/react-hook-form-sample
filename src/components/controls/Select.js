import React from "react";
import { Controller } from "react-hook-form";
import FormControl from "./FormControl";

const Select = ({ control, label, id, name }) => {
  return (
    <FormControl>
      <label htmlFor={id} className="mb-3">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select {...field} className="p-2">
            <option value="">Select your state</option>
            <option value="Delhi">Delhi</option>
            <option value="Punjab">Punjab</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Bihar">Bihar</option>
          </select>
        )}
      />
    </FormControl>
  );
};

export default Select;
