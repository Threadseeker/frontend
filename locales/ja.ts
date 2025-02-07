export default {
  name: "スレッドシーカー",
  home: {
    title: "Threadsの活躍度、見てみよう！",
    description: "あなたや友人の活躍度（およびその他のデータ）を計算します",
    login_with_google: "Googleでログイン",
    login_explanation: {
      first: "Google ログインを要求するのは悪用を防ぐためです",
      second: "Google アカウントのパスワードは取得しません",
      faq: "よくある質問"
    },
    placeholder: "Threadsアカウントを入力",
    loading_message: "処理中",
    public_only_message: "システムは公開されている Threads アカウントのみ分析可能です",
    actions: {
      analyze: "検索"
    }
  },

  check: {
    title: "検索中",
    await_message: "ページを閉じないでください",
    error_message: "エラーが発生しました。もう一度お試しください 😭",
    back_to_home: "ホームに戻る"
  },

  report: {
    actions: {
      share: "結果を共有",
      view: "Threads を表示"
    },
    activity_score: {
      title: "活躍度",
      categories: {
        index: "活躍指数",
        followers: "フォロワー",
        average_daily_comments: "1日平均コメント数",
        average_daily_posts: "1日平均投稿数"
      }
    },
    recent_posts: {
      title: "最新の投稿データ ({count} 件)",
      total_likes: "総いいね数",
      total_comments: "総コメント数"
    },
    update_time: "更新時間",
    popular_posts: {
      title: "人気の投稿",
      view_raw: "原文を表示"
    },
    badge_text: {
      level_0_2: "ベテラン潜水者",
      level_1_0: "通常のユーザー",
      level_1_2: "準活躍者",
      level_default: "プロの活躍者"
    },
    meta: {
      title: {
        loading: "読み込み中",
        username: `{'@'}{username} の分析結果`,
        no_result: "結果がありません"
      },
      description: {
        username: `{'@'}{username} のThreads分析レポート`
      }
    }
  },

  toast: {
    copy_success: "コピー成功",
    loading: "読み込み中",
    no_result: "結果がありません",
    report_title: `{'@'}{username} の分析結果`,
    report_description: `{'@'}{username} のThreadsアカウント分析レポート`,
    error: {
      title: "エラーが発生しました",
      description: "クローラーがブロックされた可能性があります。数時間後に再試行してください"
    },
    user_not_found: {
      title: "ユーザーが見つかりません",
      description: "ユーザー名が正しいか確認してください"
    },
    too_many_requests: {
      title: "1日の検索上限に達しました",
      description: "毎日1人の新しいユーザーのみ分析可能です。明日再試行してください"
    },
    private_account: {
      title: "このアカウントは非公開です",
      description: "システムは非公開アカウントを分析できません"
    },
    analyzing: {
      title: "分析中です。ページを閉じないでください"
    },
    analysis_complete: {
      title: "分析完了"
    },
    try_again: {
      title: "エラーが発生しました",
      description: "後でもう一度お試しください"
    },
    no_posts: {
      title: "投稿データがありません"
    },
    no_data: {
      title: "データがありません"
    }
  },

  logout_action: "ログアウト",
  login_action: "ログイン",
  logging_in: "ログイン中...",

  privacy_page_label: "プライバシーポリシー",
  terms_page_label: "利用規約",
  faq_page_label: "よくある質問"
};
