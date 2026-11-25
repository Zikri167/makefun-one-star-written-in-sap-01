// One Star, Written in Sap — a one-line 1-star review by a houseplant.
// Writes the entry to /output/entry.txt. Deterministic: constant string,
// stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He moved me to the \u2018sunny spot\u2019 \u2014 a windowsill above the radiator \u2014 so now I\u2019m sunburned on top, boiled underneath, and he tells his friends I\u2019m \u2018thriving\u2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
