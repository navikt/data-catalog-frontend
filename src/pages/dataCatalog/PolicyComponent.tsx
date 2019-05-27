import * as React from 'react';
import { PolicyResult } from './types';
import { I18n } from 'react-i18nify';
import { Column, Table } from '../../components/table/Table';
import { fetchPolicyForInformationType, toggleExpandRowPolicy } from './actions';
import { memo } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

interface PropsFromState {
  pathName?: string;
  policy: PolicyResult;
  isEdit?: boolean;
  informationTypeId: number;
}

interface PropsFromDispatch {
  fetchPolicyForInformationType: typeof fetchPolicyForInformationType;
  onToggleClick: typeof toggleExpandRowPolicy;
}

type Props = PropsFromState & PropsFromDispatch;

class PolicyComponent extends React.Component<Props> {
  public componentDidMount() {
    this.props.fetchPolicyForInformationType({}, this.props.informationTypeId);
  }

  public render() {
    return (
      <div className="row" style={{ marginLeft: '6px', marginRight: '6px' }}>
        <Table
          data={get(this.props, ['policy', 'result', 'content']) || []}
          idKey="policyId"
          parentId={this.props.informationTypeId}
          collapseComponent={CollapseComponent}
          onToggleClick={this.props.onToggleClick}
          isLoading={this.props.policy.pending}
          currentPage={get(this.props, ['policy', 'result', 'currentPage'])}
          pageSize={get(this.props, ['policy', 'result', 'pageSize'])}
          totalElements={get(this.props, ['policy', 'result', 'totalElements'])}
          previousQuerySelector={(state: any) =>
            get(state, ['dataCatalog', 'previousQuery'])
          }
          searchAction={(query: any) =>
            fetchPolicyForInformationType(query, this.props.informationTypeId)
          }
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
  { fetchPolicyForInformationType, onToggleClick: toggleExpandRowPolicy }
)(PolicyComponent);
