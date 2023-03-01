import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';

import './style/App.css';

import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';
import futomaki from './images/futomaki.png';
import king from './images/king.png';
import black from './images/black.png';

class App extends Component {
  state = {
    cards: [
    {id:0, nome: "California", prezzo:1.99,immagine: california, quantità: 0 },
    {id:1, nome: "Nigiri al salmone", prezzo:3.49,immagine: dragon, quantità: 0 },
    {id:2, nome: "Dynamite", prezzo:2.49,immagine: dynamite, quantità: 0  },
    {id:3, nome: "Philadelphia", prezzo:0.99,immagine: philadelphia, quantità: 0  },
    {id:4, nome: "Rainbow", prezzo:2.99,immagine: rainbow,quantità: 0  },
    {id:5, nome: "Shrimp", prezzo:1.49,immagine: shrimp, quantità: 0 },
    {id:6, nome: "Futomaki", prezzo:1.79,immagine: futomaki, quantità: 0 },
    {id:7, nome: "Black", prezzo:3.49,immagine: black, quantità: 0 },
    {id:8, nome: "King", prezzo:4.49,immagine: king, quantità: 0 },
  ]
}

handleDelete = card => {
  
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  let quantità = cards[id].quantità;
  
  if (quantità > 0){
    cards[id].quantità--;
    this.setState({ cards });
  }
  else{
    return this.quantità === 0
  }
}

handleIncrement = card => {
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  cards[id].quantità++;
  this.setState({ cards });
}

  render() {
  return (
    <div className="App">
     <NavBar/>
     
     <h1 className='title'>Cosa desideri ordinare?</h1>
   
     
     <div className='row'>
       {this.state.cards.map(card => (
         <Card
         key={card.id}
         onDelete={this.handleDelete}
         onIncrement={this.handleIncrement}
         card={card} />
       ))}
     </div>
    </div>
  );
 }
}

export default App;
