import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';

class ShRead extends Component {
  constructor(props){
    super(props);
    this.state={
        se: 'blue',
        isOpen: false,
        dataLoaded: false,
        isFormInvalid: false,
        rows: [],
        cols: null
        };
    this.fileHandler = this.fileHandler.bind(this);
   
    this.renderFile = this.renderFile.bind(this);
    
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows
          });
        }
      }); 
  }

  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }               
  }

 
  render() {
    return (
      <div className='.container'>
        <input type='file' onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }}  />
        
        {this.state.dataLoaded && 
        <div>
          <Card body outline color="secondary" className="restrict-card">

          <table>
            <thead>
            <tr>
            <th>item</th>
            <th>dtt</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>row5</td>
              {/*console.log(this.state.rows[0])*/}
              
              <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
                <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
              </tr>
              <tr>
              <td>row4</td>
              {/*console.log(this.state.rows[0])*/}
              <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
              </tr>
            <tr>
              <td>row3</td>
              {/*console.log(this.state.rows[0])*/}
              <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
              </tr>

              <tr>
              <td>row2</td>
              {/*console.log(this.state.rows[0])*/}
              <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
              </tr>
              


            <tr>
              <td>row1</td>
              {/*console.log(this.state.rows[0])*/}
              <td>
              <select>
              {this.state.rows[0].map((col, index) => (

                <option key={index}>{col}</option>

                 ))}
                </select>
                </td>
              </tr>


            </tbody>

            </table>
            
                           
          </Card>  
        </div>}
                  
                    
        </div>
    );
  }
}

export default ShRead;

//<OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />


//<ListItem value={this.state} />


