import React from "react";

const Member = props => {
  return (
    <div className="member-list">
      {props.member.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <email>{member.email}</email>
          <p>{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Member;