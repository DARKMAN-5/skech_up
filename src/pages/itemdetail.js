import React, { useState, useEffect } from "react";
import bck2 from "./Body/img/parag2.jpg";
import Modal from "../components/modal/modal";
import { useParams } from "react-router-dom";
var axios = require("axios");

function Itemdeatail(props) {
  let { handle } = useParams();
  let [itemUser, setItemUser] = useState();

  console.log(handle);
  // console.log(props.artwork._id);
  const singleArt = props.art.art.filter((item) => {
    return item._id === handle;
  });

  useEffect(() => {
    var config = {
      method: "get",
      url: `http://localhost:3000/user/details/${singleArt[0].user}`,
      headers: {},
    };

    const getItemUSer = async () => {
      const response = await axios(config);
      setItemUser(response.data);
    };

    getItemUSer();
  }, [singleArt]);

  // console.log(singleArt);

  const address = "http://localhost:3000";

  return (
    <>
      <div className="mainBody">
        <div className="item-detail-align">
          <img
            src={address + singleArt[0].path}
            alt="myname"
            className="item-detail-image"
          />
          <span className="item-detail-part2">
            <h2>{singleArt[0].name}</h2>
            <h6>Creater</h6>
            <div className="inner-item-detail-part2">
              <img src={bck2} alt="myname" className="item-user-profile" />
              {itemUser ? <h5>{itemUser.name}</h5> : null}
            </div>
            <h4>Detail</h4>
            <hr />
            <p className="item-info">{singleArt[0].description}</p>
            <div className="bottom-item-detail-part2">
              <div
                className={
                  props.user.name !== (itemUser ? itemUser.name : null) &&
                  props.user.name
                    ? "buy-button"
                    : "hidden-button"
                }
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Buy the Art
              </div>
              {/* <div className="offer-button">Make Offer</div> */}
              <Modal
                data={singleArt[0]}
                userName={itemUser ? itemUser.name : null}
              />
            </div>
          </span>
        </div>
      </div>
    </>
  );
}

export default Itemdeatail;
