import React, {useState} from 'react';


const MemberForm = props => {
    const handleChanges = e =>{
        console.log(e.target);
 
        const [member, setMember] = useState({ name: "", email: "", position: "" });

        const handleChanges = e => {
          console.log(note);
          // console.log("the name", e.target.name)
          // console.log("the event target", e.target)
          //we are dynamically setting our keys.
          // setNote({ ...note, title: e.target.value });
          // setNote({ ...note, note: e.target.value });
          //  const nameObj={...note}
          //  nameObj[e.target.name]= e.target.value
          // setNote(nameObj)
          setNote({ ...note, [e.target.name]: e.target.value });
        };
      
        const submitForm = e => {
          e.preventDefault();
          props.addNewNote(note);
          setNote({ title: "", body: "" });
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
     <button type="submit">Add Note</button>
    </form>
  );
};
}
export default MemberForm;

{/*
<label htmlFor="name"  goes with id="name"

capture input - onChange={handleChanges}
*/}