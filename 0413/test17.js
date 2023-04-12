// test17.js
'use strict';

// 오늘날짜를 전역번수로 선언..

const today = new Date();
const year = today.getFullYear();       // 연도 4자리
const month = today.getMonth() + 1;     // 월(기존월보다 -1로 출력됨)
const date = today.getDate();           // 일
const hour = today.getHours();          // 시
const min = today.getMinutes();         // 분
const second = today.getSeconds();      // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + second;


// 표준날짜
function fCheck1() {
  console.log("표준날짜:" + today );
  demo.innerHTML = today;
}

// 편집날짜
function fCheck2() {
  console.log("편집날짜:" + yymmdd );
  demo.innerHTML = yymmdd;
}

// 편집날짜(요일)  : 0(일) 1(월) 2(화) 3(수) 4(목) 5(금) 6(토)
function fCheck3() {
  let str = today.getDay();
  let week = ['일','월','화','수','목','금','토'];
  demo.innerHTML = week[str] + '요일';
}

// 해당달의 마지막 날짜
function fCheck4() {
  let mon = prompt("마지막 날짜를 출력할 '-년-월'을 입력하세요.(yyyy-mm)");
  let temp = mon.split('-');
  let yy = temp[0];
  let mm = temp[1];
  
  let str = new Date(yy, mm, 0);     
  // new Date(년,월,일,시,분,초) **날에 0 이 들어가있으면 그 달의 마지막날이 됨**
  // let strDate = str.getFullYear() + '-';
  // strDate += (str.getMonth() +1) + '-';
  // strDate += str.getDate();
  // strDate += "해당 월의 마지막 일자? " + strDate ;
 

  let strDate = "해당 월의 마지막 일자? " + yy + "-" + mm + "-" + str.getDate() ;

  demo.innerHTML = strDate;
}