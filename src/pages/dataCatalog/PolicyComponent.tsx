import * as React from 'react';
import { Policy } from './types';
import { createInputField, createOptionField } from './commonComponents';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';

class PolicyComponentInner extends React.Component<InjectedFormikProps<Policy, Policy>> {
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
      <div>
        <div
          className="col-md-6 col-sm-12"
          style={{ marginLeft: '6px', marginRight: '6px', marginTop: '12px' }}
        >
          {createOptionField(
            'purposeCode',
            values.purpose.code || '',
            this.props.isEdit || false
          )}
        </div>
        <div
          className="col-md-6 col-sm-12"
          style={{ marginLeft: '6px', marginRight: '6px' }}
        >
          {createInputField(
            'purposeDescription',
            values.purpose.description || '',
            handleChange,
            handleBlur,
            false
          )}
        </div>
        <div
          className="col-md-6 col-sm-12"
          style={{ marginLeft: '6px', marginRight: '6px' }}
        >
          {createInputField(
            'legalBasis',
            values.legalBasisDescription || '',
            handleChange,
            handleBlur,
            this.props.isEdit || false
          )}
        </div>
      </div>
    );
  }
}

const PolicyComponent = withFormik<Policy, Policy>({
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
