import React from "react";
import MaterialTable from "material-table";

function Tableau(props) {
  const { title, column, data } = props;
  return (
    <MaterialTable
      title={title}
      columns={column}
      data={data}
      style={{ padding: "2%", marginTop: "1%" }}
      options={{
        rowStyle: (data, index) =>
          index % 2 === 0
            ? {
                backgroundColor: "#f5f5f5",
              }
            : null,
        pageSize: 3,
        pageSizeOptions: [3, 5, 25, 50, 100],
        paginationType: "stepped",
        headerStyle: {
          backgroundColor: "blue",
          color: "#FFF",
        },
      }}
    />
  );
}

export default Tableau;
