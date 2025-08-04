import React from "react";

function FunnyComp() {
  return (
    <div
      className="flex items-center justify-center rounded-xl  p-4"
      style={{
        border: "0.88px solid",
        width: "500",
        height: "500",
        backdropFilter: "saturate(180%) blur(14px)",
        background: " #ffffff0d",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="400"
          height="400"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default FunnyComp;
