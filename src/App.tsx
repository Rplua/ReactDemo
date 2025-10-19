import Header from "@components/layout/header/Header";
import CoreConcept from "@components/layout/coreConcept/CoreConcept";
import TabButton from "@components/layout/TabButton/TabButton";

import { useState } from "react";
import { CORE_CONCEPTS } from "./utils/data";
import { BUTTON_NAME } from "./utils/data";
import { EXAMPLES} from "./utils/data";
import type { ExampleKey } from "./utils/data";

function App() {

  const [selecedTopic, setSelectedTopic] = useState<ExampleKey>('components');

  const handleSelected = (selectedButton: ExampleKey) => {
    setSelectedTopic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) =>(
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                img={concept.image}
              />))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {BUTTON_NAME.map((btn) => (
              <TabButton
                key={btn.name}
                onSelect={() => handleSelected(btn.name)}>
                {btn.name}
              </TabButton>
            ))}
          </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[selecedTopic].title}</h3>
              <p>{EXAMPLES[selecedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selecedTopic].code}
                </code>
              </pre>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
