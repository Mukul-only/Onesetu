import { useDispatch } from "react-redux";
import Input from "../../../UI/Input";
import Radio from "../../../UI/Radio";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import Select from "../../../UI/Select";
const PersonalDetails = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: "Personal information",
        isTouched: false,
      })
    );
  }, [dispatch]);

  return (
    <>
      <h1 className="report-label">Personal information</h1>
      <p className="text-xs md:text-sm">
        General details of the promoter of the business
      </p>
      <div className="space-y-8 mt-8">
        <Input
          id="Personal information"
          inputParams={{ type: "text", placeholder: "enter your name" }}
          label="Name of the owner"
          className=""
          validation={(value) => value.trim().length !== 0}
        />
        <Radio
          id="Personal information"
          label="Gender"
          className=""
          options={["Male", "Female", "Non-binary", "Can't disclose"]}
        />
        <Select
          id="Personal information"
          label="Educational qualification"
          className=""
          options={[
            "10th passed",
            "12th passed",
            "Graduate",
            "Post graduate",
            "Phd",
          ]}
        />
        <Radio
          id="Personal information"
          label="Social category"
          className=""
          options={[
            "General",
            "OBC",
            "Minority",
            "SC/ST",
            "Not interested to disclose",
          ]}
        />
        <Select
          id="Personal information"
          label="When did you start business?"
          className=""
          options={[
            "Not started",
            "6 months ago",
            "6-12 months ago",
            "2-3 years ago",
          ]}
        />
      </div>
    </>
  );
};
export default PersonalDetails;
