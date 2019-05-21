import * as React from 'react';
import { InformationTypeView } from './types';
import { I18n } from 'react-i18nify';
import Toolbar from '../../components/toolbar/Toolbar';
import PolicyComponent from './PolicyComponent';

type Props = InformationTypeView;

export class InformationTypeViewComponent extends React.Component<Props> {
  public render() {
    const getOptionField = (text: string, value: string) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
        <div className="col-md-6">
          <select className="form-control" id={text}>
            <option>{value}</option>
          </select>
        </div>
      </div>
    );
    const getInputField = (text: string, value: string) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-4">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
        <div className="col-md-6">
          <input type="text" className="form-control" id={text} value={value} />
        </div>
      </div>
    );
    const getTextAreaField = (text: string, value: string) => (
      <div className="row" style={{ marginBottom: '10px' }}>
        <div className="col-md-3">{I18n.t('dataCatalog.pages.mainPage.' + text)}</div>
        <div className="col-md-9">
          <textarea className="form-control" id={text} rows={5}>
            {value}
          </textarea>
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
        <div className="row" style={{ margin: '20px 10px 10px 20px' }}>
          <button
            key="btn-edit"
            className="btn btn-primary"
            disabled={false}
            onClick={e => e}
            title={
              1 === 1
                ? I18n.t('dataCatalog.words.doNotHaveSufficientRole')
                : I18n.t('dataCatalog.words.edit')
            }
          >
            {I18n.t('dataCatalog.words.edit')}
          </button>
        </div>

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

          <div className="col-md-2 col-6">
            <select id="selectPolicy" className="form-control">
              <option>Psys</option>
              <option>Arena</option>
            </select>
          </div>
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
        </div>
        <PolicyComponent policy={this.props.policy || []} />

        <Toolbar />
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
          {getInputField('name', this.props.name)}
          {getOptionField('system', this.props.system ? this.props.system.code : '')}
          {getOptionField(
            'producer',
            this.props.producer ? this.props.producer.code : ''
          )}
          {getOptionField(
            'category',
            this.props.category ? this.props.category.code : ''
          )}
          {getOptionField(
            'personalData',
            this.props.personalData
              ? I18n.t('dataCatalog.words.yes')
              : I18n.t('dataCatalog.words.no')
          )}
        </div>

        <div className="col-md-6" style={{ backgroundColor: '#fef9e7' }}>
          <div className="row">
            <div className="col-md-4" style={{ fontSize: '20px', marginBottom: '10px' }}>
              {I18n.t('dataCatalog.pages.mainPage.businessGlossary')}
            </div>
          </div>
          {getTextAreaField('description', this.props.description)}
        </div>
      </div>
    );
  }
}
