import { useDispatch, useSelector } from "react-redux";
import Input from "../../../UI/Input";
import Radio from "../../../UI/Radio";
import { useEffect, useState } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import Select from "../../../UI/Select";
import Textbox from "../../../UI/Textbox";

const BusinessInfo = (props) => {
  const dispatch = useDispatch();
  const pin = /^\d{6}$/;
  const phone = /^\d{10}$/;
  const email =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const pinCode = useSelector(
    (state) => state.formdata.allExpensedata["Business information"]["Pin code"]
  );
  let pinValue = "";
  if (pinCode) {
    pinValue = pinCode.trim();
  }

  const phoneNumber = useSelector(
    (state) =>
      state.formdata.allExpensedata["Business information"][
        "Contact phone number"
      ]
  );
  let phoneValue = "";
  if (phoneNumber) {
    phoneValue = phoneNumber.trim();
  }
  const pinValidation = (val) => {
    if (pin.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  const phoneValidation = (val) => {
    if (phone.test(val)) return true;
    else return false;
  };
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: "Business information",
        isTouched: false,
      })
    );
  }, [dispatch]);
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        Business information
      </h1>
      <p className="text-xs md:text-sm">General details of the business</p>
      <div className="mt-10 space-y-8">
        <Textbox id="Business information" label="Address" className="" />
        <Radio
          id="Business information"
          label="Locality"
          className=""
          options={["Panchayath-Village", "Town, Municipality, Corporation"]}
        />
        <Input
          id="Business information"
          label="Pin code"
          validation={(value) => pinValidation(value)}
          errMsg={
            !pinValidation(pinValue)
              ? pinValue !== ""
                ? "Please enter 6 characters."
                : ""
              : ""
          }
        />
        <div>
          <Select
            id="Business information"
            label="Type of registration"
            className=""
            options={["Proprietorship", "Partnership", "Private ltd"]}
          />
          <p className="text-xs md:text-sm px-4  my-2 text-gray-500">
            If it’s a single owner then its Proprietership. If multiple
            partners, then partnership. If company registered with MCA as per
            the company law, then LLP/Pvt ltd etc.
          </p>
        </div>
        <Input
          id="Business information"
          label="Contact phone number"
          validation={(value) => phoneValidation(value)}
          inputParams={{ placeholder: "Contact Phone" }}
          errMsg={
            !phoneValidation(phoneValue)
              ? phoneValue !== ""
                ? "Please enter a 10 digit number. "
                : ""
              : ""
          }
        />
        <Input
          id="Business information"
          label="Contact email"
          inputParams={{ placeholder: "Contact email" }}
          validation={(value) => email.test(value)}
          errMsg="please enter a valid email!"
        />
      </div>
    </>
  );
};
export default BusinessInfo;
