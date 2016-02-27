import React, {Component, PropTypes} from 'react'

import TestUtils from 'react-addons-test-utils'

import contextify from '../src/contextify'
import expect from 'expect'

describe(`react-contextify`, () => {

    it(`should pass stateId into the context`, () => {
        const childContextTypes = {
            foo: PropTypes.any
        }

        class Passthrough extends Component {

            render() {
                return <div />
            }
        }

        Passthrough.contextTypes = childContextTypes

        let ContextProvider = () => (
            <Passthrough />
        )

        ContextProvider = contextify(childContextTypes, ({foo}) => ({
            foo
        }))(ContextProvider)

        class Root extends Component {

            render() {
                return <ContextProvider foo="bar"/>
            }
        }

        const tree = TestUtils.renderIntoDocument(
            <Root />
        )

        const passthrough = TestUtils.findRenderedComponentWithType(tree, Passthrough)

        expect(passthrough.context.foo).toEqual(`bar`)

    })

})