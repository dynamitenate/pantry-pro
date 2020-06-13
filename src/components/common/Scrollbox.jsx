import React from 'react';
import './Common.css';

class Scrollbox extends React.Component {
    constructor(props) {
        super(props);
        this.scrollboxRef = React.createRef();
        this.state = {
            top: true,
            bottom: true,
            left: true,
            right: true
        }
    }

    componentDidMount() {
        this.updateScrollState();
    }

    getClasses() {
        let classString = ["scrollbox "];
        if (!this.state.top) {
            classString.push("scrollbox-border-top ");
        }
        if (!this.state.bottom) {
            classString.push("scrollbox-border-bottom ");
        }
        if (!this.state.left) {
            classString.push("scrollbox-border-left ");
        }
        if (!this.state.right) {
            classString.push("scrollbox-border-right ");
        }
        classString.push(this.props.className ?? "");
        return classString.join("");
    }

    updateScrollState() {
        let element = this.scrollboxRef.current;
        this.setState({
            top: (element.scrollTop === 0),
            bottom: (element.scrollHeight - element.scrollTop === element.clientHeight),
            left: (element.scrollLeft === 0),
            right: (element.scrollWidth - element.scrollLeft === element.clientWidth)
        });
    }

    handleScroll(event) {
        this.updateScrollState();
        this.props.onScroll && this.props.onScroll(event);
    }

    render() {
        return (
            <div
                ref={this.scrollboxRef}
                className={this.getClasses()}
                style={this.props.style}
                onScroll={(event) => this.handleScroll(event)}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Scrollbox;