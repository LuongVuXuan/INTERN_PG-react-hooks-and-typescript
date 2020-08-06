import React, { useEffect, useState } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fecthRequested } from "../../store/actions/usesActions";

// interface IUser {
//   id: string;
//   createdAt: Date;
//   name: string;
//   email: string;
//   username: string;
//   balance: string;
//   factor_authentication: boolean;
//   user_ref: string;
// }

function SimpleTable() {
  const userApi = useSelector((state: any) => state.users.users);
  const isLogged = useSelector((state: any) => state.logged);
  const dispatch = useDispatch();
  const [userShow, setUserShow] = useState([]);

  useEffect(() => {
    dispatch(
      fecthRequested("https://5f0c22f99d1e150016b37d39.mockapi.io/api/v1/users")
    );
  }, []);

  useEffect(() => {
    if (userApi) Show(0, 10);
  }, [userApi]);

  const Show = (a: number, b: number) => {
    setUserShow(userApi.slice(a, b));
  };

  const userRowTable = userShow ? (
    userShow.map((user: any) => {
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
      <td colSpan={8}>Loading data</td>
    </tr>
  );

  return isLogged.stepTwo ? (
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
                <a href="#" onClick={() => Show(0, 10)}>
                  1
                </a>
              </li>
              <li>
                <a href="#" onClick={() => Show(10, 20)}>
                  2
                </a>
              </li>
              <li>
                <a href="#" onClick={() => Show(20, 30)}>
                  3
                </a>
              </li>
              <li>
                <a href="#" onClick={() => Show(30, 40)}>
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
  ) : (
    <Redirect
      to={{
        pathname: process.env.PUBLIC_URL + "/",
      }}
    />
  );
}

export default SimpleTable;
