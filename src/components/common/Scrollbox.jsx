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

    getBoxShadow() {
        return (
            `inset 0px 11px 8px -10px ${!this.state.top ? "grey" : "transparent"},
            inset 0px -11px 8px -10px ${!this.state.bottom ? "grey" : "transparent"},
            inset 11px 0px 8px -10px ${!this.state.left ? "grey" : "transparent"},
            inset -11px 0px 8px -10px ${!this.state.right ? "grey" : "transparent"}`
        );
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
                className={this.props.className ? `scrollbox ${this.props.className}` : 'scrollbox'}
                style={{
                    boxShadow: this.getBoxShadow(),
                    ...this.props.style
                }}
                onScroll={(event) => this.handleScroll(event)}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Scrollbox;