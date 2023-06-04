import { useDispatch, useSelector } from "react-redux";
import Input from "../../../UI/Input";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import { userAction } from "../../../store/user-slice";
const Login = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({ id: "Login", setIsTouched: false })
    );
  }, [dispatch]);
  const authChangeHandler = () => {
    dispatch(formfeildSliceAction.reset());
    dispatch(userAction.setAuthMethod("signup"));
  };
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">Login</h1>
      <div className="space-y-4 mt-8">
        <Input
          login
          id="Login"
          inputParams={{ type: "text", placeholder: "enter username" }}
          label="User name"
          primaryLabel="username"
          className=""
          validation={(value) => value.trim().length !== 0}
        />
        <Input
          login
          id="Login"
          inputParams={{ type: "password", placeholder: "password" }}
          label="Password"
          primaryLabel="password"
          className=""
          validation={(value) => value.trim().length !== 0}
        />
        <p className="text-sm">
          Don't have an account?{" "}
          <span
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
            onClick={authChangeHandler}
          >
            Signup
          </span>
        </p>
      </div>
    </>
  );
};
export default Login;
