export const loginByPhoneAsync = async (request) => {
  try {
    const response = await axiosInstance.post("/api/login", {
      email: request?.email,
      password: request?.password,
    });
    return response;
  } catch (error) {
    throw new Error(isAxiosError(error).message);
  }
};

export const continueWithGoogleAsync = async (request) => {
  try {
    const response = await axiosInstance.post("/auth/google", request);
    return response;
  } catch (error) {
    throw new Error(isAxiosError(error).message);
  }
};

export const resendOtpAsync = async (request) => {
  try {
    const response = await axiosInstance.post("/auth/resend-otp", {
      mobileNo: removeCountryCode(request?.mobileNo, request?.countryCode),
      countryCode: request?.countryCode,
    });
    return response;
  } catch (error) {
    throw new Error(isAxiosError(error).message);
  }
};

export const signUpAsync = async (request) => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      firstName: request?.firstName,
      lastName: request?.lastName,
      email: request?.email,
      mobileNo:
        request?.mobileNo &&
        removeCountryCode(request?.mobileNo, request?.countryCode),
      countryCode: request?.countryCode,
    });
    return response;
  } catch (error) {
    throw new Error(isAxiosError(error).message);
  }
};

export const otpVerifyAsync = async (request) => {
  try {
    const response = await axiosInstance.post("/auth/verify-otp", {
      mobileNo: removeCountryCode(request?.mobileNo, request?.countryCode),
      countryCode: request?.countryCode,
      otp: request?.otpValue,
    });
    return response;
  } catch (error) {
    throw new Error(isAxiosError(error).message);
  }
};

