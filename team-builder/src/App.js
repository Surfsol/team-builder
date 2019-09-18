import React, { useState } from 'react';
import './App.css';
import Members from "./components/member";
import MemberForm from "./components/memberForm";

function App() {
    const [members, setMembers] = useState([
      {
        id: 1,
        name: 'Three Rivers',
        email: "waterboy@steelers.com",
        position: "Water Boy"
      }
    ]);
    //need to pass this function to memberForm
    const addNewMember = member => { //member is parameter, not state
        const newMember = {
          id: Date.now(), //same as initial state, get unique id
          name: member.name,
          email: member.email,
          position: member.position
        };
        setMembers([...members, newMember]); //spread operator, ...
        //brings down multiple items from object above, makes copy of array, from line 10
      };

    return (
      <div className="App">
        <h1>Members List</h1>
        <MemberForm addNewMember={addNewMember} /> 
        <Members members={members} />
        console.log(members)
      </div>
    );
  }


export default App;

// <MemberForm addNewMember={addNewMember} /> pass function from parent to child