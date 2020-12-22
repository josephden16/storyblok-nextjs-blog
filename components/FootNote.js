import SbEditable from "storyblok-react";

const FootNote = ({ blok }) => {
  const footNote = blok.text;
  return (
    <SbEditable content={blok}>
      <div>{footNote}</div>
    </SbEditable>
  );
};

export default FootNote;
