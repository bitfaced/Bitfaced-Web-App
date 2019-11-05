/* eslint-disable no-undef */
import Speech from './Speech';

export default class GrumpySpeech {
    static GRUMPY_MESSAGES = [
      'Stop clicking me.',
      "You'll regret this.",
      'g t f o',
      'This is not how you mine bitcoin.',
      'reported.',
      "Don't start with me.",
    ]

    static GRUMPY_LINKS = [
      'https://youtu.be/8RbL4PwTDsQ?t=6',
      'https://youtu.be/V-_O7nl0Ii0?t=11',
      'https://youtu.be/rW9WmA5okpE?t=147',
      'https://www.youtube.com/watch?v=-nCAV5RTrE4',
    ]

    constructor(grumpLimit = 10) {
      this.aggitation = 0;
      this.limit = grumpLimit;
      this.speech = new Speech();
    }

    Speak(message) {
      if (this.speech.canSpeak) {
        const newMessage = this.aggitateMessage(message);
        this.speech.Speak(newMessage);
      }
    }

    aggitateMessage(message) {
      this.aggitation += 1;
      if (this.aggitation > this.limit) {
        GrumpySpeech.trollTime();
        return '';
      }

      const chance = (Math.random() * 10) + 1;
      if (this.aggitation > chance) {
        this.speech.speaker.pitch += 0.3;
        return GrumpySpeech.GRUMPY_MESSAGES[
          Math.floor(Math.random() * GrumpySpeech.GRUMPY_MESSAGES.length)
        ];
      }
      return message;
    }

    static trollTime() {
      window.location.href = GrumpySpeech.GRUMPY_LINKS[
        Math.floor(Math.random() * GrumpySpeech.GRUMPY_LINKS.length)
      ];
    }
}
