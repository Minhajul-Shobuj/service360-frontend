/* eslint-disable @typescript-eslint/no-explicit-any */
"user server";

import { cookies } from "next/headers";

const cookie = await cookies();
const accessToken = cookie.get("accessToken")?.value;
export const createService = async (serviceData: any) => {
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  try {
    const res = await fetch("api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify(serviceData),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error creating service:", error);
    throw new Error("Service creation failed");
  }
};

export const getMyServices = async () => {
  if (!accessToken) {
    throw new Error("Access token is missing");
  }
  try {
    const res = await fetch("api/services/my-services", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      cache: "no-store",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching my services:", error);
    throw new Error("Failed to fetch my services");
  }
};

export const getAllservices = async () => {
  try {
    const res = await fetch("api/services", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw new Error("Failed to fetch services");
  }
};

export const getServiceById = async (id: string) => {
  try {
    const res = await fetch(`api/services/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    throw new Error("Failed to fetch service");
  }
};
