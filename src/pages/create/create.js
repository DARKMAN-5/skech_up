import React, { Component } from "react";
import "./create.css";

class Create extends Component {
  render() {
    return (
      <div className="createBody">
        <h2>Create new Item</h2>
        <form action="" method="get" className="formlBody">
          <div className="form-ex2">
            <label htmlFor="uploaded file">Upload File </label>
            <br />
            <input
              type="file"
              name="myImage"
              accept="image/x-png,image/gif,image/jpeg"
              required
            />
          </div>
          <div className="form-ex">
            <label htmlFor="name">Name </label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <br />
          <div className="form-ex">
            <label htmlFor="description">Description </label>
            <br />
            <textarea
              className="decription-box"
              name="description"
              id=""
              rows="10"
            ></textarea>
          </div>
          <br />
          <div className="form-ex">
            <label htmlFor="price">Price </label>
            <br />
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-ex1">
            <input type="submit" value="Create Item" />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
