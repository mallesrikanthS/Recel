import react, {Component} from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import { Menu, Dropdown, Button, Space } from 'antd';


class AddDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const menu = (
            <Menu>
              
              <Menu.Item>                
                <option>Supply Master</option>
              </Menu.Item>              
              <Menu.Item>               
                <option>Party Master</option>
              </Menu.Item>
              <Menu.Item>               
                <option>Transcation</option>
              </Menu.Item>
          
              
            </Menu>
          );
        
        return ( 
            <>
            <div className='table'>
            <Dropdown overlay={menu} placement="topRight">
            <Button>Import-Items</Button>
            </Dropdown>
            </div>
            
            </>
         );
    }
}
 
export default AddDrop;

