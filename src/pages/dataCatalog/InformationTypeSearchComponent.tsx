import * as React from 'react';
import { connect } from 'react-redux';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import { fetchData } from './actions';
import { push } from 'connected-react-router';
import { I18n } from 'react-i18nify';
import { FocusEventHandler } from 'react';
import { ChangeEventHandler } from 'react';
import { InformationType } from './types';

interface PropsFromState {
  field?: boolean;
}

interface PropsFromDispatch {
  fetchData: typeof fetchData;
  isPending: boolean;
  push?: typeof push;
}

type FormProps = PropsFromState & PropsFromDispatch;

type FormValues = InformationType;

export class InformationTypeSearchComponentInner extends React.Component<
  InjectedFormikProps<FormProps, FormValues>
> {
  render() {
    const {
      values,
      // errors,
      // touched,
      handleSubmit,
      handleChange,
      handleBlur,
      //setFieldValue,
      handleReset
    } = this.props;

    const createField = (
      label: string,
      value: any,
      handleChange: ChangeEventHandler,
      handleBlur: FocusEventHandler,
      md: number
    ) => (
      <div className={`col-md-${md} col-sm-12`}>
        <label>{I18n.t('dataCatalog.pages.mainPage.' + label)}</label>
        <input
          name={label}
          id={label}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
      </div>
    );

    return (
      <form onSubmit={handleSubmit} style={{ marginLeft: '20px' }}>
        <div className="row">
          {createField('name', values.name, handleChange, handleBlur, 3)}
          {createField('description', values.description, handleChange, handleBlur, 3)}
          {createField(
            'producer',
            values.producer && values.producer.code,
            handleChange,
            handleBlur,
            2
          )}
          {createField('system', values.system, handleChange, handleBlur, 2)}
          <div className="form-group  col-md-2 col-sm-12">
            <label>{I18n.t('dataCatalog.pages.mainPage.personalData')}</label>
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
        </div>

        <div className="row">
          <div className="col-md-2 col-sm-6 col-6">
            <button type="submit" className="btn btn-primary">
              {I18n.t('dataCatalog.words.search.search')}
            </button>
          </div>
          <div className="col-md-2  col-sm-6 col-6">
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
    informationTypeId: -1,
    name: '',
    description: '',
    producer: undefined,
    system: undefined
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
