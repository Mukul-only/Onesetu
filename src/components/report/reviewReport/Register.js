import { useDispatch, useSelector } from "react-redux";
import Input from "../../../UI/Input";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import passwordValidation from "../../../util/passwordValidation";
import { userAction } from "../../../store/user-slice";
const Register = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({ id: "Register", setIsTouched: false })
    );
  }, [dispatch]);
  const email = /^[a-zA-Z0-9](\.?[a-zA-Z0-9]){3,}@[a-zA-Z]{4,}\.[a-z]{2,4}$/;
  const phone = /^\d{10}$/;

  const { password } = useSelector((state) => state.user.signup);
  const authChangeHandler = () => {
    dispatch(formfeildSliceAction.reset());
    dispatch(userAction.setAuthMethod("login"));
  };
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">Register</h1>
      <div className="space-y-3 xl:space-y-5 mt-6">
        <Input
          signup
          id="Register"
          inputParams={{ type: "text", placeholder: "enter username" }}
          label="User name"
          primaryLabel="username"
          className=""
          validation={(value) => value.trim().length !== 0}
        />

        <Input
          signup
          id="Register"
          inputParams={{ type: "text", placeholder: "phno." }}
          label="Phone number"
          primaryLabel="mobile"
          className=""
          validation={(value) => phone.test(value)}
          errMsg="please enter a valid phone number!"
        />
        <Input
          signup
          id="Register"
          inputParams={{ type: "text", placeholder: "email" }}
          label="Email"
          primaryLabel="email"
          className=""
          validation={(value) => email.test(value)}
          errMsg="please enter a valid email!"
        />

        <Input
          signup
          id="Register"
          inputParams={{ type: "password", placeholder: "password" }}
          label="Password"
          primaryLabel="password"
          className=""
          validation={(value) =>
            passwordValidation(value) !== "" ? false : true
          }
          errMsg={passwordValidation(password)}
        />
        <Input
          signup
          id="Register"
          inputParams={{ type: "password", placeholder: "confirm password" }}
          label="Confirm password"
          primaryLabel="confirm_password"
          className=""
          validation={(value) => value === password}
          errMsg="confirm password and password did not  match"
        />
        <p className="text-xs md:text-sm text-gray-400">
          By signing up, I agree to the Onesetu Privacy Policy and Terms of
          Service.
        </p>
        <p className="text-sm">
          Already a user?{" "}
          <span
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
            onClick={authChangeHandler}
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
};
export default Register;
