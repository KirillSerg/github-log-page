import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.scss";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Please, enter a valid email")
      .email("Please, enter a valid email"),
    password: yup.string().required("Enter password"),
  })
  .required();

interface Inputs {
  email: string;
  password: string;
}


const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
   
      console.log(data);
      
    reset();
  };

  return (
    <div className="form-section">
      {errors?.email && <span style={{color:"red"}}>{errors?.email?.message || "Error!"}</span>}
      {errors?.password && (
          <span style={{color:"red"}}>{errors?.password?.message || "This field is required!"}</span>
        )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username or email address</label>
        <input type="text" {...register("email")} />
        
        <div className="lable-password">
          <label>Password:</label>
          <a href="https://github.com/password_reset">Forgot password?</a>
        </div>
        <input type="password" {...register("password", { required: true })} />
        
        <input className="submit-btn" type="submit" value="Sing in" />
      </form>
    </div>
  );
};

export default Form;