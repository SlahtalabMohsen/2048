import React from "react";
import ReactDOM from "react-dom/client";
import BoardView from "./components/Board";
import "./main.scss";
import "./styles.scss";

const App = () => {
    return <BoardView />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <h3>2048 React Game Project</h3>

        <audio controls="autoplay" src="https://vgmsite.com/soundtracks/2048-knight-android-game-music/akulbgus/2%20story.ogg"></audio>

        <App />

        <h6> Created by Mohsen Slahtalab  <a href="https://github.com/SlahtalabMohsen"> Follow me on Github</a></h6>

    </>

);




