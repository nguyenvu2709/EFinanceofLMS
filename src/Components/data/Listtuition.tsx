type listTuitionProps = {
  tuitionID: Number;
  tuitionName: String;
  tuitionCode: String;
};

export const listTuition: listTuitionProps[] = [
  {
    tuitionID: 1,
    tuitionName: "Thu phí ghi danh xếp lớp",
    tuitionCode: "01_GD",
  },
  {
    tuitionID: 2,
    tuitionName: "Thu phí nhập học",
    tuitionCode: "02_NH",
  },
  {
    tuitionID: 3,
    tuitionName: "Thu phí thu học kì I",
    tuitionCode: "03_HKI",
  },
  {
    tuitionID: 4,
    tuitionName: "Thu phí học tín chỉ",
    tuitionCode: "04_TC",
  },
  {
    tuitionID: 5,
    tuitionName: "Thu phí tốt nghiệp",
    tuitionCode: "05_TN",
  },
  {
    tuitionID: 6,
    tuitionName: "Thu phí cơ sở vật chất",
    tuitionCode: "06_CSVC",
  },
  {
    tuitionID: 7,
    tuitionName: "Thu phí phục vụ nội trú",
    tuitionCode: "07_PVNT",
  },
];
