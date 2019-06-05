import * as React from 'react';
import { InformationType } from './types';
import {
  createInputField,
  createOptionField,
  createTextAreaField
} from './commonComponents';
import { I18n } from 'react-i18nify';

export class InformationTypeComponent extends React.Component<InformationType> {
  public render() {
    return (
      <div className="row" style={{ margin: '20px 10px 10px 10px' }}>
        <div className="col-md-6">

          {createInputField('name', this.props.name, this.props.isEdit)}
          {createOptionField(
            'system',
            this.props.system ? this.props.system.code : '',
            this.props.isEdit
          )}
          {createOptionField(
            'producer',
            this.props.producer ? this.props.producer.code : '',
            this.props.isEdit
          )}
          {createOptionField(
            'category',
            this.props.category ? this.props.category.code : '',
            this.props.isEdit
          )}
          {createOptionField(
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
          {createTextAreaField('description', this.props.description, this.props.isEdit)}
        </div>
      </div>
    );
  }
}
