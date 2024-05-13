import { useEffect, useState } from "react";
import Container from "./Container";

export default function Clock() {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <span className="mb-6 sm:text-lg text-balance text-center font-bold">{`${time.getFullYear()}년 ${
          time.getMonth() + 1
        }월 ${time.getDate()}일 ${week[time.getDay()]}요일`}</span>

        <span className="sm:text-3xl font-bold text-xl ">{`${String(
          time.getHours()
        ).padStart(2, "0")} : ${String(time.getMinutes()).padStart(
          2,
          "0"
        )} : ${String(time.getSeconds()).padStart(2, "0")}`}</span>
      </div>
    </Container>
  );
}
