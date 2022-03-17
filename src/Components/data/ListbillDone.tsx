type listBillDoneProps = {
  order: number;
  billNumber: number;
  billID: string;
  billDate: string;
  billTotal: string;
  payment: string;
  cashier: string;
};

export let listBillDone: listBillDoneProps[] = [
  {
    order: 1,
    billNumber: 123974,
    billID: "5600",
    billDate: "20/06/2020 08:46 AM",
    billTotal: "5.900.000",
    payment: "Tiền mặt",
    cashier: "Nguyễn Thị Phương Trâm",
  },
  {
    order: 2,
    billNumber: 273462,
    billID: "8927",
    billDate: "20/06/2020 08:46 AM",
    billTotal: "4.696.000",
    payment: "Tiền mặt",
    cashier: "Nguyễn Thị Phương Trâm",
  },
  {
    order: 3,
    billNumber: 325236,
    billID: "ONL1682",
    billDate: "10/12/2019 08:40 AM",
    billTotal: "120.000	",
    payment: "Online",
    cashier: "Ngân hàng VietinBank (Onl)",
  },
  {
    order: 4,
    billNumber: 325236,
    billID: "KFV120",
    billDate: "20/06/2020 08:46 AM",
    billTotal: "1.160.000",
    payment: "Online",
    cashier: "Ngân hàng VietinBank (Onl)",
  },
  {
    order: 5,
    billNumber: 856222,
    billID: "VFD03551",
    billDate: "12/08/2019 08:40 AM",
    billTotal: "7.200.000",
    payment: "Online",
    cashier: "Ngân hàng VietinBank (Onl)",
  },
];
