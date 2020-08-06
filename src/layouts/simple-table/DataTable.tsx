import React from "react";
import moment from "moment";

function DataTable({ users }: any) {
  const userRowTable = users ? (
    users.map((user: any) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{moment(user.createdAt).format("HH:mm - DD/MM/YYYY")}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.balance}</td>
          <td style={{ textAlign: "center" }}>
            <input
              type="checkbox"
              defaultChecked={user.factor_authentication}
            />
          </td>
          <td>{user.user_ref}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan={8} style={{ textAlign: "center" }}>
        Loading data
      </td>
    </tr>
  );
  return userRowTable;
}

export default DataTable;
