import { AppDataSource } from "@/src/database";

class PostRepository {
  private readonly _dataSource: any;
  constructor() {
    this._dataSource = AppDataSource;
  }

  public async Create() {
    try {
      console.log(this._dataSource);
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default PostRepository;
