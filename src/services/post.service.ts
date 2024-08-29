import PostRepository from "../database/repository/post.repository";

class PostService {
  private readonly _postRepo: PostRepository;
  constructor(postRepo: PostRepository) {
    this._postRepo = postRepo;
  }

  public async Create() {
    try {
      await this._postRepo.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default PostService;
