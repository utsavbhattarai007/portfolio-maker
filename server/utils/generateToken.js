import jwt from "jsonwebtoken";
import UserToken from "../models/userToken.schema.js";

const generateToken = async (id) => {
  try {
    const payload = { _id: id };
    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_PRIVATE_KEY,
      {
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_PRIVATE_KEY,
      {
        expiresIn: "15m",
      }
    );

    const userToken = await UserToken.findOne({ userId: id });
    if (userToken) {
      await userToken.remove();
    }
    await new UserToken({ userId:id, token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default generateToken;
