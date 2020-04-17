import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Clavier from './Clavier';
import React,{ useState } from 'react';


function App (){
  const [data, setData] = useState("");
  const calcBtns = [];
  [9,8,7,6,5,4,3,2,1,0,".","%"]. forEach(items =>{
    calcBtns.push(
      <button onClick = {e => {
        setData(data + e.target.value)
      }}

        value = {items}
        key = {items}>
          {items}
        </button>
    )
  })

    return(
      <div className="wrapper">
        <div className="show-input">{data}</div>
          <div className="digits flex">{calcBtns}</div>
          <div className="modifiers subgrid">
            <button onClick= {() => setData(data.substr(0, data.length - 1 ))}>
              Clear
            </button>
            <button onClick= {() => setData("")}>
              AC
            </button>
          </div>
          <div className="operation subgrid">
            <button onClick={e => setData(data + e.target.value)} value="+">
              +

            </button>
            <button onClick={e => setData(data + e.target.value)} value="-">
              -

            </button>
            <button onClick={e => setData(data + e.target.value)} value="*">
              *

            </button>
            <button onClick={e => setData(data + e.target.value)} value="/">
              /

            </button>
            <button onClick={e => {
              try{
                setData(
                  String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                    : String(eval(data))
                )
              }
              catch(err){
                console.log(err);
              }
            }}
            value="="
            
            >
              =
            </button>
          </div>
      </div>
    )
  }


export default App;