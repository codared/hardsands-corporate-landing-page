import { getFileExtension } from "modules/account/functions";
import * as yup from "yup";

export const createMemberSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  position: yup.string().required("Position is required"),
});

const MAX_FILE_SIZE = 5120;
export const importMemberSchema = yup.object().shape({
  memberFile: yup
    .mixed()
    .test({
      message: "Please provide a supported file type, .csv or .xlsx",
      test: (file: any, context) => {
        const isValid = ["xlsx", "csv"].includes(
          getFileExtension(file?.name as string) as string
        );
        if (!isValid) context?.createError();
        return isValid;
      },
    })
    .test({
      message: `File too big, can't exceed ${MAX_FILE_SIZE / 1024}MB`,
      test: (file: any) => {
        const isValid = file?.size / 1024 <= MAX_FILE_SIZE;
        return isValid;
      },
    }),
});
