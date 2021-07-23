import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import { exportDefaultSpecifier } from "@babel/types";
import SheetRead from './components/SheetRead';
import ShRead from './components/SheRead';
import ListItem from './components/ListItem';
import GridView from './components/GridView';
//import AddDrop from "./components/AddDrop";
import AddDrop from "./Drop/AddDrop";

function App() {
  
  return (
    <div>
      
      <div className='.container'>
      <div>
        <AddDrop />
      </div>
      
      <div className='row' >
      <GridView />
      </div>
      </div>
      
      
    </div>
  );
}

export default App;