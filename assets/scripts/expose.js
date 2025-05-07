// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audio = document.querySelector('#expose audio');
  const button = document.querySelector('#expose button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    if (horn === 'air-horn' || horn === 'car-horn' || horn === 'party-horn') {
      image.src = `assets/images/${horn}.svg`;
      image.alt = `${horn.replace('-', ' ')} image`;
      audio.src = `assets/audio/${horn}.mp3`;
    }
  });

  button.addEventListener('click', () => {
    if (audio.src) {
      audio.play();
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);
    audio.volume = volumeValue / 100;

    // Update the volume icon
    if (volumeValue === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
}