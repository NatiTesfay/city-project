import { useState } from "react";

const TablesCity = ({e}) =>{


    return(
        <div>
        <h1>City Tables</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>populatin</th>
          <th>steetNums</th>
          <th>citySing</th>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr>
              <td>{item.Name}</td>
              <td>{item.populatin}</td>
              <td>{item.steetNums}</td>
              <td>{item.citySing}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    )
}
export default TablesCity;


