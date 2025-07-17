"use client";

import { useForm } from "react-hook-form";
import Select from "react-select";

type ServiceFormValues = {
  title: string;
  description: string;
  base_price: number;
  price_unit: string;
  estimed_duration: string;
  category: string[]; // assuming multi-select
};
const dummyCategories = [
  { id: "01JYCJ2F945T25238E44PHFP3C", name: "Car Wash" },
  { id: "02ABC123XYZ456", name: "Oil Change" },
  { id: "03DEF789LMN012", name: "Tire Replacement" },
];

export default function CreateServicePage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ServiceFormValues>({
    defaultValues: {
      title: "",
      description: "",
      base_price: 0,
      price_unit: "",
      estimed_duration: "",
      category: [],
    },
  });

  const categoryOptions = dummyCategories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  const onSubmit = async (data: ServiceFormValues) => {
    console.log("Submitting:", data);

    // try {
    //   const res = await fetch('/api/services', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await res.json();
    //   if (!res.ok) throw new Error(result.message);
    //   alert('Service created successfully!');
    // } catch (error: any) {
    //   console.error(error);
    //   alert('Error creating service: ' + error.message);
    // }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
        Create New Service
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Service Title
          </label>
          <input
            type="text"
            placeholder="Enter service title"
            {...register("title", { required: "Title is required" })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            rows={4}
            placeholder="Detailed description of the service"
            {...register("description", {
              required: "Description is required",
            })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Base Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Base Price ($)
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 49.99"
            {...register("base_price", {
              required: "Base price is required",
              valueAsNumber: true,
            })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.base_price ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.base_price && (
            <p className="text-red-500 text-sm mt-1">
              {errors.base_price.message}
            </p>
          )}
        </div>

        {/* Price Unit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Unit
          </label>
          <input
            type="text"
            placeholder="e.g. per vehicle"
            {...register("price_unit", { required: "Price unit is required" })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.price_unit ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.price_unit && (
            <p className="text-red-500 text-sm mt-1">
              {errors.price_unit.message}
            </p>
          )}
        </div>

        {/* Estimated Duration */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estimated Duration
          </label>
          <input
            type="text"
            placeholder="e.g. 1 hour"
            {...register("estimed_duration", {
              required: "Duration is required",
            })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.estimed_duration ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.estimed_duration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.estimed_duration.message}
            </p>
          )}
        </div>

        {/* Category Selector */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <Select
            options={categoryOptions}
            isMulti
            className="text-sm"
            classNamePrefix="react-select"
            onChange={(selectedOptions) =>
              setValue(
                "category",
                selectedOptions.map((option) => option.value)
              )
            }
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-full">
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Create Service
          </button>
        </div>
      </form>
    </div>
  );
}
