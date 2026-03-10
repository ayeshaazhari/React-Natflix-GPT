export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?!.*\s).{8,}$/.test(
      password
    );

  //   const isFullNameValid = /^[A-Z]$/.test(fullName);
  //   if (!isFullNameValid) return "Full Name is not valid";

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
