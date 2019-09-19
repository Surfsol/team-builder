import React, { useState } from "react";


const MemberForm = props => {
    console.log(`should get addNewMember from Index`, props)
        const [member, setMember] = useState({ name: "", email: "", position: "" });

        const handleChanges = e => {
          console.log(member);
          // console.log("the name", e.target.name)
          // console.log("the event target", e.target)
          //we are dynamically setting our keys.
          // setMember({ ...member, title: e.target.value });
          // setNote({ ...note, note: e.target.value });
          //  const nameObj={...note}
          //  nameObj[e.target.name]= e.target.value
          // setNote(nameObj)
          setMember({ ...member, [e.target.name]: e.target.value });
        };
      
        const submitForm = e => { //put on form, below
          e.preventDefault(); //prevent form from page refresh
          props.addNewMember(member);
          setMember({ title: "", email: "", position: "" });
        };

return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label> 
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <label htmlFor="position">Position</label> 
      <input
        id="position"
        type="text"
        name="position"
        onChange={handleChanges}
        value={member.position}
      />
     <button type="submit">Add Shamer</button>
    </form>
  );
};

export default MemberForm;

{/*
<label htmlFor="name"  goes with id="name"

capture input - onChange={handleChanges}

initial state - { name: "", email: "", position: "" }
*/}