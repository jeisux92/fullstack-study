/* Study content derived from the Full-Stack Interview Guide.
   Schema: tracks -> topic ids; topics -> { title, track, icon, read, cards[], quiz[] } */
window.STUDY_DATA = {
  tracks: {
    backend: {
      name: "Back-End",
      icon: "🗄️",
      tagline: "Architecture, APIs, system design scenarios, databases & concurrency, caching, security, Node.js & .NET, DevOps, cloud, principles, patterns & OOP.",
      topics: ["architecture", "distributed", "apis", "sysdesign", "databases", "db-advanced", "cache-messaging", "security", "nodejs", "dotnet", "os-basics", "git", "devops", "cloud", "principles", "patterns", "oop", "testing", "antipatterns", "behavioral"],
      groups: [
        { name: "System Design", topics: ["architecture", "distributed", "apis", "sysdesign"] },
        { name: "Data & Caching", topics: ["databases", "db-advanced", "cache-messaging"] },
        { name: "Security", topics: ["security"] },
        { name: "Platform & Runtime", topics: ["nodejs", "dotnet", "os-basics"] },
        { name: "Delivery & Ops", topics: ["git", "devops", "cloud"] },
        { name: "Code Design", topics: ["principles", "patterns", "oop", "testing", "antipatterns"] },
        { name: "Interview Skills", topics: ["behavioral"] }
      ]
    },
    frontend: {
      name: "Front-End",
      icon: "⚛️",
      tagline: "CSS & HTTP, web performance and front-end security, React in depth, real-time WebSockets — and the behavioral round.",
      topics: ["css-web", "http", "web-perf", "fe-security", "react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing", "web-rt", "behavioral"],
      groups: [
        { name: "Web Platform", topics: ["css-web", "http", "web-perf", "fe-security"] },
        { name: "React", topics: ["react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"] },
        { name: "Real-Time Web", topics: ["web-rt"] },
        { name: "Interview Skills", topics: ["behavioral"] }
      ]
    },
    languages: {
      name: "Runtimes & Languages",
      icon: "🔤",
      tagline: "The languages and runtimes behind the stacks: JavaScript, TypeScript, Node.js and .NET — plus Git.",
      topics: ["js-core", "typescript", "nodejs", "dotnet", "os-basics", "git"],
      groups: [
        { name: "Languages", topics: ["js-core", "typescript"] },
        { name: "Runtimes", topics: ["nodejs", "dotnet", "os-basics"] },
        { name: "Tooling", topics: ["git"] }
      ]
    },
    fullstack: {
      name: "Full-Stack",
      icon: "🧩",
      tagline: "Everything: the complete back-end and front-end curriculum in one track.",
      topics: ["architecture", "distributed", "apis", "sysdesign", "databases", "db-advanced", "cache-messaging", "security", "nodejs", "dotnet", "os-basics", "git", "devops", "cloud", "principles", "patterns", "oop", "testing", "antipatterns", "behavioral", "js-core", "typescript", "css-web", "http", "web-perf", "fe-security", "react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing", "web-rt"],
      groups: [
        { name: "System Design", topics: ["architecture", "distributed", "apis", "sysdesign"] },
        { name: "Data & Caching", topics: ["databases", "db-advanced", "cache-messaging"] },
        { name: "Security", topics: ["security"] },
        { name: "Platform & Runtime", topics: ["nodejs", "dotnet", "os-basics"] },
        { name: "Delivery & Ops", topics: ["git", "devops", "cloud"] },
        { name: "Code Design", topics: ["principles", "patterns", "oop", "testing", "antipatterns"] },
        { name: "Interview Skills", topics: ["behavioral"] },
        { name: "Languages", topics: ["js-core", "typescript"] },
        { name: "Web Platform", topics: ["css-web", "http", "web-perf", "fe-security"] },
        { name: "React", topics: ["react-fundamentals", "react-hooks", "react-rendering", "react-performance", "react-state", "react-strategies", "react-testing"] },
        { name: "Real-Time Web", topics: ["web-rt"] }
      ]
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
        <p><strong>SQL vs NoSQL:</strong> SQL gives you a rigid schema, ACID transactions, joins and reporting — traditionally scaled vertically (bigger machine), though Vitess/CockroachDB/Spanner/Aurora now shard SQL horizontally too. NoSQL gives flexible/schema-less documents, eventual consistency and horizontal scale by design, for massive or rapidly-evolving data. <em>Choose by guarantees and query patterns, not by possibility</em>: a ledger needs ACID; an event log needs volume.</p>
        <p><strong>ACID &amp; CAP:</strong> ACID = <em>Atomicity</em> (all-or-nothing), <em>Consistency</em> (valid state in → valid state out), <em>Isolation</em> (concurrent transactions don't interfere), <em>Durability</em> (committed survives crashes). CAP says: <em>during a network Partition</em>, a distributed system must choose Consistency or Availability — you can't have both at that moment. Precise phrasing matters: partitions are inevitable, so the choice only exists when one happens; many systems tune per operation (quorum reads: CP for payments, AP for a feed). PACELC adds the next axis: even without partitions there's a Latency-vs-Consistency trade-off.</p>
        <p><strong>Indexing:</strong> a B-Tree keeps keys sorted so lookups are O(log n) — faster <code>SELECT</code>, but every <code>INSERT/UPDATE</code> must maintain it (slower writes, extra storage). Index the columns in <code>WHERE</code>, <code>JOIN</code> and <code>ORDER BY</code>. <em>Composite index order matters</em>: equality columns first, then range/sort — <code>(user_id, created_at)</code> serves <code>WHERE user_id=? ORDER BY created_at</code>, the reverse doesn't. A <strong>covering index</strong> contains every column the query needs, so the DB never touches the table. What breaks index use: functions on the column (<code>LOWER(email)</code>), leading wildcards (<code>LIKE '%foo'</code>), low selectivity, stale statistics. The senior move for "slow query" is to read the plan (<code>EXPLAIN ANALYZE</code>): look for seq scans where an index scan belongs, row-estimate mismatches (stale stats), and expensive join types.</p>
        <p><strong>Isolation & MVCC:</strong> the SQL standard's four levels — Read Uncommitted, Read Committed, Repeatable Read, Serializable — each prevent more anomalies: dirty reads, then non-repeatable reads, then phantoms. <em>MVCC</em> (multi-version concurrency) is how modern engines implement them: each transaction sees a consistent <strong>snapshot</strong>, so <em>readers never block writers</em>. Nuance to know: Postgres' Repeatable Read is actually snapshot isolation — it prevents phantoms but still allows <strong>write skew</strong> (two transactions read overlapping data and write disjoint updates, each invalidating the other's assumption); only true Serializable catches it. Lost updates (two txns read-modify-write the same row) are fixed by locking (<code>SELECT ... FOR UPDATE</code>) or atomic SQL (<code>SET x = x + 1</code>).</p>
        <p><strong>Deadlocks:</strong> two transactions each hold a lock the other needs, so both wait forever — the DB detects the cycle and aborts one as a victim (your code must retry; SQLSTATE 40001). Prevention: consistent lock ordering across code paths, short transactions (never do network calls mid-transaction), and appropriate indexes — without them a query locks far more rows than intended.</p>
        <p><strong>Optimistic vs pessimistic locking:</strong> optimistic stores a version column and does <code>UPDATE ... WHERE version = n</code> — if 0 rows changed, someone else won (low contention, no locks held). Pessimistic does <code>SELECT ... FOR UPDATE</code> and holds the row lock (high contention, but serializes writers). Replication copies data to other nodes for high availability and read scaling (watch replica lag — stale reads). Sharding splits data by key across nodes for write scaling (cross-shard joins/transactions become painful — that's the price).</p>`,
      cards: [
        { q: "How do you choose SQL vs NoSQL?", a: "SQL: rigid schema, ACID transactions, joins, reporting — scale traditionally vertical (or modern distributed SQL). NoSQL: flexible schema, eventual consistency, horizontal scale for massive or fast-evolving data. Decide by guarantees and query patterns: a ledger needs ACID, an event log needs volume — 'can it scale?' is the wrong question." },
        { q: "State ACID.", a: "Atomicity: all-or-nothing. Consistency: valid state in → valid state out. Isolation: concurrent transactions don't interfere with each other. Durability: committed data survives crashes (WAL + fsync). ACID is the SQL contract; NoSQL often trades parts of it for availability and scale (BASE)." },
        { q: "Precisely state the CAP theorem.", a: "During a network Partition — not at all times — a distributed system must choose Consistency or Availability, since it can't guarantee both while the partition lasts. With no partition you can have both, and most systems tune per operation (CP for payments, AP for feeds). PACELC adds: even without partitions there's a Latency-vs-Consistency trade-off (e.g. quorum reads)." },
        { q: "What's the trade-off of an index?", a: "Faster reads (B-Tree, O(log n)) at the cost of slower writes — every INSERT/UPDATE must maintain the index — plus extra storage. Index columns in WHERE, JOIN and ORDER BY; leave write-heavy or rarely-queried columns alone." },
        { q: "How should you order columns in a composite index?", a: "Equality-filtered columns first, then range/sort: (user_id, created_at) serves WHERE user_id=? ORDER BY created_at, because equality narrows the B-Tree walk and the remaining entries are already sorted by time. The reverse order can't use it for sorting — it would scan and sort instead." },
        { q: "What breaks index usage?", a: "Functions on the column (WHERE LOWER(email) = ...), leading wildcards (LIKE '%foo'), low-selectivity columns (a flag that's 90% true), and stale optimizer statistics. Fix: expression indexes, full-text search, or update statistics — don't guess, read EXPLAIN ANALYZE." },
        { q: "Name the four isolation levels and what they prevent.", a: "Read Uncommitted: prevents nothing (sees uncommitted data). Read Committed: prevents dirty reads. Repeatable Read: prevents non-repeatable reads (re-reads return the same row). Serializable: also prevents phantom reads. Each level buys more correctness with less concurrency — that's the whole trade-off." },
        { q: "What is MVCC?", a: "Multi-Version Concurrency Control: the engine keeps old row versions so each transaction reads a consistent snapshot — readers never block writers and vice versa. It's the implementation behind modern isolation. Postgres defaults to Read Committed, MySQL InnoDB to Repeatable Read; snapshot isolation (Postgres RR) prevents phantoms but allows write skew." },
        { q: "What is write skew?", a: "Under snapshot isolation: two transactions read overlapping data, each makes a disjoint write that violates the other's assumption (e.g., each checks '≥1 doctor on shift' before going off — both pass, zero remain). The reads were consistent snapshots, so no write conflict is detected. Only true Serializable (or explicit locking) prevents it." },
        { q: "How do you prevent deadlocks?", a: "Consistent lock ordering across all code paths (touch rows/tables in the same order), short transactions — never hold locks across network calls — and proper indexes so queries lock few rows instead of table-scanning. On top: retry the deadlock error (40001); it's an expected error, not a crash." },
        { q: "Optimistic vs pessimistic locking?", a: "Optimistic: a version column; UPDATE ... WHERE version = n, and if 0 rows changed, someone else won — no locks held, perfect for low contention. Pessimistic: SELECT ... FOR UPDATE holds a row lock until commit — safe under high contention, but serializes writers and risks deadlocks. Pick by collision probability, not by safety alone." },
        { q: "Replication vs sharding?", a: "Replication: the same data on multiple nodes — high availability (failover) and read scaling (serve reads from replicas), but replicas lag, so reads can be stale. Sharding: data split by key across nodes — write scaling and storage beyond one machine, but cross-shard joins and transactions become hard, and resharding is surgery. Different problems: HA/reads vs writes/storage." }
      ],
      quiz: [
        { q: "During a network partition, CAP says you must choose between…", options: ["Consistency and Availability", "Atomicity and Durability", "Latency and Throughput", "SQL and NoSQL"], answer: 0, explain: "The C-vs-A choice exists only during a partition — with no partition you can have both, and most systems tune per operation (CP payments, AP feeds)." },
        { q: "Which composite index serves WHERE user_id=? ORDER BY created_at?", options: ["(created_at, user_id)", "(user_id, created_at)", "(user_id) only", "No index can help"], answer: 1, explain: "Equality first narrows the B-Tree walk, then the entries are already sorted by created_at — the reverse index would scan and sort instead." },
        { q: "Which query defeats an index on email?", options: ["WHERE email = ?", "WHERE LOWER(email) = ?", "WHERE email LIKE 'a%'", "ORDER BY email"], answer: 1, explain: "A function on the column forces a full scan; an expression index on LOWER(email) or a normalized column fixes it." },
        { q: "Two transactions read overlapping rows and write disjoint updates, each breaking the other's assumption. This is…", options: ["A dirty read", "A phantom read", "Write skew", "A lost update"], answer: 2, explain: "Snapshot isolation sees no write conflict because the writes are disjoint — only true Serializable catches the violated invariant." },
        { q: "Best locking strategy for a low-contention record edit?", options: ["Pessimistic row lock", "Optimistic version check", "Table lock", "Serializable everything"], answer: 1, explain: "Optimistic holds no locks and detects conflicts via the version column — zero overhead when collisions are rare." },
        { q: "You need to scale writes beyond one machine. You use…", options: ["Read replicas", "Sharding", "A bigger CPU", "More indexes"], answer: 1, explain: "Replication scales reads and availability; sharding partitions data by key to scale writes and storage." },
        { q: "The senior first step for 'this query is slow' is…", options: ["Add an index immediately", "Read the query plan (EXPLAIN ANALYZE)", "Switch to NoSQL", "Cache everything"], answer: 1, explain: "Diagnose first: seq scans, estimate mismatches (stale stats) and join types tell you what's actually wrong before you change anything." }
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
        <p>A design pattern is a named, reusable solution to a recurring design problem. Each pattern has four parts: a <strong>context</strong> (when it applies), a <strong>problem</strong> (what forces repeat the design), a <strong>solution</strong> (object structure and collaboration), and <strong>consequences</strong> (the results and trade-offs). Patterns are a vocabulary: saying "I'd use a Strategy here" replaces a paragraph of explanation in a design review.</p>
        <pre><code>The Gang-of-Four taxonomy (1994) — by WHAT VARIES:

Design patterns
├── Creational    — how objects are created
│   ├── Factory Method · Abstract Factory · Builder · Prototype · Singleton
├── Structural    — how classes and objects are composed
│   └── Adapter · Facade · Decorator · Proxy · DTO/Mapper
└── Behavioral    — how objects collaborate and distribute responsibilities
    ├── Strategy · State · Template Method · Observer · Chain of Responsibility</code></pre>
        <p><strong>The three categories at a glance:</strong></p>
        <table><thead><tr><th>Type</th><th>Question it answers</th><th>What varies</th></tr></thead><tbody>
        <tr><td>Creational</td><td>How do objects get created?</td><td>What concrete classes get instantiated</td></tr>
        <tr><td>Structural</td><td>How do classes and objects compose?</td><td>How pieces connect without coupling them directly</td></tr>
        <tr><td>Behavioral</td><td>How do objects collaborate?</td><td>Algorithms and responsibility distribution at runtime</td></tr>
        </tbody></table>
        <p>Below, each category gets its definition, the patterns in it, and when it applies. The backend staples — Repository, Unit of Work, Dependency Injection — aren't Gang-of-Four; they're listed at the end because interviews ask them anyway.</p>

        <h4>1 · Creational — how objects are created</h4>
        <p><strong>Definition:</strong> creational patterns abstract <em>instantiation</em> so a system is decoupled from how its objects are created, composed, and represented. They matter when object creation is complex, varies by configuration, or would otherwise force callers to hardcode concrete classes — the coupling creational patterns remove. They do <em>not</em> change how objects behave afterward; they only control how they come into existence.</p>
        <p><strong>Factory Method</strong> (class) · <strong>Abstract Factory</strong> (families of related products) · <strong>Builder</strong> (step-by-step construction) · <strong>Prototype</strong> (clone a prototypical instance) · <strong>Singleton</strong> (one shared instance). The two shown here are the ones you'll actually meet in backend interviews.</p>
        <p><strong>Factory Method.</strong> A method decides which concrete class to instantiate, so callers depend on an abstraction instead of constructors. Example: <code>SenderFactory.forProvider(config)</code> returning a SendGrid or SES sender. Skip it when construction is a single <code>new</code> with no variation.</p>
        <pre><code>// The caller knows ISender, never SendGridSender or SesSender.
ISender CreateSender(string provider) =&gt;
    provider switch {
        "sendgrid" =&gt; new SendGridSender(),
        "ses"      =&gt; new SesSender(),
        _          =&gt; throw new ArgumentException(provider)
    };</code></pre>
        <p><strong>Builder.</strong> Assembles a complex object step by step with a fluent API instead of telescoping constructors. Example: <code>Query.select(...).where(...).limit(...)</code>. Skip it when the object has two fields.</p>
        <pre><code>var q = new SqlQueryBuilder()
    .Select("id", "name")
    .From("users")
    .Where("age &gt; 18")
    .OrderBy("created_at")
    .Build(); // an object nobody would construct in one call</code></pre>
        <p><strong>Singleton.</strong> Guarantees one shared instance with global access. In backend, prefer the DI container's singleton scope over a hand-rolled <code>getInstance()</code> — a static singleton hides dependencies, blocks testing, and causes concurrency surprises.</p>

        <h4>2 · Structural — how classes and objects compose</h4>
        <p><strong>Definition:</strong> structural patterns compose classes and objects into larger structures while keeping them flexible and efficient. They answer "how do these pieces connect?" by introducing indirection — a wrapper, a bridge, a stand-in — so parts can change or be added without touching the whole. They add relationships <em>between</em> objects (aggregation, delegation) rather than behavior inside them; the price is one extra indirection layer, so they pay off only when the coupling they remove is real.</p>
        <pre><code>Client ──uses──► [Abstraction] ◄──implements── Concrete
                      ▲
                      │ (structural patterns insert one of these)
        ┌─────────────┴──────────────┐
   Adapter: vendor API → our port   Facade: many calls → one
   Decorator/Proxy: wrapper around  DTO/Mapper: entity ↔ contract
        │                          │
   same interface, new behavior    new surface, same subsystem</code></pre>
        <p><strong>Adapter</strong> (converts an interface) · <strong>Facade</strong> (simplifies a subsystem) · <strong>Decorator</strong> (adds behavior by wrapping) · <strong>Proxy</strong> (controls access to a subject) · <strong>DTO &amp; Mapper</strong> (transport shapes between layers). Below are the four you'll actually meet in backend work.</p>
        <p><strong>Adapter.</strong> Converts an external interface into the one your system expects. Example: wrapping a vendor SMS SDK behind your own <code>SmsSender</code> port so the vendor can be swapped. Trade-off: it's deliberate indirection — don't adapt interfaces you own.</p>
        <pre><code>// The SDK's interface is the vendor's, not ours:
class AcmeSms { public bool SendSms(string n, string t) { /* vendor */ } }

// Our port — what the rest of the app depends on:
interface ISmsSender { void Send(string phone, string text); }

class AcmeAdapter : ISmsSender {
    private readonly AcmeSms _sdk = new();
    public void Send(string p, string t) =&gt; _sdk.SendSms(p, t);
}</code></pre>
        <p><strong>Facade.</strong> One simplified entry point over a complicated subsystem. Example: <code>PaymentFacade.charge()</code> hiding fraud-check + gateway + ledger calls. Unlike Adapter (converts an interface), Facade hides complexity behind a new, simpler one.</p>
        <pre><code>class PaymentFacade {
    // The caller makes ONE call instead of orchestrating three subsystems:
    public void Charge(decimal amount) {
        _fraud.Check(amount);       // subsystem 1
        _gateway.Charge(amount);    // subsystem 2
        _ledger.Record(amount);     // subsystem 3
    }
}</code></pre>
        <p><strong>Decorator.</strong> Wraps a component to add behavior — logging, caching, retry — without modifying it: same interface, stacked responsibilities. Skip it when a single cross-cutting concern would do with plain middleware.</p>
        <pre><code>interface Notifier { void Send(string msg); }

class EmailNotifier : Notifier { public void Send(string m) { /* send */ } }

// Same interface, behavior stacked — the client sees a Notifier:
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

// client: new LoggingDecorator(new RetryDecorator(new EmailNotifier(), 3))</code></pre>
        <pre><code>Diagram — who wraps whom (client calls the outermost):

EmailNotifier  (implements Notifier)
      ▲
RetryDecorator ───────► EmailNotifier
      ▲
LoggingDecorator ─────► RetryDecorator
   (client calls LoggingDecorator.Send)</code></pre>
        <p><strong>Proxy.</strong> A stand-in that controls access to the real subject: lazy loading, access control, caching, remote calls. Decorator adds behavior; Proxy controls access.</p>
        <p><strong>DTO &amp; Mapper.</strong> DTOs are inert transport objects at API boundaries; mappers convert between domain entities, DTOs, and persistence models. They keep internal structure out of your contracts, at the cost of mapping boilerplate.</p>

        <h4>3 · Behavioral — how objects collaborate</h4>
        <p><strong>Definition:</strong> behavioral patterns characterize how objects interact and distribute responsibilities — they move beyond structure to algorithms, message flow, and the <em>dynamic</em> wiring between objects. Instead of answering "how is this built?", they answer "who decides what, when, and who gets notified?" The coupling they remove is <em>algorithmic</em>: the client picks a policy (Strategy), the object picks its own (State), or the subject fans out to whoever subscribed (Observer). They trade explicit call sites for indirection you have to follow — so they pay off exactly when the behavior genuinely varies.</p>
        <pre><code>Caller ──calls──► Context ◄──holds── Strategy (algorithm)
                       └──policy──► State (internal mood)

Subject ──emit──► Observer(s)      Request ──chain──► H1 ─► H2 ─► H3
   (one event, many subscribers)   (each link decides: act / mutate / pass)</code></pre>
        <p><strong>Strategy</strong> (interchangeable algorithms) · <strong>State</strong> (behavior per internal state) · <strong>Template Method</strong> (skeleton + variable steps) · <strong>Observer</strong> (event fan-out) · <strong>Chain of Responsibility</strong> (handler pipelines). The four with code below cover the ones that appear most in backend interviews.</p>
        <p><strong>Strategy.</strong> Defines a family of interchangeable algorithms behind one interface; the caller picks one at runtime. Example: payment gateways (<code>CardStrategy</code>, <code>PayPalStrategy</code>). Kill switch: when there is only ever one implementation (YAGNI).</p>
        <pre><code>interface IPaymentGateway { void Charge(decimal amount); }

class CardGateway   : IPaymentGateway { public void Charge(decimal a) { /* auth + capture */ } }
class PayPalGateway : IPaymentGateway { public void Charge(decimal a) { /* redirect flow */ } }

// Context chooses at runtime; a new gateway needs NO change here:
class Checkout {
    private readonly IPaymentGateway _gw;
    public Checkout(IPaymentGateway gw) =&gt; _gw = gw;
    public void Pay(decimal amount) =&gt; _gw.Charge(amount);
}</code></pre>
        <pre><code>Diagram — the context picks one implementation:

            ┌─ CardGateway ──┐
Context ────┼─ PayPalGateway ─┼── runtime choice
            └─ BankTransfer ─┘
  (new gateway = new class, Checkout untouched)</code></pre>
        <p><strong>State.</strong> Structurally identical to Strategy, but the object changes its own behavior as its internal state changes (Order in NEW/PAID/SHIPPED) — the "strategy" isn't chosen from outside.</p>
        <p><strong>Observer.</strong> A subject emits events; observers subscribe without the subject knowing them. Conceptual root of domain events and message brokers. Risk: hidden flows that are hard to trace — keep events few and meaningful.</p>
        <pre><code>// The subject knows only the callback type — not its subscribers:
class StockTicker {
    private readonly List&lt;Action&lt;int&gt;&gt; _observers = new();
    public void Subscribe(Action&lt;int&gt; cb) =&gt; _observers.Add(cb);
    public void PriceChanged(int price) { foreach (var cb in _observers) cb(price); }
}

var ticker = new StockTicker();
ticker.Subscribe(p =&gt; Console.WriteLine(p));  // display
ticker.Subscribe(p =&gt; Alert(p));              // alerts
ticker.PriceChanged(100); // all observers notified</code></pre>
        <pre><code>Diagram — one emit fans out to every subscriber:

StockTicker ──PriceChanged──► ObserverA (price display)
                          └──► ObserverB (alerts)</code></pre>
        <p><strong>Chain of Responsibility.</strong> A request passes through a pipeline of handlers, each deciding to act, mutate, or pass it along. Example: HTTP middleware (auth → validation → handler).</p>
        <pre><code>// Each link decides: handle it, or pass to the next.
class AuthHandler {
    private readonly Func&lt;Request, Task&gt; _next;
    public async Task Run(Request r) {
        if (!r.TokenValid) { r.Response = 401; return; } // short-circuit
        await _next(r);                                 // pass along
    }
}</code></pre>
        <p><strong>Template Method.</strong> A base class fixes the algorithm skeleton and lets subclasses override individual steps. Prefer composition (Strategy) when steps vary independently.</p>

        <h4>4 · Backend staples — not Gang-of-Four, but interviews ask them</h4>
        <p><strong>Definition:</strong> these three don't appear in the Gang-of-Four catalog, but they answer the question every backend system faces — <em>how do domain code and infrastructure stay decoupled?</em> Repository and Unit of Work draw the boundary around persistence; Dependency Injection is the mechanism that wires everything behind that boundary. Interviews expect them by name, and confusing DI (the pattern) with a DI container (the tool) is a classic mistake.</p>
        <p><strong>Repository.</strong> Mediates between the domain and persistence behind a collection-like interface (<code>findByEmail()</code>), so the domain never sees SQL, Mongo, or ORM types. Common misuse: leaking ORM entities and query types through it.</p>
        <pre><code>// The domain depends on the port; persistence is a detail:
interface IUserRepository {
    User? FindByEmail(string email);
    void Add(User user);
}

class EfUserRepository : IUserRepository {
    private readonly AppDbContext _db;
    public User? FindByEmail(string e) =&gt;
        _db.Users.FirstOrDefault(u =&gt; u.Email == e); // DbContext never escapes
}</code></pre>
        <p><strong>Unit of Work.</strong> Tracks everything loaded and changed in a business transaction, then commits or rolls it back as one — what EF Core's <code>DbContext</code> does for you, or a transaction script does manually.</p>
        <p><strong>Dependency Injection.</strong> Dependencies are handed in from outside (constructor) instead of instantiated inside, enabling mocks and swaps. It's a pattern, not a framework — the container just automates the wiring.</p>
        <p><strong>When NOT to reach for any pattern:</strong> one implementation with no second use in sight (YAGNI, rule of three), a layer that adds nothing, patterns as decoration. Over-engineering is itself an anti-pattern.</p>`,
      cards: [
        { q: "Explain the Factory Method pattern.", a: "A method that decides which concrete class to instantiate, so callers depend on an abstraction instead of constructors — e.g. SenderFactory.forProvider(config) returning SendGrid or SES. Skip it when construction is a single new with no variation." },
        { q: "Explain the Builder pattern.", a: "Assembles a complex object step by step via a fluent API instead of telescoping constructors — Query.select().where().limit(). Skip it for objects with two fields." },
        { q: "How should you implement Singleton in backend code?", a: "Prefer the DI container's singleton scope over a hand-rolled getInstance(). A static singleton hides dependencies, blocks testing, and causes concurrency surprises." },
        { q: "Explain the Adapter pattern.", a: "Converts an external interface into the one your system expects — wrapping a vendor SMS SDK behind your own SmsSender port so the vendor can be swapped. It's deliberate indirection: don't adapt interfaces you own." },
        { q: "Explain the Facade pattern and how it differs from Adapter.", a: "One simplified entry point over a complicated subsystem (PaymentFacade.charge() hiding fraud-check + gateway + ledger). Adapter converts an existing interface; Facade hides complexity behind a new, simpler one." },
        { q: "Explain the Decorator pattern.", a: "Wraps a component to add behavior — logging, caching, retry — without modifying it: same interface, stacked responsibilities. For a single cross-cutting concern, plain middleware may be simpler." },
        { q: "Decorator vs Proxy?", a: "Decorator adds behavior around a component (same interface, stacked responsibilities). Proxy controls access to the real subject: lazy loading, access control, caching, remote calls." },
        { q: "What are DTOs and Mappers for?", a: "DTOs are inert transport objects at API boundaries; mappers convert between domain entities, DTOs, and persistence models. They keep internal structure out of your contracts, at the cost of mapping boilerplate." },
        { q: "Explain the Strategy pattern.", a: "Defines a family of interchangeable algorithms behind one interface; the caller picks one at runtime — payment gateways (CardStrategy, PayPalStrategy). Kill switch: when there is only ever one implementation (YAGNI)." },
        { q: "Strategy vs State?", a: "Structurally identical. Strategy: the algorithm is chosen from outside (caller/config). State: the object changes its own behavior as its internal state changes (Order in NEW/PAID/SHIPPED)." },
        { q: "Explain the Observer pattern and its risk.", a: "A subject emits events; observers subscribe without the subject knowing them — the conceptual root of domain events and message brokers. Risk: hidden flows that are hard to trace — keep events few and meaningful." },
        { q: "Explain Chain of Responsibility.", a: "A request passes through a pipeline of handlers, each deciding to act, mutate, or pass it along — HTTP middleware (auth → validation → handler) is the classic backend case." },
        { q: "Explain Template Method and its modern preference.", a: "A base class fixes the algorithm skeleton and lets subclasses override individual steps. Prefer composition (Strategy) when steps vary independently." },
        { q: "Explain the Repository pattern and its common misuse.", a: "Mediates between domain and persistence behind a collection-like interface (findByEmail()), so the domain never sees SQL, Mongo, or ORM types. Misuse: leaking ORM entities and query types through it." },
        { q: "Explain Unit of Work.", a: "Tracks everything loaded and changed in a business transaction, then commits or rolls back as one — what EF Core's DbContext does for you, or a transaction script does manually." },
        { q: "What is Dependency Injection, really?", a: "Dependencies handed in from outside (constructor) instead of instantiated inside, enabling mocks and swaps. It's a pattern, not a framework — the container just automates the wiring." }
      ],
      quiz: [
        { q: "An Order behaves differently in NEW, PAID, SHIPPED based on its own state. Which pattern?", options: ["Strategy", "State", "Adapter", "Facade"], answer: 1, explain: "State: the object changes its own behavior by internal state. Strategy is chosen from outside." },
        { q: "Wrapping a service to add retry without editing it is…", options: ["Proxy", "Decorator", "Facade", "Builder"], answer: 1, explain: "Decorator adds behavior around a component without modifying it." },
        { q: "The recommended way to get a Singleton is…", options: ["A static getInstance()", "The DI container's singleton scope", "A global variable", "A new instance each call"], answer: 1, explain: "Container-managed scope avoids hidden global state and keeps testability." },
        { q: "Fitting an external email SDK behind your own interface is…", options: ["Facade", "Adapter", "Strategy", "Observer"], answer: 1, explain: "Adapter converts an external interface to the one your system expects." },
        { q: "Code must create SendGrid or SES clients based on config, without callers knowing the concrete classes. Which pattern?", options: ["Factory Method", "Observer", "Template Method", "Proxy"], answer: 0, explain: "Factory Method encapsulates which concrete class gets instantiated behind an abstraction." },
        { q: "A request flows through auth → validation → handler, each able to stop the chain. This is…", options: ["Observer", "Chain of Responsibility", "Mediator", "Command"], answer: 1, explain: "Chain of Responsibility passes a request through handlers that act, mutate, or pass it along — HTTP middleware in essence." },
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
    },

    "nodejs": {
      title: "Node.js Runtime",
      track: "backend",
      icon: "🟩",
      blurb: "Node.js is a JavaScript runtime built on Chrome's V8 engine and libuv that executes code on a single thread with non-blocking, event-driven I/O — ideal for I/O-heavy services, and scaled horizontally via cluster or worker threads.",
      read: `
        <p><strong>One tick of the event loop:</strong> your JS runs on one thread. When the call stack empties, libuv works through the phases in order — <strong>timers</strong> (setTimeout), <strong>pending callbacks</strong>, the <strong>poll</strong> phase (completed I/O: fs, sockets), the <strong>check</strong> phase (setImmediate) — and between each macrotask the <strong>microtask queue</strong> (promise callbacks, queueMicrotask) drains <em>completely</em>. That ordering gives the classic result: <code>setTimeout(() =&gt; log(1)); Promise.resolve().then(() =&gt; log(2)); log(3)</code> prints <strong>3 → 2 → 1</strong> — sync first, then the microtask, then the timer.</p>
        <p><strong>Blocking the loop:</strong> sync fs calls, huge JSON.parse/stringify, CPU loops, catastrophic regex. Everything shares that single thread, so one blocked request stalls <em>every</em> request — Node is fast at coordinating I/O, not at doing CPU work. Push CPU off the loop (worker_threads) or into a queue.</p>
        <p><strong>Thread pool:</strong> libuv offloads fs, crypto, dns and zlib to 4 worker threads by default (UV_THREADPOOL_SIZE). That's why <code>readFileSync</code> blocks — you're synchronously waiting on a thread — while <code>readFile</code> returns immediately and the worker does the waiting. "Single-threaded" describes your JavaScript, not the runtime's I/O.</p>
        <p><strong>CPU work:</strong> <code>worker_threads</code> runs JavaScript on multiple threads inside one process, sharing memory via SharedArrayBuffer — right for CPU-bound work (hashing, image processing). <code>cluster</code> forks N whole processes (one per core) that share a server port — process-level scaling, isolation, and the rolling-restart unit. Processes for scale, threads for CPU.</p>
        <p><strong>Streams & backpressure:</strong> streams process data in chunks — readable, writable, duplex, transform — so a 2GB file flows through constant memory instead of being buffered whole. Backpressure: when the internal buffer passes highWaterMark, <code>write()</code> returns false, meaning the consumer (socket, HTTP) is slower than you're producing — pause and await <code>drain</code>, or let <code>pipeline()</code> pace it and handle errors/cleanup for you. <code>objectMode</code> streams carry objects instead of bytes.</p>
        <p><strong>Buffers & EventEmitter:</strong> a Buffer is a fixed-length block of raw bytes allocated outside V8's heap — how you read/write files, sockets and binary protocols without JS string overhead. EventEmitter (<code>on</code>/<code>emit</code>) is Node's in-process pub/sub that streams and servers are built on; its sharpest edge is that an <code>'error'</code> event with no listener <em>throws</em> and can crash the process.</p>
        <p><strong>npm & semver:</strong> <code>^</code> allows minor+patch upgrades, <code>~</code> only patch. The lockfile pins the exact resolved tree so every install (and CI, with npm ci) is reproducible — commit it. Audit dependencies: the registry is your supply chain.</p>
        <p><strong>Production hygiene:</strong> on SIGTERM, do a graceful shutdown — stop accepting new connections, finish in-flight requests, close DB pools, exit — and let PM2/Kubernetes restart you without dropping requests. Handle <code>uncaughtException</code>/<code>unhandledRejection</code> by logging and exiting: after a crash the process state is undefined; the supervisor's job is to restart, not to keep running. Config comes from env vars (12-factor); logs are streams.</p>`,
      cards: [
        { q: "How does the Node.js event loop work?", a: "Your JS runs on one thread; when the stack empties, libuv runs its phases — timers (setTimeout), pending, poll (completed I/O), check (setImmediate) — and between each macrotask the microtask queue (promise callbacks) drains fully. That ordering is why setTimeout(fn,0) fires after Promise.then: sync → microtask → timer." },
        { q: "What blocks the event loop and why is it fatal in Node?", a: "Sync fs calls, huge JSON.parse/stringify, CPU loops, bad regexes — they hold the single thread, so every other request waits. Node coordinates I/O; it doesn't parallelize compute. Offload to worker threads or a queue." },
        { q: "If Node is single-threaded, how do fs/crypto run in parallel?", a: "libuv's thread pool — 4 worker threads by default (UV_THREADPOOL_SIZE) — takes fs, crypto, dns and zlib work off the main thread. That's why readFileSync blocks (you synchronously wait on the worker) while readFile returns immediately." },
        { q: "cluster vs worker_threads?", a: "cluster forks N processes (one per core) that share one server port — process-level scaling, isolation, and the rolling-restart unit. worker_threads runs JavaScript on multiple threads within one process sharing memory (SharedArrayBuffer) — for CPU-bound work. Processes to scale, threads for CPU." },
        { q: "What is backpressure in streams?", a: "write() returning false means the internal buffer passed highWaterMark — the consumer (socket, HTTP) is slower than you're producing. Pause the producer and await drain, or use pipeline() which paces it and propagates errors. Otherwise buffers grow until you OOM." },
        { q: "Why streams instead of buffering whole payloads?", a: "Constant memory: a 2GB file through pipeline() flows in chunks (readable/transform/writable) instead of being loaded — or its JSON parsed — into RAM. objectMode streams carry objects rather than bytes." },
        { q: "What is a Buffer?", a: "A fixed-length block of raw bytes allocated outside V8's heap — how Node reads and writes files, sockets and binary protocols without JS string overhead. create with Buffer.alloc (zeroed) or Buffer.allocUnsafe (faster, uninitialized)." },
        { q: "What is EventEmitter — and its sharpest edge?", a: "Node's in-process pub/sub (on/emit) that streams and servers are built on. The sharp edge: an 'error' event with no listener throws — an unhandled error event can crash the process, so attach handlers (or use pipeline, which propagates errors)." },
        { q: "What do ^ and ~ mean in package.json, and why commit the lockfile?", a: "^ allows minor+patch upgrades, ~ only patch. The lockfile pins the exact resolved tree so every install — and CI with npm ci — is reproducible. Commit it and audit the tree: the registry is your supply chain." },
        { q: "What does graceful shutdown mean in Node?", a: "On SIGTERM: stop accepting new connections, finish in-flight requests, close DB pools and handles, then exit — so the load balancer and orchestrator restart you without dropping requests. It's the difference between a clean rollout and a blip." },
        { q: "How should you handle uncaughtException?", a: "Log it, clean up what you can, and exit — after a crash the process state is undefined (partially written data, broken invariants). Let PM2/Kubernetes restart you; don't try to keep serving from a corrupted process." }
      ],
      quiz: [
        { q: "An endpoint reads a 2GB file into memory with fs.readFileSync and parses it. Under load the service dies. Root cause?", options: ["Too few cluster workers", "Blocking the single event-loop thread + unbounded memory", "V8 garbage collection bug", "Missing thread pool"], answer: 1, explain: "readFileSync holds the one thread every request shares, and buffering gigabytes (or JSON.parse of them) spikes memory. Stream it with pipeline()." },
        { q: "Your API does heavy image resizing and the event loop stalls. Best fix?", options: ["Increase UV_THREADPOOL_SIZE to 128", "Move resizing to worker_threads or a queue", "Add more RAM", "Use promises everywhere"], answer: 1, explain: "CPU-bound work doesn't belong on the loop — the thread pool only covers fs/crypto/dns/zlib. worker_threads in-process, or a job queue/worker service." },
        { q: "The cluster module primarily gives you…", options: ["Parallel JS threads sharing memory", "N processes on N cores behind one port", "Async file I/O", "A thread pool for crypto"], answer: 1, explain: "Cluster forks whole processes sharing the server port — process-level scaling, isolation, and the rolling-restart unit." },
        { q: "write() on a stream keeps returning false. What is the stream telling you?", options: ["The stream is closed", "Backpressure: the consumer can't keep up — pause producing until drain", "You must retry the write", "The buffer is corrupted"], answer: 1, explain: "The internal buffer passed highWaterMark; keep writing and memory grows until OOM. Pause, await drain, or let pipeline() pace it." },
        { q: "An 'error' event fires on a stream with no error listener. Node…", options: ["Ignores it", "Throws — potentially crashing the process", "Emits a warning", "Retries the operation"], answer: 1, explain: "Unhandled 'error' events throw — attach error handlers or use pipeline(), which forwards errors to your promise chain." },
        { q: "uncaughtException fires. The correct response is…", options: ["Keep serving — it's just a warning", "Log, cleanup, and exit; let the supervisor restart", "Restart the event loop", "Swallow it with an empty handler"], answer: 1, explain: "After an uncaught exception the process may hold partial writes and broken state — exit cleanly and let PM2/Kubernetes restart you." }
      ]
    },

    "dotnet": {
      title: ".NET / C# for Back-End",
      track: "backend",
      icon: "⚙️",
      blurb: ".NET (with ASP.NET Core) is Microsoft's managed runtime and web framework: C# compiles to IL, runs on the CLR with the Kestrel web server, and ships a built-in DI container, EF Core ORM and middleware pipeline.",
      read: `
        <p><strong>Runtime:</strong> C# source compiles to Intermediate Language (IL) assemblies. The CLR JIT-compiles IL per method on first call and runs it with garbage collection and type safety — you write C#, the runtime manages memory and types. ASP.NET Core apps self-host on <strong>Kestrel</strong>, a cross-platform HTTP server that listens on sockets and parses requests; Nginx or IIS usually sit in front for TLS termination, static files and forwarding.</p>
        <p><strong>Middleware pipeline:</strong> the pipeline is a linked chain of <code>Func&lt;RequestDelegate, RequestDelegate&gt;</code>. Each component receives the <code>HttpContext</code> and the <em>next</em> delegate, so <code>app.Use((ctx, next) =&gt; { log(); await next(ctx); log(); })</code> can act <strong>both on the way in and on the way out</strong> — like an onion. "Short-circuiting" simply means not calling <code>next</code>: an auth middleware that returns 401 stops the request there, so routing/endpoints never run. Registration order <em>is</em> execution order.</p>
        <p><strong>Built-in DI & lifetimes:</strong> services are resolved from the container by constructor injection. <strong>Transient</strong> = a new instance on <em>every</em> resolve — twice in the same request means two objects. <strong>Scoped</strong> = one instance shared by everything resolved within the current HTTP request, disposed when it ends. <strong>Singleton</strong> = one instance for the app's lifetime, shared across requests and threads — only safe if it's thread-safe. Resolving a service from a scope shorter than its lifetime (or the reverse) is where bugs come from.</p>
        <p><strong>The captive dependency:</strong> a singleton's constructor runs <em>once</em>, on the first request. If it captures a scoped service there — the classic case is a scoped <code>DbContext</code> — every later request shares that first request's context: stale tracked entities, cross-request state leakage, and concurrency exceptions under load. Fix: inject <code>IServiceScopeFactory</code> and create a scope per unit of work.</p>
        <p><strong>EF Core:</strong> <code>DbContext</code> is Unit of Work + change tracker: it tracks loaded entities, translates LINQ (<code>IQueryable</code>) into SQL, and flushes changes as one transaction on <code>SaveChanges()</code>. Queries stay lazy — <code>IQueryable</code> builds SQL, enumeration executes it. Lazy-loading proxies issue a query <em>per navigation access</em>, so a loop over 100 orders = 1 + 100 queries (N+1); <code>.Include()</code> folds the relation into a single JOIN query, and <code>.Select()</code> projection fetches exactly the needed columns. Migrations are ordered, reversible C# snapshots of the model; apply them with <strong>expand-contract</strong> (add new column/table → deploy code that dual-writes → backfill → switch reads → drop old) so old and new code coexist during the rollout.</p>
        <p><strong>async/await:</strong> when an I/O-bound task hits <code>await</code>, the <em>thread is returned to the pool</em> while the operation runs — that's how one request scales without one thread per waiting request. <code>.Result/.Wait()</code> does the opposite: it blocks a pool thread waiting for a task whose continuation also needs a thread (deadlock with a sync context, starvation under load). For independent calls, <code>Task.WhenAll</code> starts them all immediately — total latency ≈ the slowest, not the sum. In library code use <code>ConfigureAwait(false)</code> to avoid capturing the request context.</p>
        <p><strong>Minimal APIs vs MVC:</strong> minimal APIs route endpoint-routed lambdas with binding and filters — less ceremony, the default for microservices and small services. MVC gives controllers, actions, model binding and conventions — more structure for large apps. Both share the same pipeline and DI container, so switching is a presentation choice, not a rearchitecture.</p>
        <p><strong>Configuration & options:</strong> <code>IConfiguration</code> merges appsettings.json, environment variables and secret stores (in that priority). The Options pattern binds typed <code>Options&lt;T&gt;</code> classes and validates them at startup (<code>ValidateDataAnnotations</code>) — failing fast at boot instead of throwing magic-string exceptions deep in a request.</p>`,
      cards: [
        { q: "What are the CLR, IL and Kestrel in one breath?", a: "C# source compiles to Intermediate Language (IL); the CLR JIT-compiles IL per method on first call and executes it with GC and type safety. ASP.NET Core apps self-host on Kestrel, a cross-platform HTTP server that listens on sockets and parses requests — typically fronted by Nginx or IIS for TLS and static files." },
        { q: "How does the ASP.NET Core middleware pipeline work?", a: "It's a linked chain of components: each receives the HttpContext and the next() delegate, so app.Use((ctx, next) => { log(); await next(ctx); log(); }) acts both on the way in and out — an onion. Short-circuiting = not calling next (auth returns 401, routing never runs). Registration order is execution order." },
        { q: "Explain the three DI service lifetimes.", a: "Transient: a new instance on every resolve — even twice inside one request. Scoped: one instance shared across everything resolved within the current HTTP request, disposed when it ends. Singleton: one for the app's lifetime, shared across requests and threads — only safe if thread-safe. The bug zone is resolving a service from a scope shorter or longer than its lifetime." },
        { q: "What is a captive dependency?", a: "A singleton's constructor runs once, on the first request — so a scoped service captured there (typically DbContext) is kept alive forever. Every later request shares that stale context: outdated tracked entities, leaked state, concurrency exceptions under load. Fix: inject IServiceScopeFactory and create a scope per unit of work." },
        { q: "What is DbContext in EF Core terms?", a: "Unit of Work + change tracker: it tracks loaded entities, translates LINQ (IQueryable) into SQL lazily — the query builds when declared, executes when enumerated — and flushes all changes as one transaction on SaveChanges(). Its scoped lifetime ties it to the HTTP request." },
        { q: "How does the classic EF Core N+1 happen and how do you fix it?", a: "Lazy-loading proxies issue one query per navigation access: a loop over 100 orders runs 1 query for the orders + 100 for order.Customer. .Include() eager-loads the relation as one JOIN query; .Select() projection fetches exactly the columns needed. IQueryable vs IEnumerable matters too — materialize too early and the filter runs in memory, not SQL." },
        { q: "Why are EF Core migrations more than schema scripts?", a: "Each migration is an ordered, reversible C# snapshot of the model that generates versioned SQL. Apply them with expand-contract for zero downtime: add the new column/table → deploy code that dual-writes → backfill → switch reads → drop the old — old and new code coexist through the rollout." },
        { q: "Why is .Result/.Wait() dangerous?", a: "Sync-over-async: the calling thread blocks until the task finishes, but the task's continuation also needs a thread. With a SynchronizationContext (classic ASP.NET) that's a deadlock; under load it's thread-pool starvation. await all the way down; ConfigureAwait(false) in libraries." },
        { q: "When Task.WhenAll vs sequential awaits?", a: "WhenAll starts all tasks immediately and awaits them concurrently — latency ≈ the slowest call. Sequential awaits serialize — latency ≈ the sum. Use it only when the calls are truly independent; shared mutable state still needs coordination." },
        { q: "Minimal APIs vs MVC controllers — when each?", a: "Minimal APIs: endpoint-routed lambdas with binding and filters, less ceremony — microservices and small services. MVC: controllers, actions, model binding, conventions — structure for large apps. Same middleware pipeline and DI container underneath, so it's a presentation choice." },
        { q: "What is the Options pattern?", a: "IConfiguration merges appsettings.json, environment variables and secrets; the Options pattern binds those into typed Options<T> classes validated at startup (ValidateDataAnnotations). Fail fast at boot with a clear error instead of magic strings throwing deep in a request." }
      ],
      quiz: [
        { q: "A singleton service injects a scoped DbContext. Over time it serves stale rows and throws concurrency errors. This is…", options: ["A thread pool leak", "A captive dependency", "An N+1 query", "A middleware ordering bug"], answer: 1, explain: "The singleton's constructor ran once, on the first request, capturing that request's scoped DbContext — every later request shares the stale instance. Inject IServiceScopeFactory and create a scope per unit of work." },
        { q: "An endpoint does three independent API calls with sequential awaits. Simplest performance win?", options: ["Wrap in Task.Run", "Task.WhenAll the three calls", "Make the service a singleton", "Add caching headers"], answer: 1, explain: "Sequential awaits pay three latencies in series; WhenAll starts all three immediately, so total latency ≈ the slowest call." },
        { q: "In ASP.NET Core, middleware registered after one that short-circuits will…", options: ["Run anyway in parallel", "Not run for that request", "Run twice", "Throw"], answer: 1, explain: "Short-circuiting = not calling next, so the chain stops — which is exactly why auth middleware sits before routing/endpoints." },
        { q: "Lazy-loading navigation properties inside a loop produces…", options: ["A deadlock", "N+1 queries", "A captive dependency", "View bloat"], answer: 1, explain: "Each navigation access is a separate lazy query: 1 + N round trips. .Include() folds the relation into a single JOIN query, or project with .Select()." },
        { q: "Scoped lifetime means…", options: ["One instance per resolve", "One instance per HTTP request", "One instance for the app lifetime", "One instance per thread"], answer: 1, explain: "Scoped ties the instance to the current HTTP request — right for DbContext-style per-request state; transient is per-resolve, singleton app-wide." },
        { q: "Calling .Result on an async method in a request can deadlock because…", options: ["The GC pauses", "It blocks the thread the continuation needs (sync-over-async)", "Kestrel forbids sync I/O", "Options aren't bound"], answer: 1, explain: "The caller blocks a pool thread waiting for a continuation that needs a thread — deadlock with a sync context, starvation under load. await all the way down." }
      ]
    },

    "db-advanced": {
      title: "Databases — Advanced",
      track: "backend",
      icon: "🧮",
      blurb: "Beyond the basics: schema design trade-offs (normalization vs denormalization), keys, views and materialized views, connection pooling, auditing patterns, and zero-downtime production migrations.",
      read: `
        <p><strong>Normalization (1NF–3NF):</strong> the normal forms progressively remove redundancy. <em>1NF</em>: every column holds a single atomic value — no comma-lists in a column. <em>2NF</em>: every non-key column depends on the <em>whole</em> composite key — no partial dependencies (order_line items keyed by (order_id, line_no), with product_name depending only on product_id). <em>3NF</em>: no transitive dependencies — a non-key column must not determine another non-key column (store product_name in products, not repeated in every order line). The payoff: <em>one fact, one place</em> — no update anomalies, where correcting a name in one row leaves stale copies elsewhere. The cost: joins. <em>Denormalize deliberately</em> for read-heavy hot paths — duplicated columns, precomputed counters, summary tables — but only with a sync strategy (events, triggers, or accepted staleness).</p>
        <p><strong>Keys:</strong> auto-increment integers are small and sequential — they append to the end of the B-Tree, so inserts stay cheap and pages stay dense. GUIDs are collision-free and generatable client-side (good for distributed writes), but <em>random</em> GUIDs scatter inserts across the index, fragmenting pages; at scale prefer ordered UUIDs (UUIDv7), which keep time-order locality. Natural keys (emails, SKUs) look clean until the business renames one — surrogate keys absorb that churn.</p>
        <p><strong>Views vs materialized views:</strong> a view is a stored <em>query</em> — always reflects current data, but pays the query cost on every read. A materialized view stores the query's <em>result</em> — reads are a single table scan, but the data is frozen until refreshed (REFRESH MATERIALIZED VIEW, or incremental refresh on a schedule). The trade-off is explicit: staleness for speed. Perfect for dashboards that aggregate millions of rows; wrong for anything needing per-request freshness.</p>
        <p><strong>Stored procedures:</strong> logic compiled inside the database — fewer round trips and set-oriented power, but it's hard to version (lives outside your repo), hard to test, hard to debug, and it splits the codebase across two runtimes. Modern default: <em>logic in the app, SQL for data</em>. Keep stored procedures for genuine bulk/set operations where round trips dominate; business rules belong in versioned application code.</p>
        <p><strong>Connection pooling:</strong> opening a connection costs TCP handshake + authentication + session setup — far more than a query. A pool keeps N connections open and hands them out. Sizing: for OLTP, <em>pool size ≈ core count per node</em> — more connections just move the queue into the database and add context-switching contention (Little's Law: queue time = concurrency ÷ throughput). Starvation symptom: requests hang, then time out "acquiring connection". First suspect is a <em>leak</em> — a code path that never closes/disposes a connection (or a long transaction holding one) — not a too-small pool. Raising the limit only delays the outage.</p>
        <p><strong>Soft deletes &amp; auditing:</strong> a <code>deleted_at</code> flag keeps rows recoverable, but it leaks into <em>every</em> query — every <code>SELECT</code>, <code>JOIN</code> and unique constraint must remember the filter, and the table grows forever. Audit trails (append-only change tables: who/what/when/old→new, or CDC reading the WAL) answer "who changed what when" <em>without</em> polluting the live model — the live table stays the single source of truth, the audit log is read-side history. For high-churn tables, hard deletes + an audit log beat soft deletes + forgotten filters.</p>
        <p><strong>Zero-downtime migrations (expand-contract):</strong> never run a destructive ALTER on the hot path during a release — old and new code run simultaneously. Expand: add the new column/table (nullable, unused) and deploy. Migrate: code dual-writes both shapes; backfill old rows. Switch: reads move to the new shape. Contract: once all instances are on the new code, drop the old column/table in a later deploy. Each step is deployable alone, so a rollback never corrupts data.</p>
        <p><strong>ORMs vs raw SQL:</strong> an ORM trades control for convenience and safety — typed queries, migrations, lazy relations — but hides the SQL: N+1 traps, generic plans, and queries you can't see. Drop to raw SQL for bulk operations, tuning-critical queries, window functions, and anything where the generated plan matters. Most mature codebases use both: ORM for CRUD, SQL for the hot path.</p>`,
      cards: [
        { q: "What do 1NF, 2NF and 3NF each eliminate?", a: "1NF: non-atomic values (lists in a column). 2NF: partial dependencies — columns that depend on only part of a composite key. 3NF: transitive dependencies — a non-key column determining another non-key column. The goal at every step is one fact in one place, so updates never leave stale copies." },
        { q: "When is denormalization the right call?", a: "Read-heavy hot paths where joins cost too much: duplicated columns, precomputed counters, summary tables. But only with a deliberate sync strategy (events, triggers) or accepted staleness — denormalization without a sync plan is just corruption waiting to happen." },
        { q: "Auto-increment int vs GUID primary keys?", a: "Ints: small, sequential — they append to the B-Tree, so inserts are cheap and pages stay dense. GUIDs: collision-free, client-generatable (great for distributed writes), but random ones scatter inserts and fragment the index — use ordered UUIDs (UUIDv7) for locality at scale." },
        { q: "View vs materialized view?", a: "A view is a stored query: always fresh, but pays the query cost on every read. A materialized view stores the result: reads are one table scan, but the data is frozen until refreshed — explicit staleness for speed. Right for dashboards, wrong for per-request freshness." },
        { q: "What's the modern take on stored procedures?", a: "Default: logic in the app — testable, versionable, debuggable — with SQL for data. Keep stored procedures for genuine bulk/set operations where round trips dominate. Business rules in stored procs live outside your repo and split the codebase across two runtimes." },
        { q: "Why do connections need pooling, and how do you size it?", a: "A connection costs TCP + auth + session setup — far more than a query — so a pool reuses them. For OLTP, size ≈ core count per node: more connections don't add throughput, they add queueing and contention inside the DB. Timeouts acquiring connections usually mean a leak, not a small pool." },
        { q: "Symptoms and cause of pool exhaustion?", a: "Requests hang, then time out waiting for a connection. The cause is usually a leak — a path that never closes/disposes a connection — or long transactions holding one open. Fix the leak first; raising the pool limit only delays the outage and shifts the queue into the database." },
        { q: "Trade-offs of soft deletes?", a: "deleted_at keeps rows recoverable, but it leaks into every query and constraint — someone always forgets the filter — and the table grows forever. For high-churn data, hard deletes + an audit log beat soft deletes + forgotten filters." },
        { q: "How do you audit changes without corrupting the model?", a: "Append-only audit tables (who/what/when/old→new) or CDC from the WAL: the live table stays the single source of truth, the history lives read-side. Never let two sources both claim to be 'the data'." },
        { q: "Explain expand-contract migrations.", a: "Zero-downtime schema change in deployable steps: expand (add nullable new column/table) → migrate (dual-write + backfill) → switch reads → contract (drop old in a later deploy). Each step works with both old and new code running — that's what makes rollback safe." },
        { q: "What does an ORM trade away vs raw SQL?", a: "Convenience and type safety for control: it hides the SQL, so you get N+1 traps, generic plans and invisible queries. Use raw SQL for bulk operations, hot-path tuning and window functions — ORM for CRUD, SQL where the plan matters." }
      ],
      quiz: [
        { q: "A dashboard aggregates millions of rows on every load. Cheapest durable fix?", options: ["Add an index on every column", "A materialized view refreshed on schedule", "Move to NoSQL", "Increase the connection pool"], answer: 1, explain: "Precompute the aggregation and pay one refresh instead of the full query on every read. A plain view still runs the query per load." },
        { q: "Requests time out 'acquiring connection' after a release. First place to look?", options: ["Raise the pool limit", "A leaked/undisposed connection path", "Add read replicas", "Rewrite the ORM queries"], answer: 1, explain: "Pool exhaustion is a symptom; the cause is usually a leak or long transactions. Raising the limit just moves the queue into the database." },
        { q: "Random GUID keys slow down inserts at scale because…", options: ["They're too wide to parse", "Random insertion fragments the B-tree index", "The DB can't index strings", "They break replication"], answer: 1, explain: "Ordered keys append to the index; random GUIDs scatter writes across pages, fragmenting them. Ordered UUIDs (v7) restore locality." },
        { q: "You must rename a busy table with zero downtime. The pattern is…", options: ["One migration: rename + deploy together", "Expand-contract: add new, dual-write, backfill, switch, drop", "Take the maintenance window", "Use a view alias forever"], answer: 1, explain: "Deploy-compatible steps (expand → migrate → contract) so old and new code coexist during the rollout — each step independently rollback-able." },
        { q: "Every query forgetting WHERE deleted_at IS NULL is a smell of…", options: ["Poor indexing", "Soft-delete tax — consider audit tables + hard deletes", "A normalization bug", "Pool exhaustion"], answer: 1, explain: "Soft deletes leak into every access path; high-churn tables usually do better with real deletes plus an append-only audit trail." },
        { q: "3NF removes which dependency?", options: ["Repeating groups", "Partial dependency on a composite key", "Transitive non-key dependency", "Foreign keys"], answer: 2, explain: "3NF eliminates non-key → non-key dependencies; 2NF handles the partial key dependencies and 1NF the repeating groups." }
      ]
    },

    "js-core": {
      title: "JavaScript Core",
      track: "frontend",
      icon: "🟨",
      blurb: "JavaScript is the language of the web: single-threaded with an event loop, prototype-based with closures and first-class functions. This topic covers the semantics interviews probe — scopes, this, prototypes, and async.",
      read: `
        <p><strong>Scoping: var/let/const & TDZ:</strong> <code>var</code> is function-scoped and hoisted as <code>undefined</code>; <code>let</code>/<code>const</code> are block-scoped and hoisted but <em>uninitialized</em> — reading them before their line executes throws a ReferenceError (the <strong>temporal dead zone</strong>). Default to <code>const</code>, <code>let</code> when you reassign, never <code>var</code>.</p>
        <pre><code>console.log(a); // undefined (var hoisted, no error)
var a = 1;

console.log(b); // ReferenceError — temporal dead zone
let b = 2;</code></pre>
        <p><strong>Closures:</strong> a function keeps <em>live</em> access to the scope where it was created, even after that scope finished executing. They power module privacy (data hidden from outside), memoization caches, and event handlers that "remember" their setup. The classic bug: closures created in a loop all share the same loop variable — fix with <code>let</code> (per-iteration binding) or a factory function.</p>
        <pre><code>// The classic loop bug — all three log 3:
for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i));

// With let, each iteration gets its own binding:
for (let i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i)); // 0 1 2

// The module pattern — count is private, only inc() is exposed:
function makeCounter() {
    let count = 0;                          // hidden in the closure
    return () =&gt; ++count;                  // the closure keeps it alive
}</code></pre>
        <p><strong>this:</strong> resolved <em>at call time</em>, not definition time. A method call passes the object, a plain call gives <code>undefined</code> (or the global object in sloppy mode), <code>new</code> gives the new instance, and <code>.call/.apply/.bind</code> set it explicitly. Arrow functions are the exception: they have no own <code>this</code> — they capture the enclosing scope's, which is why they're perfect as callbacks and broken as object methods that need their own <code>this</code>.</p>
        <pre><code>const user = {
    name: 'Ana',
    regular() { return this.name; },       // this = user → 'Ana'
    arrow: () =&gt; this.name,              // this = module/global → undefined
};
user.regular();   // 'Ana'
user.arrow();     // undefined — arrows capture the ENCLOSING scope</code></pre>
        <p><strong>Prototypes & classes:</strong> every object delegates to a <strong>prototype chain</strong>; property lookup walks up until it finds the property or hits null. <code>class</code> is sugar over prototype-based constructors: methods live on the shared prototype (one copy for all instances), not copied per object.</p>
        <pre><code>class Animal {
    constructor(name) { this.name = name; }         // own property per instance
    speak() { return this.name + " makes a sound"; } // on Animal.prototype
}
class Dog extends Animal {
    speak() { return this.name + " barks"; }        // shadows the parent method
}
new Dog('Rex').speak(); // 'Rex barks'</code></pre>
        <p><strong>Event loop:</strong> JS runs one call stack to completion. When it empties, the engine drains the <strong>microtask queue</strong> (promise callbacks, <code>queueMicrotask</code>) <em>completely</em>, then takes the next <strong>macrotask</strong> (timers, I/O callbacks). Since microtasks run between every macrotask, a promise continuation always beats a <code>setTimeout(0)</code> — the classic ordering question.</p>
        <pre><code>console.log('A');                              // 1 · sync
setTimeout(() =&gt; console.log('B'), 0);         // 4 · macrotask (timer)
Promise.resolve().then(() =&gt; console.log('C')); // 3 · microtask
queueMicrotask(() =&gt; console.log('D'));        // 3 · microtask
console.log('E');                              // 2 · sync
// Output: A E C D B — microtasks drain before the timer</code></pre>
        <p><strong>Promises & async/await:</strong> an <code>async</code> function always returns a promise; <code>await</code> is <code>.then()</code> with synchronous-looking syntax, and errors flow to <code>try/catch</code> instead of <code>.catch</code>. For independent work, <code>Promise.all</code> runs everything concurrently and rejects on the first failure; <code>allSettled</code> waits for every outcome — use it when partial failure is acceptable.</p>
        <pre><code>// Sequential: 3 calls × latency = slow
await fetchUser(); await fetchOrders(); await fetchPrefs();

// Concurrent: one round of latency
const [user, orders, prefs] = await Promise.all([
    fetchUser(), fetchOrders(), fetchPrefs(),
]);

// Partial failure is OK — get every outcome
const results = await Promise.allSettled([a(), b(), c()]);
results.find(r =&gt; r.status === 'rejected')?.reason;</code></pre>
        <p><strong>Equality:</strong> <code>==</code> coerces types before comparing (<code>'1' == 1</code> is true, <code>[] == false</code> is true); <code>===</code> compares without coercion. Use <code>===</code> always — the one sanctioned exception is <code>x == null</code>, a deliberate idiom matching both <code>null</code> and <code>undefined</code>.</p>
        <p><strong>Copies:</strong> <code>{...obj}</code> and <code>Object.assign</code> copy <em>one level</em> — nested objects are shared references, which is the #1 "I mutated my state" bug (React included). Use <code>structuredClone()</code> for a deep, independent copy.</p>
        <pre><code>const src = { user: { name: 'Ana' } };
const copy = { ...src };            // shallow: copy.user === src.user
copy.user.name = 'Beto';
console.log(src.user.name);         // 'Beto' — the source changed too!

const deep = structuredClone(src);  // truly independent</code></pre>
        <p><strong>Debounce vs throttle:</strong> debounce <em>waits for silence</em> — fires once after activity stops (search-as-you-type, resize handlers). Throttle <em>caps the rate</em> — fires at most once per interval during continuous activity (scroll, mousemove). Debounce = "do it when they're done", throttle = "do it at most this often".</p>
        <pre><code>// Debounce: wait 300ms after the LAST keystroke
const onType = debounce(q =&gt; search(q), 300);

// Throttle: run immediately, then at most once per 100ms
const onScroll = throttle(updatePosition, 100);</code></pre>
        <p><strong>Modules:</strong> ES modules (<code>import</code>/<code>export</code>) are <em>static</em> — dependencies are known at parse time, which enables tree-shaking (dead code removal) and static analysis. CommonJS (<code>require</code>) is dynamic and synchronous, resolved at runtime — bundlers must ship everything because they can't know what will be required.</p>`,
      cards: [
        { q: "What is the temporal dead zone?", a: "let/const declarations are hoisted but stay uninitialized until their line executes; reading them in between throws a ReferenceError. var, by contrast, is hoisted as undefined. It's why console.log(x) before let x = 1 crashes but before var x = 1 prints undefined." },
        { q: "What is a closure and what's it good for?", a: "A function keeps live access to the scope where it was created, even after that scope finished. Powers module privacy (makeCounter hides count), memoization, and handlers that remember setup. The classic bug: closures in a loop sharing one loop variable — fix with let (per-iteration binding) or a factory." },
        { q: "How is this determined?", a: "At call time: method call → the object; plain call → undefined (global in sloppy mode); new → the new instance; call/apply/bind → explicit. Arrow functions have no own this — they capture the enclosing scope's, which is why they work as callbacks and break as object methods." },
        { q: "Why do arrow functions break as object methods but work as callbacks?", a: "They capture the enclosing scope's this instead of having their own. As a callback that's exactly right (the surrounding this survives into the handler); as obj.method() you get the outer this, not obj — so this.name inside the arrow isn't the object's name." },
        { q: "How do classes relate to prototypes?", a: "class is sugar over prototype-based constructors: the constructor sets own properties per instance, methods live on the shared prototype (one copy for all instances), and property lookup walks the prototype chain until found or null." },
        { q: "Microtasks vs macrotasks — who wins?", a: "After the current stack empties, the entire microtask queue (promise callbacks, queueMicrotask) drains before any macrotask (setTimeout, I/O). Hence Promise.then always fires before setTimeout(fn, 0) — and a microtask loop starves all timers." },
        { q: "Promise.all vs allSettled?", a: "all runs the promises concurrently and rejects on the first failure, discarding the rest — use it for together-or-nothing. allSettled waits for every outcome and returns {status, value/reason} per promise — for independent work where partial failure is acceptable." },
        { q: "== vs === and the one allowed exception?", a: "== coerces types before comparing ('1' == 1 and [] == false are true); === doesn't. Use === always, except x == null — the deliberate idiom matching both null and undefined in one comparison." },
        { q: "Why does spreading an object not fully copy it?", a: "Spread and Object.assign copy one level: nested objects are shared references, so mutating copy.user.name also mutates source.user.name — the #1 React state bug. Use structuredClone() when you need a truly independent deep copy." },
        { q: "Debounce vs throttle?", a: "Debounce waits for silence — it fires once after activity stops (search-as-you-type, resize). Throttle caps the rate — at most once per interval during continuous activity (scroll, mousemove). 'When they're done' vs 'at most this often'." },
        { q: "Why are ES modules tree-shakeable when CommonJS isn't?", a: "import/export is static — dependencies are known at parse time, so bundlers can drop unused exports. require() is dynamic and runtime-resolved, so everything must ship. ESM also gives live bindings and top-level await." }
      ],
      quiz: [
        { q: "console.log(x) one line above let x = 1 throws. Why?", options: ["var hoisting", "The temporal dead zone", "Strict mode", "A closure bug"], answer: 1, explain: "let/const are hoisted but uninitialized until execution reaches them — reading earlier is a ReferenceError. var would print undefined instead." },
        { q: "Order of logs: setTimeout(()=>log(1)); Promise.resolve().then(()=>log(2)); log(3)?", options: ["1 2 3", "3 2 1", "3 1 2", "2 3 1"], answer: 1, explain: "Sync 3 first; then the microtask queue drains (2) before any timer macrotask (1)." },
        { q: "const copy = {...user}; copy.address.city = 'X'. What happens to user.address.city?", options: ["Unchanged — spread copies everything", "Changes too — nested objects are shared", "Throws", "Undefined"], answer: 1, explain: "Spread is one level deep: the inner object is the same reference. Use structuredClone for independence." },
        { q: "Three independent API calls must all succeed together. Use…", options: ["Sequential awaits", "Promise.all", "Promise.allSettled", "setTimeout"], answer: 1, explain: "all runs them concurrently and rejects on the first failure — the together-or-nothing semantics." },
        { q: "obj = { name: 'a', greet: () => this.name }. greet() returns…", options: ["'a'", "undefined — arrows capture the enclosing this", "Throws", "The global object"], answer: 1, explain: "Arrow functions have no own this; the method reads the outer scope's binding, not obj." },
        { q: "Search-as-you-type should fire the query…", options: ["On every keystroke", "Debounced — after typing pauses", "Throttled at 1/s", "On blur only"], answer: 1, explain: "Debounce waits for silence so you query intentions, not keystrokes; throttle suits continuous streams like scroll." }
      ]
    },

    "css-web": {
      title: "CSS & Layout",
      track: "frontend",
      icon: "🎨",
      blurb: "CSS describes presentation on the web. Mastering it means the cascade and specificity, the box model, and modern layout with Flexbox and Grid — plus responsive units and when (and why) elements stack the way they do.",
      read: `
        <p><strong>Box model:</strong> every element is content → padding → border → margin. <code>box-sizing: border-box</code> makes <code>width</code>/<code>height</code> <em>include</em> padding and border, so a 100px element is actually 100px — set it globally, because the default <code>content-box</code> adds padding and border <em>on top</em>, and layouts drift. Vertical margins of adjacent siblings <strong>collapse</strong> into one margin (the larger of the two); padding never does.</p>
        <pre><code>/* content-box (default): 100px + 2×10px padding + 2×2px border = 124px */
.box { width: 100px; padding: 10px; border: 2px solid; }

/* border-box: the box IS 100px, padding inside */
* { box-sizing: border-box; }
.box { width: 100px; padding: 10px; } /* renders exactly 100px */</code></pre>
        <p><strong>Cascade & specificity:</strong> when rules compete, CSS resolves by <em>origin</em> (author vs user-agent vs inline), then <strong>specificity</strong> — inline (1000) &gt; id (100) &gt; class/attribute/pseudo-class (10) &gt; element (1) — then <em>source order</em> for ties. One id in a selector outweighs any number of classes, which is why <code>!important</code> wars start: someone needs to beat a specificity they can't outrank. Keep selectors low-specificity and class-based.</p>
        <pre><code>/* Specificity scores: 100+10+1 vs 10 vs 1 */
#nav .item a      /* 0-1-1-1 */
.item a           /* 0-0-1-1 */
a                 /* 0-0-0-1 */</code></pre>
        <p><strong>Flexbox vs Grid:</strong> Flexbox is <em>one-dimensional</em> and content-driven — it distributes items along a row (or column) and lets content size decide: toolbars, card rows, button groups. Grid is <em>two-dimensional</em> and layout-driven — rows and columns defined first, items placed into cells: page shells, dashboards. They compose: <code>display: grid</code> on the page, <code>display: flex</code> inside each card.</p>
        <pre><code>/* Grid: the page shell — two columns, rows defined first */
.page { display: grid; grid-template-columns: 240px 1fr; grid-template-rows: 60px 1fr; }

/* Flexbox: the toolbar inside — one dimension, content-driven */
.toolbar { display: flex; gap: 12px; justify-content: space-between; }</code></pre>
        <p><strong>Positioning:</strong> <code>relative</code> offsets the element from itself but <em>keeps its space</em> in the flow; <code>absolute</code> removes it from the flow, positioned against the nearest <em>positioned</em> ancestor (or the page if none); <code>fixed</code> pins it to the viewport; <code>sticky</code> scrolls normally and then sticks at its threshold — the scroll-spy header pattern.</p>
        <pre><code>.card        { position: relative; }   /* anchor for the badge */
.badge       { position: absolute; top: 8px; right: 8px; }
.modal       { position: fixed; inset: 0; }    /* viewport overlay */
.toc         { position: sticky; top: 0; }    /* sticks while scrolling */</code></pre>
        <p><strong>Stacking contexts & z-index:</strong> <code>z-index</code> only compares elements <em>within the same stacking context</em>. Transform, opacity &lt; 1, filter, position+z-index and others each <em>create</em> a new context — and everything inside is locked into that context's league. "z-index: 9999 doesn't work" almost always means a parent created a context that traps the element below a sibling context.</p>
        <pre><code>.parent { transform: translateZ(0); } /* creates a stacking context */
.child  { position: relative; z-index: 9999; } /* still trapped below .sibling */</code></pre>
        <p><strong>Units & responsive:</strong> <code>rem</code> scales with the root font size — it respects the user's browser font setting, so use it for type and spacing; <code>em</code> is relative to the element's own font and compounds through nesting; <code>px</code> is fixed (fine for borders, poor for type); <code>vw/vh</code> track the viewport. <strong>Media queries</strong> adapt to the <em>viewport</em> (page-level breakpoints); <strong>container queries</strong> adapt to the component's <em>own box</em> — the component-era primitive, so a card responds whether it sits in a narrow sidebar or the main column.</p>
        <p><strong>Pseudo-classes vs pseudo-elements:</strong> <code>:hover</code>, <code>:focus</code>, <code>:nth-child()</code> select <em>existing</em> elements in a state; <code>::before</code>/<code>::after</code> insert <em>phantom children</em> inside an element (they require the <code>content</code> property, even empty) — used for decorations, badges, and clearfixes.</p>
        <pre><code>.btn:hover        { }          /* pseudo-class: state of an existing element */
.card::before     { content: ""; } /* pseudo-element: phantom child, needs content */</code></pre>
        <p><strong>Animation costs:</strong> <code>transition</code> animates between states; <code>@keyframes</code> sequences steps. Only <code>transform</code> and <code>opacity</code> are cheap — the compositor runs them on the GPU without touching layout. Animating <code>top</code>/<code>left</code>/<code>width</code> forces a <em>reflow</em> every frame: jank. Animate transform/opacity; reserve layout properties for non-animated changes.</p>
        <p><strong>Modern CSS:</strong> <code>:has()</code> is the parent selector (<code>.card:has(img)</code> styles a card that contains an image); <code>clamp()</code> gives fluid values with bounds (<code>font-size: clamp(1rem, 2.5vw, 1.5rem)</code>); native <em>nesting</em> removes preprocessor need; <code>gap</code> works in flexbox; custom properties (<code>--token</code>) power theming without a rebuild.</p>`,
      cards: [
        { q: "What does box-sizing: border-box change?", a: "width/height include padding and border, so a width: 100px element is exactly 100px instead of 124px. Set it globally (*) — the content-box default makes layouts drift as padding grows." },
        { q: "How does the cascade resolve competing rules?", a: "Origin → specificity (inline > id > class/attr/pseudo-class > element) → source order. One id (100) outweighs any number of classes (10 each) — that's what drives people to !important wars. Keep selectors low and class-based." },
        { q: "When Flexbox, when Grid?", a: "Flexbox: one dimension, content-driven — toolbars, card rows, button groups. Grid: two dimensions, layout-driven — page shells, dashboards. Compose: grid the page, flex inside components." },
        { q: "relative vs absolute vs fixed vs sticky?", a: "Relative offsets from itself but keeps its space in the flow. Absolute leaves the flow, positioned vs the nearest positioned ancestor. Fixed pins to the viewport. Sticky scrolls normally, then sticks at its threshold — the scroll-spy header pattern." },
        { q: "Why does z-index: 9999 sometimes do nothing?", a: "z-index compares only within a stacking context, and transform/opacity<1/position+z-index each create one — a parent context traps the element below sibling contexts regardless of its number." },
        { q: "rem vs em vs px?", a: "rem scales with the root font size (respects user browser settings — type and spacing); em is relative to the element's own font (compounds through nesting); px is fixed (fine for borders/hairlines, poor for type)." },
        { q: "Media query vs container query?", a: "Media queries respond to the viewport — page-level breakpoints. Container queries respond to the component's own box — so a card adapts whether it sits in a narrow sidebar or the main column. The component-era primitive." },
        { q: "Pseudo-class vs pseudo-element?", a: ":hover/:focus/:nth-child() select existing elements in a state; ::before/::after insert phantom children inside an element — they require the content property (even empty) to render." },
        { q: "Which CSS properties are cheap to animate, and why?", a: "transform and opacity — the compositor runs them on the GPU without layout. Animating top/left/width forces a reflow every frame: jank. Animate transform/opacity; change layout properties non-animated." },
        { q: "What does clamp() give you?", a: "Fluid values with bounds: font-size: clamp(1rem, 2.5vw, 1.5rem) scales with the viewport but never below 1rem or above 1.5rem — responsive type without media queries." },
        { q: "What is :has()?", a: "The parent selector: .card:has(img) styles a card that contains an image — previously impossible without JS or extra classes. It finally lets CSS select upward." }
      ],
      quiz: [
        { q: "A modal must overlay everything but z-index: 9999 loses to a header. Most likely cause?", options: ["Modal needs position: fixed", "A parent stacking context traps the modal", "Browsers cap z-index at 9999", "The header has !important"], answer: 1, explain: "z-index compares within a stacking context; a transformed/positioned ancestor isolates the modal. Restructure contexts or move the modal." },
        { q: "Page shell (sidebar + main + footer bands) — best tool?", options: ["Floats", "Flexbox", "CSS Grid", "Tables"], answer: 2, explain: "Two-dimensional, layout-driven structure is Grid's job; Flexbox handles the one-dimensional pieces inside." },
        { q: "Your 60fps animation janks. It animates…", options: ["transform", "opacity", "top and width", "color"], answer: 2, explain: "top/width trigger reflow per frame; transform/opacity are compositor-only. Animate those." },
        { q: "A card component must adapt when placed in a narrow sidebar. Cleanest modern approach?", options: ["More media queries", "A container query", "!important overrides", "Duplicate the component"], answer: 1, explain: "Container queries let the component respond to its own box instead of the viewport." },
        { q: "width: 100px + padding: 10px + border: 2px renders 100px wide when…", options: ["box-sizing: content-box (default)", "box-sizing: border-box", "display: flex", "Always"], answer: 1, explain: "border-box includes padding and border in the declared width; content-box adds them on top (124px)." },
        { q: "::before does nothing. The usual reason?", options: ["Missing z-index", "Missing the content property", "Wrong selector order", "Flexbox override"], answer: 1, explain: "Pseudo-elements require content (even an empty string) to render at all." }
      ]
    },

    "web-rt": {
      title: "WebSockets & Real-Time",
      track: "frontend",
      icon: "📡",
      blurb: "WebSockets are a persistent, bidirectional TCP channel opened through one HTTP upgrade — the right tool when the server must push to the client instantly. Choosing the transport (polling, SSE, WS) is the real interview question.",
      read: `
        <table><thead><tr><th>Transport</th><th>Direction</th><th>Trade-off</th></tr></thead><tbody>
        <tr><td>Short polling</td><td>Client pulls</td><td>Trivial; latency = interval, wasteful requests</td></tr>
        <tr><td>Long polling</td><td>Client pulls, server holds</td><td>Near-real-time; each message costs a reconnect, header overhead</td></tr>
        <tr><td>SSE</td><td>Server → client only</td><td>Simple, HTTP-native, auto-reconnect; one-way, limited concurrent connections per browser over HTTP/1.1</td></tr>
        <tr><td>WebSocket</td><td>Bi-directional</td><td>Low latency both ways after one handshake; you own the protocol</td></tr>
        </tbody></table>
        <p><strong>Handshake:</strong> an HTTP GET with Upgrade: websocket + a random Sec-WebSocket-Key; the server answers 101 Switching Protocols. Use wss:// (TLS) always — ws:// is cleartext and blocked on HTTPS pages.</p>
        <p><strong>Reliability is yours:</strong> heartbeats/ping-pong to detect half-open connections; reconnect with exponential backoff + jitter; replay missed events via an event id or fetch-on-reconnect; guard against out-of-order delivery.</p>
        <p><strong>Scaling:</strong> any server instance can serve any client's handshake (sticky sessions), but fan-out needs a shared bus — Redis pub/sub (or a broker) between instances; rooms/groups route messages to the right subset.</p>
        <p><strong>Socket.IO vs raw WS:</strong> a library adding rooms, automatic fallbacks, acks and reconnection logic — at the cost of a custom protocol (both ends must be Socket.IO). Raw WS stays when you need plain standards or non-JS clients.</p>
        <p><strong>Backpressure & size:</strong> buffer outgoing messages and slow down on highWaterMark; chunk or move big payloads to object storage + send a reference — don't push megabytes through the socket.</p>
        <p><strong>Auth:</strong> browsers can't set custom headers on WS — pass a short-lived token as query param/subprotocol at connect, validate during the handshake, and reject with 401 before the upgrade completes.</p>
        <p><strong>When NOT WebSockets:</strong> request/response shaped work (plain HTTP), server-only streams (SSE is simpler), or rare updates (polling wins). WS pays off for true bidirectional urgency — chat, presence, collaborative editing, live dashboards.</p>`,
      cards: [
        { q: "WebSocket vs SSE vs long polling?", a: "Long polling: client pulls, server holds the request open — near-real-time but each message costs a reconnect. SSE: simple one-way server→client stream over HTTP with auto-reconnect. WebSocket: persistent bidirectional channel after one handshake — you own the protocol." },
        { q: "Describe the WebSocket handshake.", a: "An HTTP GET with Upgrade: websocket and a Sec-WebSocket-Key; the server validates and answers 101 Switching Protocols — the TCP connection then speaks WS frames instead of HTTP." },
        { q: "Why wss:// instead of ws://?", a: "wss is WS over TLS: encrypted, and the only option from HTTPS pages — browsers block cleartext ws:// there." },
        { q: "What reliability do you build yourself on WS?", a: "Heartbeats/ping-pong to detect dead connections, reconnect with exponential backoff + jitter, replay of missed events (event ids or fetch-on-reconnect), and ordering guards." },
        { q: "Why do half-open connections need heartbeats?", a: "TCP can stay 'established' after a silent network drop; without ping-pong timeouts you keep a dead session and never learn the client is gone." },
        { q: "How do you scale WebSockets across instances?", a: "Any node can hold any connection (sticky sessions simplify), and a shared bus — Redis pub/sub — carries fan-out so instance A can push to a client connected to instance B. Rooms route subsets." },
        { q: "What does Socket.IO add over raw WS?", a: "Rooms, fallback transports, acks, automatic reconnection and buffering — in exchange for its custom protocol (both ends must be Socket.IO)." },
        { q: "How do you handle backpressure on a socket?", a: "Watch the send buffer/highWaterMark and pause or drop when the consumer is slow; chunk large payloads or ship a storage reference instead of megabytes." },
        { q: "How do you authenticate a WS connection?", a: "Browsers can't set custom headers on upgrades — pass a short-lived token via query param or subprotocol and validate during the handshake, rejecting with 401 before the upgrade completes." },
        { q: "When should you NOT use WebSockets?", a: "Request/response shapes (plain HTTP), server-only streams (SSE is simpler and HTTP-native), or rare updates (polling is fine). WS pays for genuinely bidirectional, latency-sensitive work." }
      ],
      quiz: [
        { q: "Server must stream prices to the client; the client sends nothing back. Simplest correct transport?", options: ["WebSocket", "Server-Sent Events", "Long polling", "gRPC streaming"], answer: 1, explain: "One-way server→client is exactly SSE: HTTP-native, auto-reconnect, no custom protocol to own." },
        { q: "Two app instances behind a load balancer; a user's messages must reach their socket on the other node. Standard fix?", options: ["Sticky sessions only", "A shared pub/sub bus like Redis between instances", "Direct instance-to-instance HTTP", "Client connects to both"], answer: 1, explain: "The bus carries fan-out across nodes; stickiness alone doesn't route messages between processes." },
        { q: "Sockets die silently behind flaky mobile networks. Missing piece?", options: ["Bigger buffers", "Heartbeat ping/pong with timeouts", "HTTP/2", "Reconnect on page refresh"], answer: 1, explain: "Half-open TCP connections look alive; periodic pings detect them so you can reconnect (with backoff)." },
        { q: "You must reject unauthenticated WS clients. Where?", options: ["After connecting, close the socket", "During the handshake, before the upgrade completes", "On the first message", "In the browser"], answer: 1, explain: "Validate the token during the upgrade request and return 401 — don't accept unauthenticated channels." },
        { q: "A dashboard updates once an hour. Best transport?", options: ["WebSocket", "SSE", "Polling / refetch on focus", "Long polling"], answer: 2, explain: "Rare updates don't justify a persistent channel — poll or refetch on visibility." },
        { q: "Pushing 50MB files over WS is a bad idea because…", options: ["WS frames can't exceed 64KB", "It blocks the channel and defeats backpressure; send a reference and download via HTTP", "Browsers forbid binary WS", "TLS doesn't cover binary"], answer: 1, explain: "Big payloads monopolize the connection and buffers — upload to storage and push the URL." }
      ]
    },

    "http": {
      title: "HTTP & Networking",
      track: "frontend",
      icon: "🔗",
      blurb: "HTTP is the request/response protocol of the web: a client sends a method, headers and optional body; a server answers with a status, headers and body. Knowing versions, caching, CORS, cookies and TLS is what lets you debug real network problems.",
      read: `
        <p><strong>Anatomy of a request:</strong> the client sends a method and path, headers, and an optional body; the server answers with a status code, headers, and an optional body. HTTP is <em>stateless</em> — the server remembers nothing between requests, which is exactly why cookies and tokens exist: state lives on the client or in an explicit store.</p>
        <pre><code>GET /orders/42 HTTP/1.1
Host: api.shop.com
Authorization: Bearer eyJhbGci...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: private, max-age=60

{ "id": 42, "status": "shipped" }</code></pre>
        <table><thead><tr><th>Version</th><th>Transport</th><th>Key property / trade-off</th></tr></thead><tbody>
        <tr><td>HTTP/1.1</td><td>TCP</td><td>One request per connection at a time (pipelining was broken in practice) — browsers open ~6 parallel connections per host; keep-alive avoids re-handshaking</td></tr>
        <tr><td>HTTP/2</td><td>TCP</td><td>Binary framing + <strong>multiplexing</strong> many streams over one connection; per-stream flow control; still blocked when a TCP packet is lost (transport-level head-of-line)</td></tr>
        <tr><td>HTTP/3</td><td>QUIC over UDP</td><td>Streams recover independently (no TCP head-of-line), 0/1-RTT handshakes, connection migration on network change</td></tr>
        </tbody></table>
        <p><strong>Caching (the cheapest performance win):</strong> <code>Cache-Control: max-age=3600</code> lets the client reuse a response for an hour without asking; <code>no-cache</code> means "store it but revalidate every time"; <code>no-store</code> means "never store". Revalidation uses <code>ETag</code>: the client sends <code>If-None-Match</code>, the server answers <code>304 Not Modified</code> with no body when nothing changed — saving bandwidth, not a round trip.</p>
        <pre><code>GET /avatar.png
If-None-Match: "abc123"

HTTP/1.1 304 Not Modified
ETag: "abc123"   // no body sent</code></pre>
        <p><strong>CORS — why the browser blocks your fetch:</strong> the <em>same-origin policy</em> stops scripts from reading responses of another origin (scheme + host + port). Cross-origin reads need explicit server permission via <code>Access-Control-*</code> headers. Requests that are not "simple" (methods like PUT/DELETE, custom headers, <code>Content-Type: application/json</code>) trigger a <strong>preflight</strong>: the browser first sends <code>OPTIONS</code>, and only if the server approves does the real request go.</p>
        <pre><code>Browser                          api.other.com
  │  OPTIONS /orders                 │
  │  Origin: https://app.shop.com    │
  │  Access-Control-Request-Method: PUT
  │ ───────────────────────────────► │
  │  204 + Access-Control-Allow-Origin: https://app.shop.com
  │        Access-Control-Allow-Methods: PUT
  │        Access-Control-Allow-Headers: content-type
  │        Access-Control-Max-Age: 600   (cache preflight 10 min)
  │ ◄─────────────────────────────── │
  │  PUT /orders (the real request)  │
  │ ───────────────────────────────► │</code></pre>
        <p><strong>CORS gotchas to name out loud:</strong> with <code>credentials: "include"</code> the server must send an exact origin (wildcard <code>*</code> is rejected) plus <code>Access-Control-Allow-Credentials: true</code>; a CORS failure is <em>a browser rule, not a server error</em> — curl works because it ignores CORS; and error messages point at the blocked response, not always at the missing header.</p>
        <p><strong>Cookies vs storage:</strong> <code>Set-Cookie</code> supports <code>HttpOnly</code> (invisible to JavaScript — XSS can't steal it), <code>Secure</code> (HTTPS only), and <code>SameSite</code> (<code>Strict</code> = never sent cross-site; <code>Lax</code> = top-level navigations only; <code>None</code> requires Secure). That combination is why the hardened pattern is: access token in memory, refresh token in an HttpOnly+Secure+SameSite cookie, and CSRF protection where cookies are used. <code>localStorage</code> is readable by any script on the page, so an XSS bug becomes token theft; it has no expiry and no send-automatically behavior.</p>
        <p><strong>DNS & TLS:</strong> before the first byte, the browser resolves the hostname (browser cache → OS cache → configured resolver → root → TLD → authoritative nameserver), then completes a TLS handshake: TLS 1.2 needs two round trips before the first request; TLS 1.3 needs one (and 0-RTT on resumption via a pre-shared key) — that is why "upgrade TLS" is a latency answer too.</p>`,
      cards: [
        { q: "HTTP/1.1 vs HTTP/2 vs HTTP/3?", a: "1.1: one request at a time per connection — browsers open ~6 connections per host and use keep-alive to avoid re-handshaking. 2: binary framing and multiplexed streams over one TCP connection, but one lost TCP packet still stalls every stream. 3: QUIC over UDP — streams recover independently, 1-RTT (0-RTT resumed) handshakes, and connections survive network changes." },
        { q: "Cache-Control: no-cache vs no-store?", a: "no-cache: the response may be stored but must be revalidated with the server before every use. no-store: never write it to any cache, period — for secrets and personal data. max-age=N allows reuse for N seconds without asking at all." },
        { q: "How does ETag revalidation save bandwidth?", a: "The server returns an ETag with the response; the client sends If-None-Match on the next request; if unchanged, the server answers 304 Not Modified with no body. You still pay one round trip, but skip re-sending the payload." },
        { q: "When does the browser send a CORS preflight?", a: "When the request is not 'simple': methods other than GET/POST/HEAD, custom headers, or Content-Type like application/json. The browser sends OPTIONS first with Access-Control-Request-Method/Headers, and only proceeds if the server's Access-Control-* response allows it." },
        { q: "Why does my fetch fail with a CORS error while curl works?", a: "CORS is a browser-enforced policy on reading cross-origin responses — curl doesn't implement it. The server must send Access-Control-Allow-Origin (and friends). The error often points at the blocked response, not the missing server header." },
        { q: "CORS with credentials: what changes?", a: "The browser sends cookies only if the request sets credentials: 'include'; the server must then echo the exact origin (wildcard * is invalid) and send Access-Control-Allow-Credentials: true." },
        { q: "What do HttpOnly, Secure and SameSite do?", a: "HttpOnly: JavaScript cannot read the cookie — XSS can't steal it. Secure: sent only over HTTPS. SameSite: Strict never sends it cross-site, Lax sends it on top-level navigations only, None requires Secure. Together they make a refresh token hard to steal and hard to CSRF." },
        { q: "Why not store JWTs in localStorage?", a: "Any script on the page can read localStorage, so one XSS becomes full token theft, and there's no built-in expiry or scoping. The hardened pattern is access token in memory plus refresh token in an HttpOnly+Secure+SameSite cookie." },
        { q: "What made TLS 1.3 faster?", a: "One round trip to establish the handshake (TLS 1.2 needed two) and 0-RTT resumption via a pre-shared key — plus a smaller cipher suite set that removed legacy options." },
        { q: "What happens, step by step, when you type a URL?", a: "DNS resolution (browser/OS cache → resolver → root/TLD/authoritative), TCP + TLS handshake, HTTP request, response — then parsing and subresource fetches, with caching headers and connection reuse (multiplexing on HTTP/2+) cutting the cost of everything after the first request." }
      ],
      quiz: [
        { q: "Which method does the browser use for a CORS preflight?", options: ["GET", "HEAD", "OPTIONS", "POST"], answer: 2, explain: "Preflight is an OPTIONS request carrying Access-Control-Request-Method/Headers; the real request only fires if the server approves." },
        { q: "You must never let a response be written to any cache. Use…", options: ["Cache-Control: no-cache", "Cache-Control: no-store", "ETag", "max-age=0"], answer: 1, explain: "no-cache allows storage with revalidation; no-store forbids storage entirely — right for secrets and personal data." },
        { q: "A response comes back 304 Not Modified. What does it mean?", options: ["The resource was deleted", "The client's cached copy is still valid — reuse it", "The server is rate limiting", "The request was malformed"], answer: 1, explain: "The ETag matched via If-None-Match, so the server skips the body and the client reuses its cached copy." },
        { q: "SameSite=Strict on a session cookie means…", options: ["The cookie is only sent over HTTPS", "JavaScript cannot read it", "The cookie is never sent on cross-site requests", "It expires when the tab closes"], answer: 2, explain: "Strict suppresses the cookie on all cross-site requests — good against CSRF, but it also breaks inbound cross-site links for authenticated users." },
        { q: "HTTP/2 multiplexing primarily solves…", options: ["TCP packet loss recovery", "The HTTP-level head-of-line blocking of one request per connection", "TLS handshake latency", "DNS lookup time"], answer: 1, explain: "Many streams share one connection, so a slow response no longer blocks the others. TCP-level loss still stalls them — that's what HTTP/3 fixes." }
      ]
    },

    "typescript": {
      title: "TypeScript",
      track: "frontend",
      icon: "🔷",
      blurb: "TypeScript is JavaScript with a static type system that is erased at build time: it catches errors in the editor, documents intent, and makes refactors safe — while the runtime stays plain JavaScript.",
      read: `
        <p><strong>Types are erased:</strong> the compiler checks your code, then emits plain JavaScript with all the types stripped. Nothing validates types at runtime — a value typed as <code>User</code> can still be <code>null</code> if it comes from an API; runtime validation (zod, io-ts) is a separate concern from compilation.</p>
        <p><strong>Structural typing:</strong> compatibility is decided by <em>shape</em>, not by name — anything with the right fields satisfies the type. That's why plain object literals work where an interface is expected, and why a "class from another package" still fits if its shape matches.</p>
        <pre><code>interface Point { x: number; y: number }

const p: Point = { x: 1, y: 2 };     // no class needed — shape matches
const named = { x: 1, y: 2, label: "a" };
const q: Point = named;              // extra fields are fine on assignment</code></pre>
        <p><strong>interface vs type:</strong> both describe shapes. <code>interface</code> can be extended and <em>merged</em> (declaration merging — useful for augmenting libraries); <code>type</code> can alias unions, tuples and primitives. Rule of thumb: interfaces for object contracts you expect to extend, types for everything else.</p>
        <p><strong>Generics:</strong> type parameters make functions and components reusable without losing information — <code>first&lt;T&gt;(items: T[]): T | undefined</code> returns the same type it received. Constraints (<code>T extends { id: string }</code>) let you require a shape while keeping the concrete type; defaults (<code>T = string</code>) give ergonomic fallbacks.</p>
        <pre><code>function first&lt;T extends { id: string }&gt;(items: T[]): T | undefined {
    return items[0];
}

async function apiGet&lt;T&gt;(path: string): Promise&lt;T&gt; {
    const res = await fetch(path);
    return res.json() as Promise&lt;T&gt;;   // trust, but validate at the boundary
}</code></pre>
        <p><strong>Utility types</strong> transform existing types instead of re-declaring them — they keep one source of truth:</p>
        <pre><code>interface User { id: string; email: string; name: string }

type UserPatch   = Partial&lt;User&gt;;          // all fields optional (PATCH payloads)
type UserSummary = Pick&lt;User, "id" | "name"&gt;;
type UserSecret  = Omit&lt;User, "email"&gt;;
type ById        = Record&lt;string, User&gt;;   // a lookup map
type Created     = ReturnType&lt;typeof createUser&gt;;</code></pre>
        <p><strong>Unions, narrowing and discriminated unions:</strong> a union type must be narrowed before you can use members-specific fields — via <code>typeof</code>, <code>in</code>, <code>instanceof</code>, truthiness, or custom type guards (<code>value is T</code>). The killer feature is the discriminated union: a shared literal field lets a <code>switch</code> narrow each variant, and an exhaustive check (<code>never</code>) makes adding a variant a compile error instead of a runtime bug.</p>
        <pre><code>type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; side: number };

function area(s: Shape): number {
    switch (s.kind) {
        case "circle": return Math.PI * s.radius ** 2;
        case "square": return s.side ** 2;
        default: {
            const exhaustive: never = s;   // adding a variant breaks the build
            return exhaustive;
        }
    }
}</code></pre>
        <p><strong>unknown vs any:</strong> <code>any</code> switches the checker off — errors propagate silently. <code>unknown</code> is the safe top type: you can receive it, but you must narrow it before use. Prefer <code>unknown</code> at system boundaries (API responses, JSON.parse, catch variables in strict mode) plus a validating type guard.</p>
        <p><strong>Strict mode:</strong> <code>strictNullChecks</code> makes <code>null</code>/<code>undefined</code> explicit — the single biggest source of production bugs disappears at compile time; <code>noImplicitAny</code> stops silent anys. Turn both on from day one; retrofitting strict hurts.</p>`,
      cards: [
        { q: "What does TypeScript do to types at runtime?", a: "Nothing — types are erased at compile time. The output is plain JavaScript, so API payloads, env vars and JSON are unvalidated; runtime validation (zod, io-ts, manual guards) is a separate layer." },
        { q: "What is structural typing?", a: "Compatibility by shape, not by name: any value with the required fields satisfies the type, even without a class or an explicit implements. Extra fields are allowed on assignment." },
        { q: "interface vs type?", a: "Both describe shapes. Interfaces can be extended and merged (declaration merging), which suits library augmentation; type aliases can express unions, tuples and primitives, which interfaces cannot." },
        { q: "Why generics?", a: "Type parameters keep information flowing: first<T>(items: T[]) returns T, not any. Constraints (T extends { id: string }) require a shape, defaults give fallbacks, and the caller gets full inference." },
        { q: "What are Partial, Pick, Omit and Record for?", a: "Partial<T>: all fields optional — PATCH payloads. Pick<T, K>: a subset. Omit<T, K>: everything except K. Record<K, V>: a lookup map. They derive types from one source of truth instead of re-declaring." },
        { q: "unknown vs any?", a: "any disables checking entirely; errors leak silently. unknown accepts anything but forces narrowing before use — the right type for API responses, JSON.parse and catch variables." },
        { q: "How do type guards work?", a: "A function returning value is T tells the compiler the narrowing: if (isUser(x)) { x.email }. Combined with typeof/in/instanceof checks, they make unions safely usable." },
        { q: "What is a discriminated union and why is it powerful?", a: "Variants sharing a literal field (kind: 'circle' | 'square') that a switch narrows; an exhaustive never check turns adding a variant into a compile error — the compiler becomes a checklist." },
        { q: "Why enable strictNullChecks?", a: "It makes null and undefined explicit instead of implicitly assignable everywhere — eliminating a whole class of production bugs at compile time. Retrofitting strict later is much more painful than starting with it." },
        { q: "How do you type an API response safely?", a: "Type the boundary as unknown, validate with a schema/guard, then return the narrow type — generic helpers like apiGet<T> give convenience, but only validation makes the T true at runtime." }
      ],
      quiz: [
        { q: "What happens to TypeScript types when the code runs?", options: ["They are checked at runtime", "They are erased — plain JavaScript runs", "They are converted to JSDoc", "They are enforced by V8"], answer: 1, explain: "Compilation strips all type annotations; runtime validation is a separate concern." },
        { q: "Which can express a union type?", options: ["interface", "type", "Both", "Neither"], answer: 1, explain: "Interfaces describe object shapes (and can merge); type aliases can also express unions, tuples and primitives." },
        { q: "Why prefer unknown over any for an API payload?", options: ["It is faster", "It forces narrowing/validation before use", "It works with JSON.parse and any doesn't", "It is shorter"], answer: 1, explain: "any disables the checker; unknown requires proving the shape before accessing fields." },
        { q: "Partial<User> produces…", options: ["A user with all fields required", "A type with all User fields optional", "A readonly user", "A union of all fields"], answer: 1, explain: "Partial marks every property optional — the classic PATCH payload type." },
        { q: "In a discriminated union, the exhaustive never check…", options: ["Runs at runtime", "Turns adding an unhandled variant into a compile error", "Prevents null values", "Is only documentation"], answer: 1, explain: "If a new variant isn't handled, the default branch's assignment to never fails compilation — a built-in checklist." }
      ]
    },

    "testing": {
      title: "Testing Back-End",
      track: "backend",
      icon: "🧫",
      blurb: "Automated tests are executable specifications: they catch regressions, document behavior, and make refactoring safe. The skill is knowing what to test, at which level, and what to fake.",
      read: `
        <p><strong>The test pyramid</strong> balances cost against confidence: many fast <em>unit</em> tests at the base, fewer <em>integration</em> tests in the middle, a few slow <em>end-to-end</em> tests at the top. The inverted pyramid ("ice cream cone": mostly e2e, few unit tests) produces a suite that is slow, flaky and hard to debug — the most common anti-pattern.</p>
        <pre><code>        /\        E2E — full system, few, slowest, highest confidence
       /  \
      /----\      Integration — real DB/queue/HTTP, moderate cost
     /      \
    /--------\    Unit — pure logic, milliseconds, hundreds of them</code></pre>
        <p><strong>What makes a test good:</strong> it tests <em>behavior</em> (observable outcomes) rather than implementation; it's deterministic (no real clock, randomness or network); it fails for one reason with a message that tells you which; it follows arrange-act-assert and a name that reads like a spec ("returns 409 when the email is taken").</p>
        <p><strong>Test doubles — stub, mock, fake</strong> (same taxonomy as OOP): a stub returns canned data, a mock verifies interactions, a fake is a lightweight working implementation. In backend tests, prefer <strong>fakes</strong> for infrastructure (in-memory repository, test container) and reserve mocks for genuine interaction contracts — over-mocking couples every test to implementation details and makes refactoring miserable.</p>
        <p><strong>Testing database code:</strong> mocking the ORM tests your mocks, not your SQL. Prefer an integration test against a real database in a container (Testcontainers), running each test in a transaction that rolls back, with migrations applied once per suite. The payoff is catching constraint, isolation and mapping bugs that mocks can never see.</p>
        <p><strong>Contract testing</strong> protects service-to-service integration without a brittle full-environment e2e suite: consumer-driven contracts record what the consumer expects; the provider runs those expectations in its own CI, so a breaking change fails the provider's build before deployment.</p>
        <pre><code>// Test data builder — readable, evolvable, no giant fixtures
const alice = new UserBuilder().withEmail("alice@x.com").active().build();
// .withRole("admin") can be added without touching existing tests</code></pre>
        <p><strong>Flaky tests</strong> are worse than no tests — they teach the team to ignore red. Root causes: real time/sleeps, order dependence, shared mutable state, async waits. Policy: quarantine, find the root cause, fix; never paper over with blanket retries.</p>
        <p><strong>Coverage is a signal, not a goal:</strong> 100% coverage of trivial getters proves nothing; uncovered error paths are where the bugs hide. Use coverage to find untested <em>critical</em> paths, not to hit a number.</p>
        <p><strong>In CI:</strong> unit tests on every push, integration on pull requests, e2e on main/nightly; parallelize, cache dependencies, fail fast, and publish reports. The suite speed matters — a slow suite stops being run.</p>`,
      cards: [
        { q: "What are the three levels of the test pyramid?", a: "Unit (pure logic, ms, many), integration (real DB/queue/HTTP, seconds, fewer), e2e (whole system, slowest, few). More cost and less speed as you go up; more confidence too." },
        { q: "What's wrong with the inverted pyramid?", a: "Mostly e2e tests: slow, flaky, hard to localize failures, and expensive to maintain. That's the ice cream cone anti-pattern — confidence per minute collapses." },
        { q: "What distinguishes a good test?", a: "Tests behavior not implementation; deterministic (no wall clock, randomness or network); one reason to fail with a clear message; arrange-act-assert; a name that reads like a specification." },
        { q: "Stub vs mock vs fake?", a: "Stub returns canned responses; mock verifies interactions; fake is a lightweight working implementation. Backend default: fakes for infrastructure, mocks only when the interaction is the contract." },
        { q: "Why is over-mocking harmful?", a: "Tests become coupled to implementation details — refactoring breaks them without any behavior change — and they verify your mocks rather than real SQL/HTTP behavior." },
        { q: "How do you test database code properly?", a: "Against a real database in a container (Testcontainers), migrations applied once, each test in a rolled-back transaction. Mocking the ORM hides constraints, isolation and mapping bugs." },
        { q: "What does contract testing solve?", a: "It protects service-to-service APIs without a full e2e environment: consumers publish expectations, providers verify them in their own CI, so breaking changes fail the provider's build." },
        { q: "Why use test data builders?", a: "Readable construction (UserBuilder().withEmail(...).active().build()), no giant shared fixtures, and adding a new default doesn't force edits across every test." },
        { q: "How do you handle flaky tests?", a: "Quarantine them, find the root cause (time, order dependence, shared state, async waits) and fix it. Blanket retries hide instability and train the team to ignore red builds." },
        { q: "Is 100% coverage a goal?", a: "No — coverage is a signal. Trivial code inflates the number while untested error paths stay untested. Aim coverage at critical and edge-case paths, not at the metric." }
      ],
      quiz: [
        { q: "Which test level should you have the most of?", options: ["E2E", "Integration", "Unit", "Manual"], answer: 2, explain: "The pyramid's base is unit tests: fastest feedback and cheapest to maintain, forming the majority of the suite." },
        { q: "An integration test typically…", options: ["Mocks every dependency", "Runs against real infrastructure like a database or queue", "Tests only pure functions", "Replaces e2e entirely"], answer: 1, explain: "Integration tests exercise the seams — real DB/queue/HTTP — at a moderate cost, catching bugs mocks can't see." },
        { q: "For repository tests, the preferred double is…", options: ["A mock verifying calls", "A fake: a real in-memory or container-backed implementation", "A stub returning JSON", "None — skip them"], answer: 1, explain: "Fakes exercise real behavior; mocks would only verify that methods were called, not that SQL/constraints work." },
        { q: "You need to catch a provider breaking a consumer's API without a full e2e suite. Use…", options: ["More unit tests", "Contract testing", "Higher coverage", "Manual QA"], answer: 1, explain: "Consumer-driven contracts are verified by the provider's CI, failing its build before consumers break." },
        { q: "A test fails intermittently in CI. The right response is…", options: ["Add retries until it passes", "Quarantine it and fix the root cause (time, order, async waits)", "Delete it", "Ignore it"], answer: 1, explain: "Retries mask instability; the root cause is usually non-determinism that will eventually bite in production." }
      ]
    },

    "devops": {
      title: "DevOps & Operations",
      track: "backend",
      icon: "🚢",
      blurb: "DevOps is the practice of shipping software continuously and operating it reliably: containers package the app, CI/CD automates delivery, and observability tells you what production is actually doing.",
      read: `
        <p><strong>Containers vs VMs:</strong> a VM virtualizes hardware and runs a full guest OS (GBs, minutes to boot); a container shares the host kernel and isolates just the process (MBs, milliseconds). An image is built from immutable layers — each Dockerfile instruction adds one — and a registry stores/tags them; deploying the same image everywhere is what makes "works on my machine" disappear.</p>
        <pre><code># Multi-stage: build with the SDK, ship only the runtime — no compilers in prod
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --omit=dev
CMD ["node", "dist/server.js"]</code></pre>
        <p><strong>Orchestration (Kubernetes, in one diagram):</strong> a Deployment owns replicas and rolling updates; Pods are the running containers; a Service gives them a stable virtual IP/load balancing; an Ingress terminates external HTTP and routes by host/path; ConfigMaps hold config and Secrets hold sensitive values; the Horizontal Pod Autoscaler adds replicas on CPU/latency signals.</p>
        <pre><code>Internet ──► Ingress (TLS, host/path routing)
                │
                ▼
             Service (stable IP, load balances)
                │
        ┌───────┴────────┐
        ▼                ▼
     Pod (app)        Pod (app)      ← replicas from a Deployment
     liveness  → is the process alive?   (restart if not)
     readiness → can it take traffic?    (remove from Service if not)</code></pre>
        <p><strong>CI vs CD:</strong> continuous <em>integration</em> means every push is built and tested; continuous <em>delivery</em> means the artifact is always releasable; continuous <em>deployment</em> ships it automatically. A typical pipeline: lint → unit → build image → scan → integration → deploy staging → e2e → deploy production.</p>
        <pre><code>commit ─► lint ─► unit ─► build image ─► vuln scan ─► integration
                                                    │
                    prod ◄─ smoke ◄─ staging ◄───────┘
                    (blue-green / canary with rollback)</code></pre>
        <p><strong>Release strategies:</strong> <em>blue-green</em> runs two environments and flips traffic (instant rollback, double cost); <em>canary</em> routes a small percentage to the new version and ramps up while watching metrics (real-traffic validation, slower rollout); <em>feature flags</em> decouple deploy from release — code ships dark and is enabled per user/percentage, giving the fastest kill switch.</p>
        <p><strong>Infrastructure as code:</strong> Terraform (or Pulumi/CloudFormation) declares desired infrastructure; the tool diffs state against reality and applies changes — reviewed like code, reproducible, no snowflake servers.</p>
        <p><strong>Observability — the three pillars:</strong> <em>logs</em> (discrete events with context), <em>metrics</em> (aggregated numbers over time), <em>traces</em> (a request's path across services, tied by correlation/trace IDs). Define <strong>SLIs</strong> (what you measure: request latency, error rate), an <strong>SLO</strong> (the target: 99.9% of requests under 300ms), and an <strong>error budget</strong> (the allowed failure) — then alert on <em>symptoms</em> (SLO burn) rather than causes (a single CPU spike).</p>`,
      cards: [
        { q: "Containers vs virtual machines?", a: "VMs virtualize hardware and boot a full guest OS (GBs, slow); containers share the host kernel and isolate the process (MBs, instant). Images are immutable layer stacks stored in registries." },
        { q: "Why multi-stage Docker builds?", a: "The build stage carries the SDK/compilers; the final stage copies only the artifacts and production dependencies — smaller images, fewer CVEs, faster pulls, no build tooling in production." },
        { q: "Image tag vs digest?", a: "A tag like latest is mutable and can point anywhere; a digest is the content hash and immutable. Deploy by digest (or unique tags) for reproducible rollbacks." },
        { q: "Deployment vs Service vs Ingress in Kubernetes?", a: "Deployment: desired replicas and rolling updates of Pods. Service: a stable virtual IP that load-balances to those Pods. Ingress: external HTTP(S) entry with host/path routing and TLS." },
        { q: "Liveness vs readiness probes?", a: "Liveness: is the process alive? Failing restarts it. Readiness: can it serve traffic now? Failing removes it from the Service without restarting — a warming app stays alive but gets no requests." },
        { q: "CI vs continuous delivery vs continuous deployment?", a: "CI builds and tests every push. Continuous delivery keeps every artifact releasable with a manual gate. Continuous deployment ships automatically. The pipeline is the same; only the gate differs." },
        { q: "Blue-green vs canary?", a: "Blue-green: run two full environments and flip traffic — instant rollback, double cost. Canary: route a small percentage to the new version, watch metrics, ramp up — real-traffic validation, slower to full." },
        { q: "What do feature flags change?", a: "They separate deploy from release: code ships dark and is enabled per user/percentage instantly — the fastest kill switch, at the cost of flag debt you must clean up." },
        { q: "What are SLI, SLO and error budget?", a: "SLI: the measured signal (latency p99, error rate). SLO: the target (99.9% under 300ms). Error budget: 100% minus SLO — how much failure you can afford before halting risky releases." },
        { q: "Why alert on symptoms instead of causes?", a: "Causes (CPU at 80%) are noisy and often harmless; symptoms (SLO burn, error rate, latency) are what users feel. Alert on what's broken for users, dashboards for why." }
      ],
      quiz: [
        { q: "The main benefit of multi-stage Docker builds is…", options: ["Faster unit tests", "Smaller, safer runtime images without build tooling", "Automatic TLS", "Free registry hosting"], answer: 1, explain: "Only runtime artifacts and production deps land in the final stage — smaller images, fewer vulnerabilities, faster pulls." },
        { q: "An app is starting up and needs 20s before it can serve traffic. Which probe should fail meanwhile?", options: ["Liveness", "Readiness", "Both", "Neither"], answer: 1, explain: "Readiness keeps it out of the Service while warming; liveness stays green so it isn't restarted mid-boot." },
        { q: "Canary releases mean…", options: ["Deploying to 100% at once", "Routing a small percentage of traffic to the new version and ramping while watching metrics", "Running two full environments", "Shipping behind a feature flag only"], answer: 1, explain: "Canary validates with real traffic on a small blast radius before a full rollout." },
        { q: "An SLO of 99.9% monthly availability implies an error budget of…", options: ["0.1% of the month (~43 minutes)", "99.9% of the month", "Unlimited failures", "Exactly 1 outage"], answer: 0, explain: "Error budget = 100% − SLO = 0.1%, roughly 43 minutes per 30-day month." },
        { q: "Better alerting practice is to page on…", options: ["CPU above 80%", "Disk usage trends", "SLO burn / user-facing symptoms", "Pod restarts"], answer: 2, explain: "Symptoms reflect what users experience; causes belong on dashboards for investigation." }
      ]
    },

    "sysdesign": {
      title: "System Design Scenarios",
      track: "backend",
      icon: "🏗️",
      blurb: "System design interviews test structured thinking: clarify requirements, estimate capacity, sketch the API and data model, then deep-dive the hard parts. This topic gives the reusable framework plus five worked scenarios.",
      read: `
        <p><strong>The framework (use it every time):</strong> 1) <em>clarify requirements</em> — functional (what users do) and non-functional (scale, latency, consistency, availability); 2) <em>estimate</em> — back-of-envelope QPS, storage and bandwidth; 3) <em>API design</em> — the few endpoints that matter; 4) <em>data model</em> — entities, keys, access patterns; 5) <em>high-level diagram</em> — client → gateway → services → storage with caches/queues; 6) <em>deep dives</em> — the one or two genuinely hard parts; 7) <em>trade-offs</em> — what you chose and what it costs. Interviewers score the structure and the trade-offs, not a perfect answer.</p>
        <pre><code>Estimation example — a URL shortener at 100M new links/day:
  writes: 100M / 86,400s ≈ 1,160/s average; peak ≈ 3× ≈ 3,500/s
  reads:  short links are read ~10× more → ≈ 12k/s average
  storage: 500 bytes/link × 100M/day × 365 × 5 years ≈ 91 TB
⇒ consequences: reads dominate → cache redirects; IDs must be
  generated without collisions; storage justifies sharding.</code></pre>
        <p><strong>Scenario 1 — URL shortener.</strong> Key decisions: short codes via a global counter encoded in base62 (6 chars ≈ 56B values) or a Snowflake-style ID (time-ordered, shard-friendly); collisions are impossible with a counter, possible with hashing (needs retry). Redirects: <em>301</em> (permanent, cacheable — best for load) vs <em>302</em> (temporary, every click hits you — needed for analytics and expiring links). Read path: cache the code→URL mapping (Redis, LRU), then the DB.</p>
        <pre><code>write:  client ─► API ─► ID generator (counter/Snowflake) ─► DB
read:   client ─► API ─► cache (hit ~95%) ─► DB on miss ─► 302 redirect</code></pre>
        <p><strong>Scenario 2 — rate limiter.</strong> Algorithm choice is the interview (token bucket for bursts, sliding window for precision — see the APIs topic). Architecture: enforce at the edge/gateway or in middleware, keyed per user/IP; counters in Redis with TTL; atomic increments (Lua/INCR) to avoid races; return <code>429</code> + <code>Retry-After</code>. Discuss fail-open vs fail-closed when Redis is down.</p>
        <p><strong>Scenario 3 — news feed.</strong> Fan-out on <em>write</em> (precompute each follower's timeline — fast reads, expensive writes for celebrities) vs fan-out on <em>read</em> (merge sources at read time — cheap writes, slow reads). The standard answer is <strong>hybrid</strong>: push for normal accounts, pull for celebrities; cache timelines; paginate with a cursor (not OFFSET, which drifts).</p>
        <p><strong>Scenario 4 — chat.</strong> Persistent WebSocket connections (see the WebSockets topic) for delivery and presence; per-conversation ordering (sequence numbers per room); messages persisted before ack; fan-out via a pub/sub backplane (Redis) across instances; offline users get a queue/notification; read receipts and delivery states as separate events.</p>
        <p><strong>Scenario 5 — payments.</strong> The hard part is exactly-once <em>effects</em>, not exactly-once delivery: idempotency keys on the charge endpoint (store first result, replay on retry), local transaction + outbox event, saga with compensations across services, and reconciliation jobs against the provider — because "the network failed after the charge" must never mean "charge twice".</p>`,
      cards: [
        { q: "What are the seven steps of the system design framework?", a: "Clarify functional and non-functional requirements; estimate QPS/storage/bandwidth; define the API; model the data and access patterns; sketch the high-level diagram; deep-dive the hard parts; state trade-offs. Structure scores higher than completeness." },
        { q: "How do you do a back-of-envelope estimation?", a: "Round aggressively: 86,400s/day, per-user triples, reads ≫ writes often 10–100×. Compute QPS = operations/day ÷ 86,400, peak ≈ 3× average, storage = record size × volume × retention — then say what it implies (cache? shard?)." },
        { q: "URL shortener: counter vs hashing for short codes?", a: "A global counter (base62) guarantees uniqueness and is shard-friendly with ranges/Snowflake; hashing the URL can collide and needs retry or probing. Either way, six base62 chars cover ~56 billion values." },
        { q: "301 vs 302 redirect for a shortener?", a: "301 (permanent): browsers/CDNs cache it — cheapest for load, but analytics and expiry break. 302 (temporary): every click hits your service — required when you track clicks or links expire." },
        { q: "News feed: fan-out on write or read?", a: "Push on write: precompute timelines, fast reads, expensive for celebrity posts. Pull on read: merge at read time, cheap writes, slow reads. Standard answer: hybrid — push for normal users, pull for celebrities; cache and paginate by cursor." },
        { q: "Where does a rate limiter keep its counters?", a: "In Redis with TTL per window and atomic increments (INCR or a Lua script), enforcing at the gateway/middleware by user or IP — and deciding explicitly whether it fails open or closed when Redis is down." },
        { q: "Why is cursor pagination preferred to OFFSET?", a: "OFFSET drifts when items are inserted/deleted (skips and duplicates) and gets slower deeper in; a cursor encodes the last seen key and stays stable and index-friendly." },
        { q: "Chat: how do you guarantee per-conversation order?", a: "Persist the message first, assign a monotonically increasing sequence number per conversation, then fan out via pub/sub; clients order by that sequence and fetch missed messages after reconnect." },
        { q: "Payments: how do you avoid charging twice?", a: "Idempotency keys (store the first result per key and replay it on retries), local transaction + outbox for events, saga compensations across services, and reconciliation against the provider." },
        { q: "What should you cover in the trade-offs step?", a: "Every major choice with its cost: consistency vs availability, sync vs async, cache vs fresh reads, SQL vs NoSQL, single region vs multi-region — and when the alternative would win." }
      ],
      quiz: [
        { q: "The first thing to do in a system design interview is…", options: ["Draw the database schema", "Clarify functional and non-functional requirements", "Choose the database", "Write the API spec"], answer: 1, explain: "Requirements drive every later decision; jumping to diagrams without them is the classic failure mode." },
        { q: "A URL shortener is read ~10× more than written. The design consequence is…", options: ["Shard the write path first", "Cache the code→URL mapping aggressively", "Use synchronous replication only", "Avoid redirects"], answer: 1, explain: "Reads dominate, so an LRU cache in front of the mapping store is the highest-leverage decision." },
        { q: "A celebrity with 100M followers posts. Plain fan-out-on-write breaks because…", options: ["Reads become too slow", "One post means 100M timeline writes", "The cache evicts", "WebSockets disconnect"], answer: 1, explain: "Write amplification explodes — hence the hybrid: pull on read for the celebrity's posts, push for everyone else." },
        { q: "Rate limiter: which storage pattern fits?", options: ["Counters in Redis with TTL and atomic increments", "A file per user", "A Postgres row locked per request", "Browser localStorage"], answer: 0, explain: "Redis gives shared, atomic, expiring counters across instances — the standard distributed limiter." },
        { q: "For analytics on every click, the shortener should return…", options: ["301 permanent", "302 temporary", "304 not modified", "204 no content"], answer: 1, explain: "302 forces each click through your service so you can log it; 301 would be cached and skip you." }
      ]
    },

    "behavioral": {
      title: "Behavioral Interviews (STAR)",
      track: "backend",
      icon: "🎤",
      blurb: "Behavioral interviews predict future performance from past behavior: instead of 'what is X', they ask 'tell me about a time when…'. STAR — Situation, Task, Action, Result — is the structure that keeps those stories clear.",
      read: `
        <p><strong>Why they exist:</strong> skills get you screened in; behavior decides the offer. Interviewers assume past behavior predicts future behavior, so they probe real situations: conflict, failure, leadership, ambiguity. You cannot improvise these well — you prepare a small set of true stories and reuse them.</p>
        <p><strong>STAR:</strong> <em>Situation</em> (10 seconds of context), <em>Task</em> (what you were responsible for), <em>Action</em> (the bulk — what <strong>you</strong> did and why), <em>Result</em> (the measurable outcome, plus what you learned). The common failure is spending all the time on S and T and rushing the A.</p>
        <pre><code>S  "Our checkout error rate tripled after a Friday release."
T  "I owned the payments service and had to find the cause before Monday."
A  "I added correlation IDs to every log line, reproduced the failure
     in staging, and found a retry loop without an idempotency key.
     I shipped the key, then wrote the runbook we were missing."
R  "Error rate back to baseline in 6 hours; retries became idempotent,
     and the runbook was used twice more that quarter."</code></pre>
        <p><strong>Prepare five or six stories</strong> and map them to question families: a conflict with a colleague, a failure you owned, leading without authority, an ambiguous problem, a decision you'd make differently, your biggest impact. One strong story usually answers three or four questions — listen for the competency behind the question, then pick the story that shows it.</p>
        <table><thead><tr><th>Question family</th><th>What they are testing</th></tr></thead><tbody>
        <tr><td>"Tell me about a conflict"</td><td>Empathy, directness, focus on the problem not the person</td></tr>
        <tr><td>"Tell me about a failure"</td><td>Ownership — do you blame others or own your part?</td></tr>
        <tr><td>"Tell me about something ambiguous"</td><td>How you scope, ask questions and make decisions with incomplete data</td></tr>
        <tr><td>"Tell me about leading a project"</td><td>Influence, communication, delivering through others</td></tr>
        </tbody></table>
        <p><strong>Pitfalls:</strong> being vague ("we improved performance" — by how much?), hiding in "we" (say "I" for your actions), skipping the result, telling a story where you were the hero and everyone else was wrong, or inventing one — follow-up questions expose invented stories fast.</p>
        <p><strong>"Why are you leaving?"</strong> should be about moving toward something (scope, growth, a domain), never about escaping a bad manager. Keep it short and positive. And always prepare two or three genuine questions to ask: about team problems, how success is measured, or what the interviewer would change.</p>`,
      cards: [
        { q: "What is a behavioral interview testing?", a: "Past behavior as a predictor of future behavior: how you act in conflict, failure, ambiguity and leadership situations. Technical skill gets you screened in; behavior usually decides the offer." },
        { q: "What does STAR stand for?", a: "Situation (brief context), Task (your responsibility), Action (what you specifically did and why — the bulk), Result (measurable outcome and what you learned)." },
        { q: "Where should most of your talking time go in a STAR answer?", a: "The Action. A common failure is spending most of the time on situation and task and rushing what you actually did. Keep the context to a couple of sentences." },
        { q: "How many stories should you prepare?", a: "Five or six true stories covering conflict, failure, leadership, ambiguity, a decision you'd change, and your biggest impact. One good story maps to several questions." },
        { q: "How do you answer 'tell me about a conflict'?", a: "Pick a real disagreement, describe what the other person wanted, explain how you found common ground, and end with the resolution and relationship afterward. Never frame it as the other person being wrong." },
        { q: "How do you answer 'tell me about a failure'?", a: "Choose a real failure you own, state your part plainly, describe the fix and what you changed afterward. The test is ownership — blaming others is the failure." },
        { q: "Why say 'I' instead of 'we'?", a: "The interviewer needs to know what you contributed. Use 'we' for the team outcome and 'I' for your decisions and actions; hiding in 'we' makes your role invisible." },
        { q: "What makes a result convincing?", a: "Something measurable: error rate, latency, time saved, revenue, adoption. 'Improved performance' is weak; 'cut p95 latency from 900ms to 180ms' is a result." },
        { q: "How should you answer 'why are you leaving?'", a: "Frame it as moving toward something — scope, growth, a domain you want — not escaping a bad manager or company. Keep it short and positive." },
        { q: "Should you invent a story if you can't think of one?", a: "No. Follow-up questions ('what did they say next?', 'why that approach?') expose invented stories quickly. Use a smaller real example instead." }
      ],
      quiz: [
        { q: "An interviewer asks about a time you handled a conflict. The best answer…", options: ["Shows the other person was wrong", "Shows empathy, what you did, and how it was resolved", "Avoids any real disagreement", "Focuses mostly on the backstory"], answer: 1, explain: "They are testing how you work with people: your actions, the resolution and the relationship afterward." },
        { q: "Which result is the strongest close to a STAR answer?", options: ["Things got much better afterwards", "We fixed the problem as a team", "Error rate dropped from 3% to 0.1% in a week", "My manager was very happy"], answer: 2, explain: "Specific and measurable beats vague praise. Numbers make the result credible." },
        { q: "You have 2 minutes for an answer. Most of it should be…", options: ["Situation", "Task", "Action", "Result"], answer: 2, explain: "Context should be brief; what you did and why is what the interviewer is evaluating." },
        { q: "Asked about a failure, you should…", options: ["Pick one where teammates caused the problem", "Say you can't think of one", "Own your part and explain what you changed", "Choose an unrelated success"], answer: 2, explain: "The question tests ownership. Naming your own part and the fix is the strong answer." },
        { q: "'Why are you leaving?' is best answered by…", options: ["Listing what's wrong with your current employer", "Describing what you want to move toward", "Saying it's about money", "Avoiding the question"], answer: 1, explain: "Moving toward growth or scope reads as ambition; escaping reads as negativity." }
      ]
    },

    "fe-security": {
      title: "Front-End Security",
      track: "frontend",
      icon: "🛡️",
      blurb: "Front-end security is defending the browser side of an app: preventing script injection, forged requests and UI redress, validating cross-window messages, and keeping the dependency supply chain clean.",
      read: `
        <p><strong>XSS (cross-site scripting)</strong> is injecting script that runs in your origin. <em>Stored</em> XSS comes from the database (a comment containing a script tag), <em>reflected</em> XSS comes from the URL, and <em>DOM</em> XSS comes from your own code writing untrusted data into a sink. The browser treats injected script exactly like yours: it can read cookies visible to JavaScript, the DOM and localStorage.</p>
        <pre><code>// DOM XSS: location.hash is attacker-controlled
el.innerHTML = location.hash.slice(1);          // ✗ script runs

// Safe: text is never parsed as HTML
el.textContent = location.hash.slice(1);        // ✓

// If you must render HTML, sanitize it first
el.innerHTML = DOMPurify.sanitize(userHtml);    // ✓</code></pre>
        <p><strong>Defenses in layers:</strong> output encoding by default (frameworks like React escape text — the danger is <code>dangerouslySetInnerHTML</code>, <code>innerHTML</code> and <code>eval</code>); sanitize any HTML you must render; and a <strong>Content Security Policy</strong> that blocks inline script and limits where scripts can load from — so that one missed escaping does not become an exploit.</p>
        <pre><code>Content-Security-Policy: default-src 'self'; script-src 'self';
  object-src 'none'; base-uri 'none'; frame-ancestors 'none'</code></pre>
        <p><strong>CSRF (cross-site request forgery)</strong> makes the user's browser send a request they did not intend — the browser attaches their cookies automatically. Defenses: anti-CSRF tokens tied to the session, the <code>SameSite</code> cookie attribute (see the HTTP topic), checking <code>Origin</code>/<code>Referer</code>, and not using cookies for state-changing requests when a header token will do.</p>
        <p><strong>Clickjacking</strong> overlays your page invisibly under an attacker's page so a click lands on your buttons. Prevent it with <code>frame-ancestors 'none'</code> in the CSP (the modern replacement for <code>X-Frame-Options</code>).</p>
        <p><strong><code>postMessage</code>:</strong> always pass an explicit <code>targetOrigin</code>, never <code>*</code>, and verify <code>event.origin</code> and <code>event.source</code> on the receiving side before trusting the data. <strong>Open redirects</strong> (a <code>?next=</code> parameter that accepts any URL) enable convincing phishing — validate against an allow-list of relative paths.</p>
        <p><strong>Supply chain:</strong> every dependency runs with your app's privileges. Commit the lockfile, run <code>npm audit</code> in CI, pin versions, and keep the dependency count down. Store tokens per the HTTP topic: access token in memory, refresh token in an HttpOnly cookie.</p>`,
      cards: [
        { q: "What are the three types of XSS?", a: "Stored: the malicious payload is saved (e.g. a database comment) and served to victims. Reflected: the payload is in the request and echoed back in the response. DOM: your own client-side code writes untrusted data into a dangerous sink like innerHTML." },
        { q: "How do you prevent XSS?", a: "In layers: keep untrusted data as text (textContent) instead of HTML, sanitize HTML you must render (DOMPurify), avoid eval and dangerouslySetInnerHTML, and add a Content Security Policy so one miss does not become an exploit." },
        { q: "What does a Content Security Policy do?", a: "It declares which sources the browser may load scripts, styles and other resources from. Blocking inline script and limiting script-src means an injected script will not execute." },
        { q: "What is CSRF and how do you stop it?", a: "A forged request sent from another site using the user's automatically attached cookies. Defenses: anti-CSRF tokens, SameSite cookie attributes, validating Origin/Referer, and custom header tokens for APIs." },
        { q: "What is clickjacking?", a: "Embedding your page invisibly in an iframe so the user's clicks land on your buttons or links. Prevent it with frame-ancestors 'none' in the CSP." },
        { q: "What are the rules for postMessage?", a: "Pass an explicit targetOrigin instead of '*', and on the receiving side check event.origin (and event.source) before trusting or acting on the data." },
        { q: "Why are open redirects a security problem?", a: "A trusted domain redirecting to an arbitrary URL makes phishing links look legitimate (app.example.com/login?next=evil.com). Validate redirect targets against an allow-list of local paths." },
        { q: "How do you protect the dependency supply chain?", a: "Commit the lockfile, run npm audit in CI, pin versions, remove unused dependencies, and review what you add — every package runs with your app's privileges." },
        { q: "Is React safe from XSS by default?", a: "Mostly: JSX escapes string content. The escape hatches are dangerouslySetInnerHTML, raw innerHTML/eval, and URLs built from user input (javascript: hrefs)." },
        { q: "Why does XSS matter if tokens are not in cookies?", a: "Injected script runs with your app's privileges: it can read localStorage, the DOM and any data on the page, and make authenticated requests as the user." }
      ],
      quiz: [
        { q: "A page renders a search query with el.innerHTML = query. This is…", options: ["Stored XSS", "Reflected or DOM XSS", "CSRF", "Clickjacking"], answer: 1, explain: "Untrusted data written into innerHTML is parsed as HTML — use textContent or sanitize." },
        { q: "Which header stops your page from being framed by another site?", options: ["Content-Security-Policy: frame-ancestors 'none'", "Access-Control-Allow-Origin", "Strict-Transport-Security", "X-Content-Type-Options"], answer: 0, explain: "frame-ancestors controls who may embed the page — the defense against clickjacking." },
        { q: "CSRF works because…", options: ["JavaScript can read cross-origin responses", "The browser attaches the user's cookies automatically", "Tokens are stored in localStorage", "Passwords are weak"], answer: 1, explain: "A request from another site still carries the session cookie, so it looks legitimate — hence tokens and SameSite." },
        { q: "A dependency you use publishes a malicious version. Best preventive practice?", options: ["Always install the latest version", "Commit the lockfile, pin versions, and audit in CI", "Install only weekly", "Disable npm"], answer: 1, explain: "Reproducible, audited installs mean a bad release does not reach your build unnoticed." },
        { q: "postMessage(data, "*") is risky because…", options: ["It is slow", "The data can be delivered to any origin", "It only works cross-origin", "It encodes the data"], answer: 1, explain: "Always name the target origin, and verify event.origin when receiving." }
      ]
    },

    "git": {
      title: "Git & Collaboration",
      track: "backend",
      icon: "🌿",
      blurb: "Git is a distributed version control system built on an immutable graph of commits. Understanding that graph — and how merge, rebase and reset reshape it — is what makes team collaboration and conflict resolution predictable.",
      read: `
        <p><strong>The model:</strong> a repository is a directed acyclic graph of commits; each commit points to its parent(s) and a branch is just a movable pointer to a commit. Day to day you work across three areas.</p>
        <pre><code>working tree ──(git add)──► staging area ──(git commit)──► repository
   edit files                 "what goes in              local history,
                               the next commit"          safe to share</code></pre>
        <pre><code>main:     A ── B ──────────── F   (merge commit, two parents)
                \             /
feature:         C ── D ── E

rebased:  A ── B ── C' ── D' ── E'      (same changes, new commits)</code></pre>
        <p><strong>Merge vs rebase:</strong> <code>merge</code> joins two histories with a merge commit and preserves exactly what happened. <code>rebase</code> replays your commits on top of another branch, producing a linear history — but it <em>rewrites commits</em> (new hashes). Rule: rebase your own local, unpushed work; never rebase commits that others may have pulled.</p>
        <p><strong>Squash and interactive rebase:</strong> <code>git rebase -i HEAD~3</code> lets you combine, reorder, reword or drop commits so a feature branch reads as a clean series of logical changes before review. Squash-merging a pull request collapses the whole branch into one commit on main.</p>
        <p><strong>Conflicts</strong> happen when two branches change the same lines. Resolve deliberately: read both sides, edit the file to the content you actually want, <code>git add</code> it, and continue the merge or rebase. Do not blindly pick "ours" or "theirs" — the right answer is usually a combination.</p>
        <p><strong>Undoing, by intent:</strong></p>
        <table><thead><tr><th>Command</th><th>Effect</th><th>When</th></tr></thead><tbody>
        <tr><td>git restore</td><td>Discard uncommitted changes</td><td>"Throw away what I just typed"</td></tr>
        <tr><td>git reset</td><td>Move the branch pointer back (rewrites history)</td><td>Local commits that were never pushed</td></tr>
        <tr><td>git revert</td><td>Add a new commit that undoes an old one</td><td>Shared history — safe on main</td></tr>
        <tr><td>git bisect</td><td>Binary-search the commit that introduced a bug</td><td>"It worked last week"</td></tr>
        </tbody></table>
        <p><strong>Collaboration:</strong> keep branches short-lived, open small pull requests, and write commits that explain <em>why</em> — subject line in the imperative, body with context. In review, be kind and specific, distinguish blocking comments from suggestions, and review the change, not the person.</p>`,
      cards: [
        { q: "What are Git's three areas?", a: "The working tree (your edited files), the staging area or index (what will go in the next commit), and the repository (committed history). git add moves changes to staging; git commit records them." },
        { q: "What is a branch, really?", a: "A movable pointer to a commit. Commits form a graph of parent pointers; creating and switching branches is cheap because it only moves a pointer." },
        { q: "Merge vs rebase?", a: "Merge joins histories with a merge commit and preserves what happened. Rebase replays your commits onto another branch for linear history, rewriting them with new hashes." },
        { q: "When should you not rebase?", a: "On commits that others may have pulled — shared branches like main. Rewriting shared history forces everyone to reconcile divergent commits." },
        { q: "What is interactive rebase for?", a: "Cleaning up your own branch before review: squash, reorder, reword or drop commits so the history reads as logical steps (git rebase -i HEAD~3)." },
        { q: "How do you resolve a merge conflict?", a: "Read both sides, edit the file to the content you actually want (often a combination), git add it, then continue the merge or rebase. Avoid blindly choosing ours or theirs." },
        { q: "git reset vs git revert?", a: "reset moves the branch pointer back and rewrites history — only for local, unpushed commits. revert creates a new commit that undoes an earlier one — the safe choice on shared history." },
        { q: "How does git bisect help?", a: "It binary-searches history: you mark commits good or bad and it checks out midpoints, finding the commit that introduced a bug in log(n) steps." },
        { q: "What makes a good commit?", a: "One logical change, a concise imperative subject, and a body explaining why — the context a reviewer could not get from the diff." },
        { q: "What is good PR hygiene?", a: "Small, short-lived branches and small PRs; a description with context and how it was tested; and reviews that are specific and kind, separating blocking issues from suggestions." }
      ],
      quiz: [
        { q: "You want a linear history for your local feature branch before opening a PR. Use…", options: ["git merge", "git rebase", "git reset --hard", "git stash"], answer: 1, explain: "Rebase replays your local commits on top of main, giving a linear history." },
        { q: "A bad commit was pushed to main yesterday. Safest way to undo it?", options: ["git reset --hard HEAD~1 and force-push", "git revert <commit>", "Delete the repository", "git restore"], answer: 1, explain: "revert adds a commit that undoes the change without rewriting shared history." },
        { q: "A bug appeared sometime in the last 100 commits. Fastest way to find it?", options: ["Read every diff", "git bisect", "git blame", "git log --stat"], answer: 1, explain: "bisect binary-searches with good/bad answers, in about 7 steps for 100 commits." },
        { q: "Why not rebase main onto your feature branch and force-push?", options: ["It is too slow", "It rewrites history others have already pulled", "Rebase only works on one commit", "It deletes branches"], answer: 1, explain: "Rewriting shared commits breaks every clone that already has them." },
        { q: "During a conflict, 'theirs' refers to…", options: ["Your current branch", "The branch being merged in or rebased onto", "The remote always", "The older version"], answer: 1, explain: "Ours is the branch you are on; theirs is the incoming side. In a rebase the roles can feel swapped, so read the content." }
      ]
    },

    "web-perf": {
      title: "Web Performance & PWA",
      track: "frontend",
      icon: "📊",
      blurb: "Web performance is how fast a page becomes usable: measured by Core Web Vitals (LCP, INP, CLS), improved by rendering strategy, caching, and loading less — and extended offline and installable with Progressive Web Apps.",
      read: `
        <p><strong>Core Web Vitals</strong> are the user-centric metrics Google measures for every page. <em>LCP</em> (Largest Contentful Paint) is when the main content appears; <em>INP</em> (Interaction to Next Paint) is responsiveness to input; <em>CLS</em> (Cumulative Layout Shift) is visual stability. "Good" is LCP under 2.5s, INP under 200ms, CLS under 0.1 — measured at the 75th percentile of real users.</p>
        <table><thead><tr><th>Metric</th><th>Improve it by</th></tr></thead><tbody>
        <tr><td>LCP</td><td>Server response time (CDN, cache), prioritizing the hero image, preloading key resources, no render-blocking CSS/JS</td></tr>
        <tr><td>INP</td><td>Less JavaScript, breaking long tasks, avoiding heavy work on input events, deferring non-urgent updates</td></tr>
        <tr><td>CLS</td><td>Size and aspect-ratio on images and ads, reserving space for late content, avoiding injecting content above existing content</td></tr>
        </tbody></table>
        <p><strong>The critical rendering path</strong> is what must happen before first paint: HTML → DOM, CSS → CSSOM, then layout and paint. CSS is render-blocking and parser-blocking scripts halt the parser, so inline critical CSS, defer non-essential scripts, and avoid synchronous third-party scripts in the head.</p>
        <pre><code>&lt;link rel="preload" as="font" href="/fonts/inter.woff2" crossorigin&gt;
&lt;link rel="preconnect" href="https://api.example.com"&gt;
&lt;script src="/app.js" defer&gt;&lt;/script&gt;
&lt;img src="hero.avif" width="1200" height="600" fetchpriority="high"&gt;
&lt;img src="below-fold.webp" loading="lazy" width="600" height="400"&gt;</code></pre>
        <p><strong>Load less, later:</strong> modern image formats (AVIF/WebP) with responsive <code>srcset</code>, lazy loading below the fold, code splitting by route, and analyzing the bundle to remove what nobody uses (see the React performance topic). Most slow pages are slow because of too much JavaScript.</p>
        <p><strong>Service Workers and PWA:</strong> a service worker is a script the browser runs between page and network; it can intercept requests and answer from a cache (Cache API), enabling offline use and a fast, app-shell model. Combined with a web manifest it makes the site installable — a Progressive Web App. Updates are versioned: install the new worker, skip waiting when safe, and cache assets with hashed filenames.</p>
        <pre><code>self.addEventListener("fetch", (event) =&gt; {
  event.respondWith(
    caches.match(event.request).then((cached) =&gt;
      cached || fetch(event.request))     // cache-first for static assets
  );
});</code></pre>
        <p><strong>Web Workers</strong> run scripts on a background thread, so CPU-heavy work (parsing, compression, image processing) does not block the main thread and hurt INP. HTTP caching (Cache-Control, ETag) is covered in the HTTP topic.</p>`,
      cards: [
        { q: "What are the Core Web Vitals?", a: "LCP — when the main content paints (good under 2.5s). INP — responsiveness to interactions (under 200ms). CLS — how much the layout shifts (under 0.1). Measured at the 75th percentile of real users." },
        { q: "How do you improve LCP?", a: "Faster server response (CDN, caching), prioritizing the largest element (preload, fetchpriority, no lazy-loading on it), removing render-blocking CSS and JS, and optimizing the hero image format and size." },
        { q: "How do you improve INP?", a: "Ship less JavaScript, split long tasks, keep input handlers light, and defer non-urgent work. INP measures the delay between the user's action and the next painted frame." },
        { q: "What causes layout shift (CLS)?", a: "Content moving after paint: images without dimensions, ads or embeds that load late, web font swaps, or inserting content above what the user is reading." },
        { q: "What is the critical rendering path?", a: "The sequence before first paint: build the DOM and CSSOM, combine them, then layout and paint. CSS blocks rendering and classic script tags block parsing, so minimize and prioritize what sits in that path." },
        { q: "What do preload, preconnect and defer do?", a: "preload fetches a resource you will need soon; preconnect opens a connection to another origin early; defer downloads a script without blocking parsing and runs it after the document is parsed." },
        { q: "What is a service worker?", a: "A background script that acts as a programmable proxy between the page and the network. It can intercept fetches and serve from cache, which enables offline support and instant repeat visits." },
        { q: "What makes a site a PWA?", a: "A service worker for offline/caching, a web app manifest (name, icons, display mode) so it can be installed, and HTTPS. It is a set of capabilities, not a framework." },
        { q: "When would you use a Web Worker?", a: "For CPU-heavy work that would block the main thread — parsing large data, compression, cryptography, image processing — keeping the UI responsive." },
        { q: "What is the first thing to check on a slow page?", a: "Measure with real data and the DevTools performance panel: a long main thread and a large JS bundle are the usual cause. Optimize what the measurement shows, not guesses." }
      ],
      quiz: [
        { q: "A page's buttons feel laggy only after lots of JavaScript loads. The metric affected is…", options: ["LCP", "INP", "CLS", "TTFB"], answer: 1, explain: "INP measures interaction latency; heavy main-thread JavaScript delays the response to input." },
        { q: "Images loading push the text down the page. This hurts…", options: ["CLS", "LCP", "INP", "TTI"], answer: 0, explain: "Content moving after paint is layout shift. Set width/height or aspect-ratio so space is reserved." },
        { q: "Which loads a script without blocking HTML parsing?", options: ["<script src=a.js>", "<script src=a.js defer>", "<script> in the head", "@import"], answer: 1, explain: "defer downloads in parallel and executes after parsing; a classic script tag blocks the parser." },
        { q: "Offline support in a web app is provided by…", options: ["localStorage", "A service worker", "Web Workers", "HTTP/2"], answer: 1, explain: "The service worker intercepts requests and can answer from its cache when the network is unavailable." },
        { q: "You need to parse a 20MB file in the browser without freezing the UI. Use…", options: ["setTimeout", "A Web Worker", "A larger bundle", "CSS animations"], answer: 1, explain: "Workers run on a separate thread, so the main thread stays free to respond to input." }
      ]
    },

    "cloud": {
      title: "Cloud Fundamentals",
      track: "backend",
      icon: "☁️",
      blurb: "Cloud computing is renting compute, storage and networking on demand, and the managed services built on them. Knowing the service categories and their trade-offs — control versus operations — is what interviewers probe.",
      read: `
        <p><strong>The shared responsibility model:</strong> the provider secures the data centers, hardware and the managed services themselves; <em>you</em> secure what you put in them — data, configuration, access and code. "It's in the cloud" never removes your part.</p>
        <p><strong>The compute spectrum</strong> trades control for less operations:</p>
        <table><thead><tr><th>Model</th><th>You manage</th><th>Trade-off</th></tr></thead><tbody>
        <tr><td>VM (IaaS)</td><td>OS, runtime, app</td><td>Full control; you patch and scale everything</td></tr>
        <tr><td>Containers / Kubernetes</td><td>App and cluster</td><td>Portability and density; cluster complexity</td></tr>
        <tr><td>PaaS (App Service, Beanstalk)</td><td>Only the app</td><td>Fast to ship; less control of the environment</td></tr>
        <tr><td>FaaS / serverless (Lambda)</td><td>Just a function</td><td>No servers to run; cold starts, limits, per-invocation cost</td></tr>
        </tbody></table>
        <p><strong>Storage and data:</strong> object storage (S3-style blobs) for files and static assets; block storage for disks; managed databases (RDS, DynamoDB, Cosmos) that handle backups, patching and failover. Choosing managed over self-hosted is usually right unless you have a specific reason.</p>
        <p><strong>Networking:</strong> a <em>VPC</em> is your private network in the cloud with subnets across availability zones; a <em>load balancer</em> spreads traffic across healthy instances; a <em>CDN</em> caches content near users (and terminates TLS). Security groups and subnets define what can reach what.</p>
        <pre><code>Internet ──► CDN ──► Load balancer
                          │
            ┌─────────────┴─────────────┐
         Private subnet              Private subnet      (one per zone)
         [ app instances ]           [ app instances ]
                          │
                   Managed database (multi-AZ)</code></pre>
        <p><strong>Identity and access (IAM):</strong> every request is made by some principal (user, service role). Apply least privilege: separate roles per service, short-lived credentials, and never access keys in code or environment files.</p>
        <p><strong>Serverless trade-offs:</strong> you pay per invocation and scale to zero, but cold starts add latency on the first request, execution time and payload are limited, and vendor coupling is high. <strong>Multi-region</strong> improves latency and availability but forces you into the consistency trade-offs of the CAP theorem.</p>`,
      cards: [
        { q: "What is the shared responsibility model?", a: "The provider secures the infrastructure and managed services; you secure everything you put on top — data, configuration, access policies and application code." },
        { q: "IaaS vs PaaS vs serverless?", a: "IaaS: you manage the OS and up. PaaS: you manage only the application. Serverless: you manage only a function. Each step up removes operations and removes control." },
        { q: "When is serverless a poor fit?", a: "Steady high traffic (per-invocation cost exceeds reserved compute), latency-sensitive paths hit by cold starts, long-running jobs beyond execution limits, or heavy state." },
        { q: "What are the main storage categories?", a: "Object storage for files and assets (S3), block storage for VM disks, file storage for shared filesystems, and managed databases for structured data." },
        { q: "What is a VPC?", a: "A private network you define in the cloud: its IP range, subnets spread across availability zones, routing, and firewall rules (security groups) controlling what can talk to what." },
        { q: "What do a load balancer and a CDN each do?", a: "A load balancer distributes traffic across healthy instances in one or more zones. A CDN caches static (and sometimes dynamic) content at edge locations close to users." },
        { q: "What is least privilege in IAM?", a: "Each user and service gets only the permissions it needs — separate roles per service, short-lived credentials, no wildcard policies, and no keys in code." },
        { q: "Why deploy across multiple availability zones?", a: "So that a failure in one zone (power, network) does not take the service down. Instances are spread across zones behind a load balancer, and managed databases replicate across zones." },
        { q: "What is a cold start?", a: "The latency of provisioning a fresh function instance in serverless when none is warm. Mitigate with provisioned concurrency, smaller deployments, or reserving serverless for async work." },
        { q: "What does multi-region cost you?", a: "Complexity and consistency: data must replicate across regions, so you choose per use case between strong consistency and availability (CAP), and you handle failover." }
      ],
      quiz: [
        { q: "A team wants to run code on events without managing any servers. The model is…", options: ["IaaS", "PaaS", "FaaS / serverless", "On-premise"], answer: 2, explain: "Functions as a Service runs your code on demand; the provider manages everything beneath it." },
        { q: "Who is responsible for securing data stored in a managed cloud database?", options: ["The cloud provider", "The customer", "The CDN", "Nobody"], answer: 1, explain: "The provider secures the service; data, access policy and configuration are the customer's responsibility." },
        { q: "An image-heavy site is slow for users far from its servers. Best fix?", options: ["More database replicas", "A CDN", "A larger VM", "Serverless"], answer: 1, explain: "A CDN caches assets at edge locations near users, cutting latency and origin load." },
        { q: "A service runs constantly at high load. Serverless is likely…", options: ["Cheaper than reserved compute", "More expensive than reserved compute, and a poor fit", "Required", "Cold-start free"], answer: 1, explain: "Per-invocation pricing favors bursty workloads; steady high traffic is cheaper on reserved instances or containers." },
        { q: "Deploying across three availability zones protects against…", options: ["Slow queries", "A single zone's outage", "High CDN costs", "Cold starts"], answer: 1, explain: "Spreading instances across zones means one zone's failure does not take the service down." }
      ]
    },

    "os-basics": {
      title: "OS & Concurrency Basics",
      track: "backend",
      icon: "📟",
      blurb: "Operating-system fundamentals explain what your code actually runs on: processes and threads, how the CPU is shared, how memory is managed, and how waiting for I/O is modeled — the base under event loops, thread pools and locks.",
      read: `
        <p><strong>Process vs thread:</strong> a process has its own memory space, file descriptors and resources; threads inside a process share that memory and each have their own stack and program counter. Processes are isolated (a crash does not take down the others); threads are cheap to communicate with (shared memory) but need synchronization.</p>
        <pre><code>Process A                      Process B
┌───────────────┐             ┌───────────────┐
│ heap (shared  │             │ heap (own     │
│ by threads)   │             │ address space)│
│ ┌────┐ ┌────┐ │   no direct │ ┌────┐        │
│ │T1  │ │T2  │ │   sharing ◄─┼─┤T3  │        │
│ │stck│ │stck│ │   except IPC│ │stck│        │
│ └────┘ └────┘ │             │ └────┘        │
└───────────────┘             └───────────────┘</code></pre>
        <p><strong>Scheduling and context switching:</strong> with more runnable threads than cores, the OS switches between them (preemption). A context switch saves and restores registers and can flush CPU caches, so threads that are many but mostly waiting (I/O-bound) are efficient, while many CPU-bound threads mostly add switching overhead.</p>
        <p><strong>Synchronization:</strong> a <em>mutex</em> lets one thread into a critical section; a <em>semaphore</em> allows up to N; a <em>race condition</em> appears when correctness depends on timing — the fix is to protect shared state, not to "be careful". A <em>deadlock</em> is threads each holding a lock and waiting for another's; avoid it with consistent lock ordering and short critical sections (the database topic covers the same idea for transactions).</p>
        <pre><code>// Race: two threads read n, both add, one increment is lost
n = n + 1        // read → add → write, not atomic

// Fix: only one thread in the critical section
lock.acquire(); n = n + 1; lock.release();</code></pre>
        <p><strong>Memory:</strong> each process sees a <em>virtual</em> address space that the OS maps to physical memory in pages; this gives isolation and lets a machine run more memory than it has (swapping). The <em>stack</em> holds call frames and local values and is fast and automatically reclaimed; the <em>heap</em> holds dynamically allocated objects and is where garbage collection and leaks live.</p>
        <p><strong>I/O models:</strong> with blocking I/O a thread waits until data is ready. With non-blocking I/O and readiness notifications (epoll, kqueue, IOCP) one thread asks "which sockets are ready?" and handles only those — the mechanism behind the Node.js event loop and nginx. Many concurrent connections then cost little more than a data structure.</p>
        <p><strong>Syscalls and caches:</strong> user code reaches the kernel only through system calls (read, write, open, socket), which are relatively expensive — one reason buffering and batching matter. And CPU caches make sequential access to contiguous memory far faster than pointer-chasing across the heap.</p>`,
      cards: [
        { q: "Process vs thread?", a: "A process has its own memory and resources; threads within it share memory and have separate stacks. Processes give isolation, threads give cheap shared state that needs synchronization." },
        { q: "What is a context switch and why does it cost?", a: "The OS saves one thread's state and restores another's when it preempts. It costs time and can evict CPU cache contents, so too many CPU-bound threads mostly add overhead." },
        { q: "Mutex vs semaphore?", a: "A mutex allows one thread into a critical section at a time. A semaphore allows up to N holders — useful for rate-limiting access to a pool of resources." },
        { q: "What is a race condition?", a: "When the result depends on the timing of concurrent accesses — for example two threads doing read-modify-write on the same variable and losing an update. Fix by protecting the shared state with a lock or an atomic operation." },
        { q: "What is a deadlock and how do you avoid it?", a: "Threads each hold a lock and wait for a lock another holds, so none can proceed. Avoid it with a consistent lock ordering everywhere and short critical sections." },
        { q: "What is virtual memory?", a: "Each process gets its own virtual address space, which the OS maps to physical memory in pages. It provides isolation between processes and allows more memory to be used than physically exists." },
        { q: "Stack vs heap?", a: "The stack holds call frames and local values, is fast, and is reclaimed automatically. The heap holds dynamically allocated objects with manual or garbage-collected lifetimes — the home of memory leaks." },
        { q: "Blocking vs non-blocking I/O?", a: "Blocking: a thread waits until an operation completes. Non-blocking: the thread asks which descriptors are ready (epoll, kqueue, IOCP) and handles only those — one thread can serve many connections." },
        { q: "What is a system call?", a: "The controlled entry point from user code into the kernel (read, write, open, socket). It has a fixed cost, which is why buffering and batching reduce overhead." },
        { q: "Why does memory locality matter?", a: "CPU caches make sequential access to nearby memory much faster than following pointers across the heap. Data layout affects performance as much as algorithm choice for hot paths." }
      ],
      quiz: [
        { q: "Two threads run counter = counter + 1 one million times each; the result is below two million. Why?", options: ["Integer overflow", "A race condition: the update is not atomic", "Virtual memory", "A context switch is impossible"], answer: 1, explain: "Read-modify-write interleaves between threads. Protect it with a lock or an atomic increment." },
        { q: "One web server thread handles tens of thousands of mostly idle connections. It is using…", options: ["Blocking I/O with one thread per connection", "Non-blocking I/O with readiness notifications", "More cores than connections", "A semaphore"], answer: 1, explain: "epoll-style readiness lets one thread serve many waiting connections cheaply — the event-loop model." },
        { q: "Which avoids deadlock most reliably?", options: ["Longer critical sections", "Acquiring locks in the same order in every thread", "More threads", "Larger stacks"], answer: 1, explain: "A consistent global lock order makes a cycle of waiting impossible." },
        { q: "A crash in one process does not affect others because…", options: ["They share the heap", "Each has a separate virtual address space", "Threads are expensive", "Syscalls are fast"], answer: 1, explain: "Virtual memory isolates processes; a fault in one address space cannot reach another." },
        { q: "Where do dynamically allocated objects live?", options: ["The stack", "The heap", "The cache", "Registers"], answer: 1, explain: "The heap holds objects with flexible lifetimes; the stack holds call frames and locals." }
      ]
    }
  }
};
