"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
  company?: string;
  phone?: string;
  address: {
    street_address: string;
    city: string;
    state: string;
    postal_code: number;
    latitude: number;
    longitude: number;
  };
};

export default function Registration() {
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
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              defaultValue="John Doe"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              defaultValue="john.doe@example.com"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
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
              placeholder="••••••••"
              defaultValue="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-green-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Address Section — Common for all */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                placeholder="123 Main St"
                {...register("address.street_address", {
                  required: "Street is required",
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.address?.street_address
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="Dhaka"
                {...register("address.city", { required: "City is required" })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.address?.city ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                placeholder="Dhaka Division"
                {...register("address.state")}
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="number"
                placeholder="1205"
                {...register("address.postal_code", {
                  required: "Postal code is required",
                  valueAsNumber: true,
                })}
                className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
                  errors.address?.postal_code
                    ? "border-red-500"
                    : "border-gray-300"
                } focus:outline-none focus:border-green-500`}
              />
            </div>
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
                  placeholder="Business or Company"
                  defaultValue="Doe Enterprises"
                  {...register("company", {
                    required: "Company name is required",
                  })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
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
                  placeholder="01XXXXXXXXX"
                  defaultValue="+1234567890"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className={`w-full px-4 py-2 rounded-md border text-gray-900 placeholder:text-gray-400 ${
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
          <Link href="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
