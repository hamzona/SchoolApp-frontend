import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { usePostContext } from "../../hooks/usePostContext";
import useSinglePostContext from "../../hooks/useSinglePostContext";
import SinglePostCss from "../../styles/singlePostStil.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Like() {
  const { state } = useAuthContext();
  const { singlePost } = useSinglePostContext();
  const { dispatch } = usePostContext();
  const navigate = useNavigate();

  const [liked, setLiked] = useState(
    !state ? singlePost.likes.includes(state.user.name) : false
  );
  const [likes, setLikes] = useState(singlePost.likes.length);
  async function hendleLike() {
    console.log(!state);
    if (!state) return;
    const res = await fetch(
      `https://schoolb.onrender.com/api/posts/like/${singlePost._id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Berar ${state.user.token}`,
        },
        body: JSON.stringify({ userName: state.user.name }),
      }
    );
    const json = await res.json();
    if (res.ok) {
      setLiked((prev) => !prev);
      dispatch({ type: "like", payload: json });
      setLikes(json.likes.length);
    }
  }
  return (
    <div className={SinglePostCss.likeContainer}>
      <div className={SinglePostCss.likeNumber}>{likes}</div>
      <button
        className={SinglePostCss.likeButton}
        style={{ backgroundColor: liked ? "red" : "gray" }}
        onClick={() => (!state ? hendleLike() : navigate("/login"))}
      >
        Like
      </button>
    </div>
  );
}
