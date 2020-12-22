import Teaser from "./Teaser";
import Feature from "./Feature";
import Placeholder from "./Placeholder";
import BlogImage from "./BlogImage";
import Intro from "./Intro";
import Lessons from "./Lessons";
import FootNote from "./FootNote";

const Components = {
  teaser: Teaser,
  feature: Feature,
  BlogImage: BlogImage,
  intro: Intro,
  lessons: Lessons,
  footNote: FootNote
};

const Component = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
