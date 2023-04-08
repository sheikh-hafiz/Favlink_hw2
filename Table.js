import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Remove</th>
      </tr>
      <tr>
        <td colSpan="2">
          <hr />
        </td>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.linkData.map((row, index) => {
    return (
      <React.Fragment key={index}>
        <tr>
          <td>{row.name}</td>
          <td>
            <a href={row.URL} target="_blank" rel="noopener noreferrer">
              {row.URL}
            </a>
          </td>
          <td>
            <button onClick={() => props.removeLink(index)}>Delete</button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <hr />
          </td>
        </tr>
      </React.Fragment>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody linkData={props.linkData} removeLink={props.removeLink} />
    </table>
  );
};

export default Table;
