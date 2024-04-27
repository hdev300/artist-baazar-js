import apiService from "@/services/api.services";

export const loginArtistAsync = async (request) => {
  try {
    const response = await apiService.post("/api/login", {
      email: request.email,
      password: request.password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const signupArtistAsync = async (request) => {
  try {
    const response = await apiService.post("/api/signup", {
      email: request.email,
      password: request.password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const forgotPasswordArtistAsync = async (request) => {
  try {
    const response = await apiService.post("/api/signup", {
      email: request.email,
      password: request.password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const resetPasswordArtistAsync = async (request) => {
  try {
    const response = await apiService.post("/api/signup", {
      email: request.email,
      password: request.password,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};