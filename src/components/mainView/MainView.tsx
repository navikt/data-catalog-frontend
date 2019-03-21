import * as React from 'react';
import * as $ from 'jquery';
import { I18n } from 'react-i18nify';
import { connect } from 'react-redux';

interface Props {
  leftMenu?: object;
  content: object;
  pathName?: string;
}

// Toggle the side navigation
const sidebarToggle = (e: any) => {
  e.preventDefault();
  $('body').toggleClass('sidebar-toggled');
  $('.sidebar').toggleClass('toggled');
};

class MainView extends React.Component<Props> {
  public render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <a className="navbar-brand mr-1" href="/">
            <div> {I18n.t('dataCatalog.words.titleDataNAV')} </div>
            <div style={{ fontSize: '12px' }}>
              {' '}
              {I18n.t('dataCatalog.words.titleDataGovernanceTools')}{' '}
            </div>
          </a>

          <button
            className="btn btn-link btn-sm text-white order-1 order-sm-0"
            id="sidebarToggle"
            onClick={sidebarToggle}
          >
            <i className="fa fa-bars" />
          </button>

          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-envelope fa-fw" />
                <span className="badge badge-danger">7</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="messagesDropdown"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user-circle fa-fw" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>

          {/*

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
*/}
        </nav>
        <div id="wrapper">
          <ul className="sidebar navbar-nav">
            {this.props.leftMenu}
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fa fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-folder" />
                <span>Pages</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <h6 className="dropdown-header">Login Screens:</h6>
                <a className="dropdown-item" href="login.html">
                  Login
                </a>
                <a className="dropdown-item" href="register.html">
                  Register
                </a>
                <a className="dropdown-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div className="dropdown-divider" />
                <h6 className="dropdown-header">Other Pages:</h6>
                <a className="dropdown-item" href="404.html">
                  404 Page
                </a>
                <a className="dropdown-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </li>
          </ul>

          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">{I18n.t('dataCatalog.words.home')}</a>
                </li>
                <li className="breadcrumb-item active">{this.PageName()}</li>
              </ol>

              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-lock" />
                      </div>
                      <div className="mr-5">
                        {'29000 ' +
                          I18n.t('dataCatalog.pages.accessPolicies.accessPolicies') +
                          '!'}
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="accessPolicies"
                    >
                      <span className="float-left">
                        {I18n.t('dataCatalog.words.viewDetails')}
                      </span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-object-group" />
                      </div>
                      <div className="mr-5">
                        {'7890 ' + I18n.t('dataCatalog.pages.topics.topics') + '!'}
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="topics"
                    >
                      <span className="float-left">
                        {I18n.t('dataCatalog.words.viewDetails')}
                      </span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-success o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-pencil" />
                      </div>
                      <div className="mr-5">
                        {'4490 ' + I18n.t('dataCatalog.pages.producers.producers') + '!'}
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="producers"
                    >
                      <span className="float-left">
                        {I18n.t('dataCatalog.words.viewDetails')}
                      </span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-danger o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fa fa-fw fa-group" />
                      </div>
                      <div className="mr-5">
                        {'2490 ' + I18n.t('dataCatalog.pages.consumers.consumers') + '!'}
                      </div>
                    </div>
                    <a
                      className="card-footer text-white clearfix small z-1"
                      href="consumers"
                    >
                      <span className="float-left">
                        {I18n.t('dataCatalog.words.viewDetails')}
                      </span>
                      <span className="float-right">
                        <i className="fa fa-angle-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">{this.PageName()}</div>
                <div className="card-body">{this.props.content}</div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>

            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <div>Created by NAV IT - Licenced under GPL</div>
                  <span>Version: 0.2</span>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fa-angle-up" />
        </a>

        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current session.
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private PageName() {
    return (
      this.props.pathName &&
      I18n.t(
        'dataCatalog.pages.' +
          this.props.pathName.slice(1) +
          '.' +
          this.props.pathName.slice(1)
      )
    );
  }
}

export default connect((state: any) => ({
  pathName: state.router.location.pathname
}))(MainView);
