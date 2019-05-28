import * as React from 'react';
import { InformationTypeView, PolicyResultDefaultValue } from './types';
import { I18n } from 'react-i18nify';
import Toolbar from '../../components/toolbar/Toolbar';
import PolicyViewComponent from './PolicyViewComponent';
import { toggleEditView } from './actions';
import { connect } from 'react-redux';
import {
  createInputField,
  createOptionField,
  createTextAreaField
} from './commonComponents';

interface PropsFromDispatch {
  toggleEditView: typeof toggleEditView;
}

type Props = InformationTypeView & PropsFromDispatch;

class InformationTypeViewComponent extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          borderColor: 'lightblue',
          borderBlockWidth: '2px',
          borderStyle: 'solid'
        }}
      >
        {this.createInformationTypeComponent(
          createInputField,
          createOptionField,
          createTextAreaField
        )}

        <div className="row" style={{ margin: '20px 10px 10px 10px' }}>
          <div className="col-12">
            <h5>{I18n.t('dataCatalog.pages.mainPage.policies')}</h5>
          </div>

          <div className="col-md-8 col-sm-12" />
        </div>
        <PolicyViewComponent
          policy={this.props.policy || PolicyResultDefaultValue}
          isEdit={this.props.isEdit}
          informationTypeId={this.props.informationTypeId}
        />

        {this.props.isEdit && (
          <Toolbar
            cancelOnClick={() => this.props.toggleEditView(this.props.informationTypeId)}
          />
        )}
      </div>
    );
  }

  private createInformationTypeComponent(
    createInputField: Function,
    createOptionField: Function,
    createTextAreaField: Function
  ) {
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

export default connect(
  null,
  { toggleEditView: toggleEditView }
)(InformationTypeViewComponent);
