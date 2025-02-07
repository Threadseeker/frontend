export interface UserResponse {
  status: "ok" | "failed";
  is_finished: boolean;
  is_processing: boolean;
  created_by_user: boolean;
  report_id?: string;
  task_id: string;
  is_private?: boolean;
  message?: string;
};

export interface TaskResponse {
  status: "ok" | "failed";
  is_finished: boolean;
  has_error: boolean;
  url: string;
  message: string;
}

export interface ReportUser {
  follower_count: number;
  username: string;
  full_name: string;
  profile_pic_url: string;
}

export interface ReportPost {
  id: string;
  caption: string;
  permalink: string;
  reply_count: number;
  like_count: number;
}

export interface ReportResponse {
  report: {
    post_density: number;
    active_level: string;
    be_liked_count: number;
    be_replied_count: number;
    crawled_num: number;
    updated_at: string;
    reply_density: number;
    user: ReportUser;
    posts: Array<ReportPost>;
  };
}
