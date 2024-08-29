import UserRepository from "../database/repository/user.repository";

class UserService {
  private readonly _userRepo: UserRepository;
  constructor(userRepo: UserRepository) {
    this._userRepo = userRepo;
  }

  public async Create() {
    try {
      await this._userRepo.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default UserService
