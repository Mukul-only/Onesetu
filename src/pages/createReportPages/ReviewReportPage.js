import { useDispatch, useSelector } from "react-redux";
import ReportCard from "../../components/report/ReportCard";
import ReportComponent from "../../components/report/ReportComponent";
import ReviewReport from "../../components/report/reviewReport/ReviewReport";
import { formfeildSliceAction } from "../../store/formfeild-slice";
import { useEffect, useState } from "react";
import { formDataAction } from "../../store/formData-slice";
import Overlay from "../../UI/Overlay";
import Register from "../../components/report/reviewReport/Register";
import Button from "../../UI/Button";
import { CSSTransition } from "react-transition-group";
import Error from "../../components/report/Error";
import Login from "../../components/report/reviewReport/Login";
import { userAction } from "../../store/user-slice";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/report/ProgressBar";
import Card from "../../UI/Card";
const ReviewReportPage = () => {
  const dispatch = useDispatch();
  const { isFormValid } = useSelector((state) => state.formfeild);

  const { signup } = useSelector((state) => state.user);
  const { login } = useSelector((state) => state.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showOVerlay, setShowOverlay] = useState(false);
  const { authMethod } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const continueHandler = (e) => {
    const token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      console.log("found");
      dispatch(formDataAction.resetFinal());
      alert("Report created successfully");
      navigate("/");
    } else {
      e.preventDefault();
      setShowOverlay(true);
    }
  };
  const registerHandler = () => {
    const id = authMethod === "signup" ? "Register" : "Login";
    dispatch(formfeildSliceAction.setIsTouched({ id: id, isTouched: true }));
    const data = authMethod === "signup" ? signup : login;
    if (isFormValid) {
      submitForm(JSON.stringify(data));
    }
  };

  const submitForm = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch(
        "https://gagan494.pythonanywhere.com/" + authMethod,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error(`Error code :${response.status}`);
      }

      const resData = await response.json();
      if (resData.status_code === 200) {
        setError(resData.error);
      } else {
        const token = resData.access;
        dispatch(
          formDataAction.setAllExpenseData({
            id: "access",
            value: token,
          })
        );
        localStorage.setItem("token", token);
        setShowOverlay(false);

        setTimeout(() => {
          dispatch(userAction.reset());
        }, 500);
      }
      console.log(resData);
    } catch (error) {
      setError(error.message);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <CSSTransition
        in={showOVerlay}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: "trans-in",
          exitActive: "trans-out",
        }}
      >
        <Overlay setState={setShowOverlay} className="mx-3  ">
          <div className="xl:w-[72rem] ">
            <ReportCard
              className="max-h-[94vh] overflow-y-auto "
              animationDisable
            >
              {authMethod === "signup" ? <Register /> : <Login />}

              {error && <Error error={error} className="mt-6" />}
              <Button
                className="block mx-auto px-10 py-2 mt-8 bg-darkBlue  text-white"
                onClick={registerHandler}
                disabled={isSubmitting ? true : false}
              >
                {isSubmitting
                  ? "Submitting..."
                  : authMethod === "signup"
                  ? "Signup"
                  : "Login"}
              </Button>
            </ReportCard>
          </div>
        </Overlay>
      </CSSTransition>
      {/* <ReportComponent
        progress="2"
        toBack="/createreport/personalinfo"
        toContinue={true}
        onContinue={continueHandler}
      >
        <ReviewReport />
      </ReportComponent> */}
      <ReviewReport />
    </>
  );
};
export default ReviewReportPage;
