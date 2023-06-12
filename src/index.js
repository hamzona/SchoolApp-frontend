import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./contexts/authContext";
import { ProfilPostsContextProvider } from "./contexts/profilPostsContext";
import { PostContextProvider } from "./contexts/postContext";
import { SinglePostProvider } from "./contexts/singlePostContext";
import { CommentContextProvider } from "./contexts/commentContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <ProfilPostsContextProvider>
          <SinglePostProvider>
            <CommentContextProvider>
              <App />
            </CommentContextProvider>
          </SinglePostProvider>
        </ProfilPostsContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
