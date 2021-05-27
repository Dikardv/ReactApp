import { useState, useEffect } from "react";

export default function GetTimer() {
  const [obj, setObj] = useState(["", "", "", ""]);
  const [daywr, setDaywr] = useState(" Дней ");
  const [hourwr, setHourwr] = useState(" Часов ");
  const [minuteswr, setMinuteswr] = useState(" Минут ");
  const [secwr, setSecwr] = useState(" Секунд ");

  function count() {
    var t = Date.parse(new Date("2021-06-26")) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    const xone = /\d1/;
    const xtwotofour = /\d[234]/;
    const regexd = /\d./;
    const xten = /1\d/;
    const xtwotofourone = /\n/;
    //секунды
    if (String(seconds).match(regexd)) {
      setSecwr(" Секунд ");
    }
    if (String(seconds).match(xone)) {
      setSecwr(" Секунда ");
    }
    if (String(seconds).match(xtwotofour)) {
      setSecwr(" Секунды ");
    }
    if (String(seconds).match(xten)) {
      setSecwr(" Секунд ");
    }
<<<<<<< HEAD
    if (String(seconds).length === 1 && String(seconds).match(xtwotofourone)) {
      setSecwr(" Секунды ");
    }
    if (seconds === 1) {
      setSecwr(" Секунда ");
    }
    if (seconds === 0) {
      setSecwr(" Секунд ");
    }

    //минуты
    if (String(minutes).match(regexd)) {
      setMinuteswr(" Минут ");
    }
    if (String(minutes).match(xone)) {
      setMinuteswr(" Минута ");
    }
    if (String(minutes).match(xtwotofour)) {
      setMinuteswr(" Минуты ");
    }
    if (String(minutes).match(xten)) {
      setMinuteswr(" Минут ");
    }
    if (String(minutes).length === 1 && String(seconds).match(xtwotofourone)) {
      setMinuteswr(" Минуты ");
    }
    if (minutes === 1) {
      setMinuteswr(" Минута ");
    }
    if (minutes === 0) {
      setMinuteswr(" Минут ");
    }

    //часы
    if (String(hours).match(regexd)) {
      setHourwr(" Часов ");
    }
    if (String(hours).match(xone)) {
      setHourwr(" Час ");
    }
    if (String(hours).match(xtwotofour)) {
      setHourwr(" Часа ");
    }
    if (String(hours).match(xten)) {
      setHourwr(" Часов ");
    }
    if (String(hours).length === 1 && String(seconds).match(xtwotofourone)) {
      setHourwr(" Часа ");
    }
    if (hours === 1) {
      setHourwr(" Час ");
    }
    if (hours === 0) {
      setHourwr(" Часов ");
    }

    //дни
    if (String(days).match(regexd)) {
      setDaywr(" Дней ");
    }
    if (String(days).match(xone)) {
      setDaywr(" День ");
    }
    if (String(days).match(xtwotofour)) {
      setDaywr(" Дня ");
    }
    if (String(days).match(xten)) {
      setDaywr(" Дней ");
    }
    if (String(days).length === 1 && String(seconds).match(xtwotofourone)) {
      setDaywr(" Дня ");
    }
    if (days === 1) {
      setDaywr(" День ");
    }
    if (days === 0) {
      setDaywr(" Дней ");
    }
    
    setObj([days, hours, minutes, seconds]);
  }

  useEffect(() => {
    setInterval(() => {
      count();
    }, 1000);
    //return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h1 className="number">{obj[0]}</h1>
      <p className="timeinfo">{daywr}</p>
      <h1 className="number">{obj[1]}</h1>
      <p className="timeinfo">{hourwr}</p>
      <h1 className="number">{obj[2]}</h1>
      <p className="timeinfo">{minuteswr}</p>
      <h1 className="number">{obj[3]}</h1>
      <p className="timeinfo">{secwr}</p>
    </div>
  );
}
