import React, { useContext } from "react";
import Warning from "../warning/Warning";
import "./update.css";
// import { update, remove } from "../../redux/userSlice";
import { useSelector,useDispatch } from "react-redux";

import { useState } from "react";
import { updateUserx} from "../../redux/userSlice";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const {userInfo, pending, error} = useSelector((state)=>state.user);
  const dispatch = useDispatch();


  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateUserx({ name, email }));
  }

  const handleDelete = (e) =>{
    e.preventDefault();

  }

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>Delete Account</button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder ={userInfo.name}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder ={userInfo.email}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton"
              onClick = {handleUpdate}
              disabled={pending}
            >
              Update
            </button>
            {error && <span className="error">Something went wrong!</span>}
            {pending === false && <span className="success">Success!</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
