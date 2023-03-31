import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { isEmptyObject, slugify } from "../functions";
import queryString from "query-string";

export const useRouteChange = (changeValue: any) => {
  const route = useRouter();
  let currentRoute = route.asPath.split("?")[0];
  const queryParams = queryString.parse(route.asPath.split("?")[1]);

  useEffect(() => {
    const stringified = queryString.stringify({
      ...queryParams,
      form: changeValue,
    });

    route.push(`${currentRoute}?${stringified}`, undefined, {
      shallow: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeValue]);

  return { queryParams };
};

export const useForm = (initialValues: any, schema: any, cb: any) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (isEmptyObject(formData)) {
      setFormData(initialValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isCheckBox = e.target.type === "checkbox";

    if (e.target.name.includes(".")) {
      const name = e.target.name.split(".")[0];
      const subName = e.target.name.split(".")[1];
      setFormData({
        ...formData,
        [name]: {
          ...formData[name],
          [subName]: e.target.value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: isCheckBox ? e.target.checked : e.target.value,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    }
  };

  const handleDrop = (e: any, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      setFormData({
        ...formData,
        [name]: e.dataTransfer.files[0],
      });
    }
  };

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [name]: null,
    });
  };

  // handle submit
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    schema
      .validate(formData)
      .catch((err: { errors: React.SetStateAction<string>[] }) => {
        setErrorMessage(err.errors[0]);
        setLoading(false);
      });
    const isValid = await schema.isValid(formData);
    if (isValid) {
      await cb(formData);
      return setLoading(false);
    }
  };

  return {
    formData,
    dragActive,
    handleDrag,
    handleChange,
    handleFileChange,
    handleDrop,
    handleRemoveFile,
    handleSubmit,
    errorMessage,
    setErrorMessage,
    setSuccessMessage,
    successMessage,
    loading,
    setFormData,
  };
};
