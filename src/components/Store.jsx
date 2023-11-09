import { Component } from "react";
import { IconSwitch } from "./IconSwitch";
import { CardsView } from "./CardsView";
import products from "./products.json";

export class Store extends Component {  

  constructor() {
    super();
    this.icons = ["view_list", "view_module"];
    this.products = products;
    this.handleOnSelectIcon = this.handleOnSelectIcon.bind(this);
    this.state = {        
        selectedIcon: this.icons[0],
    };
  }

  handleOnSelectIcon(e) {
    let activeIcon = e.target.textContent;
    if (activeIcon === this.icons[0]) {
        this.setState({ 
            selectedIcon: this.icons[1],            
        });
    } else {
        this.setState({ 
            selectedIcon: this.icons[0],            
        });
    }
  };

  render() {
    return (
        <>
        <div className="store">
        <IconSwitch icon={this.state.selectedIcon} onSwitch={this.handleOnSelectIcon}/>
        <CardsView icon={this.state.selectedIcon} cards={this.products}/>
        </div>
        </>
    );
  }
}