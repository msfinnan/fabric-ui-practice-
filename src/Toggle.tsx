import { Toggle, DefaultButton } from "office-ui-fabric-react";
import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

interface ToggleProps {
    label: string;
    inlineLabel: boolean;
    onText: string;
    offText: string;
    checked: boolean;
}

@observer
export class ToggleComponent extends React.Component<ToggleProps, {}> {

    @observable private checked = this.props.checked;
    
    @action
    private onChange = () => {
        this.checked = !this.checked;
        console.log("toggle is " + (this.checked ? "on (checked)" : "off (not checked)"));
    }

    public render(): any {
        return (
            <div>
                <Toggle
                    label={this.props.label}
                    inlineLabel={this.props.inlineLabel}
                    onText={this.props.onText}
                    offText={this.props.offText}
                    onChange={this.onChange}
                    checked={this.checked}
                />
                <DefaultButton disabled={!this.checked}>Button disabled when toggle is off</DefaultButton>
            </div>
        )
    }
}