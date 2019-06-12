import * as React from 'react';
import { InformationType } from './types';
import {
  createInputField,
  createOptionField,
  createTextAreaField
} from './commonComponents';
import { I18n } from 'react-i18nify';
import { InjectedFormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import { CodeListResult } from '../producers/types';

class InformationTypeComponentInner extends React.Component<
  InjectedFormikProps<
    InformationType & { codeListResult: CodeListResult },
    InformationType
  >
> {
  public render() {
    const {
      values,
      // errors,
      // touched,
      //handleSubmit,
      handleChange,
      handleBlur
      //setFieldValue,
      //handleReset
    } = this.props;
    return (
      <div key={this.props.name} className="row" style={{ margin: '20px 10px 10px 10px' }}>
        <div className="col-md-6">
          {createInputField(
            'name',
            values.name,
            handleChange,
            handleBlur,
            this.props.isEdit
          )}
          {createOptionField(
            'system',
            values.system ? values.system.code : '',
            this.props.codeListResult.system || [],
            this.props.isEdit
          )}
          {createOptionField(
            'producer',
            values.producer ? values.producer.code : '',
            this.props.codeListResult.producer || [],
            this.props.isEdit
          )}
          {createOptionField(
            'category',
            values.category ? values.category.code : '',
            this.props.codeListResult.category || [],
            this.props.isEdit
          )}
          {createOptionField(
            'personalData',
            values.personalData
              ? I18n.t('dataCatalog.words.yes')
              : I18n.t('dataCatalog.words.no'),
            [
              { code: I18n.t('dataCatalog.words.yes'), description: 'yes' },
              { code: I18n.t('dataCatalog.words.no'), description: 'no' }
            ],
            this.props.isEdit
          )}
        </div>

        <div className="col-md-6" style={{ backgroundColor: '#fef9e7' }}>
          <div className="row">
            <div className="col-md-4" style={{ fontSize: '20px', marginBottom: '10px' }}>
              {I18n.t('dataCatalog.pages.mainPage.businessGlossary')}
            </div>
          </div>
          {createTextAreaField('description', values.description, this.props.isEdit)}
        </div>
      </div>
    );
  }
}

const InformationTypeComponent = withFormik<
  InformationType & { codeListResult: CodeListResult },
  InformationType
>({
  mapPropsToValues: (props: InformationType) => ({
    system: {
      code: (props.system && props.system.code) || '',
      description: (props.system && props.system.description) || ''
    },
    producer: {
      code: (props.producer && props.producer.code) || '',
      description: (props.producer && props.producer.description) || ''
    },
    category: {
      code: (props.category && props.category.code) || '',
      description: (props.category && props.category.description) || ''
    },
    name: props.name,
    description: props.description,
    informationTypeId: props.informationTypeId
  }),
  handleSubmit: (values, { props }) => {
    null;
  },
  validationSchema: Yup.object({
    name: Yup.string().test({
      name: 'legalBasisDescription',
      exclusive: true,
      message: 'Must be less than 500 characters',
      test: value => value == null || value.length <= 500
    })
  })
})(InformationTypeComponentInner);

export default InformationTypeComponent;
