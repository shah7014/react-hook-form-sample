import React from "react";
import { useForm } from "react-hook-form";
import Controls from "./controls";

const AdvInfoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      addresses: [{ state: "", city: "" }],
    },
  });

  const successhandler = (data) => {
    console.log("DATA:- ", data);
  };

  const erorHandler = (errors) => {
    console.log("ERROR:- ", errors);
  };

  return (
    <div className="w-[90vw] h-[90vh] flex justify-center items-center">
      <form
        className="flex flex-col p-4 bg-slate-500 w-[50%]"
        onSubmit={handleSubmit(successhandler, erorHandler)}
      >
        {/* control-1 */}
        <Controls.TextInput
          control={control}
          id="fullName"
          label="Full Name"
          name="fullName"
          type="text"
        />

        {/* control-2 */}
        <Controls.TextInput
          control={control}
          id="email"
          label="Email"
          name="email"
          type="email"
        />

        {/* control-3 */}
        <Controls.TextInput
          control={control}
          id="phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          type="text"
        />

        {/* control-4 */}
        <Controls.TextInput
          control={control}
          id="password"
          label="Password"
          name="password"
          type="password"
        />

        {/* Address List */}
        <Controls.Address control={control} name={"addresses"} />

        {/* Submit */}
        <Controls.Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default AdvInfoForm;
