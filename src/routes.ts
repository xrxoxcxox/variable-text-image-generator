import { Example1Image } from "./templates/Example1Image";
import { Example2Image } from "./templates/Example2Image";

export const routes = [
  {
    path: "/example1",
    template: Example1Image,
    values: {
      role: "Your Role",
      name: "Your Name",
    },
  },
  {
    path: "/example2",
    template: Example2Image,
    values: {
      title: "Here's an example sentence",
      subtitle: "Secondary example sentences",
    },
  },
];
