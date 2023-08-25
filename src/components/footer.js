import Logo from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-2">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img src={Logo} alt="" width="25" height="25" />
            </a>
            <span className="mt-1 text-muted">© 2023 MarcoSys, Inc.</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <a href="/">1</a>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <a href="/">2</a>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  <a href="/">3</a>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
