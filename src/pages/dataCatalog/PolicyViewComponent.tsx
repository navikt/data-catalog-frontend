import * as React from 'react';
import { Policy, PolicyResult } from './types';
import { I18n } from 'react-i18nify';
import { Column, Table } from '../../components/table/Table';
import {
  fetchPolicyForInformationType,
  toggleExpandRowPolicy,
  toggleEditView,
  addBlankPolicy
} from './actions';
import { memo } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import PolicyComponent from './PolicyComponent';
import { CodeListResult } from '../producers/types';

interface PropsFromComponent {
  pathName?: string;
  policy: PolicyResult;
  isEdit?: boolean;
  informationTypeId: number;
  codeListResult: CodeListResult;
}

interface PropsFromDispatch {
  fetchPolicyForInformationType: typeof fetchPolicyForInformationType;
  onToggleClick: typeof toggleExpandRowPolicy;
  toggleEditView: typeof toggleEditView;
  addBlankPolicy: typeof addBlankPolicy;
}

type Props = PropsFromComponent & PropsFromDispatch;

class PolicyViewComponent extends React.Component<Props> {
  public componentDidMount() {
    this.props.informationTypeId &&
      this.props.informationTypeId > 0 &&
      this.props.fetchPolicyForInformationType({}, this.props.informationTypeId);
  }

  public render() {
    const addIsEdit = (
      content: Policy[],
      isEdit: boolean,
      codeListResult: CodeListResult,
      informationTypeId: number,
      toggleEditView: Function
    ) =>
      content && content.length >= 0
        ? content.map((c: Policy) => {
            return { ...c, isEdit, codeListResult, informationTypeId, toggleEditView };
          })
        : [];
    return (
      <div className="row" style={{ marginLeft: '6px', marginRight: '6px' }}>
        <Table
          data={addIsEdit(
            get(this.props, ['policy', 'result', 'content']) || [],
            this.props.isEdit || false,
            this.props.codeListResult,
            this.props.informationTypeId,
            this.props.toggleEditView
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
          onAddClick={this.props.addBlankPolicy}
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

const CollapseComponent = memo(
  (
    props: Policy & {
      codeListResult: CodeListResult;
      informationTypeId: number;
      toggleEditView: Function;
    }
  ) => (
    <PolicyComponent
      {...props}
      codeListResult={props.codeListResult}
      informationTypeId={props.informationTypeId}
      toggleEditView={props.toggleEditView}
    />
  )
);

export default connect(
  null,
  {
    fetchPolicyForInformationType,
    onToggleClick: toggleExpandRowPolicy,
    toggleEditView: toggleEditView,
    addBlankPolicy: addBlankPolicy
  }
)(PolicyViewComponent);
