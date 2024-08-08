import { getCurrentUser, fetchAuthSession  } from "aws-amplify/auth"

export const isAuthenticated = async () => {
  try {
    const user = await getCurrentUser();
    return user ? true : false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export const userId = async () => {
  try {
    const user = await getCurrentUser();
    return user ? user.username : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const userInfo = async () => {
  try {
    const session = await fetchAuthSession();
    return session ? session.tokens.idToken.payload : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getAccessTokenPayload = async () => {
  try {
    const session = await fetchAuthSession();
    return session ? session.tokens?.accessToken?.payload : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getJwtToken = async () => {
  try {
    const session = await fetchAuthSession();
    return session ? session.tokens.accessToken.toString() : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const isValidUser = (payload) => {
  if (payload && payload['cognito:groups']) {
    const validRoles = ['ADMIN'];
    const isValid = payload['cognito:groups'].some(role => validRoles.includes(role));
    console.log('isValidUser', isValid);
    return isValid;
  }
}
