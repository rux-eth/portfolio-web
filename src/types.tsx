export type WorkStatus = "Completed" | "Building" | "Deprecated";

export interface WorkInfo {
  title: string;
  description: string;
  thumbnail: string;
  status: WorkStatus;
  languages: Set<string>;
  stack: Set<string>;
  website?: string;
  article?: string;
}
