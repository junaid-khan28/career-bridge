import React, { useState } from "react";

// image import
import logo_img from "../../images/logo.png";

// property types of hooks
import type { AuthProtoTypes } from "../../types/Auth";

const SignIn = () => {
  const [signIn, setSignIn] = useState<AuthProtoTypes>({
    name: "",
    email: "",
    password: "",
  });

  const handleAuthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignIn((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <form>
        <div>
          <div>
            <img src={logo_img} alt="career-bridge" />
          </div>
          <h2>Create Account</h2>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={signIn.name}
              onChange={handleAuthInput}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signIn.email}
              onChange={handleAuthInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signIn.password}
              onChange={handleAuthInput}
            />
          </div>
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <div>
        <button>Google</button>
        <button>Github</button>
      </div>
    </div>
  );
};

export default SignIn;
