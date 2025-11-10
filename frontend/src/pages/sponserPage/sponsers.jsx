import React from "react";
import "./sponsers.css";

const Sponsers = () => {
  return (
    <div className="sponsers-container">
      <h1 className="sponsers-title">SPONSORS</h1>

      <div className="sponsers-grid">
        {/* 🔹 First row - 8 logos */}
        <div className="sponsers-row">
          <div className="sponser-logo"><img src="/sponsers/pepsi.png" alt="Pepsi" /></div>
          <div className="sponser-logo"><img src="/sponsers/sail.png" alt="Sail" /></div>
          <div className="sponser-logo"><img src="/sponsers/ncl.png" alt="NCL" /></div>
          <div className="sponser-logo"><img src="/sponsers/canarabank.png" alt="Canara Bank" /></div>
          <div className="sponser-logo"><img src="/sponsers/engineersparcel.png" alt="Engineers Parcel" /></div>
          <div className="sponser-logo"><img src="/sponsers/ongc.png" alt="ONGC" /></div>
          <div className="sponser-logo"><img src="/sponsers/skoda.png" alt="Skoda" /></div>
          <div className="sponser-logo"><img src="/sponsers/essar.png" alt="Essar" /></div>
        </div>

        {/* 🔹 Second row - 7 logos (slightly shifted down) */}
        <div className="sponsers-row offset">
          <div className="sponser-logo"><img src="/sponsers/essar.png" alt="Adani" /></div>
          <div className="sponser-logo"><img src="/sponsers/shell.png" alt="Airtel" /></div>
          <div className="sponser-logo"><img src="/sponsers/sbi.png" alt="Dominos" /></div>
          <div className="sponser-logo"><img src="/sponsers/redbull.png" alt="Reliance" /></div>
          <div className="sponser-logo"><img src="/sponsers/dominos.png" alt="Coca Cola" /></div>
          <div className="sponser-logo"><img src="/sponsers/coalindia.png" alt="Titan" /></div>
          <div className="sponser-logo"><img src="/sponsers/realme.png" alt="PNB" /></div>
        </div>
      </div>
      <div className="sponsers-row">
          <div className="sponser-logo"><img src="/sponsers/adani.png" alt="SBI" /></div>
          <div className="sponser-logo"><img src="/sponsers/jharkhandtourism.png" alt="Reliance Foundation" /></div>
          <div className="sponser-logo"><img src="/sponsers/ambujacement.png" alt="BOI" /></div>
          <div className="sponser-logo"><img src="/sponsers/powergrid.png" alt="MG" /></div>
          <div className="sponser-logo"><img src="/sponsers/canarabank2.png" alt="Indian Oil" /></div>
          <div className="sponser-logo"><img src="/sponsers/pnb.png" alt="Tata" /></div>
          <div className="sponser-logo"><img src="/sponsers/lenskart.png" alt="Essar" /></div>
          <div className="sponser-logo"><img src="/sponsers/sparx.png" alt="Skoda" /></div>
        </div>

        {/* 🔹 Row 4 - 7 logos (offset) */}
        <div className="sponsers-row offset">
          <div className="sponser-logo"><img src="/sponsers/cocacola.png" alt="ONGC" /></div>
          <div className="sponser-logo"><img src="/sponsers/tatasteel.png" alt="Airtel" /></div>
          <div className="sponser-logo"><img src="/sponsers/sbi.png" alt="Adani" /></div>
          <div className="sponser-logo"><img src="/sponsers/builders.png" alt="Titan" /></div>
          <div className="sponser-logo"><img src="/sponsers/titan.png" alt="Reliance" /></div>
          <div className="sponser-logo"><img src="/sponsers/bccl.png" alt="PNB" /></div>
          <div className="sponser-logo"><img src="/sponsers/oilindia.png" alt="Dominos" /></div>
        </div>

        {/* 🔹 Row 5 - 5 logos (centered bottom row) */}
        <div className="sponsers-row">
          <div className="sponser-logo"><img src="/sponsers/inshorts.png" alt="Reliance Foundation" /></div>
          <div className="sponser-logo"><img src="/sponsers/secl.png" alt="Indian Oil" /></div>
          <div className="sponser-logo"><img src="/sponsers/reliance.png" alt="Coca Cola" /></div>
          <div className="sponser-logo"><img src="/sponsers/gail.png" alt="MG" /></div>
          <div className="sponser-logo"><img src="/sponsers/mg.png" alt="BOI" /></div>
        </div>
      </div>
    
    
  );
};

export default Sponsers;
