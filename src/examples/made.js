import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import { Row, ButtonGroup, Button as ButtonRB, DropdownButton, MenuItem, ButtonToolbar, Pager, PagerItem} from 'react-bootstrap';
import { FormGroup, Label, Input, FormText, Col, Button, Table } from 'reactstrap';
    const styles = {
    radioButton: {
    marginTop: 16,
    },

    };
    const style = {
  marginLeft:1,
};
const styless = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};


export default class  BoardExample extends React.Component {
  state = {
   open: false,
 };

 handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };
 state = {
   checked: false,
 }

 updateCheck() {
   this.setState((oldState) => {
     return {
       checked: !oldState.checked,
     };
   });
 }



 render() {
   const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(

      );

   return (
     <MuiThemeProvider style={{ width:"100%" }}>

     <RaisedButton label="Equipment Request" onClick={this.handleOpen} />
     <FloatingActionButton mini={true} secondary={true} style={style}>
       <ContentAdd />
     </FloatingActionButton>
        <Dialog style={{ width:"100%"}}
          title="Equipment Request"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >

     <div id="app" style={{ width:"100%" , borderStyle: "solid",borderWidth: 2,borderColor: "#b7c2c6",  marginTop:20, boxShadow: " 5px 10px #888888" }}>
     <legend style={{ width:"100%", paddingLeft: 20 , marginTop:20}}>Equipment Request</legend>

     <div style={{  display: "flex", justifyContent: "space-between" }} >
     <div>
     <h6 style={{  paddingLeft: 20 }}>Search by: </h6>
     <FormGroup check style={{  paddingLeft: 20 }}>
       <Label check>
         <Input type="radio" name="radio1" />{' '}
          Carrier  ID
       </Label>
     </FormGroup>
     <FormGroup check style={{  paddingLeft: 20 }}>
       <Label check>
         <Input type="radio" name="radio1" />{' '}
          Contact Name
       </Label>
     </FormGroup >
     <FormGroup check style={{  paddingLeft: 20 }}>
       <Label check>
         <Input type="radio" name="radio1" />{' '}
         Carrier Name

       </Label>
     </FormGroup>
     </div>
     <div style={{  display: "flex",  width:'70%', height:'100%',float:"left",marginRight:"5%"}}>
     <FormGroup style={{ width:100, float:"left",marginRight:"5%"}}>
     <Label for="exampleSearch">Carrier ID:</Label>
     <Input type="search" name="search" id="exampleSearch" placeholder="Carrier ID" />
     </FormGroup>

     <FormGroup style={{ width:150, float:"left",marginRight:"5%" }}>
     <Label for="exampleSearch">Carrier Name:</Label>
     <Input type="search" name="search" id="exampleSearch" placeholder="search for mc carriers.." />
     </FormGroup>

     <FormGroup style={{ width:180 }}>
     <Label for="exampleSearch">Insurance Exp Date:</Label>
     <Input type="search" name="search" id="exampleSearch" placeholder="Insurance Expiration Date" />
     </FormGroup>
     </div>
     </div>

     <legend style={{  paddingLeft: 20,  marginTop:20 }}>Trailers</legend>
<div style={{  display: "flex", justifyContent: "space-between",width:"100%" , height:"20%" }}>

     <ButtonToolbar style={{  paddingLeft: 20,  marginTop:20 ,marginBottom:20, width:'100%', height:'100%'}}>
       <p style={{float:'left', marginBottom: "15"}}>Show</p>
       <DropdownButton title="25" id="bg-nested-dropdown" style={{float:'left'}}>
       <MenuItem eventKey="10">10</MenuItem>
       <MenuItem eventKey="25">25</MenuItem>
       <MenuItem eventKey="50">50</MenuItem>
       <MenuItem eventKey="100">100</MenuItem>
       </DropdownButton>
         <p style={{float:'left'}}>entries</p>
       <ButtonRB style={{float:'left'}}>Print</ButtonRB>
       <DropdownButton title="Colomn Visibility" id="bg-nested-dropdown" style={{float:'left'}}>
       <MenuItem eventKey="Board Status">Board Status</MenuItem>
       <MenuItem eventKey="Contact Name">Contact Name</MenuItem>
       <MenuItem eventKey="Equipment Type">Equipment Type</MenuItem>
       <MenuItem eventKey="Trailer Type">Trailer Type</MenuItem>
       <MenuItem eventKey="City">City</MenuItem>
       <MenuItem eventKey="State">State</MenuItem>
       <MenuItem eventKey="Available Date">Available Date</MenuItem>
       <MenuItem eventKey="Desired Destination">Desired Destination</MenuItem>
       </DropdownButton>

     </ButtonToolbar>

     </div>
     <div style={{  paddingLeft: 20 , marginTop:20}}>
     <Table striped bordered condensed hover>
     <thead>
     <tr>
     <th>Board Status</th>
     <th>Contact Name</th>
     <th>Equipment Type</th>
     <th>Trailer Type</th>
     <th>City</th>
     <th>State</th>
     <th>Available Date</th>
     <th>Desired Destination</th>
     </tr>
     </thead>
     <tbody>
     <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
     </tr>
     </tbody>
     </Table>
     <p>Showing 1 to 1 of 1 entires</p>
     <p>Truck Order Not Used</p>
     <div>
     <Checkbox

         labelPosition="right"
         style={styless.checkbox}
       />
     </div>
     <Pager style={{  marginLeft: 60 }}>
     <Pager.Item href="#">Previous</Pager.Item>{' '}
     <Pager.Item href="#">Next</Pager.Item>
     </Pager>


     </div>
     </div>

      </Dialog>
     </MuiThemeProvider>
   );
   }
   }
}
