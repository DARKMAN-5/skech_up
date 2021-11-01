import React, { useState } from "react";
import axios from "axios";
import formData from "form-data";
import "./create.css";

function Create() {
  const [inputitem, setInputitem] = useState({
    myImage: null,
    name: "",
    description: "",
    price: 0,
  });

  function SubmitItem(event) {
    event.preventDefault();
    const data = new formData();
    data.append("image", inputitem.myImage);
    data.append("name", inputitem.name);
    data.append("description", inputitem.description);
    data.append("price", inputitem.price);

    var config = {
      method: "post",
      url: "http://localhost:3000/files/upload",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setInputitem({
          myImage: null,
          name: "",
          description: "",
          price: 0,
        });
        alert("Art is Submitted 🤩");
      })
      .catch(function (error) {
        console.log(error);
      });
    // link to backend here
  }

  function handleClick(event) {
    console.log(event);
    const { name, value, files } = event.target;
    if (name === "myImage") {
      setInputitem((prev) => {
        return {
          ...prev,
          [name]: files[0],
        };
      });
    } else {
      setInputitem((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }
  return (
    <div className="createBody">
      <h2>Create new Item</h2>
      <form onSubmit={SubmitItem} className="formlBody">
        <div className="form-ex">
          <label for="uploaded_file">Upload File </label>
          <br />
          <div className="input-group mb-3 ">
            <input
              type="file"
              className="form-control bg-dark"
              style={{ border: "1px solid black", color: "white" }}
              id="inputGroupFile02"
              name="myImage"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={handleClick}
              required
            />
          </div>
        </div>
        <div className="form-ex">
          <label for="name">Name </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleClick}
            value={inputitem.name}
            required
            placeholder="Item Name"
          />
        </div>
        <br />
        <div className="form-ex">
          <label for="description">Description </label>
          <br />
          <textarea
            className="decription-box"
            name="description"
            id=""
            rows="10"
            onChange={handleClick}
            value={inputitem.description}
            placeholder="Description of Your Item"
          ></textarea>
        </div>
        <br />
        <div className="form-ex">
          <label for="price">Price </label>
          <br />
          <input
            type="text"
            name="price"
            id="name"
            onChange={handleClick}
            value={inputitem.price}
            required
            placeholder="Enter Price"
          />
        </div>
        <div className="form-ex1">
          <input type="submit" value="Create Item" />
        </div>
      </form>
    </div>
  );
}

export default Create;
