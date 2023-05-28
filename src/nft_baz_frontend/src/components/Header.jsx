import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import logo from "../../assets/NFTBaz.png";

export const Header = () => {
    return (
        <div className="app-root-1">
            <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
                <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
                    <div className="header-left-4"></div>
                    <img className="header-logo-11" src={logo} alt="NFT Baz logo" />
                    <div className="header-empty-6"></div>
                    <div className="header-space-8"></div>
                    <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
                        Discover
                    </button>
                    <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
                        Minter
                    </button>
                    <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
                        My NFTs
                    </button>
                </div>
            </header>
        </div>
    );
};

