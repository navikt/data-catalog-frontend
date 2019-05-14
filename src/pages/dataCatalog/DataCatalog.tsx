import * as React from 'react';
import { memo } from 'react';
import { connect } from 'react-redux';
import { fetchData, toggleExpandRow } from './actions';
import { InformationType, Result } from './types';
import { I18n } from 'react-i18nify';
import { Table, Column } from '../../components/table/Table';
import { get } from 'lodash';
import { InformationTypeComponent } from './InformationTypeComponent';
import InformationTypeSearchComponent from './InformationTypeSearchComponent';

interface PropsFromState {
  pathName?: string;
  data: Result;
}

interface PropsFromDispatch {
  fetchData: typeof fetchData;
  onToggleClick: typeof toggleExpandRow;
  isPending: boolean;
}

type Props = PropsFromState & PropsFromDispatch;

class DataCatalog extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchData({});
  }

  public render() {
    const { data } = this.props;

    return (
      <div>
        <InformationTypeSearchComponent />
        <div className="row" style={{ marginLeft: '6px' }}>
          <Table
            data={(data && data.content) || []}
            idKey="informationTypeId"
            collapseComponent={CollapseComponent}
            onToggleClick={this.props.onToggleClick}
            isLoading={this.props.isPending}
            currentPage={this.props.data.currentPage}
            pageSize={this.props.data.pageSize}
            totalElements={this.props.data.totalElements}
            previousQuerySelector={(state: any) =>
              get(state, ['dataCatalog', 'previousQuery'])
            }
            searchAction={(query: any) => fetchData(query)}
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
              header={I18n.t('dataCatalog.pages.mainPage.producer')}
              path="producer.code"
              contentTransformer={(val: any) => val}
              sortable
            />
            <Column
              width="15%"
              header={I18n.t('dataCatalog.pages.mainPage.system')}
              path="system.code"
              contentTransformer={(val: any) => val}
              sortable
            />
          </Table>
        </div>
      </div>
    );
  }
}

const CollapseComponent = memo((props: InformationType) => (
  <InformationTypeComponent {...props} />
));

export default connect(
  (state: any) => ({
    data: state.dataCatalog.result,
    isPending: state.dataCatalog.pending
  }),
  { fetchData, onToggleClick: toggleExpandRow }
)(DataCatalog);
