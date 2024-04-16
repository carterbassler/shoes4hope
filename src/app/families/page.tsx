import PageBackgroundImage from "@/components/PageBackgroundImage";
import Image from "next/image";
import family_background from "/public/families.jpg";

export default function FamiliesPage() {
  return (
    <div className="flex text-black">
      <PageBackgroundImage
          image={family_background}
          description="Landing Background Image"
        />
    </div>
  );
}
