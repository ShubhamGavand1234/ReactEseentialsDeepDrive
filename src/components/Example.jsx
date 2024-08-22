import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

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
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={tabContent === "component"}
              onClick={() => {
                handleSelect("component");
              }}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={tabContent === "jsx"}
              onClick={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === "props"}
              onClick={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === "state"}
              onClick={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabDisplayContent}
      </Tabs>

      {/* {!tabContent ? <p>Please Select a topic</p> : null} */}
    </Section>
  );
}
