import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import CoreComponent from "./components/CoreConcepts";
import componentIMG from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";

function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreComponent
                // {...concept}
                key={index}
                title={concept.title}
                description={concept.description}
                img={concept.image}
              />
            ))}
          </ul>
        </section>

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
      </main>
    </div>
  );
}

export default App;
