import * as React from 'react';
import { Policy } from './types';
import { createInputField } from './commonComponents';

export class PolicyComponent extends React.Component<Policy> {
  public render() {
    return (
      <div>
        <div className="col-6" style={{ marginLeft: '6px', marginRight: '6px' }}>
          {createInputField(
            'purposeCode',
            this.props.purpose.purposeCode || '',
            this.props.isEdit || false
          )}
        </div>
        <div className="col-6" style={{ marginLeft: '6px', marginRight: '6px' }}>
          {createInputField(
            'purposeDescription',
            this.props.purpose.description || '',
            this.props.isEdit || false
          )}
        </div>
        <div className="col-6" style={{ marginLeft: '6px', marginRight: '6px' }}>
          {createInputField(
            'legalBasis',
            this.props.legalBasisDescription || '',
            this.props.isEdit || false
          )}
        </div>
      </div>
    );
  }
}
