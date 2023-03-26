import { Example1 } from "./templates/Example1";
import { Example2 } from "./templates/Example2";

export const routes = [
  {
    path: "example1",
    template: Example1,
    values: {
      role: "Your Role",
      name: "Your Name",
    },
  },
  {
    path: "example2",
    template: Example2,
    values: {
      title: "Here's an example sentence",
      subtitle: "Secondary example sentences",
    },
  },
];
