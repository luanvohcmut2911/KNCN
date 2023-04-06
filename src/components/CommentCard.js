import React from "react";
import { Comment, Icon } from "@ant-design/compatible";
import { Tooltip } from "antd";
import moment from "moment/moment";

const initValue = {
  likes: 0,
  dislikes: 0,
  action: null,
};

const reducer = (state, action) => {
  switch (action) {
    case "LIKED":
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: state.action ? state.dislikes - 1 : state.dislikes,
        action: "LIKED",
      };
    case "DISLIKED":
      return {
        ...state,
        likes: state.action ? state.likes - 1 : state.likes,
        dislikes: state.dislikes + 1,
        action: "DISLIKED",
      };
    default:
      return state;
  }
};

export default function CommentCard(props) {
  const [state, dispatch] = React.useReducer(reducer, initValue);

  const { author, avatar, content, datetime } = props;
  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <Icon
          type="like"
          theme={state.action === "LIKED" ? "filled" : "outlined"}
          onClick={() => {
            dispatch("LIKED");
          }}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{state.likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <Icon
          type="dislike"
          theme={state.action === "DISLIKED" ? "filled" : "outlined"}
          onClick={() => {
            dispatch("DISLIKED");
          }}
        />
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{state.dislikes}</span>
    </span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<div>{author}</div>}
      avatar={avatar}
      content={<p>{content}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{datetime}</span>
        </Tooltip>
      }
    ></Comment>
  );
}
