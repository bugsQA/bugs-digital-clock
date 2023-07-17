const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const horas_us = document.getElementById('horas-us')
const minutos_us = document.getElementById('minutos-us')
const segundos_us = document.getElementById('segundos-us')
const horas_en = document.getElementById('horas-en')
const minutos_en = document.getElementById('minutos-en')
const segundos_en = document.getElementById('segundos-en')
const horas_jp = document.getElementById('horas-jp')
const minutos_jp = document.getElementById('minutos-jp')
const segundos_jp = document.getElementById('segundos-jp')


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr > 23) hr = '0' - 24 + hr

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s = '0' + s

    horas.textContent = hr;
    minutos.textContent = min
    segundos.textContent = s
})

const relogio_us = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours() -1;
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr > 23) hr = '0' - 24 + hr

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s = '0' + s

    horas_us.textContent = hr;
    minutos_us.textContent = min
    segundos_us.textContent = s
})

const relogio_en = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours() +3;
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr > 23) hr = '0' - 24 + hr

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s = '0' + s

    horas_en.textContent = hr;
    minutos_en.textContent = min
    segundos_en.textContent = s
})

const relogio_jp = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours() +12;
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr > 23) hr = '0' - 24 + hr

    if (hr < 10) hr = '0' + hr

    if (min < 10) min = '0' + min

    if (s < 10) s = '0' + s

    horas_jp.textContent = hr;
    minutos_jp.textContent = min
    segundos_jp.textContent = s
})