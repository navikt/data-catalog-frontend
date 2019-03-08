import * as React from 'react';
import MainView from './components/mainView/MainView';
import * as FontAwesome from 'react-fontawesome';
import MainPage from './pages/mainPage/MainPage';

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
          <a className={className} href={pathRef}>
            <FontAwesome
              name={fontName}
              style={{
                fontSize: '1.5em',
                marginRight: '5px'
              }}
            />
            {text} <span className="sr-only">(current)</span>
          </a>
        </li>
      );
    };

    return (
      <div>
        <MainView
          title={'DataNAV - Verktøy for data governance'}
          content={<MainPage />}
          leftMenu={
            <div>
              {makeNavigationItem('Main page', '#', 'home', 'nav-link active')}
              {makeNavigationItem('Data catalog', '#', 'clone', 'nav-link')}
              {makeNavigationItem('Access policies', '#', 'lock', 'nav-link')}
              {makeNavigationItem('Topics', '#', 'object-group', 'nav-link')}
              {makeNavigationItem('Producers', '#', 'pencil', 'nav-link')}
              {makeNavigationItem('Consumers', '#', 'group', 'nav-link')}
              {makeNavigationItem('Data Lineage', '#', 'crosshairs', 'nav-link')}
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
