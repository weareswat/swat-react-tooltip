import React from 'react';

export default class Tooltip extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tootltipVisible: false
        };
    }

    toggleTootltip(){
        if(!this.props.mode || this.props.mode === 'click'){
            this.setState({tootltipVisible: !this.state.tootltipVisible});
        }
    }

    showTootltip(){
        if(this.props.mode && this.props.mode === 'hover'){
            this.setState({tootltipVisible: true});
        }
    }
    hideTootltip(){
        if(this.props.mode && this.props.mode === 'hover'){
            this.setState({tootltipVisible: false});
        }
    }

    render () {
        return (
            <div className={this.props.className}>
                <div 
                    ref="target" 
                    onClick={this.toggleTootltip.bind(this)} 
                    onMouseEnter={this.showTootltip.bind(this)} 
                    onMouseLeave={this.hideTootltip.bind(this)} 
                    className="Tooltip-target"
                >
                    {this.props.children}
                </div>
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