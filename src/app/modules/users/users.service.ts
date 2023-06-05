import config from "../../../config";
import ApiError from "../../../error/ApiError";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generatedUserId } from "./users.utils";

// Create a new user
const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generatedUserId();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, "User create failed !");
  }
  return createdUser;
};

export default {
  createUser,
};
