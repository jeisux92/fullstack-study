/* Study content derived from the Full-Stack Interview Guide.
   Schema: tracks -> topic ids; topics -> { title, track, icon, read, cards[], quiz[] } */
window.STUDY_DATA = {
  tracks: {
    backend: {
      name: "Back-End",
      icon: "🗄️",
      tagline: "Architecture, APIs, databases, concurrency, caching, security, principles & OOP.",
      topics: ["architecture", "distributed", "apis", "databases", "cache-messaging", "security", "principles", "patterns", "oop", "antipatterns"]
    },
    frontend: {
      name: "Front-End",
      icon: "⚛️",
      tagline: "React.js: fundamentals, hooks, rendering, performance, state, SSR & testing.",
      topics: ["react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"]
    },
    fullstack: {
      name: "Full-Stack",
      icon: "🧩",
      tagline: "Everything: the complete back-end and front-end curriculum in one track.",
      topics: ["architecture", "distributed", "apis", "databases", "cache-messaging", "security", "principles", "patterns", "oop", "antipatterns", "react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"]
    }
  },

  topics: {
    /* ============================ BACK-END ============================ */
    "architecture": {
      title: "Monolith vs. Microservices",
      track: "backend",
      icon: "🏛️",
      blurb: "Software architecture is the high-level organization of a system into deployable units: a monolith ships as one application, while microservices split it into small, independently deployable services that talk over a network.",
      read: `
        <p>The decision is not "which is better" but <strong>when to use each</strong>.</p>
        <table><thead><tr><th></th><th>Monolith / Modular Monolith</th><th>Microservices</th></tr></thead>
        <tbody>
        <tr><td>Best for</td><td>Most teams, especially &lt; ~20 engineers</td><td>Domains needing independent deploy/scale</td></tr>
        <tr><td>Wins</td><td>ACID transactions, one deploy pipeline, easy debugging, in-memory latency</td><td>Fault isolation, selective horizontal scaling, team autonomy</td></tr>
        <tr><td>Costs</td><td>Deployment coupling at scale</td><td>Network latency, partial failures, distributed transactions, ops overhead</td></tr>
        </tbody></table>
        <p><strong>Distributed monolith (anti-pattern):</strong> many services that share a DB, deploy together, or need synchronized changes — a monolith <em>plus</em> network complexity. If you can't deploy one service alone, you don't have microservices.</p>
        <p><strong>Starting rule:</strong> begin with a modular monolith with clean boundaries; extract services later (Strangler Fig) only when a real need appears — independent scaling or release cadence.</p>`,
      cards: [
        { q: "When is a monolith the right choice?", a: "For most teams, especially under ~20 engineers. You get simple ACID transactions, one deploy pipeline, easy debugging, and low in-memory call latency." },
        { q: "When are microservices justified?", a: "When different business domains need to scale or deploy independently. You gain fault isolation, selective horizontal scaling, and team autonomy." },
        { q: "What is the main cost of microservices?", a: "Network complexity (latency, partial failures), distributed transactions, and high operational overhead — observability and orchestration." },
        { q: "What is a 'distributed monolith'?", a: "An anti-pattern: many services that stay tightly coupled — shared database, joint deployment, or synchronized changes. It's a monolith with the extra complexity of the network." },
        { q: "How do you tell if you actually have microservices?", a: "If you cannot deploy one service independently, you don't. Independent deployability is the litmus test." },
        { q: "What is the recommended starting architecture?", a: "A modular monolith with clean module boundaries. Extract services along those boundaries later (Strangler Fig) only when a real need appears." },
        { q: "What is the Strangler Fig pattern?", a: "Migrating a monolith incrementally by routing specific features to new services until the old core is 'strangled' — rather than a risky big-bang rewrite." },
        { q: "Why prefer a modular monolith over premature microservices?", a: "You keep transactional simplicity and low ops cost while preserving clean boundaries that make later extraction cheap. Complexity should follow a real need, not precede it." }
      ],
      quiz: [
        { q: "A 6-person startup is building its first product. What architecture should it default to?", options: ["Microservices from day one", "A modular monolith", "Serverless functions per feature", "A distributed monolith"], answer: 1, explain: "Small teams benefit from ACID simplicity, one pipeline, and easy debugging. Extract services later only when a real scaling/deploy need appears." },
        { q: "Which is the defining symptom of a distributed monolith?", options: ["Services use different languages", "Services share a database and must deploy together", "Services communicate over HTTP", "There are more than five services"], answer: 1, explain: "Coupling via shared DB or joint deployment means you have a monolith plus network complexity — the worst of both worlds." },
        { q: "What is the litmus test for 'real' microservices?", options: ["Each service has its own repo", "Each service can be deployed independently", "Each service uses gRPC", "Each service has a separate team"], answer: 1, explain: "Independent deployability is the core property. Shared deployment cadence signals a distributed monolith." },
        { q: "Which is NOT a cost introduced by microservices?", options: ["Distributed transactions", "Network latency and partial failures", "Simpler single-pipeline debugging", "Observability overhead"], answer: 2, explain: "Easy single-pipeline debugging is a monolith advantage. Microservices make debugging harder, not simpler." },
        { q: "The Strangler Fig pattern is used to…", options: ["Split a database into shards", "Migrate a monolith to services incrementally", "Cache hot keys", "Coordinate a Saga"], answer: 1, explain: "It routes features to new services one at a time until the legacy core is replaced — avoiding a big-bang rewrite." }
      ]
    },

    "distributed": {
      title: "Distributed Systems Patterns",
      track: "backend",
      icon: "🌐",
      blurb: "A distributed system is a set of services running on separate machines that coordinate over a network. Its patterns are proven solutions for doing that reliably — handling communication, partial failures, and transactions that span services.",
      read: `
        <p><strong>Communication:</strong> synchronous (REST/gRPC) waits for a response — right for immediate queries, risks cascading failures. Asynchronous (Kafka/RabbitMQ) publishes and moves on — decoupling and resilience, at the cost of eventual consistency.</p>
        <p><strong>Resilience toolkit:</strong> Timeout (every remote call needs a deadline) · Retry with exponential backoff + jitter · Circuit Breaker (fail fast when a dependency keeps failing) · Bulkhead (isolate resource pools per dependency).</p>
        <p><strong>Saga:</strong> a distributed transaction as a sequence of local transactions; failures trigger <em>compensating transactions</em>. Choreography (events) vs orchestration (coordinator).</p>
        <p><strong>Transactional Outbox:</strong> write the DB change and the event in the same local transaction; a relay publishes afterward. Solves the dual-write problem.</p>
        <p><strong>Others:</strong> API Gateway (routing/auth/rate-limit/TLS, no business logic) · BFF (per-client gateway) · CQRS (separate read/write models) · Event Sourcing (events as source of truth) · Sidecar · Health checks (liveness vs readiness).</p>`,
      cards: [
        { q: "Synchronous vs asynchronous service communication?", a: "Sync (REST/gRPC): caller waits — good for immediate answers, risks coupling and cascading failures. Async (queues/events): publish and move on — decoupling and resilience, but eventual consistency and harder debugging." },
        { q: "What does a Circuit Breaker do?", a: "When a dependency fails repeatedly, it 'opens' and fails fast (or serves a fallback) instead of saturating the system waiting on timeouts. It periodically half-opens to probe recovery." },
        { q: "Why add jitter to retry backoff?", a: "So all clients don't retry in lockstep and re-synchronize the overload. Exponential backoff grows delays; jitter randomizes them." },
        { q: "What is the Bulkhead pattern?", a: "Isolate resource pools (threads, connections) per dependency so one slow dependency can't consume everything and take down the whole service." },
        { q: "What is a Saga?", a: "A distributed transaction as a sequence of local transactions. If a step fails, compensating transactions undo prior steps. Styles: choreography (events) or orchestration (a coordinator)." },
        { q: "What problem does the Transactional Outbox solve?", a: "The dual-write problem: atomically saving to the DB and publishing an event. Write both in one local transaction (outbox table); a relay publishes after commit, so events are never lost or published for uncommitted changes." },
        { q: "What should an API Gateway NOT contain?", a: "Business logic. It handles routing, authentication, rate limiting, and TLS termination — the single front door." },
        { q: "CQRS — when to use it, when not?", a: "Separate write and read models when workloads differ wildly. Don't use it without that need — it's a complexity multiplier." },
        { q: "Event Sourcing vs 'using Kafka'?", a: "Event Sourcing persists the event sequence as the source of truth and derives state by replay. It is not the same as merely using Kafka. Powerful for audit/temporal queries; complex (schema evolution, snapshots)." },
        { q: "Liveness vs readiness probes?", a: "Liveness = 'process is up' (restart if failed). Readiness = 'can accept traffic now' (pull from load balancer if failed). A service can be alive but not ready." }
      ],
      quiz: [
        { q: "A downstream service keeps timing out and your threads pile up waiting. Which pattern stops the bleeding?", options: ["Retry without backoff", "Circuit Breaker", "Add more replicas", "Increase the timeout"], answer: 1, explain: "The breaker opens and fails fast (or serves a fallback) instead of saturating the system waiting on timeouts." },
        { q: "Why is jitter added to exponential backoff?", options: ["To make retries faster", "To prevent clients retrying in lockstep and re-synchronizing overload", "To encrypt the retry", "To reduce the number of retries to one"], answer: 1, explain: "Randomized delays desynchronize clients so they don't all hammer the recovering service at the same instant." },
        { q: "You must update the DB and publish an event atomically. Which pattern?", options: ["Saga", "CQRS", "Transactional Outbox", "Bulkhead"], answer: 2, explain: "Write the change and the event in one local transaction; a relay publishes after commit — solving the dual-write problem." },
        { q: "Which belongs in an API Gateway?", options: ["Order pricing rules", "Routing, auth, rate limiting, TLS", "Database joins", "Domain validation"], answer: 1, explain: "The gateway is the front door for cross-cutting concerns. Business logic must stay out of it." },
        { q: "A Saga handles a failed step by…", options: ["Rolling back a global ACID transaction", "Running compensating transactions to undo prior steps", "Retrying forever", "Ignoring the failure"], answer: 1, explain: "There is no distributed ACID rollback; each local step is undone by an explicit compensation." },
        { q: "A pod is running but still warming its cache. Which probe should fail?", options: ["Liveness", "Readiness", "Both", "Neither"], answer: 1, explain: "Readiness gates traffic. It's alive (liveness passes) but not ready, so it should be pulled from the load balancer, not restarted." }
      ]
    },

    "apis": {
      title: "APIs: REST, gRPC, GraphQL",
      track: "backend",
      icon: "🔌",
      blurb: "An API (Application Programming Interface) is the contract through which clients and services exchange data over HTTP. REST, gRPC, and GraphQL are the three dominant styles for designing that contract.",
      read: `
        <table><thead><tr><th>Protocol</th><th>Ideal for</th><th>Trade-off</th></tr></thead><tbody>
        <tr><td>REST</td><td>Public APIs, CRUD, browsers</td><td>Ubiquitous, cacheable, readable; over/under-fetching</td></tr>
        <tr><td>gRPC</td><td>Internal service calls, low latency, streaming</td><td>Fast binary Protobuf/HTTP2, strict contract; weak browser support, not human-readable</td></tr>
        <tr><td>GraphQL</td><td>Flexible frontend shapes, aggregation</td><td>Client picks exact fields; server complexity, needs depth limits</td></tr>
        </tbody></table>
        <p><strong>Idempotency:</strong> N executions = same result as one. GET/PUT/DELETE are idempotent by spec (if implemented correctly); POST is not — fix with an idempotency key. A repeated DELETE returning 404 is still idempotent (state unchanged).</p>
        <p><strong>Rate limiting:</strong> fixed window (boundary burst) · sliding window log (precise, memory-heavy) · sliding window counter (balanced) · token bucket (controlled bursts, most common) · leaky bucket (smooths to constant rate). Enforce at the edge, key by user/IP, coordinate in Redis, return 429 + Retry-After.</p>
        <p><strong>REST principles:</strong> correct verbs, specific status codes, pagination/filter/sort, versioning with deprecation, uniform errors with correlation ID.</p>`,
      cards: [
        { q: "When would you choose gRPC over REST?", a: "For internal microservice-to-service calls needing low latency, streaming, or a strict contract in a polyglot environment. Binary Protobuf over HTTP/2 is fast; browser support is limited and it's not human-readable." },
        { q: "When would you choose GraphQL?", a: "When frontends need flexible data shapes (mobile vs web) or aggregation of many resources. The client requests exactly the fields it needs. Cost: server resolver/caching complexity and the need for query depth/complexity limits." },
        { q: "What is idempotency and why does it matter?", a: "Executing an operation N times yields the same result as once. It lets retries after timeouts/network failures avoid duplicate side effects like double-charging." },
        { q: "Which HTTP methods are idempotent?", a: "GET, PUT, DELETE — by spec, if implemented correctly. POST is not; make it safe with an idempotency key." },
        { q: "Is a repeated DELETE that returns 404 still idempotent?", a: "Yes. Idempotency is about server state, not status codes. The resource is already gone, so state is unchanged." },
        { q: "How do you make a POST idempotent?", a: "An idempotency key: the client sends a unique key; the server stores the first result keyed by it and returns the stored result on retries." },
        { q: "Token bucket vs leaky bucket?", a: "Token bucket allows controlled bursts up to bucket size (refilled at rate R) — most widely used. Leaky bucket processes at a constant rate, smoothing bursts but adding queueing latency." },
        { q: "What's wrong with fixed-window rate limiting?", a: "Boundary burst: a client can use up to 2× the limit by straddling a window edge. Sliding window approaches fix this." },
        { q: "What should a rate-limited response include?", a: "HTTP 429 Too Many Requests with a Retry-After header. Enforce at the gateway/edge, key by user or IP, coordinate counts in Redis for distributed limiters." }
      ],
      quiz: [
        { q: "Internal services need <10ms calls and streaming in a polyglot stack. Best fit?", options: ["REST", "GraphQL", "gRPC", "SOAP"], answer: 2, explain: "gRPC's binary Protobuf over HTTP/2, strict contracts, and streaming suit high-performance internal communication." },
        { q: "A mobile app and a web app need different fields from the same resources. Best fit?", options: ["gRPC", "GraphQL", "Fixed-window REST", "Webhooks"], answer: 1, explain: "GraphQL lets each client request exactly the fields it needs, avoiding over/under-fetching." },
        { q: "A payment POST times out and the client retries. How do you avoid double-charging?", options: ["Use GET instead", "Add an idempotency key", "Disable retries", "Return 200 always"], answer: 1, explain: "The server stores the first result keyed by the idempotency key and replays it on retries." },
        { q: "Which rate-limiting algorithm permits controlled bursts?", options: ["Leaky bucket", "Fixed window", "Token bucket", "Sliding window log"], answer: 2, explain: "Token bucket accumulates tokens up to a capacity, allowing bursts up to that size while enforcing an average rate." },
        { q: "A repeated DELETE returns 404. Is the operation idempotent?", options: ["No, the status changed", "Yes, server state is unchanged", "Only if it returns 200", "Idempotency doesn't apply to DELETE"], answer: 1, explain: "Idempotency concerns server state, not the response code. The resource remains deleted." },
        { q: "The boundary-burst problem is a weakness of…", options: ["Token bucket", "Fixed window", "Sliding window counter", "Leaky bucket"], answer: 1, explain: "A client can spend a full allowance at the end of one window and another at the start of the next — up to 2× the limit." }
      ]
    },

    "databases": {
      title: "Databases & Concurrency",
      track: "backend",
      icon: "🗃️",
      blurb: "A database stores and retrieves application data. SQL databases keep data in tables with ACID transaction guarantees; NoSQL trades some guarantees for flexible schemas and horizontal scale — while concurrency control keeps simultaneous readers and writers from corrupting it.",
      read: `
        <p><strong>SQL vs NoSQL:</strong> SQL = rigid schema, ACID, joins/reporting; traditionally vertical scaling (sharding complex). NoSQL = flexible schema, eventual consistency, horizontal scaling, high volume. Caveat: Vitess/CockroachDB/Spanner/Aurora scale SQL horizontally too — choose by guarantees and query patterns, not possibility.</p>
        <p><strong>ACID:</strong> Atomicity, Consistency, Isolation, Durability. <strong>CAP:</strong> during a Partition you must choose Consistency or Availability; tunable per operation; PACELC adds latency-vs-consistency even without partitions.</p>
        <p><strong>Indexing:</strong> B-Tree speeds reads, slows writes. Index WHERE/JOIN/ORDER BY columns. Composite order: equality first, then range/sort. Covering index = index-only scan. Functions on columns, leading wildcards, low selectivity break index use.</p>
        <p><strong>Isolation levels:</strong> Read Uncommitted → Read Committed → Repeatable Read → Serializable, preventing dirty reads, non-repeatable reads, phantoms respectively. MVCC: readers don't block writers. Postgres RR = snapshot isolation (allows write skew). Lost updates fixed by locks or atomic updates.</p>
        <p><strong>Deadlocks:</strong> two txns each hold a lock the other needs; DB aborts a victim. Prevent with consistent lock ordering, short transactions, proper indexes; retry on deadlock.</p>
        <p><strong>Optimistic</strong> (version check, low contention) vs <strong>pessimistic</strong> (row lock, high contention) locking. Replication = HA + read scaling (watch lag). Sharding = write scaling (cross-shard joins hurt).</p>`,
      cards: [
        { q: "How do you choose SQL vs NoSQL?", a: "SQL for structured data, transactions, joins, reporting (ACID). NoSQL for massive volume, semi-structured data, fast schema evolution, horizontal scale. Choose by guarantees and query patterns — modern SQL can scale horizontally too." },
        { q: "State ACID.", a: "Atomicity (all-or-nothing), Consistency (valid state in → valid out), Isolation (concurrent txns don't interfere), Durability (committed data survives crashes)." },
        { q: "Precisely state the CAP theorem.", a: "During a network Partition, a distributed system must choose Consistency or Availability — not both at that moment. Partitions are inevitable; with no partition you can have both. Many systems tune per operation (CP payments, AP feeds). PACELC adds latency-vs-consistency even without partitions." },
        { q: "What's the trade-off of an index?", a: "Faster reads (SELECT) at the cost of slower writes (INSERT/UPDATE must maintain it) and extra storage. Index columns used in WHERE, JOIN, ORDER BY." },
        { q: "How should you order columns in a composite index?", a: "Equality-filtered columns first, then range/sort columns. (user_id, created_at) serves WHERE user_id=? ORDER BY created_at; the reverse does not." },
        { q: "What breaks index usage?", a: "Functions on the indexed column (LOWER(email)), leading wildcards (LIKE '%foo'), low-selectivity columns, and stale optimizer statistics." },
        { q: "Name the four isolation levels and what they prevent.", a: "Read Uncommitted (nothing), Read Committed (dirty reads), Repeatable Read (non-repeatable reads), Serializable (phantoms too). Higher isolation = more safety, less concurrency." },
        { q: "What is MVCC?", a: "Multi-Version Concurrency Control: readers see a consistent snapshot and never block writers. It's the implementation behind modern isolation. Postgres defaults to Read Committed; MySQL InnoDB to Repeatable Read." },
        { q: "What is write skew?", a: "Under snapshot isolation, two txns read overlapping data and write disjoint updates, each invalidating the other's assumption. Postgres Repeatable Read allows it; only true Serializable catches it." },
        { q: "How do you prevent deadlocks?", a: "Consistent lock ordering across code paths, short transactions (no network/user interaction mid-txn), appropriate indexes (so you don't lock extra rows), and retry on the deadlock error." },
        { q: "Optimistic vs pessimistic locking?", a: "Optimistic: version column, UPDATE WHERE version=n; if 0 rows changed, conflict. Best under low contention, no locks held. Pessimistic: SELECT FOR UPDATE holds a row lock; safe under high contention but reduces concurrency." },
        { q: "Replication vs sharding?", a: "Replication copies the same data → high availability + read scaling (watch replica lag). Sharding splits data by key → write scaling + storage beyond one machine (cross-shard joins/transactions hurt)." }
      ],
      quiz: [
        { q: "During a network partition, CAP says you must choose between…", options: ["Consistency and Availability", "Atomicity and Durability", "Latency and Throughput", "SQL and NoSQL"], answer: 0, explain: "The C-vs-A choice exists only during a partition. With no partition you can have both; many systems tune per operation." },
        { q: "Which composite index serves WHERE user_id=? ORDER BY created_at?", options: ["(created_at, user_id)", "(user_id, created_at)", "(user_id) only", "No index can help"], answer: 1, explain: "Equality column first, then the sort column. The reverse order can't use the index for the ordering." },
        { q: "Which query defeats an index on email?", options: ["WHERE email = ?", "WHERE LOWER(email) = ?", "WHERE email LIKE 'a%'", "ORDER BY email"], answer: 1, explain: "A function on the indexed column prevents the optimizer from using the index directly." },
        { q: "Two transactions read overlapping rows and write disjoint updates, each breaking the other's assumption. This is…", options: ["A dirty read", "A phantom read", "Write skew", "A lost update"], answer: 2, explain: "Write skew occurs under snapshot isolation; only true Serializable prevents it." },
        { q: "Best locking strategy for a low-contention record edit?", options: ["Pessimistic row lock", "Optimistic version check", "Table lock", "Serializable everything"], answer: 1, explain: "Optimistic locking holds no locks and detects conflicts via a version column — ideal when collisions are rare." },
        { q: "You need to scale writes beyond one machine. You use…", options: ["Read replicas", "Sharding", "A bigger CPU", "More indexes"], answer: 1, explain: "Replication scales reads/HA; sharding partitions data to scale writes and storage." },
        { q: "The senior first step for 'this query is slow' is…", options: ["Add an index immediately", "Read the query plan (EXPLAIN ANALYZE)", "Switch to NoSQL", "Cache everything"], answer: 1, explain: "Diagnose with the plan: look for seq scans, estimate mismatches, and join types before changing anything." }
      ]
    },

    "cache-messaging": {
      title: "Cache & Messaging",
      track: "backend",
      icon: "⚡",
      blurb: "A cache is a fast in-memory layer (such as Redis) that keeps frequently used data close to the application to avoid hitting the database. A message broker (RabbitMQ, Kafka) lets services communicate asynchronously by passing messages or events.",
      read: `
        <p><strong>Cache strategies:</strong> Cache-Aside (read cache; on miss read DB + populate; invalidate on write — the default) · Write-Through (write cache + DB together; strong consistency, higher write latency) · Write-Behind (write cache, DB async; fastest, risk of data loss).</p>
        <p><strong>Failure modes:</strong> Penetration (non-existent keys always hit DB → cache empty markers) · Avalanche (many keys expire at once → jittered TTLs) · Hot Key (one key saturates a node → replicate/local cache) · Stampede (hot key expires, many miss → request coalescing).</p>
        <p><strong>RabbitMQ vs Kafka:</strong> RabbitMQ = queue, message consumed and removed, task semantics (emails, image processing). Kafka = distributed log, retained and re-readable by many consumer groups, ordering per partition, replay (event streaming, event sourcing).</p>
        <p><strong>Consistent hashing:</strong> naive hash%N remaps almost all keys when N changes (avalanche). Consistent hashing places nodes/keys on a ring; each key goes to the nearest node clockwise; adding/removing a node remaps only ~1/N of keys. Virtual nodes smooth load. Used by DynamoDB, Cassandra, Memcached, CDNs.</p>`,
      cards: [
        { q: "Describe Cache-Aside.", a: "App reads cache; on miss it reads the DB and populates the cache. Writes update the DB and invalidate the entry. Simple, the default choice; brief staleness and a slow first read after invalidation." },
        { q: "Write-Through vs Write-Behind?", a: "Write-Through writes cache and DB together — strong consistency, higher write latency. Write-Behind writes cache and updates DB asynchronously — fastest writes but risk of data loss if the cache dies before flush." },
        { q: "What is cache penetration and the fix?", a: "Queries for non-existent keys always miss and hit the DB. Fix: cache 'empty' markers with short TTL, or validate/filter at the edge." },
        { q: "What is cache avalanche and the fix?", a: "Many keys expire simultaneously and the storm hits the DB. Fix: jittered TTLs plus circuit breaker/fallbacks on the DB." },
        { q: "What is a hot key and the fix?", a: "One extremely popular key saturates a single cache node. Fix: replicate the key across nodes or add a local in-process cache layer." },
        { q: "RabbitMQ vs Kafka in one line?", a: "RabbitMQ is for work to be done once (queue, message removed after consume). Kafka is for events to be observed by many, forever (retained log, replayable, multiple consumer groups)." },
        { q: "Why is naive hash%N bad for scaling a cache cluster?", a: "Changing N remaps almost every key — effectively flushing the whole cache, causing an avalanche. Consistent hashing limits remapping to ~1/N of keys." },
        { q: "How does consistent hashing work?", a: "Nodes and keys are placed on a hash ring; each key belongs to the nearest node clockwise. Adding/removing a node only remaps keys in that arc (~1/N). Virtual nodes (each physical node appears many times) smooth load distribution." },
        { q: "Why prefer horizontal scaling, and what does it require?", a: "More machines gives elasticity and fault tolerance. It requires stateless services — no session state on the server; sessions live in the client (tokens) or a shared store (Redis)." }
      ],
      quiz: [
        { q: "Which cache strategy risks data loss if the cache dies before flushing?", options: ["Cache-Aside", "Write-Through", "Write-Behind", "Read-Through"], answer: 2, explain: "Write-Behind updates the DB asynchronously, so unflushed writes can be lost." },
        { q: "Many keys expire at once and flood the DB. This is…", options: ["Penetration", "Avalanche", "Hot key", "Stampede"], answer: 1, explain: "Avalanche = mass simultaneous expiry. Fix with jittered TTLs and DB fallbacks." },
        { q: "You need an event log that many independent consumers can replay. Choose…", options: ["RabbitMQ", "Kafka", "Redis pub/sub", "A SQL table"], answer: 1, explain: "Kafka's retained, replayable log with multiple consumer groups fits event streaming and event sourcing." },
        { q: "Adding a node to a consistent-hash ring remaps approximately…", options: ["All keys", "Half the keys", "~1/N of keys", "No keys"], answer: 2, explain: "Only keys in the affected arc move — about 1/N — versus nearly all keys with naive modulo hashing." },
        { q: "Queries for keys that never exist keep hitting the DB. This is…", options: ["Avalanche", "Penetration", "Hot key", "Write skew"], answer: 1, explain: "Penetration. Cache empty markers with short TTL or validate at the edge." },
        { q: "Horizontal scaling fundamentally requires services to be…", options: ["Stateful", "Stateless", "Single-threaded", "Synchronous"], answer: 1, explain: "No server-side session state lets any instance handle any request; sessions live in tokens or a shared store." }
      ]
    },

    "security": {
      title: "Security & Authentication",
      track: "backend",
      icon: "🔐",
      blurb: "Authentication verifies who a user is; authorization decides what that user may do. Application security also means protecting data and endpoints — JWTs for stateless sessions, OAuth 2.0/OIDC for delegated access, and parameterized queries against injection.",
      read: `
        <p><strong>AuthN vs AuthZ:</strong> Authentication verifies <em>who you are</em> (login); Authorization verifies <em>what you may do</em> (permissions).</p>
        <p><strong>JWT:</strong> a <em>signed, not encrypted</em> token carrying claims; server verifies the signature, no session store → stateless scaling. Revocation requires a blocklist in Redis or a per-user session version. Short-lived access + long-lived refresh tokens limit damage.</p>
        <p><strong>OAuth 2.0:</strong> an <em>authorization</em> framework, not authentication — delegated access without sharing the password. 'Sign in with Google' gets identity via <strong>OIDC</strong>, the authentication layer on top.</p>
        <p><strong>SQL Injection:</strong> prevent with parameterized queries / prepared statements or ORM binding — never string concatenation. Same principle for command/template injection.</p>
        <p><strong>Posture:</strong> least privilege, validate all input, never trust the client, secrets out of code, TLS everywhere.</p>`,
      cards: [
        { q: "Authentication vs Authorization?", a: "AuthN verifies who you are (login). AuthZ verifies what you may do (permissions). Conflating them is a classic interview mistake." },
        { q: "Is a JWT encrypted?", a: "No — it is signed, not encrypted. The payload (claims) is readable; the signature guarantees integrity. The server verifies the signature and needs no session store." },
        { q: "How do you revoke a JWT before it expires?", a: "Because it's stateless, use a blocklist in Redis or a per-user session version embedded in claims. Short-lived access tokens + refresh tokens limit the damage window." },
        { q: "Is OAuth 2.0 an authentication protocol?", a: "No — it's an authorization framework for delegated access without sharing a password. Authentication on top of it is OIDC (OpenID Connect), which is what 'Sign in with Google' uses for identity." },
        { q: "How do you prevent SQL injection?", a: "Parameterized queries / prepared statements or ORM binding — never concatenate user input into a query string. The same principle applies to command and template injection." },
        { q: "Name the general security posture.", a: "Least privilege, validate all input, never trust the client, keep secrets out of code (env/secret manager), security headers and TLS everywhere." }
      ],
      quiz: [
        { q: "Verifying what actions a logged-in user may perform is…", options: ["Authentication", "Authorization", "Encryption", "Hashing"], answer: 1, explain: "AuthN = who you are; AuthZ = what you may do." },
        { q: "A JWT's payload is…", options: ["Encrypted and unreadable", "Signed but readable", "Hashed irreversibly", "Stored server-side only"], answer: 1, explain: "JWTs are signed, not encrypted — claims are readable; the signature ensures integrity." },
        { q: "To invalidate a JWT on logout you typically use…", options: ["Nothing, it expires eventually", "A Redis blocklist or session version", "Re-encrypting it", "Deleting the user"], answer: 1, explain: "Stateless tokens can't be 'unsent'; a blocklist or per-user version enables early revocation." },
        { q: "'Sign in with Google' gets identity claims via…", options: ["OAuth 2.0 alone", "OIDC on top of OAuth 2.0", "SAML only", "Basic auth"], answer: 1, explain: "OAuth 2.0 is authorization; OIDC is the authentication layer that provides identity." },
        { q: "The correct defense against SQL injection is…", options: ["Escaping quotes manually", "Parameterized queries / prepared statements", "Blocking the word SELECT", "Using GET only"], answer: 1, explain: "Bind parameters so input is never interpreted as SQL. Manual escaping is fragile." }
      ]
    },

    "principles": {
      title: "Design Principles",
      track: "backend",
      icon: "🧭",
      blurb: "Design principles are guidelines that keep code maintainable as it grows — SOLID, DRY, KISS, and YAGNI at the class level, plus system-level rules like statelessness, bounded contexts, and observability by design.",
      read: `
        <p><strong>SOLID:</strong> SRP (one reason to change) · OCP (extend without modifying) · LSP (subtypes substitutable) · ISP (small specific interfaces) · DIP (depend on abstractions).</p>
        <p><strong>Others:</strong> DRY (don't duplicate knowledge; duplicating twice isn't always wrong) · KISS · YAGNI (build when needed) · Separation of Concerns · Composition over inheritance · Fail fast · Law of Demeter (no a.getB().getC() chains).</p>
        <p><strong>Backend architecture:</strong> Bounded Context (split by domain) · Stateless · Idempotency · Contract-first + backward compatibility · Eventual consistency · Single Source of Truth (one owner per datum) · Observability/Security/Resilience by design · 12-Factor App.</p>`,
      cards: [
        { q: "State SOLID.", a: "SRP: one class/module, one reason to change. OCP: extend without modifying. LSP: subtypes substitutable for parents. ISP: small specific interfaces. DIP: depend on abstractions, not concrete classes." },
        { q: "What does OCP look like in backend code?", a: "Adding a new payment provider via a Strategy rather than editing a growing switch — the processor is open for extension, closed for modification." },
        { q: "What is DIP and why does it matter?", a: "Dependency Inversion: depend on abstractions (interfaces), not concrete classes. It's the foundation of testability and swappable infrastructure (OrderService depends on OrderRepository, not MySQLOrderRepository)." },
        { q: "DRY nuance?", a: "Don't duplicate knowledge — but duplicating code twice isn't automatically wrong. Premature unification couples things that evolve separately." },
        { q: "KISS and YAGNI?", a: "KISS: prefer the simple solution that works. YAGNI: build it when there's a real need, not 'just in case'." },
        { q: "What is the Law of Demeter?", a: "Don't chain calls through foreign objects (a.getB().getC().doSomething()) — it couples you to structures you shouldn't know about." },
        { q: "What is a Bounded Context?", a: "Each service/module owns a clear business boundary — split by domain, not by technical layers." },
        { q: "What is Single Source of Truth?", a: "Every piece of data has one owner; never let two services write the same table. It prevents schema and team coupling." },
        { q: "Name the 'by design' principles.", a: "Observability (logs/metrics/traces/correlation IDs), Security (least privilege, validate input, no secrets in code), Resilience (timeouts, retries, circuit breakers, graceful degradation)." },
        { q: "What is contract-first?", a: "Define the API/event contract before implementing; version it; keep backward compatibility; deprecate before removing." }
      ],
      quiz: [
        { q: "Adding a payment provider without editing the processor demonstrates…", options: ["SRP", "OCP", "LSP", "DRY"], answer: 1, explain: "Open/Closed: extend via a new strategy without modifying existing code." },
        { q: "OrderService depends on an OrderRepository interface, not a MySQL class. This is…", options: ["ISP", "DIP", "KISS", "SoC"], answer: 1, explain: "Dependency Inversion — depend on abstractions for testability and swappability." },
        { q: "A Repository interface with 20 methods, half left empty by implementers, violates…", options: ["SRP", "OCP", "ISP", "LSP"], answer: 2, explain: "Interface Segregation: split into small, specific interfaces." },
        { q: "Two microservices writing the same table violates…", options: ["Bounded Context / Single Source of Truth", "KISS", "Fail fast", "12-Factor"], answer: 0, explain: "Each datum should have one owner; shared writes couple schemas and teams." },
        { q: "Building a feature 'just in case' it's needed later violates…", options: ["DRY", "YAGNI", "LSP", "DIP"], answer: 1, explain: "YAGNI — implement when there's a real need." },
        { q: "a.getB().getC().doSomething() is discouraged by…", options: ["Law of Demeter", "KISS", "OCP", "CAP"], answer: 0, explain: "The Law of Demeter limits knowledge of foreign object structures to reduce coupling." }
      ]
    },

    "patterns": {
      title: "Design Patterns",
      track: "backend",
      icon: "🧱",
      blurb: "A design pattern is a named, reusable solution to a problem that recurs in software design. The classic Gang-of-Four catalog covers object creation and structure; backend development adds architectural ones like Repository, Saga, and Outbox.",
      read: `
        <table><thead><tr><th>Pattern</th><th>Backend use</th></tr></thead><tbody>
        <tr><td>Repository</td><td>Abstracts data access; domain doesn't know SQL/Mongo/API; no ORM leakage</td></tr>
        <tr><td>Unit of Work</td><td>Groups operations into one transaction</td></tr>
        <tr><td>DTO / Mapper</td><td>Transport objects; convert between domain/DTO/persistence</td></tr>
        <tr><td>DI</td><td>Receive dependencies via constructor — testability</td></tr>
        <tr><td>Factory / Builder</td><td>Encapsulate creation / step-by-step complex objects</td></tr>
        <tr><td>Strategy</td><td>Swap algorithms at runtime (gateways, discounts)</td></tr>
        <tr><td>Adapter / Facade</td><td>Fit external interface / simplify a subsystem</td></tr>
        <tr><td>Decorator / Proxy</td><td>Add logging/cache/retry around a service / lazy load, access control</td></tr>
        <tr><td>Observer</td><td>Notify without coupling — root of messaging</td></tr>
        <tr><td>Chain of Responsibility / Template Method</td><td>Middleware pipelines / fixed skeleton, variable steps</td></tr>
        <tr><td>Singleton</td><td>Prefer DI container scope over hand-rolled getInstance()</td></tr>
        </tbody></table>
        <p><strong>Strategy vs State:</strong> Strategy = algorithm chosen from outside; State = object changes its own behavior by internal state (Order in NEW/PAID/SHIPPED).</p>
        <p><strong>When NOT to apply:</strong> single implementation with no second use (YAGNI), layers that add nothing, patterns as decoration. Over-engineering is itself an anti-pattern.</p>`,
      cards: [
        { q: "What does the Repository pattern do?", a: "Abstracts data access: the domain calls UserRepository.findByEmail() without knowing if it's SQL, Mongo, or an API. It must not leak ORM details." },
        { q: "Strategy vs State pattern?", a: "Structurally similar. Strategy: the algorithm is chosen from outside (caller/config). State: the object changes its own behavior based on internal state (Order in NEW/PAID/SHIPPED)." },
        { q: "Adapter vs Facade?", a: "Adapter fits an external interface to the one your system expects (email provider). Facade simplifies a complex subsystem behind one clean interface (PaymentFacade over many providers)." },
        { q: "What does a Decorator add?", a: "Behavior around a service without modifying it — logging, caching, retry — by wrapping it." },
        { q: "How should you implement Singleton?", a: "Prefer the DI container's singleton scope over a hand-rolled getInstance(). Hidden global state hurts testability and concurrency." },
        { q: "What is Unit of Work?", a: "Groups several operations into one transaction and commits/rolls back at the end." },
        { q: "Why use DTOs?", a: "Transport objects between layers/APIs so you never expose DB entities directly; a Mapper converts between domain, DTO, and persistence models." },
        { q: "When should you NOT create an abstraction?", a: "Single implementation with no second use in sight (YAGNI/rule of three), a layer that adds nothing, or an interface nobody mocks or implements twice." },
        { q: "Observer pattern's significance?", a: "Notify changes without coupling emitter to receivers — the conceptual root of messaging/pub-sub." }
      ],
      quiz: [
        { q: "An Order behaves differently in NEW, PAID, SHIPPED based on its own state. Which pattern?", options: ["Strategy", "State", "Adapter", "Facade"], answer: 1, explain: "State: the object changes its own behavior by internal state. Strategy is chosen from outside." },
        { q: "Wrapping a service to add retry without editing it is…", options: ["Proxy", "Decorator", "Facade", "Builder"], answer: 1, explain: "Decorator adds behavior around a component without modifying it." },
        { q: "The recommended way to get a Singleton is…", options: ["A static getInstance()", "The DI container's singleton scope", "A global variable", "A new instance each call"], answer: 1, explain: "Container-managed scope avoids hidden global state and keeps testability." },
        { q: "Fitting an external email SDK behind your own interface is…", options: ["Facade", "Adapter", "Strategy", "Observer"], answer: 1, explain: "Adapter converts an external interface to the one your system expects." },
        { q: "Creating an interface for a single implementation with no second use is…", options: ["Good DIP practice", "Over-engineering (YAGNI)", "Required by SOLID", "The rule of three"], answer: 1, explain: "Don't abstract prematurely; wait for a real second use." }
      ]
    },

    "oop": {
      title: "OOP for Backend",
      track: "backend",
      icon: "🧩",
      blurb: "Object-Oriented Programming (OOP) models software as objects that bundle data with the behavior that operates on it, built on four pillars: encapsulation, inheritance, polymorphism, and abstraction.",
      read: `
        <p><strong>4 pillars:</strong> Encapsulation (protect invariants: Order.confirm() not setStatus()) · Inheritance (use sparingly) · Polymorphism (PaymentService handles Card/PayPal without if/else) · Abstraction (EmailSender decouples from provider).</p>
        <p><strong>Abstract class vs interface:</strong> abstract = shared state + behavior, single inheritance, 'is-a'; interface = capability/contract, multiple inheritance. Prefer interfaces by default.</p>
        <p><strong>Composition over inheritance</strong> (GoF): 'has-a' is flexible, injectable, testable; 'is-a' is rigid.</p>
        <p><strong>LSP:</strong> subtypes substitutable; preconditions no stricter, postconditions no looser. Penguin.fly() throwing violates it.</p>
        <p><strong>Coupling</strong> (want low) vs <strong>cohesion</strong> (want high). <strong>DI vs IoC:</strong> IoC = container controls wiring; DI = dependencies handed in (constructor).</p>
        <p><strong>Immutability:</strong> thread-safe, safe map keys, foundation of value objects. <strong>Entity</strong> (identity) vs <strong>Value Object</strong> (values, immutable).</p>
        <p><strong>God Object</strong> (does too much) · <strong>Anemic Domain Model</strong> (getters/setters only; fine for simple CRUD, bad for rich domains) · <strong>Rule of three</strong> before abstracting.</p>
        <p><strong>GRASP:</strong> Information Expert, Creator, Controller, Low Coupling, High Cohesion, Polymorphism, Pure Fabrication, Indirection, Protected Variations.</p>
        <p><strong>Test doubles:</strong> Stub (canned responses) · Mock (verifies interactions) · Fake (lightweight real impl). Test behavior, not implementation.</p>`,
      cards: [
        { q: "Name the 4 OOP pillars and their backend purpose.", a: "Encapsulation protects invariants (Order.confirm(), not setStatus()). Inheritance reuses base behavior (sparingly). Polymorphism varies behavior by type without if/else. Abstraction models what matters and hides details (EmailSender)." },
        { q: "Abstract class vs interface — rule of thumb?", a: "Interface by default for contracts/capabilities (PaymentGateway) — decouples and mocks cleanly. Abstract class when classes genuinely share state and base behavior (BaseEntity), without deep hierarchies." },
        { q: "Why prefer composition over inheritance?", a: "Composition ('has-a') is flexible, injectable, and testable, and avoids the diamond problem and rigid coupling. Inheritance ('is-a') is fragile across changes. Reserve it for stable hierarchies or framework extension." },
        { q: "How is LSP violated in practice?", a: "A subtype that can't honor the parent contract — Penguin.fly() throwing UnsupportedOperationException, or a ReadOnlyRepository whose save() throws. Fix: split the interface (ISP) or remodel." },
        { q: "Coupling vs cohesion?", a: "Coupling = how much modules depend on each other (want low). Cohesion = how much a module's parts belong together (want high). They map onto DIP and SRP." },
        { q: "DI vs IoC?", a: "IoC: the container/framework controls flow and wiring. DI: the concrete mechanism — dependencies handed in via constructor/setter/method. DI is a principle; Spring/NestJS are just containers." },
        { q: "Why is immutability valuable in backend?", a: "Thread-safe without synchronization, safe as map keys/cache entries, easier to reason about and test. It's the foundation of DDD value objects." },
        { q: "Entity vs Value Object?", a: "Entity is defined by identity (two Users with same data but different id are different). Value Object is defined by values (Money(100,USD) == Money(100,USD)), should be immutable, and make invalid states unrepresentable." },
        { q: "What is an Anemic Domain Model and when is it OK?", a: "Entities with only getters/setters, all logic in services. Acceptable for simple CRUDs; avoid in rich domains (banking/commerce) where invariants matter — Order.addItem() should enforce stock/status itself." },
        { q: "What is the rule of three?", a: "Don't abstract the first occurrence; wait until the second or third to see the real pattern before extracting an abstraction." },
        { q: "Stub vs Mock vs Fake?", a: "Stub returns canned responses. Mock verifies interactions (X called with Y). Fake is a lightweight working implementation (in-memory repo). Use fakes for repos; mocks only when the interaction is the contract." },
        { q: "Name a few GRASP patterns.", a: "Information Expert (assign to whoever has the data), Pure Fabrication (Repository isn't a domain concept), Protected Variations (PaymentGateway hides provider churn), Indirection, Controller, Creator, Polymorphism, Low Coupling, High Cohesion." }
      ],
      quiz: [
        { q: "Order.confirm() instead of setStatus('invalid') demonstrates…", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], answer: 1, explain: "Encapsulation protects invariants by exposing intent-revealing methods, not raw setters." },
        { q: "Penguin extends Bird and fly() throws. This violates…", options: ["SRP", "OCP", "LSP", "DRY"], answer: 2, explain: "Liskov Substitution: the subtype can't honor the parent contract." },
        { q: "A lightweight in-memory repository used in tests is a…", options: ["Stub", "Mock", "Fake", "Spy"], answer: 2, explain: "A fake is a working but simplified implementation; a mock verifies interactions." },
        { q: "Money(100,'USD') equals another Money(100,'USD'). Money is a…", options: ["Entity", "Value Object", "Service", "Aggregate root"], answer: 1, explain: "Value objects are defined by their values and should be immutable." },
        { q: "Dependencies passed via the constructor is…", options: ["IoC only", "Dependency Injection", "Singleton", "Factory"], answer: 1, explain: "DI is the concrete mechanism of handing dependencies in; IoC is the broader control inversion." },
        { q: "Anemic domain models are most acceptable for…", options: ["Banking ledgers", "Simple CRUD apps", "E-commerce pricing", "Anything"], answer: 1, explain: "Fine when there's little business logic; rich domains need entities that protect invariants." },
        { q: "The rule of three says…", options: ["Always use three layers", "Abstract only after the 2nd/3rd occurrence", "Three tests per method", "Three interfaces per class"], answer: 1, explain: "Wait for repetition to reveal the real pattern before abstracting." }
      ]
    },

    "antipatterns": {
      title: "Anti-Patterns",
      track: "backend",
      icon: "⚠️",
      blurb: "An anti-pattern is a solution that looks reasonable but reliably causes harm — like the distributed monolith or N+1 queries. Naming them gives teams a shared shorthand for spotting and fixing them.",
      read: `
        <ul>
        <li><strong>Distributed monolith</strong> — services coupled by shared DB or joint deployment.</li>
        <li><strong>God Service / God Class</strong> — one thing doing everything.</li>
        <li><strong>Anemic Domain Model</strong> — data without behavior where invariants matter.</li>
        <li><strong>N+1 queries</strong> — one main query plus one per record; fix with joins/eager loading/batching.</li>
        <li><strong>Shared database between services</strong> — couples schemas and teams; violates Single Source of Truth.</li>
        <li><strong>Unlimited retries without backoff</strong> — amplifies outages.</li>
        <li><strong>Cache without invalidation strategy</strong> — stale data.</li>
        <li><strong>Over-engineering</strong> — microservices/CQRS/Event Sourcing without need.</li>
        <li><strong>Dual writes without an Outbox</strong> — DB change and event publication must be atomic.</li>
        </ul>`,
      cards: [
        { q: "What is the N+1 query problem and the fix?", a: "One main query plus one query per record. Fix with joins, eager loading, or batching." },
        { q: "Why is a shared database between microservices an anti-pattern?", a: "It couples schemas and teams and violates Single Source of Truth — each datum should have one owner." },
        { q: "Why are unlimited retries without backoff dangerous?", a: "They amplify outages: every client hammers a struggling service simultaneously, making recovery harder. Use exponential backoff + jitter and a circuit breaker." },
        { q: "What is over-engineering as an anti-pattern?", a: "Adopting microservices, CQRS, or Event Sourcing without a real need — complexity that costs more than it returns." },
        { q: "What's wrong with dual writes (DB + event) without an Outbox?", a: "They aren't atomic: you can save to the DB but fail to publish (or vice versa). The Transactional Outbox makes them one local transaction." },
        { q: "How do you detect a God Object?", a: "Too many responsibilities and dependencies — huge line count, >10 injected dependencies, names like ManagerServiceHelper. Split by responsibility." }
      ],
      quiz: [
        { q: "One query for orders, then one query per order for its items. This is…", options: ["Sharding", "N+1 queries", "Write skew", "A Saga"], answer: 1, explain: "N+1. Fix with a join, eager loading, or batching." },
        { q: "Retrying a failing service forever with no delay causes…", options: ["Faster recovery", "Amplified outage", "Better consistency", "Lower latency"], answer: 1, explain: "Unlimited retries without backoff hammer the struggling service and worsen the outage." },
        { q: "Saving to the DB then publishing an event in separate steps risks…", options: ["Nothing", "Lost or orphaned events (dual-write problem)", "Faster writes", "Strong consistency"], answer: 1, explain: "Without an Outbox the two writes aren't atomic; one can succeed while the other fails." },
        { q: "Adopting CQRS and Event Sourcing for a simple CRUD app is…", options: ["Best practice", "Over-engineering", "Required by SOLID", "A Bounded Context"], answer: 1, explain: "Complexity without a real need is itself an anti-pattern." }
      ]
    },

    /* ============================ FRONT-END ============================ */
    "react-fundamentals": {
      title: "React Fundamentals",
      track: "frontend",
      icon: "⚛️",
      blurb: "React is a JavaScript library for building user interfaces from components — self-contained functions that receive props, hold state, and describe their markup; React re-renders them through a Virtual DOM when their data changes.",
      read: `
        <p><strong>Virtual DOM & reconciliation:</strong> React keeps an in-memory element tree; on change it diffs (reconciles) and applies minimal real DOM updates. Nuance: not inherently faster than hand-optimized DOM — the value is a declarative model, batching, and cross-platform abstraction.</p>
        <p><strong>Reconciliation rules:</strong> different element type → unmount/rebuild subtree; same type → update props. Keys identify list items across renders.</p>
        <p><strong>Props vs state:</strong> props are read-only inputs from parent; state is owned, changing data. Share between siblings by lifting state up.</p>
        <p><strong>Controlled vs uncontrolled:</strong> controlled = React state is source of truth (value + onChange); uncontrolled = DOM holds value, read via ref.</p>
        <p><strong>Unidirectional flow:</strong> data down via props, events up via callbacks — traceable state changes.</p>`,
      cards: [
        { q: "What is the Virtual DOM and reconciliation?", a: "React keeps an in-memory tree of elements; on state change it builds a new tree, diffs it against the previous (reconciliation), and applies the minimal real DOM updates." },
        { q: "Is the Virtual DOM inherently faster than the real DOM?", a: "No. A hand-optimized direct DOM update can beat it. Its value is a declarative programming model, automatic batching, and a cross-platform abstraction (React Native)." },
        { q: "What happens when an element's type changes at a position?", a: "React unmounts and rebuilds that subtree. Same type → it updates props in place. Keys let React match list items correctly across renders." },
        { q: "Props vs state?", a: "Props are read-only inputs from the parent. State is data the component owns and changes over time. Share state between siblings by lifting it to their common parent." },
        { q: "Controlled vs uncontrolled inputs?", a: "Controlled: React state is the source of truth (value + onChange) — use for validation/derived UI. Uncontrolled: the DOM holds the value, read via ref — use for simple forms and file inputs." },
        { q: "What is unidirectional data flow?", a: "Data flows down via props; events flow up via callbacks. It makes state changes traceable — the debugging win over two-way binding." },
        { q: "Why are keys important in lists?", a: "Keys identify items across renders so React can match them correctly during reconciliation. Without stable keys, state can attach to the wrong item." }
      ],
      quiz: [
        { q: "The Virtual DOM's main benefit is…", options: ["Raw speed over direct DOM", "A declarative model with batching and minimal updates", "Smaller bundle size", "Server rendering"], answer: 1, explain: "It's not inherently faster than tuned direct DOM; the win is ergonomics, batching, and consistency." },
        { q: "When React sees a different element type at a position, it…", options: ["Updates props in place", "Unmounts and rebuilds the subtree", "Ignores it", "Throws"], answer: 1, explain: "Type change → remount. Same type → prop update." },
        { q: "To share state between two sibling components you…", options: ["Use a global variable", "Lift state to their common parent", "Duplicate the state", "Use refs"], answer: 1, explain: "Lifting state up keeps a single source of truth passed down via props." },
        { q: "An input whose value is driven by React state is…", options: ["Uncontrolled", "Controlled", "Deferred", "Memoized"], answer: 1, explain: "Controlled inputs use value + onChange; React state is the source of truth." },
        { q: "Props are…", options: ["Mutable by the child", "Read-only inputs from the parent", "Stored in the DOM", "Always strings"], answer: 1, explain: "Props flow down and are read-only; the child signals changes via callbacks." }
      ]
    },

    "react-hooks": {
      title: "React Hooks",
      track: "frontend",
      icon: "🪝",
      blurb: "React Hooks are functions that let function components \"hook into\" React features without writing a class — useState adds local state, useEffect runs side effects, and others handle context, memoization, and refs.",
      read: `
        <p><strong>Rules:</strong> call hooks only at the top level of a React function — never in conditions/loops/nested functions. Hook state is stored in fixed call order; conditional calls corrupt it.</p>
        <table><thead><tr><th>Hook</th><th>Purpose / trap</th></tr></thead><tbody>
        <tr><td>useState</td><td>Local state; batched (React 18); use functional updates when next depends on previous</td></tr>
        <tr><td>useEffect</td><td>Side effects after paint; cleanup before re-run/unmount; deps must list all reactive values or stale closures</td></tr>
        <tr><td>useLayoutEffect</td><td>Before paint, for DOM measurement; blocks painting</td></tr>
        <tr><td>useMemo / useCallback</td><td>Memoize value / function identity; only when expensive or identity matters</td></tr>
        <tr><td>useRef</td><td>Mutable box surviving renders without re-render; DOM refs</td></tr>
        <tr><td>useReducer</td><td>Complex state transitions</td></tr>
        <tr><td>useContext</td><td>Read context; all consumers re-render on change — not a state manager</td></tr>
        </tbody></table>
        <p><strong>Stale closure:</strong> an effect/callback captures values from its creation render; missing deps read old state. Fix: correct deps, functional updates, or useRef.</p>
        <p><strong>Custom hooks:</strong> extract reusable stateful logic (useFetch, useDebounce); each call gets independent state.</p>`,
      cards: [
        { q: "What are the rules of hooks and why?", a: "Call hooks only at the top level of a React function, never in conditions/loops/nested functions. Hook state is stored in a fixed order per instance; conditional calls shift the order and corrupt state." },
        { q: "When does useEffect run, and when does cleanup run?", a: "It runs after paint. Cleanup runs before the effect re-executes and on unmount. The dependency array must list every reactive value used." },
        { q: "What is a stale closure?", a: "An effect or callback captures values from the render it was created in. With missing deps it keeps reading old state. Fix: correct deps, functional updates, or useRef for values you don't want to re-trigger on." },
        { q: "useEffect vs useLayoutEffect?", a: "useEffect runs after paint (async). useLayoutEffect runs before paint — for DOM measurement/mutation that must happen before the user sees anything. It blocks painting, so don't default to it." },
        { q: "When are useMemo/useCallback worth it?", a: "Only for expensive computation or when referential equality matters (memoized children, effect deps). Otherwise they're pure overhead." },
        { q: "What does useRef do?", a: "A mutable box that survives renders without triggering a re-render. Used for DOM access, timers, and tracking previous values." },
        { q: "useReducer vs useState?", a: "Prefer useReducer when next state depends on previous in non-trivial ways or several sub-values change together — it centralizes transitions." },
        { q: "Why isn't useContext a state manager?", a: "Every consumer re-renders when the context value changes. It's for low-frequency global values; split contexts or use selectors for high-frequency data." },
        { q: "How do you correctly update state based on its previous value?", a: "Use the functional form setX(prev => ...) — updates are batched, so reading the variable right after setState gives a stale value." },
        { q: "What is a custom hook?", a: "A useX function extracting reusable stateful logic (not UI), e.g. useFetch or useDebounce. It composes hooks; each call gets its own independent state." }
      ],
      quiz: [
        { q: "Hooks can't be called inside conditions because…", options: ["It's slower", "Hook state is keyed by call order, which conditions shift", "React forbids loops", "It breaks JSX"], answer: 1, explain: "Fixed call order is how React associates state with each hook; conditions corrupt it." },
        { q: "An effect keeps reading an old count value. The likely cause is…", options: ["A stale closure from missing deps", "Too many re-renders", "Using useRef", "StrictMode"], answer: 0, explain: "Missing dependencies capture the creation-render value. Fix deps or use functional updates." },
        { q: "You must measure a DOM node before the user sees the update. Use…", options: ["useEffect", "useLayoutEffect", "useMemo", "useRef"], answer: 1, explain: "useLayoutEffect runs synchronously before paint." },
        { q: "Wrapping cheap math in useMemo is…", options: ["Always beneficial", "Usually net-negative overhead", "Required", "A memory leak"], answer: 1, explain: "Memoization has a cost; only worth it for expensive work or identity-sensitive consumers." },
        { q: "To increment state safely under batching, use…", options: ["setX(x + 1) right after reading x", "setX(prev => prev + 1)", "x++ then setX(x)", "useRef"], answer: 1, explain: "The functional updater receives the latest state, avoiding stale reads." },
        { q: "useRef differs from useState in that changing it…", options: ["Triggers a re-render", "Does not trigger a re-render", "Is impossible", "Resets each render"], answer: 1, explain: "useRef is a mutable box that persists without causing re-renders." }
      ]
    },

    "react-rendering": {
      title: "React Rendering & Keys",
      track: "frontend",
      icon: "🔁",
      blurb: "Rendering is how React turns a component's current props and state into on-screen UI. A re-render re-runs the component function; reconciliation diffs the output and applies the minimal DOM changes, with keys identifying list items.",
      read: `
        <p>A component re-renders when: <strong>its own state changes</strong>, <strong>its parent re-renders</strong> (unless memoized), or <strong>a context it consumes changes</strong>. Crucially, <strong>re-render ≠ DOM update</strong> — reconciliation may produce zero DOM changes.</p>
        <p><strong>Keys:</strong> use stable unique IDs. <strong>Index-as-key is a bug</strong> when the list can reorder/insert/delete: React matches by position, so component state (e.g. an uncontrolled input) attaches to the wrong item.</p>
        <p><strong>Immutability:</strong> updates must produce new references ([...arr, item], {...obj, x}). Mutating in place breaks shallow comparison, so React.memo, useMemo, and effect deps silently stop detecting changes.</p>`,
      cards: [
        { q: "What triggers a component to re-render?", a: "Its own state changes, its parent re-renders (unless memoized), or a context it consumes changes." },
        { q: "Does a re-render always update the DOM?", a: "No. Re-render ≠ DOM update. Reconciliation may produce zero real DOM changes if the output is identical." },
        { q: "Why is index-as-key a bug?", a: "When a list reorders/inserts/deletes, React matches items by position, so component state (like an uncontrolled input's value) attaches to the wrong item. Use stable unique IDs." },
        { q: "Why must state updates be immutable?", a: "New references ([...arr, item], {...obj, x}) let shallow comparison detect change. Mutating in place breaks React.memo, useMemo, and effect deps — they silently stop seeing updates." },
        { q: "When is index-as-key acceptable?", a: "Only for a static list that never reorders, inserts, or deletes, and whose items have no local state." }
      ],
      quiz: [
        { q: "A parent re-renders. Its non-memoized child…", options: ["Never re-renders", "Also re-renders", "Only re-renders if props changed", "Unmounts"], answer: 1, explain: "By default children re-render with the parent unless wrapped in React.memo with stable props." },
        { q: "Re-rendering a component always changes the DOM. True?", options: ["True", "False — reconciliation may yield zero DOM changes"], answer: 1, explain: "Re-render computes output; the DOM only changes if the diff is non-empty." },
        { q: "Using array index as key is dangerous when…", options: ["The list is static", "The list can reorder/insert/delete", "Keys are strings", "There are fewer than 10 items"], answer: 1, explain: "Position-based matching misassociates state on reorder/insert/delete." },
        { q: "Mutating state in place breaks…", options: ["Nothing", "Shallow comparison in memo/useMemo/effect deps", "Only TypeScript", "The Virtual DOM entirely"], answer: 1, explain: "Same reference means shallow checks see no change, so optimizations silently fail." }
      ]
    },

    "react-performance": {
      title: "React Performance",
      track: "frontend",
      icon: "🚀",
      blurb: "React performance work is the practice of making apps re-render less and load faster — memoization (React.memo, useMemo, useCallback), list virtualization, and code splitting — always guided by profiling rather than guesswork.",
      read: `
        <table><thead><tr><th>Tool</th><th>When worth it / not</th></tr></thead><tbody>
        <tr><td>React.memo</td><td>Expensive component + stable props; new object/function props defeat it</td></tr>
        <tr><td>useMemo</td><td>Expensive computation or stabilizing a reference; cheap math = net loss</td></tr>
        <tr><td>useCallback</td><td>Only when function identity matters downstream</td></tr>
        <tr><td>Virtualization (react-window)</td><td>Long lists (hundreds+) — biggest win for large tables</td></tr>
        <tr><td>Code splitting (lazy + Suspense)</td><td>Shrinks initial bundle; adds loading state</td></tr>
        <tr><td>Profiler / DevTools</td><td>Measure before optimizing</td></tr>
        </tbody></table>
        <p><strong>Model answer:</strong> profile first; most slowness is unnecessary re-renders from unstable props/context or huge lists. Don't sprinkle useMemo everywhere — the React Compiler exists because manual memoization is error-prone overhead.</p>`,
      cards: [
        { q: "When does React.memo actually help?", a: "Only if the component is expensive AND its props are shallow-stable. New object/function props every render defeat it — pair with useMemo/useCallback or skip it." },
        { q: "What's the biggest win for a huge list/table?", a: "List virtualization (react-window) — render only the visible rows instead of hundreds/thousands of DOM nodes." },
        { q: "What does code splitting do?", a: "React.lazy + Suspense load route/feature chunks on demand, shrinking the initial bundle at the cost of a loading state." },
        { q: "What's the senior answer to 'how do you make React fast?'", a: "Profile first with React DevTools/Profiler. Most slowness is unnecessary re-renders from unstable props/context or huge lists — fix with targeted memoization, virtualization, and splitting context. Measure, don't guess." },
        { q: "Why not useMemo everywhere?", a: "Memoization has overhead; cheap computations wrapped in useMemo cost more than they save. The React Compiler project exists to automate this because manual memoization is error-prone." },
        { q: "How do you stabilize props for a memoized child?", a: "Use useMemo for object/array props and useCallback for function props so their references stay equal across renders." }
      ],
      quiz: [
        { q: "React.memo on a child receiving a new inline object prop each render…", options: ["Always skips re-render", "Still re-renders (props not shallow-equal)", "Throws", "Memoizes the object"], answer: 1, explain: "A new object reference fails shallow comparison; stabilize it with useMemo or skip memo." },
        { q: "The single biggest optimization for a 5,000-row table is…", options: ["useMemo on every cell", "List virtualization", "More context", "Inline styles"], answer: 1, explain: "Render only visible rows; DOM node count is the bottleneck." },
        { q: "The first step in optimizing a slow React app is…", options: ["Add React.memo everywhere", "Profile with DevTools", "Rewrite in vanilla JS", "Disable StrictMode"], answer: 1, explain: "Measure real render cost before changing anything." },
        { q: "React.lazy + Suspense is used for…", options: ["State management", "Code splitting / on-demand chunk loading", "Server rendering", "Testing"], answer: 1, explain: "It splits bundles and loads features on demand with a fallback." },
        { q: "Wrapping a cheap addition in useMemo is…", options: ["A best practice", "Usually net-negative overhead", "Required for memo", "Free"], answer: 1, explain: "Memoization costs; only worth it for expensive work or identity-sensitive consumers." }
      ]
    },

    "react-state": {
      title: "React State Management",
      track: "frontend",
      icon: "🗂️",
      blurb: "State is the data a component owns that can change over time and trigger re-renders. State management is the discipline of deciding where each piece lives — locally, lifted, in Context, in an external store, or in a server-cache library.",
      read: `
        <p><strong>Decision ladder</strong> (climb only as far as needed):</p>
        <ol>
        <li>Local state (useState/useReducer) — default.</li>
        <li>Lift state up — siblings need it.</li>
        <li>Context — low-frequency global values (theme, locale, auth). Cost: all consumers re-render on change.</li>
        <li>External client-state store (Zustand, Redux, Jotai) — complex, cross-cutting, frequent client state. Redux buys predictability/devtools/middleware at boilerplate cost; don't default to it.</li>
        <li>Server-state library (TanStack Query, SWR) — data that lives on the server.</li>
        </ol>
        <p><strong>Server state ≠ client state:</strong> API data is a cache of remote truth needing fetching, caching, dedup, background refetch, invalidation — not a global store. Putting fetched data in Redux and hand-rolling loading/error/refetch is classic over-engineering.</p>
        <p><strong>useEffect + fetch pitfalls:</strong> race conditions (slow earlier response overwrites newer — fix with AbortController/ignore flag), no caching/dedup, manual loading/error state.</p>`,
      cards: [
        { q: "What is the state-management decision ladder?", a: "Local state → lift up → Context (low-frequency global) → external client store (Zustand/Redux) for complex frequent client state → server-state library (TanStack Query/SWR) for API data. Climb only as far as needed." },
        { q: "When is Context appropriate?", a: "Low-frequency global values like theme, locale, or auth user. Cost: every consumer re-renders on any value change — split contexts or add selectors for high-frequency data." },
        { q: "Server state vs client state?", a: "Server state is a cache of remote truth needing fetch/cache/dedup/refetch/invalidation — use TanStack Query/SWR. Client state is UI-owned. Putting fetched data in Redux and hand-rolling loading/error/refetch is over-engineering." },
        { q: "What does TanStack Query / SWR give you?", a: "Caching, request deduplication, background refetch, stale-while-revalidate, and loading/error states out of the box — replacing hand-rolled useEffect fetching." },
        { q: "What's wrong with useEffect + fetch?", a: "Race conditions (a slow earlier response overwrites a newer one — fix with AbortController or an ignore flag), no caching/dedup, and manual loading/error state." },
        { q: "When should you reach for Redux?", a: "Complex, cross-cutting, frequently-changing client state where predictability, devtools, and middleware pay for the boilerplate. Don't default to it — and never use it just to hold server data." },
        { q: "How do you fix a fetch race condition?", a: "AbortController to cancel stale requests, or an ignore flag in the effect cleanup so only the latest response is applied." }
      ],
      quiz: [
        { q: "Data fetched from an API is best managed with…", options: ["Redux by default", "A server-state library (TanStack Query/SWR)", "useContext", "A global variable"], answer: 1, explain: "Server state needs caching/dedup/refetch/invalidation — query libraries provide it; a global store is over-engineering." },
        { q: "Context is best suited for…", options: ["High-frequency tick data", "Low-frequency global values like theme/auth", "Server cache", "Form validation"], answer: 1, explain: "All consumers re-render on change, so keep context values low-frequency." },
        { q: "A slow earlier fetch overwrites a newer response. This is…", options: ["A stale closure", "A race condition", "Write skew", "Hydration"], answer: 1, explain: "Fix with AbortController or an ignore flag so only the latest response applies." },
        { q: "The default place for component state is…", options: ["Redux", "Local useState/useReducer", "Context", "localStorage"], answer: 1, explain: "Start local; climb the ladder only when sharing/complexity demands it." },
        { q: "Stale-while-revalidate is a feature of…", options: ["React.memo", "TanStack Query / SWR", "useReducer", "Error boundaries"], answer: 1, explain: "Serve cached data immediately while refetching in the background." }
      ]
    },

    "react-strategies": {
      title: "Rendering Strategies & Suspense",
      track: "frontend",
      icon: "🖥️",
      blurb: "Rendering strategies determine where and when your HTML is produced: in the browser (CSR), per request on a server (SSR), at build time (SSG/ISR), or on the server as components (RSC). Hydration, Suspense, and transitions govern how it becomes interactive.",
      read: `
        <table><thead><tr><th>Strategy</th><th>Where HTML is produced / trade-off</th></tr></thead><tbody>
        <tr><td>CSR</td><td>Browser after JS loads; simplest deploy, slow first paint, poor SEO</td></tr>
        <tr><td>SSR</td><td>Server per request; fast first paint + SEO, server cost + hydration cost</td></tr>
        <tr><td>SSG</td><td>Build time; fastest + cacheable, stale until rebuild</td></tr>
        <tr><td>ISR</td><td>Build + periodic revalidation; SSG freshness without full rebuilds</td></tr>
        <tr><td>RSC</td><td>Server, streamed, zero client JS for those components; no hooks/state — mark interactive parts Client Components</td></tr>
        </tbody></table>
        <p><strong>Hydration:</strong> attaching listeners/state to server HTML so it becomes interactive; server/client mismatches cause hydration errors.</p>
        <p><strong>Suspense & transitions:</strong> Suspense declares a fallback while something loads; useTransition marks an update non-urgent so typing/clicks stay responsive.</p>`,
      cards: [
        { q: "CSR vs SSR vs SSG?", a: "CSR: HTML in browser after JS — simple deploy, slow first paint, weak SEO. SSR: server per request — fast first paint + SEO, server + hydration cost. SSG: build time — fastest + cacheable, stale until rebuild." },
        { q: "What is ISR?", a: "Incremental Static Regeneration: build-time pages plus periodic revalidation — SSG freshness without full rebuilds." },
        { q: "What are React Server Components (RSC)?", a: "Components rendered on the server and streamed with zero client JS for them; they can access data directly but can't use hooks/state/interactivity. Mark interactive parts as Client Components." },
        { q: "What is hydration?", a: "Attaching event listeners and state to server-rendered HTML so it becomes interactive. Mismatches between server and client output cause hydration errors." },
        { q: "What does Suspense do?", a: "Declares a fallback UI while something loads (lazy chunks, data), letting React show a placeholder until it's ready." },
        { q: "What does useTransition do?", a: "Marks an update as non-urgent so urgent interactions (typing, clicks) stay responsive while the heavy update renders in the background." },
        { q: "When would you pick SSG over SSR?", a: "When content is mostly static and cacheable (marketing, docs, blog) — fastest delivery. Use SSR when content is per-request/personalized and must be fresh + SEO-friendly." }
      ],
      quiz: [
        { q: "A marketing site with mostly static content should use…", options: ["CSR", "SSG", "RSC only", "WebSockets"], answer: 1, explain: "SSG is fastest and cacheable for static content; rebuild or use ISR for updates." },
        { q: "React Server Components differ from client components in that they…", options: ["Run in the browser", "Have zero client JS and can't use hooks/state", "Are always faster", "Require Redux"], answer: 1, explain: "RSC render on the server with no client bundle; interactivity requires Client Components." },
        { q: "Attaching interactivity to server-rendered HTML is called…", options: ["Reconciliation", "Hydration", "Memoization", "Transitions"], answer: 1, explain: "Hydration wires listeners/state onto existing HTML; mismatches cause errors." },
        { q: "To keep typing responsive during a heavy search render, use…", options: ["useMemo", "useTransition", "useRef", "useLayoutEffect"], answer: 1, explain: "useTransition marks the heavy update non-urgent so input stays responsive." },
        { q: "ISR provides…", options: ["Per-request server rendering", "Static pages with periodic revalidation", "Client-only rendering", "Real-time sockets"], answer: 1, explain: "Incremental Static Regeneration refreshes static pages without full rebuilds." }
      ]
    },

    "react-testing": {
      title: "React Testing & Errors",
      track: "frontend",
      icon: "🧪",
      blurb: "React testing verifies what users actually experience. React Testing Library renders components and queries them by role and text; error boundaries contain render failures; StrictMode double-invokes effects in development to expose unsafe cleanup.",
      read: `
        <p><strong>React Testing Library philosophy:</strong> test <em>behavior, not implementation</em> — query by role/label/text (what the user sees), interact with userEvent, assert on outcomes. Don't assert on internal state; those tests break on every refactor.</p>
        <p><strong>Error boundaries:</strong> catch errors in the render tree below them and show a fallback. They do NOT catch event-handler or async errors — handle those with try/catch. Class-based API; react-error-boundary is the common wrapper.</p>
        <p><strong>StrictMode:</strong> intentionally double-invokes effects in development to surface missing cleanup. It's a feature, not a bug, and doesn't happen in production.</p>`,
      cards: [
        { q: "What is the React Testing Library philosophy?", a: "Test behavior, not implementation: query by role/label/text (what the user sees), interact with userEvent, assert on outcomes. Avoid asserting internal state — those tests break on every refactor." },
        { q: "What do error boundaries catch — and not catch?", a: "They catch errors in the render tree below them and show a fallback. They do NOT catch event-handler or async errors — handle those with try/catch." },
        { q: "Why does an effect run twice in development?", a: "React StrictMode intentionally double-invokes effects to surface missing cleanup. It's a feature, not a bug, and doesn't happen in production." },
        { q: "userEvent vs fireEvent?", a: "userEvent simulates real user interactions (typing, clicking with full event sequences); fireEvent dispatches a single low-level event. Prefer userEvent for realistic behavior tests." },
        { q: "How do you handle an async error in a component?", a: "try/catch around the async work (error boundaries don't catch it), then set error state and render a fallback UI." }
      ],
      quiz: [
        { q: "RTL recommends querying elements by…", options: ["Component internal state", "Role/label/text the user sees", "CSS class names", "Ref values"], answer: 1, explain: "Test behavior as the user experiences it, not implementation details." },
        { q: "Error boundaries catch…", options: ["Event-handler errors", "Async errors", "Render-tree errors below them", "All errors"], answer: 2, explain: "They catch render errors below them; event-handler and async errors need try/catch." },
        { q: "An effect running twice in dev is caused by…", options: ["A bug in your code", "StrictMode double-invocation", "React.memo", "Hydration"], answer: 1, explain: "StrictMode intentionally double-invokes to reveal missing cleanup; not in production." },
        { q: "For realistic interaction tests, prefer…", options: ["fireEvent", "userEvent", "Direct state mutation", "Snapshot only"], answer: 1, explain: "userEvent simulates full real-user event sequences." }
      ]
    }
  }
};
