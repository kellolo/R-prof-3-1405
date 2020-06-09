const minimist = require ('minimist')
const fs = require ('fs')
const path = require ('path')

const args = minimist (process.argv.slice (2), {
    alias: {
        stateless: 's',
        name: 'n'
    }
})

const componentName = args.name

fs.mkdirSync (
    path.resolve (__dirname, '..', 'src', 'components', componentName)
)

// fs.writeFileSync (
//     path.resolve (__dirname, '..', 'src', 'components', componentName, 'index.js'),
//     `export default from './${componentName}';`
// )

fs.writeFileSync (
    path.resolve (__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
    `.${componentName} {}`
)

if (args.stateless) {
    require ('./stateless') (componentName)
} else {
    require ('./statefull') (componentName)
}

//package.json ===> scripts
// "c-full": "node util/index.js --n",
// "c-less": "node util/index.js --s --n"