export const TableData = {
  id: 1,
  online: 79,
  recommend: 7,
  headhunter: 0,
  public: 0,
  school: 7,
  etc: 7,
  positive: 60,
  negative: 13,
  normal: 27,
  pass: 47,
  fail: 40,
  wait: 13
};

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
