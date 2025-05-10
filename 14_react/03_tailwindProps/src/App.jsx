import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-amber-200">
        Lets Talk about Props - making reusable components
      </h1>
      <div className="flex gap-4">
        <Card view="Sunrise"/>
        <Card view="Sunset"/>
      </div>
    </>
  );
}

export default App;
