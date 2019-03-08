import * as React from 'react';
import MainView from './components/mainView/MainView';
import * as FontAwesome from 'react-fontawesome';
import MainPage from './pages/mainPage/MainPage';
import AccessPolicies from './pages/accessPolicies/AccessPolicies';
import Consumers from './pages/consumers/Consumers';
import DataCatalog from './pages/dataCatalog/DataCatalog';
import DataLineage from './pages/dataLineage/DataLineage';
import Producers from './pages/producers/Producers';
import Topics from './pages/topics/Topics';
import {BrowserRouter, Route, Link} from "react-router-dom";

class App extends React.Component {
  public render() {
    const makeNavigationItem = (
      text: string,
      pathRef: string,
      fontName: string,
      className: string
    ) => {
      return (
        <li className="nav-item">
          <Link className={className} to={pathRef}>
            <FontAwesome
              name={fontName}
              style={{
                fontSize: '1.5em',
                marginRight: '5px'
              }}
            />
            {text} <span className="sr-only">(current)</span>
          </Link>
        </li>
      );
    };

    return (
      <BrowserRouter>
        <MainView
          title={'DataNAV - Verktøy for data governance'}
          content={
              <div>
                  <Route  exact={true} path="/mainPage" component={MainPage}/>
                  <Route exact={true} path="/dataCatalog" component={DataCatalog}/>
                  <Route exact={true} path="/accessPolicies" component={AccessPolicies}/>
                  <Route exact={true} path="/topics" component={Topics}/>
                  <Route exact={true} path="/producers" component={Producers}/>
                  <Route exact={true} path="/consumers" component={Consumers}/>
                  <Route exact={true} path="/dataLineage" component={DataLineage}/>

              </div>     }
          leftMenu={
            <div>
              {makeNavigationItem('Main page', 'mainPage', 'home', 'nav-link active')}
              {makeNavigationItem('Data catalog', 'dataCatalog', 'clone', 'nav-link')}
              {makeNavigationItem('Access policies', 'accessPolicies', 'lock', 'nav-link')}
              {makeNavigationItem('Topics', 'topics', 'object-group', 'nav-link')}
              {makeNavigationItem('Producers', 'producers', 'pencil', 'nav-link')}
              {makeNavigationItem('Consumers', 'consumers', 'group', 'nav-link')}
              {makeNavigationItem('Data Lineage', 'dataLineage', 'crosshairs', 'nav-link')}
            </div>
          }
        />
      </BrowserRouter>
    );
  }
}

export default App;
