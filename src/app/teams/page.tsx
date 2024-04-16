import React from 'react'
import Image from "next/image";
import teams_background from "/public/teams_background.png"
import PageBackgroundImage from '@/components/PageBackgroundImage';

export default function TeamsPage() {
  return (
    <div className="overflow-y-scroll overscroll-none">
      <PageBackgroundImage
        image={teams_background}
        description="Teams Background Image"
      />
    </div>
  );
}
