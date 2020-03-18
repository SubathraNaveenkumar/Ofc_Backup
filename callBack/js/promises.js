// function notifyAll(funcSms, funcEmail) {
//     console.log('starting...')
//     funcSms();
//     funcEmail();
// }
// notifyAll(function () {
//     console.log('sms...')
//     },
//     function () {
//         console.log('email...')
//     }
// )
// console.log('ending...')

/**/

function notifyAll(funcSms, funcEmail) {
    setTimeout(function () {
        console.log('Async starting...');
        funcSms();
        funcEmail();
    }, 2000)
}
notifyAll(function () {
    console.log('async sms...')
    },
    function () {
        console.log('async email...')
    }
)
console.log('async ending...')

