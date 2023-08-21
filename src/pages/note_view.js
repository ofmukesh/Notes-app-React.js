const NoteView = () => {
  const { id } = useParams();
  const {
    data: note,
    error,
    loading,
  } = useNoteQuery({
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
    </div>
  );
};
