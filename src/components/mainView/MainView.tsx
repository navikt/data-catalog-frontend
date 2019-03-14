import * as React from 'react';

interface Props {
  title: any;
  leftMenu?: object;
  content: object;
}

export default class MainView extends React.Component<Props> {
  public render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-6 col-md-6 mr-0" href="#">
            {this.props.title}
          </a>
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <nav className="col-md-2 d-auto d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">{this.props.leftMenu}</ul>
              </div>
            </nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {this.props.content}
            </main>
          </div>

          <footer className=" col-md-2 fixed-bottom">
            <hr />
            <div style={{ fontSize: '12px' }}>Created by NAV IT - Licenced under GPL</div>
            <span style={{ fontSize: '12px' }}>Version: 0.2</span>
          </footer>
        </div>
      </div>
    );
  }
}
