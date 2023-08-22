import Home from "./pages/home";
import NoteView from "./pages/note_view";

const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <NoteView />,
  },
];

export default routers;
