import { NativeModules } from "react-native";

const { RNTwitterSignIn } = NativeModules;

type Auth = {
  authToken?: string;
  authTokenSecret?: string;
};

export const init = (
  consumerKey: string,
  consumerSecret: string
): Promise<void> => RNTwitterSignIn.init(consumerKey, consumerSecret);

export const logIn = (): Promise<Auth> => RNTwitterSignIn.logIn();

export const logOut = (): Promise<void> => RNTwitterSignIn.logOut();
