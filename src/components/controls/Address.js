import React from "react";
import { useFieldArray } from "react-hook-form";
import TextInput from "./TextInput";
import Select from "./Select";
import Button from "./Button";

const Address = ({ name, control }) => {
  const { fields, append, remove } = useFieldArray({ name, control });

  return (
    <>
      {fields.map((field, index) => (
        <div className="flex flex-row gap-2" key={index}>
          <Select
            control={control}
            id="state"
            label="State"
            name={`${name}.${index}.state`}
          />
          <TextInput
            control={control}
            id="city"
            label="City"
            name={`${name}.${index}.city`}
            type="text"
          />

          <Button
            onClick={() => {
              append({
                state: "",
                city: "",
              });
            }}
            className="p-0 bg-orange-800"
            label="+"
          />

          <Button
            onClick={() => {
              remove(index);
            }}
            disabled={index === 0}
            className="p-0 bg-orange-800"
            label="-"
          />
        </div>
      ))}
    </>
  );
};

export default Address;
