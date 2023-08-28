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

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex social">
            <li className="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-muted"
                href="https://github.com/ofmukesh"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-muted"
                href="https://www.linkedin.com/in/ofmukesh/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-muted"
                href="https://twitter.com/of_mukesh"
              >
                <i className="fa-brands fa-square-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
