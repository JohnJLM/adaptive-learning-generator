export type Complexity = "introductory" | "intermediate" | "advanced";
export type TopicKey = "genetics" | "motion";
export type PackagePreset = "class_session" | "workshop" | "assessment" | "review" | "custom";
export type MaterialId =
  | "explanation"
  | "summary"
  | "activity"
  | "workshop"
  | "exercises"
  | "quiz"
  | "short_assessment"
  | "answer_key"
  | "evaluation_criteria"
  | "rubric"
  | "teacher_guide";
export type ProfileStatus = "generated" | "needs_revision" | "approved";
export type AccessibilitySupportId =
  | "plain_language"
  | "reading_support"
  | "visual_access"
  | "hearing_access"
  | "motor_keyboard_access"
  | "executive_function_support"
  | "multiple_expression_options";

export interface StudentProfile {
  id: string;
  name: string;
  course: string;
  knowledgeLevel: string;
  priorKnowledge: string;
  specificObjective: string;
  expectedComplexity: Complexity;
  accessibilitySupportIds: AccessibilitySupportId[];
  considerations: string;
  additionalInstructions: string;
}

export interface RevisionProfileContext {
  profileId: string;
  previousVersion: number;
  feedback: string;
  previousArtifacts: ProfileArtifacts;
}

export interface RevisionContext {
  previousGenerationId: string;
  globalFeedback: string;
  profiles: RevisionProfileContext[];
}

export interface GenerationRequest {
  requestId: string;
  subject: string;
  topicKey?: TopicKey;
  topic: string;
  generalObjective: string;
  durationMinutes: number;
  preset: PackagePreset;
  requestedMaterials: MaterialId[];
  sourceContext: string;
  generalInstructions: string;
  profiles: StudentProfile[];
  revision?: RevisionContext;
}

export interface ExplanationArtifact {
  title: string;
  introduction: string;
  sections: Array<{ heading: string; content: string }>;
}

export interface SummaryArtifact {
  title: string;
  content: string;
}

export interface ActivityArtifact {
  title: string;
  instructions: string[];
  expectedEvidence: string;
  estimatedMinutes: number;
}

export interface QuestionItem {
  id: string;
  prompt: string;
}

export interface QuestionSetArtifact {
  title: string;
  instructions: string;
  items: QuestionItem[];
}

export interface AnswerKeyArtifact {
  title: string;
  items: Array<{ itemId: string; answer: string; rationale: string }>;
}

export interface EvaluationCriteriaArtifact {
  title: string;
  criteria: Array<{ criterion: string; description: string }>;
}

export interface RubricArtifact {
  title: string;
  evidenceExpected: string;
  criteria: Array<{
    criterion: string;
    description: string;
    levels: Array<{ label: string; description: string }>;
  }>;
}

export interface TeacherGuideArtifact {
  title: string;
  overview: string;
  sequence: Array<{ step: string; description: string }>;
  reviewNotes: string;
}

export interface ProfileArtifacts {
  explanation?: ExplanationArtifact;
  summary?: SummaryArtifact;
  activity?: ActivityArtifact;
  workshop?: ActivityArtifact;
  exercises?: QuestionSetArtifact;
  quiz?: QuestionSetArtifact;
  short_assessment?: QuestionSetArtifact;
  answer_key?: AnswerKeyArtifact;
  evaluation_criteria?: EvaluationCriteriaArtifact;
  rubric?: RubricArtifact;
  teacher_guide?: TeacherGuideArtifact;
}

export interface ProfileMaterialPackage {
  profileId: string;
  profileName: string;
  generationId: string;
  version: number;
  status: ProfileStatus;
  adaptationSummary: string;
  artifacts: ProfileArtifacts;
}

export interface GenerationResponse {
  requestId: string;
  generationId: string;
  mode: "mock" | "live";
  generatedAt: string;
  title: string;
  generalObjective: string;
  preset: PackagePreset;
  requestedMaterials: MaterialId[];
  materials: ProfileMaterialPackage[];
}

export interface GenerationHistoryEntry {
  response: GenerationResponse;
  sourceGenerationId?: string;
  globalFeedback: string;
  feedbackByProfile: Record<string, string>;
}

export interface FinalizationRequest {
  requestId: string;
  generationId: string;
  profileCount: number;
  iterationCount: number;
  approvedProfileIds: string[];
}

export interface FinalizationResponse {
  requestId: string;
  generationId: string;
  finalizedAt: string;
  approvedProfileIds: string[];
}
