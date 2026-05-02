/* ═══════════════════════════════════════════════════════
   data.js — All content for the probability reference
═══════════════════════════════════════════════════════ */

const TABS = [
  { id: 'laws',     label: 'Laws & Formulas' },
  { id: 'rv',       label: 'Random Variables' },
  { id: 'discrete', label: 'Discrete RV & Examples' },
  { id: 'continuous', label: 'Continuous RV & Examples' },
  { id: 'cond',     label: 'Conditional Probability' },
  { id: 'examples', label: 'All Worked Problems' },
];

const HERO_TAGS = [
  { label: 'Set Theory',         tab: 'laws' },
  { label: 'Probability Axioms', tab: 'laws' },
  { label: 'Addition Rules',     tab: 'laws' },
  { label: 'Random Variables',   tab: 'rv' },
  { label: 'PMF / PDF',          tab: 'discrete' },
  { label: 'CDF',                tab: 'discrete' },
  { label: 'Continuous RV',      tab: 'continuous' },
  { label: 'Conditional P',      tab: 'cond' },
  { label: '21 Problems',        tab: 'examples' },
];

/* ── PANEL: LAWS & FORMULAS ──────────────────────────── */
const PANEL_LAWS = [
  {
    type: 'card',
    color: 'c-blue',
    num: 'I',
    title: 'Set Theory',
    grid: 2,
    cells: [
      { label: 'Complement',        expr: "A' = S − A" },
      { label: 'Difference',        expr: "A − B = A ∩ B'" },
      { label: 'De Morgan 1',       expr: "(A ∪ B)' = A' ∩ B'" },
      { label: 'De Morgan 2',       expr: "(A ∩ B)' = A' ∪ B'" },
      { label: 'Complement laws',   expr: "A ∪ A' = S  |  A ∩ A' = ∅  |  (A')' = A" },
      { label: 'Identity laws',     expr: 'A ∪ ∅ = A  |  A ∩ S = A' },
      { label: 'Disjoint definition (mutually exclusive)', expr: 'A ∩ B = ∅', span: 2 },
    ]
  },
  {
    type: 'card',
    color: 'c-teal',
    num: 'II',
    title: 'Basic Axioms of Probability',
    grid: 3,
    cells: [
      { label: 'Range',             expr: '0 ≤ P(A) ≤ 1' },
      { label: 'Certain event',     expr: 'P(S) = 1' },
      { label: 'Impossible event',  expr: 'P(∅) = 0' },
      { label: 'Classical probability', expr: 'P(E) = n(E) / n(S)', span: 2 },
      { label: 'Complement rule',   expr: "P(A') = 1 − P(A)" },
    ]
  },
  {
    type: 'card',
    color: 'c-purple',
    num: 'III',
    title: 'Addition Rules',
    grid: 2,
    cells: [
      { label: 'General — two events',  expr: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', span: 2 },
      { label: 'Mutually exclusive (two events)', expr: 'P(A ∪ B) = P(A) + P(B)',
        tag: { label: 'Mutually exclusive — A ∩ B = ∅', cls: 'tag-blue' }, span: 2 },
      { label: 'General — three events',
        expr: 'P(A∪B∪C) = P(A)+P(B)+P(C) − P(A∩B) − P(A∩C) − P(B∩C) + P(A∩B∩C)', span: 2 },
      { label: 'Three events — mutually exclusive',
        expr: 'P(A∪B∪C) = P(A) + P(B) + P(C)',
        tag: { label: 'Mutually exclusive', cls: 'tag-blue' } },
      { label: 'Three events — independent',
        expr: "P(A∪B∪C) = 1 − P(A')·P(B')·P(C')",
        tag: { label: 'Independent', cls: 'tag-teal' } },
    ]
  },
  {
    type: 'card',
    color: 'c-amber',
    num: 'IV',
    title: 'Conditional Probability & Independence',
    grid: 2,
    cells: [
      { label: 'P(A given B)',          expr: 'P(A|B) = P(A∩B) / P(B)' },
      { label: 'P(B given A)',          expr: 'P(B|A) = P(A∩B) / P(A)' },
      { label: 'Multiplication rule',   expr: 'P(A∩B) = P(A|B)·P(B)' },
      { label: 'Complement of cond.',   expr: "P(A|B') = P(A∩B') / P(B')" },
      { label: 'Independent events — definition',
        expr: 'P(A∩B) = P(A)×P(B)  →  P(A|B) = P(A)  and  P(B|A) = P(B)',
        tag: { label: 'Independent', cls: 'tag-teal' }, span: 2 },
    ]
  },
  {
    type: 'card',
    color: 'c-coral',
    num: 'V',
    title: 'Special Relationships',
    grid: 2,
    cells: [
      { label: 'Only A (not B)',        expr: "P(A∩B') = P(A) − P(A∩B)" },
      { label: 'Only B (not A)',        expr: "P(A'∩B) = P(B) − P(A∩B)" },
      { label: 'Neither A nor B',       expr: "P(A'∩B') = 1 − P(A∪B)" },
      { label: 'At most one of A, B',   expr: "P(A'∪B') = 1 − P(A∩B)" },
      { label: 'Exactly one — A or B but not both',
        expr: "P(A∩B') + P(A'∩B)  =  P(A∪B) − P(A∩B)", span: 2 },
    ]
  },
  {
    type: 'card',
    color: 'c-navy',
    num: 'VI',
    title: 'Special Cases',
    grid: 3,
    cells: [
      { label: 'P(A ∩ B)',  expr: '= 0',    tag: { label: 'Mutually exclusive', cls: 'tag-blue' } },
      { label: "P(A ∩ B')", expr: '= P(A)', tag: { label: 'Mutually exclusive', cls: 'tag-blue' } },
      { label: "P(A' ∪ B')",expr: '= 1',    tag: { label: 'Mutually exclusive', cls: 'tag-blue' } },
      { label: 'P(A ∩ B)',  expr: '= P(A)', tag: { label: 'If A ⊂ B', cls: 'tag-purple' } },
      { label: 'P(A ∪ B)',  expr: '= P(B)', tag: { label: 'If A ⊂ B', cls: 'tag-purple' } },
      { label: 'P(A ∩ B)',  expr: '= P(A)·P(B)', tag: { label: 'Independent', cls: 'tag-teal' } },
    ]
  },
];

/* ── PANEL: RANDOM VARIABLES (theory) ───────────────── */
const PANEL_RV = [
  {
    type: 'card',
    color: 'c-blue',
    num: 'A',
    title: 'Random Variable — Overview',
    grid: 2,
    cells: [
      { label: 'Definition',     expr: 'X : S → ℝ   (a function on sample space S)' },
      { label: 'P.d.f (discrete)', expr: 'f(x) = P[X = x]' },
    ],
    extra: 'two-col-type'
  },
  {
    type: 'card',
    color: 'c-teal',
    num: 'B',
    title: 'Discrete RV — Probability Mass Function (PMF)',
    grid: 2,
    cells: [
      { label: 'Condition 1 — range',        expr: '0 ≤ f(x) ≤ 1   for all x' },
      { label: 'Condition 2 — total = 1',    expr: 'Σ f(xᵢ) = 1   (sum over all values)' },
      { label: 'PMF definition',             expr: 'P(X = x) = Σ P(x)  for x = x' },
      { label: 'How to find',                expr: 'List X values → count outcomes → divide by |S|' },
    ]
  },
  {
    type: 'card',
    color: 'c-purple',
    num: 'C',
    title: 'Continuous RV — Probability Density Function (PDF)',
    grid: 2,
    cells: [
      { label: 'Condition 1 — range',        expr: '0 ≤ f(x) ≤ 1   for all x' },
      { label: 'Condition 2 — integral = 1', expr: '∫₋∞^∞ f(x) dx = 1' },
      { label: 'Probability over interval',  expr: 'P(a < x < b) = ∫ₐ^b f(x) dx', span: 2 },
    ]
  },
  {
    type: 'card',
    color: 'c-amber',
    num: 'D',
    title: 'Cumulative Distribution Function (CDF)',
    grid: 2,
    cells: [
      { label: 'CDF — discrete',    expr: 'F(x) = Σ P(xᵢ)  for all xᵢ ≤ x  =  P(X ≤ x)' },
      { label: 'CDF — continuous',  expr: 'F(x) = ∫₋∞^x f(t) dt' },
      { label: 'Boundary values',   expr: 'F(−∞) = 0   |   F(+∞) = 1' },
      { label: 'Non-decreasing',    expr: 'a < b   →   F(a) ≤ F(b)' },
      { label: 'P(a ≤ x ≤ b) using CDF', expr: 'P(a ≤ x ≤ b) = F(b) − F(a)', span: 2 },
    ]
  },
  {
    type: 'card',
    color: 'c-green',
    num: 'E',
    title: 'Expectation, Variance & Standard Deviation',
    grid: 2,
    cells: [
      { label: 'Expected Value (Discrete)',    expr: 'E(X) = Σ x · P(x)', key: true },
      { label: 'Expected Value (Continuous)',  expr: 'E(X) = ∫ x · f(x) dx' },
      { label: 'Second Moment (Discrete)',     expr: 'E(X²) = Σ x² · P(x)' },
      { label: 'Second Moment (Continuous)',   expr: 'E(X²) = ∫ x² · f(x) dx' },
      { label: 'Variance',  expr: 'Var(X) = E(X²) − [E(X)]²',
        note: 'Variance measures spread around the mean', hot: true },
      { label: 'Standard Deviation',          expr: 'σ = √Var(X)' },
      { label: 'Linear Property',             expr: 'E(aX + b) = a·E(X) + b', span: 2 },
      { label: 'Variance Rule',               expr: 'Var(aX + b) = a² · Var(X)',
        span: 2, danger: true },
    ]
  },
];

/* ── PANEL: DISCRETE EXAMPLES ────────────────────────── */
const PANEL_DISCRETE = [
  {
    type: 'qblock',
    theme: '',
    num: 'Ex 1',
    title: 'Coin tossed twice. X = number of heads.',
    note: 'S = {HH, HT, TH, TT} — 4 equally likely outcomes. X = {0, 1, 2}',
    dist: {
      headers: ['x', '0 (TT)', '1 (HT or TH)', '2 (HH)'],
      xrow:    ['x', '0', '1', '2'],
      frow:    ['f(x)', '1/4', '2/4 = 1/2', '1/4'],
      check:   'Σ f(x) = 1/4 + 2/4 + 1/4 = 1.0 ✓'
    },
    cdf: [
      { val: '0',   cond: '−∞ < x < 0' },
      { val: '1/4', cond: '0 ≤ x < 1'  },
      { val: '3/4', cond: '1 ≤ x < 2'  },
      { val: '1.0', cond: '2 ≤ x < ∞'  },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-teal',
    num: 'Ex 2',
    title: 'Two fair dice. X = sum of upturned faces (X = 2 to 12). Total = 36.',
    dist: {
      headers: ['x','2','3','4','5','6','7','8','9','10','11','12'],
      xrow:    ['x','2','3','4','5','6','7','8','9','10','11','12'],
      frow:    ['f(x)','1/36','2/36','3/36','4/36','5/36','6/36','5/36','4/36','3/36','2/36','1/36'],
      check:   'Σ f(x) = 36/36 = 1.0 ✓'
    },
    cdf: [
      { val: '0',     cond: '−∞ < x < 2'   },
      { val: '1/36',  cond: '2 ≤ x < 3'    },
      { val: '3/36',  cond: '3 ≤ x < 4'    },
      { val: '6/36',  cond: '4 ≤ x < 5'    },
      { val: '10/36', cond: '5 ≤ x < 6'    },
      { val: '15/36', cond: '6 ≤ x < 7'    },
      { val: '21/36', cond: '7 ≤ x < 8'    },
      { val: '26/36', cond: '8 ≤ x < 9'    },
      { val: '30/36', cond: '9 ≤ x < 10'   },
      { val: '33/36', cond: '10 ≤ x < 11'  },
      { val: '35/36', cond: '11 ≤ x < 12'  },
      { val: '1.0',   cond: '12 ≤ x < ∞'   },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-purple',
    num: 'Ex 3',
    title: 'Coin tossed THREE times. X = number of heads.',
    note: 'S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT} — 8 equally likely outcomes. X = {0,1,2,3}',
    dist: {
      headers: ['x', '0 (TTT)', '1 (1 head)', '2 (2 heads)', '3 (HHH)'],
      xrow:    ['x', '0', '1', '2', '3'],
      frow:    ['f(x)', '1/8', '3/8', '3/8', '1/8'],
      check:   'Σ P(x) = 1/8 + 3/8 + 3/8 + 1/8 = 8/8 = 1 ✓'
    },
    answers: [
      { part: '0 heads (TTT)', val: '1 way → P = 1/8' },
      { part: '1 head',        val: 'HTT, THT, TTH → 3 ways → P = 3/8' },
      { part: '2 heads',       val: 'HHT, HTH, THH → 3 ways → P = 3/8' },
      { part: '3 heads (HHH)', val: '1 way → P = 1/8' },
    ],
    cdf: [
      { val: '0',   cond: '−∞ < x < 0' },
      { val: '1/8', cond: '0 ≤ x < 1'  },
      { val: '4/8', cond: '1 ≤ x < 2'  },
      { val: '7/8', cond: '2 ≤ x < 3'  },
      { val: '1',   cond: '3 ≤ x < ∞'  },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-amber',
    num: 'Ex 4',
    title: 'Balls 1–5, two drawn with replacement. X = (1st ball no.) − (2nd ball no.).',
    note: 'Total outcomes = 25. X ranges from −4 to +4.',
    dist: {
      headers: ['x','−4','−3','−2','−1','0','1','2','3','4'],
      xrow:    ['x','-4','-3','-2','-1','0','1','2','3','4'],
      frow:    ['f(x)','1/25','2/25','3/25','4/25','5/25','4/25','3/25','2/25','1/25'],
      check:   'Σ f(x) = 25/25 = 1.0 ✓'
    },
    answers: [
      { part: 'P(X ≥ 0)', val: '5/25 + 4/25 + 3/25 + 2/25 + 1/25 = 15/25 = 3/5' },
    ],
    cdf: [
      { val: '0',    cond: '−∞ < x < −4' },
      { val: '1/25', cond: '−4 ≤ x < −3' },
      { val: '3/25', cond: '−3 ≤ x < −2' },
      { val: '6/25', cond: '−2 ≤ x < −1' },
      { val: '10/25',cond: '−1 ≤ x < 0'  },
      { val: '15/25',cond: '0 ≤ x < 1'   },
      { val: '19/25',cond: '1 ≤ x < 2'   },
      { val: '22/25',cond: '2 ≤ x < 3'   },
      { val: '24/25',cond: '3 ≤ x < 4'   },
      { val: '1.0',  cond: '4 ≤ x < ∞'   },
    ]
  },
];

/* ── PANEL: CONTINUOUS EXAMPLES ──────────────────────── */
const PANEL_CONTINUOUS = [
  {
    type: 'card',
    color: 'c-green',
    num: '★',
    title: 'Continuous RV — Key Formulas',
    grid: 2,
    cells: [
      { label: 'Find k (normalisation)',  expr: '∫₋∞^∞ f(x) dx = 1   →   solve for k' },
      { label: 'CDF from PDF',            expr: 'F(x) = ∫₋∞^x f(t) dt' },
      { label: 'Probability over range',  expr: 'P(a < X < b) = F(b) − F(a)', span: 2 },
      { label: 'e^(−∞) = 0',             expr: 'e^(+∞) = ∞   |   e^0 = 1' },
      { label: '∫ e^(ax) dx',             expr: '= (1/a) e^(ax) + C' },
    ]
  },
  {
    type: 'qblock-cont',
    theme: 'th-green',
    num: 'Ex 4 (cont)',
    title: 'f(x) = k·e^(−x) for x ≥ 0, else 0. Find: ① k  ② CDF  ③ P(−2 < X < 5)',
    steps: [
      {
        label: '① Find k',
        lines: [
          '∫₀^∞ k·e^(−x) dx = 1',
          'k · [−e^(−x)]₀^∞ = 1',
          'k · (0 − (−1)) = 1',
          'k · 1 = 1   →   k = 1',
          'So  f(x) = e^(−x)  for x ≥ 0',
        ]
      },
      {
        label: '② CDF F(x)',
        lines: [
          'F(x) = ∫₀^x e^(−t) dt',
          '     = [−e^(−t)]₀^x',
          '     = −e^(−x) − (−e^0)',
          '     = 1 − e^(−x)   for x ≥ 0',
          'F(x) = 0   for x < 0',
        ]
      },
      {
        label: '③ P(−2 < X < 5)',
        lines: [
          'P(−2 < X < 5) = F(5) − F(−2)',
          'F(−2) = 0   (since x < 0)',
          'F(5)  = 1 − e^(−5)',
          'P(−2 < X < 5) = 1 − e^(−5) ≈ 0.9933',
        ]
      },
    ]
  },
];

/* ── PANEL: CONDITIONAL PROBABILITY ─────────────────── */
const PANEL_COND = [
  {
    type: 'card',
    color: 'c-amber',
    num: 'A',
    title: 'Core Conditional Probability Formulas',
    grid: 2,
    cells: [
      { label: 'Definition',              expr: 'P(A|B) = P(A∩B) / P(B)' },
      { label: 'Symmetric',               expr: 'P(B|A) = P(A∩B) / P(A)' },
      { label: 'Multiplication rule',     expr: 'P(A∩B) = P(A|B)·P(B) = P(B|A)·P(A)' },
      { label: 'Complement of condition', expr: "P(A|B') = P(A∩B') / P(B')" },
      { label: 'Key identity',            expr: "P(A∩B') = P(A) − P(A∩B)", span: 2 },
    ]
  },
  {
    type: 'qblock',
    theme: '',
    num: 'Example 1',
    title: 'Events C and D: P(C∩D′)=0.1, P(C′∩D)=0.15, P(C′∩D′)=0.2',
    note: "Strategy: four Venn regions sum to 1. P(C′∩D′)=0.2 → P(C∪D)=0.8.",
    answers: [
      { part: 'P(D)',       val: '= 0.7   (from working)' },
      { part: "P(D')",      val: '= 1 − 0.7 = 0.3' },
      { part: 'P(C)',       val: '= 0.65   (from working)' },
      { part: 'b(i) P(C|D′)', val: "P(C∩D') / P(D') = 0.1 / 0.3 = 1/3 ≈ 0.333" },
      { part: "b(ii) P(D'|C)", val: "P(D'∩C) / P(C) = 0.1 / 0.65 = 2/13 ≈ 0.154" },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-teal',
    num: 'Example 2 — Q9',
    title: 'Events E and F: P(E)=0.35, P(F)=0.45, P(E∩F′)=0.15',
    note: "Use P(E∩F') = P(E) − P(E∩F) to find intersection first.",
    answers: [
      { part: 'P(E∩F)',     val: '= P(E) − P(E∩F′) = 0.35 − 0.15 = 0.20 = 1/5' },
      { part: "P(F∩E')",    val: '= P(F) − P(E∩F) = 0.45 − 0.20 = 0.25' },
      { part: "P(E')",      val: '= 1 − 0.35 = 0.65' },
      { part: 'b(i) P(E|F)',  val: 'P(E∩F)/P(F) = 0.20/0.45 = 4/9' },
      { part: "b(ii) P(F|E')", val: "P(F∩E')/P(E') = 0.25/0.65 = 5/13" },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-purple',
    num: 'Example 3',
    title: '70 students: 45 passed Maths (A), 35 passed Physics (B), 20 passed both.',
    answers: [
      { part: 'P(A)',       val: '45/70' },
      { part: 'P(B)',       val: '35/70' },
      { part: 'P(A∩B)',     val: '20/70' },
      { part: "P(A∩B')",    val: '= 45/70 − 20/70 = 25/70' },
      { part: "P(B')",      val: '= 35/70 = 1/2' },
      { part: 'i) P(A|B)',  val: '(20/70)/(35/70) = 20/35 = 4/7' },
      { part: "ii) P(A|B')", val: '(25/70)/(35/70) = 25/35 = 5/7' },
    ]
  },
];

/* ── PANEL: ALL WORKED EXAMPLES (Q1–Q21) ────────────── */
const PANEL_EXAMPLES = [
  {
    type: 'qblock',
    theme: '',
    num: 'Q 1',
    title: 'S={0..9}, A={0,2,4,6,8}, B={1,3,5,7,9}, C={2,3,4,5}, D={1,6,7}',
    answers: [
      { part: 'a) A∪C',       val: '{0, 2, 3, 4, 5, 6, 8}' },
      { part: 'b) A∪B',       val: '{0,1,2,3,4,5,6,7,8,9} = S' },
      { part: "c) C'",         val: '{0, 1, 6, 7, 8, 9}' },
      { part: 'd) (C′∩D)∪B',  val: "C'∩D={1,6,7} → {1,6,7}∪{1,3,5,7,9} = {1,3,5,6,7,9}" },
      { part: "e) (S∪C)'",     val: 'S∪C=S → S′= ∅' },
      { part: 'f) A∩C∩D′',    val: "D'={0,2,3,4,5,8,9} | A∩C={2,4} | Result: {2,4}" },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-teal',
    num: 'Q 2',
    title: 'S={copper,sodium,nitrogen,potassium,uranium,oxygen,zinc}, A={copper,sodium,zinc}, B={sodium,nitrogen,potassium}, C={oxygen}',
    answers: [
      { part: "a) A'",         val: '{nitrogen, potassium, uranium, oxygen}' },
      { part: 'b) A∪C',        val: '{copper, sodium, zinc, oxygen}' },
      { part: "c) (A∩B')∪C'",  val: "B'={copper,uranium,oxygen,zinc} | A∩B'={copper,zinc} | C'=S−C | Result: {copper,sodium,nitrogen,potassium,uranium,zinc}" },
      { part: 'd) A∩B∩C',      val: 'A∩B={sodium} | {sodium}∩{oxygen} = ∅' },
      { part: "e) B'∩C'",       val: '{copper, uranium, zinc}' },
      { part: "f) (A'∪B')∩(A'∩C)", val: "A'∩C={oxygen} → Result: {oxygen}" },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-purple',
    num: 'Q 3',
    title: 'Two fair dice tossed. Total outcomes = 36.',
    answers: [
      { part: 'a) Total = 8', val: '(2,6)(3,5)(4,4)(5,3)(6,2) → 5 outcomes | P = 5/36' },
      { part: 'b) At most 5', val: 'Totals 2→5: 1+2+3+4 = 10 | P = 10/36 = 5/18' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-amber',
    num: 'Q 4',
    title: '16 study French, 21 study Spanish, 30 altogether.',
    note: '30 = 16+21−Both → Both = 7 | French only = 9, Spanish only = 14',
    answers: [
      { part: 'a) P(French only)',  val: '9/30 = 3/10' },
      { part: 'b) P(Spanish only)', val: '14/30 = 7/15' },
      { part: 'c) P(Both)',         val: '7/30' },
      { part: 'd) P(F or S)',       val: '30/30 = 1' },
    ]
  },
  {
    type: 'qblock',
    theme: '',
    num: 'Q 5',
    title: '29 children: 15 like history, 21 like maths, all like at least one.',
    note: '29 = 15+21−Both → Both = 7 | Maths only = 14',
    answers: [
      { part: 'P(Maths not Hist)', val: '14/29' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-teal',
    num: 'Q 6',
    title: 'P(A)=1/5, P(A∪B) = 2P(A)−P(B). Find P(B).',
    note: 'From addition rule: 2P(B) = P(A) + P(A∩B)',
    answers: [
      { part: 'i) Disjoint',    val: 'P(A∩B)=0 → 2P(B)=1/5 → P(B) = 1/10' },
      { part: 'ii) Independent',val: 'P(A∩B)=(1/5)P(B) → (9/5)P(B)=1/5 → P(B) = 1/9' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-purple',
    num: 'Q 7',
    title: 'P(B)=1/4, P(A∪B)=3P(A)−P(B). Find P(A).',
    note: 'Simplify: 1/2 = 2P(A) + P(A∩B)',
    answers: [
      { part: 'i) Disjoint',    val: '1/2 = 2P(A) → P(A) = 1/4' },
      { part: 'ii) Independent',val: '1/2 = (9/4)P(A) → P(A) = 2/9' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-amber',
    num: 'Q 8',
    title: 'Two dice rolled. Total = 36.',
    answers: [
      { part: 'A. 1st > 2nd',  val: '15 outcomes → P = 5/12' },
      { part: 'B. Sum > 8',    val: 'Sums 9,10,11,12: 4+3+2+1=10 → P = 5/18' },
      { part: 'C. Sum ÷ 5',    val: 'Sum=5(4)+Sum=10(3) = 7 → P = 7/36' },
      { part: 'D. Equal faces', val: '(1,1)…(6,6) → 6 → P = 1/6' },
      { part: 'E. B∩C',        val: 'Sum>8 AND ÷5 → Sum=10: 3 outcomes → P = 1/12' },
      { part: 'F. B∩D',        val: 'Sum>8 AND equal: (5,5)(6,6) → P = 1/18' },
    ]
  },
  {
    type: 'qblock',
    theme: '',
    num: 'Q 9',
    title: 'P(total 7 or 11) with two dice?',
    answers: [
      { part: 'P(7 or 11)', val: '6+2 = 8 outcomes → 8/36 = 2/9' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-teal',
    num: 'Q 10',
    title: 'P(A)=3/8, P(B)=1/2, P(A∩B)=1/4 → P(A∪B) = 5/8',
    answers: [
      { part: 'i) P(Aᶜ∩Bᶜ)',  val: '1 − 5/8 = 3/8' },
      { part: 'ii) P(Aᶜ∪Bᶜ)', val: '1 − 1/4 = 3/4' },
      { part: 'iii) P(B∩Aᶜ)', val: '1/2 − 1/4 = 1/4' },
      { part: 'iv) P(A∩Bᶜ)',  val: '3/8 − 1/4 = 1/8' },
    ]
  },
  {
    type: 'qblock',
    theme: 'th-purple',
    num: 'Q 11–21',
    title: 'Quick answers — remaining problems',
    answers: [
      { part: 'Q11a',  val: 'P(Math or Hist) = 88/100 = 22/25' },
      { part: 'Q11b',  val: 'P(Hist not Math) = 34/100 = 17/50' },
      { part: 'Q12',   val: 'P(King or Queen) = 8/52 = 2/13' },
      { part: 'Q13',   val: 'P(die1=6 or die2=5) = 11/36' },
      { part: 'Q14',   val: 'P(Hockey not Baseball) = 8/25' },
      { part: 'Q15',   val: 'P(e) = 0.19,  P(d) = 0.38' },
      { part: 'Q16',   val: 'P(≥1 head, coin×2) = 3/4' },
      { part: 'Q17',   val: 'P(A∩B)=0.15 | P(only A)=0.5 | P(B′)=0.7 | P(only A or only B)=0.65' },
      { part: 'Q18',   val: "P(A')=0.63 | P(A∪B)=0.81 | P(A∩B)=0 | P(B')=0.56 | P(A∩B')=0.37 | P(A'∩B')=0.19" },
      { part: 'Q19',   val: 'P(A) = P(B) = 0.4' },
      { part: 'Q20a',  val: 'Mutually exclusive: p = 1/12' },
      { part: 'Q20b',  val: 'Independent: p = 1/9' },
      { part: 'Q21a',  val: 'Mutually exclusive: 47/60' },
      { part: 'Q21b',  val: 'Independent: 3/5' },
    ]
  },
];
