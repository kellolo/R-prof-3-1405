const fs = require ('fs')
const path = require ('path')


module.exports = (componentName) => {
    const compCode = `import './${componentName}.css';

    import React, { Component, Fragment } from 'react';
    
    export default function(props) {
        const { items } = props;
        return (
            <Fragment>
            <div className="${componentName}"></div>
          </Fragment>
        )
      }`

    fs.writeFileSync (
        path.resolve (__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
        compCode
    )
}