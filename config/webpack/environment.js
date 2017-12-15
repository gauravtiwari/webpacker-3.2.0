const webpack = require('webpack')
const { resolve } = require('path')
const { environment, config } = require('@rails/webpacker')
const erb =  require('./loaders/erb')
const elm =  require('./loaders/elm')
const typescript =  require('./loaders/typescript')
const vue =  require('./loaders/vue')
const coffee =  require('./loaders/coffee')

environment.loaders.append('coffee', coffee)
environment.loaders.append('vue', vue)
environment.loaders.append('typescript', typescript)
environment.loaders.append('elm', elm)
environment.loaders.append('erb', erb)

environment.plugins.set('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
    resolve(config.source_path)
  )
)
module.exports = environment
