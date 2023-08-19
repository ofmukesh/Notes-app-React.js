const NotesCard = (props) => {
  const { title, content, date, backgroundColor } = props.carddata;
  return (
    <div
      className="notes_card mt-2 py-2 px-3"
      style={{ backgroundColor: backgroundColor }}
    >
      <h4 className="notes_header">{title}</h4>
      <p className="notes_content">{content}</p>
      <div className="notes_footer row">
        <div className="date_updated col">{date}</div>
        <div className="col text-end">
          <button className="delete_btn btn btn-light text-danger btn-sm rounded-circle">
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
