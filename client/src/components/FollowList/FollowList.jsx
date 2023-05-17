import "./FollowList.css";
import axios from "axios";
import "./FollowList.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

function FollowList({
  userId,
  isCurrentUser,
  action,
  setShowFollowers,
  setShowFollowings,
}) {
  const navigate = useNavigate();

  const [follows, setFollows] = useState([]);

  useEffect(() => {
    if (action === "followers") {
      const getFollowersList = async () => {
        const { data } = await axios.get(`artist/followers/${userId}`);
        console.log(data);
        setFollows(data);
      };
      getFollowersList();
    } else {
      const getFollowingsList = async () => {
        const { data } = await axios.get(`artist/followings/${userId}`);
        setFollows(data);
      };
      getFollowingsList();
    }
  }, [action, userId]);

  const handleGoProfile = (id) => {
    setShowFollowers(false);
    setShowFollowings(false);
    navigate(`/profile/${id}`);
  };
  const handleOnClickClose = () => {
    setShowFollowers(false);
    setShowFollowings(false);
  };
  return (
    <div className="followListContainer">
      {/* <input type='text'/> */}
      <div
        className="listFollowList"
        style={{ maxHeight: "440px" }}
      >
        <button className="closeButton" onClick={handleOnClickClose}>
          <CancelIcon />
        </button>
        {follows?.map((f) => (
          <div
            className="contacfollowlist"
            onClick={() => handleGoProfile(f.id)}
          >
            <img className="followListImg" src={f.profilePhoto} alt="foto" />
            <span className="followListName">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowList;
