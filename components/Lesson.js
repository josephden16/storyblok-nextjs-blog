const Lesson = (props) => {
  const lesson = props.lesson;
  const content = lesson.body;
  const title = lesson.title;

  return (
    <div className="mt-5 mb-5">
      <h1 className="font-bold">{title}</h1>
      <p>{content}</p>
    </div>
  );
};
export default Lesson;
