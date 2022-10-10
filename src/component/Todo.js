import React from "react";
import "./Todo.css";
export const Todo = (props) => {
    const {setUserName,Username,setSubmit,submit ,setCheck ,check} = props
    const submitForm = (e) => {
    e.preventDefault();
    setSubmit(Username);
    setUserName("")
    setCheck(true)
  };
  return (
    <div className="container">
      <form className="form" onSubmit={submitForm}>
        <h2>UserForm</h2>
        <div className="form-control">
          <label>กรอก ID</label>
          <input
            type="number"
            value={Username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="button">
         <button type="submit">ลงทะเบียน</button> 
        </div>
        
      </form>
    </div>
  );
};
