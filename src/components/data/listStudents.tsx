type listStudentProps = {
  name: string;
  studentID: string;
  gender: boolean;
  birthday: string;
  quantity: number;
  discount: boolean;
  status: boolean;
};

export let listStudents: listStudentProps[] = [
  {
    name: "Bùi Thế Anh",
    studentID: "001",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: false,
    status: true,
  },
  {
    name: "Hàng Lâm Trang Anh",
    studentID: "002",
    gender: false,
    birthday: "01/07/2021",
    quantity: 3,
    discount: true,
    status: true,
  },
  {
    name: "Nguyễn Thiện Thanh Bảo ",
    studentID: "003",
    gender: true,
    birthday: "01/07/2021",
    quantity: 3,
    discount: false,
    status: false,
  },
  {
    name: "Nguyễn Đức Cường",
    studentID: "004",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: false,
    status: true,
  },
  {
    name: "Nguyễn Minh Huy",
    studentID: "005",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: false,
    status: true,
  },
  {
    name: "Lê Nguyễn Trung Đan",
    studentID: "006",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: false,
    status: true,
  },
  {
    name: "Nguyễn Quang Hưng ",
    studentID: "007",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: true,
    status: true,
  },
  {
    name: "Phạm Hoàng Khoa",
    studentID: "008",
    gender: true,
    birthday: "01/07/2021",
    quantity: 2,
    discount: false,
    status: true,
  },
];
