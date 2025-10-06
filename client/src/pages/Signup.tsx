import { useRef, useState } from "react";
import { Button, Input } from "../components/Index";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function singnup() {
    setLoading(true);
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      alert("Please fill all the fields");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/v1/signup`, {
        username,
        password,
      });
      alert("signup successful");
      usernameRef.current!.value = "";
      passwordRef.current!.value = "";
      navigate("/signin");
    } catch (err) {
      console.log(err);
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
            placeholder="password"
            id="password"
            type="password"
            reference={passwordRef}
          />
        </label>
        <div className="flex justify-center pt-4">
          <Button
            onClick={singnup}
            variant="primary"
            text="signup"
            fullWidth={true}
            loading={loading}
          />
          <span>or</span>

          <Button
            onClick={() => navigate("/signin")}
            variant="primary"
            text="signin"
            fullWidth={true}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
