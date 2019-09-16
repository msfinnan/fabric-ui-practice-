import React from 'react';
import { ToggleComponent } from './Toggle';

export class App extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <ToggleComponent
          label="Test Toggle"
          inlineLabel={false}
          checked={true}
          onText="On"
          offText="Off" />
      </div>
    )
  };
};
