// questions: how to make button work only for one line ?


import { useState } from "react";
import "./table.css";

function Table({ data }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h1>Table</h1>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>phon number</th>
            <th>button</th>
          </tr>
          {data.map((e) => (
            <tr>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td>
                <button className="btn" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "show less" : "show more"}
                </button>
                {showMore ? (
                  <th>
                    <tr>street: {e.address.street}</tr>
                    <tr>suite: {e.address.suite}</tr>
                    <tr>city: {e.address.city}</tr>
                    <tr>zipcode: {e.address.zipcode}</tr>
                    <tr>website: {e.website}</tr>
                    <tr>company: {e.name}</tr>
                  </th>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
