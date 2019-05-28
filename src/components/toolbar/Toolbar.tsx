import * as React from 'react';
import { I18n } from 'react-i18nify';
import { MouseEventHandler } from 'react';

type Props = {
  saveOnClick?: MouseEventHandler;
  saveDisabled?: boolean;
  cancelOnClick?: MouseEventHandler;
  cancelDisabled?: boolean;
  deleteOnClick?: MouseEventHandler;
  deleteDisabled?: boolean;
  deleteHide?: boolean;
  md?: number;
};
const Toolbar = ({
  saveOnClick,
  saveDisabled,
  cancelOnClick,
  cancelDisabled,
  deleteOnClick,
  deleteDisabled,
  deleteHide,
  md
}: Props) => {
  return (
    <div className={'col-md-' + md} style={{ margin: 20 }}>
      {!deleteHide && (
        <button
          key="btn-delete"
          className="btn btn-outline-primary"
          disabled={deleteDisabled}
          onClick={deleteOnClick}
          style={{ marginRight: 55 }}
        >
          {I18n.t('dataCatalog.words.delete')}
        </button>
      )}

      <div style={{ float: 'right' }}>
        <button
          key="btn-cancel"
          className="btn btn-link"
          style={{ marginRight: 40 }}
          onClick={cancelOnClick}
          disabled={cancelDisabled}
        >
          {I18n.t('dataCatalog.words.cancel')}
        </button>
        <button
          key="btn-save"
          className="btn btn-outline-primary"
          disabled={saveDisabled}
          onClick={saveOnClick}
        >
          {I18n.t('dataCatalog.words.save')}
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
