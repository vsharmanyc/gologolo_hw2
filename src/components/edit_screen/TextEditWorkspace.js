import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius + "pt",
                borderWidth: this.props.logo.borderThickness + "pt",
                borderStyle: "solid",
                padding: this.props.logo.padding + "pt",
                margin: this.props.logo.margin + "pt",
                overflow: 'auto',
                position: 'absolute',
            }
        }
        return (
            <div className="col s8" style={{ overflow: 'auto' }}>
                <div style={styles.container}>
                    {this.props.logo.text.replace(/\s/g, '\u00A0')}
                </div>
            </div>
        )
    }
}

export default TextEditWorkspace