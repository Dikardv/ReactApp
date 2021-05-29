import { useState, useEffect } from "react";

export default function GetTimer() {
  const [obj, setObj] = useState(["", "", "", ""]);
  const [daywr, setDaywr] = useState(" ");
  const [hourwr, setHourwr] = useState(" ");
  const [minuteswr, setMinuteswr] = useState(" ");
  const [secwr, setSecwr] = useState(" ");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [getBg, setBg] = useState(<source src="bg.mp4" type="video/mp4" />);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function count() {
    var t = Date.parse(new Date("2021-06-26")) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    let secTemp = "с";
    let minTemp = "м";
    let hourTemp = "ч";
    let dayTemp = "дн";
    const xone = /\d1/;
    const xtwotofour = /\d[234]/;
    const regexd = /\d./;
    const xten = /1\d/;

    //секунды
    if (String(seconds).match(regexd)) {
      secTemp = " Секунд ";
    }
    if (String(seconds).match(xone)) {
      secTemp = " Секунда ";
    }
    if (String(seconds).match(xtwotofour)) {
      secTemp = " Секунды ";
    }
    if (String(seconds).match(xten)) {
      secTemp = " Секунд ";
    }
    if (seconds < 5 && seconds > 1) {
      secTemp = " Секунды ";
    }
    if (seconds < 10 && seconds > 4) {
      secTemp = " Секунд ";
    }
    if (seconds === 1) {
      secTemp = " Секунда ";
    }
    if (seconds === 0) {
      secTemp = " Секунд ";
    }
    setSecwr(secTemp);

    //минуты
    if (String(minutes).match(regexd)) {
      minTemp = " Минут ";
    }
    if (String(minutes).match(xone)) {
      minTemp = " Минута ";
    }
    if (String(minutes).match(xtwotofour)) {
      minTemp = " Минуты ";
    }
    if (String(minutes).match(xten)) {
      minTemp = " Минут ";
    }
    if (minutes < 5 && minutes > 1) {
      minTemp = " Минуты ";
    }
    if (minutes < 10 && minutes > 4) {
      minTemp = " Минут ";
    }
    if (minutes === 1) {
      minTemp = " Минута ";
    }
    if (minutes === 0) {
      minTemp = " Минут ";
    }
    setMinuteswr(minTemp);
    //часы
    if (String(hours).match(regexd)) {
      hourTemp = " Часов ";
    }
    if (String(hours).match(xone)) {
      hourTemp = " Час ";
    }
    if (String(hours).match(xtwotofour)) {
      hourTemp = " Часа ";
    }
    if (String(hours).match(xten)) {
      hourTemp = " Часов ";
    }
    if (hours < 5 && hours > 1) {
      hourTemp = " Часа ";
    }
    if (hours < 10 && hours > 4) {
      hourTemp = " Часов ";
    }
    if (hours === 1) {
      hourTemp = " Час ";
    }
    if (hours === 0) {
      hourTemp = " Часов ";
    }
    setHourwr(hourTemp);
    //дни
    if (String(days).match(regexd)) {
      dayTemp = " Дней ";
    }

    if (String(days).match(xone)) {
      dayTemp = " День ";
    }
    if (String(days).match(xtwotofour)) {
      dayTemp = " Дня ";
    }
    if (String(days).match(xten)) {
      dayTemp = " Дней ";
    }
    if (days < 10 && days > 4) {
      dayTemp = " Дней ";
    }
    if (days < 5 && days > 1) {
      dayTemp = " Дня ";
    }

    if (days === 1) {
      dayTemp = " День ";
    }
    if (days === 0) {
      dayTemp = " Дней ";
    }
    setDaywr(dayTemp);
    setObj([days, hours, minutes, seconds]);
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    setInterval(() => {
      count();
    }, 1000);

    return () => {
      clearInterval();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="overlay">
        <div
          className="timer"
          style={{ fontSize: windowDimensions.width / 25 }}
        >
          <h1 className="headerclass">Андрей + Екатерина</h1>
          <h1 className="number">{obj[0]}</h1>
          <p className="timeinfo">{daywr}</p>
          <h1 className="number">{obj[1]}</h1>
          <p className="timeinfo">{hourwr}</p>
          <h1 className="number">{obj[2]}</h1>
          <p className="timeinfo">{minuteswr}</p>
          <h1 className="number">{obj[3]}</h1>
          <p className="timeinfo">{secwr}</p>
        </div>
      </div>
      <video
        loop
        muted
        autoPlay
        poster="1055.jpg"
        className="fullscreenbg video"
      >
        <source src="bg2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
