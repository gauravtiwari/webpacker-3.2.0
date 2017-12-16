const webpack = require('webpack')
const { resolve } = require('path')
const { environment, config } = require('@rails/webpacker')
const coffee =  require('./loaders/coffee')
const erb =  require('./loaders/erb')
const typescript =  require('./loaders/typescript')
const elm =  require('./loaders/elm')
const vue =  require('./loaders/vue')

environment.plugins.append('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
    resolve(config.source_path)
  )
)
environment.loaders.append('elm', elm)
environment.loaders.append('vue', vue)
environment.loaders.append('typescript', typescript)
environment.loaders.append('erb', erb)
environment.loaders.append('coffee', coffee)
module.exports = environment
