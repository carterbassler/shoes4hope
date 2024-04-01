import React from 'react'
import Image from "next/image";
import teams_background from "/public/teams_background.png"

type Props = {}

function teams({}: Props) {
  return (
      <Image
        src={teams_background}
        alt=""
        fill={true}
        style={{objectFit: 'cover', zIndex:-1}}
      />
  )
}

export default teams