import React from 'react';
import axios from 'axios'; //used to GET REQUEST from API
import './App.css';

class App extends React.Component {
    state = { advice: ''};

    componentDidMount(){ //executes at render
        this.fetchAdvice(); //calling function

    }
    //function inside class #fetchAdvice
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip //destructuringdata to get advice
            
            this.setState({ advice });

        })
        .catch((error) => {
            console.log(error)

        })

    }
    render() {
        return (
          <div className="adviceapp">
            <div className="box">
              <h1 className="realadv">{this.state.advice}</h1>
              <button className="button" onClick={this.fetchAdvice}>
                <span>Only The Wise Ask For Advice</span>
              </button>
            </div>
          </div>
        );
      }
    }
    
    export default App;
    