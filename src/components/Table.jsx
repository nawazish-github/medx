import React from "react";

function Table(props) {
  const{name, stock} = props;

  return (
    <table className="table-top">
     <thead>
        <tr>
          <th>Name</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{stock}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
