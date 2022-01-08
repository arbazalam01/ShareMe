import faker from "faker";
import { useEffect } from "react";

function Stories() {
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));
    console.log(suggestions);
  }, []);

  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
}

export default Stories;
