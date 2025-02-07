export default {
  name: "Threadseeker",
  home: {
    title: "看你在 Threads 有多活躍",
    description: "計算你或朋友的活網程度（ 和其他數據 ）",
    login_with_google: "登入 Google 即可使用",
    login_explanation: {
      first: "要求登入 Google 是避免惡意濫用",
      second: "我們不會取得你的 Google 帳號密碼",
      faq: "更多常見問題"
    },
    placeholder: "輸入要分析的 Threads 帳號",
    loading_message: "處理中",
    public_only_message: "系統只能分析公開的 Threads 帳號",
    actions: {
      analyze: "查詢"
    }
  },

  check: {
    title: "查詢中",
    await_message: "請不要關閉畫面",
    error_message: "出了點錯誤，請再試一次 😭",
    back_to_home: "回首頁"
  },

  report: {
    actions: {
      share: "分享結果",
      view: "查看 Threads"
    },
    activity_score: {
      title: "活躍程度",
      categories: {
        index: "活網指數",
        followers: "追蹤者",
        average_daily_comments: "平均每天留言",
        average_daily_posts: "平均每天發文"
      }
    },
    recent_posts: {
      title: "最新 ({count} 篇貼文數據)",
      total_likes: "總讚數",
      total_comments: "總留言數"
    },
    update_time: "更新時間",
    popular_posts: {
      title: "熱門貼文",
      view_raw: "查看原文"
    },
    badge_text: {
      level_0_2: "資深潛水家",
      level_1_0: "正常使用者",
      level_1_2: "準活網仔",
      level_default: "專業活網仔"
    },
    meta: {
      title: {
        loading: "載入中",
        username: `{'@'}{username} 的分析結果`,
        no_result: "沒有此結果"
      },
      description: {
        username: `{'@'}{username} 的 Threads 帳號分析報告`
      }
    }
  },

  toast: {
    copy_success: "複製成功",
    loading: "載入中",
    no_result: "沒有此結果",
    report_title: `{'@'}{username} 的分析結果`,
    report_description: `{'@'}{username} 的 Threads 帳號分析報告`,
    error: {
      title: "發生錯誤",
      description: "爬蟲程式可能被封鎖了，請稍等幾個小時後再試"
    },
    user_not_found: {
      title: "找不到使用者",
      description: "請確認使用者名稱是否正確"
    },
    too_many_requests: {
      title: "已達每日查詢上限",
      description: "每天只能分析一位新使用者，請明天再試"
    },
    private_account: {
      title: "這個帳號不公開",
      description: "系統無法分析不公開帳號"
    },
    analyzing: {
      title: "正在分析中，請不要關閉網頁"
    },
    analysis_complete: {
      title: "分析完成"
    },
    try_again: {
      title: "發生錯誤",
      description: "請稍後再試"
    }
  },

  logout_action: "登出",
  login_action: "登入",
  logging_in: "登入中...",

  privacy_page_label: "隱私權政策",
  terms_page_label: "服務條款",
  faq_page_label: "常見問題"
};
