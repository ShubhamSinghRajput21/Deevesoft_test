import React, { useEffect, useState } from "react";
import "../style/Landing.css";
import axios from "axios";

function Landing() {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [resname, setResname] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  // const [password,setPassword]=useState("");
  // const [password2,setPassword2]=useState("");

  useEffect(() => {}, [status, resname, error]);

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://petstore.swagger.io/v2/pet", {
        name: name,
        id: id,
      })
      .then((res) => {
        setStatus(res.status);
        setResname(res.data.name);
        console.log(res.status);
      })
      .catch((err) => {
        setError(err.message);
        setStatus("");
        setResname("");
        console.log(err.status);
      });
  };

  return (
    <div className="landing">
      <div className="landing__container">
        <form>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id=""
          />
          <h5>ID</h5>
          <input
            type="text"
            name="id"
            id=""
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div className="landing__containerInputs">
            <div>
              <h5>Password</h5>
              <input type="password" name="password" id="" />
            </div>
            <div className="landing__containerSubDiv">
              <h5>Password2</h5>
              <input type="password" name="password2" id="" />
            </div>
          </div>

          <button type="submit" onClick={submit} className="landing__submit">
            Submit
          </button>
        </form>
      </div>
      <h2>{!status ? "" : `Submit Successfull with status code :${status}`}</h2>
      <h2>{!resname ? "" : `Animal name is ${resname}`}</h2>
      <h2>{!error ? "" : error}</h2>
    </div>
  );
}

export default Landing;
