import { BUTTON_NAME } from "@/utils/data"
import TabButton from "../TabButton/TabButton"
import { useState } from "react";

import { EXAMPLES } from "@/utils/data";
import type { ExampleKey } from "@/utils/data";

export default function Example() {

    const [selecedTopic, setSelectedTopic] = useState<ExampleKey | null>(null);

    const handleSelected = (selectedButton: ExampleKey) => {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please a topic.</p>;
    if (selecedTopic) {
        tabContent = <div id="tab-content" >
            <h3>{EXAMPLES[selecedTopic].title}</h3>
            <p>{EXAMPLES[selecedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selecedTopic].code}
                </code>
            </pre>
        </div >
    }
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {BUTTON_NAME.map((btn) => (
                    <TabButton
                        isSelected={selecedTopic === btn.name}
                        key={btn.name}
                        onSelect={() => handleSelected(btn.name)}>
                        {btn.name}
                    </TabButton>
                ))}
            </menu>
            {tabContent}
        </section>
    )
}