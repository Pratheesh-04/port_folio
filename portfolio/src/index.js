import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// class StateManagement extends React.Component {
//   constructor () {
//   super ()
//     this.state = {year:""}
//   }
//   first = () => this.setState({year : "I am studying first year"})
//   second = () => this.setState({year : "I am studying second year"})
//   third = () => this.setState({year : "I am studying third year" }) 
//   final = () => this.setState({year : "I am studying final year" })

//   render() {
//     return(
//       <div id='main'>
//         <i><b><h1>This is full-stack !!</h1></b></i>
//         <i><h2>Pratheeshwaran S</h2></i>
//         <b><i><p>Artificial Intelligence and Data Science</p></i></b>
//         <b><i><p>{this.state.year}</p></i></b>
//         <div className='year'>
//           <button type='button' onClick={this.first} className='option'>In first year</button>
//           <button type='button' onClick={this.second} className='option'>In second year</button>
//           <button type='button' onClick={this.third} className='option'>In third year</button>
//           <button type='button' onClick={this.final} className='option'>In fourth year</button>
//         </div>
//       </div>  
//     );      
//   }
// }

// class StateManagement1 extends React.Component {
//   constructor () {
//   super ()
//     this.state = {page : ""}
//   }

//   printing = () => this.setState({page : window.print()})

//   render() {
//     return(
//       <button type='button' onClick={this.printing} className='print'>Print this page</button>  
//     );      
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateManagement /> */}
    <App />
    {/* <StateManagement1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
