import CommentRepository from "../database/repository/comment.repository";

class CommentService {
  private readonly _commentRepo: CommentRepository;
  constructor(commentRepo: CommentRepository) {
    this._commentRepo = commentRepo;
  }

  public async Create() {
    try {
      await this._commentRepo.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default CommentService;
