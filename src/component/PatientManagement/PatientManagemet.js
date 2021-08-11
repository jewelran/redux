import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../reducer/patientReducer";

const PatientManagemet = () => {
  const userNameRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, patientState);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userNameRef.current.value) {
        dispatch({
            type: "ADD_PATIENT",
            name: userNameRef.current.value,
            id: state.patients.length + 1,
          });
    }
    else{
        alert("please enter your  names")
    }
    userNameRef.current.value = "";
  };
  return (
    <div>
      <h1>this is patient reducer :{state.patients.length}</h1>

      <form onSubmit={handleSubmit}>
        <input ref={userNameRef} />
      </form>
      {
          state.patients.map(patient => <div key ={patient.id}>{patient.name} <button onClick = {() => dispatch({type:"REMOVE_PATIENT", id: patient.id})}>Delete</button></div>)
      } 
    </div>
  );
};

export default PatientManagemet;
