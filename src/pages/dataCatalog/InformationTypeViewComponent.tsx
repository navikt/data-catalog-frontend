import * as React from 'react';
import { InformationTypeView, PolicyResultDefaultValue } from './types';
import { I18n } from 'react-i18nify';
import Toolbar from '../../components/toolbar/Toolbar';
import PolicyViewComponent from './PolicyViewComponent';
import { toggleEditView, saveInformationType } from './actions';
import { connect } from 'react-redux';
import InformationTypeComponent from './InformationTypeComponent';

interface PropsFromDispatch {
  toggleEditView: typeof toggleEditView;
  saveInformationType: typeof saveInformationType;
}

type Props = InformationTypeView & PropsFromDispatch;

class InformationTypeViewComponent extends React.Component<Props> {
  public render() {
    return (
      <div
        style={{
          borderColor: 'blue',
          borderBlockWidth: '2px',
          borderStyle: 'solid'
        }}
      >
        <InformationTypeComponent {...this.props} />

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
            saveOnClick={e => {
              e.preventDefault();
              return this.props.saveInformationType({
                informationTypeId: this.props.informationTypeId,
                name: this.props.name,
                description: this.props.description
              });
            }}
          />
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { toggleEditView: toggleEditView, saveInformationType }
)(InformationTypeViewComponent);
