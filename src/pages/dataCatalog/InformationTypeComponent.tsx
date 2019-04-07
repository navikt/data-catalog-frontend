import * as React from 'react';
import { InformationType } from './types';
import { I18n } from 'react-i18nify';

type Props = InformationType;

export class InformationTypeComponent extends React.Component<Props> {
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
      <div>
        <div className="row" style={{ marginBottom: '50px' }}>
          <div className="col-md-6">
            {getOptionField('name', this.props.name)}
            {getOptionField('itSystem', this.props.itSystem)}
            {getInputField('sourceOfRecord', this.props.sourceOfRecord)}
            {getOptionField(
              'personalData',
              this.props.personalData
                ? I18n.t('dataCatalog.words.yes')
                : I18n.t('dataCatalog.words.no')
            )}
          </div>

          <div className="col-md-6" style={{ backgroundColor: 'white' }}>
            <div className="row">
              <div
                className="col-md-4"
                style={{ fontSize: '20px', marginBottom: '10px' }}
              >
                {I18n.t('dataCatalog.pages.mainPage.businessGlossary')}
              </div>
            </div>
            {getTextAreaField('description', this.props.description)}
          </div>
        </div>
      </div>
    );
  }
}
