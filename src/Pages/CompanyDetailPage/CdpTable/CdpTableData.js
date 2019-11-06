export const expData = {
  labels: ["긍정적", "부정적", "보통"],
  datasets: [
    {
      labels: ["긍정적", "부정적", "보통"],
      data: [60, 13, 27],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(238, 102, 121, 1)",
        "rgba(98, 181, 229, 1)",
        "rgba(255, 198, 0, 1)"
      ],
      fill: true
    }
  ]
};

export const resultData = {
  labels: ["합격", "불합격", "대기중"],
  datasets: [
    {
      labels: ["합격", "불합격", "대기중"],
      data: [47, 40, 13],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(238, 102, 121, 1)",
        "rgba(98, 181, 229, 1)",
        "rgba(255, 198, 0, 1)"
      ],
      fill: true
    }
  ]
};

export const category = [
  {
    id: 1,
    value: "frontend",
    label: "frontend"
  },
  {
    id: 2,
    value: "backend",
    label: "backend"
  },
  {
    id: 3,
    value: "full stack",
    label: "full stack"
  }
];

export const career_year = [
  {
    id: 1,
    value: "신입",
    label: "신입"
  },
  {
    id: 2,
    value: "1~3년차",
    label: "1~3년차"
  },
  {
    id: 3,
    value: "4년차 이상",
    label: "4년차 이상"
  }
];

export const interview_result = [
  {
    id: 1,
    value: "합격",
    label: "합격"
  },
  {
    id: 2,
    value: "불합격",
    label: "불합격"
  },
  {
    id: 3,
    value: "대기중",
    label: "대기중"
  }
];

export const interview_experience = [
  {
    id: 1,
    value: "긍정적",
    label: "긍정적"
  },
  {
    id: 2,
    value: "부정적",
    label: "긍정적"
  },
  {
    id: 3,
    value: "보통",
    label: "보통"
  }
];

export const interview_path = [
  {
    id: 1,
    value: "지인 추천",
    label: "지인 추천"
  },
  {
    id: 2,
    value: "공개 채용",
    label: "공개 채용"
  },
  {
    id: 3,
    value: "온라인 지원",
    label: "온라인 지원"
  },
  {
    id: 4,
    value: "기타",
    label: "기타"
  }
];

export const code_test_level = [
  {
    id: 1,
    value: "없음",
    label: "없음"
  },
  {
    id: 2,
    value: 1,
    label: 1
  },
  {
    id: 3,
    value: 2,
    label: 2
  },
  {
    id: 4,
    value: 3,
    label: 3
  },
  {
    id: 5,
    value: 4,
    label: 4
  },
  {
    id: 6,
    value: 5,
    label: 5
  }
];

export const review_list = [
  {
    id: 1,
    category: "frontend",
    career_year: "신입",
    interview_experience: "긍정적",
    interview_path: "온라인 지원",
    code_test_level: 3,
    interview_result: "합격",
    overall_review:
      "편안한 분위기였고 딱딱하지 않았다. 한시간 면접. 다양한 질문들로 말을 많이 했던 기억.",
    question:
      "경력중심의 자기소개 회사에 궁금한점 꿈 또는 목표 이전직장 퇴사 이유",
    answer: "이력서에 작성한대로 대답 왜 퇴사했는지에 대해서 대답"
  },
  {
    id: 2,
    category: "backend",
    career_year: "1~3년차",
    interview_experience: "부정적",
    interview_path: "지인 추천",
    code_test_level: 5,
    interview_result: "대기중",
    overall_review:
      "최근 브이씨로 회사명을 바꾸고 역삼으로 본사 이전. 생각보다 많은 면접관이 들어와서 놀랐음. 지원자의 포트폴리오는 아직 안 봤지만 우리 회사에 지원했으니 자기 회사에 대해 설명해 보라는 질문이 인상적. 형제 자매, 누구와 함께 사는지 등의 사적인 질문이 있었음.",
    question:
      "이직 이유, 회사를 볼 때 가장 중요하게 여기는 것, 남들이 보는 성격, 골프에 대해 아는지, 우리 회사에 대해 설명해 봐라, 마케팅이란 무엇인가, 가장 성과를 낸 프로젝트는, 우리가 왜 당신을 뽑아야 하는지.",
    answer:
      "경험과 사실에 기반하여 답변. 이곳에서 정말 일하고 싶다면 회사에 대한 정보를 타 회사보다 더 꼼꼼하게 보고 가야할 듯. 분위기가 다소 무겁고 살짝 압박 면접이라 당황스러울 수 있음."
  }
];
