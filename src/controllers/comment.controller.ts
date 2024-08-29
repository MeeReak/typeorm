import { Controller } from "tsoa";
import CommentService from "../services/comment.service";
import CommentRepository from "../database/repository/comment.repository";

class CommentController extends Controller {
  private readonly _commentSer: CommentService;

  constructor() {
    super();

    const commentRepo = new CommentRepository();

    this._commentSer = new CommentService(commentRepo);
  }

  public async Create() {
    try {
      await this._commentSer.Create();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export default CommentController;
