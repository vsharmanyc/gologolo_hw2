import React, { Component } from 'react'
import { Modal, Button, Range } from 'react-materialize'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: "",
            isValidText: true,
            textColor: "",
            fontSize: "",
            backgroundColor: "",
            borderColor: "",
            borderRadius: "", 
            borderThickness: "",
            padding: "",
            margin: ""
        }
    }

    componentDidMount() {
        this.setState({ 
            text: this.props.logo.text, 
            textColor: this.props.logo.textColor,
            fontSize: this.props.logo.fontSize,
            backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor,
            borderRadius: this.props.logo.borderRadius, 
            borderThickness: this.props.logo.borderThickness,
            padding: this.props.logo.padding,
            margin: this.props.logo.margin});
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    stateTextIsValid() {
        return !this.state.text.match(/^\s*$/g);
    }

    handleEnterTextChange = (event) => {
        if (this.stateTextIsValid())
            this.completeUserEditing();
        else
            this.setState({ isValidText: false });
    }

    onTextChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onModalClose = () => {
        this.setState({ text: this.props.logo.text });
        this.setState({ isValidText: true });
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }

    handlePaddingChange = (event) => {
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }
    
    handleMarginChange = (event) => {
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor,
            this.state.borderColor, this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <Modal
                            header={this.state.isValidText ? "Change Text" : "Change Text Error"}
                            options={{ onCloseEnd: this.onModalClose }}
                            trigger={<button className="waves-effect waves-light btn-small">&#9998;</button>}>
                            {this.state.isValidText ?
                                (<p>
                                    <input type="text" defaultValue={this.state.text} value={this.state.text} onChange={this.onTextChange} />

                                    <Button
                                        node="a"
                                        waves="light"
                                        small
                                        style={{ marginRight: '5px' }}
                                        onClick={this.handleEnterTextChange}
                                        modal={!this.state.text.match(/^\s*$/g) ? "close" : ""}
                                    >Enter</Button>

                                    <Button
                                        node="a"
                                        waves="light"
                                        small
                                        style={{ marginRight: '5px' }}
                                        modal="close"
                                    >Cancel</Button>

                                </p>) : "Text cannot be an empty string"}
                        </Modal>

                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">

                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleTextColorChange}
                                    value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range min="4" max="144"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>

                        <span className="card-title">Background</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>

                        <span className="card-title">Border</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Radius:</div>
                            <div className="col s8">
                                <Range min="0" max="144"
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Thickness:</div>
                            <div className="col s8">
                                <Range min="0" max="144"
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range min="0" max="144"
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <Range min="0" max="144"
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar