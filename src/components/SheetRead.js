import React, { useState } from "react";
import "../App.css";
import * as XLSX from "xlsx";
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import { exportDefaultSpecifier } from "@babel/types";



function SheetRead() {
  const [data, setItems] = useState();

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      //console.log(resp.rows);
      if(err){
        console.log(err);            
      }
      const vl = setItems(resp.rows);
      console.log(resp);
      return resp;
      
    });  

    //console.log(resp);
    }

  return (
    <div>
      <input type ="file" onChange={fileHandler} />
      
      <div>
          
      </div>
      
      
    </div>
  );
}

export default SheetRead;