var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
// const year =2001
// const month =9
// const day =26


// 入力済みかのチェック
function checkinput(){
  // matchで正規表現を表示、/で囲む、\dで数字、+でそれ(\d)が１個以上を示す
  // nullはなしで!==は〜でないなので、数字が１個以上入ってなくない場合nobtnを消す
  if(year.value.match(/\d+/) !== null && month.value.match(/\d+/) !== null && day.value.match(/\d+/) !== null){
    btn.classList.remove("nobtn");
  }else{
    btn.classList.add("nobtn");
  }
}

// 画面表示の際に金額をすぐ入力できる様にフォーカス
year.focus();

// 年月日の入力された際に入力済みかチェック
year.addEventListener("keyup",checkinput);
month.addEventListener("keyup",checkinput);
day.addEventListener("keyup",checkinput);
  
  
// ボタンがクリックされたら
btn.addEventListener("click", function(){
  // クラスにnobtnが含まれてたら　contains＝含まれる this=btnに
  if(this.classList.contains("nobtn") === true){
    // 先に進ませない
    return;
  }

  // 入力された誕生日の１７７０年１月１日からのミリ秒単位化
  const birthday =new Date(year.value,month.value - 1,day.value).getTime();
  // 今日の１７７０年１月１日からのミリ秒単位化
  const today = new Date().getTime();
  // 今日-誕生日
  const mmprogress = today - birthday;
  // ミリ秒単位直し
  const dayprogress = Math.floor(mmprogress / (1000 * 60 * 60 * 24));
  // 年齢計算
  const age = Math.floor(dayprogress / 365.25)
  // アンサーに代入
  document.getElementById("dayprogress").textContent = dayprogress;
  document.getElementById("age").textContent = age;

  // rsetの隠し外し
  reset.classList.remove("hidden");
})

// リセットが押されたら
reset.addEventListener("click",function(){
  // 全システムの初期化
  document.getElementById("dayprogress").textContent = "???";
  document.getElementById("age").textContent = "???";
  year.value = "";
  month.value ="";
  day.value = "";
  btn.classList.add("nobtn");
  reset.classList.add("hidden");
  year.focus();
});