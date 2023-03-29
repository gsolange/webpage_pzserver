const connecTion = document.querySelector('.connection')
const dataBTN = document.getElementById('databtn')
dataBTN.addEventListener('click', () => {
    if (document.getElementById('datainfo').className == "connection") {
        document.getElementById('datainfo').classList.add('hidden');
        document.getElementById('datainfo').classList.remove('connection');
        document.getElementById('rulesinfo').classList.remove('rules');
        document.getElementById('supportinfo').classList.remove('support');
    } else {
        document.getElementById('datainfo').classList.add('connection');
        document.getElementById('datainfo').classList.remove('hidden');
        document.getElementById('rulesinfo').classList.remove('rules');
        document.getElementById('supportinfo').classList.remove('support');
    }
})

const ruLes = document.querySelector('.rules')
const ruleBTN = document.getElementById('rulebtn')
ruleBTN.addEventListener('click', () => {
    if (document.getElementById('rulesinfo').className == "rules") {
        document.getElementById('rulesinfo').classList.add('hidden');
        document.getElementById('rulesinfo').classList.remove('rules');
        document.getElementById('datainfo').classList.remove('connection');
        document.getElementById('supportinfo').classList.remove('support');
    } else {
        document.getElementById('rulesinfo').classList.add('rules');
        document.getElementById('rulesinfo').classList.remove('hidden');
        document.getElementById('datainfo').classList.remove('connection');
        document.getElementById('supportinfo').classList.remove('support');
        
    }
})

const support = document.querySelector('.support')
const supportBTN = document.getElementById('supportbtn')
supportBTN.addEventListener('click', () => {
    if (document.getElementById('supportinfo').className == "support") {
        document.getElementById('supportinfo').classList.add('hidden');
        document.getElementById('supportinfo').classList.remove('support');
        document.getElementById('rulesinfo').classList.remove('rules');
        document.getElementById('datainfo').classList.remove('connection');
    } else {
        document.getElementById('supportinfo').classList.add('support');
        document.getElementById('supportinfo').classList.remove('hidden');
        document.getElementById('rulesinfo').classList.remove('rules');
        document.getElementById('datainfo').classList.remove('connection');
    }
})