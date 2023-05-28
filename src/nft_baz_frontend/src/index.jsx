import { nft_baz_backend } from "../../declarations/nft_baz_backend";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./components/App";

const init=async () => {
    const root=ReactDOM.createRoot ( document.getElementById ( 'root' ) );
    root.render (
        <React.StrictMode>
                <App/>
        </React.StrictMode>
    );
};

init ();

