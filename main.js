var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
// const year =2001
// const month =9
// const day =26
btn.addEventListener("click", function(){
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
})