import './App.css';
import React from "react" ;
import myphoto from './Myphoto.jpg' ;
class App extends  React.Component{
  state={
    person: {
      name:"Ibrahim",
      bio:"Ovic",
      imgSrc : myphoto,
      profession : "Web developper" 

    },
    show : false,
    count : 0
  };
  
  render(){
    const showPerson=()=>{
      this.setState(
        {
          show : ! this.state.show
        }
      );
      setInterval(()=>{
        
        this.setState(
          {count : this.state.count + 1}
        )
      },1000);
    }
    return(
      <div className="App">
        <button onClick={showPerson}>show person</button>
          {this.state.show ? (<div className="profile">
          <p>{this.state.person.name}</p>
          <p>{this.state.person.bio}</p>
          
          <img src={this.state.person.imgSrc} alt={this.state.person.name} style={{ width: 800, height: 500 }} />
          <p>{this.state.person.profession}</p>
          <p>interval :{this.state.count}</p>

          </div>) : <div></div>}
          

      </div>
    )
  }
}

export default App;