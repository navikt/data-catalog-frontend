import * as React from 'react';
import { InformationTypeView } from './types';
import { I18n } from 'react-i18nify';
import Toolbar from '../../components/toolbar/Toolbar';
import PolicyComponent from './PolicyComponent';
import { toggleEditView } from './actions';
import { connect } from 'react-redux';

interface PropsFromDispatch {
  toggleEditView: typeof toggleEditView;
}

type Props = InformationTypeView & PropsFromDispatch;

class InformationTypeViewComponent extends React.Component<Props> {
  public render() {
    const getOptionField = (text: string, value: string, isEdit: boolean) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
        <div className="col-md-6">
          {isEdit ? (
            <select className="form-control" id={text}>
              <option>{value}</option>
            </select>
          ) : (
            ': ' + value
          )}
        </div>
      </div>
    );
    const getInputField = (text: string, value: string, isEdit: boolean) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
        <div className="col-md-6">
          {isEdit ? (
            <input type="text" className="form-control" id={text} value={value} />
          ) : (
            ': ' + value
          )}
        </div>
      </div>
    );
    const getTextAreaField = (text: string, value: string, isEdit: boolean) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-3">
          {I18n.t('dataCatalog.pages.mainPage.' + text + (isEdit ? '' : ' : '))}
        </div>
        <div className="col-md-9">
          {isEdit ? (
            <textarea className="form-control" id={text} rows={5}>
              {value}
            </textarea>
          ) : (
            value
          )}
        </div>
      </div>
    );
    return (
      <div
        style={{
          borderColor: 'lightblue',
          borderBlockWidth: '2px',
          borderStyle: 'solid'
        }}
      >
        {!this.props.isEdit && (
          <div className="row" style={{ margin: '20px 10px 10px 20px' }}>
            <button
              key="btn-edit"
              className="btn btn-primary"
              disabled={false}
              onClick={() => this.props.toggleEditView(this.props.informationTypeId)}
              title={
                1 === 1
                  ? I18n.t('dataCatalog.words.doNotHaveSufficientRole')
                  : I18n.t('dataCatalog.words.edit')
              }
            >
              {I18n.t('dataCatalog.words.edit')}
            </button>
          </div>
        )}

        {this.getInformationTypeComponent(
          getInputField,
          getOptionField,
          getTextAreaField
        )}

        <div
          className="row"
          style={{ margin: '20px 10px 10px 10px', backgroundColor: '#d4efdf' }}
        >
          <div className="col-12">
            <h5>{I18n.t('dataCatalog.pages.mainPage.policies')}</h5>
          </div>

          <div className="col-md-8 col-sm-12" />
          {this.props.isEdit && (
            <div className="col-md-2 col-6">
              <select id="selectPolicy" className="form-control">
                <option>Psys</option>
                <option>Arena</option>
              </select>
            </div>
          )}
          {this.props.isEdit && (
            <div className="col-md-2 col-6">
              <button
                key="btn-addSelected"
                className="btn btn-primary"
                disabled={false}
                onClick={e => e}
                title={
                  1 === 1
                    ? I18n.t('dataCatalog.words.doNotHaveSufficientRole')
                    : I18n.t('dataCatalog.words.addSelected')
                }
              >
                {I18n.t('dataCatalog.words.addSelected')}
              </button>
            </div>
          )}
        </div>
        <PolicyComponent policy={this.props.policy || []} isEdit={this.props.isEdit} />

        {this.props.isEdit && (
          <Toolbar
            cancelOnClick={() => this.props.toggleEditView(this.props.informationTypeId)}
          />
        )}
      </div>
    );
  }

  private getInformationTypeComponent(
    getInputField: Function,
    getOptionField: Function,
    getTextAreaField: Function
  ) {
    return (
      <div className="row" style={{ margin: '20px 10px 10px 10px' }}>
        <div className="col-md-6">
          {getInputField('name', this.props.name, this.props.isEdit)}
          {getOptionField('system', this.props.system, this.props.isEdit)}
          {getOptionField('producer', this.props.producer, this.props.isEdit)}
          {getOptionField('category', this.props.category, this.props.isEdit)}
          {getOptionField(
            'personalData',
            this.props.personalData
              ? I18n.t('dataCatalog.words.yes')
              : I18n.t('dataCatalog.words.no'),
            this.props.isEdit
          )}
        </div>

        <div className="col-md-6" style={{ backgroundColor: '#fef9e7' }}>
          <div className="row">
            <div className="col-md-4" style={{ fontSize: '20px', marginBottom: '10px' }}>
              {I18n.t('dataCatalog.pages.mainPage.businessGlossary')}
            </div>
          </div>
          {getTextAreaField('description', this.props.description, this.props.isEdit)}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleEditView: toggleEditView }
)(InformationTypeViewComponent);
