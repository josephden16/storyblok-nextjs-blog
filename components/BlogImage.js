import SbEditable from "storyblok-react";

const BlogImage = ({ blok }) => {
  const url = blok.image.filename;
  return (
    <SbEditable content={blok}>
      <img src={url} alt="hello-world" />
    </SbEditable>
  );
};

export default BlogImage;
