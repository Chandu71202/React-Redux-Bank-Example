import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  syncWithLocalStorage,
} from "../features/register/registerSlice";

export default function AllAccountNumbers() {
  let userArray = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userArray);
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);
  return (
    <div>
      <h2>Available Account Numbers</h2>
      {userArray.map((eachuser) => {
        return (
          <h1 key={userArray.indexOf(eachuser)}>{eachuser?.accountNumber}</h1>
        );
      })}
    </div>
  );
}
