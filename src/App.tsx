import Header from "@components/layout/header/Header";
import CoreConcept from "@components/layout/coreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./utils/data";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept)=>
            <CoreConcept
            key={concept.title}
            title={concept.title}
            description={concept.description}
            img={concept.image}
            />)}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
