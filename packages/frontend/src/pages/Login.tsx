import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { handleError } from "@/lib/error";
import { api } from "@/lib/api";
import Skeleton from "react-loading-skeleton";
import { tokenStore } from "@/stores/tokenStore";

export const Login = () => {
  const { mutateAsync, status } = useMutation("login", api.login.bind(api), {
    onSuccess: async ({ token }) => {
      tokenStore.token = token;
    },
    onError: handleError
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{
    username: string;
    password: string;
  }>();
  const submitHandler = (data: { username: string; password: string }) =>
    mutateAsync(data);

  return (
    <div className="flex flex-col min-h-screen min-w-max p-12 text-white bg-gray-800">
      <h2 className="font-bold text-2xl">Login</h2>
      {status === "loading" ? (
        <Skeleton count={5} />
      ) : (
        <form
          className="flex flex-col justify-start items-start"
          onSubmit={handleSubmit(submitHandler)}
        >
          <span className="text-gray-300">Username</span>
          <input
            className="input border bg-gray-900 border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-indigo-600"
            {...register("username")}
          />
          {errors.username && (
            <p className="text-red-600">{errors.username.message}</p>
          )}
          <span className="text-gray-300">Password</span>
          <input
            type="password"
            className="input border bg-gray-900 border-gray-400 appearance-none rounded w-full px-3 py-2 mb-4 focus focus:border-blue-600 focus:outline-none active:outline-none active:border-indigo-600"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 mb-4 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};
