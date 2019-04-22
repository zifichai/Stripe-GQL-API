import * as React from 'react';

export interface IAppProps {
}

export default class PaidUsers extends React.PureComponent<IAppProps, any> {
  public render() {
    return (
      <div>
        Thanks for paying
      </div>
    );
  }
}
