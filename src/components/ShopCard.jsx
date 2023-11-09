import { Component } from "react";

export class ShopCard extends Component {   

  render() {
    const { icon, cards } = this.props;
    
    return (
        <>            
            {cards.map((el, index) => 
            <div key={index} className={icon} name={el.name}>
                <img src={el.img} alt="card avatar" className={`${icon}-img`}/>
                <div className={`${icon}-name`}>{el.name}</div>
                <div className={`${icon}-color`}>{el.color}</div>
                <div className={`${icon}-price`}>${el.price}</div>
                <button className={`${icon}-button`}>ADD TO CART</button>                
            </div>)}    
                  
        </>      
    );
  }
}
