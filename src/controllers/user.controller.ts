import { Controller } from "tsoa";
import UserService from "../services/user.service";
import UserRepository from "../database/repository/user.repository";

class UserController extends Controller {
  private readonly _userSer: UserService;

  constructor() {
    super();

    // Injecting service into the controller
    const userRepo = new UserRepository();

    this._userSer = new UserService(userRepo);
  }

  public async Create() {
    try {
      await this._userSer.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default UserController;
