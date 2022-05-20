setInterval(setClock, 1000)

const hourH= document.querySelector('[number-hour]')
const minuteH = document.querySelector('[number-minute]')
const secondH = document.querySelector('[number-second]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  DOR(secondH, secondsRatio)
  DOR(minuteH, minutesRatio)
  DOR(hourH, hoursRatio)
}

function DOR(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()