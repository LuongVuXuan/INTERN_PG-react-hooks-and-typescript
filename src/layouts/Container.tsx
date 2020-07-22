import React from "react";
import SimpleTable from "./simple-table/SimpleTable";
// import styled from "styled-components";

export default function Header() {
  // const Container = styled.div`
  //   height: calc(80% - 4px);
  //   margin: 2px 0;
  // `;

  return (
    <div className="content-wrapper" style={{ minHeight: 1136 }}>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>
          Blank page
          <small>it all starts here</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard" /> Home
            </a>
          </li>
          <li>
            <a href="#">Examples</a>
          </li>
          <li className="active">Blank page</li>
        </ol>
      </section>
      {/* Main content */}
      <section className="content">
        <SimpleTable />
      </section>
      {/* /.content */}
    </div>
  );
}
