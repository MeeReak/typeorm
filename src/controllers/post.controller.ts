import { Controller } from "tsoa";
import PostService from "../services/post.service";
import PostRepository from "../database/repository/post.repository";

class PostController extends Controller {
  private readonly _postSer: PostService;

  constructor() {
    super();

    // Injecting service into the controller
    const postRepo = new PostRepository();

    this._postSer = new PostService(postRepo);
  }

  public async Create() {
    try {
      await this._postSer.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default PostController;
