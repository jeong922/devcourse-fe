import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Button from "./Button";

export default function Timer() {
  const [time, setTime] = useState<number>(0);
  const [isStop, setIsStop] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setIsStop(false);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsStop(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetTimer = () => {
    setIsStop(true);
    setTime(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <h2 className="sm:text-xl mb-6 font-bold text-lg">스톱워치</h2>
      <span className="mb-6 sm:text-2xl font-bold text-md">
        {formatTime(time)}
      </span>
      <div className="flex justify-around w-full gap-4 sm:flex-row flex-col">
        {isStop ? (
          <Button text="시작" onClick={startTimer} />
        ) : (
          <Button text="멈춤" onClick={stopTimer} />
        )}
        <Button text="초기화" onClick={resetTimer} />
      </div>
    </Container>
  );
}
