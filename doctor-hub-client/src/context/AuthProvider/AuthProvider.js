import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    // create user with email
    const signUpUser = async (userName, phoneNumber, password) => {
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                userName,
                phoneNumber,
                password,
            });
            setLoading(true);
            const { token } = response.data;
            setToken(token);
            localStorage.setItem("Doctors-Hub", token);
            await getUserData();
        } catch (error) {
            setErrorMessage(error);
        }
    };

    // sign in user with email
    const signInUser = async (userName, password) => {
        try {
            const response = await axios.post("http://localhost:5000/signin", {
                userName,
                password,
            });
            setLoading(true);
            const { token } = response.data;
            setToken(token);
            localStorage.setItem("Doctors-Hub", token);
            await getUserData();
        } catch (error) {
            setErrorMessage(error);
        }
    };

    // logout User
    const signOutUser = () => {
        localStorage.removeItem("Doctors-Hub");
        setLoading(true);
        setToken("");
        setUser(null);
    };

    const getUserData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setUser(response.data);
        } catch (error) {
            console.error("Failed to get user data", error);
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("Doctors-Hub");
        if (storedToken) {
            setToken(storedToken);
            getUserData();
        }
    }, []);

    const authInfo = {
        token,
        signUpUser,
        signInUser,
        user,
        signOutUser,
        loading,
        errorMessage,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
