import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../pages/mainPage/actions';
import { DataValue, Data } from './types';
import { I18n } from 'react-i18nify';

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
    const { data } = this.props;

    return (
      <div className="row" style={{ marginLeft: '6px' }}>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>{I18n.t('dataCatalog.pages.mainPage.name')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.description')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.category')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.ownership')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.personalData')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.internalMaster')}</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(d => (
                  <tr key={d.name}>
                    <td>{d.name}</td>
                    <td>{d.description}</td>
                    <td>{d.category}</td>
                    <td>{d.ownership}</td>
                    <td>{d.sourceOfRecord}</td>
                    <td>{d.personalData ? 'True' : 'False'}</td>
                    <td>{d.internalMaster}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    data: state.mainPage && state.mainPage.data && state.mainPage.data
  }),
  { getData }
)(MainPage);
