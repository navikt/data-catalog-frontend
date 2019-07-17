import * as React from 'react';
import { Policy } from './types';
import { createInputField, createOptionField } from './commonComponents';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import { CodeListResult } from '../producers/types';
import Toolbar from '../../components/toolbar/Toolbar';

class PolicyComponentInner extends React.Component<
  InjectedFormikProps<
    Policy & {
      codeListResult: CodeListResult;
      informationTypeId: number;
      toggleEditView: Function;
    },
    Policy
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
      <div>
        <div
          className="col-md-12 col-sm-12"
          style={{ marginLeft: '6px', marginRight: '6px', marginTop: '12px' }}
        >
            {JSON.stringify(values)}

                {createOptionField(
            'purpose',
            values.purpose && [values.purpose],
            (this.props.codeListResult && this.props.codeListResult.purpose) || [],
            handleChange,
            handleBlur,
            this.props.isEdit || false,
            0,
            false,
            setFieldValue
          )}
        </div>
        <div
          className="col-md-12 col-sm-12"
          style={{ marginLeft: '6px', marginRight: '6px' }}
        >
          {createInputField(
            'legalBasisDescription',
            values.legalBasisDescription || '',
            handleChange,
            handleBlur,
            this.props.isEdit || false
          )}
        </div>
        {this.props.isEdit && (
          <Toolbar
            cancelOnClick={() => this.props.toggleEditView(this.props.informationTypeId)}
            saveOnClick={e => {
              return e.preventDefault();
            }}
          />
        )}
      </div>
    );
  }
}

const PolicyComponent = withFormik<
  Policy & {
    codeListResult: CodeListResult;
    informationTypeId: number;
    toggleEditView: Function;
  },
  Policy
>({
  mapPropsToValues: (props: Policy) => ({
    purpose: {
      code: (props.purpose && props.purpose.code) || '',
      description: (props.purpose && props.purpose.description) || ''
    },
    legalBasisDescription: props.legalBasisDescription,
    policyId: props.policyId
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
})(PolicyComponentInner);

export default PolicyComponent;
