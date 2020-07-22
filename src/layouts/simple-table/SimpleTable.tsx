import React, { useEffect, useState } from "react";
import moment from "moment";

interface IUser {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  username: string;
  balance: string;
  factor_authentication: boolean;
  user_ref: string;
}

export default function SimpleTable() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userShow, setUserShow] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users/")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        setUserShow(result.slice(0, 10));
      });
  }, []);

  const userRowTable = userShow.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{moment(user.createdAt).calendar()}</td>
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
  });

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">Bordered Table</h3>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Create At</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Name</th>
                  <th>Balance</th>
                  <th>Factor Authentication</th>
                  <th>User Ref</th>
                </tr>
                {userRowTable}
              </tbody>
            </table>
          </div>
          {/* /.box-body */}
          <div className="box-footer clearfix">
            <ul className="pagination pagination-sm no-margin pull-right">
              <li>
                <a href="#">«</a>
              </li>
              <li>
                <a href="#" onClick={() => setUserShow(users.slice(0, 10))}>
                  1
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setUserShow(users.slice(10, 20))}>
                  2
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setUserShow(users.slice(20, 30))}>
                  3
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setUserShow(users.slice(30, 40))}>
                  4
                </a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
