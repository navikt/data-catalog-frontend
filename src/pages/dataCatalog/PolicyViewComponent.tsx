import * as React from 'react';
import { Policy, PolicyResult } from './types';
import { I18n } from 'react-i18nify';
import { Column, Table } from '../../components/table/Table';
import { fetchPolicyForInformationType, toggleExpandRowPolicy } from './actions';
import { memo } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { PolicyComponent } from './PolicyComponent';

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

class PolicyViewComponent extends React.Component<Props> {
  public componentDidMount() {
    this.props.informationTypeId &&
      this.props.informationTypeId > 0 &&
      this.props.fetchPolicyForInformationType({}, this.props.informationTypeId);
  }

  public render() {
    const addIsEdit = (content: Policy[], isEdit: boolean) =>
      content && content.length >= 0
        ? content.map((c: Policy) => {
            return { ...c, isEdit };
          })
        : [];
    return (
      <div className="row" style={{ marginLeft: '6px', marginRight: '6px' }}>
        <Table
          data={addIsEdit(
            get(this.props, ['policy', 'result', 'content']) || [],
            this.props.isEdit || false
          )}
          idKey="policyId"
          parentId={this.props.informationTypeId}
          collapseComponent={CollapseComponent}
          onToggleClick={this.props.onToggleClick}
          isLoading={this.props.policy.pending}
          currentPage={get(this.props, ['policy', 'result', 'currentPage'])}
          pageSize={get(this.props, ['policy', 'result', 'pageSize'])}
          totalElements={get(this.props, ['policy', 'result', 'totalElements'])}
          previousQuerySelector={(state: any) =>
            get(this.props, ['policy', 'previousQuery'])
          }
          searchAction={(query: any) =>
            fetchPolicyForInformationType(query, this.props.informationTypeId)
          }
          isEdit={this.props.isEdit}
          disabledEdit={true}
          onEditClick={(e: any) => e}
          onAddClick={this.props.onToggleClick}
        >
          <Column
            width="50%"
            header={I18n.t('dataCatalog.pages.mainPage.purposeDescription')}
            path="purpose.description"
            sortable
          />
          <Column
            width="50%"
            header={I18n.t('dataCatalog.pages.mainPage.legalBasis')}
            path="legalBasisDescription"
            contentTransformer={(val: any) => val}
            sortable
          />
        </Table>
      </div>
    );
  }
}

const CollapseComponent = memo((props: Policy) => <PolicyComponent {...props} />);

export default connect(
  null,
  { fetchPolicyForInformationType, onToggleClick: toggleExpandRowPolicy }
)(PolicyViewComponent);
