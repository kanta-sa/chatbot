const defaultDataset = {
  "init": {
    answers: [
      {content: "自己紹介を見る", nextId: "profile"},
      {content: "ポートフォリオを見る", nextId: "portfolio"},
      {content: "問い合わせる", nextId: "contact"}
    ],
    question: "こんにちは！ご用件は何でしょうか",
  },
  "profile": {
    answers: [
      {content: "基本情報", nextId: "self_introduction"},
      {content: "プログラミング歴", nextId: "self_history"},
      {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "自己紹介ですね。こちらからお選びいただけます。",
  },
  "portfolio": {
    answers: [
      {content: "The HotSpot DB(観光地を共有するアプリ)", nextId: "https://hotspotdb.herokuapp.com/"},
      {content: "GitHub", nextId: "https://github.com/kanta-sa"},
      {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "ポートフォリオについてですね。こちらから閲覧したいものをお選びいただけます。",
  },
  "self_introduction": {
    answers: [
      {content: "一つ戻る", nextId: "profile"},
      {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "東京農工大学工学部情報工学科に通っています。",
  },
  "self_history": {
    answers: [
      {content: "一つ戻る", nextId: "profile"},
      {content: "最初の質問に戻る", nextId: "init"}
    ],
    question: "C言語: 1年, Python: 1年半, Ruby: 半年, HTML&CSS, Javascript: 半年",
  }
}

export default defaultDataset