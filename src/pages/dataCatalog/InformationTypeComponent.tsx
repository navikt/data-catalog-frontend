import * as React from 'react';
import { InformationType } from './types';
import { I18n } from 'react-i18nify';
import Toolbar from '../../components/toolbar/Toolbar';

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
        <div
          className="row"
          style={{ margin: '20px 10px 10px 10px', backgroundColor: '#d4efdf' }}
        >
          <div className="col-12">
            <h5>{I18n.t('dataCatalog.pages.mainPage.Policies')}</h5>
          </div>

          <div className="col-md-9 col-sm-12">
            <button
              key="btn-add"
              className="btn btn-primary"
              disabled={false}
              onClick={e => e}
              title={
                1 === 1
                  ? I18n.t('dataCatalog.words.doNotHaveSufficientRole')
                  : I18n.t('dataCatalog.words.addNew')
              }
            >
              {I18n.t('dataCatalog.words.addNew')}
            </button>
          </div>
          <div className="col-md-2 col-6">
            <select id="selectPolicy" className="form-control">
              <option>Psys</option>
              <option>Arena</option>
            </select>
          </div>
          <div className="col-md-1 col-6">
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
          <table className="table table-responsive-sm table-striped">
            <thead>
              <tr>
                <th>{I18n.t('dataCatalog.pages.mainPage.itSystemOrConsumer')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.purpose')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.rightBasis')}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr key={1}>
                <td>Pesys</td>
                <td>PEN - Pensjon</td>
                <td>BLA BLA</td>
                <td>
                  <i className="fa fa-angle-right" />
                </td>
              </tr>
              <tr key={2}>
                <td>Arena</td>
                <td>AAP - Arbeidsavklaringspenger</td>
                <td>BLA BLA</td>
                <td>
                  <i className="fa fa-angle-right" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="row"
          style={{ margin: '20px 10px 10px 10px', backgroundColor: '#ebf5fb' }}
        >
          <h5>{I18n.t('dataCatalog.pages.mainPage.distributionMessage')}</h5>
          <hr style={{ height: '1px' }} />
          <table className="table table-responsive-sm table-striped">
            <thead>
              <tr>
                <th>{I18n.t('dataCatalog.pages.mainPage.itSystemOrConsumer')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.typeOfIntegration')}</th>
                <th>{I18n.t('dataCatalog.pages.mainPage.apiOrTopics')}</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr key={1}>
                <td>Pesys</td>
                <td>SOAP</td>
                <td>virksomhet:Person_v3</td>
                <td>
                  <i className="fa fa-angle-right" />
                </td>
              </tr>
              <tr key={2}>
                <td>Vedtakskomp</td>
                <td>Kafka</td>
                <td>BLA BLA</td>
                <td>
                  <i className="fa fa-angle-right" />
                </td>
              </tr>
              <tr key={3}>
                <td>Personopplysning</td>
                <td>REST</td>
                <td>hentPerson</td>
                <td>
                  <i className="fa fa-angle-right" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Toolbar />
      </div>
    );
  }
}
