import React, { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import "./IntroForm.scss";

let renderCount = 0;

const IntroForm = () => {
  renderCount++;

  const {
    register,
    handleSubmit,
    watch,
    formState,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      account: {
        firstName: "",
        lastName: "",
        cart: [{ product: "", amount: 0 }],
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "account.cart",
    control,
  });

  // console.log("ERROR:- ", errors);

  // console.log(watch("firstName"));

  const handleSetValue = () => {
    setValue("account", "abc");
    setValue("account", "xyz");
  };

  return (
    <div className="intro-form">
      <form
        onSubmit={handleSubmit(
          (data) => {
            console.log(data);
          },
          (errors) => {
            console.log(errors);
          }
        )}
      >
        <div className="form-input">
          <input
            {...register("account.firstName", {
              required: { value: true, message: "First Name is required" },
            })}
            placeholder="Enter first name"
          />
          <p className="form-error">{errors.account?.firstName?.message}</p>
        </div>

        <div className="form-input">
          <input
            {...register("account.lastName", {
              required: { value: true, message: "Last Name is required" },
              minLength: {
                value: 4,
                message: "Last Name should be minimum 4 characters long",
              },
            })}
            placeholder="Enter last name"
          />
          <p className="form-error">{errors.account?.lastName?.message}</p>
        </div>

        {/* using field array */}
        <div className="form-product">
          {fields.map((field, index) => (
            <section className="product-info" key={index}>
              <input {...register(`account.cart.${index}.product`)} />
              <input
                type="number"
                {...register(`account.cart.${index}.amount`, {
                  valueAsNumber: true,
                })}
              />
              <button
                type="button"
                onClick={() => {
                  remove(index);
                }}
              >
                Remove
              </button>
            </section>
          ))}
        </div>

        <div className="form-buttons">
          <button
            type="button"
            onClick={() => {
              append({
                product: "",
                amount: 0,
              });
            }}
          >
            Append
          </button>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleSetValue}>
            SetValue
          </button>
        </div>

        <p>render count:- {renderCount}</p>
      </form>
    </div>
  );
};

export default IntroForm;
