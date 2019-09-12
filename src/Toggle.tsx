import { Toggle, DefaultButton } from "office-ui-fabric-react";
import * as React from 'react';

interface Props {
    label: string;
    onText: string;
    offText: string;
    checked: boolean; 
}

interface State {
    checked: boolean;
}

export class ToggleComponent extends React.Component<Props, State> {
   constructor(props: Props){
       super(props)
       this.state = {
           checked: this.props.checked
       }
   }



    private onChange = () => {
      
        this.setState(state => ({
            checked: !state.checked
        }));
        
        console.log('toggle is ' + (this.state.checked ? 'checked' : 'not checked'));
      }
    private showButton = (): boolean => {
        return !this.state.checked;
    }

    public render(): any {
        return (
            <div>
            <Toggle 
                label = {this.props.label}
                onText = {this.props.onText}
                offText = {this.props.offText}
                onChange = {this.onChange}
                checked = {this.state.checked}
            /> 
            <DefaultButton disabled={this.showButton()}>Disabled if toggle is off</DefaultButton>
            </div>
        )
    }
}