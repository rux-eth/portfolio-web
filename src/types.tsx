import { categories } from "@src/components/category";
import { Set } from "immutable";
export type WorkStatus = "Completed" | "Building" | "Deprecated";
export interface WorkInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  status: WorkStatus;
  languages: Set<keyof typeof categories>;
  stack: Set<keyof typeof categories>;
  repo: string;
  website?: string;
  article?: string;
}
