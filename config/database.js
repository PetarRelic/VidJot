if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: 'mongodb://petar:petar@ds227740.mlab.com:27740/vidjot-prod'
    };
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'};
}