import Card from "./Card";
import { works } from "../../data";

function Works() {
  return (
    <div className="space-y-8">
      {works.map((work) => (
        <Card work={work} key={work.id} />
      ))}
    </div>
  );
}

export default Works;
