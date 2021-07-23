import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';


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

    ld = ()=> {this.state.rows[0].map((col, index) => (

      <option key={index}>{col}</option>

      ))}

 
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
            <th>COL-DATA</th>
            <th>Drop-Item</th>
            </tr>
            </thead>
            <tbody>

            {
              this.state.rows[0].map((skill, id) => {
                return (
                  <>
                  <tr>
                    <td key={id}>{skill}</td>

                    <td>
                    <select>
                    {
                      this.state.rows[0].map((skillDetail, idx) => {

                        return (
                            <option key={idx}>
                              {skillDetail}
                            </option>
                        );
                      })
                    }
                    </select>
                    </td>
                    </tr>
                  </>
                );

              })
            } 

                           

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


