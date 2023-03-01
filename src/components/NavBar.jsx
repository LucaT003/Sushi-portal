import '../style/NavBar.css';

export default function NavBar() {
    return(
        <nav class="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a id="section" className="nav-link active" aria-current="page" href="#">Home</a>
              <a id="section" className="nav-link" href="#">Features</a>
              <a id="section" className="nav-link" href="#">Pricing</a>
              <a id="section" className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
    )
}