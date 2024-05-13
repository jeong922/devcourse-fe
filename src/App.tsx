import "./App.css";
import Clock from "./components/Clock";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-rose-500 to-90% min-h-screen px-5">
      <div className="flex flex-col bg-white/30 w-full max-w-4xl rounded-lg p-5 sm:flex-row relative mx-auto">
        <div className="flex sm:flex-col flex-row justify-center">
          <Weather curWeather="☀️" />
          <Clock />
          <Timer />
        </div>
        <div className="w-full sm:ml-4 ml-0">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
