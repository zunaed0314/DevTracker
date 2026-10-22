import React, { useState } from "react";
import useInputField from "../../Hook/useInputField";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";

const Root = () => {
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const [error, setError] = useState("");
  const [eyeOpen, setEyeOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (password !== "123456") {
      setError("WRONG PASSWORD!!");
      return;
    }

    setError("");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="border p-5 flex flex-col justify-center items-center min-h-screen mx-40">
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-transparent rounded-box w-xs border-2 border-black p-4">
                
                <label className="label">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={emailOnChange}
                    className="input focus:outline-1 focus:outline-offset-0"
                    placeholder="Email"
                />

                <label className="label">Password</label>
                <div className="relative">
                <input
                    type={eyeOpen ? "text" : "password"}
                    value={password}
                    onChange={passwordOnChange}
                    className="input focus:outline-1 focus:outline-offset-0 w-full pr-10"
                    placeholder="Password"
                />
                <button
                    type="button"
                    onClick={() => setEyeOpen(!eyeOpen)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-xs bg-transparent border-none"
                >
                    {eyeOpen ? <Eye color="lightgray" /> : <EyeOff color="lightgray" />}
                </button>
                </div>

                <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>
        <h2>{error}</h2>
        </div>
    );
};

export default Root;