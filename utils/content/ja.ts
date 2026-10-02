import type { SiteContent } from "./types";

const ja = {
  locale: "ja",
  meta: {
    title: "Rahul Singh — バックエンドエンジニア",
    template: "%s — Rahul Singh",
    description:
      "MiniOrange でセキュリティデータ基盤を開発するバックエンドエンジニア。ICPC アジア地区予選進出、Codeforces Specialist。Go・Python・Java による個人開発も。",
  },
  profile: {
    name: "Rahul Singh",
    initials: "RS",
    role: "バックエンドエンジニア",
    disciplines: "バックエンド · 分散システム · セキュリティ",
    location: "インド・プネ",
    email: "rahul0singh003@gmail.com",
    availability: "バックエンド職を検討中",
    resumeUrl: "/rahul-singh-resume.pdf",
  },
  nav: [
    { label: "ホーム", href: "/" },
    { label: "実績", href: "/work" },
    { label: "プロフィール", href: "/about" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  actions: {
    viewWork: "実績を見る",
    letsTalk: "話を聞く",
    viewCaseStudy: "詳細を見る",
    viewAllWork: "すべての実績",
    readMore: "詳しいプロフィール",
    startConversation: "メールを送る",
    copyEmail: "メールをコピー",
    copied: "コピーしました",
    previousProject: "前のプロジェクト",
    nextProject: "次のプロジェクト",
    backToWork: "実績一覧に戻る",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    skipToContent: "本文へスキップ",
    theme: "テーマ",
    themeLight: "ライト",
    themeDark: "ダーク",
    themeSystem: "システム",
    language: "言語",
    downloadResume: "履歴書をダウンロード",
    viewCode: "コード",
    viewLive: "デモ",
  },
  hero: {
    badge: "バックエンドエンジニア",
    eyebrow: "MiniOrange / SDE",
    headline: {
      lead: "ワーカーが落ちても",
      accent: "動き続ける",
      trail: "バックエンドをつくっています。",
    },
    lead: "MiniOrange ではセキュリティデータ基盤を担当し、DLP 検知・SIEM ログ転送・マルチテナントのエクスポート基盤を開発しています。業務外でも同種のシステムを Go や Python でゼロから構築しており、アルゴリズムの土台には競技プログラミングの経験があります。",
    meta: [
      { label: "所在地", value: "インド・プネ · UTC+5:30" },
      { label: "専門領域", value: "バックエンド · パイプライン · セキュリティ" },
      { label: "希望条件", value: "リモート・移転可" },
    ],
    diagram: {
      caption: "SECUREPLUS_RUNTIME // ACTIVE",
      status: "healthy",
      ingress: { label: "INGESTION", value: "SMTP + REST" },
      worker: { label: "QUEUE_CONSUMER", value: "Redis Streams" },
      core: { label: "INSPECTION_CORE", value: "ポリシーエンジン" },
      coreNote: "ack after record · crash recoverable",
      store: { label: "CONSISTENT", value: "PostgreSQL" },
      cache: { label: "IN_MEMORY", value: "Redis" },
    },
    stats: [
      { value: "10M+", label: "MiniOrange のエクスポート 1 回あたりのイベント数" },
      { value: "ICPC", label: "アジア地区予選進出 2023" },
      { value: "1,200+", label: "CF・LeetCode・CodeChef での解答数" },
    ],
  },
  sections: {
    work: {
      index: "01",
      label: "主な実績",
      title: "設計し、つくってきたもの。",
    },
    capabilities: {
      index: "02",
      label: "できること",
      title: "エンジニアとして時間を注いでいる領域。",
    },
    about: {
      index: "03",
      label: "考え方",
      title: "ソフトウェアづくりに対する姿勢。",
    },
    experience: {
      index: "04",
      label: "経歴とスキル",
      title: "職務経歴と技術スタック。",
    },
    credentials: {
      index: "05",
      label: "学歴と実績",
      title: "競技プログラミングと資格。",
    },
    principles: {
      index: "06",
      label: "開発の原則",
      title: "どう設計し、どう実装するか。",
    },
    contact: {
      index: "07",
      label: "お問い合わせ",
      title: "お気軽にご連絡ください。",
    },
    testimonials: {
      index: "08",
      label: "推薦",
      title: "一緒に働いた方の声。",
    },
  },
  labels: {
    role: "担当",
    architecture: "アーキテクチャ",
    period: "期間",
    category: "カテゴリ",
    technologies: "技術スタック",
    context: "背景",
    approach: "アプローチ",
    decisions: "主要な設計判断",
    features: "実装内容",
    outcomes: "成果",
    links: "リンク",
    experience: "職務経歴",
    stack: "技術スタック",
    project: "プロジェクト",
    architectureDiagram: "アーキテクチャ",
    education: "学歴",
    achievements: "実績",
    codingProfiles: "競技プログラミング",
  },
  projects: [
    {
      slug: "secureplus",
      title: "SecurePlus",
      category: "メール DLP ゲートウェイ",
      period: "2026年",
      featured: true,
      summary:
        "マルチテナント対応の情報漏洩対策基盤。送信メールを配送前にすべて検査するゲートウェイと、クラウドストレージ内の機密データを検出するスキャナで構成されています。",
      role: "個人開発 · 設計から実装まで",
      architecture: "モジュラーモノリス + ストリームワーカー",
      tech: ["Go", "Gin", "Redis Streams", "PostgreSQL", "MongoDB", "Next.js"],
      context:
        "送信メールは機密情報が組織外へ出ていく最も一般的な経路であり、インドの DPDP 法のもとではその漏洩がそのままコンプライアンス問題になります。メールを受け取り、送信してよいかを判断し、途中でワーカーが落ちても 1 通も失わずに配送する——その経路全体を自分で設計したいと考えました。",
      approach:
        "メールは SMTP または REST API で受け取り、送信者に 250 OK を返す前に Redis Stream へ書き込みます。コンシューマグループのワーカーがテキストを正規化し、Aho-Corasick と RE2 による検査を 1 パスで実行し、送信者ごとのポリシーを適用したうえで、通知とともに遮断するか DKIM 署名を付けて中継します。処理結果が記録されてはじめて ACK するため、クラッシュしても再試行になり、無言の消失は起きません。",
      decisions: [
        {
          title: "永続化できたものだけを ACK する",
          detail:
            "SMTP の 250 はメッセージが確実にストリームへ入ってから返し、ストリームのエントリは配送結果を保存してから ACK します。落ちたコンシューマが抱えたままのメッセージは XAUTOCLAIM で回収します。",
        },
        {
          title: "キーワード数によらずテキスト走査は 1 回",
          detail:
            "自前の Aho-Corasick オートマトンが全キーワードを 1 回の走査で照合し、Go の RE2 は線形時間で動作するため、悪意あるパターンでも ReDoS になりません。Unicode の見た目が似た文字による回避を防ぐため、先に NFKC 正規化を行います。",
        },
        {
          title: "タブを 2 枚開いていても壊れないトークン更新",
          detail:
            "リフレッシュトークンの更新は Redis の Lua スクリプト内でアトミックに行います。短い猶予時間のあいだは同時リクエストにも発行済みの後継トークンを返すため、通常の利用者を誤検知せずに、本当の再利用だけを拒否できます。",
        },
      ],
      features: [
        "SMTP 受信 (go-smtp) と REST 経由での Redis Streams への取り込み",
        "NFKC 正規化済みテキストに対する Aho-Corasick + RE2 検査",
        "送信者ごとの内容・宛先ドメイン・添付ファイルポリシー",
        "DKIM 署名、MX 解決、日和見 STARTTLS、宛先ごとの再試行",
        "S3・Google Drive・Microsoft 365 向けスキャナ (zip 爆弾・サイズ制限対応)",
        "HKDF 由来のバージョン付き鍵による AES-256-GCM 認証情報暗号化",
        "CSRF ダブルサブミット Cookie、Redis レート制限、細粒度 RBAC",
        "監査ログ・分析・EN / JA / ES 多言語対応の Next.js 管理コンソール",
      ],
      outcomes: [
        "Go のテスト関数 490 以上。うち 440 以上を GitHub Actions で毎プッシュ実行",
        "secureplus.ryugasystem.online で稼働中",
      ],
      links: [
        { label: "デモ", href: "https://secureplus.ryugasystem.online/" },
        { label: "ソース", href: "https://github.com/ryuga001/SecurePlus" },
      ],
      media: {
        image: {
          src: "/projects/secureplus.png",
          alt: "SecurePlus のポリシー・インシデント管理コンソール",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/secureplus-demo.webm",
          preview: "/projects/secureplus-preview.webm",
          alt: "SecurePlus のデモ映像",
        },
      },
      artwork: {
        kind: "pipeline",
        caption: "secureplus-delivery // redis-stream",
        ruleset: "POLICY: PER_SENDER",
        badge: "DKIM · STARTTLS",
        streamTitle: "検査パイプライン",
        stages: [
          "NFKC 正規化",
          "Aho-Corasick + RE2 走査",
          "ポリシー判定 · 中継",
        ],
        metaTitle: "ストリーム情報",
        meta: [
          "group: delivery consumers",
          "ack: after outcome recorded",
          "recovery: XAUTOCLAIM",
          "tenant: scoped per customer",
        ],
        footnote: "at-least-once 配送",
      },
    },
    {
      slug: "tutorpilot",
      title: "TutorPilot",
      category: "マルチテナント SaaS",
      period: "2026年7月 — 8月",
      featured: true,
      summary:
        "オンライン指導事業を運営するための基盤。組織ごとに独立した空間で、スタッフ・講座・期生・ライブ授業・ファイルを管理できます。",
      role: "個人開発 · 設計から実装まで",
      architecture: "モジュラーモノリス + トランザクショナルアウトボックス",
      tech: ["Go", "PostgreSQL", "Redis Streams", "LiveKit", "MinIO", "Next.js"],
      context:
        "小規模な指導事業はビデオ会議・表計算・共有ドライブをつなぎ合わせて運用しがちです。組織が登録し、自分たちで権限を定義し、講座をつくり、期生として開講し、自動録画されるライブ授業を行う——それをひとつのシステムで完結させました。",
      approach:
        "Go のバックエンドは共通の内部パッケージの上に auth・admin・notification のモジュールを分けています。確認メール送信のように書き込み後に必ず起きるべき処理は、同じ Postgres トランザクション内でイベントとして保存し、あとから Redis Streams へ中継します。これによりデータベースと副作用がずれることがありません。",
      decisions: [
        {
          title: "二重書き込みではなくトランザクショナルアウトボックス",
          detail:
            "イベントは業務データと同じトランザクションで挿入します。中継処理は FOR UPDATE SKIP LOCKED で取得するため、複数の中継プロセスを動かしても二重publish が起きません。",
        },
        {
          title: "失敗は捨てずに残す",
          detail:
            "コンシューマは停滞したメッセージを XAUTOCLAIM で回収し、エラーを再試行可否で分類し、処理不能なメッセージは確認・再実行できるデッドレターテーブルへ退避します。",
        },
        {
          title: "テナントごとに署名鍵を分ける",
          detail:
            "組織ごとに専用の JWT 署名鍵を持ち Redis にキャッシュするため、ある組織向けに発行したトークンが別の組織で検証に通ることはありません。",
        },
      ],
      features: [
        "Swagger ドキュメント付き REST エンドポイント 74 本、バージョン管理されたマイグレーション 14 件",
        "組織ごとにスキーマで定義されるロールと権限",
        "講座・期生・講師割当・受講登録",
        "LiveKit による教室とサーバサイド録画の MinIO 保存",
        "MinIO オブジェクトストレージ上の期生ごとの共有ドライブ",
      ],
      outcomes: [
        "アウトボックスのロールバック挙動を含む Go のユニット・結合テスト 80 件",
      ],
      links: [{ label: "ソース", href: "https://github.com/ryuga001/TutorPilot" }],
      artwork: {
        kind: "mesh",
        caption: "TENANT_ISOLATION // SAAS_CORE",
        hub: "TENANT",
        nodes: [
          "テナント別 JWT",
          "スキーマ RBAC",
          "LiveKit 教室",
          "MinIO ドライブ",
        ],
        footnote: "OUTBOX: SKIP LOCKED RELAY · DLQ REPLAYABLE",
      },
    },
    {
      slug: "sahara",
      title: "Sahara",
      category: "AI キャリア支援基盤",
      period: "2026年6月 — 7月",
      featured: true,
      summary:
        "RAG を用いて履歴書を評価・書き換えし、学習コースをバックグラウンドで自動生成する AI キャリアアシスタント。",
      role: "個人開発 · バックエンド",
      architecture: "Django API + RabbitMQ ワーカー",
      tech: ["Python", "Django", "PostgreSQL", "pgvector", "Gemini", "RabbitMQ"],
      context:
        "一般的な AI 履歴書ツールの助言が曖昧なのは、その人の実際の履歴書や応募先を踏まえていないからです。利用者自身の記述に根ざしたフィードバックと、LLM が何十ものレッスンを書くあいだ Web リクエストを止めないコース生成を実現したいと考えました。",
      approach:
        "履歴書は解析・ベクトル化して pgvector に保存します。レビュー要求時にはコサイン距離で最も関連する断片だけを取り出して Gemini に渡し、構造化されたスコアと書き換え案を受け取ります。コース生成は RabbitMQ のキューへ送り、サブトピック・本文・一括処理それぞれ専用のワーカーが処理します。",
      decisions: [
        {
          title: "プロンプトの前に検索する",
          detail:
            "プロンプトに入れるのは最も近い履歴書断片だけです。回答が利用者固有の内容に保たれ、同時にトークン使用量も抑えられます。",
        },
        {
          title: "ワーカーが自分の未完了処理を回復する",
          detail:
            "各ワーカーは起動時に、落ちたプロセスが生成中のまま残した項目をリセットします。再起動すると前回止まったところから処理が続きます。",
        },
        {
          title: "処理不能なメッセージを無限に回さない",
          detail:
            "失敗したメッセージは再キューせずに ACK して記録します。ひとつの不正なジョブがキュー全体を止めることはありません。",
        },
      ],
      features: [
        "履歴書とコースの埋め込みに対する pgvector 類似検索",
        "構造化された ATS スコアと書き換えを返す Gemini プロンプト",
        "差し替え可能な履歴書強化処理 (キーワード・スキル・要約) と PDF 整形",
        "コース生成用に永続キューを持つ RabbitMQ ワーカー 3 種",
      ],
      outcomes: [
        "GitHub Actions CI で 141 件のテストを実行",
        "フロントエンドは Vercel にデプロイ",
      ],
      links: [
        { label: "デモ", href: "https://sahara-frontend-gamma.vercel.app/" },
        {
          label: "バックエンド",
          href: "https://github.com/ryuga001/SaharaBackend",
        },
        {
          label: "フロントエンド",
          href: "https://github.com/ryuga001/SaharaFrontend",
        },
      ],
      media: {
        image: {
          src: "/projects/sahara.png",
          alt: "Sahara の履歴書分析画面",
          width: 3072,
          height: 1429,
        },
        video: {
          src: "/projects/sahara-demo.webm",
          preview: "/projects/sahara-preview.webm",
          alt: "Sahara のデモ映像",
        },
      },
      artwork: {
        kind: "scanner",
        caption: "RESUME_PIPELINE // RAG",
        source: "resume upload",
        format: "PDF",
        processor: { label: "埋め込み生成", value: "ベクトル化" },
        classifier: { label: "RETRIEVAL", value: "pgvector コサイン" },
        classifierNote: "Gemini 構造化出力",
        logTitle: "PIPELINE_REPORT",
        logs: [
          "履歴書を解析し断片に分割",
          "コサイン距離で近い断片を取得",
          "コース生成を 3 つの RabbitMQ ワーカーへ投入",
        ],
      },
    },
    {
      slug: "rental-management",
      title: "Rental Management System",
      category: "マイクロサービス基盤",
      period: "2026年4月 — 5月",
      featured: false,
      summary:
        "貸主と借主のための賃貸管理基盤。ゲートウェイの背後に複数の Spring Boot サービスを配置し、イベント駆動で通知を行います。",
      role: "個人開発 · フルスタック",
      architecture: "マイクロサービス",
      tech: ["Java", "Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "Next.js"],
      context:
        "Java のマイクロサービス構成をきちんと学ぶために構築しました。サービスディスカバリ、ゲートウェイ、サービス間の非同期メッセージング、そしてどれかが遅延・停止したときに何が起きるかを確かめる目的です。",
      approach:
        "Eureka に登録された admin・reporting・notification の各サービスの前段に Spring Cloud Gateway を置いています。各サービスは RabbitMQ にイベントを publish し、notification サービスがメールと WebSocket 通知に変換し、reporting サービスが監査履歴を MongoDB に保存します。",
      decisions: [
        {
          title: "認証はエッジで一度だけ",
          detail:
            "ゲートウェイが認証を担うため、背後のサービスがそれぞれトークン検証を再実装する必要がありません。",
        },
        {
          title: "通知は直接呼び出しではなくイベントで",
          detail:
            "各サービスは notification サービスを直接呼ばず RabbitMQ に publish します。メールサーバが遅くてもユーザーのリクエストが遅くなりません。",
        },
        {
          title: "サービス間呼び出しにサーキットブレーカー",
          detail:
            "reporting サービスは Feign 呼び出しを Resilience4j のサーキットブレーカーで包んでおり、依存先の障害が連鎖せず機能単位の劣化にとどまります。",
        },
      ],
      features: [
        "Eureka サービスディスカバリ付き Spring Cloud Gateway",
        "通知と監査証跡のための RabbitMQ イベント",
        "notification サービスからのメールと STOMP WebSocket 配信",
        "reporting サービスでの MongoDB 監査・チャット履歴",
        "サービスごとの Dockerfile と Next.js フロントエンド",
      ],
      outcomes: [],
      links: [
        {
          label: "ソース",
          href: "https://github.com/ryuga001/Rental-Mangament-Platform",
        },
      ],
      artwork: {
        kind: "grid",
        caption: "RENTAL_PLATFORM // SERVICES",
        title: "サービス構成",
        series: ["gateway", "notify", "report"],
        rows: [
          { label: "discovery", value: "Eureka" },
          { label: "events", value: "RabbitMQ" },
          { label: "resilience", value: "Resilience4j" },
        ],
        footnote: "ゲートウェイ 1 つと Spring Boot サービス 4 つ",
      },
    },
  ],
  capabilities: [
    {
      index: "01",
      kind: "CORE",
      title: "バックエンドシステム",
      description:
        "API・キューコンシューマ・バッチ処理を、ワーカーが処理途中で落ちる前提で設計します。再試行・回復・デッドレター処理を最初から組み込みます。",
      badges: ["Java", "Go", "Spring Boot", "PostgreSQL", "Redis", "RabbitMQ"],
      icon: "layers",
    },
    {
      index: "02",
      kind: "DELIVERY",
      title: "フルスタック開発",
      description:
        "データベーススキーマから実際に動く管理画面まで、認証フロー・管理コンソール・多言語対応を含めて機能を仕上げます。",
      badges: ["Next.js", "React", "TypeScript", "Redux Toolkit"],
      icon: "grid",
    },
    {
      index: "03",
      kind: "DEFENCE",
      title: "セキュリティ",
      description:
        "情報漏洩対策、SIEM ログ転送、トークンのローテーション、テナント分離、保存された認証情報の暗号化。",
      badges: ["DLP", "SIEM", "JWT", "RBAC", "DKIM"],
      icon: "shield",
    },
    {
      index: "04",
      kind: "FOUNDATIONS",
      title: "アルゴリズムと設計",
      description:
        "競技プログラミングで培った発想を実務へ。類似検索、複数パターン照合、レート制限、公平なスケジューリングなど。",
      badges: ["システム設計", "データ構造", "マイグレーション", "CI/CD"],
      icon: "clock",
    },
  ],
  about: {
    quote:
      "システムで面白いのはたいてい、壊れるまで誰の目にも触れない部分です。クラッシュに耐えなければならないキューや、毎回正しくなければならない判定のような。",
    paragraphs: [
      "インドのプネにある MiniOrange でバックエンドエンジニアとして、セキュリティデータ基盤を担当しています。エンドポイント向けのフィンガープリント型 DLP エンジン、SIEM ログ転送サービス、クラウドデータ検出コネクタ、そして 1 回の実行で 1,000 万件超を処理する一括エクスポート基盤などです。",
      "バックエンドに進んだきっかけは、M.B.M 大学 (ジョードプル) での競技プログラミングでした。2023 年には ICPC アジア地区予選に出場し、Codeforces では 37 回のレート対象コンテストを経て Specialist に到達、Codeforces・LeetCode・CodeChef を合わせて 1,200 問以上を解いています。",
      "業務外でも、新しい技術をきちんと身につけるために完結したシステムを一人でつくっています。Go によるメール DLP ゲートウェイ、マルチテナントの指導管理基盤、Python の AI キャリアアシスタント、Java のマイクロサービス基盤などです。",
    ],
    cardTitle: "PROFILE",
    cardRows: [
      { label: "現職", value: "MiniOrange / SDE" },
      { label: "所在地", value: "インド・プネ" },
      { label: "主な技術", value: "Java · Go · PostgreSQL" },
      { label: "希望条件", value: "リモート・移転可" },
    ],
  },
  experience: [
    {
      period: "2025年7月 — 現在",
      role: "ソフトウェア開発エンジニア",
      org: "MiniOrange · インド・プネ",
      description:
        "セキュリティデータ基盤の開発。エンドポイントの情報漏洩対策、SIEM ログ転送、クラウドデータ検出、マルチテナントのエクスポート基盤を担当。",
      highlights: [
        "HTTP/TCP と JSON・Syslog 出力に対応した SIEM ログ転送マイクロサービスを開発。LMAX Disruptor によるロックフリーパイプライン上で、メッセージ欠損ゼロのまま毎秒 2,000 件超を処理し、ベンダーごとのレート制限を適用しました。",
        "Java・Spring Batch・AWS S3・Redis・RabbitMQ による分散一括エクスポート基盤を設計し、1 回の実行で 1,000 万件超のセキュリティイベントを処理。テナント単位の Redis トークンバケット、処理時間クォータ、RabbitMQ の優先度キューにより、100 以上のテナント間で公平なスケジューリングを実現し、特定テナントによる占有を解消しました。",
        "100 以上のテナント・各 100 台超の端末に対応する内容ベース DLP エンジンを設計。CDC チャンキングと MinHash/LSH により類似検索を劣線形にし、ポリシー条件を満たした場合にのみフィンガープリント照合を実行して無駄な計算を排除。署名は MongoDB から端末上の SQLite へ同期し、完全オフラインでの違反検知を可能にしました。",
        "クラウドデータ検出を一貫して担当。AWS S3・Azure Blob Storage・Google Drive・SharePoint 向けのコネクタ設計、取り込み、処理パイプラインを構築しました。",
      ],
    },
    {
      period: "2024年5月 — 7月",
      role: "Node.js バックエンドインターン",
      org: "Celebal Technologies",
      description:
        "リレーショナルとドキュメント両方のデータベース上で、Node.js と Express.js による REST API を開発。",
      highlights: [
        "一連の REST エンドポイントでルーティング・ミドルウェア・リクエスト検証を実装。",
        "同一サービス内でリレーショナルとドキュメント両方のデータストアを扱いました。",
      ],
    },
  ],
  education: [
    {
      degree: "情報工学 学士 (B.E.)",
      org: "M.B.M 大学 · ジョードプル",
      period: "2021年 — 2025年",
      detail:
        "GPA 8.01 / 10 · データ構造とアルゴリズム、OS、データベース工学、分散システム",
    },
  ],
  achievements: [
    {
      title: "ICPC アジア地区予選進出 2023",
      detail: "ICPC アジア地区予選に出場しました。",
      href: "https://icpc.global",
    },
    {
      title: "Codeforces Specialist",
      detail: "37 回のレート対象コンテストを経て Specialist に到達。",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      title: "1,200 問以上を解答",
      detail: "Codeforces・LeetCode・CodeChef の合計。",
      href: "https://leetcode.com/u/r_singh",
    },
  ],
  codingProfiles: [
    {
      platform: "Codeforces",
      rating: "Specialist · 1422",
      href: "https://codeforces.com/profile/ryuga01",
    },
    {
      platform: "CodeChef",
      rating: "3-Star · 1667",
      href: "https://www.codechef.com",
    },
    {
      platform: "LeetCode",
      rating: "r_singh",
      href: "https://leetcode.com/u/r_singh",
    },
  ],
  skills: [
    {
      title: "言語",
      items: ["Java", "Go", "Python", "C++", "TypeScript", "SQL"],
    },
    {
      title: "バックエンド・フレームワーク",
      items: ["Spring Boot", "Spring Batch", "Gin", "Django", "Node.js", "REST"],
    },
    {
      title: "ストレージ・メッセージング",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis Streams",
        "RabbitMQ",
        "pgvector",
        "SQLite",
      ],
    },
    {
      title: "インフラ・フロントエンド",
      items: ["AWS S3", "Docker", "GitHub Actions", "Linux", "Next.js", "React"],
    },
  ],
  principles: [
    {
      title: "永続化できたものだけを ACK する。",
      detail:
        "SecurePlus はメッセージがストリームに入ってから SMTP 250 を返し、TutorPilot はイベントをデータと同じトランザクションで書き込みます。成功応答は「もう失われない」という意味であるべきです。",
    },
    {
      title: "ワーカーは落ちる前提で設計する。",
      detail:
        "私がつくるキューコンシューマは、停滞したメッセージを回収し、再起動時に中断した処理を再開し、処理不能なメッセージを再実行できる場所へ退避します。",
    },
    {
      title: "分離は構造でつくる。",
      detail:
        "テナント境界は、誰かが付け忘れるかもしれないクエリの条件ではなく、組織ごとの JWT 鍵のように鍵やスキーマの側に置きます。",
    },
    {
      title: "失敗経路もテストする。",
      detail:
        "正常系は簡単な部分です。ロールバック、再利用されたトークン、巨大なファイル、悪意ある正規表現もテスト対象にしています。",
    },
  ],
  testimonials: [],
  contact: {
    title: "バックエンド・基盤の採用をご検討中ですか？",
    subtitle:
      "分散システム、高スループットなパイプライン、セキュリティ基盤に関わるバックエンド職を探しています。リモートでも移転でも対応可能です。ここにあるプロジェクトについてのご質問も歓迎します。",
    emailLabel: "メール",
    responseNote: "いただいたご連絡には本人が、通常 24 時間以内に返信します。",
    notesTitle: "補足",
    notes: [
      "現在はプネの MiniOrange で正社員の SDE として勤務中。",
      "リモート勤務・移転のいずれにも対応可能。",
      "Java/Spring と Go のどちらのコードベースでも作業できます。",
    ],
    helpsWithTitle: "関心のある職種",
    helpsWith: [
      "分散システムのバックエンド開発",
      "高スループットなデータ・イベント基盤",
      "セキュリティ、DLP、ID 基盤",
      "信頼性まで担当するプラットフォームチーム",
    ],
    mailSubject: "ポートフォリオからのご連絡",
  },
  pages: {
    work: {
      kicker: "主な実績",
      title: "設計し、つくってきたシステム。",
      description:
        "個人開発のプロジェクトを、その背景と設計判断とともに掲載しています。MiniOrange での業務は職務経歴にまとめています。",
    },
    about: {
      kicker: "プロフィール",
      title: "バックエンドエンジニア、競技プログラマー。",
      description:
        "日中はセキュリティデータ基盤、自分の時間では Go・Python・Java で完結したシステムを。",
    },
    contact: {
      kicker: "お問い合わせ",
      title: "お気軽にご連絡ください。",
      description:
        "メールが一番早く届きます。職種のご相談でも、話したい内容でもかまいません。",
    },
    notFound: {
      kicker: "404",
      title: "このページは存在しません。",
      description:
        "リンクが古い可能性があります。実績一覧から見直してみてください。",
    },
  },
  socials: [
    { label: "GitHub", handle: "@ryuga001", href: "https://github.com/ryuga001" },
    {
      label: "LinkedIn",
      handle: "/in/rahul-singh-546676240",
      href: "https://www.linkedin.com/in/rahul-singh-546676240/",
    },
    {
      label: "Codeforces",
      handle: "Ryuga01",
      href: "https://codeforces.com/profile/ryuga01",
    },
    { label: "LeetCode", handle: "r_singh", href: "https://leetcode.com/u/r_singh" },
  ],
  footer: {
    description:
      "信頼できるパイプライン、セキュリティ基盤、そしてその上のプロダクトをつくるバックエンドエンジニア。",
    navTitle: "ナビゲーション",
    connectTitle: "リンク",
    rights: "All rights reserved.",
  },
} satisfies SiteContent;

export default ja;
