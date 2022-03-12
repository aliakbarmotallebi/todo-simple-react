import React from "react";


const Person = ({firstName, lastName, age}) => {
  return (
    <div className="bg-gray-100">
      <p>{`${firstName}  ${lastName}`}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Person;
