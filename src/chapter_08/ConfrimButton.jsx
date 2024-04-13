import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirm: false,
        };

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.setState((prevState) => ({
            isConfirm: !prevState.isConfirm,
        }));
    }

    render(){
        return (
            <button
            onClick={this.handleConfirm}
            disabled={this.state.isConfirm}
            >
                {this.state.isConfirm ? "확인됨" : "확인하기"}
            </button>
        );
    }
}