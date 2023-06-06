import { useDispatch, useSelector } from "react-redux";
import Input from "../../../UI/Input";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import passwordValidation from "../../../util/passwordValidation";
import { userAction } from "../../../store/user-slice";
import { Link } from "react-router-dom";
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
          label="Username"
          labelNone
          inputParams={{ type: "text", placeholder: "Username" }}
          primaryLabel="username"
          className=""
          validation={(value) => value.trim().length !== 0}
        />

        <Input
          signup
          id="Register"
          label="Phone no."
          labelNone
          inputParams={{ type: "tel", placeholder: "Phone/contact" }}
          primaryLabel="mobile"
          className=""
          validation={(value) => phone.test(value)}
          errMsg="please enter a valid phone number!"
        />
        <Input
          signup
          id="Register"
          label="Email"
          labelNone
          inputParams={{ type: "email", placeholder: "Email" }}
          primaryLabel="email"
          className=""
          validation={(value) => email.test(value)}
          errMsg="please enter a valid email!"
        />

        <Input
          signup
          id="Register"
          label="Passoword"
          labelNone
          inputParams={{ type: "password", placeholder: "password" }}
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
          label="Confirm password"
          labelNone
          inputParams={{ type: "password", placeholder: "confirm password" }}
          primaryLabel="confirm_password"
          className=""
          validation={(value) => value === password}
          errMsg="confirm password and password did not  match"
        />
        <p className="text-xs md:text-sm text-gray-400">
          By signing up, I agree to the Onesetu{" "}
          <Link to="/terms">
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link to="/terms">
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
              Terms of Service.
            </span>
          </Link>
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
