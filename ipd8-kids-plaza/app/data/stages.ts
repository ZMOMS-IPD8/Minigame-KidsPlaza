export type Stage = {
  id: string;
  type: "pregnancy" | "baby";
  from: number;
  to: number;
  unit: "day";
  development: string;
  description: string;
  wish: string;
  stampNumber: number;
  clip?: {
    title: string;
    url?: string;
  };
  extraContent?: string[];
};

export const STAGES: Stage[] = [
  {
    id: "pregnancy-04-12",
    type: "pregnancy",
    from: 28,
    to: 84,
    unit: "day",
    development: "Hệ thần kinh nền tảng",
    description:
      "Não, tủy sống và các cơ quan nền tảng đang tạo lập; mẹ ăn đủ chất và bổ sung theo tư vấn y tế.",
    wish: "DINH DƯỠNG TUYỆT VỜI NHẤT",
    stampNumber: 5,
    clip: {
      title: "Để có một thai kỳ khoẻ đẹp",
    },
    extraContent: ["Playlist nhạc thai giáo 35'"],
  },

  {
    id: "pregnancy-13-17",
    type: "pregnancy",
    from: 85,
    to: 119,
    unit: "day",
    development: "Cử động và cảm nhận sớm",
    description:
      "Bé đã cử động từ sớm; nhiều mẹ bắt đầu cảm nhận những chuyển động đầu tiên của con.",
    wish: "SỰ CHĂM SÓC KHOA HỌC NHẤT",
    stampNumber: 8,
    clip: {
      title: "Các phương pháp thai giáo giúp bé thông minh",
    },
    extraContent: ["Playlist nhạc thai giáo 35'"],
  },

  {
    id: "pregnancy-18-27",
    type: "pregnancy",
    from: 120,
    to: 189,
    unit: "day",
    development: "Thính giác",
    description:
      "Bé dần nghe được âm thanh; mẹ có thể trò chuyện và hát nhẹ nhàng cùng con.",
    wish: "THÍNH GIÁC TINH ANH NHẤT",
    stampNumber: 9,
    clip: {
      title: "Thai giáo bằng âm thanh",
    },
    extraContent: ["Playlist nhạc thai giáo 35'"],
  },

  {
    id: "pregnancy-28-42",
    type: "pregnancy",
    from: 190,
    to: 280,
    unit: "day",
    development: "Não bộ và âm thanh quen thuộc",
    description:
      "Não bé phát triển nhanh; bé dần nhận biết những âm thanh quen thuộc, nhất là giọng mẹ.",
    wish: "TRÍ TUỆ TUYỆT VỜI NHẤT",
    stampNumber: 3,
    clip: {
      title: "Chuẩn bị cho ngày vượt cạn",
    },
    extraContent: ["Playlist nhạc thai giáo 35'"],
  },

  {
    id: "baby-0-3",
    type: "baby",
    from: 281,
    to: 371,
    unit: "day",
    development: "Giác quan và gắn kết",
    description:
      "Bé học qua ánh mắt, giọng nói và cái ôm; ba mẹ đáp lại con sẽ nuôi dưỡng sự gắn kết.",
    wish: "KHOẢNH KHẮC TUYỆT VỜI NHẤT",
    stampNumber: 2,
    clip: {
      title: "Chăm sóc bé 1 tháng tuổi",
    },
    extraContent: ["Giải mã tiếng khóc của bé", "Playlist nhạc cho bé 24'"],
  },

  {
    id: "baby-4-6",
    type: "baby",
    from: 372,
    to: 463,
    unit: "day",
    development: "Vận động và cầm nắm",
    description:
      "Bé dần lẫy, với và cầm đồ vật; hãy cho bé nằm sấp chơi khi thức và có người quan sát.",
    wish: "SỰ PHÁT TRIỂN TUYỆT VỜI NHẤT",
    stampNumber: 1,
    clip: {
      title: "Chăm sóc bé sau 6 tháng tuổi",
    },
    extraContent: ["Playlist nhạc cho bé 24'"],
  },

  {
    id: "baby-7-12",
    type: "baby",
    from: 464,
    to: 645,
    unit: "day",
    development: "Di chuyển và khám phá",
    description:
      "Bé tự di chuyển theo cách riêng, vịn đứng và tìm đồ vật bị giấu; hãy tạo không gian an toàn cho con khám phá.",
    wish: "KỸ NĂNG TUYỆT VỜI NHẤT",
    stampNumber: 4,
    clip: {
      title: "Phát triển kỹ năng đầu đời cho bé",
    },
    extraContent: ["Playlist nhạc cho bé 24'"],
  },

  {
    id: "baby-13-18",
    type: "baby",
    from: 646,
    to: 828,
    unit: "day",
    development: "Ngôn ngữ và bắt chước",
    description:
      "Bé hiểu từ quen thuộc, bắt chước người lớn và bắt đầu dùng từ để giao tiếp.",
    wish: "SỰ HỌC TUYỆT VỜI NHẤT",
    stampNumber: 6,
    clip: {
      title: "Thiết lập môi trường sống an toàn cho trẻ",
    },
    extraContent: ["Playlist nhạc cho bé 24'"],
  },

  {
    id: "baby-19-24",
    type: "baby",
    from: 829,
    to: 1000,
    unit: "day",
    development: "Ngôn ngữ và giao tiếp chủ động",
    description:
      "Bé dùng nhiều từ hơn, có thể ghép hai từ để diễn đạt nhu cầu; hãy lắng nghe và trò chuyện cùng con mỗi ngày.",
    wish: "PHƯƠNG PHÁP KÍCH HOẠT TRÍ THÔNG MINH TUYỆT VỜI NHẤT",
    stampNumber: 7,
    clip: {
      title: "Những trò chơi giúp bé phát triển trí thông minh",
    },
    extraContent: ["Playlist nhạc cho bé 24'"],
  },
];
