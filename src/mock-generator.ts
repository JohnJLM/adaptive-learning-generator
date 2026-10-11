import type {
  AdaptedContent,
  Complexity,
  GenerationRequest,
  GenerationResponse,
  StudentProfile,
} from "./domain";

interface TopicContent {
  title: string;
  byComplexity: Record<Complexity, AdaptedContent>;
}

const topicContent: Record<GenerationRequest["topicKey"], TopicContent> = {
  genetics: {
    title: "Herencia genética: del vocabulario a la justificación",
    byComplexity: {
      introductory: {
        introduction: "Observaremos que algunos rasgos se relacionan con información hereditaria que se transmite entre generaciones.",
        explanation: "El ADN contiene instrucciones. Para este ejemplo usaremos plantas y una característica simplificada: cada planta recibe información de dos progenitores. Este modelo sirve para empezar, pero no describe todos los rasgos reales.",
        activity: {
          title: "Ordena la idea",
          instructions: "Relaciona ADN, progenitor, descendencia y característica usando las tarjetas indicadas. Después explica con una frase qué información recibe una planta de sus progenitores.",
          expectedEvidence: "Usa los términos con apoyo visual y expresa una relación básica de transmisión.",
        },
        checkQuestion: "¿Qué representa el ADN en el modelo que hemos usado?",
      },
      intermediate: {
        introduction: "Relacionaremos genotipo y fenotipo mediante un modelo mendeliano de un solo carácter.",
        explanation: "En este modelo, un alelo es una versión de un gen. El genotipo describe la combinación de alelos y el fenotipo el rasgo observable. Un cuadro de Punnett permite organizar posibilidades, no asegurar el resultado de cada descendiente.",
        activity: {
          title: "Cruce monohíbrido guiado",
          instructions: "Completa un cuadro de Punnett para un cruce Aa × Aa. Indica las combinaciones posibles de genotipo y el fenotipo esperado bajo el supuesto de dominancia completa.",
          expectedEvidence: "Distingue genotipo de fenotipo y explica la proporción como probabilidad del modelo.",
        },
        checkQuestion: "¿Por qué una proporción esperada no garantiza el resultado de un solo descendiente?",
      },
      advanced: {
        introduction: "Analizaremos predicciones de herencia como modelos probabilísticos con condiciones explícitas.",
        explanation: "Los cuadros de Punnett son útiles cuando los supuestos del modelo se cumplen. En cruces con dos caracteres, la regla de segregación independiente requiere condiciones que deben declararse; muchos rasgos humanos y biológicos no siguen una herencia mendeliana simple.",
        activity: {
          title: "Predicción y límites del modelo",
          instructions: "Formula la predicción de un cruce dihíbrido bajo segregación independiente. Explica qué supuestos has usado y plantea una situación en la que el modelo dejaría de ser suficiente.",
          expectedEvidence: "Calcula o argumenta probabilidades y distingue entre el modelo escolar y sistemas de herencia más complejos.",
        },
        checkQuestion: "¿Qué condición debes comprobar antes de usar una regla de producto en un cruce de dos caracteres?",
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
          instructions: "Una persona recorre 120 m en 30 s. Identifica distancia y tiempo, calcula la rapidez media y escribe la unidad resultante.",
          expectedEvidence: "Sustituye correctamente los datos, realiza la división y expresa m/s.",
        },
        checkQuestion: "Si se mantiene la distancia y aumenta el tiempo, ¿qué ocurre con la rapidez media?",
      },
      intermediate: {
        introduction: "Interpretaremos movimiento uniforme con ecuaciones, conversiones de unidades y gráficas de posición-tiempo.",
        explanation: "En un movimiento rectilíneo uniforme la velocidad permanece constante. La pendiente de una gráfica posición-tiempo representa la velocidad; antes de calcular hay que comprobar que las unidades sean coherentes.",
        activity: {
          title: "Lectura de una gráfica de posición-tiempo",
          instructions: "A partir de dos puntos de una gráfica, calcula la velocidad media. Convierte el resultado a km/h y explica qué significa una recta con pendiente mayor.",
          expectedEvidence: "Obtiene una pendiente con unidades y relaciona pendiente, velocidad y representación gráfica.",
        },
        checkQuestion: "¿Qué representa una pendiente nula en una gráfica de posición-tiempo?",
      },
      advanced: {
        introduction: "Modelizaremos movimiento rectilíneo con aceleración constante y evaluaremos el sentido físico de las soluciones.",
        explanation: "Con aceleración constante se puede relacionar velocidad y tiempo mediante v = v0 + at, y posición y tiempo mediante x = x0 + v0t + 1/2at². El signo de cada magnitud depende del sistema de referencia elegido.",
        activity: {
          title: "Modelo con aceleración constante",
          instructions: "Un móvil parte con velocidad inicial conocida y aceleración constante. Define un eje, calcula velocidad y posición tras un intervalo y justifica el signo de cada resultado.",
          expectedEvidence: "Selecciona ecuaciones coherentes, conserva unidades y contrasta el cálculo con una interpretación física.",
        },
        checkQuestion: "¿Qué supuesto permite usar una ecuación de posición cuadrática en el tiempo?",
      },
    },
  },
};

function materialForProfile(profile: StudentProfile, request: GenerationRequest) {
  const content = topicContent[request.topicKey].byComplexity[profile.expectedComplexity];

  return {
    profileId: profile.id,
    profileName: profile.name,
    adaptationSummary: `${profile.course}: ${profile.expectedComplexity === "introductory" ? "apoyo explícito y vocabulario accesible" : profile.expectedComplexity === "intermediate" ? "aplicación guiada e interpretación" : "modelización, justificación y límites"}.`,
    content,
  };
}

export function generateMockMaterial(request: GenerationRequest): GenerationResponse {
  return {
    requestId: request.requestId,
    generationId: `MOCK-${request.requestId}`,
    mode: "mock",
    generatedAt: "local-preview",
    title: topicContent[request.topicKey].title,
    generalObjective: request.generalObjective,
    materials: request.profiles.map((profile) => materialForProfile(profile, request)),
  };
}
