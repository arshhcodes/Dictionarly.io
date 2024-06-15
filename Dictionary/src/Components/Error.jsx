export default function Error() {
  const style = { fontSize: "100px" };
  return (
    <div className="flex items-center py-10 flex-col mt-20 gap-5">
      <span style={style}>&#128577;</span>
      <h2>No Definitions Found!</h2>
      <p>
        Sorry pal, we couldnot find definitions for the word you were looking
        for.
      </p>
    </div>
  );
}
