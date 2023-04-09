const path = require('path')

const option1 = {
    root: path.join(__dirname)
};

const option2 = {
    root: path.join(__dirname),
    headers:{
        "Content-Type":'application/javascript'
    }
};

const option3 = {
    root: path.join(__dirname),
    headers:{
        "Content-Type":'text/css'
    }
};

module.exports = {
    html: (req, res) => {
        res.sendFile('public/index.html', option1)
    },
    js: (req, res) => {
            res.sendFile('public/index.js', option2)
    },
    css: (req, res) => {
        res.sendFile('public/styles.css', option3)
    }
}
