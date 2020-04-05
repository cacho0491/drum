import React from 'react';
import './App.css';

const sounds = {
  q: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  w: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  e: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  a: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  s: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  d: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  z: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  x: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  c: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
};
const messages = {
  q: 'Heater-1',
  w: 'Heater-2',
  e: 'Heater-3',
  a: 'Heater-4',
  s: 'Heater-5',
  d: 'Heater-6',
  z: 'Heater-7',
  x: 'Heater-8',
  c: 'Heater-9'
 };
const keys = ['q','w','e','a','s','d','z','x','c'];


class Drum extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: 'Hey!'
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
    
  }
  
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyPress);
    
  }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(event){
    let foo = event.key.toLowerCase();
    if(keys.indexOf(foo) > -1){
      this.playSound(event.key);
      
    }
  }
  playSound(key){
    document.body.style.backgroundColor = "green";
    document.getElementById("drum-machine").style.backgroundColor = "green";
    setTimeout(() => {
      document.body.style.backgroundColor = "black";
      document.getElementById("drum-machine").style.backgroundColor = "black";
    }, 100)
    const padID = document.getElementById(key.toUpperCase());
    
    this.setState({
      display: messages[key]
    })
    setTimeout(() => this.setState({
      display: ''
    }), 3000);
    
    padID.play();
    // console.log(key);
    padID.parentElement.classList.add('active');
    //this.activePad();
    setTimeout(() => {
      padID.parentElement.classList.remove('active')
    }, 100)
   
  }
  // this.activePad(), 200)
  render(){
    return (
      <div id="main">
        <h1>Drum Machine</h1>
        <div id="drum-machine">
          <div id="pads">
            <div className="row">
              <button className="drum-pad"  id='Heater-1' onClick={() => this.playSound("q")}>Q
                <audio src={sounds.q} id="Q" className='clip'></audio>
              </button>
              <button className="drum-pad"  id='Heater-2' onClick={() => this.playSound("w")}>W
                <audio src={sounds.w} id="W" className='clip'></audio>
              </button>
              <button className="drum-pad"  id='Heater-3' onClick={() => this.playSound("e")}>E
                <audio src={sounds.e} id="E" className='clip'></audio>
              </button>
            </div>
            <div className="row">
            <button className="drum-pad" id='Heater-4' onClick={() => this.playSound("a")}>A
                <audio src={sounds.a} id="A" className='clip'></audio>
              </button>
              <button className="drum-pad"  id='Heater-5' onClick={() => this.playSound("s")}>S
                <audio src={sounds.s} id="S" className='clip'></audio>
              </button>
              <button className="drum-pad"  id='Heater-6' onClick={() => this.playSound("d")}>D
                <audio src={sounds.d} id="D" className='clip'></audio>
              </button>
            </div>
            <div className="row">
            <button className="drum-pad"  id='Heater-6' onClick={() => this.playSound("z")}>Z
                <audio src={sounds.z} id="Z" className='clip'></audio>
              </button>
              <button className="drum-pad"  id='Heater-7' onClick={() => this.playSound("x")}>X
                <audio src={sounds.x} id="X" className='clip'></audio>
              </button>
              <button className="drum-pad" id='Heater-8' onClick={() => this.playSound("c")}>C
                <audio src={sounds.c} id="C" className='clip'></audio>
              </button>
            </div>
          </div>
          <div id="display">
            {this.state.display} 
          </div>    
          </div>
           <footer>
             <p>Carlos Correa &copy;</p>
           </footer>
      </div>
    )
  }
}

export default Drum;
