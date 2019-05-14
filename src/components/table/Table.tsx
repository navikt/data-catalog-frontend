import * as React from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import * as ReactLoader from 'react-loader';

import { Paginator } from './paginator/Paginator';
import { sortColumn } from '../../common/pagination/sortingAndPagingActions';

import './Table.css';
import { I18n } from 'react-i18nify';

interface TableComponentProps {
  data: any;
  idKey: any;
  collapseComponent?: any;
  onToggleClick: Function;
  isLoading: boolean;
  currentPage: any;
  pageSize: number;
  totalElements: number;
  onSortClick: Function;
  previousQuerySelector?: any;
  searchAction?: any;
  previousQuery?: any;
  children: any;
  className?: string;
  disabledPaginator?: boolean;
}

const TableComponent = ({
  data,
  idKey,
  collapseComponent,
  onToggleClick,
  isLoading,
  currentPage,
  pageSize,
  totalElements,
  onSortClick,
  previousQuerySelector,
  searchAction,
  previousQuery,
  children,
  className,
  disabledPaginator
}: TableComponentProps) => {
  //const tableClassName = 'Table' + (className ? (' ' + className) : '');
  const tableBodyClassName = 'Table-body' + (isLoading ? ' is-loading' : '');

  return (
    <>
      {isLoading && <ReactLoader loaded={isLoading} />}
      <div className="Table">
        <div className="Table-row header-row">
          {renderHeaders(children, previousQuery, onSortClick, !!collapseComponent)}
          <div className="Table-header" style={{ marginLeft: '2px' }}>
            <button
              key="btn-add"
              className="btn btn-primary"
              disabled={false}
              onClick={e => e}
              title={
                1 === 1
                  ? I18n.t('dataCatalog.words.doNotHaveSufficientRole')
                  : I18n.t('dataCatalog.words.add')
              }
            >
              {I18n.t('dataCatalog.words.add')}
            </button>
          </div>
        </div>
        <div className={tableBodyClassName}>
          {renderRows(data, idKey, collapseComponent, onToggleClick, children, isLoading)}
        </div>
      </div>
      {!disabledPaginator && (
        <Paginator
          currentPage={currentPage + 1}
          pageSize={pageSize}
          totalElements={totalElements}
          previousQuerySelector={previousQuerySelector}
          searchAction={searchAction}
        />
      )}
    </>
  );
};

interface ColumnProps {
  header: string;
  path: string;
  width: string;
  contentComponent?: any;
  contentTransformer?: Function;
  customSortPath?: any;
  keyId?: string;
  sortable?: boolean;
}

export const Column = ({
  header,
  path,
  width,
  contentComponent,
  contentTransformer,
  customSortPath,
  keyId
}: ColumnProps) => null;

const renderHeaders = (
  columns: any,
  previousQuery: any,
  onSortClick: Function,
  isCollapsible: boolean
) => (
  <>
    {columns.map((c: any) => {
      const style = { width: c.props.width ? c.props.width : '', marginRight: '10px' };
      if (c.props.sortable) {
        const previousSort = get(previousQuery, 'sort', ',').split(',');
        const sortPath = c.props.customSortPath ? c.props.customSortPath : c.props.path;
        const sortClass =
          'sort' + (sortPath === previousSort[0] ? ' ' + [previousSort[1]] : '');
        return (
          <div
            className="Table-header sortable"
            key={c.props.keyId || c.props.path}
            onKeyPress={() => onSortClick(sortPath)}
            onClick={() => onSortClick(sortPath)}
            style={style}
            tabIndex={0}
            role="button"
          >
            {c.props.header}
            <span className={sortClass} />
          </div>
        );
      } else {
        return (
          <div className="Table-header" key={c.props.keyId || c.props.path} style={style}>
            {c.props.header}
          </div>
        );
      }
    })}
    {isCollapsible && <div className="Row-toggle-header" />}
  </>
);

const renderRows = (
  data: any,
  idKey: string,
  CollapseComponent: any,
  onToggleClick: Function,
  columns: any,
  isLoading: boolean
) => {
  const isExpandable = !!CollapseComponent;
  const conditionalOnToggleClick = isExpandable
    ? (key: any) => {
        onToggleClick(key);
      }
    : (key: any) => {};

  if (!isLoading && (!data || data.length === 0)) {
    return <div className="Table-row no-result center-content">Ingen resultater</div>;
  }

  return (
    data &&
    data.length > 0 &&
    data.map((d: any) => {
      const rowClassName = 'Table-row' + (isExpandable ? ' expandable' : '');
      return (
        <div key={d[idKey]}>
          <div
            style={d.isOpen ? { backgroundColor: 'lightblue' } : {}}
            className={rowClassName}
            id={d[idKey]}
            onKeyPress={() => conditionalOnToggleClick(d[idKey])}
            onClick={() => conditionalOnToggleClick(d[idKey])}
            tabIndex={isExpandable ? 0 : undefined}
            role="button"
          >
            {columns.map((c: any) => {
              const style = {
                width: c.props.width ? c.props.width : ''
              };
              return (
                <Cell
                  key={c.props.keyId || c.props.path}
                  style={style}
                  rowData={d}
                  columnProps={c.props}
                />
              );
            })}
            {isExpandable && (
              <div className="Table-cell Row-toggle">
                <i className={d.isOpen ? 'fa fa-angle-up' : 'fa fa-angle-down'} />
              </div>
            )}
          </div>

          {isExpandable && d.isOpen && (
            <div className="collapse-content">
              <CollapseComponent {...d} />
            </div>
          )}
        </div>
      );
    })
  );
};

interface CellProps {
  rowData: any;
  columnProps: any;
  style: any;
}

const Cell = ({ rowData, columnProps, style }: CellProps) => {
  const Content = columnProps.contentComponent;
  if (Content) {
    return (
      <div style={style} className="Table-cell">
        <Content rowData={rowData} {...columnProps.contentProps} />
      </div>
    );
  }

  const cellData = get(rowData, columnProps.path);
  const transformer = columnProps.contentTransformer;
  return (
    <div style={style} className="Table-cell">
      {transformer ? transformer(cellData) : cellData}
    </div>
  );
};

interface Prop {
  previousQuerySelector: Function;
  searchAction: Function;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  disabledPaginator?: boolean;
}

export const Table = connect(
  (state, ownProps: Prop) => ({
    previousQuery: ownProps.previousQuerySelector(state)
  }),
  (dispatch, ownProps) => ({
    onSortClick: (column: any) =>
      dispatch(sortColumn(column, ownProps.searchAction, ownProps.previousQuerySelector))
  })
)(TableComponent);
