function Header() {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="$" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/onexez/react-shop/tree/master"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
