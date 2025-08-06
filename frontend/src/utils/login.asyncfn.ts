import {
  ActionState,
  AuthActionState,
  UserLoginPropTypes,
  UserPropTypes,
} from "@/types/interface";
import axios from "axios";

// Login action function
export const authSubmitAction = async (
  prevState: AuthActionState,
  formData: FormData
): Promise<ActionState> => {
  const values: UserLoginPropTypes = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      values,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return { message: response.data.message || "Login successful" };
  } catch (err: any) {
    console.error("Login error:", err);

    if (err.response) {
      return {
        message:
          err.response.data.message || `Server error: ${err.response.status}`,
      };
    } else if (err.request) {
      return {
        message:
          "Cannot connect to server. Please check if the backend is running.",
      };
    } else {
      return { message: `Request failed: ${err.message}` };
    }
  }
};
y;

// Signup action function
export const signupSubmitAction = async (
  prevState: AuthActionState,
  formData: FormData
): Promise<ActionState> => {
  const values: UserPropTypes = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/auth/signup",
      values,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return { message: response.data.message || "Signup successful" };
  } catch (err: any) {
    console.error("Signup error:", err);

    if (err.response) {
      return {
        message:
          err.response.data.message || `Server error: ${err.response.status}`,
      };
    } else if (err.request) {
      return {
        message:
          "Cannot connect to server. Please check if the backend is running.",
      };
    } else {
      return { message: `Request failed: ${err.message}` };
    }
  }
};
