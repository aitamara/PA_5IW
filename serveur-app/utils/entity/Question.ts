enum questions {
  SPORT = "sport",
  LECT = "lecture",
  BOXE = "boxe",
  REST = "restaurant",
  SORT = "sorties",
  CHIEN = "chien",
  BIER = "bière",
}

export default class Question {
  label: questions;

  constructor(label: questions) {
    this.label = label;
  }
}
