import { NativeModules } from "react-native";

const { RNTwitterSignIn } = NativeModules;

type Auth = {
  /**
   * Twitter AuthToken
   */
  authToken?: string;
  /**
   * Twitter AuthToken Secret
   */
  authTokenSecret?: string;
  /**
   * email of logged in user
   */
  email?: string;
  /**
   * Twitter userID
   */
  userID?: string;
  /**
   * Twitter userName
   */
  userName?: string;
};

export const init = (
  consumerKey: string,
  consumerSecret: string
): Promise<void> => RNTwitterSignIn.init(consumerKey, consumerSecret);

export const logIn = (): Promise<Auth> => RNTwitterSignIn.logIn();

export const logOut = (): Promise<void> => RNTwitterSignIn.logOut();
