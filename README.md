# React contextify [![Build Status](https://travis-ci.org/babotech/react-contextify.svg?branch=master)](https://travis-ci.org/babotech/react-contextify)

High order component to provide the context in the functional style

## Installation

```bash
npm install --save react-contextify
```

## Usage

```javascript
import React, {PropTypes} from 'react'
import contextify from 'react-contextify'

const ContextProvider = () => (...)

export default contextify({
    foo: PropTypes.string
}, props => ({
    foo: props.bar
}))(ContextProvider)


...

const ContextHandler = (_, context) => (...)

ContextHandler.contextTypes = {
    foo: PropTypes.string
}

...
<ContextProvider bar="baz">
...
    <ContextHandler />
...
</ContextProvider>
```

## License

**MIT**

