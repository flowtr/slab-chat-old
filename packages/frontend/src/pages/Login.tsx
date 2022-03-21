import { tokenStore } from "@/stores/tokenStore";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "@/lib/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export const Login = ({ onSubmit }: { onSubmit?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{
    username: string;
    password: string;
  }>();
  const submitHandler = (data: { username: string; password: string }) => {
    console.log(data);

    api
      .post<{
        token: string;
      }>("/user/login", { ...data, rememberMe: true })
      .then((res) => {
        tokenStore.token = res.data.token;
        toast.dark("Logged in succesfully.", {
          autoClose: 6000,
          icon: (
            <FontAwesomeIcon
              icon={faCheck}
              className="mr-2"
              size="lg"
              color="green"
            />
          )
        });
        onSubmit?.();
      })
      .catch((err) => {
        console.error(err);
        toast.dark(`Failed to login: ${err.response.data.message}`, {
          autoClose: 6000,
          icon: (
            <FontAwesomeIcon
              className="mr-2"
              icon={faX}
              size="lg"
              color="red"
            />
          )
        });
      });
  };

  return (
    <div className="flex flex-col min-h-screen min-w-max p-12 text-white bg-gray-800">
      <h2 className="font-bold text-2xl">Login</h2>
      <form
        className="flex flex-col justify-start items-start"
        onSubmit={handleSubmit(submitHandler)}
      >
        <span className="text-gray-300">Username</span>
        <input
          className="input border bg-gray-900 border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-600">{errors.username.message}</p>
        )}
        <span className="text-gray-300">Password</span>
        <input
          type="password"
          className="input border bg-gray-900 border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-600">{errors.password.message}</p>
        )}
        <button
          className="bg-blue-800 hover:bg-blue-dark text-white font-bold py-3 px-6 mb-4 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
