function Header() {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://onexez.github.io/react-shop/" target="_blank" rel="noreferrer">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
