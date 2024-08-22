import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";

export default function Example() {
  const [tabContent, setTabContent] = useState("");

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  let tabDisplayContent = <p>Please select the topic</p>;

  if (tabContent) {
    tabDisplayContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[tabContent].title}</h3>
        <p>{EXAMPLES[tabContent].description}</p>
        <pre>
          <code>{EXAMPLES[tabContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={tabContent === "component"}
          onSelect={() => {
            handleSelect("component");
          }}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => {
            handleSelect("jsx");
          }}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => {
            handleSelect("props");
          }}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => {
            handleSelect("state");
          }}
        >
          State
        </TabButton>
      </menu>

      {/* {!tabContent ? <p>Please Select a topic</p> : null} */}
      {tabDisplayContent}
    </section>
  );
}
