const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swap = () => {
	if (one.textContent === '°C' && two.textContent == '°F') {
		one.textContent = '°F'
		two.textContent = '°C'
        result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
        result.textContent = ''
	}
}

const cToF = () => {
	const celInp = converter.value
	const far = celInp * 1.8 + 32
	result.textContent = `${celInp}°C to  ${far.toFixed(1)}°F`
	converter.value = ''
	// T(°F) = T(°C) * 1.8 + 32
}
const fToC = () => {
	const farInp = converter.value
	const cel = (farInp - 32) / 1.8
	result.textContent = `${farInp}°F to ${cel.toFixed(1)}°C`
	converter.value = ''
	// T(°F) = T(°C) * 1.8 + 32
}

const convert = () => {
	if (converter.value !== '')
		{
            if (one.textContent === '°C') {
                cToF()
            } else if (one.textContent === '°F') {
                fToC()
            }
        } else {
            result.textContent = 'Musisz podać jakąś wartość!'
        }
}
convBtn.addEventListener('click', convert)
changeBtn.addEventListener('click', swap)
