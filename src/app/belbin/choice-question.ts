export class ChoiceQuestion {
  public score: number;

  constructor(public number: string,
              public question: string,
              public options: Option[]) {
  }
}

export class Option {
  public score: number = 0;

  constructor(public number: string, public answer: String) {

  };
}

export class Role {
  public score: number = 0;

  constructor(public name: string,
              public typicalCharacter: string,
              public positiveCharacter,
              public tolerableWeekness: string,
              public effectsOnTeams: string[]) {
  }
}
