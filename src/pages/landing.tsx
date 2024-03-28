import React from "react";

type Props = {};

function landing({}: Props) {
  return (
    <div
      className="bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}
    >
      <h1 className="text-black py-24">Landing Page</h1>
    </div>
  );
}

export default landing;
