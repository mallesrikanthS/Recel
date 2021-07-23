import React, {Component, useState } from "react";
import "../App.css";
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';

import ShRead from './SheRead';


class ListItem extends Component {
    


    render() {
        //const data = this.props.value;
        //let len = data.rows.length;
        return (
            <><div>

                {this.state.dataLoaded && 
                <div>
                <Card body outline color="secondary" className="restrict-card">

                {/*console.log(this.state.rows[0])*/}
                {this.state.rows[0].map((col, index) => (
                    <div>
                        {col}
                        {/*console.log(col)*/}
                    </div>
                    
                    ))}
            
                           
          </Card>  
        </div>}
            

            <div>
            <table>
            <thead>
            <tr>
            <th>item</th>
            <th>dtt</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>row1</td>
                
                <td>
                <select>
                    <option >same</option>
                    <option >name</option>
                    <option >game</option>
                </select>
                </td>
                </tr>
                <tr>
                <td>row2</td>
                <td>
                <select>
                    <option >same</option>
                    <option >name</option>
                    <option >game</option>
                </select>
                </td>
                </tr>
                <tr>
                <td>row3</td>
                <td>
                <select>
                    <option >same</option>
                    <option >name</option>
                    <option >game</option>
                </select>
                </td>
                </tr>
                <tr>
                <td>row4</td>
                <td>
                <select>
                    <option >same</option>
                    <option >name</option>
                    <option >game</option>
                </select>
                </td>
                </tr>


            </tbody>

            </table>


            </div>
            </div>
            </>
        );
    }
}

export default ListItem;