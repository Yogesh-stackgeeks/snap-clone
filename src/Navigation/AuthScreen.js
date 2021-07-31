import React from "react"
import navigationStrings from "../constants/navigationStrings";
import AddProfile from "../Screens/AddProfilePicture/AddProfile";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import Notification from "../Screens/Notification/Notification";
import Otp from "../Screens/Otp/Otp";
import Profile from "../Screens/Profile/Profile";
import SignUp from "../Screens/SignUp/SignUp";

export default function (Stack, isFirstTime) {
    console.log('auth stack', isFirstTime)
    return (
        <>
         <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={SignUp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.OTP_VERIFICATION}
                component={Otp}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.ADD_PICTURE}
                component={AddProfile}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.CHANGE_PASSWORD}
                component={ChangePassword}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.NOTIFICATION}
                component={Notification}
                options={{ headerShown: false }}
            />
        </>
    );
}
