import SbEditable from "storyblok-react";
import Lesson from "./Lesson";

const Lessons = ({ blok }) => {
  const lessons = blok.lesson;
  return (
    <SbEditable content={blok}>
      <div className="mt-3 mb-3">
        {lessons.map((lesson, id) => (
          <Lesson key={id} lesson={lesson} />
        ))}
      </div>
    </SbEditable>
  );
};

export default Lessons;
