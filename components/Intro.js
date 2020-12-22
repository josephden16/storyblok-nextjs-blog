import SbEditable from "storyblok-react";

const Intro = ({ blok }) => {
  const text = blok.textContent.content;
  return (
    <SbEditable content={blok}>
      {text.map((p, id) => (
        <div className="mt-4 mb-4" key={id}>
          {p.content[0].text}
        </div>
      ))}
    </SbEditable>
  );
};

export default Intro;
