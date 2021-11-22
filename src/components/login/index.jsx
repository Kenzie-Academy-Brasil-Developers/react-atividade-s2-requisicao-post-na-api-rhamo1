import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export const Login = ({ isAuthenticated, setIsAuthenticated }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (user) => {
    console.log({ ...user });
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...user })
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        setIsAuthenticated(true);
        toast.success("Autenticado!");
      })
      .catch((err) =>
        setError("password", {
          message: toast.error("Senha incorreta."),
        })
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <form className="form container" onSubmit={handleSubmit(handleForm)}>
        <h2>Login</h2>

        <div className="formField">
          <input type="text" placeholder="username" {...register("username")} />
          <p>{errors.username && errors.username.message}</p>
        </div>

        <div
          className="formField"
          style={isAuthenticated ? { color: "green" } : { color: "red" }}
        >
          <input
            type="password"
            placeholder="senha"
            {...register("password")}
          />
          <p>{errors.password && errors.password.message}</p>
        </div>

        <button className="btn" type="submit">
          Logar
        </button>
      </form>
    </motion.div>
  );
};
