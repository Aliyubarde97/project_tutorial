
import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {

    super(props)
    
  
    this.state = {
       monster: [],
       searchField : ''
      
    };
  }
      componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) =>
        this.setState(
          () => {
            return {monster: users};
          },
          () => {
            console.log(this.state)
          }
        )
        );

        
       
      }
  render() {
   
    const filteredMonster = this.state.monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });  


    return (
      <div className='App'>
        <input className='serach-box' type='search' placeholder='serach monsters'
        onChange={(event) => {
         const searchField = event.target.value.toLocaleLowerCase();
          this.setState (
            () => {
            return {searchField}
          }
          );
        }}
        />
        
        {filteredMonster.map((monster) =>{
        return(
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
        })}
      </div>
    );
  }
}

export default App
