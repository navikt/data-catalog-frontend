import * as React from 'react';
import { Policy } from './types';
import { I18n } from 'react-i18nify';
import { Column, Table } from '../../components/table/Table';
import { fetchData, toggleExpandRowPolicy } from './actions';
import { memo } from 'react';
import { connect } from 'react-redux';

interface PropsFromState {
  pathName?: string;
  policy: Policy[];
  isEdit?: boolean;
}

interface PropsFromDispatch {
  fetchData?: typeof fetchData;
  onToggleClick: any;
  isPending?: boolean;
}

type Props = PropsFromState & PropsFromDispatch;

class PolicyComponent extends React.Component<Props> {
  public render() {
    const { policy } = this.props;
    return (
      <div className="row" style={{ marginLeft: '6px', marginRight: '6px' }}>
        <Table
          data={policy || []}
          idKey="policyId"
          collapseComponent={CollapseComponent}
          onToggleClick={this.props.onToggleClick(1)}
          isLoading={this.props.isPending ? this.props.isPending : true}
          currentPage={0}
          pageSize={0}
          totalElements={0}
          previousQuerySelector={(e: any) => e}
          searchAction={(e: any) => e}
          disabledPaginator={true}
          isEdit={this.props.isEdit}
        >
          <Column
            width="25%"
            header={I18n.t('dataCatalog.pages.mainPage.purposeDescription')}
            path="purpose.description"
            sortable
          />
          <Column
            width="25%"
            header={I18n.t('dataCatalog.pages.mainPage.legalBasis')}
            path="legalBasis.description"
            contentTransformer={(val: any) => val}
            sortable
          />
        </Table>
      </div>
    );
  }
}

const CollapseComponent = memo((props: any) => <div>HI</div>);

export default connect(
  null,
  { onToggleClick: toggleExpandRowPolicy }
)(PolicyComponent);
