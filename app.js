const quiz=[
  // 1問目
  {
    question:'ゲーム市場最も売れたゲームは？',
    answers:['スーパーファミコン',
    'プレイステーション',
    '任天堂スイッチ',
    'ニンテンドウDS'],
    correct:'ニンテンドウDS',

  },
  // 2問目
  {
    question:'循環小数はどれ？',
    answers:['3',
    '33',
    '3.333',
    '三分の一'],
    correct:'3.333',
  },
  // 3問目
  {
    question:'sportの意味は？',
    answers:['音楽',
    '運動',
    '誘導',
    '運用'],
    correct:'運動',
  },
];

const quizLength=quiz.length;
let quizIndex=0;
// while(quizindex<quizLength){
  
// }

const $button=document.getElementsByTagName('button');
const buttonLength=$button.length;

// クイズの問題文、選択肢を定義
const setupQuiz=()=>{
  document.getElementById('js-question').textContent=quiz[quizIndex].question;
  let buttonIndex=0;
  while(buttonIndex<buttonLength){
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();



const clickHandler = (e)=>{
  if(e.target.textContent===quiz[quizIndex].correct){
    window.alert('正解！');
  }else{
    window.alert('残念！');
  }
  quizIndex++;
  // 問題数がまだあれば実行
  if(quizIndex<quizLength){
// 問題数がねければこちら実行
    setupQuiz();
  }else{
    window.alert('終了！')
  }
};


// ボタンクリックしたら正誤判定
let handlerIndex=0;
while(handlerIndex<buttonLength) {
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}


// button[1].addEventListener('click',(e)=>{
//   clickHandler(e);
// });

// button[2].addEventListener('click',(e)=>{
//   clickHandler(e);
// });

// button[3].addEventListener('click',(e)=>{
//   clickHandler(e);
// });