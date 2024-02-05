import * as yup from "yup";

const userSchema = yup.object().shape({
  username: yup.string().required().min(3).max(25),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(25),
});

export { userSchema };
