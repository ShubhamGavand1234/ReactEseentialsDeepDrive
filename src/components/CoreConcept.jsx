import { CORE_CONCEPTS } from "../data";
import CoreComponent from "./CoreComponent";

export default function CoreConcept() {
  return (
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
  );
}
