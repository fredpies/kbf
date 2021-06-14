let Bir = require('bir1');

const bir = new Bir()
bir.login().then(function () {
    console.log('Logged');

    bir.search({ nip: '5261040567' }).then(function (res) {
        console.log(res);
    })


})


// console.log(await bir.search({ nip: '5261040567' }));

