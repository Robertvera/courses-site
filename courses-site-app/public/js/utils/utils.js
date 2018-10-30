const Utils = {
    validateData: function (data) {
     
        Object.keys(data).forEach(function(key,index) {
            if (!data[key]) {
                return console.log(`KO ${key}`)
            }

            return 'OK'
        })
    }
}

module.exports = Utils