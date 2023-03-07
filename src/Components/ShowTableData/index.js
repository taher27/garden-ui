import React from "react";
import s from "./showTableData.module.scss";
// import * as _ from "lodash";
// import cx from "classnames";
import Table from "../Table";

function ShowTableData(props) {
  const { tableData, tableHeading, noOfRecords } = props;
  return (
    <div className={s.container}>
      <Table
        data={tableData}
        head={tableHeading}
        recordsPerPage={noOfRecords}
      />
    </div>
  );
}

export default ShowTableData;
