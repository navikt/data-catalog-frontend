import * as React from 'react';
import { connect } from 'react-redux';
import { withFormik, InjectedFormikProps } from 'formik';
import * as Yup from 'yup';
import { fetchData } from './actions';
import { push } from 'connected-react-router';
import { I18n } from 'react-i18nify';

interface PropsFromState {
  isDnr?: boolean;
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
      //   currentKjoenn,
      handleReset
    } = this.props;


    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
            {I18n.t('dataCatalog.pages.mainPage.name')}
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
                {I18n.t('dataCatalog.pages.mainPage.description')}
            <input
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
                {I18n.t('dataCatalog.pages.mainPage.sourceOfRecord')}
            <input
              name="sourceOfRecord"
              value={values.sourceOfRecord}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
                {I18n.t('dataCatalog.pages.mainPage.personalData')}
            <input
              name="personalData"
              value={values.personalData ? 'yes' : 'no'}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
                {I18n.t('dataCatalog.pages.mainPage.itSystem')}
            <input
              name="itSystem"
              value={values.itSystem}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>

          <div className="row">
            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
            <button type="submit">{I18n.t('dataCatalog.words.search.search')}</button>
          </div>
            <div className="col-md-2 col-sm-offset-4 col-sm-offset-8">
                <button type="button" onClick={handleReset}>
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
