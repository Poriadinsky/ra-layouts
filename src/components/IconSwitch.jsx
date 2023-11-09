import { Component } from "react";

export class IconSwitch extends Component {   

  render() {
    const { icon, onSwitch } = this.props;
    
    return (
        <>
            <span className="material-icons" id={`material-icons-${icon}`} onClick={onSwitch}>{icon}</span>           
        </>      
    );
  }
}