import React, {Component} from 'react'

import hoist from 'hoist-non-react-statics'

const contextify = (childContextTypes = {}, mapPropsToContext = () => ({})) => (WrappedComponent) => {

    class Contextify extends Component {

        getChildContext() {
            return mapPropsToContext(this.props)
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    Contextify.childContextTypes = childContextTypes

    return hoist(Contextify, WrappedComponent)
}

export default contextify