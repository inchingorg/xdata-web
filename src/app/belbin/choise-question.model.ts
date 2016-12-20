export class ChoiseQuestion {
  score: number;

  constructor(public question: string,
              public options: Option[]) {
  }
}

export class Option {
  constructor(public number: string, public answer: String, public score: number) {

  };
}
