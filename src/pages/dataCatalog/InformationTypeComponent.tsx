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
import Toolbar from '../../components/toolbar/Toolbar';
import { get } from 'lodash';

class InformationTypeComponentInner extends React.Component<
  InjectedFormikProps<
    InformationType & {
      codeListResult: CodeListResult;
      toggleEditView: Function;
      saveInformationType: Function;
    },
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
      handleBlur,
      setFieldValue
      //handleReset
    } = this.props;
    return (
      <div
        className="container"
        id={this.props.name}
        key={this.props.informationTypeId}
        style={{ margin: '20px 10px 10px 10px' }}
      >
        <div key={'part one'} className="row">
          <div className="col-md-12">
            {createInputField(
              'name',
              values.name,
              handleChange,
              handleBlur,
              this.props.isEdit
            )}
            {createOptionField(
              'system',
              values.system && [values.system],
              this.props.codeListResult.system || [],
              handleChange,
              handleBlur,
              this.props.isEdit,
              0,
              false,
              setFieldValue
            )}
            {createOptionField(
              'producer',
              values.producer,
              this.props.codeListResult.producer || [],
              handleChange,
              handleBlur,
              this.props.isEdit,
              1,
              true,
              setFieldValue
            )}
            {createOptionField(
              'category',
              values.category && [values.category],
              this.props.codeListResult.category || [],
              handleChange,
              handleBlur,
              this.props.isEdit,
              0,
              false,
              setFieldValue
            )}
            {/*{JSON.stringify(values.personalData)}*/}
            {createOptionField(
              'personalData',
              values.personalData === null
                ? undefined
                : [
                    {
                      code: values.personalData
                        ? I18n.t('dataCatalog.words.yes')
                        : I18n.t('dataCatalog.words.no'),
                      description: values.personalData
                        ? I18n.t('dataCatalog.words.yes')
                        : I18n.t('dataCatalog.words.no')
                    }
                  ],
              [
                {
                  code: I18n.t('dataCatalog.words.yes'),
                  description: I18n.t('dataCatalog.words.yes')
                },
                {
                  code: I18n.t('dataCatalog.words.no'),
                  description: I18n.t('dataCatalog.words.no')
                }
              ],
              handleChange,
              handleBlur,
              this.props.isEdit,
              0,
              false,
              setFieldValue
            )}
          </div>
        </div>
        <div key={'part two'} className="row">
          <div className="col-md-12">
            <div className="row">
              <div
                className="col-md-4"
                style={{ fontSize: '20px', marginBottom: '10px' }}
              >
                {I18n.t('dataCatalog.pages.mainPage.businessGlossary')}
              </div>
            </div>
            {createTextAreaField(
              'description',
              values.description,
              handleChange,
              handleBlur,
              this.props.isEdit
            )}
          </div>
        </div>
        {this.props.isEdit && (
          <Toolbar
            cancelOnClick={() => this.props.toggleEditView(this.props.informationTypeId)}
            saveOnClick={e => {
              e.preventDefault();
              return this.props.saveInformationType({
                informationTypeId: values.informationTypeId,
                name: values.name,
                description: values.description,
                system: {
                  code: values.system && values.system.code,
                  description:
                    this.props.codeListResult.system &&
                    values.system &&
                    values.system.code
                      ? get(
                          this.props.codeListResult.system.find(
                            p =>
                              p.code.toUpperCase() ===
                              (values.system && values.system.code.toUpperCase())
                          ),
                          'description'
                        )
                      : values.system && values.system.description
                },
                producer: values.producer,
                category: {
                  code: values.category && values.category.code,
                  description:
                    this.props.codeListResult.category &&
                    values.category &&
                    values.category.code
                      ? get(
                          this.props.codeListResult.category.find(
                            p =>
                              p.code.toUpperCase() ===
                              (values.category && values.category.code.toUpperCase())
                          ),
                          'description'
                        )
                      : values.category && values.category.description
                },
                personalData:
                  values.personalData !== null
                    ? values.personalData
                      ? true
                      : false
                    : null
              });
            }}
          />
        )}
      </div>
    );
  }
}

const InformationTypeComponent = withFormik<
  InformationType & { codeListResult: CodeListResult; saveInformationType: Function },
  InformationType
>({
  mapPropsToValues: (props: InformationType) => ({
    system: {
      code: (props.system && props.system.code) || '',
      description: (props.system && props.system.description) || ''
    },
    producer: props.producer,
    category: {
      code: (props.category && props.category.code) || '',
      description: (props.category && props.category.description) || ''
    },
    name: props.name || '',
    description: props.description || '',
    personalData: props.personalData || false,
    informationTypeId: props.informationTypeId
  }),
  handleSubmit: (values, { props }) => {
    props.saveInformationType({
      informationTypeId: values.informationTypeId,
      name: values.name,
      description: values.description,
      system: values.system,
      producer: values.producer,
      category: values.category,
      personalData: values.personalData
    });
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
