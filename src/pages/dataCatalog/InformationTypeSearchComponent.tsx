import * as React from 'react';
import { connect } from 'react-redux';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import { fetchData } from './actions';
import { push } from 'connected-react-router';
import { I18n } from 'react-i18nify';
import { FocusEventHandler } from 'react';
import { ChangeEventHandler } from 'react';

interface PropsFromState {
  field?: boolean;
}

interface PropsFromDispatch {
  fetchData: typeof fetchData;
  isPending: boolean;
  push?: typeof push;
}

type FormProps = PropsFromState & PropsFromDispatch;

interface FormValues {
  name: string;
  description: string;
  sourceOfRecord: string;
  personalData?: boolean;
  itSystem: string;
}

export class InformationTypeSearchComponentInner extends React.Component<
  InjectedFormikProps<FormProps, FormValues>
> {
  render() {
    const {
      values,
      // errors,
      //  touched,
      handleSubmit,
      handleChange,
      handleBlur,
      //   setFieldValue,
      handleReset
    } = this.props;

    const createField = (
      label: string,
      value: any,
      handleChange: ChangeEventHandler,
      handleBlur: FocusEventHandler
    ) => (
      <div className="form-group" style={{marginRight:"40px"}}>
        <div>{I18n.t('dataCatalog.pages.mainPage.' + label)}</div>
        <input
          name={label}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    );

    return (
      <form onSubmit={handleSubmit} style={{marginLeft:"20px"}}>
        <div className="row">
          {createField('name', values.name, handleChange, handleBlur)}
          {createField('description', values.description, handleChange, handleBlur)}
          {createField('sourceOfRecord', values.sourceOfRecord, handleChange, handleBlur)}
          <div className="form-group" style={{marginRight:"40px"}}>
            <div>{I18n.t('dataCatalog.pages.mainPage.personalData')}</div>
            <select
              className="form-control"
              id="personalData"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option />
              <option value="yes">{I18n.t('dataCatalog.words.yes')}</option>
              <option value="no">{I18n.t('dataCatalog.words.no')}</option>
            </select>
          </div>
          {createField('itSystem', values.itSystem, handleChange, handleBlur)}
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
            <button type="submit" className="btn btn-primary">{I18n.t('dataCatalog.words.search.search')}</button>
          </div>
          <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              {I18n.t('dataCatalog.words.search.reset')}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const InformationTypeSearchComponent = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({
    informationTypeId: '',
    name: '',
    description: '',
    sourceOfRecord: '',
    itSystem: ''
  }),
  handleSubmit: (values, { props }) => {
    props.fetchData(values);
  },
  validationSchema: Yup.object({
    name: Yup.string().test({
      name: 'name',
      exclusive: true,
      message: 'Must be less than 50 characters',
      test: value => value == null || value.length <= 50
    })
  })
})(InformationTypeSearchComponentInner);

export default connect(
  (state: any) => ({
    isPending: state.dataCatalog.pending
  }),
  { fetchData }
)(InformationTypeSearchComponent);
