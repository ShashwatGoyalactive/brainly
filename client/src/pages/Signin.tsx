import { Button, Input } from "../components/Index";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    setLoading(true);
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      const user = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
        username,
        password,
      });

      if (user) {
        alert("signin successful");
        localStorage.setItem("token", user.data.token);
        axios.defaults.headers.common["Authorization"] = `${user.data.token}`;
        navigate("/dashboard");
      } else {
        alert("signin failed");
      }
    } catch (error) {
      alert("signin failed : " + error);
    }
    setLoading(false);
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200 min-w-48 ">
      <div className="bg-white rounded border border-slate-200 flex flex-col p-4 justify-center">
        <label htmlFor="username">
          
          <Input
            placeholder="username"
            id="username"
            type="text"
            reference={usernameRef}
          />
        </label>
        <label htmlFor="password">
          <Input
            reference={passwordRef}
            placeholder="password"
            id="password"
            type="password"
          />
        </label>
        <div className="flex justify-center pt-4">
          <Button
            onClick={signin}
            variant="primary"
            text="signin"
            fullWidth={true}
            loading={loading}
          />

          <span>or</span>

          <Button
            onClick={() => navigate("/signup")}
            variant="primary"
            text="signup"
            fullWidth={true}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
