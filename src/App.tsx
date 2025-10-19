import Header from "@components/layout/header/Header";
import CoreConcepts from "@components/layout/coreConcepts/CoreConcepts";
import Example from "./components/layout/example/Example";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Example/>
      </main>
    </>
  );
}

export default App;
