import React, { useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const auth = useRef("");

  const onAuthChange = useCallback(
    (isSignedIn) => {
      if (isSignedIn) {
        signIn(auth.current.currentUser.get().getId());
      } else {
        signOut();
      }
    },
    [signIn, signOut]
  );

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "795291887604-gqq0uae7fg3pfdr9f7ko12q11kac2lni.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "react streams",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, [onAuthChange]);

  const renderAuthButton = () => {
    if (isSignedIn) {
      return (
        <button
          onClick={() => {
            auth.current.signOut();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            auth.current.signIn();
          }}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
