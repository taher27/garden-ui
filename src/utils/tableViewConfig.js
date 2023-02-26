export const challanTableList = [
  {
    title: "Date",
    key: "date",
    type: "text",
  },
  {
    title: "Challan No",
    key: "challan_no",
    type: "text",
  },
  {
    title: "Customer",
    key: "customer",
    type: "text",
  },
  {
    title: "Cloth",
    key: "cloth",
    type: "text",
  },
  {
    title: "Factory Name",
    key: "factory_name",
    type: "text",
  },

  {
    title: "ACTIONS",
    key: "action",
    type: "iconList",
  },
];

export const customerTableList = [
  {
    title: "Name",
    key: "name",
    type: "text",
  },
  {
    title: "Location",
    key: "location",
    type: "text",
  },
  {
    title: "ACTIONS",
    key: "action",
    type: "iconList",
  },
];

export const clothTableList = [
  {
    title: "Name",
    key: "name",
    type: "text",
  },
  {
    title: "Meters",
    key: "meter",
    type: "text",
  },
  {
    title: "Date",
    key: "date",
    type: "text",
  },
  {
    title: "ACTIONS",
    key: "action",
    type: "iconList",
  },
];

const tableMapping = {
  clothTableList: clothTableList,
  customerTableList: customerTableList,
  challanTableList: challanTableList,
};

export default tableMapping;
