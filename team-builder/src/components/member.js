import React from "react";

const Members = props => {
  return (
    <div>
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <email>{member.email}</email>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;