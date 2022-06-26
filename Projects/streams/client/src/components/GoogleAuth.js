import React, { useEffect, useRef, useState } from "react";

const GoogleAuth = () => {
  const [signedIn, setSignedIn] = useState(null);
  const auth = useRef("");

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
          setSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = () => {
    setSignedIn(auth.current.isSignedIn.get());
  };

  const renderAuthButton = () => {
    if (signedIn) {
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

export default GoogleAuth;
