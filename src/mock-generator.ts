import type {
  ActivityArtifact,
  Complexity,
  GenerationRequest,
  GenerationResponse,
  ProfileArtifacts,
  ProfileMaterialPackage,
  QuestionSetArtifact,
  StudentProfile,
} from "./domain";
import { accessibilitySupportLabels } from "./accessibility-supports";

interface TopicContent {
  title: string;
  byComplexity: Record<Complexity, {
    introduction: string;
    explanation: string;
    activity: ActivityArtifact;
    checkQuestion: string;
    checkAnswer: string;
  }>;
}

const topicContent: Record<"genetics" | "motion", TopicContent> = {
  genetics: {
    title: "Genética mendeliana: del vocabulario a la justificación",
    byComplexity: {
      introductory: {
        introduction: "Observaremos que algunos rasgos se relacionan con información hereditaria que se transmite entre generaciones.",
        explanation: "El ADN contiene instrucciones. Para este ejemplo usaremos plantas y una característica simplificada: cada planta recibe información de dos progenitores. Este modelo sirve para empezar, pero no describe todos los rasgos reales.",
        activity: {
          title: "Ordena la idea",
          instructions: ["Relaciona ADN, progenitor, descendencia y característica usando las tarjetas indicadas.", "Explica con una frase qué información recibe una planta de sus progenitores."],
          expectedEvidence: "Usa los términos con apoyo visual y expresa una relación básica de transmisión.",
          estimatedMinutes: 10,
        },
        checkQuestion: "¿Qué representa el ADN en el modelo que hemos usado?",
        checkAnswer: "El ADN representa la información que participa en la transmisión de características entre generaciones.",
      },
      intermediate: {
        introduction: "Relacionaremos genotipo y fenotipo mediante un modelo mendeliano de un solo carácter.",
        explanation: "En este modelo, un alelo es una versión de un gen. El genotipo describe la combinación de alelos y el fenotipo el rasgo observable. Un cuadro de Punnett organiza posibilidades, no asegura el resultado de cada descendiente.",
        activity: {
          title: "Cruce monohíbrido guiado",
          instructions: ["Completa un cuadro de Punnett para un cruce Aa × Aa.", "Indica los genotipos posibles y el fenotipo esperado bajo dominancia completa.", "Explica por qué el resultado es una probabilidad."],
          expectedEvidence: "Distingue genotipo de fenotipo y justifica la proporción como probabilidad del modelo.",
          estimatedMinutes: 15,
        },
        checkQuestion: "¿Por qué una proporción esperada no garantiza el resultado de un solo descendiente?",
        checkAnswer: "Porque expresa probabilidades del modelo para muchos casos, no una certeza sobre cada descendiente concreto.",
      },
      advanced: {
        introduction: "Analizaremos predicciones de herencia como modelos probabilísticos con condiciones explícitas.",
        explanation: "Los cuadros de Punnett son útiles cuando sus supuestos se cumplen. En cruces con dos caracteres, la segregación independiente requiere condiciones que deben declararse; muchos rasgos biológicos no siguen una herencia mendeliana simple.",
        activity: {
          title: "Predicción y límites del modelo",
          instructions: ["Formula la predicción de un cruce dihíbrido bajo segregación independiente.", "Declara los supuestos que utilizas.", "Plantea una situación en la que el modelo no sea suficiente."],
          expectedEvidence: "Argumenta probabilidades y distingue entre el modelo escolar y sistemas de herencia más complejos.",
          estimatedMinutes: 20,
        },
        checkQuestion: "¿Qué condición debes comprobar antes de usar una regla de producto en un cruce de dos caracteres?",
        checkAnswer: "Que los supuestos de independencia del modelo sean aplicables al cruce que se está analizando.",
      },
    },
  },
  motion: {
    title: "Movimiento rectilíneo: de la rapidez media al modelo acelerado",
    byComplexity: {
      introductory: {
        introduction: "Describiremos un recorrido rectilíneo sencillo usando distancia, tiempo y rapidez media.",
        explanation: "La rapidez media indica cuánta distancia se recorre en un intervalo de tiempo: rapidez = distancia / tiempo. Usaremos un recorrido en un solo sentido y unidades compatibles para mantener el ejemplo claro.",
        activity: {
          title: "Una ruta de 120 metros",
          instructions: ["Identifica la distancia y el tiempo de un recorrido de 120 m en 30 s.", "Calcula la rapidez media.", "Escribe la unidad resultante."],
          expectedEvidence: "Sustituye correctamente los datos, realiza la división y expresa m/s.",
          estimatedMinutes: 10,
        },
        checkQuestion: "Si se mantiene la distancia y aumenta el tiempo, ¿qué ocurre con la rapidez media?",
        checkAnswer: "La rapidez media disminuye porque la misma distancia se recorre en más tiempo.",
      },
      intermediate: {
        introduction: "Interpretaremos movimiento uniforme con ecuaciones, conversiones de unidades y gráficas de posición-tiempo.",
        explanation: "En un movimiento rectilíneo uniforme la velocidad permanece constante. La pendiente de una gráfica posición-tiempo representa la velocidad; antes de calcular hay que comprobar que las unidades sean coherentes.",
        activity: {
          title: "Lectura de una gráfica de posición-tiempo",
          instructions: ["A partir de dos puntos, calcula la velocidad media.", "Convierte el resultado a km/h.", "Explica qué significa una recta con pendiente mayor."],
          expectedEvidence: "Obtiene una pendiente con unidades y relaciona pendiente, velocidad y representación gráfica.",
          estimatedMinutes: 15,
        },
        checkQuestion: "¿Qué representa una pendiente nula en una gráfica de posición-tiempo?",
        checkAnswer: "Que la posición no cambia con el tiempo y el móvil permanece en reposo respecto al sistema de referencia.",
      },
      advanced: {
        introduction: "Modelizaremos movimiento rectilíneo con aceleración constante y evaluaremos el sentido físico de las soluciones.",
        explanation: "Con aceleración constante se puede relacionar velocidad y tiempo mediante v = v0 + at, y posición y tiempo mediante x = x0 + v0t + 1/2at². El signo de cada magnitud depende del sistema de referencia elegido.",
        activity: {
          title: "Modelo con aceleración constante",
          instructions: ["Define un eje y un sistema de referencia.", "Calcula velocidad y posición tras un intervalo dado.", "Justifica el signo de cada resultado y su interpretación física."],
          expectedEvidence: "Selecciona ecuaciones coherentes, conserva unidades y contrasta el cálculo con una interpretación física.",
          estimatedMinutes: 20,
        },
        checkQuestion: "¿Qué supuesto permite usar una ecuación de posición cuadrática en el tiempo?",
        checkAnswer: "Que la aceleración se mantenga constante durante el intervalo analizado.",
      },
    },
  },
};

