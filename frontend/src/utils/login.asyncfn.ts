import { ActionState, UserLoginPropTypes } from "@/types/interface";
import axios from 'axios';

export const submitAction = async (
  _: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const values: UserLoginPropTypes = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  try {
    const response = await axios.post("http://localhost:3000/login", values);
    return { message: response.data.message };
  } catch (err) {
    return { message: `Failed to login : ${err}` };
  }
};
