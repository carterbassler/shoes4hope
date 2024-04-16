import PageBackgroundImage from "@/components/PageBackgroundImage";
import about_background from "/public/about.jpg";
import NavBarBackground from "@/components/NavBarBackground";

export default function AboutPage() {
  return (
    <div>
      <NavBarBackground color="black" />
      <PageBackgroundImage
          image={about_background}
          description="Landing Background Image"
        />
    </div>
  );
}
