import React from "react";

const withComponent = WrappedComponent => {
    class WithComponent extends React.Component{
        constructor(){
            super()
            this.state = {
                data: []
            }
        }

        componentDidMount(){
            const {dataSource, banner} = this.props
            fetch(dataSource)
            .then( res => res.json())
            .then( data => this.setState({data: banner ? data.results[Math.floor(Math.random() * 20 + 1)] : data.results  }))
        }

        render(){
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
    return WithComponent;
}

export default withComponent;