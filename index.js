function keyboardHandler (event) {
  const validKeys = new Set('AWSEDFTGYHUJ')
  const key = event.key.toUpperCase()
  if (validKeys.has(key)) {
    const audio = new Audio(`./audio/${key}.mp3`)
    audio.play()
    audio.remove()
  }
}

document.addEventListener('keydown', keyboardHandler)
