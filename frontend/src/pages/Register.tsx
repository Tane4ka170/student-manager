import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  registerSchema,
  TRegisterFormInputs,
} from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useAppDispatch();
  const { loading, error, accessToken } = useAppSelector(
    (state) => state.students
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<TRegisterFormInputs> = (data) => {
    const { firstName, lastName, email } = data;
  };
  return <div>Register</div>;
};

export default Register;
