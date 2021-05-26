import { useState, useEffect } from "react";

export default function GetTimer() {
  const [obj, setObj] = useState([""]);
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
    const xtwotofourone = /[1234]/;
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
    if (String(seconds).match(xtwotofourone)) {
      setSecwr(" Секунды:т ");
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
    <div>
      <h1 className="timer">
        {obj[0] + daywr + obj[1] + hourwr + obj[2] + minuteswr + obj[3] + secwr}
      </h1>
    </div>
  );
}
