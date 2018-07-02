import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
class ButtExample extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
<RaisedButton
     href="made.js"
     target="_blank"
     label="Github Link"
     secondary={true}
     style={styles.button}
     icon={<FontIcon className="muidocs-icon-custom-github" />}
   />
   </MuiThemeProvider>
 );
}
}

export default  ButtExample;
