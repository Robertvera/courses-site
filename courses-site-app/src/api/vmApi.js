const vmApi = require('api-client')

vmApi.protocol = process.env.REACT_APP_API_PROTOCOL
vmApi.host = process.env.REACT_APP_API_HOST
vmApi.port = process.env.REACT_APP_API_PORT


module.exports = vmApi