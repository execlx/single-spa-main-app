const singleSpaDefaults = require('webpack-config-single-spa');
const { default: merge } = require('webpack-merge');

module.exports = (webpackConfigEnv, argv) => {
    console.log('====',JSON.stringify(webpackConfigEnv))
    const defaultConfig = singleSpaDefaults({
        orgName: 'study',
        projectName: 'lagou',
    })

    return merge(defaultConfig, {
        devServer: {
            port: 9001
        },
    })

}