/* eslint-disable no-undef */

export default class Speech {
  constructor() {
    this.canSpeak = false;
    this.speaker = null;
    this.setupSpeech();
  }

  setupSpeech() {
    try {
      this.speaker = new window.SpeechSynthesisUtterance();
      // eslint-disable-next-line prefer-destructuring
      this.speaker.voice = window.speechSynthesis.getVoices()[17];
      this.speaker.pitch = 1;
      this.canSpeak = true;
    } catch (error) {
      this.canSpeak = false;
    }
  }

  Speak(message) {
    if (this.canSpeak) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
      this.speaker.text = message;
      window.speechSynthesis.speak(this.speaker);
    }
  }
}
