import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.css";

type Inputs = {
  login: string,
  password: string,
};

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username or email address</label>
        <input {...register("login")} />
        <div className="lable-password">
          <label>Password</label>
          <a href="https://github.com/password_reset">Forgot password?</a>
        </div>
        <input {...register("password", { required: true })} />
        {errors.password && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;