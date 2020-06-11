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
        let element = this.scrollboxRef.current;
        this.setState({
            top: (element.scrollTop === 0),
            bottom: (element.scrollHeight - element.scrollTop === element.clientHeight),
            left: (element.scrollLeft === 0),
            right: (element.scrollWidth - element.scrollLeft === element.clientWidth)
        });
    }

    getBoxShadow() {
        let boxShadow = [];
        let isEmpty = true;
        if (!this.state.top) {
            boxShadow.push("inset 0px 11px 8px -10px grey");
            isEmpty = false;
        }
        if (!this.state.bottom) {
            !isEmpty && boxShadow.push(",");
            boxShadow.push("inset 0px -11px 8px -10px grey");
            isEmpty = false;
        }
        if (!this.state.left) {
            !isEmpty && boxShadow.push(",");
            boxShadow.push("inset 11px 0px 8px -10px grey");
            isEmpty = false;
        }
        if (!this.state.left) {
            !isEmpty && boxShadow.push(",");
            boxShadow.push("inset -11px 0px 8px -10px grey");
            isEmpty = false;
        }
        return boxShadow.join("");
    }

    handleScroll(event) {
        let element = this.scrollboxRef.current;
        this.setState({
            top: (element.scrollTop === 0),
            bottom: (element.scrollHeight - element.scrollTop === element.clientHeight),
            left: (element.scrollLeft === 0),
            right: (element.scrollWidth - element.scrollLeft === element.clientWidth)
        });
        // let element = event.target;
        // this.setState({
        //     top: (element.scrollTop === 0),
        //     bottom: (element.scrollHeight - element.scrollTop === element.clientHeight),
        //     left: (element.scrollLeft === 0),
        //     right: (element.scrollWidth - element.scrollLeft === element.clientWidth)
        // });
        this.props.onScroll && this.props.onScroll();
    }

    render() {
        console.log(this.state);
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