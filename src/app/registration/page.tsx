"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type RegisterValues = {
  name: string;
  email: string;
  password: string;
  company?: string;
  phone?: string;
};

export default function RegisterForm() {
  const [activeTab, setActiveTab] = useState<"user" | "provider">("user");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterValues>();

  const onSubmit = (data: RegisterValues) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-lg w-full border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Create an Account
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("user")}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === "user"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            } transition`}
          >
            User
          </button>
          <button
            onClick={() => setActiveTab("provider")}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === "provider"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            } transition`}
          >
            Service Provider
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className={`w-full px-4 py-2 rounded-md border placeholder:text-black ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="your@email.com"
              className={`w-full px-4 py-2 rounded-md border placeholder:text-black ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
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
              {...register("password", { required: "Password is required" })}
              placeholder="••••••••"
              className={`w-full px-4 py-2 rounded-md border placeholder:text-black ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Extra fields for service provider */}
          {activeTab === "provider" && (
            <>
              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  placeholder="Business or Company"
                  className={`w-full px-4 py-2 rounded-md border placeholder:text-black ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  placeholder="01XXXXXXXXX"
                  className={`w-full px-4 py-2 rounded-md border placeholder:text-black ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-green-500`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors font-medium"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <a href="#" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
