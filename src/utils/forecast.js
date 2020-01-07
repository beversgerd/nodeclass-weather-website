const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/6ccb813ba3d461d7c3dd0c9785a868c6/' + longitude + ',' + latitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!')
        } else if (body.error) {
            callback('Uable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +
                ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}

module.exports = forecast