function contentFor(request: GenerationRequest, profile: StudentProfile) {
  if (request.topicKey) return topicContent[request.topicKey].byComplexity[profile.expectedComplexity];

  return {
    introduction: `Trabajaremos ${request.topic} a partir del objetivo común y del punto de partida descrito por el docente.`,
    explanation: `La explicación prioriza ${profile.specificObjective.toLowerCase()} y ajusta el vocabulario, los ejemplos y el razonamiento a un nivel ${profile.expectedComplexity}.`,
    activity: {
      title: `Aplica ${request.topic}`,
      instructions: ["Identifica la idea central con el apoyo necesario.", "Aplica el procedimiento al caso propuesto.", "Justifica brevemente la respuesta o decisión."],
      expectedEvidence: `Evidencia observable del objetivo específico: ${profile.specificObjective}.`,
      estimatedMinutes: Math.max(5, Math.round(request.durationMinutes / 2)),
    },
    checkQuestion: `¿Cómo se relaciona el caso trabajado con ${request.generalObjective.toLowerCase()}?`,
    checkAnswer: "La respuesta debe conectar el caso con el objetivo mediante los conceptos y el razonamiento trabajados.",
  };
}

function questionSet(profile: StudentProfile, request: GenerationRequest, kind: "exercises" | "quiz" | "short_assessment"): QuestionSetArtifact {
  const content = contentFor(request, profile);
  const prefix = `${profile.id}-${kind}`;
  const labels = {
    exercises: "Ejercicios de práctica",
    quiz: "Cuestionario de comprobación",
    short_assessment: "Evaluación breve",
  };

  return {
    title: labels[kind],
    instructions: kind === "short_assessment" ? "Responde de forma individual justificando cuando se solicite." : "Responde usando las ideas y el procedimiento trabajados.",
    items: [
      { id: `${prefix}-1`, prompt: content.checkQuestion },
      { id: `${prefix}-2`, prompt: `Aplica la idea principal de «${content.activity.title}» y explica cómo has comprobado tu respuesta.` },
    ],
  };
}

function firstQuestionSet(artifacts: ProfileArtifacts): QuestionSetArtifact | undefined {
  return artifacts.exercises ?? artifacts.quiz ?? artifacts.short_assessment;
}

