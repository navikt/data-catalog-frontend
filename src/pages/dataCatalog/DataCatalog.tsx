import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from './actions';
import { DataValue, Data } from './types';
import { I18n } from 'react-i18nify';
import { Table, Column } from '../../components/table/Table';

interface PropsFromState {
  pathName?: string;
  data?: Data[];
}

interface PropsFromDispatch {
  getData: typeof getData;
}

type Props = PropsFromState & PropsFromDispatch;

class DataCatalog extends React.Component<Props> {
  public componentDidMount() {
    this.props.getData(DataValue.AllData);
  }

  public render() {
    const { data } = this.props;

    return (
      <div className="row" style={{ marginLeft: '6px' }}>
        <Table
          data={data || []}
          idKey="nodeId"
          collapseComponent={(val: any) => (
            <div>
              <th>{I18n.t('dataCatalog.pages.mainPage.name')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.description')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.category')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.ownership')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.personalData')}</th>
              <th>{I18n.t('dataCatalog.pages.mainPage.internalMaster')}</th>
            </div>
          )}
          onToggleClick={(val: any) => val}
          isLoading={true}
          currentPage={0}
          pageSize={6}
          totalElements={100}
          previousQuerySelector={(val: any) => val}
          searchAction={(val: any) => val}
        >
          <Column
            width="15%"
            header={I18n.t('dataCatalog.pages.mainPage.name')}
            path="name"
            sortable
          />
          <Column
            width="55%"
            header={I18n.t('dataCatalog.pages.mainPage.description')}
            path="description"
            sortable
          />
          <Column
            width="15%"
            header={I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}
            path="sourceOfRecord"
            contentTransformer={(val: any) => val}
            sortable
          />
          <Column
            width="15%"
            header={I18n.t('dataCatalog.pages.mainPage.itSystem')}
            path="itSystem"
            contentTransformer={(val: any) => val}
            sortable
          />
        </Table>
      </div>
    );
  }
}

export default connect(
  (state: any) => ({
    data: state.mainPage && state.mainPage.data && state.mainPage.data
  }),
  { getData }
)(DataCatalog);
