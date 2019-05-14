import * as React from 'react';
import { Policy } from './types';
import { I18n } from 'react-i18nify';
import { Column, Table } from '../../components/table/Table';
import { fetchData, toggleExpandRow } from './actions';
import { get } from 'lodash';

interface PropsFromState {
  pathName?: string;
  policy: Policy[];
}

interface PropsFromDispatch {
  fetchData?: typeof fetchData;
  onToggleClick?: typeof toggleExpandRow;
  isPending?: boolean;
}

type Props = PropsFromState & PropsFromDispatch;

export class PolicyComponent extends React.Component<Props> {
  public render() {
    const { policy } = this.props;
    return (
      <div className="row" style={{ marginLeft: '6px', marginRight: '6px' }}>
        <Table
          data={policy || []}
          idKey="informationTypeId"
          collapseComponent={<div>Hi</div>}
          onToggleClick={
            this.props.onToggleClick ? this.props.onToggleClick : (e: any) => e
          }
          isLoading={this.props.isPending ? this.props.isPending : true}
          currentPage={0}
          pageSize={0}
          totalElements={0}
          previousQuerySelector={(state: any) =>
            get(state, ['dataCatalog', 'previousQuery'])
          }
          searchAction={(query: any) => fetchData(query)}
          disabledPaginator={true}
        >
          <Column
            width="25%"
            header={I18n.t('dataCatalog.pages.mainPage.purposeCode')}
            path="purpose.purposeCode"
            sortable
          />
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
