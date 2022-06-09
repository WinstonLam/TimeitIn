import React from "react";
import ReactDOM from "react-dom/client";
import style from "./style/App.css";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 3:00 PM"
          comment="Suck my dick"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Luke"
          date="Yesterday at 3:30 PM"
          comment="This video sucks"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sara"
          date="Yesterday at 2:00 PM"
          comment="ligma balls"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
