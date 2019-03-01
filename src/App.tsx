import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import * as FontAwesome from 'react-fontawesome';


class App extends React.Component {
  public render() {
  const  makeNavigationItem = ( text :string, pathRef:string, fontName:string, className :string) => {
          return <li className="nav-item">
              <a className={className} href={pathRef}>
                  <FontAwesome name={fontName}
                               style={{
                                   fontSize: '1.5em',
                                   marginRight: '5px'
                               }}/>
                  {text} <span className="sr-only">(current)</span>
              </a>
          </li>;
      };

    return (
      <div>

          <header className="App-header">

              <h1 className="App-title">DataNAV - Verktøy for data governance</h1>
          </header>

          {/*<p className="App-intro">
            Welcome to Data Catalog
        </p>*/}

          <div className="container-fluid">
              <div className="row">
                  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                      <div className="sidebar-sticky">
                          <ul className="nav flex-column">
                              {/*get icons from https://fontawesome.com/v4.7.0/icons/*/}
                              {makeNavigationItem("Main page", "#","home","nav-link active")}
                              {makeNavigationItem("Data catalog", "#","clone","nav-link")}
                              {makeNavigationItem("Access policies", "#","lock","nav-link")}
                              {makeNavigationItem("Topics", "#","object-group","nav-link")}
                              {makeNavigationItem("Producers", "#","pencil","nav-link")}
                              {makeNavigationItem("Consumers", "#","group","nav-link")}
                              {makeNavigationItem("Data Lineage", "#","crosshairs","nav-link")}
                          </ul>


                      </div>
                  </nav>

                  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                      <div
                          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                          <h1 className="h2">Data Catalog</h1>
                          <div className="btn-toolbar mb-2 mb-md-0">
                              <div className="btn-group mr-2">
                                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                              </div>
                              <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                  <span data-feather="calendar"/>
                                  This week
                              </button>
                          </div>
                      </div>


                      <h2>Section title</h2>
                      <div className="table-responsive">
                          <table className="table table-striped table-sm">
                              <thead>
                              <tr>
                                  <th>#</th>
                                  <th>Header</th>
                                  <th>Header</th>
                                  <th>Header</th>
                                  <th>Header</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>1,001</td>
                                  <td>Lorem</td>
                                  <td>ipsum</td>
                                  <td>dolor</td>
                                  <td>sit</td>
                              </tr>
                              <tr>
                                  <td>1,002</td>
                                  <td>amet</td>
                                  <td>consectetur</td>
                                  <td>adipiscing</td>
                                  <td>elit</td>
                              </tr>
                              <tr>
                                  <td>1,003</td>
                                  <td>Integer</td>
                                  <td>nec</td>
                                  <td>odio</td>
                                  <td>Praesent</td>
                              </tr>
                              <tr>
                                  <td>1,003</td>
                                  <td>libero</td>
                                  <td>Sed</td>
                                  <td>cursus</td>
                                  <td>ante</td>
                              </tr>
                              <tr>
                                  <td>1,004</td>
                                  <td>dapibus</td>
                                  <td>diam</td>
                                  <td>Sed</td>
                                  <td>nisi</td>
                              </tr>
                              <tr>
                                  <td>1,005</td>
                                  <td>Nulla</td>
                                  <td>quis</td>
                                  <td>sem</td>
                                  <td>at</td>
                              </tr>
                              <tr>
                                  <td>1,006</td>
                                  <td>nibh</td>
                                  <td>elementum</td>
                                  <td>imperdiet</td>
                                  <td>Duis</td>
                              </tr>
                              <tr>
                                  <td>1,007</td>
                                  <td>sagittis</td>
                                  <td>ipsum</td>
                                  <td>Praesent</td>
                                  <td>mauris</td>
                              </tr>
                              <tr>
                                  <td>1,008</td>
                                  <td>Fusce</td>
                                  <td>nec</td>
                                  <td>tellus</td>
                                  <td>sed</td>
                              </tr>
                              <tr>
                                  <td>1,009</td>
                                  <td>augue</td>
                                  <td>semper</td>
                                  <td>porta</td>
                                  <td>Mauris</td>
                              </tr>
                              <tr>
                                  <td>1,010</td>
                                  <td>massa</td>
                                  <td>Vestibulum</td>
                                  <td>lacinia</td>
                                  <td>arcu</td>
                              </tr>
                              <tr>
                                  <td>1,011</td>
                                  <td>eget</td>
                                  <td>nulla</td>
                                  <td>Class</td>
                                  <td>aptent</td>
                              </tr>
                              <tr>
                                  <td>1,012</td>
                                  <td>taciti</td>
                                  <td>sociosqu</td>
                                  <td>ad</td>
                                  <td>litora</td>
                              </tr>
                              <tr>
                                  <td>1,013</td>
                                  <td>torquent</td>
                                  <td>per</td>
                                  <td>conubia</td>
                                  <td>nostra</td>
                              </tr>
                              <tr>
                                  <td>1,014</td>
                                  <td>per</td>
                                  <td>inceptos</td>
                                  <td>himenaeos</td>
                                  <td>Curabitur</td>
                              </tr>
                              <tr>
                                  <td>1,015</td>
                                  <td>sodales</td>
                                  <td>ligula</td>
                                  <td>in</td>
                                  <td>libero</td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                  </main>
              </div>
          </div>
      </div>

    );
  }


}

export default App;
