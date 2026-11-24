/* Spanish mirror of the study content. Same topic ids, same card/quiz counts,
   same quiz answer indices as data.js — so study progress is shared across languages. */
window.STUDY_DATA_ES = {
  tracks: {
    backend: {
      name: "Back-End",
      icon: "🗄️",
      tagline: "Arquitectura, APIs, bases de datos y concurrencia, caché, seguridad, Node.js y .NET, principios, patrones y POO.",
      topics: ["architecture", "distributed", "apis", "databases", "db-advanced", "cache-messaging", "security", "nodejs", "dotnet", "principles", "patterns", "oop", "antipatterns"],
      groups: [
        { name: "Diseño de Sistemas", topics: ["architecture", "distributed", "apis"] },
        { name: "Datos y Caché", topics: ["databases", "db-advanced", "cache-messaging"] },
        { name: "Seguridad", topics: ["security"] },
        { name: "Plataforma y Runtime", topics: ["nodejs", "dotnet"] },
        { name: "Diseño de Código", topics: ["principles", "patterns", "oop", "antipatterns"] }
      ]
    },
    frontend: {
      name: "Front-End",
      icon: "⚛️",
      tagline: "Fundamentos de JavaScript y CSS, React a fondo y WebSockets en tiempo real.",
      topics: ["js-core", "css-web", "react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing", "web-rt"],
      groups: [
        { name: "Fundamentos Web", topics: ["js-core", "css-web"] },
        { name: "React", topics: ["react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"] },
        { name: "Web en Tiempo Real", topics: ["web-rt"] }
      ]
    },
    fullstack: {
      name: "Full-Stack",
      icon: "🧩",
      tagline: "Todo: el currículo completo de back-end y front-end en una sola ruta.",
      topics: ["architecture", "distributed", "apis", "databases", "db-advanced", "cache-messaging", "security", "nodejs", "dotnet", "principles", "patterns", "oop", "antipatterns", "js-core", "css-web", "react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing", "web-rt"],
      groups: [
        { name: "Diseño de Sistemas", topics: ["architecture", "distributed", "apis"] },
        { name: "Datos y Caché", topics: ["databases", "db-advanced", "cache-messaging"] },
        { name: "Seguridad", topics: ["security"] },
        { name: "Plataforma y Runtime", topics: ["nodejs", "dotnet"] },
        { name: "Diseño de Código", topics: ["principles", "patterns", "oop", "antipatterns"] },
        { name: "Fundamentos Web", topics: ["js-core", "css-web"] },
        { name: "React", topics: ["react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"] },
        { name: "Web en Tiempo Real", topics: ["web-rt"] }
      ]
    }
  },

  topics: {
    /* ============================ BACK-END ============================ */
    "architecture": {
      title: "Monolito vs. Microservicios",
      track: "backend",
      icon: "🏛️",
      blurb: "La arquitectura de software es la organización de alto nivel de un sistema en unidades desplegables: un monolito se entrega como una sola aplicación, mientras que los microservicios lo dividen en servicios pequeños e independientes que se comunican por red.",
      read: `
        <p>La decisión no es "cuál es mejor" sino <strong>cuándo usar cada uno</strong>.</p>
        <table><thead><tr><th></th><th>Monolito / Monolito modular</th><th>Microservicios</th></tr></thead>
        <tbody>
        <tr><td>Ideal para</td><td>La mayoría de los equipos, sobre todo &lt; ~20 ingenieros</td><td>Dominios que necesitan desplegar/escalar de forma independiente</td></tr>
        <tr><td>Gana</td><td>Transacciones ACID, un solo pipeline de despliegue, debugging fácil, latencia en memoria</td><td>Aislamiento de fallos, escalado horizontal selectivo, autonomía de equipos</td></tr>
        <tr><td>Cuesta</td><td>Acoplamiento de despliegue a gran escala</td><td>Latencia de red, fallos parciales, transacciones distribuidas, sobrecarga operativa</td></tr>
        </tbody></table>
        <p><strong>Monolito distribuido (antipatrón):</strong> muchos servicios que comparten base de datos, se despliegan juntos o requieren cambios sincronizados — un monolito <em>más</em> la complejidad de la red. Si no puedes desplegar un servicio solo, no tienes microservicios.</p>
        <p><strong>Regla de inicio:</strong> empieza con un monolito modular con límites limpios; extrae servicios después (Strangler Fig) solo cuando aparezca una necesidad real — escalado o ritmo de despliegue independiente.</p>`,
      cards: [
        { q: "¿Cuándo es el monolito la elección correcta?", a: "Para la mayoría de los equipos, sobre todo con menos de ~20 ingenieros. Obtienes transacciones ACID simples, un solo pipeline de despliegue, debugging fácil y baja latencia al llamar en memoria." },
        { q: "¿Cuándo se justifican los microservicios?", a: "Cuando distintos dominios del negocio necesitan escalar o desplegarse de forma independiente. Ganas aislamiento de fallos, escalado horizontal selectivo y autonomía de equipos." },
        { q: "¿Cuál es el costo principal de los microservicios?", a: "Complejidad de red (latencia, fallos parciales), transacciones distribuidas y alta sobrecarga operativa — observabilidad y orquestación." },
        { q: "¿Qué es un 'monolito distribuido'?", a: "Un antipatrón: muchos servicios que siguen acoplados — comparten base de datos, se despliegan juntos o exigen cambios sincronizados. Es un monolito con la complejidad extra de la red." },
        { q: "¿Cómo saber si realmente tienes microservicios?", a: "Si no puedes desplegar un servicio de forma independiente, no los tienes. La posibilidad de despliegue independiente es la prueba clave." },
        { q: "¿Cuál es la arquitectura inicial recomendada?", a: "Un monolito modular con límites de módulo limpios. Extrae servicios a lo largo de esos límites después (Strangler Fig) solo cuando aparezca una necesidad real." },
        { q: "¿Qué es el patrón Strangler Fig?", a: "Migrar un monolito de forma incremental enviando funcionalidades específicas a nuevos servicios hasta 'estrangular' al núcleo viejo — en vez de una reescritura big-bang arriesgada." },
        { q: "¿Por qué preferir un monolito modular antes que microservicios prematuros?", a: "Conservas la simplicidad transaccional y el bajo costo operativo, manteniendo límites limpios que hacen barata una extracción futura. La complejidad debe seguir a una necesidad real, no antecederla." }
      ],
      quiz: [
        { q: "Una startup de 6 personas construye su primer producto. ¿Qué arquitectura debería ser la opción por defecto?", options: ["Microservicios desde el día uno", "Un monolito modular", "Funciones serverless por feature", "Un monolito distribuido"], answer: 1, explain: "Los equipos pequeños se benefician de la simplicidad ACID, un pipeline y debugging fácil. Extrae servicios después solo ante una necesidad real de escalado o despliegue." },
        { q: "¿Cuál es el síntoma definitorio de un monolito distribuido?", options: ["Los servicios usan distintos lenguajes", "Los servicios comparten base de datos y deben desplegarse juntos", "Los servicios se comunican por HTTP", "Hay más de cinco servicios"], answer: 1, explain: "El acoplamiento por base de datos compartida o despliegue conjunto significa un monolito más la complejidad de la red — lo peor de ambos mundos." },
        { q: "¿Cuál es la prueba de 'microservicios reales'?", options: ["Cada servicio tiene su propio repo", "Cada servicio puede desplegarse de forma independiente", "Cada servicio usa gRPC", "Cada servicio tiene un equipo aparte"], answer: 1, explain: "La propiedad central es el despliegue independiente. Un ritmo de despliegue compartido delata un monolito distribuido." },
        { q: "¿Cuál NO es un costo introducido por los microservicios?", options: ["Transacciones distribuidas", "Latencia de red y fallos parciales", "Debugging más simple con un solo pipeline", "Sobrecarga de observabilidad"], answer: 2, explain: "El debugging fácil con un pipeline es una ventaja del monolito. Los microservicios lo hacen más difícil, no más simple." },
        { q: "El patrón Strangler Fig se usa para…", options: ["Dividir una base de datos en shards", "Migrar un monolito a servicios de forma incremental", "Cachear llaves calientes", "Coordinar una Saga"], answer: 1, explain: "Envía funcionalidades a nuevos servicios una por una hasta reemplazar el núcleo viejo — evitando la reescritura big-bang." }
      ]
    },

    "distributed": {
      title: "Patrones de Sistemas Distribuidos",
      track: "backend",
      icon: "🌐",
      blurb: "Un sistema distribuido es un conjunto de servicios que corren en máquinas separadas y se coordinan a través de una red. Sus patrones son soluciones probadas para hacerlo de forma confiable: comunicación, fallos parciales y transacciones que cruzan servicios.",
      read: `
        <p><strong>Comunicación:</strong> síncrona (REST/gRPC) espera la respuesta — ideal para consultas que necesitan respuesta inmediata, con riesgo de fallos en cascada. Asíncrona (Kafka/RabbitMQ) publica y sigue — desacoplamiento y resiliencia, al costo de consistencia eventual.</p>
        <p><strong>Kit de resiliencia:</strong> Timeout (toda llamada remota necesita un plazo) · Reintentos con backoff exponencial + jitter · Circuit Breaker (falla rápido cuando una dependencia falla seguido) · Bulkhead (aísla pools de recursos por dependencia).</p>
        <p><strong>Saga:</strong> una transacción distribuida como secuencia de transacciones locales; un fallo dispara <em>transacciones de compensación</em>. Coreografía (eventos) vs orquestación (coordinador).</p>
        <p><strong>Transactional Outbox:</strong> escribe el cambio en la BD y el evento en la misma transacción local; un relay publica después. Resuelve el problema de la doble escritura.</p>
        <p><strong>Otros:</strong> API Gateway (routing/auth/rate-limit/TLS, sin lógica de negocio) · BFF (gateway por cliente) · CQRS (separa modelos de lectura/escritura) · Event Sourcing (eventos como fuente de verdad) · Sidecar · Health checks (liveness vs readiness).</p>`,
      cards: [
        { q: "¿Comunicación síncrona vs asíncrona entre servicios?", a: "Síncrona (REST/gRPC): quien llama espera — bueno para respuestas inmediatas, con riesgo de acoplamiento y fallos en cascada. Asíncrona (colas/eventos): publicar y seguir — desacoplamiento y resiliencia, pero consistencia eventual y debugging más difícil." },
        { q: "¿Qué hace un Circuit Breaker?", a: "Cuando una dependencia falla repetidamente, se 'abre' y falla rápido (o sirve un fallback) en vez de saturar el sistema esperando timeouts. Periódicamente se semi-abierto para sondear la recuperación." },
        { q: "¿Por qué agregar jitter al backoff de reintentos?", a: "Para que todos los clientes no reintenten en lockstep y resincronicen la sobrecarga. El backoff exponencial crece los delays; el jitter los aleatoriza." },
        { q: "¿Qué es el patrón Bulkhead?", a: "Aislar pools de recursos (threads, conexiones) por dependencia para que una dependencia lenta no consuma todo y tumbe el servicio completo." },
        { q: "¿Qué es una Saga?", a: "Una transacción distribuida como secuencia de transacciones locales. Si un paso falla, transacciones de compensación deshacen los pasos previos. Estilos: coreografía (eventos) u orquestación (un coordinador)." },
        { q: "¿Qué problema resuelve el Transactional Outbox?", a: "El problema de doble escritura: guardar en la BD y publicar un evento atómicamente. Escribe ambos en una transacción local (tabla outbox); un relay publica tras el commit, así los eventos nunca se pierden ni se publican por cambios no confirmados." },
        { q: "¿Qué NO debe contener un API Gateway?", a: "Lógica de negocio. Maneja routing, autenticación, rate limiting y terminación TLS — es la puerta de entrada única." },
        { q: "¿Cuándo usar CQRS y cuándo no?", a: "Separa modelos de escritura y lectura cuando las cargas difieren muchísimo. No lo uses sin esa necesidad — es un multiplicador de complejidad." },
        { q: "¿Event Sourcing vs 'usar Kafka'?", a: "Event Sourcing persiste la secuencia de eventos como fuente de verdad y deriva el estado reproduciéndola. No es lo mismo que simplemente usar Kafka. Poderoso para auditoría/consultas temporales; complejo (evolución de esquema, snapshots)." },
        { q: "¿Probes de liveness vs readiness?", a: "Liveness = 'el proceso está vivo' (reinicia si falla). Readiness = 'puede recibir tráfico ahora' (sácalo del load balancer si falla). Un servicio puede estar vivo pero no listo." }
      ],
      quiz: [
        { q: "Un servicio aguas abajo no deja de dar timeout y tus threads se acumulan esperando. ¿Qué patrón corta el problema?", options: ["Reintentos sin backoff", "Circuit Breaker", "Agregar más réplicas", "Aumentar el timeout"], answer: 1, explain: "El breaker se abre y falla rápido (o sirve un fallback) en vez de saturar el sistema esperando timeouts." },
        { q: "¿Por qué se agrega jitter al backoff exponencial?", options: ["Para reintentar más rápido", "Para evitar que los clientes reintenten en lockstep y resincronicen la sobrecarga", "Para encriptar el reintento", "Para reducir los reintentos a uno"], answer: 1, explain: "Los delays aleatorios desincronizan a los clientes para que no golpeen al servicio en recuperación al mismo tiempo." },
        { q: "Debes actualizar la BD y publicar un evento atómicamente. ¿Qué patrón?", options: ["Saga", "CQRS", "Transactional Outbox", "Bulkhead"], answer: 2, explain: "Escribe el cambio y el evento en una transacción local; un relay publica tras el commit — resolviendo el problema de doble escritura." },
        { q: "¿Qué pertenece a un API Gateway?", options: ["Reglas de precios de pedidos", "Routing, auth, rate limiting y TLS", "Joins de base de datos", "Validación de dominio"], answer: 1, explain: "El gateway es la puerta de entrada para preocupaciones transversales. La lógica de negocio debe quedarse fuera." },
        { q: "Una Saga maneja un paso fallido…", options: ["Haciendo rollback de una transacción ACID global", "Ejecutando transacciones de compensación para deshacer pasos previos", "Reintentando para siempre", "Ignorando el fallo"], answer: 1, explain: "No existe rollback ACID distribuido; cada paso local se deshace con una compensación explícita." },
        { q: "Un pod está corriendo pero aún calienta su caché. ¿Qué probe debería fallar?", options: ["Liveness", "Readiness", "Ambas", "Ninguna"], answer: 1, explain: "Readiness controla el tráfico. Está vivo (liveness pasa) pero no listo, así que debe salir del load balancer, no reiniciarse." }
      ]
    },

    "apis": {
      title: "APIs: REST, gRPC, GraphQL",
      track: "backend",
      icon: "🔌",
      blurb: "Una API (Application Programming Interface) es el contrato mediante el cual clientes y servicios intercambian datos por HTTP. REST, gRPC y GraphQL son los tres estilos dominantes para diseñar ese contrato.",
      read: `
        <table><thead><tr><th>Protocolo</th><th>Ideal para</th><th>Trade-off</th></tr></thead><tbody>
        <tr><td>REST</td><td>APIs públicas, CRUD, navegadores</td><td>Ubicuo, cacheable, legible; over/under-fetching</td></tr>
        <tr><td>gRPC</td><td>Llamadas internas entre servicios, baja latencia, streaming</td><td>Protobuf binario/HTTP2 rápido, contrato estricto; poco soporte en navegadores, no legible</td></tr>
        <tr><td>GraphQL</td><td>Formas flexibles para el frontend, agregación</td><td>El cliente elige los campos exactos; complejidad en el servidor, necesita límites de profundidad</td></tr>
        </tbody></table>
        <p><strong>Idempotencia:</strong> N ejecuciones = mismo resultado que una. GET/PUT/DELETE son idempotentes por especificación (si se implementan bien); POST no lo es — se arregla con una idempotency key. Un DELETE repetido que devuelve 404 sigue siendo idempotente (el estado no cambió).</p>
        <p><strong>Rate limiting:</strong> ventana fija (ráfaga en el borde) · sliding window log (preciso, memorioso) · sliding window counter (balanceado) · token bucket (ráfagas controladas, el más común) · leaky bucket (suaviza a ritmo constante). Aplícalo en el borde, por usuario/IP, coordina en Redis, devuelve 429 + Retry-After.</p>
        <p><strong>Principios REST:</strong> verbos correctos, status codes específicos, paginación/filtro/orden, versionado con deprecación, errores uniformes con correlation ID.</p>`,
      cards: [
        { q: "¿Cuándo elegirías gRPC sobre REST?", a: "Para llamadas internas entre microservicios que necesitan baja latencia, streaming o un contrato estricto en un entorno políglota. Protobuf binario sobre HTTP/2 es rápido; el soporte en navegadores es limitado y no es legible para humanos." },
        { q: "¿Cuándo elegirías GraphQL?", a: "Cuando los frontends necesitan formas de datos flexibles (móvil vs web) o agregación de muchos recursos. El cliente pide exactamente los campos que necesita. Costo: complejidad de resolvers/caché en el servidor y necesidad de límites de profundidad/complejidad de consulta." },
        { q: "¿Qué es idempotencia y por qué importa?", a: "Ejecutar una operación N veces da el mismo resultado que ejecutarla una. Permite que los reintentos tras timeouts o fallos de red no dupliquen efectos como cobros dobles." },
        { q: "¿Qué métodos HTTP son idempotentes?", a: "GET, PUT y DELETE — por especificación, si se implementan correctamente. POST no lo es; hazlo seguro con una idempotency key." },
        { q: "¿Un DELETE repetido que devuelve 404 sigue siendo idempotente?", a: "Sí. La idempotencia trata sobre el estado del servidor, no sobre los status codes. El recurso ya no existe, así que el estado no cambió." },
        { q: "¿Cómo haces idempotente un POST?", a: "Con una idempotency key: el cliente envía una llave única; el servidor guarda el primer resultado asociado a ella y devuelve el resultado guardado en los reintentos." },
        { q: "¿Token bucket vs leaky bucket?", a: "Token bucket permite ráfagas controladas hasta el tamaño del balde (se rellena a ritmo R) — el más usado. Leaky bucket procesa a ritmo constante, suavizando ráfagas pero agregando latencia de cola." },
        { q: "¿Qué tiene de malo el rate limiting por ventana fija?", a: "Ráfaga en el borde: un cliente puede usar hasta 2× el límite cruzando el borde de dos ventanas. Los enfoques de sliding window lo corrigen." },
        { q: "¿Qué debe incluir la respuesta de un rate limit?", a: "HTTP 429 Too Many Requests con cabecera Retry-After. Aplícalo en el gateway/borde, por usuario o IP, y coordina los contadores en Redis para limitadores distribuidos." }
      ],
      quiz: [
        { q: "Servicios internos necesitan llamadas de <10ms y streaming en un stack políglota. ¿La mejor opción?", options: ["REST", "GraphQL", "gRPC", "SOAP"], answer: 2, explain: "El Protobuf binario de gRPC sobre HTTP/2, sus contratos estrictos y el streaming encajan con comunicación interna de alto rendimiento." },
        { q: "Una app móvil y una web necesitan campos distintos de los mismos recursos. ¿La mejor opción?", options: ["gRPC", "GraphQL", "REST con ventana fija", "Webhooks"], answer: 1, explain: "GraphQL permite que cada cliente pida exactamente los campos que necesita, evitando over/under-fetching." },
        { q: "Un POST de pago da timeout y el cliente reintenta. ¿Cómo evitas el doble cobro?", options: ["Usar GET", "Agregar una idempotency key", "Desactivar reintentos", "Devolver siempre 200"], answer: 1, explain: "El servidor guarda el primer resultado con la idempotency key y lo reenvía en los reintentos." },
        { q: "¿Qué algoritmo de rate limiting permite ráfagas controladas?", options: ["Leaky bucket", "Ventana fija", "Token bucket", "Sliding window log"], answer: 2, explain: "El token bucket acumula tokens hasta una capacidad, permitiendo ráfagas hasta ese tamaño mientras aplica un ritmo promedio." },
        { q: "Un DELETE repetido devuelve 404. ¿Es idempotente?", options: ["No, el status cambió", "Sí, el estado del servidor no cambió", "Solo si devuelve 200", "La idempotencia no aplica a DELETE"], answer: 1, explain: "La idempotencia trata sobre el estado, no sobre el código de respuesta. El recurso sigue eliminado." },
        { q: "El problema de ráfaga en el borde es una debilidad de…", options: ["Token bucket", "Ventana fija", "Sliding window counter", "Leaky bucket"], answer: 1, explain: "Un cliente puede gastar toda su cuota al final de una ventana y otra al inicio de la siguiente — hasta 2× el límite." }
      ]
    },

    "databases": {
      title: "Bases de Datos y Concurrencia",
      track: "backend",
      icon: "🗃️",
      blurb: "Una base de datos almacena y recupera datos de la aplicación. Las bases SQL guardan los datos en tablas con garantías transaccionales ACID; las NoSQL cambian parte de esas garantías por esquemas flexibles y escalado horizontal — mientras el control de concurrencia evita que lectores y escritores simultáneos corrompan los datos.",
      read: `
        <p><strong>SQL vs NoSQL:</strong> SQL da esquema rígido, transacciones ACID, joins y reporting — tradicionalmente se escala verticalmente (máquina más grande), aunque Vitess/CockroachDB/Spanner/Aurora ya shardan SQL horizontalmente. NoSQL da documentos flexibles/sin esquema, consistencia eventual y escala horizontal por diseño, para datos masivos o de evolución rápida. <em>Elige por garantías y patrones de consulta, no por posibilidad</em>: un ledger necesita ACID; un log de eventos necesita volumen.</p>
        <p><strong>ACID y CAP:</strong> ACID = <em>Atomicidad</em> (todo o nada), <em>Consistencia</em> (estado válido entra → estado válido sale), <em>Aislamiento</em> (las transacciones concurrentes no se interfieren), <em>Durabilidad</em> (lo confirmado sobrevive a fallos). CAP dice: <em>durante una Partición de red</em>, un sistema distribuido debe elegir Consistencia o Disponibilidad — no puede garantizar ambas en ese momento. La formulación precisa importa: las particiones son inevitables, así que la elección solo existe cuando una ocurre; muchos sistemas ajustan por operación (quorum: CP pagos, AP feeds). PACELC agrega el eje siguiente: incluso sin particiones hay trade-off Latencia-vs-Consistencia.</p>
        <p><strong>Indexación:</strong> un B-Tree mantiene las llaves ordenadas para lookups O(log n) — <code>SELECT</code> más rápido, pero cada <code>INSERT/UPDATE</code> debe mantenerlo (escrituras más lentas, más almacenamiento). Indexa las columnas de <code>WHERE</code>, <code>JOIN</code> y <code>ORDER BY</code>. <em>El orden compuesto importa</em>: igualdad primero, luego rango/orden — <code>(user_id, created_at)</code> sirve <code>WHERE user_id=? ORDER BY created_at</code>, el inverso no. Un <strong>covering index</strong> contiene todas las columnas que la query necesita y la BD nunca toca la tabla. Lo que rompe el índice: funciones sobre la columna (<code>LOWER(email)</code>), wildcards al inicio (<code>LIKE '%foo'</code>), baja selectividad, estadísticas viejas. El movimiento senior ante "consulta lenta" es leer el plan (<code>EXPLAIN ANALYZE</code>): busca seq scans donde debería haber index scans, desajustes de estimación (estadísticas viejas) y tipos de join caros.</p>
        <p><strong>Aislamiento y MVCC:</strong> los cuatro niveles del estándar SQL — Read Uncommitted, Read Committed, Repeatable Read, Serializable — previenen respectivamente más anomalías: dirty reads, luego non-repeatable reads, luego phantoms. <em>MVCC</em> (control de concurrencia multi-versión) es cómo los engines modernos los implementan: cada transacción ve un <strong>snapshot</strong> consistente, así que <em>los lectores nunca bloquean escritores</em>. Matiz de entrevista: el Repeatable Read de Postgres es en realidad snapshot isolation — previene phantoms pero permite <strong>write skew</strong> (dos transacciones leen datos que se solapan y escriben actualizaciones disjuntas, invalidando cada una la suposición de la otra); solo Serializable lo detecta. Las lost updates (dos transacciones leen-modifican-escriben la misma fila) se arreglan con locks (<code>SELECT ... FOR UPDATE</code>) o SQL atómico (<code>SET x = x + 1</code>).</p>
        <p><strong>Deadlocks:</strong> dos transacciones que cada una tiene el lock que la otra necesita, así que ambas esperan para siempre — la BD detecta el ciclo y aborta una como víctima (tu código debe reintentar; SQLSTATE 40001). Prevención: orden de locks consistente en todos los caminos, transacciones cortas (nunca llamadas de red dentro), e índices adecuados — sin ellos una query bloquea muchas más filas de las que necesita.</p>
        <p><strong>Locking optimista vs pesimista:</strong> el optimista guarda una columna de versión y hace <code>UPDATE ... WHERE version = n</code> — si cambian 0 filas, alguien ganó antes (baja contención, sin locks). El pesimista hace <code>SELECT ... FOR UPDATE</code> y sostiene el lock de la fila (alta contención, pero serializa escritores). La replicación copia datos a otros nodos para alta disponibilidad y escalado de lecturas (ojo con el lag — lecturas viejas). El sharding divide datos por llave entre nodos para escalar escrituras (los joins/transacciones entre shards se vuelven dolorosos — ese es el precio).</p>`,
      cards: [
        { q: "¿Cómo eliges entre SQL y NoSQL?", a: "SQL: esquema rígido, transacciones ACID, joins, reporting — escalado tradicional vertical (o SQL distribuido moderno). NoSQL: esquema flexible, consistencia eventual, escala horizontal para datos masivos o de evolución rápida. Decide por garantías y patrones de consulta: un ledger necesita ACID, un log de eventos necesita volumen — '¿puede escalar?' es la pregunta equivocada." },
        { q: "Enuncia ACID.", a: "Atomicidad: todo o nada. Consistencia: estado válido entra → estado válido sale. Aislamiento: las transacciones concurrentes no se interfieren. Durabilidad: lo confirmado sobrevive a fallos (WAL + fsync). ACID es el contrato SQL; NoSQL suele cambiar partes de él por disponibilidad y escala (BASE)." },
        { q: "Enuncia con precisión el teorema CAP.", a: "Durante una Partición de red — no en todo momento — un sistema distribuido debe elegir Consistencia o Disponibilidad, ya que no puede garantizar ambas mientras dure la partición. Sin partición puedes tener ambas, y la mayoría de sistemas ajustan por operación (CP pagos, AP feeds). PACELC agrega: incluso sin particiones hay trade-off Latencia-vs-Consistencia (p. ej. quórum de lecturas)." },
        { q: "¿Cuál es el trade-off de un índice?", a: "Lecturas más rápidas (B-Tree, O(log n)) al costo de escrituras más lentas — cada INSERT/UPDATE debe mantenerlo — más almacenamiento extra. Indexa las columnas de WHERE, JOIN y ORDER BY; deja en paz las columnas de escritura intensiva o raramente consultadas." },
        { q: "¿Cómo se ordenan las columnas en un índice compuesto?", a: "Primero las columnas de igualdad, luego las de rango/orden: (user_id, created_at) sirve WHERE user_id=? ORDER BY created_at, porque la igualdad acota el recorrido del B-Tree y las entradas restantes ya vienen ordenadas por fecha. El orden inverso no lo usa para ordenar — haría scan y sort." },
        { q: "¿Qué rompe el uso de un índice?", a: "Funciones sobre la columna (WHERE LOWER(email) = ...), wildcards al inicio (LIKE '%foo'), baja selectividad (un flag 90% true) y estadísticas viejas. Arreglo: índices de expresión, full-text search o actualizar estadísticas — no adivines, lee EXPLAIN ANALYZE." },
        { q: "Nombra los cuatro niveles de aislamiento y qué previenen.", a: "Read Uncommitted: nada (ve datos sin confirmar). Read Committed: previene dirty reads. Repeatable Read: previene non-repeatable reads (re-leer da la misma fila). Serializable: también previene phantoms. Cada nivel compra más corrección con menos concurrencia — ese es todo el trade-off." },
        { q: "¿Qué es MVCC?", a: "Control de Concurrencia Multi-Versión: el engine conserva versiones viejas para que cada transacción lea un snapshot consistente — los lectores nunca bloquean escritores y viceversa. Es la implementación detrás del aislamiento moderno. Postgres usa Read Committed por defecto, MySQL InnoDB Repeatable Read; el snapshot isolation (RR de Postgres) previene phantoms pero permite write skew." },
        { q: "¿Qué es write skew?", a: "Bajo snapshot isolation: dos transacciones leen datos que se solapan, cada una escribe algo disjunto que viola la suposición de la otra (p. ej. ambas verifican '≥1 doctor de turno' y salen — quedan cero). Las lecturas fueron snapshots consistentes, así que no se detecta conflicto de escritura. Solo Serializable (o locking explícito) lo previene." },
        { q: "¿Cómo se previenen los deadlocks?", a: "Orden de locks consistente en todos los caminos (tocar filas/tablas en el mismo orden), transacciones cortas — nunca sostener locks entre llamadas de red — e índices adecuados para bloquear pocas filas en vez de escanear la tabla. Encima: reintentar el error de deadlock (40001); es un error esperado, no un crash." },
        { q: "¿Locking optimista vs pesimista?", a: "Optimista: columna de versión; UPDATE ... WHERE version = n, y si cambian 0 filas, alguien ganó — sin locks, perfecto para baja contención. Pesimista: SELECT ... FOR UPDATE sostiene el lock de la fila hasta el commit — seguro con alta contención, pero serializa escritores y arriesga deadlocks. Elige por probabilidad de colisión, no solo por seguridad." },
        { q: "¿Replicación vs sharding?", a: "Replicación: los mismos datos en múltiples nodos — alta disponibilidad (failover) y escalado de lecturas (las réplicas van por detrás, lecturas viejas). Sharding: datos divididos por llave entre nodos — escalado de escrituras y almacenamiento más allá de una máquina, pero los joins/transacciones entre shards son duros y resinchar es cirugía. Problemas distintos: HA/lecturas vs escrituras/almacenamiento." }
      ],
      quiz: [
        { q: "Durante una partición de red, CAP dice que debes elegir entre…", options: ["Consistencia y Disponibilidad", "Atomicidad y Durabilidad", "Latencia y Throughput", "SQL y NoSQL"], answer: 0, explain: "La elección C-vs-A solo existe durante una partición — sin partición puedes tener ambas, y la mayoría ajusta por operación (CP pagos, AP feeds)." },
        { q: "¿Qué índice compuesto sirve a WHERE user_id=? ORDER BY created_at?", options: ["(created_at, user_id)", "(user_id, created_at)", "(user_id) solo", "Ningún índice ayuda"], answer: 1, explain: "La igualdad primero acota el recorrido del B-Tree, y las entradas ya vienen ordenadas por created_at — el inverso haría scan y sort." },
        { q: "¿Qué consulta derrota un índice sobre email?", options: ["WHERE email = ?", "WHERE LOWER(email) = ?", "WHERE email LIKE 'a%'", "ORDER BY email"], answer: 1, explain: "Una función sobre la columna fuerza full scan; un índice de expresión sobre LOWER(email) o una columna normalizada lo arregla." },
        { q: "Dos transacciones leen datos que se solapan y escriben actualizaciones disjuntas, rompiendo cada una la suposición de la otra. Esto es…", options: ["Una dirty read", "Una phantom read", "Write skew", "Una lost update"], answer: 2, explain: "El snapshot isolation no ve conflicto de escritura porque son disjuntas — solo Serializable detecta el invariante violado." },
        { q: "¿La mejor estrategia de locking para editar un registro con baja contención?", options: ["Lock pesimista de fila", "Chequeo optimista de versión", "Lock de tabla", "Serializable para todo"], answer: 1, explain: "El optimista no sostiene locks y detecta conflictos por columna de versión — costo cero cuando las colisiones son raras." },
        { q: "Necesitas escalar escrituras más allá de una máquina. Usas…", options: ["Réplicas de lectura", "Sharding", "Un CPU más grande", "Más índices"], answer: 1, explain: "La replicación escala lecturas y disponibilidad; el sharding divide los datos por llave para escalar escrituras y almacenamiento." },
        { q: "El primer paso senior ante 'esta consulta es lenta' es…", options: ["Agregar un índice de inmediato", "Leer el plan de consulta (EXPLAIN ANALYZE)", "Cambiar a NoSQL", "Cachear todo"], answer: 1, explain: "Diagnostica primero: seq scans, desajustes de estimación (estadísticas) y tipos de join te dicen qué pasa realmente antes de cambiar nada." }
      ]
    },

    "cache-messaging": {
      title: "Caché y Mensajería",
      track: "backend",
      icon: "⚡",
      blurb: "Una caché es una capa rápida en memoria (como Redis) que conserva los datos más usados cerca de la aplicación para evitar golpear la base de datos. Un message broker (RabbitMQ, Kafka) permite que los servicios se comuniquen de forma asíncrona mediante mensajes o eventos.",
      read: `
        <p><strong>Estrategias de caché:</strong> Cache-Aside (lee caché; en miss lee BD + llena; invalida al escribir — la opción por defecto) · Write-Through (escribe caché + BD juntas; consistencia fuerte, más latencia de escritura) · Write-Behind (escribe caché, BD asíncrona; lo más rápido, riesgo de pérdida de datos).</p>
        <p><strong>Modos de fallo:</strong> Penetración (llaves inexistentes siempre golpean la BD → cachea marcadores vacíos) · Avalancha (muchas llaves expiran a la vez → TTLs con jitter) · Hot Key (una llave satura un nodo → replicar/caché local) · Stampede (una llave caliente expira y muchos fallan a la vez → coalescing de peticiones).</p>
        <p><strong>RabbitMQ vs Kafka:</strong> RabbitMQ = cola, el mensaje se consume y se elimina, semántica de tareas (emails, procesamiento de imágenes). Kafka = log distribuido, retenido y releíble por muchos grupos de consumidores, orden por partición, replay (event streaming, event sourcing).</p>
        <p><strong>Consistent hashing:</strong> hash%N remarpa casi todas las llaves cuando cambia N (avalancha). El consistent hashing coloca nodos/llaves en un anillo; cada llave va al nodo más cercano en sentido horario; agregar/quitar un nodo solo remarpa ~1/N de las llaves. Los virtual nodes suavizan la carga. Lo usan DynamoDB, Cassandra, Memcached y CDNs.</p>`,
      cards: [
        { q: "Describe Cache-Aside.", a: "La app lee la caché; en miss lee la BD y llena la caché. Las escrituras actualizan la BD e invalidan la entrada. Simple y es la opción por defecto; breve staleness y una primera lectura lenta tras la invalidación." },
        { q: "¿Write-Through vs Write-Behind?", a: "Write-Through escribe en caché y BD juntas — consistencia fuerte, más latencia de escritura. Write-Behind escribe en caché y actualiza la BD asíncronamente — escrituras más rápidas pero riesgo de perder datos si la caché muere antes del flush." },
        { q: "¿Qué es la penetración de caché y su solución?", a: "Consultas por llaves que nunca existen que siempre fallan y golpean la BD. Solución: cachear marcadores 'vacíos' con TTL corto, o validar/filtrar en el borde." },
        { q: "¿Qué es la avalancha de caché y su solución?", a: "Muchas llaves expiran simultáneamente y la avalancha golpea la BD. Solución: TTLs con jitter más circuit breaker/fallbacks en la BD." },
        { q: "¿Qué es una hot key y su solución?", a: "Una llave extremadamente popular que satura un solo nodo de caché. Solución: replicar la llave entre nodos o agregar una capa de caché local en el proceso." },
        { q: "¿RabbitMQ vs Kafka en una línea?", a: "RabbitMQ es para trabajo que se hace una vez (cola, el mensaje se elimina tras consumirse). Kafka es para eventos que muchos observan, para siempre (log retenido, con replay y múltiples grupos de consumidores)." },
        { q: "¿Por qué el hash%N ingenuo es malo para escalar un clúster de caché?", a: "Cambiar N remarpa casi todas las llaves — equivale a vaciar toda la caché, causando una avalancha. El consistent hashing limita el remapeo a ~1/N de las llaves." },
        { q: "¿Cómo funciona el consistent hashing?", a: "Nodos y llaves se colocan en un anillo de hash; cada llave pertenece al nodo más cercano en sentido horario. Agregar/quitar un nodo solo remarpa las llaves de ese arco (~1/N). Los virtual nodes (cada nodo físico aparece muchas veces) suavizan la distribución de carga." },
        { q: "¿Por qué preferir el escalado horizontal y qué exige?", a: "Más máquinas da elasticidad y tolerancia a fallos. Exige servicios sin estado — sin estado de sesión en el servidor; las sesiones viven en el cliente (tokens) o en un store compartido (Redis)." }
      ],
      quiz: [
        { q: "¿Qué estrategia de caché arriesga pérdida de datos si la caché muere antes del flush?", options: ["Cache-Aside", "Write-Through", "Write-Behind", "Read-Through"], answer: 2, explain: "Write-Behind actualiza la BD de forma asíncrona, así que las escrituras sin flush pueden perderse." },
        { q: "Muchas llaves expiran a la vez e inundan la BD. Esto es…", options: ["Penetración", "Avalancha", "Hot key", "Stampede"], answer: 1, explain: "Avalancha = expiración masiva simultánea. Se arregla con TTLs con jitter y fallbacks en la BD." },
        { q: "Necesitas un log de eventos que muchos consumidores independientes puedan releer. Elige…", options: ["RabbitMQ", "Kafka", "Redis pub/sub", "Una tabla SQL"], answer: 1, explain: "El log retenido y releíble de Kafka con múltiples grupos de consumidores encaja con event streaming y event sourcing." },
        { q: "Agregar un nodo a un anillo de consistent hashing remarpa aproximadamente…", options: ["Todas las llaves", "La mitad de las llaves", "~1/N de las llaves", "Ninguna llave"], answer: 2, explain: "Solo las llaves del arco afectado se mueven — cerca de 1/N — frente a casi todas con el módulo ingenuo." },
        { q: "Las consultas por llaves que nunca existen siguen golpeando la BD. Esto es…", options: ["Avalancha", "Penetración", "Hot key", "Write skew"], answer: 1, explain: "Penetración. Cachea marcadores vacíos con TTL corto o valida en el borde." },
        { q: "El escalado horizontal exige fundamentalmente que los servicios sean…", options: ["Con estado", "Sin estado", "Single-threaded", "Síncronos"], answer: 1, explain: "Sin estado de sesión en el servidor, cualquier instancia puede atender cualquier request; las sesiones viven en tokens o un store compartido." }
      ]
    },

    "security": {
      title: "Seguridad y Autenticación",
      track: "backend",
      icon: "🔐",
      blurb: "La autenticación verifica quién es el usuario; la autorización decide qué puede hacer. La seguridad también significa proteger datos y endpoints — JWTs para sesiones sin estado, OAuth 2.0/OIDC para acceso delegado y consultas parametrizadas contra inyección.",
      read: `
        <p><strong>AuthN vs AuthZ:</strong> la autenticación verifica <em>quién eres</em> (login); la autorización verifica <em>qué puedes hacer</em> (permisos).</p>
        <p><strong>JWT:</strong> un token <em>firmado, no encriptado</em> que lleva claims; el servidor verifica la firma, sin store de sesiones → escalado sin estado. La revocación exige una blocklist en Redis o una versión de sesión por usuario. Access tokens de vida corta + refresh tokens limitan la ventana de daño.</p>
        <p><strong>OAuth 2.0:</strong> un framework de <em>autorización</em>, no de autenticación — acceso delegado sin compartir la contraseña. 'Inicia sesión con Google' obtiene la identidad vía <strong>OIDC</strong>, la capa de autenticación encima.</p>
        <p><strong>Inyección SQL:</strong> se previene con consultas parametrizadas / prepared statements o binding del ORM — nunca concatenando entrada del usuario. El mismo principio aplica a inyección de comandos y plantillas.</p>
        <p><strong>Postura general:</strong> mínimo privilegio, validar toda entrada, nunca confiar en el cliente, secretos fuera del código, TLS en todas partes.</p>`,
      cards: [
        { q: "¿Autenticación vs autorización?", a: "AuthN verifica quién eres (login). AuthZ verifica qué puedes hacer (permisos). Confundirlas es el error clásico de entrevista." },
        { q: "¿Un JWT está encriptado?", a: "No — está firmado, no encriptado. El payload (claims) es legible; la firma garantiza integridad. El servidor verifica la firma y no necesita store de sesiones." },
        { q: "¿Cómo revocas un JWT antes de que expire?", a: "Como es sin estado, usa una blocklist en Redis o una versión de sesión por usuario embebida en los claims. Access tokens de vida corta + refresh tokens limitan la ventana de daño." },
        { q: "¿Es OAuth 2.0 un protocolo de autenticación?", a: "No — es un framework de autorización para acceso delegado sin compartir contraseña. La autenticación encima es OIDC (OpenID Connect), que es lo que usa 'Inicia sesión con Google' para la identidad." },
        { q: "¿Cómo se previene la inyección SQL?", a: "Consultas parametrizadas / prepared statements o binding del ORM — nunca concatenar entrada del usuario en la cadena de la consulta. El mismo principio aplica a inyección de comandos y plantillas." },
        { q: "Enuncia la postura general de seguridad.", a: "Mínimo privilegio, validar toda entrada, nunca confiar en el cliente, secretos fuera del código (env/secret manager), cabeceras de seguridad y TLS en todas partes." }
      ],
      quiz: [
        { q: "Verificar qué acciones puede realizar un usuario con sesión iniciada es…", options: ["Autenticación", "Autorización", "Encriptación", "Hashing"], answer: 1, explain: "AuthN = quién eres; AuthZ = qué puedes hacer." },
        { q: "El payload de un JWT está…", options: ["Encriptado e ilegible", "Firmado pero legible", "Hasheado irreversible", "Guardado solo en el servidor"], answer: 1, explain: "Los JWT se firman, no se encriptan — los claims son legibles; la firma asegura integridad." },
        { q: "Para invalidar un JWT en el logout se suele usar…", options: ["Nada, expira eventualmente", "Una blocklist en Redis o una versión de sesión", "Re-encriptarlo", "Eliminar al usuario"], answer: 1, explain: "Los tokens sin estado no pueden 'des-enviarse'; una blocklist o una versión por usuario permite revocación temprana." },
        { q: "'Inicia sesión con Google' obtiene los claims de identidad vía…", options: ["Solo OAuth 2.0", "OIDC encima de OAuth 2.0", "Solo SAML", "Basic auth"], answer: 1, explain: "OAuth 2.0 es autorización; OIDC es la capa de autenticación que provee la identidad." },
        { q: "La defensa correcta contra inyección SQL es…", options: ["Escapar comillas manualmente", "Consultas parametrizadas / prepared statements", "Bloquear la palabra SELECT", "Usar solo GET"], answer: 1, explain: "Liga parámetros para que la entrada nunca se interprete como SQL. El escape manual es frágil." }
      ]
    },

    "principles": {
      title: "Principios de Diseño",
      track: "backend",
      icon: "🧭",
      blurb: "Los principios de diseño son guías que mantienen el código mantenible a medida que crece — SOLID, DRY, KISS y YAGNI a nivel de clase, más reglas a nivel de sistema como ausencia de estado, bounded contexts y observabilidad por diseño.",
      read: `
        <p><strong>SOLID:</strong> SRP (una razón para cambiar) · OCP (extender sin modificar) · LSP (subtipos sustituibles) · ISP (interfaces pequeñas y específicas) · DIP (depender de abstracciones).</p>
        <p><strong>Otros:</strong> DRY (no dupliques conocimiento; duplicar dos veces no siempre es malo) · KISS · YAGNI (construye cuando se necesita) · Separación de responsabilidades · Composición sobre herencia · Fail fast · Ley de Demeter (sin cadenas a.getB().getC()).</p>
        <p><strong>Arquitectura back-end:</strong> Bounded Context (divide por dominio) · Sin estado · Idempotencia · Contract-first + compatibilidad hacia atrás · Consistencia eventual · Single Source of Truth (un dueño por dato) · Observabilidad/Seguridad/Resiliencia por diseño · App 12-Factor.</p>`,
      cards: [
        { q: "Enuncia SOLID.", a: "SRP: una clase/módulo, una razón para cambiar. OCP: extender sin modificar. LSP: subtipos sustituibles por sus padres. ISP: interfaces pequeñas y específicas. DIP: depender de abstracciones, no de clases concretas." },
        { q: "¿Cómo se ve OCP en código back-end?", a: "Agregar un nuevo proveedor de pagos vía una Strategy en vez de editar un switch que crece sin control — el procesador queda abierto a extensión, cerrado a modificación." },
        { q: "¿Qué es DIP y por qué importa?", a: "Dependency Inversion: depender de abstracciones (interfaces), no de clases concretas. Es la base de la testeabilidad y de la infraestructura intercambiable (OrderService depende de OrderRepository, no de MySQLOrderRepository)." },
        { q: "¿El matiz de DRY?", a: "No dupliques conocimiento — pero duplicar código dos veces no es automáticamente malo. La unificación prematura acopla cosas que evolucionan por separado." },
        { q: "¿KISS y YAGNI?", a: "KISS: prefiere la solución simple que funciona. YAGNI: constrúyelo cuando haya una necesidad real, no 'por si acaso'." },
        { q: "¿Qué es la Ley de Demeter?", a: "No encadenes llamadas a través de objetos ajenos (a.getB().getC().doSomething()) — te acopla a estructuras que no deberías conocer." },
        { q: "¿Qué es un Bounded Context?", a: "Cada servicio/módulo posee un límite de negocio claro — se divide por dominio, no por capas técnicas." },
        { q: "¿Qué es Single Source of Truth?", a: "Cada dato tiene un único dueño; nunca dejes que dos servicios escriban la misma tabla. Evita acoplar esquemas y equipos." },
        { q: "Nombra los principios 'por diseño'.", a: "Observabilidad (logs/métricas/traces/correlation IDs), Seguridad (mínimo privilegio, validar entrada, sin secretos en el código), Resiliencia (timeouts, reintentos, circuit breakers, degradación elegante)." },
        { q: "¿Qué es contract-first?", a: "Define el contrato de API/evento antes de implementar; versiona; mantiene compatibilidad hacia atrás; deprecate antes de eliminar." }
      ],
      quiz: [
        { q: "Agregar un proveedor de pagos sin editar el procesador demuestra…", options: ["SRP", "OCP", "LSP", "DRY"], answer: 1, explain: "Open/Closed: extender vía una nueva strategy sin modificar código existente." },
        { q: "OrderService depende de la interfaz OrderRepository, no de una clase MySQL. Esto es…", options: ["ISP", "DIP", "KISS", "SoC"], answer: 1, explain: "Dependency Inversion — depender de abstracciones para testeabilidad e intercambiabilidad." },
        { q: "Una interfaz Repository con 20 métodos, mitad vacíos en los implementadores, viola…", options: ["SRP", "OCP", "ISP", "LSP"], answer: 2, explain: "Interface Segregation: divídela en interfaces pequeñas y específicas." },
        { q: "Dos microservicios escribiendo la misma tabla viola…", options: ["Bounded Context / Single Source of Truth", "KISS", "Fail fast", "12-Factor"], answer: 0, explain: "Cada dato debe tener un dueño; las escrituras compartidas acoplan esquemas y equipos." },
        { q: "Construir una feature 'por si acaso' se necesita después viola…", options: ["DRY", "YAGNI", "LSP", "DIP"], answer: 1, explain: "YAGNI — implementa cuando haya una necesidad real." },
        { q: "a.getB().getC().doSomething() lo desaconseja…", options: ["La Ley de Demeter", "KISS", "OCP", "CAP"], answer: 0, explain: "La Ley de Demeter limita el conocimiento de estructuras de objetos ajenos para reducir acoplamiento." }
      ]
    },

    "patterns": {
      title: "Patrones de Diseño",
      track: "backend",
      icon: "🧱",
      blurb: "Un patrón de diseño es una solución con nombre y reutilizable a un problema que se repite en el diseño de software. El catálogo clásico de la Gang of Four cubre creación y estructura de objetos; el desarrollo back-end agrega patrones de arquitectura como Repository, Saga y Outbox.",
      read: `
        <p>Un patrón de diseño es una solución con nombre y reutilizable a un problema que se repite. Cada patrón tiene cuatro partes: un <strong>contexto</strong> (cuándo aplica), un <strong>problema</strong> (qué fuerzas fuerzan repetir el diseño), una <strong>solución</strong> (estructura de objetos y colaboración) y <strong>consecuencias</strong> (resultados y trade-offs). Los patrones son vocabulario: decir "aquí usaría un Strategy" reemplaza un párrafo de explicación en un code review.</p>
        <pre><code>La taxonomía Gang-of-Four (1994) — por QUÉ VARÍA:

Patrones de diseño
├── Creacionales    — cómo se crean los objetos
│   ├── Factory Method · Abstract Factory · Builder · Prototype · Singleton
├── Estructurales   — cómo se componen clases y objetos
│   └── Adapter · Facade · Decorator · Proxy · DTO/Mapper
└── De comportamiento — cómo colaboran los objetos y se reparten responsabilidades
    ├── Strategy · State · Template Method · Observer · Chain of Responsibility</code></pre>
        <p><strong>Los tres tipos de un vistazo:</strong></p>
        <table><thead><tr><th>Tipo</th><th>Pregunta que responde</th><th>Qué varía</th></tr></thead><tbody>
        <tr><td>Creacional</td><td>¿Cómo se crean los objetos?</td><td>Qué clases concretas se instancian</td></tr>
        <tr><td>Estructural</td><td>¿Cómo se componen clases y objetos?</td><td>Cómo se conectan las piezas sin acoplarlas</td></tr>
        <tr><td>De comportamiento</td><td>¿Cómo colaboran los objetos?</td><td>Algoritmos y reparto de responsabilidades en runtime</td></tr>
        </tbody></table>
        <p>Abajo cada tipo tiene su definición, sus patrones y cuándo aplica. Los básicos de back-end — Repository, Unit of Work, Dependency Injection — no son Gang-of-Four; van al final porque las entrevistas los preguntan igual.</p>

        <h4>1 · Creacionales — cómo se crean los objetos</h4>
        <p><strong>Definición:</strong> los patrones creacionales abstraen la <em>instanciación</em> para desacoplar el sistema de cómo se crean, componen y representan sus objetos. Importan cuando la creación es compleja, varía por configuración, o forzaría a los llamadores a hardcodear clases concretas — el acoplamiento que eliminan. <em>No</em> cambian cómo se comportan los objetos después; solo controlan cómo vienen al mundo.</p>
        <p><strong>Factory Method</strong> (clase) · <strong>Abstract Factory</strong> (familias de productos relacionados) · <strong>Builder</strong> (construcción paso a paso) · <strong>Prototype</strong> (clonar una instancia prototipo) · <strong>Singleton</strong> (una instancia compartida). Aquí verás los dos que de verdad aparecen en entrevistas de back-end.</p>
        <p><strong>Factory Method.</strong> Un método decide qué clase concreta instanciar, así los llamadores dependen de una abstracción y no de constructores. Ejemplo: <code>SenderFactory.forProvider(config)</code> devolviendo un sender de SendGrid o SES. Omitelo cuando la construcción es un simple <code>new</code> sin variación.</p>
        <pre><code>// El llamador conoce ISender, nunca SendGridSender o SesSender.
ISender CreateSender(string provider) =&gt;
    provider switch {
        "sendgrid" =&gt; new SendGridSender(),
        "ses"      =&gt; new SesSender(),
        _          =&gt; throw new ArgumentException(provider)
    };</code></pre>
        <p><strong>Builder.</strong> Ensambla un objeto complejo paso a paso con una API fluida en vez de constructores telescópicos. Ejemplo: <code>Query.select(...).where(...).limit(...)</code>. Omitelo para objetos con dos campos.</p>
        <pre><code>var q = new SqlQueryBuilder()
    .Select("id", "name")
    .From("users")
    .Where("age &gt; 18")
    .OrderBy("created_at")
    .Build(); // un objeto que nadie construirá en una sola llamada</code></pre>
        <p><strong>Singleton.</strong> Garantiza una única instancia compartida con acceso global. En back-end, prefiere el scope singleton del contenedor DI sobre un <code>getInstance()</code> manual — un singleton estático esconde dependencias, bloquea el testing y trae sorpresas de concurrencia.</p>

        <h4>2 · Estructurales — cómo se componen clases y objetos</h4>
        <p><strong>Definición:</strong> los patrones estructurales componen clases y objetos en estructuras mayores manteniéndolas flexibles y eficientes. Responden "¿cómo se conectan estas piezas?" introduciendo indirección — un envoltorio, un puente, un suplente — para que las partes puedan cambiar o agregarse sin tocar el todo. Agregan relaciones <em>entre</em> objetos (agregación, delegación) en vez de comportamiento dentro de ellos; el precio es una capa de indirección extra, así que solo pagan cuando el acoplamiento que quitan es real.</p>
        <pre><code>Cliente ──usa──► [Abstracción] ◄──implementan── Concretos
                      ▲
                      │ (los patrones estructurales insertan uno de estos)
        ┌─────────────┴──────────────┐
   Adapter: API de vendor → nuestro puerto   Facade: muchas llamadas → una
   Decorator/Proxy: envoltorio de            DTO/Mapper: entidad ↔ contrato
        │                          │
   misma interfaz, nuevo behavior  nueva superficie, mismo subsistema</code></pre>
        <p><strong>Adapter</strong> (convierte una interfaz) · <strong>Facade</strong> (simplifica un subsistema) · <strong>Decorator</strong> (agrega comportamiento envolviendo) · <strong>Proxy</strong> (controla el acceso a un sujeto) · <strong>DTO &amp; Mapper</strong> (formas de transporte entre capas). Abajo los cuatro que de verdad aparecen en el trabajo de back-end.</p>
        <p><strong>Adapter.</strong> Convierte una interfaz externa en la que tu sistema espera. Ejemplo: envolver el SDK de un proveedor de SMS detrás de tu propio puerto <code>SmsSender</code> para poder cambiar de proveedor. Trade-off: es indirección deliberada — no adaptes interfaces que son tuyas.</p>
        <pre><code>// La interfaz del SDK es del proveedor, no nuestra:
class AcmeSms { public bool SendSms(string n, string t) { /* vendor */ } }

// Nuestro puerto — de lo que depende el resto de la app:
interface ISmsSender { void Send(string phone, string text); }

class AcmeAdapter : ISmsSender {
    private readonly AcmeSms _sdk = new();
    public void Send(string p, string t) =&gt; _sdk.SendSms(p, t);
}</code></pre>
        <p><strong>Facade.</strong> Un punto de entrada simplificado sobre un subsistema complicado. Ejemplo: <code>PaymentFacade.charge()</code> ocultando fraude + gateway + ledger. A diferencia del Adapter (convierte una interfaz), la Facade esconde complejidad tras una nueva más simple.</p>
        <pre><code>class PaymentFacade {
    // El llamador hace UNA llamada en vez de orquestar tres subsistemas:
    public void Charge(decimal amount) {
        _fraud.Check(amount);       // subsistema 1
        _gateway.Charge(amount);    // subsistema 2
        _ledger.Record(amount);     // subsistema 3
    }
}</code></pre>
        <p><strong>Decorator.</strong> Envuelve un componente para agregar comportamiento — logging, caché, retry — sin modificarlo: misma interfaz, responsabilidades apilables. Omítelo cuando un único interés transversal se resuelve con middleware simple.</p>
        <pre><code>interface Notifier { void Send(string msg); }

class EmailNotifier : Notifier { public void Send(string m) { /* send */ } }

// Misma interfaz, comportamiento apilado — el cliente ve un Notifier:
class RetryDecorator : Notifier {
    private readonly Notifier _inner;
    private readonly int _tries;
    public RetryDecorator(Notifier inner, int tries) { _inner = inner; _tries = tries; }
    public void Send(string m) {
        for (var i = 0; i &lt; _tries; i++) {
            try { _inner.Send(m); return; } catch { /* retry */ }
        }
    }
}

// cliente: new LoggingDecorator(new RetryDecorator(new EmailNotifier(), 3))</code></pre>
        <pre><code>Diagrama — quién envuelve a quién (el cliente llama al externo):

EmailNotifier  (implementa Notifier)
      ▲
RetryDecorator ───────► EmailNotifier
      ▲
LoggingDecorator ─────► RetryDecorator
   (el cliente llama a LoggingDecorator.Send)</code></pre>
        <p><strong>Proxy.</strong> Un suplente que controla el acceso al sujeto real: lazy loading, control de acceso, caché, llamadas remotas. El Decorator agrega comportamiento; el Proxy controla acceso.</p>
        <p><strong>DTO &amp; Mapper.</strong> Los DTO son objetos de transporte inertes en los bordes de la API; los mappers convierten entre entidades de dominio, DTO y modelos de persistencia. Mantienen la estructura interna fuera de tus contratos, al costo de boilerplate de mapeo.</p>

        <h4>3 · De comportamiento — cómo colaboran los objetos</h4>
        <p><strong>Definición:</strong> los patrones de comportamiento caracterizan cómo interactúan los objetos y cómo se reparten responsabilidades — van más allá de la estructura hacia algoritmos, flujo de mensajes y el cableado <em>dinámico</em> entre objetos. En vez de responder "¿cómo se construye esto?", responden "¿quién decide qué, cuándo, y a quién se notifica?". El acoplamiento que quitan es <em>algorítmico</em>: el cliente elige una política (Strategy), el objeto elige la suya (State), o el sujeto reparte a quien se suscribió (Observer). Cambian llamadas explícitas por indirección que hay que seguir — así que pagan exactamente cuando el comportamiento varía de verdad.</p>
        <pre><code>Llamador ──llama──► Contexto ◄──sostiene── Strategy (algoritmo)
                          └──política──► State (estado interno)

Sujeto ──emite──► Observer(s)      Request ──cadena──► H1 ─► H2 ─► H3
   (un evento, muchos suscriptores)  (cada eslabón decide: actuar / mutar / pasar)</code></pre>
        <p><strong>Strategy</strong> (algoritmos intercambiables) · <strong>State</strong> (comportamiento por estado interno) · <strong>Template Method</strong> (esqueleto + pasos variables) · <strong>Observer</strong> (fan-out de eventos) · <strong>Chain of Responsibility</strong> (pipelines de manejadores). Los cuatro con código de abajo cubren los que más aparecen en entrevistas de back-end.</p>
        <p><strong>Strategy.</strong> Define una familia de algoritmos intercambiables tras una interfaz; el llamador elige uno en runtime. Ejemplo: gateways de pago (<code>CardStrategy</code>, <code>PayPalStrategy</code>). Botón de apagado: cuando solo existirá una implementación (YAGNI).</p>
        <pre><code>interface IPaymentGateway { void Charge(decimal amount); }

class CardGateway   : IPaymentGateway { public void Charge(decimal a) { /* auth + capture */ } }
class PayPalGateway : IPaymentGateway { public void Charge(decimal a) { /* redirect flow */ } }

// El Context elige en runtime; un gateway nuevo NO cambia nada aquí:
class Checkout {
    private readonly IPaymentGateway _gw;
    public Checkout(IPaymentGateway gw) =&gt; _gw = gw;
    public void Pay(decimal amount) =&gt; _gw.Charge(amount);
}</code></pre>
        <pre><code>Diagrama — el contexto elige una implementación:

            ┌─ CardGateway ──┐
Context ────┼─ PayPalGateway ─┼── elección en runtime
            └─ BankTransfer ─┘
  (gateway nuevo = clase nueva, Checkout intacto)</code></pre>
        <p><strong>State.</strong> Estructuralmente idéntico a Strategy, pero el objeto cambia su propio comportamiento según su estado interno (Order en NEW/PAID/SHIPPED) — la "estrategia" no se elige desde afuera.</p>
        <p><strong>Observer.</strong> Un sujeto emite eventos; los observadores se suscriben sin que el sujeto los conozca. Raíz conceptual de los eventos de dominio y los brokers. Riesgo: flujos ocultos difíciles de trazar — mantén pocos eventos y con sentido.</p>
        <pre><code>// El sujeto solo conoce el tipo de callback — no a sus suscriptores:
class StockTicker {
    private readonly List&lt;Action&lt;int&gt;&gt; _observers = new();
    public void Subscribe(Action&lt;int&gt; cb) =&gt; _observers.Add(cb);
    public void PriceChanged(int price) { foreach (var cb in _observers) cb(price); }
}

var ticker = new StockTicker();
ticker.Subscribe(p =&gt; Console.WriteLine(p));  // display
ticker.Subscribe(p =&gt; Alert(p));              // alertas
ticker.PriceChanged(100); // todos los observadores notificados</code></pre>
        <pre><code>Diagrama — un emit se reparte a todos los suscriptores:

StockTicker ──PriceChanged──► ObserverA (display de precios)
                          └──► ObserverB (alertas)</code></pre>
        <p><strong>Chain of Responsibility.</strong> Una petición atraviesa un pipeline de manejadores, cada uno decidiendo actuar, mutar o pasarla. Ejemplo: middleware HTTP (auth → validación → handler).</p>
        <pre><code>// Cada eslabón decide: manejarlo, o pasar al siguiente.
class AuthHandler {
    private readonly Func&lt;Request, Task&gt; _next;
    public async Task Run(Request r) {
        if (!r.TokenValid) { r.Response = 401; return; } // cortocircuito
        await _next(r);                                 // pasar
    }
}</code></pre>
        <p><strong>Template Method.</strong> Una clase base fija el esqueleto del algoritmo y las subclases sobreescriben pasos individuales. Prefiere composición (Strategy) cuando los pasos varían de forma independiente.</p>

        <h4>4 · Básicos de back-end — no son Gang-of-Four, pero las entrevistas los preguntan</h4>
        <p><strong>Definición:</strong> estos tres no aparecen en el catálogo Gang-of-Four, pero responden la pregunta que enfrenta todo sistema back-end — <em>¿cómo mantienen desacoplado el código de dominio y la infraestructura?</em> Repository y Unit of Work dibujan la frontera alrededor de la persistencia; Dependency Injection es el mecanismo que conecta todo detrás de esa frontera. Las entrevistas los esperan por nombre, y confundir DI (el patrón) con un contenedor DI (la herramienta) es un error clásico.</p>
        <p><strong>Repository.</strong> Media entre dominio y persistencia tras una interfaz tipo colección (<code>findByEmail()</code>), así el dominio nunca ve SQL, Mongo ni tipos del ORM. Mal uso típico: filtrar entidades y query types del ORM a través de él.</p>
        <pre><code>// El dominio depende del puerto; la persistencia es un detalle:
interface IUserRepository {
    User? FindByEmail(string email);
    void Add(User user);
}

class EfUserRepository : IUserRepository {
    private readonly AppDbContext _db;
    public User? FindByEmail(string e) =&gt;
        _db.Users.FirstOrDefault(u =&gt; u.Email == e); // el DbContext nunca se escapa
}</code></pre>
        <p><strong>Unit of Work.</strong> Rastrea todo lo cargado y cambiado en una transacción de negocio y hace commit o rollback como unidad — lo que el <code>DbContext</code> de EF Core hace por ti, o un transaction script a mano.</p>
        <p><strong>Dependency Injection.</strong> Las dependencias llegan desde afuera (constructor) en vez de instanciarse adentro, habilitando mocks y reemplazos. Es un patrón, no un framework — el contenedor solo automatiza el cableado.</p>
        <p><strong>Cuándo NO usar ningún patrón:</strong> una sola implementación sin segundo uso a la vista (YAGNI, regla de tres), una capa que no agrega nada, patrones como decoración. La sobre-ingeniería es en sí un antipatrón.</p>`,
      cards: [
        { q: "Explica el patrón Factory Method.", a: "Un método que decide qué clase concreta instanciar, así los llamadores dependen de una abstracción y no de constructores — p. ej. SenderFactory.forProvider(config) devolviendo SendGrid o SES. Omitelo cuando la construcción es un simple new sin variación." },
        { q: "Explica el patrón Builder.", a: "Ensambla un objeto complejo paso a paso con una API fluida en vez de constructores telescópicos — Query.select().where().limit(). Omitelo para objetos con dos campos." },
        { q: "¿Cómo implementar Singleton en código back-end?", a: "Prefiere el scope singleton del contenedor DI sobre un getInstance() manual. Un singleton estático esconde dependencias, bloquea el testing y trae sorpresas de concurrencia." },
        { q: "Explica el patrón Adapter.", a: "Convierte una interfaz externa en la que tu sistema espera — envolver el SDK de un proveedor de SMS detrás de tu propio SmsSender para poder cambiarlo. Es indirección deliberada: no adaptes interfaces que son tuyas." },
        { q: "Explica Facade y su diferencia con Adapter.", a: "Un punto de entrada simplificado sobre un subsistema complicado (PaymentFacade.charge() ocultando fraude + gateway + ledger). Adapter convierte una interfaz existente; Facade esconde complejidad tras una nueva más simple." },
        { q: "Explica el patrón Decorator.", a: "Envuelve un componente para agregar comportamiento — logging, caché, retry — sin modificarlo: misma interfaz, responsabilidades apilables. Para un único interés transversal, middleware simple puede bastar." },
        { q: "¿Decorator vs Proxy?", a: "Decorator agrega comportamiento alrededor de un componente (misma interfaz, responsabilidades apilables). Proxy controla el acceso al sujeto real: lazy loading, control de acceso, caché, llamadas remotas." },
        { q: "¿Para qué sirven DTO y Mapper?", a: "Los DTO son objetos de transporte inertes en los bordes de la API; los mappers convierten entre entidades de dominio, DTO y modelos de persistencia. Mantienen la estructura interna fuera de tus contratos, al costo de boilerplate de mapeo." },
        { q: "Explica el patrón Strategy.", a: "Define una familia de algoritmos intercambiables tras una interfaz; el llamador elige uno en runtime — gateways de pago (CardStrategy, PayPalStrategy). Botón de apagado: cuando solo existirá una implementación (YAGNI)." },
        { q: "¿Strategy vs State?", a: "Estructuralmente idénticos. Strategy: el algoritmo se elige desde afuera (caller/config). State: el objeto cambia su propio comportamiento según su estado interno (Order en NEW/PAID/SHIPPED)." },
        { q: "Explica Observer y su riesgo.", a: "Un sujeto emite eventos; los observadores se suscriben sin que el sujeto los conozca — la raíz conceptual de los eventos de dominio y los brokers. Riesgo: flujos ocultos difíciles de trazar — mantén pocos eventos y con sentido." },
        { q: "Explica Chain of Responsibility.", a: "Una petición atraviesa un pipeline de manejadores, cada uno decidiendo actuar, mutar o pasarla — el middleware HTTP (auth → validación → handler) es el caso clásico." },
        { q: "Explica Template Method y su preferencia moderna.", a: "Una clase base fija el esqueleto del algoritmo y las subclases sobreescriben pasos individuales. Prefiere composición (Strategy) cuando los pasos varían de forma independiente." },
        { q: "Explica Repository y su mal uso típico.", a: "Media entre dominio y persistencia tras una interfaz tipo colección (findByEmail()), así el dominio nunca ve SQL, Mongo ni tipos del ORM. Mal uso: filtrar entidades y query types del ORM a través de él." },
        { q: "Explica Unit of Work.", a: "Rastrea todo lo cargado y cambiado en una transacción de negocio y hace commit o rollback como unidad — lo que el DbContext de EF Core hace por ti, o un transaction script a mano." },
        { q: "¿Qué es Dependency Injection, en el fondo?", a: "Dependencias entregadas desde afuera (constructor) en vez de instanciarse adentro, habilitando mocks y reemplazos. Es un patrón, no un framework — el contenedor solo automatiza el cableado." }
      ],
      quiz: [
        { q: "Un Order se comporta distinto en NEW, PAID, SHIPPED según su propio estado. ¿Qué patrón?", options: ["Strategy", "State", "Adapter", "Facade"], answer: 1, explain: "State: el objeto cambia su comportamiento por estado interno. Strategy se elige desde afuera." },
        { q: "Envolver un servicio para agregar retry sin editarlo es…", options: ["Proxy", "Decorator", "Facade", "Builder"], answer: 1, explain: "Decorator agrega comportamiento alrededor de un componente sin modificarlo." },
        { q: "La forma recomendada de tener un Singleton es…", options: ["Un getInstance() estático", "El scope singleton del contenedor DI", "Una variable global", "Una instancia nueva por llamada"], answer: 1, explain: "El scope del contenedor evita estado global oculto y mantiene la testeabilidad." },
        { q: "Adaptar el SDK de un proveedor de email detrás de tu propia interfaz es…", options: ["Facade", "Adapter", "Strategy", "Observer"], answer: 1, explain: "Adapter convierte una interfaz externa a la que tu sistema espera." },
        { q: "El código debe crear clientes de SendGrid o SES según config, sin que los llamadores conozcan las clases concretas. ¿Qué patrón?", options: ["Factory Method", "Observer", "Template Method", "Proxy"], answer: 0, explain: "Factory Method encapsula qué clase concreta se instancia tras una abstracción." },
        { q: "Una petición fluye por auth → validación → handler, y cada eslabón puede cortar la cadena. Esto es…", options: ["Observer", "Chain of Responsibility", "Mediator", "Command"], answer: 1, explain: "Chain of Responsibility pasa la petición por manejadores que actúan, mutan o la pasan — el middleware HTTP en esencia." },
        { q: "Crear una interfaz para una sola implementación sin segundo uso es…", options: ["Buena práctica de DIP", "Sobre-ingeniería (YAGNI)", "Exigido por SOLID", "La regla de tres"], answer: 1, explain: "No abstrigas prematuramente; espera un segundo uso real." }
      ]
    },

    "oop": {
      title: "POO para Back-End",
      track: "backend",
      icon: "🧩",
      blurb: "La Programación Orientada a Objetos (POO) modela el software como objetos que combinan datos con el comportamiento que opera sobre ellos, sobre cuatro pilares: encapsulación, herencia, polimorfismo y abstracción.",
      read: `
        <p><strong>4 pilares:</strong> Encapsulación (proteger invariantes: Order.confirm(), no setStatus()) · Herencia (usar con moderación) · Polimorfismo (PaymentService maneja Card/PayPal sin if/else) · Abstracción (EmailSender desacopla del proveedor).</p>
        <p><strong>Clase abstracta vs interfaz:</strong> abstracta = estado + comportamiento compartidos, herencia simple, 'es-un'; interfaz = capacidad/contrato, herencia múltiple. Prefiere interfaces por defecto.</p>
        <p><strong>Composición sobre herencia</strong> (GoF): 'tiene-un' es flexible, inyectable y testeable; 'es-un' es rígido.</p>
        <p><strong>LSP:</strong> subtipos sustituibles; precondiciones no más estrictas, postcondiciones no más laxas. Penguin.fly() lanzando lo viola.</p>
        <p><strong>Acoplamiento</strong> (bajo) vs <strong>cohesión</strong> (alta). <strong>DI vs IoC:</strong> IoC = el contenedor controla el wiring; DI = dependencias entregadas (constructor).</p>
        <p><strong>Inmutabilidad:</strong> thread-safe, llaves seguras de maps, base de los value objects. <strong>Entidad</strong> (identidad) vs <strong>Value Object</strong> (valores, inmutable).</p>
        <p><strong>God Object</strong> (hace demasiado) · <strong>Anemic Domain Model</strong> (solo getters/setters; ok en CRUD simple, malo en dominios ricos) · <strong>Regla de tres</strong> antes de abstraer.</p>
        <p><strong>GRASP:</strong> Information Expert, Creator, Controller, Low Coupling, High Cohesion, Polymorphism, Pure Fabrication, Indirection, Protected Variations.</p>
        <p><strong>Test doubles:</strong> Stub (respuestas prefijadas) · Mock (verifica interacciones) · Fake (implementación real ligera). Testea comportamiento, no implementación.</p>`,
      cards: [
        { q: "Nombra los 4 pilares de la POO y su propósito en back-end.", a: "Encapsulación protege invariantes (Order.confirm(), no setStatus()). Herencia reutiliza comportamiento base (con moderación). Polimorfismo varía comportamiento por tipo sin if/else. Abstracción modela lo importante y oculta detalles (EmailSender)." },
        { q: "¿Clase abstracta vs interfaz — regla práctica?", a: "Interfaz por defecto para contratos/capacidades (PaymentGateway) — desacopla y se mockea limpio. Clase abstracta cuando las clases comparten genuinamente estado y comportamiento base (BaseEntity), sin jerarquías profundas." },
        { q: "¿Por qué preferir composición sobre herencia?", a: "La composición ('tiene-un') es flexible, inyectable y testeable, y evita el problema del diamante y el acoplamiento rígido. La herencia ('es-un') es frágil ante cambios. Resérvala para jerarquías estables o puntos de extensión de frameworks." },
        { q: "¿Cómo se viola LSP en la práctica?", a: "Un subtipo que no puede honrar el contrato del padre — Penguin.fly() lanzando UnsupportedOperationException, o un ReadOnlyRepository cuyo save() lanza. Arreglo: divide la interfaz (ISP) o remodela." },
        { q: "¿Acoplamiento vs cohesión?", a: "Acoplamiento = cuánto dependen los módulos entre sí (se quiere bajo). Cohesión = cuánto pertenecen juntos las partes de un módulo (se quiere alta). Mapean a DIP y SRP." },
        { q: "¿DI vs IoC?", a: "IoC: el contenedor/framework controla el flujo y el wiring. DI: el mecanismo concreto — dependencias entregadas por constructor/setter/método. DI es un principio; Spring/NestJS son solo contenedores." },
        { q: "¿Por qué es valiosa la inmutabilidad en back-end?", a: "Thread-safe sin sincronización, seguro como llave de maps y entradas de caché, más fácil de razonar y testear. Es la base de los value objects de DDD." },
        { q: "¿Entidad vs Value Object?", a: "La entidad se define por identidad (dos Users con los mismos datos pero distinto id son distintos). El Value Object se define por valores (Money(100,USD) == Money(100,USD)), debería ser inmutable y hacer inválidos los estados inválidos." },
        { q: "¿Qué es un Anemic Domain Model y cuándo está bien?", a: "Entidades con solo getters/setters y toda la lógica en servicios. Aceptable para CRUDs simples; evitar en dominios ricos (banca/comercio) donde importan los invariantes — Order.addItem() debe aplicar stock/estado por sí mismo." },
        { q: "¿Qué es la regla de tres?", a: "No abstraigas la primera ocurrencia; espera la segunda o tercera para ver el patrón real antes de extraer una abstracción." },
        { q: "¿Stub vs Mock vs Fake?", a: "Stub devuelve respuestas prefijadas. Mock verifica interacciones (X llamada con Y). Fake es una implementación real ligera (repo en memoria). Usa fakes para repos; mocks solo cuando la interacción es el contrato." },
        { q: "Nombra algunos patrones GRASP.", a: "Information Expert (asigna a quien tiene los datos), Pure Fabrication (Repository no es un concepto del dominio), Protected Variations (PaymentGateway oculta el cambio de proveedores), Indirection, Controller, Creator, Polymorphism, Low Coupling, High Cohesion." }
      ],
      quiz: [
        { q: "Order.confirm() en vez de setStatus('invalid') demuestra…", options: ["Polimorfismo", "Encapsulación", "Herencia", "Abstracción"], answer: 1, explain: "La encapsulación protege invariantes exponiendo métodos que revelan intención, no setters crudos." },
        { q: "Penguin extiende Bird y fly() lanza excepción. Esto viola…", options: ["SRP", "OCP", "LSP", "DRY"], answer: 2, explain: "Liskov Substitution: el subtipo no puede honrar el contrato del padre." },
        { q: "Un repositorio en memoria ligero usado en tests es un…", options: ["Stub", "Mock", "Fake", "Spy"], answer: 2, explain: "Un fake es una implementación funcionable pero simplificada; un mock verifica interacciones." },
        { q: "Money(100,'USD') es igual a otro Money(100,'USD'). Money es un…", options: ["Entity", "Value Object", "Service", "Aggregate root"], answer: 1, explain: "Los value objects se definen por sus valores y deberían ser inmutables." },
        { q: "Dependencias pasadas por el constructor es…", options: ["Solo IoC", "Dependency Injection", "Singleton", "Factory"], answer: 1, explain: "DI es el mecanismo concreto de entregar dependencias; IoC es la inversión de control más amplia." },
        { q: "Los modelos de dominio anémicos son más aceptables en…", options: ["Ledgers bancarios", "Apps CRUD simples", "Precios de e-commerce", "Todo"], answer: 1, explain: "Está bien cuando hay poca lógica de negocio; los dominios ricos necesitan entidades que protejan invariantes." },
        { q: "La regla de tres dice…", options: ["Siempre usa tres capas", "Abstrae solo tras la 2ª/3ª ocurrencia", "Tres tests por método", "Tres interfaces por clase"], answer: 1, explain: "Espera a que la repetición revele el patrón real antes de abstraer." }
      ]
    },

    "antipatterns": {
      title: "Antipatrones",
      track: "backend",
      icon: "⚠️",
      blurb: "Un antipatrón es una solución que parece razonable pero que hace daño de forma confiable — como el monolito distribuido o las consultas N+1. Nombrarlos le da a los equipos un lenguaje común para detectarlos y corregirlos.",
      read: `
        <ul>
        <li><strong>Monolito distribuido</strong> — servicios acoplados por BD compartida o despliegue conjunto.</li>
        <li><strong>God Service / God Class</strong> — una sola cosa haciéndolo todo.</li>
        <li><strong>Anemic Domain Model</strong> — datos sin comportamiento donde los invariantes importan.</li>
        <li><strong>Consultas N+1</strong> — una consulta principal más una por registro; arregla con joins/eager loading/batching.</li>
        <li><strong>Base de datos compartida entre servicios</strong> — acopla esquemas y equipos; viola Single Source of Truth.</li>
        <li><strong>Reintentos ilimitados sin backoff</strong> — amplifican las caídas.</li>
        <li><strong>Caché sin estrategia de invalidación</strong> — datos viejos.</li>
        <li><strong>Sobre-ingeniería</strong> — microservicios/CQRS/Event Sourcing sin necesidad.</li>
        <li><strong>Dobles escrituras sin Outbox</strong> — cambio en BD y publicación del evento deben ser atómicos.</li>
        </ul>`,
      cards: [
        { q: "¿Qué es el problema de consultas N+1 y su arreglo?", a: "Una consulta principal más una consulta por registro. Arregla con joins, eager loading o batching." },
        { q: "¿Por qué una BD compartida entre microservicios es un antipatrón?", a: "Acopla esquemas y equipos y viola Single Source of Truth — cada dato debería tener un único dueño." },
        { q: "¿Por qué los reintentos ilimitados sin backoff son peligrosos?", a: "Amplifican las caídas: cada cliente golpea al servicio que lucha simultáneamente, dificultando la recuperación. Usa backoff exponencial + jitter y un circuit breaker." },
        { q: "¿Qué es la sobre-ingeniería como antipatrón?", a: "Adoptar microservicios, CQRS o Event Sourcing sin una necesidad real — complejidad que cuesta más de lo que devuelve." },
        { q: "¿Qué tiene de malo la doble escritura (BD + evento) sin Outbox?", a: "No es atómica: puedes guardar en la BD pero fallar al publicar (o viceversa). El Transactional Outbox las hace una sola transacción local." },
        { q: "¿Cómo detectas un God Object?", a: "Demasiadas responsabilidades y dependencias — líneas de más, >10 dependencias inyectadas, nombres tipo ManagerServiceHelper. Divide por responsabilidad." }
      ],
      quiz: [
        { q: "Una consulta para pedidos, luego una consulta por pedido por sus items. Esto es…", options: ["Sharding", "Consultas N+1", "Write skew", "Una Saga"], answer: 1, explain: "N+1. Arregla con un join, eager loading o batching." },
        { q: "Reintentar un servicio que falla, para siempre y sin delay, causa…", options: ["Recuperación más rápida", "Caída amplificada", "Mejor consistencia", "Menor latencia"], answer: 1, explain: "Los reintentos ilimitados sin backoff golpean al servicio que lucha y empeoran la caída." },
        { q: "Guardar en la BD y luego publicar un evento en pasos separados arriesga…", options: ["Nada", "Eventos perdidos o huérfanos (problema de doble escritura)", "Escrituras más rápidas", "Consistencia fuerte"], answer: 1, explain: "Sin un Outbox las dos escrituras no son atómicas; una puede éxito mientras la otra falla." },
        { q: "Adoptar CQRS y Event Sourcing para una app CRUD simple es…", options: ["Mejor práctica", "Sobre-ingeniería", "Exigido por SOLID", "Un Bounded Context"], answer: 1, explain: "Complejidad sin necesidad real es en sí un antipatrón." }
      ]
    },

    /* ============================ FRONT-END ============================ */
    "react-fundamentals": {
      title: "Fundamentos de React",
      track: "frontend",
      icon: "⚛️",
      blurb: "React es una librería de JavaScript para construir interfaces de usuario a partir de componentes — funciones autocontenidas que reciben props, guardan estado y describen su markup; React las re-renderiza a través de un Virtual DOM cuando sus datos cambian.",
      read: `
        <p><strong>Virtual DOM y reconciliación:</strong> React mantiene un árbol de elementos en memoria; ante un cambio construye un árbol nuevo, lo compara con el anterior (reconciliación) y aplica el mínimo de actualizaciones reales del DOM. Matiz: no es inherentemente más rápido que manipular el DOM a mano de forma optimizada — su valor es un modelo declarativo, el batching y una abstracción multiplataforma.</p>
        <p><strong>Reglas de reconciliación:</strong> tipo de elemento distinto en una posición → desmonta y reconstruye ese subárbol; mismo tipo → actualiza props en el lugar. Las <strong>keys</strong> identifican los items de las listas entre renders.</p>
        <p><strong>Props vs state:</strong> los props son entradas de solo lectura del padre; el estado es el dato que el componente posee y cambia. Comparte estado entre hermanos elevándolo (lifting state up) a su padre común.</p>
        <p><strong>Controlados vs no controlados:</strong> controlado = el estado de React es la fuente de verdad (value + onChange); no controlado = el DOM guarda el valor, se lee con ref.</p>
        <p><strong>Flujo unidireccional:</strong> los datos bajan por props, los eventos suben por callbacks — cambios de estado rastreables.</p>`,
      cards: [
        { q: "¿Qué es el Virtual DOM y la reconciliación?", a: "React mantiene un árbol de elementos en memoria; ante un cambio de estado construye un árbol nuevo, lo compara con el anterior (reconciliación) y aplica el mínimo de actualizaciones reales del DOM." },
        { q: "¿El Virtual DOM es inherentemente más rápido que el DOM real?", a: "No. Una manipulación directa del DOM bien hecha puede superararlo. Su valor es un modelo de programación declarativo, el batching automático y una abstracción multiplataforma (React Native)." },
        { q: "¿Qué pasa cuando el tipo de un elemento cambia en una posición?", a: "React desmonta y reconstruye ese subárbol. Mismo tipo → actualiza los props en el lugar. Las keys permiten a React emparejar correctamente los items de las listas entre renders." },
        { q: "¿Props vs state?", a: "Los props son entradas de solo lectura del padre. El estado es el dato que el componente posee y cambia en el tiempo. Comparte estado entre hermanos elevándolo a su padre común." },
        { q: "¿Inputs controlados vs no controlados?", a: "Controlado: el estado de React es la fuente de verdad (value + onChange) — para validación o UI derivada. No controlado: el DOM guarda el valor, se lee con ref — para formularios simples e inputs de archivos." },
        { q: "¿Qué es el flujo de datos unidireccional?", a: "Los datos fluyen hacia abajo por props; los eventos suben por callbacks. Hace que los cambios de estado sean rastreables — la ventaja de debugging frente al binding bidireccional." },
        { q: "¿Por qué importan las keys en las listas?", a: "Las keys identifican los items entre renders para que React los empareje correctamente durante la reconciliación. Sin keys estables, el estado puede quedar adjunto al item equivocado." }
      ],
      quiz: [
        { q: "El beneficio principal del Virtual DOM es…", options: ["Velocidad bruta sobre el DOM directo", "Un modelo declarativo con batching y actualizaciones mínimas", "Un bundle más pequeño", "Renderizado en servidor"], answer: 1, explain: "No es inherentemente más rápido que el DOM bien manipulado; la ganancia es ergonomía, batching y consistencia." },
        { q: "Cuando React ve un tipo de elemento distinto en una posición, él…", options: ["Actualiza los props en el lugar", "Desmonta y reconstruye el subárbol", "Lo ignora", "Lanza un error"], answer: 1, explain: "Cambio de tipo → remount. Mismo tipo → actualización de props." },
        { q: "Para compartir estado entre dos componentes hermanos tú…", options: ["Usas una variable global", "Elevas el estado a su padre común", "Duplicas el estado", "Usas refs"], answer: 1, explain: "Lifting state up mantiene una única fuente de verdad que baja por props." },
        { q: "Un input cuyo valor es manejado por el estado de React es…", options: ["No controlado", "Controlado", "Diferido", "Memoizado"], answer: 1, explain: "Los inputs controlados usan value + onChange; el estado de React es la fuente de verdad." },
        { q: "Los props son…", options: ["Mutables por el hijo", "Entradas de solo lectura del padre", "Guardados en el DOM", "Siempre strings"], answer: 1, explain: "Los props bajan y son de solo lectura; el hijo comunica cambios vía callbacks." }
      ]
    },

    "react-hooks": {
      title: "React Hooks",
      track: "frontend",
      icon: "🪝",
      blurb: "Los React Hooks son funciones que permiten a los componentes de función 'conectarse' a características de React sin escribir una clase — useState agrega estado local, useEffect ejecuta efectos secundarios, y otros manejan contexto, memoización y refs.",
      read: `
        <p><strong>Reglas:</strong> llama a los hooks solo en el nivel superior de una función de React — nunca dentro de condiciones/bucles/funciones anidadas. El estado de los hooks se guarda en un orden fijo; las llamadas condicionales lo corrompen.</p>
        <table><thead><tr><th>Hook</th><th>Propósito / trampa</th></tr></thead><tbody>
        <tr><td>useState</td><td>Estado local; con batching (React 18); usa la forma funcional cuando el siguiente valor depende del anterior</td></tr>
        <tr><td>useEffect</td><td>Efectos tras el paint; cleanup antes de re-ejecutar/desmontar; el array de deps debe listar todos los valores reactivos o habrá stale closures</td></tr>
        <tr><td>useLayoutEffect</td><td>Antes del paint, para medir el DOM; bloquea el pintado</td></tr>
        <tr><td>useMemo / useCallback</td><td>Memoiza valor / identidad de función; solo si es costoso o la identidad importa</td></tr>
        <tr><td>useRef</td><td>Caja mutable que sobrevive a renders sin re-render; refs del DOM</td></tr>
        <tr><td>useReducer</td><td>Transiciones de estado complejas</td></tr>
        <tr><td>useContext</td><td>Lee un valor de contexto; todos los consumidores re-renderizan al cambiar — no es un state manager</td></tr>
        </tbody></table>
        <p><strong>Stale closure:</strong> un efecto/callback captura los valores del render en que fue creado; deps faltantes leen estado viejo. Arreglo: deps correctas, updates funcionales o useRef.</p>
        <p><strong>Custom hooks:</strong> extrae lógica con estado reutilizable (useFetch, useDebounce); cada llamada obtiene estado independiente.</p>`,
      cards: [
        { q: "¿Cuáles son las reglas de los hooks y por qué?", a: "Llama a los hooks solo en el nivel superior de una función de React, nunca dentro de condiciones/bucles/funciones anidadas. El estado de los hooks se guarda en un orden fijo por instancia; las llamadas condicionales corrompen el estado." },
        { q: "¿Cuándo corre useEffect y cuándo su cleanup?", a: "Corre después del paint. El cleanup corre antes de re-ejecutar el efecto y en el desmontaje. El array de dependencias debe listar todo valor reactivo usado." },
        { q: "¿Qué es una stale closure?", a: "Un efecto o callback captura los valores del render en que fue creado. Con deps faltantes sigue leyendo estado viejo. Arreglo: deps correctas, updates funcionales o useRef para valores que no quieres que re-disparen." },
        { q: "¿useEffect vs useLayoutEffect?", a: "useEffect corre tras el paint (async). useLayoutEffect corre antes del paint — para medir/mutar el DOM antes de que el usuario vea nada. Bloquea el pintado, así que no lo uses por defecto." },
        { q: "¿Cuándo valen la pena useMemo/useCallback?", a: "Solo para cálculos costosos o cuando la igualdad referencial importa (hijos memoizados, deps de efectos). De lo contrario son sobrecarga pura." },
        { q: "¿Qué hace useRef?", a: "Una caja mutable que sobrevive a los renders sin disparar re-render. Para acceso al DOM, timers y seguimiento de valores previos." },
        { q: "¿useReducer vs useState?", a: "Prefiere useReducer cuando el siguiente estado depende del anterior de forma no trivial o varios sub-valores cambian juntos — centraliza las transiciones." },
        { q: "¿Por qué useContext no es un state manager?", a: "Todos los consumidores re-renderizan cuando el valor del contexto cambia. Es para valores globales de baja frecuencia; divide contextos o usa selectores para datos de alta frecuencia." },
        { q: "¿Cómo actualizas estado basándote en su valor previo correctamente?", a: "Con la forma funcional setX(prev => ...) — los updates se agrupan (batching), así que leer la variable justo después de setState da un valor viejo." },
        { q: "¿Qué es un custom hook?", a: "Una función useX que extrae lógica con estado reutilizable (no UI), como useFetch o useDebounce. Compone hooks; cada llamada obtiene su propio estado independiente." }
      ],
      quiz: [
        { q: "Los hooks no pueden llamarse dentro de condiciones porque…", options: ["Es más lento", "El estado de los hooks se indexa por orden de llamada, que las condiciones alteran", "React prohíbe bucles", "Rompe el JSX"], answer: 1, explain: "El orden fijo de llamada es cómo React asocia estado a cada hook; las condiciones lo corrompen." },
        { q: "Un efecto sigue leyendo un valor viejo de count. La causa probable es…", options: ["Una stale closure por deps faltantes", "Demasiados re-renders", "Usar useRef", "StrictMode"], answer: 0, explain: "Deps faltantes capturan el valor del render de creación. Arregla las deps o usa updates funcionales." },
        { q: "Debes medir un nodo del DOM antes de que el usuario vea la actualización. Usa…", options: ["useEffect", "useLayoutEffect", "useMemo", "useRef"], answer: 1, explain: "useLayoutEffect corre sincrónicamente antes del paint." },
        { q: "Envolver una operación barata en useMemo es…", options: ["Siempre benéfico", "Usualmente sobrecarga neta negativa", "Obligatorio", "Una fuga de memoria"], answer: 1, explain: "La memoización tiene costo; solo vale para trabajo costoso o consumidores sensibles a la identidad." },
        { q: "Para incrementar estado de forma segura bajo batching, usa…", options: ["setX(x + 1) tras leer x", "setX(prev => prev + 1)", "x++ y luego setX(x)", "useRef"], answer: 1, explain: "El updater funcional recibe el estado más reciente, evitando lecturas viejas." },
        { q: "useRef difiere de useState en que cambiarlo…", options: ["Dispara un re-render", "No dispara un re-render", "Es imposible", "Se reinicia en cada render"], answer: 1, explain: "useRef es una caja mutable que persiste sin causar re-renders." }
      ]
    },

    "react-rendering": {
      title: "Renderizado y Keys en React",
      track: "frontend",
      icon: "🔁",
      blurb: "El renderizado es cómo React convierte los props y el estado actuales de un componente en la UI en pantalla. Un re-render vuelve a ejecutar la función del componente; la reconciliación compara el resultado y aplica los cambios mínimos en el DOM, con keys que identifican los items de las listas.",
      read: `
        <p>Un componente re-renderiza cuando: <strong>cambia su propio estado</strong>, <strong>su padre re-renderiza</strong> (salvo que esté memoizado) o <strong>cambia un contexto que consume</strong>. Crucial: <strong>re-render ≠ actualización del DOM</strong> — la reconciliación puede producir cero cambios reales en el DOM.</p>
        <p><strong>Keys:</strong> usa IDs estables y únicos. <strong>El índice como key es un bug</strong> cuando la lista puede reordenarse/insertar/eliminar: React empareja por posición, así que el estado del componente (p. ej. un input no controlado) se adjunta al item equivocado.</p>
        <p><strong>Inmutabilidad:</strong> las actualizaciones deben producir nuevas referencias ([...arr, item], {...obj, x}). Mutar en el lugar rompe la comparación superficial, así que React.memo, useMemo y las deps de efectos dejan de detectar cambios en silencio.</p>`,
      cards: [
        { q: "¿Qué dispara que un componente re-renderice?", a: "Que cambie su propio estado, que su padre re-renderice (salvo memoización) o que cambie un contexto que consume." },
        { q: "¿Un re-render siempre actualiza el DOM?", a: "No. Re-render ≠ actualización del DOM. La reconciliación puede producir cero cambios reales en el DOM si la salida es idéntica." },
        { q: "¿Por qué el índice como key es un bug?", a: "Cuando la lista se reordena/inserta/elimina, React empareja por posición, así que el estado del componente (como el valor de un input no controlado) se adjunta al item equivocado. Usa IDs estables y únicos." },
        { q: "¿Por qué las actualizaciones de estado deben ser inmutables?", a: "Las nuevas referencias ([...arr, item], {...obj, x}) permiten que la comparación superficial detecte cambios. Mutar en el lugar rompe React.memo, useMemo y las deps de efectos — dejan de ver cambios en silencio." },
        { q: "¿Cuándo es aceptable el índice como key?", a: "Solo en una lista estática que nunca se reordena, inserta o elimina, y cuyos items no tienen estado local." }
      ],
      quiz: [
        { q: "Un padre re-renderiza. Su hijo no memoizado…", options: ["Nunca re-renderiza", "También re-renderiza", "Solo re-renderiza si cambiaron los props", "Se desmonta"], answer: 1, explain: "Por defecto los hijos re-renderizan con el padre salvo React.memo con props estables." },
        { q: "Re-renderizar un componente siempre cambia el DOM. ¿Verdadero?", options: ["Verdadero", "Falso — la reconciliación puede producir cero cambios en el DOM"], answer: 1, explain: "El re-render calcula la salida; el DOM solo cambia si el diff no está vacío." },
        { q: "Usar el índice del array como key es peligroso cuando…", options: ["La lista es estática", "La lista puede reordenarse/insertar/eliminar", "Las keys son strings", "Hay menos de 10 items"], answer: 1, explain: "El emparejamiento por posición desasocia el estado ante reorden/insert/eliminación." },
        { q: "Mutación del estado en el lugar rompe…", options: ["Nada", "La comparación superficial en memo/useMemo/deps de efectos", "Solo TypeScript", "El Virtual DOM por completo"], answer: 1, explain: "La misma referencia hace que los checks superficiales no vean cambios, y las optimizaciones fallan en silencio." }
      ]
    },

    "react-performance": {
      title: "Rendimiento en React",
      track: "frontend",
      icon: "🚀",
      blurb: "El trabajo de rendimiento en React es la práctica de hacer que las apps re-rendericen menos y carguen más rápido — memoización (React.memo, useMemo, useCallback), virtualización de listas y code splitting — siempre guiado por profiling y no por corazonadas.",
      read: `
        <table><thead><tr><th>Herramienta</th><th>Cuándo vale / cuándo no</th></tr></thead><tbody>
        <tr><td>React.memo</td><td>Componente costoso + props estables; props nuevos de objeto/función lo derrotan</td></tr>
        <tr><td>useMemo</td><td>Cálculo costoso o estabilizar una referencia; matemática barata = pérdida neta</td></tr>
        <tr><td>useCallback</td><td>Solo cuando la identidad de la función importa aguas abajo</td></tr>
        <tr><td>Virtualización (react-window)</td><td>Listas largas (cientos+). La mayor ganancia para tablas grandes</td></tr>
        <tr><td>Code splitting (lazy + Suspense)</td><td>Reduce el bundle inicial; agrega estado de carga</td></tr>
        <tr><td>Profiler / DevTools</td><td>Mide antes de optimizar</td></tr>
        </tbody></table>
        <p><strong>Respuesta modelo:</strong> perfila primero. La mayoría de los 'React lento' son re-renders innecesarios por props/contexto inestables o listas enormes — se arregla con memoización donde importa la identidad, virtualización y dividir contextos. No riegues useMemo por todas partes; el React Compiler existe justamente porque la memoización manual es sobrecarga propensa a errores.</p>`,
      cards: [
        { q: "¿Cuándo ayuda realmente React.memo?", a: "Solo si el componente es costoso Y sus props son superficialmente estables. Props nuevos de objeto/función en cada render lo derrotan — combínalo con useMemo/useCallback o no lo uses." },
        { q: "¿La mayor optimización para una tabla de miles de filas?", a: "Virtualización de listas (react-window) — renderiza solo las filas visibles en vez de cientos/miles de nodos del DOM." },
        { q: "¿Qué hace el code splitting?", a: "React.lazy + Suspense cargan chunks de rutas/features bajo demanda, reduciendo el bundle inicial al costo de un estado de carga." },
        { q: "¿La respuesta senior a '¿cómo hago rápido React?'", a: "Perfil primero con React DevTools/Profiler. La mayoría de la lentitud son re-renders innecesarios por props/contexto inestables o listas enormes — arregla con memoización puntual donde importa la identidad, virtualización y dividir contextos. Mide, no adivines." },
        { q: "¿Por qué no usar useMemo en todas partes?", a: "La memoización tiene costo; los cálculos baratos envueltos en useMemo cuestan más de lo que ahorran. El proyecto React Compiler existe para automatizarlo porque la memoización manual es propensa a errores." },
        { q: "¿Cómo estabilizas los props de un hijo memoizado?", a: "Usa useMemo para props de objeto/array y useCallback para props de función, de modo que sus referencias sigan iguales entre renders." }
      ],
      quiz: [
        { q: "React.memo en un hijo que recibe un objeto inline nuevo en cada render…", options: ["Siempre salta el re-render", "Sigue re-renderizando (props no shallow-equal)", "Lanza error", "Memoiza el objeto"], answer: 1, explain: "Una referencia nueva falla la comparación superficial; estabilízala con useMemo o no uses memo." },
        { q: "La mayor optimización para una tabla de 5,000 filas es…", options: ["useMemo en cada celda", "Virtualización de listas", "Más contextos", "Inline styles"], answer: 1, explain: "Renderiza solo las filas visibles; el conteo de nodos del DOM es el cuello de botella." },
        { q: "El primer paso para optimizar una app React lenta es…", options: ["Agregar React.memo en todo", "Perfilar con DevTools", "Reescribir en vanilla JS", "Desactivar StrictMode"], answer: 1, explain: "Mide el costo real de render antes de cambiar nada." },
        { q: "React.lazy + Suspense se usa para…", options: ["Manejo de estado", "Code splitting / carga de chunks bajo demanda", "Server rendering", "Testing"], answer: 1, explain: "Divide el bundle y carga features bajo demanda con un fallback." },
        { q: "Envolver una suma barata en useMemo es…", options: ["Mejor práctica", "Usualmente sobrecarga neta negativa", "Requerido para memo", "Gratis"], answer: 1, explain: "La memoización cuesta; solo vale para trabajo costoso o consumidores sensibles a la identidad." }
      ]
    },

    "react-state": {
      title: "Manejo de Estado en React",
      track: "frontend",
      icon: "🗂️",
      blurb: "El estado es el dato que un componente posee, que puede cambiar en el tiempo y disparar re-renders. El manejo de estado es la disciplina de decidir dónde vive cada pieza — local, elevado, en Context, en un store externo o en una librería de estado de servidor.",
      read: `
        <p><strong>Escalera de decisión</strong> (sube solo lo necesario):</p>
        <ol>
        <li>Estado local (useState/useReducer) — por defecto.</li>
        <li>Elevar estado — los hermanos lo necesitan.</li>
        <li>Context — valores globales de baja frecuencia (tema, locale, auth). Costo: todos los consumidores re-renderizan al cambiar.</li>
        <li>Store externo de estado de cliente (Zustand, Redux, Jotai) — estado de cliente complejo, transversal y frecuente. Redux compra prediccibilidad/devtools/middleware al costo de boilerplate; no lo uses por defecto.</li>
        <li>Librería de estado de servidor (TanStack Query, SWR) — datos que viven en el servidor.</li>
        </ol>
        <p><strong>Estado de servidor ≠ estado de cliente:</strong> los datos de la API son una <em>caché de la verdad remota</em> — necesitan fetch, caché, dedup, refetch en segundo plano e invalidación, no un store global. Poner datos fetcheados en Redux y hacer loading/error/refetch a mano es el error clásico de sobre-ingeniería.</p>
        <p><strong>Trampas de useEffect + fetch:</strong> condiciones de carrera (una respuesta vieja lenta sobrescribe la nueva — arregla con AbortController o flag de ignorar), sin caché/dedup, estado de carga/error manual.</p>`,
      cards: [
        { q: "¿Cuál es la escalera de manejo de estado?", a: "Estado local → elevar → Context (global de baja frecuencia) → store externo de cliente (Zustand/Redux) para estado de cliente complejo y frecuente → librería de estado de servidor (TanStack Query/SWR) para datos de la API. Sube solo lo necesario." },
        { q: "¿Cuándo es apropiado Context?", a: "Valores globales de baja frecuencia como tema, locale o usuario autenticado. Costo: todos los consumidores re-renderizan ante cualquier cambio — divide contextos o agrega selectores para datos de alta frecuencia." },
        { q: "¿Estado de servidor vs estado de cliente?", a: "El estado de servidor es una caché de la verdad remota que necesita fetch/caché/dedup/refetch/invalidación — usa TanStack Query/SWR. El estado de cliente es de la UI. Poner datos fetcheados en Redux y hacer loading/error/refetch a mano es sobre-ingeniería." },
        { q: "¿Qué te dan TanStack Query / SWR?", a: "Caché, deduplicación de requests, refetch en segundo plano, stale-while-revalidate y estados de carga/error de fábrica — reemplazando el fetching manual con useEffect." },
        { q: "¿Qué tiene de malo useEffect + fetch?", a: "Condiciones de carrera (una respuesta vieja lenta sobrescribe la nueva — arregla con AbortController o un flag de ignorar), sin caché/dedup, y estado de carga/error manual." },
        { q: "¿Cuándo conviene Redux?", a: "Estado de cliente complejo, transversal y de alta frecuencia donde prediccibilidad, devtools y middleware pagan el boilerplate. No lo uses por defecto — y nunca solo para guardar datos del servidor." },
        { q: "¿Cómo arreglas una condición de carrera de fetch?", a: "AbortController para cancelar requests viejas, o un flag de ignorar en el cleanup del efecto para que solo aplique la última respuesta." }
      ],
      quiz: [
        { q: "Los datos traídos de una API se manejan mejor con…", options: ["Redux por defecto", "Una librería de estado de servidor (TanStack Query/SWR)", "useContext", "Una variable global"], answer: 1, explain: "El estado de servidor necesita caché/dedup/refetch/invalidación — las query libraries lo proveen; un store global es sobre-ingeniería." },
        { q: "Context es el más adecuado para…", options: ["Datos de alta frecuencia (ticks)", "Valores globales de baja frecuencia como tema/auth", "Caché de servidor", "Validación de formularios"], answer: 1, explain: "Todos los consumidores re-renderizan al cambiar, así que mantén los valores del contexto de baja frecuencia." },
        { q: "Una respuesta vieja y lenta sobrescribe una más nueva. Esto es…", options: ["Una stale closure", "Una condición de carrera", "Write skew", "Hidratación"], answer: 1, explain: "Se arregla con AbortController o un flag de ignorar para que solo aplique la última respuesta." },
        { q: "El lugar por defecto para el estado de un componente es…", options: ["Redux", "useState/useReducer local", "Context", "localStorage"], answer: 1, explain: "Empieza local; sube la escalera solo cuando compartir o la complejidad lo exija." },
        { q: "Stale-while-revalidate es una característica de…", options: ["React.memo", "TanStack Query / SWR", "useReducer", "Error boundaries"], answer: 1, explain: "Sirve el dato cacheado de inmediato mientras re-obtiene en segundo plano." }
      ]
    },

    "react-strategies": {
      title: "Estrategias de Renderizado y Suspense",
      track: "frontend",
      icon: "🖥️",
      blurb: "Las estrategias de renderizado determinan dónde y cuándo se produce tu HTML: en el navegador (CSR), por petición en un servidor (SSR), en tiempo de build (SSG/ISR) o en el servidor como componentes (RSC). La hidratación, Suspense y las transitions gobiernan cómo se vuelve interactivo.",
      read: `
        <table><thead><tr><th>Estrategia</th><th>Dónde se produce el HTML / trade-off</th></tr></thead><tbody>
        <tr><td>CSR</td><td>Navegador tras cargar el JS; despliegue simple, primer paint lento, SEO pobre</td></tr>
        <tr><td>SSR</td><td>Servidor por request; primer paint rápido + SEO, costo de servidor + hidratación</td></tr>
        <tr><td>SSG</td><td>Build; lo más rápido + cacheable, viejo hasta el próximo build</td></tr>
        <tr><td>ISR</td><td>Build + revalidación periódica; frescura de SSG sin rebuilds completos</td></tr>
        <tr><td>RSC</td><td>Servidor, streameado, <strong>cero JS de cliente</strong> para esos componentes; sin hooks/estado — las partes interactivas son Client Components</td></tr>
        </tbody></table>
        <p><strong>Hidratación:</strong> adjuntar listeners y estado al HTML del servidor para volverlo interactivo; los desajustes servidor/cliente causan errores de hidratación.</p>
        <p><strong>Suspense y transitions:</strong> Suspense declara un fallback mientras algo carga (chunks, datos); useTransition marca una actualización como no urgente para que typing/clicks sigan respondiendo.</p>`,
      cards: [
        { q: "¿CSR vs SSR vs SSG?", a: "CSR: HTML en el navegador tras el JS — despliegue simple, primer paint lento, SEO débil. SSR: servidor por request — primer paint rápido + SEO, costo de servidor e hidratación. SSG: en el build — lo más rápido y cacheable, viejo hasta reconstruir." },
        { q: "¿Qué es ISR?", a: "Incremental Static Regeneration: páginas del build más revalidación periódica — frescura de SSG sin rebuilds completos." },
        { q: "¿Qué son los React Server Components (RSC)?", a: "Componentes renderizados en el servidor y streameados con cero JS de cliente; acceden a datos directamente pero no pueden usar hooks/estado/interactividad. Marca las partes interactivas como Client Components." },
        { q: "¿Qué es la hidratación?", a: "Adjuntar event listeners y estado al HTML renderizado en el servidor para volverlo interactivo. Los desajustes entre la salida del servidor y la del cliente causan errores de hidratación." },
        { q: "¿Qué hace Suspense?", a: "Declara una UI de fallback mientras algo carga (chunks con lazy, datos), dejando que React muestre un placeholder hasta que esté listo." },
        { q: "¿Qué hace useTransition?", a: "Marca una actualización como no urgente para que las interacciones urgentes (typing, clicks) sigan respondiendo mientras el update pesado renderiza en segundo plano." },
        { q: "¿Cuándo elegirías SSG sobre SSR?", a: "Cuando el contenido es mayormente estático y cacheable (marketing, docs, blog) — la entrega más rápida. Usa SSR cuando el contenido sea por request/personalizado y deba ser fresco + SEO-friendly." }
      ],
      quiz: [
        { q: "Un sitio de marketing con contenido mayormente estático debería usar…", options: ["CSR", "SSG", "Solo RSC", "WebSockets"], answer: 1, explain: "SSG es lo más rápido y cacheable para contenido estático; rebuild o ISR para actualizaciones." },
        { q: "Los React Server Components se diferencian de los de cliente en que…", options: ["Corren en el navegador", "Tienen cero JS de cliente y no pueden usar hooks/estado", "Son siempre más rápidos", "Requieren Redux"], answer: 1, explain: "Los RSC se renderizan en el servidor sin bundle de cliente; la interactividad requiere Client Components." },
        { q: "Adjuntar interactividad al HTML renderizado en servidor se llama…", options: ["Reconciliación", "Hidratación", "Memoización", "Transiciones"], answer: 1, explain: "La hidratación conecta listeners/estado al HTML existente; los desajustes causan errores." },
        { q: "Para mantener el typing responsivo durante un render pesado de búsqueda, usa…", options: ["useMemo", "useTransition", "useRef", "useLayoutEffect"], answer: 1, explain: "useTransition marca el update pesado como no urgente para que el input siga respondiendo." },
        { q: "ISR provee…", options: ["Render en servidor por request", "Páginas estáticas con revalidación periódica", "Render solo en cliente", "Sockets en tiempo real"], answer: 1, explain: "Incremental Static Regeneration refresca páginas estáticas sin rebuilds completos." }
      ]
    },

    "react-testing": {
      title: "Testing y Errores en React",
      track: "frontend",
      icon: "🧪",
      blurb: "El testing en React verifica lo que los usuarios realmente experimentan. React Testing Library renderiza componentes y los consulta por rol y texto; los error boundaries contienen fallos de renderizado; StrictMode invoca los efectos dos veces en desarrollo para exponer cleanups inseguros.",
      read: `
        <p><strong>Filosofía de React Testing Library:</strong> testea <em>comportamiento, no implementación</em> — consulta por role/label/text (lo que el usuario ve), interactúa con userEvent, aserte sobre resultados. No assertas sobre estado interno; esos tests se rompen en cada refactor.</p>
        <p><strong>Error boundaries:</strong> atrapan errores en el subárbol de renderizado debajo de ellas y muestran un fallback. NO atrapan errores de event handlers ni asíncronos — maneja esos con try/catch. API de clases; react-error-boundary es el wrapper común.</p>
        <p><strong>StrictMode:</strong> invoca los efectos dos veces en desarrollo a propósito para exponer cleanups faltantes. Es una feature, no un bug — y no ocurre en producción.</p>`,
      cards: [
        { q: "¿Cuál es la filosofía de React Testing Library?", a: "Testea comportamiento, no implementación: consulta por role/label/text (lo que el usuario ve), interactúa con userEvent, aserte sobre resultados. Evita assertar sobre estado interno — esos tests se rompen en cada refactor." },
        { q: "¿Qué atrapan los error boundaries — y qué no?", a: "Atrapan errores del árbol de renderizado debajo de ellos y muestran un fallback. NO atrapan errores de event handlers ni asíncronos — manéjalos con try/catch." },
        { q: "¿Por qué un efecto corre dos veces en desarrollo?", a: "React StrictMode invoca los efectos dos veces a propósito para exponer cleanups faltantes. Es una feature, no un bug — y no ocurre en producción." },
        { q: "¿userEvent vs fireEvent?", a: "userEvent simula interacciones reales del usuario (escribir, clic con secuencia completa de eventos); fireEvent despacha un solo evento de bajo nivel. Prefiere userEvent para tests de comportamiento realistas." },
        { q: "¿Cómo manejas un error asíncrono en un componente?", a: "try/catch alrededor del trabajo asíncrono (los error boundaries no lo atrapan), luego setea estado de error y renderiza una UI de fallback." }
      ],
      quiz: [
        { q: "RTL recomienda consultar elementos por…", options: ["Estado interno del componente", "Role/label/text que ve el usuario", "Nombres de clases CSS", "Valores de refs"], answer: 1, explain: "Testea el comportamiento tal como lo experimenta el usuario, no detalles de implementación." },
        { q: "Los error boundaries atrapan…", options: ["Errores de event handlers", "Errores asíncronos", "Errores del árbol de renderizado debajo de ellos", "Todos los errores"], answer: 2, explain: "Atrapan errores de render debajo; los de handlers y asíncronos necesitan try/catch." },
        { q: "Un efecto que corre dos veces en desarrollo lo causa…", options: ["Un bug en tu código", "La doble invocación de StrictMode", "React.memo", "Hidratación"], answer: 1, explain: "StrictMode invoca dos veces a propósito para revelar cleanups faltantes; no pasa en producción." },
        { q: "Para tests de interacción realistas, prefiere…", options: ["fireEvent", "userEvent", "Mutación directa de estado", "Solo snapshots"], answer: 1, explain: "userEvent simula secuencias completas de eventos reales del usuario." }
      ]
    },

    "nodejs": {
      title: "Runtime de Node.js",
      track: "backend",
      icon: "🟩",
      blurb: "Node.js es un runtime de JavaScript construido sobre el motor V8 de Chrome y libuv que ejecuta código en un solo hilo con I/O no bloqueante y orientado a eventos — ideal para servicios intensivos en I/O, y escalable horizontalmente con cluster o worker threads.",
      read: `
        <p><strong>Un tick del event loop:</strong> tu JS corre en un hilo. Al vaciarse la pila, libuv trabaja las fases en orden — <strong>timers</strong> (setTimeout), <strong>pending callbacks</strong>, la fase <strong>poll</strong> (I/O completado: fs, sockets) y la fase <strong>check</strong> (setImmediate) — y entre cada macrotask la <strong>cola de microtasks</strong> (callbacks de promises, queueMicrotask) se drena <em>completa</em>. Ese orden produce el resultado clásico: <code>setTimeout(() =&gt; log(1)); Promise.resolve().then(() =&gt; log(2)); log(3)</code> imprime <strong>3 → 2 → 1</strong> — primero lo sync, luego la microtask, luego el timer.</p>
        <p><strong>Bloquear el loop:</strong> llamadas fs síncronas, JSON.parse/stringify gigantes, bucles de CPU, regex catastróficas. Todo comparte ese único hilo, así que un request bloqueado detiene <em>todos</em> los requests — Node es rápido coordinando I/O, no haciendo trabajo de CPU. Mueve el CPU fuera del loop (worker_threads) o a una cola.</p>
        <p><strong>Thread pool:</strong> libuv delega fs, crypto, dns y zlib a 4 worker threads por defecto (UV_THREADPOOL_SIZE). Por eso <code>readFileSync</code> bloquea — estás esperando síncronamente a un thread — mientras <code>readFile</code> devuelve de inmediato y el worker es quien espera. "Single-threaded" describe tu JavaScript, no el I/O del runtime.</p>
        <p><strong>Trabajo de CPU:</strong> <code>worker_threads</code> corre JavaScript en múltiples hilos dentro de un proceso, compartiendo memoria con SharedArrayBuffer — correcto para CPU (hashing, imágenes). <code>cluster</code> forkea N procesos completos (uno por núcleo) que comparten un puerto — escalado a nivel de proceso, aislamiento y la unidad de reinicio rolling. Procesos para escalar, hilos para CPU.</p>
        <p><strong>Streams y backpressure:</strong> los streams procesan datos por chunks — readable, writable, duplex, transform — así un archivo de 2GB fluye con memoria constante en vez de bufferizarse completo. Backpressure: cuando el buffer interno pasa el highWaterMark, <code>write()</code> devuelve false, señal de que el consumidor (socket, HTTP) es más lento de lo que produces — pausa y espera <code>drain</code>, o deja que <code>pipeline()</code> te regule y maneje errores/cleanup por ti. Los streams en <code>objectMode</code> transportan objetos en vez de bytes.</p>
        <p><strong>Buffers y EventEmitter:</strong> un Buffer es un bloque de bytes crudos de longitud fija asignado fuera del heap de V8 — cómo lees/escribes archivos, sockets y protocolos binarios sin el costo de strings de JS. EventEmitter (<code>on</code>/<code>emit</code>) es el pub/sub en proceso de Node sobre el que se construyen streams y servers; su filo: un evento <code>'error'</code> sin listener <em>lanza</em> y puede tumbar el proceso.</p>
        <p><strong>npm y semver:</strong> <code>^</code> permite upgrades de minor+patch, <code>~</code> solo patch. El lockfile fija el árbol exacto resuelto para que cada instalación (y CI, con npm ci) sea reproducible — comitealo. Audita dependencias: el registro es tu cadena de suministro.</p>
        <p><strong>Higiene de producción:</strong> ante SIGTERM, haz un graceful shutdown — deja de aceptar conexiones nuevas, termina los requests en vuelo, cierra pools de BD y sale — y deja que PM2/Kubernetes te reinicie sin dropear requests. Maneja <code>uncaughtException</code>/<code>unhandledRejection</code> logueando y saliendo: tras un crash el estado del proceso es indefinido; el trabajo del supervisor es reiniciar, no seguir corriendo. La config viene de env vars (12-factor); los logs son streams.</p>`,
      cards: [
        { q: "¿Cómo funciona el event loop de Node.js?", a: "Tu JS corre en un hilo; al vaciarse la pila, libuv corre sus fases — timers (setTimeout), pending, poll (I/O completado), check (setImmediate) — y entre cada macrotask la cola de microtasks (callbacks de promises) se drena completa. Por eso setTimeout(fn,0) dispara después de Promise.then: sync → microtask → timer." },
        { q: "¿Qué bloquea el event loop y por qué es fatal en Node?", a: "Llamadas fs síncronas, JSON.parse/stringify gigantes, bucles de CPU, regex malas — sostienen el único hilo, así que todos los demás requests esperan. Node coordina I/O; no paraleliza cómputo. Delega a worker threads o a una cola." },
        { q: "Si Node es single-threaded, ¿cómo corren fs/crypto en paralelo?", a: "El thread pool de libuv — 4 worker threads por defecto (UV_THREADPOOL_SIZE) — se lleva fs, crypto, dns y zlib del hilo principal. Por eso readFileSync bloquea (esperas síncronamente al worker) mientras readFile devuelve de inmediato." },
        { q: "¿Cluster vs worker_threads?", a: "Cluster forkea N procesos (uno por núcleo) que comparten un puerto — escalado a nivel de proceso, aislamiento y la unidad de reinicio rolling. worker_threads corre JavaScript en múltiples hilos dentro de un proceso compartiendo memoria (SharedArrayBuffer) — para CPU. Procesos para escalar, hilos para CPU." },
        { q: "¿Qué es el backpressure en streams?", a: "write() devolviendo false significa que el buffer interno pasó el highWaterMark — el consumidor (socket, HTTP) es más lento de lo que produces. Pausa al productor y espera drain, o usa pipeline() que te regula y propaga errores. Si no, los buffers crecen hasta el OOM." },
        { q: "¿Por qué streams en vez de bufferizar payloads enteros?", a: "Memoria constante: un archivo de 2GB por pipeline() fluye en chunks (readable/transform/writable) en vez de cargarse — o parsear su JSON — en la RAM. Los streams en objectMode transportan objetos en vez de bytes." },
        { q: "¿Qué es un Buffer?", a: "Un bloque de bytes crudos de longitud fija asignado fuera del heap de V8 — cómo Node lee/escribe archivos, sockets y protocolos binarios sin el costo de strings de JS. Se crea con Buffer.alloc (ceros) o Buffer.allocUnsafe (más rápido, sin inicializar)." },
        { q: "¿Qué es EventEmitter — y su filo más peligroso?", a: "El pub/sub en proceso de Node (on/emit) sobre el que se construyen streams y servers. El filo: un evento 'error' sin listener lanza — un error no manejado puede tumbar el proceso, así que adjunta handlers (o usa pipeline, que propaga errores)." },
        { q: "¿Qué significan ^ y ~ en package.json, y por qué comitear el lockfile?", a: "^ permite upgrades de minor+patch, ~ solo patch. El lockfile fija el árbol exacto resuelto para que cada instalación — y CI con npm ci — sea reproducible. Comitealo y audita el árbol: el registro es tu cadena de suministro." },
        { q: "¿Qué significa graceful shutdown en Node?", a: "Ante SIGTERM: deja de aceptar conexiones nuevas, termina los requests en vuelo, cierra pools de BD y manejadores, y sale — para que el load balancer y el orquestador te reinicien sin dropear requests. Es la diferencia entre un rollout limpio y un blip." },
        { q: "¿Cómo manejar un uncaughtException?", a: "Loguéalo, limpia lo que puedas y sale — tras un crash el estado del proceso es indefinido (escrituras parciales, invariantes rotas). Deja que PM2/Kubernetes te reinicie; no intentes seguir sirviendo desde un proceso corrupto." }
      ],
      quiz: [
        { q: "Un endpoint lee un archivo de 2GB a memoria con fs.readFileSync y lo parsea. Bajo carga el servicio muere. Causa raíz?", options: ["Muy pocos workers de cluster", "Bloquear el único hilo del event loop + memoria sin límite", "Un bug del GC de V8", "Falta el thread pool"], answer: 1, explain: "readFileSync sostiene el único hilo que todos los requests comparten, y bufferizar gigabytes (o JSON.parse de ellos) dispara la memoria. Usa streams con pipeline()." },
        { q: "Tu API hace reescalado pesado de imágenes y el event loop se traba. Mejor arreglo?", options: ["Subir UV_THREADPOOL_SIZE a 128", "Mover el reescalado a worker_threads o a una cola", "Agregar RAM", "Usar promises en todo"], answer: 1, explain: "El trabajo de CPU no va al loop — el thread pool solo cubre fs/crypto/dns/zlib. worker_threads en proceso, o una cola/servicio de workers." },
        { q: "El módulo cluster te da principalmente…", options: ["Hilos de JS en paralelo compartiendo memoria", "N procesos en N núcleos tras un puerto", "I/O de archivos asíncrono", "Un thread pool para crypto"], answer: 1, explain: "Cluster forkea procesos completos compartiendo el puerto — escalado a nivel de proceso, aislamiento y la unidad de reinicio rolling." },
        { q: "write() en un stream sigue devolviendo false. ¿Qué te está diciendo el stream?", options: ["El stream se cerró", "Backpressure: el consumidor no abastece — pausa la producción hasta drain", "Debes reintentar la escritura", "El buffer está corrupto"], answer: 1, explain: "El buffer interno pasó el highWaterMark; seguir escribiendo hace crecer la memoria hasta el OOM. Pausa, espera drain, o deja que pipeline() te regule." },
        { q: "Un evento 'error' se dispara en un stream sin listener de error. Node…", options: ["Lo ignora", "Lanza — potencialmente tumbando el proceso", "Emite un warning", "Reintenta la operación"], answer: 1, explain: "Los eventos 'error' sin handler lanzan — adjunta handlers o usa pipeline(), que forwards los errores a tu cadena de promesas." },
        { q: "Se dispara un uncaughtException. La respuesta correcta es…", options: ["Seguir sirviendo — es solo un warning", "Loguear, limpiar y salir; deja que el supervisor reinicie", "Reiniciar el event loop", "Tragarlo con un handler vacío"], answer: 1, explain: "Tras una excepción no capturada el proceso puede tener escrituras parciales y estado roto — sale limpio y deja que PM2/Kubernetes reinicie." }
      ]
    },

    "dotnet": {
      title: ".NET / C# para Back-End",
      track: "backend",
      icon: "⚙️",
      blurb: ".NET (con ASP.NET Core) es el runtime administrado y el framework web de Microsoft: C# compila a IL, corre en el CLR con el servidor Kestrel, y trae contenedor DI, el ORM EF Core y un pipeline de middleware.",
      read: `
        <p><strong>Runtime:</strong> el código C# compila a ensamblados de Intermediate Language (IL). El CLR JIT-compila el IL por método en la primera llamada y lo ejecuta con garbage collection y seguridad de tipos — tú escribes C#, el runtime administra memoria y tipos. Las apps ASP.NET Core se auto-hospedan en <strong>Kestrel</strong>, un servidor HTTP multiplataforma que escucha sockets y parsea requests; Nginx o IIS suelen ir delante para TLS, archivos estáticos y forwarding.</p>
        <p><strong>Pipeline de middleware:</strong> es una cadena enlazada de <code>Func&lt;RequestDelegate, RequestDelegate&gt;</code>. Cada componente recibe el <code>HttpContext</code> y el delegate <em>next</em>, así que <code>app.Use((ctx, next) =&gt; { log(); await next(ctx); log(); })</code> puede actuar <strong>tanto a la ida como a la vuelta</strong> — como una cebolla. "Cortocircuitar" significa no llamar a <code>next</code>: un middleware de auth que devuelve 401 detiene el request ahí, y el routing/endpoints nunca corre. El orden de registro <em>es</em> el orden de ejecución.</p>
        <p><strong>DI y lifetimes:</strong> los servicios se resuelven del contenedor por inyección de constructor. <strong>Transient</strong> = instancia nueva en <em>cada</em> resolve — dos veces en el mismo request son dos objetos. <strong>Scoped</strong> = una instancia compartida por todo lo resuelto dentro del request HTTP actual, descartada al terminar. <strong>Singleton</strong> = una instancia de por vida de la app, compartida entre requests y threads — solo es segura si es thread-safe. El origen de los bugs: resolver un servicio desde un scope más corto o más largo que su lifetime.</p>
        <p><strong>The captive dependency:</strong> el constructor de un singleton corre <em>una sola vez</em>, en el primer request. Si ahí captura un scoped — el caso clásico es un <code>DbContext</code> scoped — cada request posterior comparte el contexto de aquel primer request: entidades trackeradas viejas, fuga de estado entre requests y excepciones de concurrencia bajo carga. Arreglo: inyecta <code>IServiceScopeFactory</code> y crea un scope por unidad de trabajo.</p>
        <p><strong>EF Core:</strong> el <code>DbContext</code> es Unit of Work + change tracker: rastrea las entidades cargadas, traduce LINQ (<code>IQueryable</code>) a SQL de forma perezosa — la query se construye al declararla y se ejecuta al enumerarla — y consolida los cambios como una transacción en <code>SaveChanges()</code>. Los proxies de lazy loading emiten una query <em>por cada acceso</em> a una navegación, así que un bucle de 100 orders = 1 + 100 queries (N+1); <code>.Include()</code> pliega la relación en una sola query con JOIN, y <code>.Select()</code> proyecta exactamente las columnas necesarias. Las migraciones son snapshots C# ordenados y reversibles del modelo; aplícalas con <strong>expand-contract</strong> (agregar columna/tabla nueva → desplegar código con doble escritura → backfill → cambiar lecturas → eliminar lo viejo) para que el código viejo y el nuevo coexistan durante el rollout.</p>
        <p><strong>async/await:</strong> cuando una tarea de I/O llega a <code>await</code>, <em>el hilo se devuelve al pool</em> mientras la operación corre — así escala un request sin un hilo por cada espera. <code>.Result/.Wait()</code> hace lo contrario: bloquea un hilo del pool esperando una tarea cuya continuación también necesita un hilo (deadlock con sync context, starvation bajo carga). Para llamadas independientes, <code>Task.WhenAll</code> las arranca todas de inmediato — latencia total ≈ la más lenta, no la suma. En código de librería usa <code>ConfigureAwait(false)</code> para no capturar el contexto del request.</p>
        <p><strong>Minimal APIs vs MVC:</strong> las minimal APIs enrutan lambdas con binding y filters — menos ceremonia, el default para microservicios y servicios chicos. MVC da controllers, actions, model binding y convenciones — más estructura para apps grandes. Ambos comparten el mismo pipeline y el contenedor DI, así que cambiar es una decisión de presentación, no una re-arquitectura.</p>
        <p><strong>Configuración y options:</strong> <code>IConfiguration</code> funde appsettings.json, variables de entorno y secret stores (en ese orden de prioridad). El patrón Options bindea clases tipadas <code>Options&lt;T&gt;</code> y las valida al arranque (<code>ValidateDataAnnotations</code>) — fallar rápido al boot en vez de lanzar excepciones de magic strings en lo profundo de un request.</p>`,
      cards: [
        { q: "¿Qué son el CLR, el IL y Kestrel en una frase?", a: "El código C# compila a Intermediate Language (IL); el CLR JIT-compila el IL por método en la primera llamada y lo ejecuta con GC y seguridad de tipos. Las apps ASP.NET Core se auto-hospedan en Kestrel, un servidor HTTP multiplataforma que escucha sockets y parsea requests — normalmente detrás de Nginx o IIS para TLS y archivos estáticos." },
        { q: "¿Cómo funciona el pipeline de middleware de ASP.NET Core?", a: "Es una cadena enlazada de componentes: cada uno recibe el HttpContext y el delegate next(), así que app.Use((ctx, next) => { log(); await next(ctx); log(); }) actúa a la ida y a la vuelta — una cebolla. Cortocircuitar = no llamar next (auth devuelve 401, el routing nunca corre). El orden de registro es el orden de ejecución." },
        { q: "Explica los tres lifetimes de servicios del DI.", a: "Transient: instancia nueva en cada resolve — incluso dos veces dentro de un request. Scoped: una instancia compartida por todo lo resuelto dentro del request HTTP actual, descartada al terminar. Singleton: una de por vida de la app, compartida entre requests y threads — solo si es thread-safe. La zona de bugs: resolver desde un scope más corto o largo que el lifetime." },
        { q: "¿Qué es una captive dependency?", a: "El constructor de un singleton corre una vez, en el primer request — así que un scoped capturado ahí (típicamente DbContext) vive para siempre. Cada request posterior comparte ese contexto viejo: entidades trackeradas obsoletas, estado fugado y excepciones de concurrencia bajo carga. Arreglo: inyecta IServiceScopeFactory y crea un scope por unidad de trabajo." },
        { q: "¿Qué es el DbContext en términos de EF Core?", a: "Unit of Work + change tracker: rastrea las entidades cargadas, traduce LINQ (IQueryable) a SQL de forma perezosa — la query se construye al declararse y se ejecuta al enumerarse — y consolida los cambios como una transacción en SaveChanges(). Su lifetime scoped lo ata al request HTTP." },
        { q: "¿Cómo ocurre el clásico N+1 de EF Core y cómo se arregla?", a: "Los proxies de lazy loading emiten una query por cada acceso a una navegación: un bucle de 100 orders corre 1 query de orders + 100 de order.Customer. .Include() hace eager loading en una query con JOIN; .Select() proyecta exactamente las columnas necesarias. IQueryable vs IEnumerable también importa — materializar muy temprano ejecuta el filtro en memoria, no en SQL." },
        { q: "¿Por qué las migraciones de EF Core son más que scripts de esquema?", a: "Cada migración es un snapshot C# del modelo, ordenado y reversible, que genera SQL versionado. Aplícalas con expand-contract para cero downtime: agregar la columna/tabla nueva → desplegar código con doble escritura → backfill → cambiar lecturas → eliminar lo viejo — el código viejo y el nuevo coexisten durante el rollout." },
        { q: "¿Por qué es peligroso .Result/.Wait()?", a: "Sync-over-async: el hilo que llama se bloquea esperando que la tarea termine, pero la continuación de la tarea también necesita un hilo. Con SynchronizationContext (ASP.NET clásico) es deadlock; bajo carga es starvation del thread pool. Usa await hasta el fondo; ConfigureAwait(false) en librerías." },
        { q: "¿Cuándo Task.WhenAll vs awaits secuenciales?", a: "WhenAll arranca todas las tareas de inmediato y las espera en concurrently — latencia ≈ la más lenta. Los awaits secuenciales serializan — latencia ≈ la suma. Úsalo solo con llamadas verdaderamente independientes; el estado mutable compartido todavía necesita coordinación." },
        { q: "¿Minimal APIs vs controllers MVC — cuándo cada uno?", a: "Minimal APIs: lambdas en endpoint-routing con binding y filters, menos ceremonia — microservicios y servicios chicos. MVC: controllers, actions, model binding, convenciones — estructura para apps grandes. Mismo middleware pipeline y contenedor DI debajo, así que es una decisión de presentación." },
        { q: "¿Qué es el patrón Options?", a: "IConfiguration funde appsettings.json, variables de entorno y secrets; el patrón Options los bindea a clases Options<T> tipadas validadas al arranque (ValidateDataAnnotations). Falla rápido en el boot con un error claro en vez de magic strings lanzando en lo profundo de un request." }
      ],
      quiz: [
        { q: "Un singleton inyecta un DbContext scoped. Con el tiempo sirve filas viejas y lanza errores de concurrencia. Esto es…", options: ["Una fuga del thread pool", "Una captive dependency", "Una query N+1", "Un bug de orden de middleware"], answer: 1, explain: "El constructor del singleton corrió una vez, en el primer request, capturando el DbContext scoped de ese request — cada request posterior comparte la instancia vieja. Inyecta IServiceScopeFactory y crea un scope por unidad de trabajo." },
        { q: "Un endpoint hace tres llamadas de API independientes con awaits secuenciales. ¿La mejora más simple?", options: ["Envolver en Task.Run", "Task.WhenAll de las tres llamadas", "Hacer el servicio singleton", "Agregar cabeceras de caché"], answer: 1, explain: "Los awaits secuenciales pagan tres latencias en serie; WhenAll las arranca a la vez, así la latencia total ≈ la llamada más lenta." },
        { q: "En ASP.NET Core, el middleware registrado después de uno que cortocircuita…", options: ["Corre igual en paralelo", "No corre para ese request", "Corre dos veces", "Lanza error"], answer: 1, explain: "Cortocircuitar = no llamar next, así que la cadena se detiene — por eso el middleware de auth va antes del routing/endpoints." },
        { q: "Lazy-loading de propiedades de navegación dentro de un bucle produce…", options: ["Un deadlock", "Queries N+1", "Una captive dependency", "View bloat"], answer: 1, explain: "Cada acceso a una navegación es una query lazy aparte: 1 + N round trips. .Include() pliega la relación en una sola query con JOIN, o proyecta con .Select()." },
        { q: "Scoped lifetime significa…", options: ["Una instancia por resolve", "Una instancia por request HTTP", "Una instancia de por vida de la app", "Una instancia por hilo"], answer: 1, explain: "Scoped ata la instancia al request HTTP actual — correcto para estado por-request tipo DbContext; transient es por-resolve, singleton de por vida de la app." },
        { q: "Llamar .Result sobre un método async en un request puede hacer deadlock porque…", options: ["El GC se pausa", "Bloquea el hilo que la continuación necesita (sync-over-async)", "Kestrel prohíbe I/O síncrono", "Los Options no están bindeados"], answer: 1, explain: "El llamador bloquea un hilo del pool esperando una continuación que necesita un hilo — deadlock con sync context, starvation bajo carga. Usa await hasta el fondo." }
      ]
    },

    "db-advanced": {
      title: "Bases de Datos — Avanzado",
      track: "backend",
      icon: "🧮",
      blurb: "Más allá de lo básico: trade-offs de diseño de esquema (normalización vs desnormalización), llaves, vistas y vistas materializadas, connection pooling, patrones de auditoría y migraciones sin downtime en producción.",
      read: `
        <p><strong>Normalización (1NF–3NF):</strong> las formas normales eliminan redundancia progresivamente. <em>1NF</em>: cada columna guarda un valor atómico — sin listas separadas por comas en una celda. <em>2NF</em>: cada columna no-llave depende de la <em>llave compuesta completa</em> — sin dependencias parciales (en order_line con llave (order_id, line_no), product_name depende solo de product_id). <em>3NF</em>: sin dependencias transitivas — una no-llave no debe determinar otra no-llave (guarda product_name en products, no repetido en cada línea de order). La recompensa: <em>un hecho, un lugar</em> — sin anomalías de actualización, donde corregir un nombre en una fila deja copias viejas en otras. El costo: joins. <em>Desnormaliza deliberadamente</em> en rutas calientes de lectura — columnas duplicadas, contadores precalculados, tablas resumen — pero solo con estrategia de sincronización (eventos, triggers o staleness aceptado).</p>
        <p><strong>Llaves:</strong> los enteros autoincrementales son chicos y secuenciales — se agregan al final del B-Tree, así que los inserts son baratos y las páginas quedan densas. Los GUID no colisionan y se generan en el cliente (bueno para escrituras distribuidas), pero los <em>aleatorios</em> esparcen inserts por todo el índice, fragmentando páginas; a escala prefiere UUIDs ordenados (UUIDv7), que conservan localidad temporal. Las llaves naturales (emails, SKUs) se ven limpias hasta que el negocio renombra una — las llaves sustitutas absorben ese churn.</p>
        <p><strong>Vistas vs vistas materializadas:</strong> una vista es una <em>query</em> guardada — siempre refleja los datos actuales, pero paga el costo de la query en cada lectura. Una vista materializada guarda el <em>resultado</em> de la query — las lecturas son un scan de tabla, pero los datos quedan congelados hasta el refresh (REFRESH MATERIALIZED VIEW, o refresh incremental por agenda). El trade-off es explícito: staleness por velocidad. Perfecta para dashboards que agregan millones de filas; incorrecta para cualquier cosa que necesite frescura por request.</p>
        <p><strong>Stored procedures:</strong> lógica compilada dentro de la base — menos round trips y poder set-oriented, pero es difícil de versionar (vive fuera del repo), de testear y de depurar, y parte el codebase entre dos runtimes. Default moderno: <em>lógica en la app, SQL para datos</em>. Guarda los stored procedures para operaciones genuinas de bulk/set donde los round trips dominan; las reglas de negocio pertenecen a código de aplicación versionado.</p>
        <p><strong>Connection pooling:</strong> abrir una conexión cuesta TCP + autenticación + setup de sesión — mucho más que una query. Un pool mantiene N conexiones abiertas y las reparte. Dimensionamiento: para OLTP, <em>tamaño del pool ≈ cantidad de núcleos por nodo</em> — más conexiones no agregan throughput, mueven la cola al interior de la BD y suman contención por cambios de contexto (Ley de Little: tiempo en cola = concurrencia ÷ throughput). Síntoma de starvation: los requests se cuelgan y luego expiran "adquiriendo conexión". Primer sospechoso: una <em>fuga</em> — un camino que nunca cierra/dispose una conexión (o una transacción larga sosteniéndola) — no un pool chico. Subir el límite solo retrasa el outage.</p>
        <p><strong>Soft deletes y auditoría:</strong> un flag <code>deleted_at</code> mantiene filas recuperables, pero se filtra en <em>cada</em> query — cada <code>SELECT</code>, <code>JOIN</code> y unique constraint debe recordar el filtro, y la tabla crece para siempre. Las pistas de auditoría (tablas de cambios append-only: quién/qué/cuándo/viejo→nuevo, o CDC leyendo el WAL) responden "quién cambió qué y cuándo" <em>sin</em> contaminar el modelo vivo — la tabla viva sigue siendo la fuente única de verdad, el log es historial del lado lectura. Para tablas de alta rotación, deletes duros + log de auditoría le ganan a soft deletes + filtros olvidados.</p>
        <p><strong>Migraciones sin downtime (expand-contract):</strong> nunca un ALTER destructivo en el hot path durante un release — el código viejo y el nuevo corren a la vez. Expandir: agrega la columna/tabla nueva (nullable, sin uso) y despliega. Migrar: el código escribe en ambos formatos; backfill de filas viejas. Cambiar: las lecturas pasan al formato nuevo. Contraer: cuando todas las instancias están en el código nuevo, elimina lo viejo en un despliegue posterior. Cada paso es desplegable solo, así que un rollback nunca corrompe datos.</p>
        <p><strong>ORMs vs SQL crudo:</strong> el ORM cambia control por comodidad y seguridad — queries tipadas, migraciones, relaciones lazy — pero esconde el SQL: trampas N+1, planes genéricos y queries invisibles. Baja a SQL crudo para operaciones bulk, queries críticas de tuning, window functions y todo donde el plan generado importa. La mayoría de codebases maduros usan ambos: ORM para CRUD, SQL para el hot path.</p>`,
      cards: [
        { q: "¿Qué eliminan 1NF, 2NF y 3NF respectivamente?", a: "1NF: valores no atómicos (listas en una celda). 2NF: dependencias parciales — columnas que dependen solo de parte de una llave compuesta. 3NF: dependencias transitivas — una no-llave que determina otra no-llave. La meta en cada paso es un hecho en un lugar, para que una actualización no deje copias viejas." },
        { q: "¿Cuándo es correcta la desnormalización?", a: "En rutas calientes de lectura intensiva donde los joins cuestan demasiado: columnas duplicadas, contadores precalculados, tablas resumen. Pero solo con una estrategia de sincronización deliberada (eventos, triggers) o staleness aceptado — desnormalizar sin plan de sincronización es corrupción esperando pasar." },
        { q: "¿Llave primaria int autoincremental vs GUID?", a: "Ints: chicos, secuenciales — se agregan al B-Tree, inserts baratos y páginas densas. GUIDs: sin colisiones, generables en el cliente (bueno para escrituras distribuidas), pero los aleatorios esparcen inserts y fragmentan el índice — usa UUIDs ordenados (UUIDv7) para localidad a escala." },
        { q: "¿Vista vs vista materializada?", a: "Una vista es una query guardada: siempre fresca, pero paga el costo en cada lectura. Una vista materializada guarda el resultado: lecturas de un scan, pero los datos quedan congelados hasta refrescar — staleness explícito por velocidad. Correcta para dashboards, incorrecta para frescura por request." },
        { q: "¿La postura moderna sobre los stored procedures?", a: "Default: lógica en la app — testeable, versionable, depurable — con SQL para los datos. Guarda los stored procedures para operaciones genuinas de bulk/set donde los round trips dominan. Las reglas de negocio en stored procs viven fuera del repo y parten el codebase entre dos runtimes." },
        { q: "¿Por qué las conexiones necesitan pooling y cómo se dimensiona?", a: "Una conexión cuesta TCP + auth + setup de sesión — mucho más que una query — así que el pool las reutiliza. Para OLTP, tamaño ≈ núcleos por nodo: más conexiones no agregan throughput, agregan cola y contención dentro de la BD. Timeouts adquiriendo conexión suelen ser fuga, no pool chico." },
        { q: "¿Síntomas y causa del agotamiento del pool?", a: "Los requests se cuelgan y luego expiran esperando conexión. La causa suele ser una fuga — un camino que nunca cierra/dispose una conexión — o transacciones largas sosteniendo una abierta. Arregla la fuga primero; subir el límite solo retrasa el outage y mueve la cola a la base." },
        { q: "¿Trade-offs del soft delete?", a: "deleted_at mantiene filas recuperables, pero se filtra en cada query y constraint — siempre alguien olvida el filtro — y la tabla crece para siempre. Para datos de alta rotación, deletes duros + log de auditoría le ganan a soft deletes + filtros olvidados." },
        { q: "¿Cómo auditar cambios sin corromper el modelo?", a: "Tablas append-only de cambios (quién/qué/cuándo/viejo→nuevo) o CDC desde el WAL: la tabla viva sigue siendo la fuente única de verdad, el historial vive del lado lectura. Nunca dejes que dos fuentes reclamen ser 'los datos'." },
        { q: "Explica las migraciones expand-contract.", a: "Cambio de esquema sin downtime en pasos desplegables: expandir (columna/tabla nueva nullable) → migrar (doble escritura + backfill) → cambiar lecturas → contraer (eliminar lo viejo en un deploy posterior). Cada paso funciona con el código viejo y el nuevo corriendo — eso hace seguro el rollback." },
        { q: "¿Qué sacrifica un ORM frente al SQL crudo?", a: "Comodidad y tipado a cambio de control: esconde el SQL, así que trae trampas N+1, planes genéricos y queries invisibles. Usa SQL crudo para operaciones bulk, tuning del hot path y window functions — ORM para CRUD, SQL donde importa el plan." }
      ],
      quiz: [
        { q: "Un dashboard agrega millones de filas en cada carga. ¿El arreglo durable más barato?", options: ["Indexar todas las columnas", "Una vista materializada refrescada por agenda", "Pasar a NoSQL", "Subir el connection pool"], answer: 1, explain: "Precalcula la agregación y paga un refresh en vez de la query completa en cada lectura. Una vista sola igual corre la query por carga." },
        { q: "Requests con timeout 'adquiriendo conexión' tras un release. ¿Primer lugar a mirar?", options: ["Subir el límite del pool", "Un camino con conexión fuga/sin dispose", "Agregar réplicas de lectura", "Reescribir las queries del ORM"], answer: 1, explain: "El agotamiento es un síntoma; la causa suele ser fuga o transacciones largas. Subir el límite solo mueve la cola a la base." },
        { q: "Las llaves GUID aleatorias frenan los inserts a escala porque…", options: ["Son muy anchas de parsear", "La inserción aleatoria fragmenta el índice B-tree", "La BD no puede indexar strings", "Rompen la replicación"], answer: 1, explain: "Las llaves ordenadas se agregan al índice; los GUIDs aleatorios esparcen escrituras entre páginas, fragmentándolas. Los UUIDs ordenados (v7) restauran la localidad." },
        { q: "Debes renombrar una tabla muy usada con cero downtime. El patrón es…", options: ["Una migración: renombrar + desplegar juntos", "Expand-contract: agregar lo nuevo, doble escritura, backfill, cambiar, eliminar", "Tomar la ventana de mantenimiento", "Usar un alias de vista para siempre"], answer: 1, explain: "Pasados compatibles con ambos despliegues (expandir → migrar → contraer) para que el código viejo y nuevo coexistan — cada paso es rollback-able solo." },
        { q: "Cada query olvidando WHERE deleted_at IS NULL es un olor de…", options: ["Mala indexación", "Impuesto del soft delete — considera tablas de auditoría + deletes duros", "Un bug de normalización", "Agotamiento del pool"], answer: 1, explain: "Los soft deletes se filtran en cada camino de acceso; las tablas de alta rotación suelen ir mejor con deletes reales más un trail append-only de auditoría." },
        { q: "3NF elimina qué dependencia?", options: ["Grupos repetidos", "Dependencia parcial de una llave compuesta", "Dependencia transitiva de no-llave", "Llaves foráneas"], answer: 2, explain: "3NF elimina dependencias no-llave → no-llave; 2NF maneja las parciales de llave y 1NF los grupos repetidos." }
      ]
    },

    "js-core": {
      title: "JavaScript Esencial",
      track: "frontend",
      icon: "🟨",
      blurb: "JavaScript es el lenguaje de la web: single-threaded con event loop, basado en prototipos y con closures y funciones de primera clase. Este tema cubre la semántica que sondea una entrevista — scopes, this, prototipos y asincronía.",
      read: `
        <p><strong>Alcances: var/let/const y TDZ:</strong> <code>var</code> tiene alcance de función y se iza como <code>undefined</code>; <code>let</code>/<code>const</code> tienen alcance de bloque y se izan pero <em>sin inicializar</em> — leerlos antes de su línea lanza ReferenceError (la <strong>temporal dead zone</strong>). Usa <code>const</code> por defecto, <code>let</code> al reasignar, nunca <code>var</code>.</p>
        <pre><code>console.log(a); // undefined (var izado, sin error)
var a = 1;

console.log(b); // ReferenceError — temporal dead zone
let b = 2;</code></pre>
        <p><strong>Closures:</strong> una función conserva acceso <em>vivo</em> al scope donde fue creada, incluso después de que ese scope terminó. Impulsan la privacidad de módulos (datos ocultos al exterior), las cachés de memoización y los handlers que "recuerdan" su setup. El bug clásico: los closures creados en un bucle comparten la misma variable del bucle — se arregla con <code>let</code> (binding por iteración) o una factory.</p>
        <pre><code>// El bug clásico del bucle — los tres loguean 3:
for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i));

// Con let, cada iteración tiene su propio binding:
for (let i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i)); // 0 1 2

// El patrón módulo — count es privado, solo se expone inc():
function makeCounter() {
    let count = 0;                    // oculto en el closure
    return () =&gt; ++count;            // el closure lo mantiene vivo
}</code></pre>
        <p><strong>this:</strong> se resuelve <em>en el momento de la llamada</em>, no en la definición. Una llamada de método pasa el objeto, una llamada suelta da <code>undefined</code> (o el objeto global en sloppy mode), <code>new</code> da la nueva instancia, y <code>.call/.apply/.bind</code> lo fijan explícitamente. Las arrow functions son la excepción: no tienen <code>this</code> propio — capturan el del scope envolvente, por eso son perfectas como callbacks y rotas como métodos que necesitan su propio <code>this</code>.</p>
        <pre><code>const user = {
    name: 'Ana',
    regular() { return this.name; },       // this = user → 'Ana'
    arrow: () =&gt; this.name,              // this = módulo/global → undefined
};
user.regular();   // 'Ana'
user.arrow();     // undefined — las arrows capturan el scope ENCERRANTE</code></pre>
        <p><strong>Prototipos y clases:</strong> todo objeto delega a una <strong>cadena de prototipos</strong>; la búsqueda de propiedades sube hasta encontrarla o llegar a null. <code>class</code> es azúcar sobre constructores basados en prototipos: los métodos viven en el prototipo compartido (una copia para todas las instancias), no se copian por objeto.</p>
        <pre><code>class Animal {
    constructor(name) { this.name = name; }         // propiedad propia por instancia
    speak() { return this.name + " hace un sonido"; }  // en Animal.prototype
}
class Dog extends Animal {
    speak() { return this.name + " ladra"; }        // sombrea el método padre
}
new Dog('Rex').speak(); // 'Rex ladra'</code></pre>
        <p><strong>Event loop:</strong> el JS corre una pila de llamadas hasta completarla. Al vaciarse, el engine drena la <strong>cola de microtasks</strong> (callbacks de promise, <code>queueMicrotask</code>) <em>completa</em>, y luego toma la siguiente <strong>macrotask</strong> (timers, callbacks de I/O). Como las microtasks corren entre cada macrotask, una continuación de promise siempre gana a un <code>setTimeout(0)</code> — la pregunta clásica de orden.</p>
        <pre><code>console.log('A');                              // 1 · sync
setTimeout(() =&gt; console.log('B'), 0);         // 4 · macrotask (timer)
Promise.resolve().then(() =&gt; console.log('C')); // 3 · microtask
queueMicrotask(() =&gt; console.log('D'));        // 3 · microtask
console.log('E');                              // 2 · sync
// Salida: A E C D B — las microtasks se drenan antes del timer</code></pre>
        <p><strong>Promises y async/await:</strong> una función <code>async</code> siempre devuelve una promise; <code>await</code> es <code>.then()</code> con sintaxis síncrona, y los errores fluyen al <code>try/catch</code> en vez del <code>.catch</code>. Para trabajo independiente, <code>Promise.all</code> corre todo en concurrently y rechaza con el primer fallo; <code>allSettled</code> espera cada resultado — úsalo cuando el fallo parcial es aceptable.</p>
        <pre><code>// Secuencial: 3 llamadas × latencia = lento
await fetchUser(); await fetchOrders(); await fetchPrefs();

// Concurrente: una ronda de latencia
const [user, orders, prefs] = await Promise.all([
    fetchUser(), fetchOrders(), fetchPrefs(),
]);

// Fallo parcial OK — obtiene cada resultado
const results = await Promise.allSettled([a(), b(), c()]);
results.find(r =&gt; r.status === 'rejected')?.reason;</code></pre>
        <p><strong>Igualdad:</strong> <code>==</code> coacciona tipos antes de comparar (<code>'1' == 1</code> es true, <code>[] == false</code> es true); <code>===</code> compara sin coacción. Usa <code>===</code> siempre — la única excepción aceptada es <code>x == null</code>, el modismo deliberado que matchea <code>null</code> y <code>undefined</code> a la vez.</p>
        <p><strong>Copias:</strong> <code>{...obj}</code> y <code>Object.assign</code> copian <em>un nivel</em> — los objetos anidados son referencias compartidas, el bug #1 de "muté mi estado" (React incluido). Usa <code>structuredClone()</code> para una copia profunda e independiente.</p>
        <pre><code>const src = { user: { name: 'Ana' } };
const copy = { ...src };            // shallow: copy.user === src.user
copy.user.name = 'Beto';
console.log(src.user.name);         // 'Beto' — ¡la fuente también cambió!

const deep = structuredClone(src);  // verdaderamente independiente</code></pre>
        <p><strong>Debounce vs throttle:</strong> el debounce <em>espera el silencio</em> — dispara una vez tras detenerse la actividad (buscar al teclear, resize). El throttle <em>limita la frecuencia</em> — a lo sumo una vez por intervalo durante actividad continua (scroll, mousemove). Debounce = "hazlo cuando terminen", throttle = "hazlo como máximo así de seguido".</p>
        <pre><code>// Debounce: espera 300ms tras la ÚLTIMA tecla
const onType = debounce(q =&gt; search(q), 300);

// Throttle: corre ya, y luego a lo sumo una vez por 100ms
const onScroll = throttle(updatePosition, 100);</code></pre>
        <p><strong>Módulos:</strong> los ES modules (<code>import</code>/<code>export</code>) son <em>estáticos</em> — las dependencias se conocen al parsear, lo que habilita tree-shaking (eliminación de código muerto) y análisis estático. CommonJS (<code>require</code>) es dinámico y síncrono, resuelto en runtime — los bundlers deben enviar todo porque no pueden saber qué se requerirá.</p>`,
      cards: [
        { q: "¿Qué es la temporal dead zone?", a: "Las declaraciones let/const se izan pero quedan sin inicializar hasta su línea; leerlas antes lanza ReferenceError. var, en cambio, se iza como undefined. Por eso console.log(x) antes de let x = 1 crashea y antes de var x = 1 imprime undefined." },
        { q: "¿Qué es un closure y para qué sirve?", a: "Una función conserva acceso vivo al scope donde fue creada, incluso después de que terminó. Impulsa la privacidad de módulos (makeCounter oculta count), memoización y handlers que recuerdan su setup. El bug clásico: closures en un bucle compartiendo una variable — arreglo con let (binding por iteración) o una factory." },
        { q: "¿Cómo se determina this?", a: "En el momento de la llamada: método → el objeto; llamada suelta → undefined (global en sloppy mode); new → la nueva instancia; call/apply/bind → explícito. Las arrow functions no tienen this propio — capturan el del scope envolvente, por eso sirven de callbacks y fallan como métodos." },
        { q: "¿Por qué las arrow functions fallan como métodos pero sirven como callbacks?", a: "Capturan el this del scope envolvente en vez de tener el propio. Como callback es exactamente correcto (el this circundante sobrevive al handler); como obj.method() obtienes el this exterior, no obj — this.name dentro de la arrow no es el nombre del objeto." },
        { q: "¿Cómo se relacionan las clases con los prototipos?", a: "class es azúcar sobre constructores basados en prototipos: el constructor pone propiedades propias por instancia, los métodos viven en el prototipo compartido (una copia para todas), y la búsqueda sube por la cadena hasta encontrar o null." },
        { q: "¿Microtasks vs macrotasks — quién gana?", a: "Tras vaciarse la pila actual, la cola completa de microtasks (callbacks de promise, queueMicrotask) se drena antes de cualquier macrotask (setTimeout, I/O). Por eso Promise.then siempre corre antes que setTimeout(fn, 0) — y un bucle de microtasks mata de hambre a todos los timers." },
        { q: "¿Promise.all vs allSettled?", a: "all corre las promises en concurrently y rechaza con el primer fallo, descartando el resto — úsalo para todo-o-nada. allSettled espera cada resultado y devuelve {status, value/reason} por promise — para trabajo independiente donde el fallo parcial es aceptable." },
        { q: "¿== vs === y la única excepción permitida?", a: "== coacciona tipos antes de comparar ('1' == 1 y [] == false son true); === no. Usa === siempre, excepto x == null — el modismo deliberado que matchea null y undefined en una comparación." },
        { q: "¿Por qué el spread no copia un objeto completo?", a: "Spread y Object.assign copian un nivel: los anidados son referencias compartidas, así que mutar copy.user.name también muta source.user.name — el bug #1 de estado en React. Usa structuredClone() cuando necesitas una copia profunda e independiente." },
        { q: "¿Debounce vs throttle?", a: "El debounce espera el silencio — dispara una vez tras detenerse la actividad (buscar al teclear, resize). El throttle limita la frecuencia — a lo sumo una vez por intervalo durante actividad continua (scroll, mousemove). 'Cuando terminen' vs 'como máximo así de seguido'." },
        { q: "¿Por qué los ES modules son tree-shakeables y CommonJS no?", a: "import/export es estático — las dependencias se conocen al parsear, así que los bundlers descartan exports sin uso. require() es dinámico y resuelto en runtime, así que todo debe enviarse. Los ESM también dan live bindings y top-level await." }
      ],
      quiz: [
        { q: "console.log(x) una línea arriba de let x = 1 lanza. ¿Por qué?", options: ["Hoisting de var", "La temporal dead zone", "Strict mode", "Un bug de closure"], answer: 1, explain: "let/const se izan sin inicializar hasta que la ejecución los alcanza — leer antes es ReferenceError. var imprimiría undefined." },
        { q: "Orden de logs: setTimeout(()=>log(1)); Promise.resolve().then(()=>log(2)); log(3)?", options: ["1 2 3", "3 2 1", "3 1 2", "2 3 1"], answer: 1, explain: "Sincrónico 3 primero; luego la cola de microtasks se drena (2) antes de cualquier macrotask de timer (1)." },
        { q: "const copy = {...user}; copy.address.city = 'X'. ¿Qué pasa con user.address.city?", options: ["Sin cambio — spread copia todo", "Cambia también — los anidados se comparten", "Lanza error", "Undefined"], answer: 1, explain: "Spread es de un nivel: el objeto interno es la misma referencia. Usa structuredClone para independencia." },
        { q: "Tres llamadas de API independientes que deben triunfar juntas. Usa…", options: ["Awaits secuenciales", "Promise.all", "Promise.allSettled", "setTimeout"], answer: 1, explain: "all las corre en concurrently y rechaza con el primer fallo — la semántica de todo-o-nada." },
        { q: "obj = { name: 'a', greet: () => this.name }. greet() devuelve…", options: ["'a'", "undefined — las arrows capturan el this del entorno", "Lanza error", "El objeto global"], answer: 1, explain: "Las arrow functions no tienen this propio; el método lee el binding del scope exterior, no obj." },
        { q: "Buscar-mientras-tecleas debería disparar la query…", options: ["En cada tecla", "Con debounce — tras una pausa de tipeo", "Con throttle a 1/s", "Solo al salir del campo"], answer: 1, explain: "El debounce espera el silencio para consultar intenciones, no teclas; el throttle va bien con flujos continuos como el scroll." }
      ]
    },

    "css-web": {
      title: "CSS y Layout",
      track: "frontend",
      icon: "🎨",
      blurb: "CSS describe la presentación en la web. Dominarlo significa la cascada y la especificidad, el box model, y el layout moderno con Flexbox y Grid — más unidades responsivas y por qué los elementos se apilan como se apilan.",
      read: `
        <p><strong>Box model:</strong> todo elemento es contenido → padding → border → margin. <code>box-sizing: border-box</code> hace que <code>width</code>/<code>height</code> <em>incluyan</em> padding y border, así que un elemento de 100px mide realmente 100px — ponlo global, porque el <code>content-box</code> por defecto suma padding y border <em>encima</em> y los layouts se desvían. Los márgenes verticales de hermanos adyacentes <strong>colapsan</strong> en uno solo (el mayor de los dos); el padding nunca lo hace.</p>
        <pre><code>/* content-box (default): 100px + 2×10px de padding + 2×2px de border = 124px */
.box { width: 100px; padding: 10px; border: 2px solid; }

/* border-box: la caja ES 100px, padding por dentro */
* { box-sizing: border-box; }
.box { width: 100px; padding: 10px; } /* renderiza exactamente 100px */</code></pre>
        <p><strong>Cascada y especificidad:</strong> cuando compiten reglas, CSS resuelve por <em>origen</em> (autor vs user-agent vs inline), luego <strong>especificidad</strong> — inline (1000) &gt; id (100) &gt; clase/atributo/pseudo-clase (10) &gt; elemento (1) — y luego <em>orden de fuente</em> en los empates. Un id en un selector supera a cualquier cantidad de clases, y por eso empiezan las guerras de <code>!important</code>: alguien necesita vencer una especificidad que no puede superar. Mantén selectores de baja especificidad y basados en clases.</p>
        <pre><code>/* Puntajes de especificidad: 100+10+1 vs 10 vs 1 */
#nav .item a      /* 0-1-1-1 */
.item a           /* 0-0-1-1 */
a                 /* 0-0-0-1 */</code></pre>
        <p><strong>Flexbox vs Grid:</strong> Flexbox es <em>unidimensional</em> y guiado por el contenido — distribuye items a lo largo de una fila (o columna) y deja que el contenido decida el tamaño: toolbars, filas de tarjetas, grupos de botones. Grid es <em>bidimensional</em> y guiado por el layout — filas y columnas definidas primero, items colocados en celdas: carcasas de página, dashboards. Se componen: <code>display: grid</code> en la página, <code>display: flex</code> dentro de cada tarjeta.</p>
        <pre><code>/* Grid: la carcasa — dos columnas, filas definidas primero */
.page { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 60px 1fr; }

/* Flexbox: la toolbar de adentro — una dimensión, guiado por contenido */
.toolbar { display: flex; gap: 12px; justify-content: space-between; }</code></pre>
        <p><strong>Posicionamiento:</strong> <code>relative</code> desplaza el elemento de sí mismo pero <em>conserva su espacio</em> en el flujo; <code>absolute</code> lo saca del flujo, posicionado contra el ancestro <em>posicionado</em> más cercano (o la página si ninguno); <code>fixed</code> lo fija al viewport; <code>sticky</code> scrollea normal y luego se pega al alcanzar su umbral — el patrón del header con scroll-spy.</p>
        <pre><code>.card        { position: relative; }   /* ancla para el badge */
.badge       { position: absolute; top: 8px; right: 8px; }
.modal       { position: fixed; inset: 0; }    /* overlay del viewport */
.toc         { position: sticky; top: 0; }    /* se pega al scrollear */</code></pre>
        <p><strong>Stacking contexts y z-index:</strong> el <code>z-index</code> solo compara elementos <em>dentro del mismo contexto de apilamiento</em>. Transform, opacity &lt; 1, filter, position+z-index y otros <em>crean</em> uno nuevo — y todo lo de adentro queda atrapado en la liga de ese contexto. "z-index: 9999 no funciona" casi siempre significa que un padre creó un contexto que atrapa al elemento por debajo de un contexto hermano.</p>
        <pre><code>.parent { transform: translateZ(0); } /* crea un stacking context */
.child  { position: relative; z-index: 9999; } /* sigue atrapado bajo .sibling */</code></pre>
        <p><strong>Unidades y responsivo:</strong> <code>rem</code> escala con el tamaño de fuente raíz — respeta el ajuste del navegador del usuario, así que úsalo para tipografía y espaciado; <code>em</code> es relativo a la fuente del propio elemento y se compone al anidar; <code>px</code> es fijo (bien para bordes, pobre para tipografía); <code>vw/vh</code> siguen el viewport. Las <strong>media queries</strong> se adaptan al <em>viewport</em> (breakpoints de página); las <strong>container queries</strong> se adaptan a la <em>caja propia</em> del componente — la primitiva de la era de componentes, así una tarjeta responde esté en un sidebar angosto o en la columna principal.</p>
        <p><strong>Pseudo-clases vs pseudo-elementos:</strong> <code>:hover</code>, <code>:focus</code>, <code>:nth-child()</code> seleccionan elementos <em>existentes</em> en un estado; <code>::before</code>/<code>::after</code> insertan <em>hijos fantasma</em> dentro del elemento (exigen la propiedad <code>content</code>, aunque sea vacía) — usados para decoraciones, badges y clearfixes.</p>
        <pre><code>.btn:hover        { }          /* pseudo-clase: estado de un elemento existente */
.card::before     { content: ""; } /* pseudo-elemento: hijo fantasma, exige content */</code></pre>
        <p><strong>Costos de animación:</strong> <code>transition</code> anima entre estados; <code>@keyframes</code> secuencia pasos. Solo <code>transform</code> y <code>opacity</code> son baratos — el compositor los corre en GPU sin tocar layout. Animar <code>top</code>/<code>left</code>/<code>width</code> fuerza un <em>reflow</em> en cada frame: jank. Anima transform/opacity; reserva las propiedades de layout para cambios no animados.</p>
        <p><strong>CSS moderno:</strong> <code>:has()</code> es el selector de padre (<code>.card:has(img)</code> estiliza una tarjeta que contiene una imagen); <code>clamp()</code> da valores fluidos con límites (<code>font-size: clamp(1rem, 2.5vw, 1.5rem)</code>); el <em>nesting</em> nativo elimina la necesidad de preprocessor; <code>gap</code> funciona en flexbox; las custom properties (<code>--token</code>) potencian theming sin rebuild.</p>`,
      cards: [
        { q: "¿Qué cambia box-sizing: border-box?", a: "width/height incluyen padding y border, así un elemento de width: 100px mide exactamente 100px en vez de 124px. Ponlo global (*) — el content-box por defecto desvía los layouts al crecer el padding." },
        { q: "¿Cómo resuelve la cascada reglas que compiten?", a: "Origen → especificidad (inline > id > clase/attr/pseudo-clase > elemento) → orden de fuente. Un id (100) supera cualquier cantidad de clases (10 c/u) — eso es lo que lleva a las guerras de !important. Mantén selectores bajos y basados en clases." },
        { q: "¿Cuándo Flexbox, cuándo Grid?", a: "Flexbox: una dimensión, guiado por el contenido — toolbars, filas de tarjetas, grupos de botones. Grid: dos dimensiones, guiado por el layout — carcasas, dashboards. Compón: grid a la página, flex dentro de componentes." },
        { q: "¿Relative vs absolute vs fixed vs sticky?", a: "Relative se desplaza de sí mismo pero conserva su espacio en el flujo. Absolute sale del flujo, posicionado vs el ancestro posicionado más cercano. Fixed se fija al viewport. Sticky scrollea normal y luego se pega al umbral — el patrón del header con scroll-spy." },
        { q: "¿Por qué a veces z-index: 9999 no hace nada?", a: "El z-index compara solo dentro de un contexto de apilamiento, y transform/opacity<1/position+z-index crean uno — un padre atrapa al elemento por debajo de contextos hermanos sin importar su número." },
        { q: "¿rem vs em vs px?", a: "rem escala con el tamaño de fuente raíz (respeta ajustes del navegador — tipografía y espaciado); em es relativo a la fuente del propio elemento (se compone al anidar); px es fijo (bien para bordes, pobre para tipografía)." },
        { q: "¿Media query vs container query?", a: "Las media queries responden al viewport — breakpoints de página. Las container queries responden a la caja propia del componente — así una tarjeta se adapta esté en un sidebar angosto o en la columna principal. La primitiva de la era de componentes." },
        { q: "¿Pseudo-clase vs pseudo-elemento?", a: ":hover/:focus/:nth-child() seleccionan elementos existentes en un estado; ::before/::after insertan hijos fantasma dentro del elemento — exigen la propiedad content (aunque sea vacía) para renderizar." },
        { q: "¿Qué propiedades CSS son baratas de animar, y por qué?", a: "transform y opacity — el compositor los corre en GPU sin layout. Animar top/left/width fuerza reflow por frame: jank. Anima transform/opacity; cambia las propiedades de layout sin animar." },
        { q: "¿Qué te da clamp()?", a: "Valores fluidos con límites: font-size: clamp(1rem, 2.5vw, 1.5rem) escala con el viewport pero nunca baja de 1rem ni pasa de 1.5rem — tipografía responsiva sin media queries." },
        { q: "¿Qué es :has()?", a: "El selector de padre: .card:has(img) estiliza una tarjeta que contiene una imagen — antes imposible sin JS o clases extra. Por fin permite seleccionar hacia arriba en CSS." }
      ],
      quiz: [
        { q: "Un modal debe cubrir todo pero z-index: 9999 pierde contra un header. Causa más probable?", options: ["El modal necesita position: fixed", "Un contexto de apilamiento padre atrapa al modal", "Los navegadores capan z-index a 9999", "El header tiene !important"], answer: 1, explain: "z-index compara dentro de un contexto de apilamiento; un ancestro con transform/position aísla al modal. Reestructura contextos o mueve el modal." },
        { q: "Carcasa de página (sidebar + main + bandas de footer) — ¿mejor herramienta?", options: ["Floats", "Flexbox", "CSS Grid", "Tablas"], answer: 2, explain: "La estructura bidimensional guiada por layout es trabajo de Grid; Flexbox para las piezas unidimensionales de adentro." },
        { q: "Tu animación a 60fps hace jank. Anima…", options: ["transform", "opacity", "top y width", "color"], answer: 2, explain: "top/width disparan reflow por frame; transform/opacity son solo del compositor. Anima esos." },
        { q: "Un componente tarjeta debe adaptarse al ir a una barra lateral angosta. ¿Enfoque moderno más limpio?", options: ["Más media queries", "Una container query", "Overrides con !important", "Duplicar el componente"], answer: 1, explain: "Las container queries dejan al componente responder a su propia caja en vez del viewport." },
        { q: "width: 100px + padding: 10px + border: 2px renderiza 100px de ancho cuando…", options: ["box-sizing: content-box (default)", "box-sizing: border-box", "display: flex", "Siempre"], answer: 1, explain: "border-box incluye padding y border en el ancho declarado; content-box los suma encima (124px)." },
        { q: "Un ::before no muestra nada. Razón habitual?", options: ["Falta z-index", "Falta la propiedad content", "Orden del selector", "Override de flexbox"], answer: 1, explain: "Los pseudo-elementos exigen content (aunque sea string vacío) para renderizar." }
      ]
    },

    "web-rt": {
      title: "WebSockets y Tiempo Real",
      track: "frontend",
      icon: "📡",
      blurb: "Los WebSockets son un canal TCP persistente y bidireccional abierto mediante un único upgrade HTTP — la herramienta correcta cuando el servidor debe enviar al cliente al instante. Elegir el transporte (polling, SSE, WS) es la verdadera pregunta de entrevista.",
      read: `
        <table><thead><tr><th>Transporte</th><th>Dirección</th><th>Trade-off</th></tr></thead><tbody>
        <tr><td>Short polling</td><td>El cliente pregunta</td><td>Trivial; latencia = intervalo, requests desperdiciados</td></tr>
        <tr><td>Long polling</td><td>El cliente pregunta, el servidor retiene</td><td>Casi real-time; cada mensaje cuesta una reconexión, sobrecosto de cabeceras</td></tr>
        <tr><td>SSE</td><td>Solo servidor → cliente</td><td>Simple, nativo HTTP, auto-reconnect; unidireccional, conexiones limitadas por navegador en HTTP/1.1</td></tr>
        <tr><td>WebSocket</td><td>Bidireccional</td><td>Baja latencia en ambos sentidos tras un handshake; tú eres dueño del protocolo</td></tr>
        </tbody></table>
        <p><strong>Handshake:</strong> un GET HTTP con Upgrade: websocket + un Sec-WebSocket-Key aleatorio; el servidor responde 101 Switching Protocols. Usa siempre wss:// (TLS) — ws:// va en claro y las páginas HTTPS lo bloquean.</p>
        <p><strong>La confiabilidad es tuya:</strong> heartbeats/ping-pong para detectar conexiones half-open; reconexión con backoff exponencial + jitter; replay de eventos perdidos vía event id o fetch-on-reconnect; protección contra desorden.</p>
        <p><strong>Escalado:</strong> cualquier instancia puede servir el handshake de cualquier cliente (sticky sessions), pero el fan-out necesita un bus compartido — Redis pub/sub (o un broker) entre instancias; las rooms enrutan mensajes al subconjunto correcto.</p>
        <p><strong>Socket.IO vs WS crudo:</strong> una librería que agrega rooms, fallbacks automáticos, acks y lógica de reconexión — al costo de un protocolo propio (ambos extremos deben ser Socket.IO). WS crudo cuando necesitas estándares puros o clientes no-JS.</p>
        <p><strong>Backpressure y tamaño:</strong> bufferiza los mensajes salientes y frena con highWaterMark; trocea o mueve los payloads grandes a object storage + envía una referencia — no empujes megas por el socket.</p>
        <p><strong>Auth:</strong> los navegadores no pueden poner cabeceras custom en WS — pasa un token de vida corta como query param/subprotocolo al conectar, valida durante el handshake y rechaza con 401 antes de que el upgrade se complete.</p>
        <p><strong>Cuándo NO WebSockets:</strong> trabajo con forma request/response (HTTP plano), streams solo de servidor (SSE es más simple) o actualizaciones esporádicas (gana polling). WS se paga con urgencia genuinamente bidireccional — chat, presencia, edición colaborativa, dashboards en vivo.</p>`,
      cards: [
        { q: "¿WebSocket vs SSE vs long polling?", a: "Long polling: el cliente pregunta y el servidor retiene el request — casi real-time pero cada mensaje cuesta una reconexión. SSE: stream unidireccional servidor→cliente sobre HTTP con auto-reconnect. WebSocket: canal bidireccional persistente tras un handshake — tú eres dueño del protocolo." },
        { q: "Describe el handshake de WebSocket.", a: "Un GET HTTP con Upgrade: websocket y un Sec-WebSocket-Key; el servidor valida y responde 101 Switching Protocols — la conexión TCP pasa a hablar frames WS en vez de HTTP." },
        { q: "¿Por qué wss:// y no ws://?", a: "wss es WS sobre TLS: encriptado, y la única opción desde páginas HTTPS — los navegadores bloquean ws:// en claro ahí." },
        { q: "¿Qué confiabilidad debes construir tú sobre WS?", a: "Heartbeats/ping-pong para detectar conexiones muertas, reconexión con backoff exponencial + jitter, replay de eventos perdidos (event ids o fetch-on-reconnect) y guards de orden." },
        { q: "¿Por qué las conexiones half-open necesitan heartbeats?", a: "TCP puede quedar 'establecido' tras un corte silencioso de red; sin timeouts de ping-pong mantienes una sesión muerta y nunca te enteras de que el cliente se fue." },
        { q: "¿Cómo escalas WebSockets entre instancias?", a: "Cualquier nodo puede sostener cualquier conexión (sticky sessions lo simplifican), y un bus compartido — Redis pub/sub — lleva el fan-out para que la instancia A empuje a un cliente conectado a la B. Las rooms enrutan subconjuntos." },
        { q: "¿Qué agrega Socket.IO sobre WS crudo?", a: "Rooms, transportes de fallback, acks, reconexión automática y bufferizado — a cambio de su protocolo propio (ambos extremos deben ser Socket.IO)." },
        { q: "¿Cómo manejas el backpressure en un socket?", a: "Vigila el buffer de envío/highWaterMark y pausa o descarta cuando el consumidor es lento; trocea payloads grandes o manda una referencia de storage en vez de megas." },
        { q: "¿Cómo autenticas una conexión WS?", a: "Los navegadores no pueden poner cabeceras custom en el upgrade — pasa un token de vida corta por query param o subprotocolo y valida durante el handshake, rechazando con 401 antes de completar el upgrade." },
        { q: "¿Cuándo NO usar WebSockets?", a: "Formas request/response (HTTP plano), streams solo de servidor (SSE es más simple y nativo HTTP) o actualizaciones esporádicas (polling alcanza). WS se paga con trabajo bidireccional sensible a latencia." }
      ],
      quiz: [
        { q: "El servidor debe streamear precios al cliente; el cliente no envía nada de vuelta. ¿Transporte correcto más simple?", options: ["WebSocket", "Server-Sent Events", "Long polling", "gRPC streaming"], answer: 1, explain: "Unidireccional servidor→cliente es exactamente SSE: nativo HTTP, auto-reconnect, sin protocolo propio que mantener." },
        { q: "Dos instancias detrás de un load balancer; los mensajes de un usuario deben llegar a su socket en el otro nodo. ¿Arreglo estándar?", options: ["Solo sticky sessions", "Un bus pub/sub compartido como Redis entre instancias", "HTTP directo instancia-a-instancia", "El cliente conecta a ambas"], answer: 1, explain: "El bus lleva el fan-out entre nodos; la stickiness sola no enruta mensajes entre procesos." },
        { q: "Los sockets mueren en silencio tras redes móviles inestables. Pieza faltante?", options: ["Buffers más grandes", "Heartbeat ping/pong con timeouts", "HTTP/2", "Reconectar al refrescar la página"], answer: 1, explain: "Las conexiones TCP half-open parecen vivas; pings periódicos las detectan para reconectar (con backoff)." },
        { q: "Debes rechazar clientes WS no autenticados. ¿Dónde?", options: ["Tras conectar, cierra el socket", "Durante el handshake, antes de completar el upgrade", "En el primer mensaje", "En el navegador"], answer: 1, explain: "Valida el token durante el request de upgrade y devuelve 401 — no aceptes canales sin autenticar." },
        { q: "Un dashboard se actualiza una vez por hora. Mejor transporte?", options: ["WebSocket", "SSE", "Polling / refetch al enfocar", "Long polling"], answer: 2, explain: "Las actualizaciones esporádicas no justifican un canal persistente — pollea o refetch por visibilidad." },
        { q: "Empujar archivos de 50MB por WS es mala idea porque…", options: ["Los frames WS no pasan de 64KB", "Bloquea el canal y derota el backpressure; manda una referencia y descarga por HTTP", "Los navegadores prohíben WS binario", "TLS no cubre binario"], answer: 1, explain: "Los payloads grandes monopolizan la conexión y los buffers — sube a storage y empuja la URL." }
      ]
    }
  }
};
