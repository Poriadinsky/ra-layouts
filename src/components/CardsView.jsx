import { Component } from "react";
import { ShopCard } from "./ShopCard";

export class CardsView extends Component {   

  render() {
    const { icon, cards } = this.props;
    
    return (
        <>
            <div className="cardsView">
            <ShopCard cards={cards} icon={icon}/>            
        </div>          
        </>      
    );
  }
}