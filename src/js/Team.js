export default class Team {
    constructor() {
      this.members = new Set();
    }

    add(character) {
      if(this.members.has(character)) {
        throw new Error('Этот персонаж уже добавлен');
      }

      this.members.add(character);
    }

    addAll(...characters) {
      characters.forEach((character) => this.members.add(character));
    }

    toArray() {
      return Array.from(this.members);
    }

    [Symbol.iterator]() {
      const membersList = this.toArray();
      let current = 0;
      const last = membersList.length - 1;
  
      return {
        next() {
          if (current <= last) {
            return { done: false, value: membersList[current++] };
          }
          return { done: true };
        }
      }
    }
 }