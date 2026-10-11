export type Complexity = "introductory" | "intermediate" | "advanced";
export type TopicKey = "genetics" | "motion";

export interface StudentProfile {
  id: string;
  name: string;
  course: string;
  knowledgeLevel: string;
  priorKnowledge: string;
  specificObjective: string;
  expectedComplexity: Complexity;
  considerations: string;
  additionalInstructions: string;
}

export interface GenerationRequest {
  requestId: string;
  subject: string;
  topicKey: TopicKey;
  topic: string;
  generalObjective: string;
  materialType: string;
  durationMinutes: number;
  sourceContext: string;
  generalInstructions: string;
  profiles: StudentProfile[];
}

export interface Activity {
  title: string;
  instructions: string;
  expectedEvidence: string;
}

export interface AdaptedContent {
  introduction: string;
  explanation: string;
  activity: Activity;
  checkQuestion: string;
}

export interface AdaptedMaterial {
  profileId: string;
  profileName: string;
  adaptationSummary: string;
  content: AdaptedContent;
}

export interface GenerationResponse {
  requestId: string;
  generationId: string;
  mode: "mock" | "live";
  generatedAt: string;
  title: string;
  generalObjective: string;
  materials: AdaptedMaterial[];
}
