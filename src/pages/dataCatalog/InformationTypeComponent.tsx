import * as React from 'react';
import { InformationType } from './types';
import { I18n } from 'react-i18nify';

type Props = InformationType;

export class InformationTypeComponent extends React.Component<Props> {
  public render() {
    return (
      <div>

        <div className="row" style={{  marginBottom: '50px' }}>
          <div className="col-6">
            <div className="row">
              <div className="col-6">{I18n.t('dataCatalog.pages.mainPage.name')}</div>
              <div className="col-6">
                <select className="form-control">
                  <option>{this.props.name}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">{I18n.t('dataCatalog.pages.mainPage.itSystem')}</div>
              <div className="col-6">
                <select className="form-control">
                  <option>{this.props.itSystem}</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                {I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={this.props.sourceOfRecord}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                {I18n.t('dataCatalog.pages.mainPage.personalData')}
              </div>
              <div className="col-6">
                <select className="form-control">
                  <option>
                    {this.props.personalData
                      ? I18n.t('dataCatalog.words.yes')
                      : I18n.t('dataCatalog.words.no')}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-6" style={{ backgroundColor: 'white' }}>
            <div className="row">
              <h5>{I18n.t('dataCatalog.pages.mainPage.businessGlossary')}</h5>
            </div>

            <div className="row">
              <div className="col-3">
                {I18n.t('dataCatalog.pages.mainPage.description')}
              </div>
              <div className="col-9">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={4}
                >
                  {this.props.description}
                </textarea>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
