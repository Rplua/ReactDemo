import Header from "@components/layout/header/Header";
import CoreConcept from "@components/layout/coreConcept/CoreConcept";
import componentsImg from "@/assets/components.png"
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}></CoreConcept>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}></CoreConcept>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}></CoreConcept>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}></CoreConcept>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
