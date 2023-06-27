import { useToast } from "@chakra-ui/react";
import { updateLocalStorage } from "modules/account/functions";
import React, { useRef, useEffect } from "react";
import { useTypedDispatch } from "redux/store";
import {
  changePasswordAction,
  changeCompanyNameAction,
  changeCompanyLogoAction,
} from "./actions";

const useSettings = ({ companyName, profileImage }: any) => {
  const [companyValues, setCompanyValues] = React.useState(companyName || "");
  const [imagePreview, setImagePreview] = React.useState(
    profileImage || "https://via.placeholder.com/150"
  );
  //   const [image, setImage] = React.useState<File | null>(null);
  const [nameLoading, setNameLoading] = React.useState(false);
  const [passwordLoading, setPasswordLoading] = React.useState(false);
  const [imageUploadLoading, setImageUploadLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTypedDispatch();
  const toast = useToast();

  const [password, setPassword] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyValues(e.target.value);
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image" && file.size < 1000000 * 5) {
      setImagePreview(URL.createObjectURL(file));
      handleImageSubmit(file);
    } else {
      setImagePreview("https://via.placeholder.com/150");
      setErrorMessage("Please select an image file less than 5mb");
    }
  };

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();
    setPasswordLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    // validate password fields are not empty and new password and confirm password are the same and current password is not the same as new password
    if (password.password === "" || password.confirmPassword === "") {
      setErrorMessage("Please fill all fields");
      setPasswordLoading(false);
      return;
    }
    if (password.password !== password.confirmPassword) {
      setErrorMessage("Passwords do no match");
      setPasswordLoading(false);
      return;
    }

    const res = await dispatch(
      changePasswordAction({ password: password.password })
    );
    if (!res?.isError && res?.result) {
      setSuccessMessage("Password is Updated Successfully");
      setPassword({
        password: "",
        confirmPassword: "",
      });
    } else if (res?.isError) {
      setErrorMessage("Password is not Updated: " + res?.message);
    }
    setPasswordLoading(false);
  };

  const handleCompanyNameSubmit = async (e: any) => {
    e.preventDefault();
    setNameLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    // if name is not the same as the previous name
    if (companyValues !== "" && companyValues !== companyName) {
      const res = await dispatch(
        changeCompanyNameAction({ name: companyValues })
      );
      if (!res?.isError && res?.result) {
        setSuccessMessage("Company Name is Updated Successfully");
        updateLocalStorage("corpName", companyValues);
      } else if (res?.isError) {
        setErrorMessage("Company Name is not Updated: " + res?.message);
      }
    }
    setNameLoading(false);
  };

  const handleImageSubmit = async (file: Blob) => {
    setImageUploadLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    const form = new FormData();
    form.append("file", file);
    const { payload } = await dispatch(changeCompanyLogoAction(form));
    if (!payload?.isError && payload?.result) {
      setSuccessMessage(
        "Company logo changed successfully, might take a while to take effect properly"
      );
      setImagePreview(payload?.result.profileImage);
      updateLocalStorage("profileImage", payload?.result.profileImage);
    }
    setImageUploadLoading(false);
  };

  useEffect(() => {
    if (errorMessage) {
      toast({
        position: "top-right",
        title: errorMessage,
        status: "error",
        duration: 9000,
        isClosable: true,
        onCloseComplete: () => {
          setErrorMessage("");
          dispatch({ type: "DASHBOARD_APP_ERROR", payload: {} });
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      toast({
        position: "top-right",
        title: successMessage,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMessage]);

  return {
    handlePasswordChange,
    handlePasswordSubmit,
    handleCompanyChange,
    handleCompanyNameSubmit,
    handleImageChange,
    handleImageSubmit,
    fileInputRef,
    imagePreview,
    password,
    companyValues,
    nameLoading,
    passwordLoading,
    imageUploadLoading,
  };
};

export default useSettings;
