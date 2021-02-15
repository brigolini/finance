import path from "path";
import aliases from "./src/config/aliases";

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

const webpack = {
  alias: resolvedAliases,
};

export default webpack;
