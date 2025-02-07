import FetchFactory from "../factory";
import type { UserResponse, TaskResponse, ReportResponse } from "@/types/threads";

class ThreadsModule extends FetchFactory<UserResponse | TaskResponse | ReportResponse> {
  private USER_RESOURCE = "/threads/user";
  private TASK_RESOURCE = "/threads/task";
  private REPORT_RESOURCE = "/threads/report";

  public user = {
    search: async (username: string): Promise<UserResponse> => {
      return this.call("GET", `${this.USER_RESOURCE}/${username}`);
    }
  };

  public task = {
    status: async (taskId: string): Promise<TaskResponse> => {
      return this.call("GET", `${this.TASK_RESOURCE}/status/${taskId}`);
    }
  };

  public report = {
    get: async (reportId: string): Promise<ReportResponse> => {
      return this.call("GET", `${this.REPORT_RESOURCE}/${reportId}`);
    }
  };
}

export default ThreadsModule;
