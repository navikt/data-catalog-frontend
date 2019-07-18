import { I18n } from 'react-i18nify';
import * as React from 'react';
import { ChangeEventHandler } from 'react';
import { FocusEventHandler } from 'react';
import { CodeList } from './types';
import Select from 'react-select';

function getLabel(description: string, code: string) {
  return description === code
    ? ': ' + description
    : ': ' + code ;
}

export const createOptionFieldBoolean = (
  text: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false,
  code?: boolean | string
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>

    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <select
          className="custom-select"
          id={text}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <option value={code ? 'true' : 'false'}>
            {code ? I18n.t('dataCatalog.words.yes') : I18n.t('dataCatalog.words.no')}
          </option>
          <option key={1} value="true">
            {I18n.t('dataCatalog.words.yes')}
          </option>
          <option key={0} value="false">
            {I18n.t('dataCatalog.words.no')}
          </option>
        </select>
      ) : code ? (
        ': ' + I18n.t('dataCatalog.words.yes')
      ) : (
        ': ' + I18n.t('dataCatalog.words.no')
      )}
    </div>
  </div>
);

export const createOptionField = (
  text: string,
  value: CodeList[] | undefined,
  data: CodeList[],
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false,
  index: number = 0,
  isMulti: boolean = false,
  setFieldValue?: any
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>

    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <Select
            getOptionLabel ={(option: any)=> option && option.value &&  option.label ? (option.value) : '' }
          id={text + '.code'}
          onChange={(option: any) =>
            setFieldValue &&
            setFieldValue(
              text,
              option
                ? isMulti
                  ? option.length > 0
                    ? option.map((o: any) => ({ code: o.value, description: o.label }))
                    : []
                  : { code: option.value, description: option.label }
                : []
            )
          }
          onBlur={handleBlur}
          options={data.map((d: CodeList) => ({ value: d.code, label: d.description }))}
          isMulti={isMulti}
          className="basic-multi-select"
          classNamePrefix="select"
          value={
            value && value.map((d: CodeList) => ({ value: d.code, label: d.description }))
          }
          defaultValue={
            value && value.map((d: CodeList) => ({ value: d.code, label: d.description }))
          }
          isClearable
        />
      ) : (
        value && value.map((v: CodeList) => <div title={v.description}>{getLabel(v.description, v.code)} </div>)
      )}
    </div>
  </div>
);

export const createInputField = (
  text: string,
  value: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div
      key={text + 'label'}
      className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}
    >
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div
      key={text + 'value'}
      className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}
    >
      {isEdit ? (
        <input
          type="text"
          className="form-control"
          key={text}
          id={text}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        ': ' + value
      )}
    </div>
  </div>
);
export const createTextAreaField = (
  text: string,
  value: string,
  handleChange: ChangeEventHandler,
  handleBlur: FocusEventHandler,
  isEdit: boolean = false
) => (
  <div key={text} className="row" style={{ marginBottom: '10px' }}>
    <div className={isEdit ? 'col-md-4 col-sm-12' : 'col-md-4 col-5'}>
      {I18n.t('dataCatalog.pages.mainPage.' + text)}
    </div>
    <div className={isEdit ? 'col-md-6 col-sm-12' : 'col-md-6 col-6'}>
      {isEdit ? (
        <textarea
          id={text}
          key={text}
          className="form-control"
          rows={5}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        (isEdit ? '' : ' : ') + value
      )}
    </div>
  </div>
);
