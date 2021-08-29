const quiz = [
  //問題１　どう読みますか//
  {
    question: '新しい',
    answers: [ 'ふるい', 'あたらしい', 'きれい', 'ちいさい'],
    correct: 'あたらしい'
  }, {
    question: '自転車',
    answers: [ 'でんしゃ', 'ちかてつ', 'じてんしゃ', 'きしゃ'],
    correct: 'じてんしゃ'
  }, {
    question: 'お金',
    answers: [ 'おかさん', 'おとさん', 'おかね', 'おにもつ'],
    correct: 'おかね'
  }, {
    question: '高い',
    answers: [ 'おおきい', 'あつい', 'さむい', 'たかい'],
    correct: 'たかい'
  }, {
   question: '電車',
   answers: [ 'でんしゃ', 'でんき', 'でんわ', 'かみなりくるま'],
   correct: 'でんしゃ'
   //問題２　どう書きますか//
  }, {
   question: 'きょうしつ',
   answers: [ '居室', '教室', '大学', '会議室'],
   correct: '教室'
  }, {
   question: 'ぎんこう',
   answers: [ '銀行', '銀座', '銀魂', '鋼行'],
   correct: '銀行'
   }, {
    question: 'やすみ',
    answers: [ '林み', '浴み', '休み', '杉み'],
    correct: '休み'
  }, {
   question: 'らじお',
   answers: [ 'ラジオ', 'ウジオ', 'ラヅオ', 'ウヅオ'],
   correct: 'ラジオ'
 }, {
  question: 'だいがく',
  answers: [ '大学', '中学', '小学', '幼稚園'],
  correct: '大学'
  //どうの助詞が一番正しいですか。//
}, {
 question: 'これは（）傘です。',
 answers: [ 'で', 'は', 'から', 'も'],
 correct: 'は'
}, {
 question: '今日はバス（）学校へ来ました。',
 answers: [ 'で','に','を','へ'],
 correct: 'で'
}, {
 question: '昨日の授業は12時（）2時まででした',
 answers: ['に','は','へ','から'],
 correct: 'から'
}, {
 question: '家（）宿題をします。',
 answers: ['で','を','は','へ'],
 correct: 'で'
}, {
 question: 'すきさんは宿題（）しました。',
 answers: ['を','に','で','から'],
 correct: 'を'
}, {
 question: '私は友達（）学校へ行きます。',
 answers: ['と','は','まで','は'],
 correct: 'と'
 //今日は何曜日ですか//
}, {
 question: '今日は水曜日、明日は何曜日ですか。',
 answers: ['火曜日','月曜日','金曜日','木曜日'],
 correct: '木曜日'
}, {
 question: '昨日は金曜日、明日は何曜日ですか。',
 answers: ['日曜日','火曜日','水曜日','木曜日'],
 correct: '日曜日'
}, {
 question: '今日は月曜日、明後日は何曜日ですか。',
 answers: ['水曜日','火曜日','金曜日','土曜日'],
 correct: '水曜日'
}, {
 question: '今日は土曜日、一昨日は何曜日ですか。',
 answers: ['火曜日','木曜日','水曜日','金曜日'],
 correct: '木曜日'
 //時間の読み方//
}, {
 question: '４月1日',
 answers: ['しがつついたち','よんげつついたち','しがつふつか','よんげつふつか'],
 correct: 'しがつついたち'
}, {
 question: '10月10日',
 answers: ['じゅうがついちにち','じゅうがつとおか','じゅうがついちれいにち','じゅうがついちぜろにち'],
 correct: 'じゅうがつとおか'
}, {
 question: '四時半',
 answers: ['よじはん','よじさん','ごじはん','ごじさん'],
 correct:'よじはん'
}, {
 question: '十二時一分',
 answers: ['じゅうにじにふん','じゅうにじさんぷん','じゅうにじいっぷん','じゅうにじはん'],
 correct:'じゅうにじいっぷん'
   // 動詞の使い方//
}, {
 question: '今から宿題を（）。',
 answers: ['します','しません','食べます','食べました'],
 correct:'します'
 }, {question: 'けさのあさごはんは（）。',
 answers: ['飲みますか','飲みましたか','食べませんか','食べましたか'],
 correct:'食べましたか'
 }, {
  question: '昨日は夜12時に（）。',
  answers: ['寝ました','寝ます','休みます','働きます'],
  correct:'寝ました'
 }, {
   question: '医者から薬を（）。',
   answers: ['あげます','あげました','もらいます','もらいました'],
   correct:'もらいました'
 }, {
    question: '明日、わたしはすきさんにプレゼントを（）。',
    answers: ['あげます','あげました','借ります','借ります'],
    correct:'あげます'
 }, {
     question: '昨日は友達におかねを（）。',
     answers: ['借ります','借りました','買います','かいました'],
     correct:'借りました'
   }, {
       question: 'スーパーで食べ物と飲み物を（）。',
       answers: ['かいます','かきます','みます','いきます'],
       correct:'かいます'
     }, {
       //疑問詞の使い方//
         question: 'Q：そのかばんは、（）の鞄ですか。A：フランスの鞄です。',
         answers: ['どこ','なんこ','なに','どんな'],
         correct:'どこ'
      }, {
          question: 'Q：（）と映画を見ますか。A：友達と一緒に見ます。',
           answers: ['どれ','どこ','どんな','だれ'],
           correct:'だれ'
      }, {
          question: 'Q：（）を食べますか。A：肉を食べます。',
          answers: ['なに','なん','から','まで'],
          correct:'なに'
       }, {
          question: 'Q：（）日本語を勉強しますか。A：明日からは勉強します。',
          answers: ['だれ','どれ','いつ','なに'],
          correct:'いつ'

        },  {
           question: 'Q：昨日は（）をしましたか。A：アニメを見ました。',
           answers: ['なに','なん','だれ','どれ'],
           correct:'なに'
              //ぶんの組み合わせ//
         },{
           question: 'を見ました。　昨日は映画館で　友達と　　映画',
            answers: ['1 4 3 2','1 3 4 2','2 3 4 1','3 1 4 2'],
            correct:'2 3 4 1'
        }, {
                question: 'この魚　とても　は　おいしいです。',
                answers: ['3 4 2 1','2 1 4 3','4 2 1 3 ','1 3 2 4'],
                correct:'1 3 2 4'
        }, {
                question: 'は　きれいな　カリナさん　人です。',
                  answers: ['3 2 4 1','4 1 2 3','3 1 2 4','1 4 2 3'],
                  correct:'3 1 2 4'
          }








];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;

  const buttonLen = $buttons.length;
  let btnIndex = 0;

  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';

  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
