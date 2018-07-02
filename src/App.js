import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation, {NavLink} from 'react-navigate'
import 'react-navigate/src/Navigation.css'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button,  ButtonToolbar } from 'react-bootstrap';
import ModalExample from './examples/modal';
import BreadcrumbsExample from './examples/Breadcrumbs_Example';
import SplitButtonExample from './examples/Dropdown';
import FormExample from './examples/Forma';
import GlyphiconlExample from './examples/Glyphicon';
import ImageExample from './examples/Image';
import JumbotronExample from './examples/Jumbotron';
import LabelExample from './examples/Label';
import ListGroupExample from './examples/ListGroup';
import NavExample from './examples/Navigation';
import NavbarExample from './examples/Navbar';
import OverlayExample from './examples/Overlay';
import PageExample from './examples/Pagination';
import ProgressExample from './examples/Progress';
import TransitionExample from './examples/Transition';
import TabExample from './examples/Tab';
import CarouselExample from './examples/Carousel';
import BadgeExample from './examples/badges';
import LoadingExample from './examples/Loading';
import LabExample from './examples/label2';
import PageHeaderExample from './examples/PageHeader';
import PanelExample from './examples/Panel';
import PopExample from './examples/PopExample';
import FormaExample from './examples/Form';
import MediaExample from './examples/Media';
// import ButtExample from './examples/butt';
import BoardExample from './examples/made';
// import NewExample from './examples/new';


















class App extends Component {
  render() {
    return (

      <div >

        {/*<ButtonToolbar>
           <Button bsStyle="success">Success</Button>
        </ButtonToolbar>
        <ModalExample/>
        <BreadcrumbsExample />
        <SplitButtonExample />
        <FormExample />
        <GlyphiconlExample />
        <ImageExample />
        <JumbotronExample />
        <LabelExample />
        <ListGroupExample />
        <NavExample />
        <NavbarExample />
        <PageExample />
        <ProgressExample/>
        <TransitionExample/>
        <TabExample/>
        <CarouselExample/>
        <BadgeExample/>
        <LoadingExample/>
        <LabExample/>
        <OverlayExample/>
        <PageHeaderExample />
        <PanelExample />
        <PopExample/>
        <FormaExample />
        <ButtExample />
         <NewExample />
        <MediaExample/> */}

        <BoardExample />



    </div>

     );
    }
  }

export default App;
