/* eslint-disable */

export const getUser = () => {
    const userData = encryptStorage().getItem("user");
    console.log("step 2 usedata", userData);
    if (!userData) return null;
    const user = JSON.parse(userData);
    return user;
};

export const setUser = (user) => {
    encryptStorage().setItem("demo", JSON.stringify(user));
    encryptStorage().setItem("user", JSON.stringify(user));
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneDay);
    document.cookie = `user=${JSON.stringify(user)};expires=${expires.toUTCString()};path=/;`;
};

export const removeUser = () => {
    console.log("error====> removing");
    encryptStorage().removeItem("user");
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
};

