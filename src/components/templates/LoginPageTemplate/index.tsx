import React from "react";
import BasePageComponent from "src/components/BasePageComponent";
import {
  isValidUsername,
  isValidPassword,
} from "../../../utilities/commons/validator";
interface Props {
  submitLogin: () => void;
  errorMsg?: string;
}
const LoginPageTemplate: React.FC<Props> = ({ errorMsg }) => {
  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleLogin = React.useCallback(() => {
    if (state.username && !isValidUsername(state.username)) {
      setError("Username invalid! Must be 6 to 50 characters");

      return;
    }

    if (state.password && !isValidPassword(state.password)) {
      setError("Invalid password format");

      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <BasePageComponent>
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-[600px] p-10 rounded-lg bg-kGray space-y-4 text-white">
          <p className="font-bold text-40px text-center">RESTRICTED AREA</p>

          <p className="text-center">
            The area you are trying to access requires classified clearance.
            Please login below.
          </p>

          <br />

          <input
            placeholder="Username"
            className="border h-10 px-4 rounded text-black"
            onChange={(e) => {
              setState((s) => {
                return { ...s, username: e.target.value };
              });
            }}
          />

          <input
            placeholder="Password"
            type="password"
            className="border h-10 px-4 rounded text-black"
            onChange={(e) => {
              setState((s) => {
                return { ...s, password: e.target.value };
              });
            }}
          />

          {errorMsg ||
            (error && <p className="text-red-500">{errorMsg || error}</p>)}

          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleLogin}
              className="h-10 bg-connectBtn rounded w-full"
            >
              LOGIN
            </button>

            <p className=" mt-2">
              <a className="font bold text-kBlueLight" href="#">
                RESET{" "}
              </a>
              YOUR PASSWORD
            </p>

            <p>or</p>

            <p>
              NEW TO PCS?{" "}

              <a className="font bold text-kBlueLight mt-2" href="/signup">
                CREATE AN ACCOUNT.
              </a>
            </p>
          </div>
        </div>
      </div>
    </BasePageComponent>
  );
};

export default LoginPageTemplate;
