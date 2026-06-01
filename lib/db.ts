// Simple mock database utility to store entries in memory for the hackathon demo
import type { LearningEntry } from "./types";

let globalEntries: LearningEntry[] = [
  {
    id: "1",
    createdAt: new Date().toISOString(),
    scores: {
      cognitiveLoad: 4.5,
      learningEfficiency: 7.2,
      emotionalFriction: 3.1
    }
  }
];

export async function listLearningEntries(): Promise<LearningEntry[]> {
  return globalEntries;
}

export async function saveLearningEntry(entry: any): Promise<LearningEntry> {
  const newEntry: LearningEntry = {
    id: Math.random().toString(),
    createdAt: new Date().toISOString(),
    scores: {
      cognitiveLoad: Number(entry.stressLevel || 3) * 1.5,
      learningEfficiency: (Number(entry.focusLevel || 3) * 2) - (Number(entry.stressLevel || 3) * 0.5),
      emotionalFriction: Number(entry.stressLevel || 3) * 0.8
    }
  };
  globalEntries.push(newEntry);
  return newEntry;
}
