"use client";
import { encryptStorage } from "~/utility/encryptStorage";

export type TokenInfo = {
    accessToken: string;
    idToken: string;
};

export type UserInfo = {
    accessToken?: string;
    user?: any;
};

export const getUser = (): UserInfo | null => {
    const userData = encryptStorage()?.getItem("user");
    console.log("step 2 usedata", userData);
    
    if (!userData) return null;
    const user: UserInfo = JSON.parse(userData as string);
    return user;
};

// export const updateUser = (user: any): any => {
//     const userData = encryptStorage()?.getItem("user");
//     if (!userData) return null;
//     const existUser: UserInfo = JSON.parse(userData as string);
//     if (existUser) {
//         const userInfo = { ...existUser, user: user };
//         encryptStorage()?.setItem("user", JSON.stringify(userInfo));
//     }
// };

export const setUser = (user: UserInfo) => {
    encryptStorage()?.setItem("demo", JSON.stringify(user));
    encryptStorage()?.setItem("user", JSON.stringify(user));
    const oneDay = 1 * 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneDay);
    document.cookie = `user=${JSON.stringify(
        user
    )};expires=${expires.toUTCString()};path=/;`;
};

export const removeUser = () => {
    console.log("error====> removing");
    
    encryptStorage()?.removeItem("user");
    document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
};
