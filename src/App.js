//import logo from './logo.svg';
//import './App.css';
import Chart from "./chart";
//import "./report.scss";
import ReactDOM from "react-dom";
import React, { useEffect, useRef, useState } from "react";
function Reports() {
  return (
    <div className="Reports">
      <select id="d3-dropdown" class="form-control w-25">
        <option value="" disabled selected hidden>
          Choose Month
        </option>
        <option value="Jan">Jan</option>
        <option value="Feb">Feb</option>
        <option value="Mar">Mar</option>
        <option value="apr">Apr</option>
        <option value="May">May</option>
        <option value="Jun">Jun</option>
        <option value="Jul">Jul</option>
        <option value="Aug">Aug</option>
        <option value="Sept">Sept</option>
        <option value="Oct">Oct</option>
        <option value="Nov">Nov</option>
        <option value="Dec">Dec</option>
      </select>
      <br></br>
      <select id="d3-dropdown1" class="form-control w-25">
        <option value="" disabled selected hidden>
          Choose Demands
        </option>
        <option value="Designation">Designation</option>
        <option value="Location">Location</option>
        <option value="Client name">Client name</option>
        <option value="Hyper scalar">Hyper scalar</option>
        <option value="Skill">Skill</option>
      </select>
      <Chart></Chart>
    </div>
  );

}
ReactDOM.render(
  <React.StrictMode>
    <Reports />
  </React.StrictMode>,
  document.getElementById('root')
);


export default Reports;
