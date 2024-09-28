const sidebar = document.getElementById('sidebar')
const cross = document.getElementById('cross')
const bar = document.getElementById('bar')

bar.addEventListener('click', baropen)

function baropen() {
    sidebar.style.display = 'block'
}

function barclose() {
    sidebar.style.display = 'none';
}

cross.addEventListener('click', barclose)