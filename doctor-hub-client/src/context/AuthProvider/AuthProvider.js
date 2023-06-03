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
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/signup", {
                userName,
                phoneNumber,
                password,
            });
            const { token } = response.data;
            setToken(token);
        } catch (error) {
            setErrorMessage(error);
        }
    };

    // sign in user with email
    const signInUser = async (userName, password) => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/signin", {
                userName,
                password,
            });
            const { token } = response.data;
            setToken(token);
        } catch (error) {
            setErrorMessage(error);
        }
    };

    // logout User
    const signOutUser = () => {
        setLoading(true);
        setToken("");
        setUser(null);
    };

    useEffect(() => {
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

        return getUserData;
    }, [token]);

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
