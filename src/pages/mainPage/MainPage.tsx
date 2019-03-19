import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../pages/mainPage/actions';
import { DataValue, Data } from './types';

interface PropsFromState {
  pathName?: string;
  data?: Data[];
}

interface PropsFromDispatch {
  getData: typeof getData;
}

type Props = PropsFromState & PropsFromDispatch;

class MainPage extends React.Component<Props> {
  public componentDidMount() {
    this.props.getData(DataValue.AllData);
  }

  public render() {
    const { pathName, data } = this.props;

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {pathName && pathName.slice(1)}
            </li>
          </ol>
        </nav>

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Details</h1>
        </div>

        <div className="row" style={{ marginLeft: '6px' }}>
          <h2>The fundamentals</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>name</th>
                  <th>description</th>
                  <th>category</th>
                  <th>sensitivity</th>
                  <th>ownership</th>
                  <th>sourceOfRecord</th>
                  <th>qualityOfData</th>
                  <th>personalData</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(d => (
                    <tr key={d.name}>
                      <td>{d.name}</td>
                      <td>{d.description}</td>
                      <td>{d.category}</td>
                      <td>{d.sensitivity}</td>
                      <td>{d.ownership}</td>
                      <td>{d.sourceOfRecord}</td>
                      <td>{d.qualityOfData}</td>
                      <td>{d.personalData ? 'True' : 'False'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    pathName: state.router.location.pathname,
    data: state.mainPage && state.mainPage.data && state.mainPage.data
  }),
  { getData }
)(MainPage);
