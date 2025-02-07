export default {
  name: "Threadseeker",
  home: {
    title: "See How Active You Are on Threads",
    description: "Calculate your or your friends' activity level (and other stats)",
    login_with_google: "Login with Google to use",
    login_explanation: {
      first: "Google login is required to prevent abuse",
      second: "We will not access your Google account password",
      faq: "More FAQ"
    },
    placeholder: "Enter Threads username to analyze",
    loading_message: "Processing",
    public_only_message: "System can only analyze public Threads accounts",
    actions: {
      analyze: "Search"
    }
  },

  check: {
    title: "Searching",
    await_message: "Please do not close this page",
    error_message: "Something went wrong, please try again 😭",
    back_to_home: "Back to Home"
  },

  report: {
    actions: {
      share: "Share Results",
      view: "View on Threads"
    },
    activity_score: {
      title: "Activity Level",
      categories: {
        index: "Level",
        followers: "Followers",
        average_daily_comments: "Average Daily Comments",
        average_daily_posts: "Average Daily Posts"
      }
    },
    recent_posts: {
      title: "Latest ({count} Posts Data)",
      total_likes: "Total Likes",
      total_comments: "Total Comments"
    },
    update_time: "Update Time",
    popular_posts: {
      title: "Popular Posts",
      view_raw: "View Original"
    },
    badge_text: {
      level_0_2: "Veteran Lurker",
      level_1_0: "Regular User",
      level_1_2: "Semi-Active User",
      level_default: "Power User"
    },
    meta: {
      title: {
        loading: "Loading",
        username: `{'@'}{username}'s Analysis Results`,
        no_result: "No Results Found"
      },
      description: {
        username: `{'@'}{username}'s Threads Account Analysis Report`
      }
    }
  },

  toast: {
    copy_success: "Copied Successfully",
    loading: "Loading",
    no_result: "No Results Found",
    report_title: `{'@'}{username}'s Analysis Results`,
    report_description: `{'@'}{username}'s Threads Account Analysis Report`,
    error: {
      title: "An Error Occurred",
      description: "The crawler may be blocked, please try again in a few hours"
    },
    user_not_found: {
      title: "User Not Found",
      description: "Please check if the username is correct"
    },
    too_many_requests: {
      title: "Daily Search Limit Reached",
      description: "You can only analyze one new user per day, please try again tomorrow"
    },
    private_account: {
      title: "This Account is Private",
      description: "System cannot analyze private accounts"
    },
    analyzing: {
      title: "Analysis in progress, please do not close the page"
    },
    analysis_complete: {
      title: "Analysis Complete"
    },
    try_again: {
      title: "An Error Occurred",
      description: "Please try again later"
    }
  },

  logout_action: "Logout",
  login_action: "Login",
  logging_in: "Logging in...",

  privacy_page_label: "Privacy Policy",
  terms_page_label: "Terms of Service",
  faq_page_label: "FAQ"
};
