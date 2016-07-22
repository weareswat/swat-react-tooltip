import React from 'react';

export default class Tooltip extends React.Component {
    construct(props){
        super(props);

        this.state = {
            tootltipVisible: false
        };
    }

    componentDidMount(){
        this.props.refs.target.addEventListener('click', this.toggleTootltip);
    }
    componentDidUnMount(){
        this.props.refs.target.removeEventListener('click', this.toggleTootltip);
    }

    toggleTootltip(){
        this.setState({tootltipVisible: !this.state.tootltipVisible});
    }

    render () {
        return (
            <div className={this.props.className}>
                <div ref="target" className="Tooltip-target">{this.props.children}</div>
                <div 
                    className="Tooltip-content" 
                    style={{display:(this.state.tootltipVisible)?'block':'none'}}
                >
                    {this.props.content}
                </div>
            </div>
        );
    }
}