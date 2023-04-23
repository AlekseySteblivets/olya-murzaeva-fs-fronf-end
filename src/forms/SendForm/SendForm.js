import { useForm } from "react-hook-form";

import styles from "./SendForm.module.scss";

export default function SendForm() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  console.log("errors", errors);
  return (
    <div className={styles.blockForm}>
      <h3 className={styles.title}>Write to me</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          className={styles.inputForm}
          placeholder="Name"
          {...register("name", {
            required: "It is required field",
            minLength: {
              value: 2,
              message: "min 2 letters",
            },
          })}
        />
        <div className={styles.blockError}>
          {errors?.name && (
            <p className={styles.textError}>
              {errors?.name?.message || "Error!"}
            </p>
          )}
        </div>
        <input
          className={styles.inputForm}
          placeholder="E-mail"
          {...register("email", {
            required: "It is required field",
            pattern: {
              value:
                /^[A-Za-z0-9._]{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+\.\w{2,3}$/,
              message: "The email seems not valid.",
            },
          })}
        />
        <div className={styles.blockError}>
          {errors?.email && (
            <p className={styles.textError}>
              {errors?.email?.message || "Error!"}
            </p>
          )}
        </div>
        <textarea
          className={styles.textarea}
          placeholder="SMS"
          {...register("text", {
            required: "It is required field",
            minLength: {
              value: 15,
              message: "min 15 letters",
            },
          })}
        />
        <div className={styles.blockError}>
          {errors?.text && (
            <p className={styles.textareaError}>
              {errors?.text?.message || "Error!"}
            </p>
          )}
        </div>
        <button type="submit" className={styles.button} disabled={!isValid}>
          Send
        </button>
      </form>
    </div>
  );
}
