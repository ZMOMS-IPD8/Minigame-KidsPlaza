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
      title: "Eating Well in Pregnancy – Plus the Right Vitamins",
    },
    extraContent: [
      "Để có 1 thai kỳ khoẻ mạnh",
      "Ăn dặm kiểu Nhật",
      "Món ăn bổ dưỡng cho thai phụ: cá chép hầm đậu đỏ",
      "Món ăn giúp an thai: gà ác tiềm ngải cứu",
    ],
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
      title: "Pregnancy Facts | Growing Baby Stages",
    },
    extraContent: [
      "Các phương pháp thai giáo giúp bé thông minh",
      "Những điều nên tránh khi thực hành thai giáo",
    ],
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
      title: "What can my baby understand and feel in the womb?",
    },
    extraContent: ["3 bài nhạc thai giáo"],
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
      title: "Mom’s Voice Inspires Learning in the Womb",
    },
    extraContent: [
      "Dưỡng thai đúng cách",
      "Vượt cạn an toàn",
      "Chuẩn bị cho ngày vượt cạn",
      "Kỹ năng hít thở để đỡ đau khi chuyển dạ",
      "Khi đi sinh bạn cần mang những gì",
    ],
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
      title: "Serve & Return Interaction Shapes Brain Circuitry",
    },
    extraContent: [
      "Chăm sóc bé 1 tháng tuổi",
      "Giải mã tiếng khóc của bé",
      "Cách tắm và chăm sóc rốn bé",
      "Chăm sóc giấc ngủ của bé",
    ],
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
      title: "Tummy time for babies",
    },
    extraContent: ["Chăm sóc bé sau 6 tháng tuổi", "Kỹ năng đầu đời của bé"],
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
      title: "Your Baby’s Developmental Milestones – 7 to 12 months",
    },
    extraContent: [
      "Phòng tránh tai nạn cho bé",
      "Thiết lập môi trường an toàn cho bé",
      "Kỹ năng giờ vàng cho bé",
    ],
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
      title: "12 to 18 Months Old | Child Development Video Series",
    },
    extraContent: ["Tập cho bé ngủ riêng"],
  },
  {
    id: "baby-19-48",
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
      title: "Children’s Speech & Language Therapy – Toddler Talk",
    },
    extraContent: [
      "Để bé lớn khôn khoẻ mạnh",
      "Chuẩn bị phòng ngủ cho bé ngủ riêng",
    ],
  },
];
