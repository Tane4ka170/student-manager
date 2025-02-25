import { authRegister, cleanUI } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  registerSchema,
  TRegisterFormInputs,
} from "@/validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

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
    const { firstName, lastName, email, password } = data;
    dispatch(authRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => navigate("/login?message=registered"));
  };

  useEffect(() => {
    return () => {
      dispatch(cleanUI());
    };
  }, [dispatch]);

  if (accessToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form noValidate onSubmit={handleSubmit(onSubmitHandler)}></Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
