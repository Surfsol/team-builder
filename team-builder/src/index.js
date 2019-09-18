import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Member from "./components/member";
import MemberForm from "./components/memberForm";

function App() {
    const [member, setMember] = useState([
      {
        id: 1,
        name: 'Three Rivers',
        email: "waterboy@steelers.com",
        role: "Water Boy"
      }
    ]);
  
    return (
      <div className="App">
        <h1>Members List</h1>
        <MemberForm />
        <Member member={member} />
      </div>
    );
  }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
