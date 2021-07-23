import React, { Component } from 'react';
import '../App.css';
import './Grid.css';
import ListItem from './ListItem';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';


class GridView extends Component {
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
    const style = {};
    //{ background: '#0092ff', padding: '4px 0px' };

    return (
      <div className='.container'>
        <input type='file' onChange={this.fileHandler.bind(this)} 
        ref={this.fileInput} onClick={(event)=> {
           event.target.value = null 
           }}  />
        
        {this.state.dataLoaded && 
        <div>
          <Card body outline color="secondary" className="restrict-card">

          <div >
        <Row className= 'table'>

            <Col span={7} offset={5}>
            <Col className='th' style={style} > COL-Data </Col>
            {
              this.state.rows[0].map((skill, id) => {
                return (
                  <>
                  <Row className='tlr' span={7} offset={6} key={id}>{skill}</Row>
                  </>
                );

              })
            }        
            </Col>

            <Col span={7} offset={0}>
            <Col className='th' style={style} > Drop-Item </Col>

                
                {
                    this.state.rows[0].map((el)=>{
                       return(
                          <>
                          <Row span={8} offset={0} >
                          <select className='tr' >
                            <option className='pl' ></option>
                          {this.state.rows[0].map((skillDetail, idx) => {
                                return (
                              <option  span={7} offset={0} key={idx}>
                              {skillDetail}
                              </option>
                                );
                          })
                          }
                          </select>
                          </Row>
                          </>
                       );
                    })
                }

            </Col>

        </Row>
        </div>                    
                           
          </Card>  
        </div>}
                  
                    
        </div>
    );
  }
}

export default GridView;

//<OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" />


//<ListItem value={this.state} />

