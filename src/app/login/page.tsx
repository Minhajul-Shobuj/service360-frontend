"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-green-500"
              } focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-300 focus:border-green-500"
              } focus:outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don`t have an account?{" "}
          <Link href="/registration" className="text-green-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
