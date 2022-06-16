import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui animated fade button" tabindex="0">
              <div className="visible content">Accept</div>
              <div className="hidden content">
                <i class="check icon"></i>
              </div>
            </div>
            <div class="ui animated fade button" tabindex="0">
              <div class="visible content">Reject</div>
              <div class="hidden content">
                <i class="close icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