function artifactsForProfile(profile: StudentProfile, request: GenerationRequest): ProfileArtifacts {
  const content = contentFor(request, profile);
  const artifacts: ProfileArtifacts = {};

  for (const material of request.requestedMaterials) {
    if (material === "explanation") {
      artifacts.explanation = {
        title: `Explicación: ${request.topic}`,
        introduction: content.introduction,
        sections: [{ heading: "Idea clave", content: content.explanation }],
      };
    }
    if (material === "summary") {
      artifacts.summary = { title: `Resumen: ${request.topic}`, content: `${content.introduction} ${content.explanation}` };
    }
    if (material === "activity" || material === "workshop") {
      artifacts[material] = {
        ...content.activity,
        title: material === "workshop" ? `Taller: ${content.activity.title}` : content.activity.title,
      };
    }
    if (material === "exercises" || material === "quiz" || material === "short_assessment") {
      artifacts[material] = questionSet(profile, request, material);
    }
    if (material === "answer_key") {
      const questions = firstQuestionSet(artifacts);
      artifacts.answer_key = {
        title: "Solucionario",
        items: (questions?.items ?? []).map((item, index) => ({
          itemId: item.id,
          answer: index === 0 ? content.checkAnswer : `Una aplicación coherente de ${request.generalObjective.toLowerCase()} con una justificación vinculada al perfil.`,
          rationale: index === 0 ? "Comprueba la comprensión conceptual trabajada." : "Comprueba que se aplica el procedimiento y se justifica la respuesta.",
        })),
      };
    }
    if (material === "evaluation_criteria") {
      artifacts.evaluation_criteria = {
        title: "Criterios de evaluación",
        criteria: [
          { criterion: "Comprensión conceptual", description: `Relaciona los conceptos con ${profile.specificObjective.toLowerCase()}.` },
          { criterion: "Aplicación y justificación", description: "Aplica el procedimiento o razonamiento trabajado y comunica una justificación pertinente." },
        ],
      };
    }
    if (material === "rubric") {
      artifacts.rubric = {
        title: "Rúbrica del paquete",
        evidenceExpected: content.activity.expectedEvidence,
        criteria: [
          {
            criterion: "Comprensión conceptual",
            description: `Valora la comprensión necesaria para ${profile.specificObjective.toLowerCase()}.`,
            levels: [
              { label: "Inicial", description: "Reconoce elementos aislados con apoyo." },
              { label: "Adecuado", description: "Relaciona conceptos y los aplica correctamente." },
              { label: "Avanzado", description: "Justifica decisiones y reconoce los límites del modelo." },
            ],
          },
          {
            criterion: "Evidencia de la tarea",
            description: "Valora la evidencia solicitada por la actividad o instrumento de evaluación.",
            levels: [
              { label: "Inicial", description: "Presenta una evidencia incompleta o sin justificación." },
              { label: "Adecuado", description: "Presenta la evidencia esperada y una justificación suficiente." },
              { label: "Avanzado", description: "Presenta evidencia precisa, justificada y crítica con los supuestos." },
            ],
          },
        ],
      };
    }
    if (material === "teacher_guide") {
      artifacts.teacher_guide = {
        title: "Guía docente breve",
        overview: `Secuencia para ${profile.name}: mantiene el objetivo general y ajusta apoyos y complejidad al perfil.`,
        sequence: [
          { step: "Activación", description: `Recupera los conocimientos previos declarados: ${profile.priorKnowledge}.` },
          { step: "Desarrollo", description: `Presenta la explicación y guía «${content.activity.title}».` },
          { step: "Comprobación", description: "Recoge la evidencia prevista y contrástala con la rúbrica o los criterios generados." },
        ],
        reviewNotes: "Revisar la adecuación de ejemplos, vocabulario, apoyos y evidencia antes de usar el paquete en el aula.",
      };
    }
  }

  return artifacts;
}

function materialForProfile(profile: StudentProfile, request: GenerationRequest): ProfileMaterialPackage {
  const accessibilitySummary = profile.accessibilitySupportIds.length
    ? ` Apoyos solicitados: ${accessibilitySupportLabels(profile.accessibilitySupportIds)}.`
    : "";
  const previous = request.revision?.profiles.find((item) => item.profileId === profile.id);

  return {
    profileId: profile.id,
    profileName: profile.name,
    generationId: `MOCK-${request.requestId}-${profile.id}`,
    version: previous ? previous.previousVersion + 1 : 1,
    status: "generated",
    adaptationSummary: `${profile.course}: ${profile.expectedComplexity === "introductory" ? "apoyo explícito y vocabulario accesible" : profile.expectedComplexity === "intermediate" ? "aplicación guiada e interpretación" : "modelización, justificación y límites"}.${accessibilitySummary}`,
    artifacts: artifactsForProfile(profile, request),
  };
}

export function generateMockMaterial(request: GenerationRequest): GenerationResponse {
  const title = request.topicKey ? topicContent[request.topicKey].title : `${request.topic}: paquete educativo adaptativo`;

  return {
    requestId: request.requestId,
    generationId: `MOCK-${request.requestId}-${Date.now().toString(36).toUpperCase()}`,
    mode: "mock",
    generatedAt: new Date().toISOString(),
    title,
    generalObjective: request.generalObjective,
    preset: request.preset,
    requestedMaterials: request.requestedMaterials,
    materials: request.profiles.map((profile) => materialForProfile(profile, request)),
  };
}
