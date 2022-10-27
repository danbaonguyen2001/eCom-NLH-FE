import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "341e504b9fcf1f00a2505a779a85b9159",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div>ChatBot</div>;
};

export default ChatBot;
