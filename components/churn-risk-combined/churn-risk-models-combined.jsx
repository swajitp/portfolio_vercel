"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  Users,
  Headphones,
  MessageSquare,
  BrainCircuit,
  ChevronDown,
  ArrowRight,
  Info,
  MousePointer2,
  Database,
  Split,
  Trophy,
  Search,
  AlertTriangle,
  ExternalLink,
  Check,
  Scale,
  Sparkles
} from "lucide-react";

const customers=[
 {id:1,adoption:{mau:"0.42",login:"1.3 / week",feature:"28%",onboarding:"62%",score:40},engagement:{sponsor:"60 / 100",cadence:"1 / month",response:"46 / 100",plan:"40%",score:49},support:{tickets:"18 / month",p1:"2",age:"11 days",escalations:"2",unresolved:"4",score:30},voc:{nps:"25",csat:"3.1 / 5",detractor:"High",feedback:"Negative",sentiment:"-0.42",score:28}},
 {id:2,adoption:{mau:"0.71",login:"3.8 / week",feature:"61%",onboarding:"86%",score:68},engagement:{sponsor:"76 / 100",cadence:"2 / month",response:"72 / 100",plan:"65%",score:70},support:{tickets:"8 / month",p1:"1",age:"5 days",escalations:"1",unresolved:"1",score:67},voc:{nps:"41",csat:"4.0 / 5",detractor:"Low",feedback:"Mixed",sentiment:"+0.18",score:64}},
 {id:3,adoption:{mau:"0.83",login:"4.6 / week",feature:"72%",onboarding:"94%",score:79},engagement:{sponsor:"84 / 100",cadence:"3 / month",response:"82 / 100",plan:"78%",score:82},support:{tickets:"5 / month",p1:"0",age:"2 days",escalations:"0",unresolved:"1",score:86},voc:{nps:"55",csat:"4.4 / 5",detractor:"Low",feedback:"Positive",sentiment:"+0.54",score:83}},
 {id:4,adoption:{mau:"0.31",login:"0.8 / week",feature:"19%",onboarding:"48%",score:29},engagement:{sponsor:"42 / 100",cadence:"0 / month",response:"35 / 100",plan:"25%",score:33},support:{tickets:"22 / month",p1:"3",age:"16 days",escalations:"3",unresolved:"6",score:22},voc:{nps:"8",csat:"2.6 / 5",detractor:"High",feedback:"Negative",sentiment:"-0.61",score:20}},
 {id:5,adoption:{mau:"0.58",login:"2.4 / week",feature:"48%",onboarding:"73%",score:57},engagement:{sponsor:"69 / 100",cadence:"2 / month",response:"61 / 100",plan:"55%",score:61},support:{tickets:"11 / month",p1:"1",age:"7 days",escalations:"1",unresolved:"2",score:58},voc:{nps:"36",csat:"3.7 / 5",detractor:"Medium",feedback:"Mixed",sentiment:"+0.05",score:56}},
 {id:6,adoption:{mau:"0.91",login:"5.2 / week",feature:"81%",onboarding:"97%",score:88},engagement:{sponsor:"91 / 100",cadence:"4 / month",response:"89 / 100",plan:"90%",score:90},support:{tickets:"3 / month",p1:"0",age:"1 day",escalations:"0",unresolved:"0",score:93},voc:{nps:"68",csat:"4.7 / 5",detractor:"Low",feedback:"Positive",sentiment:"+0.72",score:91}},
 {id:7,adoption:{mau:"0.49",login:"1.9 / week",feature:"39%",onboarding:"67%",score:49},engagement:{sponsor:"58 / 100",cadence:"1 / month",response:"53 / 100",plan:"47%",score:53},support:{tickets:"14 / month",p1:"2",age:"9 days",escalations:"1",unresolved:"3",score:44},voc:{nps:"29",csat:"3.3 / 5",detractor:"Medium",feedback:"Mixed",sentiment:"-0.12",score:45}},
 {id:8,adoption:{mau:"0.76",login:"4.1 / week",feature:"69%",onboarding:"89%",score:75},engagement:{sponsor:"80 / 100",cadence:"3 / month",response:"77 / 100",plan:"72%",score:77},support:{tickets:"6 / month",p1:"0",age:"3 days",escalations:"0",unresolved:"1",score:80},voc:{nps:"49",csat:"4.2 / 5",detractor:"Low",feedback:"Positive",sentiment:"+0.39",score:76}},
 {id:9,adoption:{mau:"0.37",login:"1.1 / week",feature:"24%",onboarding:"54%",score:35},engagement:{sponsor:"50 / 100",cadence:"1 / month",response:"41 / 100",plan:"32%",score:41},support:{tickets:"20 / month",p1:"2",age:"13 days",escalations:"2",unresolved:"5",score:27},voc:{nps:"17",csat:"2.9 / 5",detractor:"High",feedback:"Negative",sentiment:"-0.48",score:25}},
 {id:10,adoption:{mau:"0.66",login:"3.1 / week",feature:"57%",onboarding:"82%",score:65},engagement:{sponsor:"73 / 100",cadence:"2 / month",response:"68 / 100",plan:"62%",score:67},support:{tickets:"9 / month",p1:"1",age:"6 days",escalations:"1",unresolved:"2",score:63},voc:{nps:"43",csat:"3.9 / 5",detractor:"Low",feedback:"Positive",sentiment:"+0.24",score:66}}
];

const groups=[
 {key:"adoption",title:"PRODUCT ADOPTION & USAGE",icon:Activity,tone:"blue",items:[["MAU / WAU","mau"],["Login frequency","login"],["Feature adoption","feature"],["Onboarding completion","onboarding"]]},
 {key:"engagement",title:"ENGAGEMENT & RELATIONSHIP",icon:Users,tone:"cyan",items:[["Executive sponsor health","sponsor"],["Meeting cadence","cadence"],["Responsiveness","response"],["Success-plan progress","plan"]]},
 {key:"support",title:"SUPPORT & TECHNICAL HEALTH",icon:Headphones,tone:"amber",items:[["Support ticket volume","tickets"],["P0 / P1 issues","p1"],["Issue ageing","age"],["Escalations","escalations"],["Unresolved product issues","unresolved"]]},
 {key:"voc",title:"VOICE OF CUSTOMER (VOC)",icon:MessageSquare,tone:"violet",items:[["NPS","nps"],["CSAT","csat"],["Detractor signals","detractor"],["Qualitative feedback","feedback"],["Customer sentiment","sentiment"]]}
];

const status=s=>s>=75?{label:"HEALTHY",tone:"healthy",copy:"This account is in the Healthy range. Maintain value and look for expansion opportunities."}:s>=55?{label:"WATCH",tone:"watch",copy:"This account is in the Watch range. Act on the weakest signals before risk increases."}:{label:"CHURN RISK",tone:"risk",copy:"This account is in the Churn Risk range. Prioritize the weakest signals and start a recovery motion."};

function SignalCard({group,customer,selected}){
 const Icon=group.icon;
 return <div className={`signal-card ${group.tone} ${selected ? "selected" : ""}`}>
   <div className="signal-icon"><Icon size={25}/></div>
   <div className="signal-body">
     <h3>{group.title}</h3>
     <div className="metric-pills">
       {group.items.map(([label,key])=><div className={`metric-pill ${selected ? "with-value" : ""}`} key={key}>
         <span>{label}</span>
         {selected&&<b>{customer[group.key][key]}</b>}
       </div>)}
     </div>
   </div>
 </div>
}


const categoryHealth = [
  { name: "Category A", arr: "ARR > $100K", total: 60, churn: 12, watch: 22, healthy: 26 },
  { name: "Category B", arr: "ARR $50K – $100K", total: 50, churn: 10, watch: 18, healthy: 22 },
  { name: "Category C", arr: "ARR $20K – $50K", total: 45, churn: 8, watch: 16, healthy: 21 },
  { name: "Category D", arr: "ARR < $20K", total: 45, churn: 8, watch: 16, healthy: 21 },
];

const csmHealth = [
  { name: "James Anderson", total: 42, churn: 9, watch: 14, healthy: 19, photo: "https://i.pravatar.cc/120?img=12" },
  { name: "Sarah Mitchell", total: 38, churn: 6, watch: 13, healthy: 19, photo: "https://i.pravatar.cc/120?img=47" },
  { name: "Michael Thompson", total: 35, churn: 7, watch: 11, healthy: 17, photo: "https://i.pravatar.cc/120?img=11" },
  { name: "Emily Davis", total: 30, churn: 0, watch: 12, healthy: 18, photo: "https://i.pravatar.cc/120?img=32" },
  { name: "David Wilson", total: 28, churn: 0, watch: 10, healthy: 18, photo: "https://i.pravatar.cc/120?img=13" },
  { name: "Olivia Martinez", total: 27, churn: 0, watch: 10, healthy: 17, photo: "https://i.pravatar.cc/120?img=49" },
];

function Segment({ value, total, kind, showLabel = true }) {
  const pct = total ? Math.round((value / total) * 100) : 0;
  if (!value) return null;
  return (
    <div className={`overview-segment ${kind}`} style={{ width: `${pct}%` }}>
      {showLabel && pct >= 13 ? `${pct}%` : ""}
    </div>
  );
}

function PortfolioOverview() {
  return (
    <section className="portfolio-overview">
      <div className="overview-heading">
        <span>OVERVIEW</span>
        <h2>Churn Risk Overview</h2>
        <p>Portfolio health at a glance</p>
      </div>

      <div className="overview-grid">
        <article className="overview-panel category-panel">
          <div className="panel-title-row">
            <h3>Accounts by Category &amp; Health</h3>
            <div className="overview-legend">
              <span><i className="dot churn"></i>Churn Risk (0–54)</span>
              <span><i className="dot watch"></i>Watch (55–74)</span>
              <span><i className="dot healthy"></i>Healthy (75–100)</span>
            </div>
          </div>

          <div className="category-chart">
            {categoryHealth.map((item) => (
              <div className="category-column" key={item.name}>
                <strong className="column-total">{item.total}</strong>
                <div className="vertical-stack" style={{ height: `${(item.total / 60) * 265}px` }} aria-label={`${item.name}: ${item.total} accounts`}>
                  <div className="vseg healthy" style={{ height: `${item.healthy / item.total * 100}%` }}>
                    <span>{item.healthy} ({Math.round(item.healthy / item.total * 100)}%)</span>
                  </div>
                  <div className="vseg watch" style={{ height: `${item.watch / item.total * 100}%` }}>
                    <span>{item.watch} ({Math.round(item.watch / item.total * 100)}%)</span>
                  </div>
                  <div className="vseg churn" style={{ height: `${item.churn / item.total * 100}%` }}>
                    <span>{item.churn} ({Math.round(item.churn / item.total * 100)}%)</span>
                  </div>
                </div>
                <strong className="category-name">{item.name}</strong>
                <small>{item.arr}</small>
              </div>
            ))}
          </div>

          <div className="portfolio-summary">
            <div><span>Total Accounts</span><strong>200</strong><small>100% of portfolio</small></div>
            <div className="summary-divider"></div>
            <div><span>Churn Risk</span><strong className="churn-text">38</strong><small>19% of portfolio</small></div>
            <div className="summary-divider"></div>
            <div><span>Watch</span><strong className="watch-text">72</strong><small>36% of portfolio</small></div>
            <div className="summary-divider"></div>
            <div><span>Healthy</span><strong className="healthy-text">90</strong><small>45% of portfolio</small></div>
          </div>
        </article>

        <article className="overview-panel csm-panel">
          <div className="panel-title-row csm-title-row">
            <h3>Accounts by CSM</h3>
            <div className="overview-legend">
              <span><i className="dot churn"></i>Churn Risk</span>
              <span><i className="dot watch"></i>Watch</span>
              <span><i className="dot healthy"></i>Healthy</span>
            </div>
          </div>

          <div className="csm-list">
            {csmHealth.map((csm, index) => (
              <div className="csm-row" key={csm.name}>
                <div className="csm-avatar"><img src={csm.photo} alt={`${csm.name} profile`} /></div>
                <div className="csm-meta">
                  <strong>{csm.name}</strong>
                  <small>{csm.total} accounts</small>
                </div>
                <div className="horizontal-stack">
                  <Segment value={csm.churn} total={csm.total} kind="churn" />
                  <Segment value={csm.watch} total={csm.total} kind="watch" />
                  <Segment value={csm.healthy} total={csm.total} kind="healthy" />
                </div>
              </div>
            ))}
          </div>

          <div className="csm-total">
            <div><strong>Total</strong><small>200 accounts</small></div>
            <div className="mini-donut" aria-label="38 churn risk, 72 watch, 90 healthy"></div>
            <div className="total-legend">
              <span><i className="dot churn"></i>Churn Risk <b className="churn-text">38 (19%)</b></span>
              <span><i className="dot watch"></i>Watch <b className="watch-text">72 (36%)</b></span>
              <span><i className="dot healthy"></i>Healthy <b className="healthy-text">90 (45%)</b></span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function WeightedModel(){
 const [selectedId,setSelectedId]=useState("");
 const customer=useMemo(()=>customers.find(c=>String(c.id)===selectedId),[selectedId]);
 const score=customer?Math.round(customer.adoption.score*.35+customer.engagement.score*.25+customer.support.score*.20+customer.voc.score*.20):null;
 const state=score!==null?status(score):null;

 return <div className="weighted-page"><main>
   <header>
     <div className="eyebrow">SIGNAL ARCHITECTURE</div>
     <h1>Weighted Customer Health Index (CHI)</h1>
     <div className="tools-used" aria-label="Tools used">
       <span className="tools-label">TOOLS USED</span>
       <span>Google Sheets</span>
       <span>HubSpot</span>
       <span>Gainsight</span>
       <span>Power BI</span>
     </div>
     <div className="picker-wrap">
       <label className="picker">
         <select value={selectedId} onChange={e=>setSelectedId(e.target.value)}>
           <option value="">Select Customer</option>
           {customers.map(c=><option key={c.id} value={c.id}>Customer {c.id}</option>)}
         </select>
         <ChevronDown size={20}/>
       </label>
       {!selectedId&&<div className="picker-nudge"><span>Select a customer<br/>to calculate CHI</span><MousePointer2 size={24}/></div>}
     </div>
   </header>

   <section className="architecture">
     <div className="signals">
       {groups.map(g=><SignalCard key={g.key} group={g} customer={customer} selected={!!customer}/>)}
     </div>

     <div className="flow-layer" aria-hidden="true">
       <svg viewBox="0 0 500 800" preserveAspectRatio="none">
         <defs>
           <marker id="flowArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
             <path d="M 0 0 L 10 5 L 0 10 z" className="flow-arrow-head"/>
           </marker>
         </defs>
         <path className="flow flow-input" d="M0 105 H72 Q118 105 118 155 V310 Q118 350 165 350 H330"/>
         <path className="flow flow-input" d="M0 300 H156 Q205 300 205 370 Q205 385 230 385 H330"/>
         <path className="flow flow-input" d="M0 500 H156 Q205 500 205 430 Q205 415 230 415 H330"/>
         <path className="flow flow-input" d="M0 695 H72 Q118 695 118 645 V490 Q118 450 165 450 H330"/>
         <path className="flow flow-collector" d="M330 350 V450"/>
         <circle className="flow-junction" cx="330" cy="400" r="6"/>
         <path className="flow flow-trunk" d="M330 400 H485" markerEnd="url(#flowArrow)"/>
       </svg>
     </div>

     <div className="engine">
       <BrainCircuit size={44}/>
       <span>CHI ENGINE</span>
       <h2>Weighted<br/>Customer Health<br/>Score</h2>
       <div className="formula">
         <div>CHI = (Adoption × 35%)</div>
         <div>+ (Engagement × 25%)</div>
         <div>+ (Support × 20%)</div>
         <div>+ (VoC × 20%)</div>
       </div>
     </div>

     <div className="engine-arrow"><ArrowRight size={34}/></div>

     <div className={`result ${state?.tone||""}`}>
       <div className="result-title">FINAL CHI SCORE</div>
       <div className="score-line">
         <strong>{score===null?"XX":score}</strong>
         <div className="divider"/>
         <div>
           <b>{state?.label||"--"}</b>
           <span>{score===null?"Select a customer to view score":"Customer Health Index"}</span>
         </div>
       </div>

       <div className="scale">
         <div className="scale-bar"><i className="risk-seg"/><i className="watch-seg"/><i className="healthy-seg"/>{score!==null&&<em style={{left:`calc(${score}% - 9px)`}}/>}</div>
         <div className="ticks"><span>0</span><span className="t54">54</span><span className="t74">74</span><span>100</span></div>
       </div>

       <div className="ranges">
         <div><b>0–54</b><span>CHURN RISK</span></div>
         <div><b>55–74</b><span>WATCH</span></div>
         <div><b>75–100</b><span>HEALTHY</span></div>
       </div>

       <div className="meaning">
         <div><Info size={20}/><b>What does this mean?</b></div>
         <p>{state?.copy||"Select a customer above to populate the signals, calculate CHI, and place the account on the health scale."}</p>
       </div>
     </div>
   </section>
       <PortfolioOverview />
    </main></div>
}

const COLAB_URL =
  "https://colab.research.google.com/drive/134Qic4_SoiZqd56H81icYRI2PegJRyCR?usp=sharing";

const patterns = [
  {
    title: "Low License Utilization + Low Process Adoption",
    churn: "89.5%",
    lift: "1.79×",
    accounts: "152 accounts",
  },
  {
    title: "Low License Utilization + Low Workflow Usage Trend",
    churn: "89.5%",
    lift: "1.79×",
    accounts: "143 accounts",
  },
  {
    title: "Low Workflow Usage Trend + Low Process Adoption",
    churn: "84.3%",
    lift: "1.69×",
    accounts: "153 accounts",
  },
];

function FlowArrow() {
  return (
    <div className="flow-arrow" aria-hidden="true">
      <span />
      <ArrowRight size={17} />
    </div>
  );
}

function AIModel() {
  return (
    <div className="ai-page"><main>
      <header className="hero">
        <div className="hero-copy">
          <div className="eyebrow">AI-POWERED CHURN INTELLIGENCE</div>
          <h1>AI-Powered Churn Risk Intelligence</h1>
          <p>
            A machine-learning model that learns from historical customer outcomes
            to identify churn patterns and prioritize at-risk accounts.
          </p>
        </div>

        <a
          className="hero-colab-cta"
          href={COLAB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <small>VIEW THE MODEL</small>
            Open Google Colab
          </span>
          <ExternalLink size={17} />
        </a>
      </header>

      <section className="workflow-section">
        <div className="section-heading">
          <div>
            <div className="section-label">01 · LEARN FROM HISTORICAL OUTCOMES</div>
            <h2>From customer history to a validated model</h2>
          </div>
          <p>
            Model selection happens on training data. The untouched test set is
            used only after a winner is chosen.
          </p>
        </div>

        <div className="workflow-grid">
          <article className="step-card compact">
            <div className="step-head">
              <span>01</span>
              <Database size={20} />
            </div>
            <strong>1,000</strong>
            <h3>Historical customers</h3>
            <p>Known behaviour + known churn outcome</p>
          </article>

          <FlowArrow />

          <article className="step-card compact">
            <div className="step-head">
              <span>02</span>
              <Split size={20} />
            </div>
            <strong>500 / 500</strong>
            <h3>Train / unseen test</h3>
            <p>50% model development · 50% final validation</p>
          </article>

          <FlowArrow />

          <article className="step-card models-card">
            <div className="step-head">
              <span>03</span>
              <BrainCircuit size={20} />
            </div>
            <h3>3 models compete</h3>
            <div className="model-list">
              <div><span>Logistic Regression</span></div>
              <div><span>Decision Tree</span></div>
              <div className="winner-row"><span>Random Forest</span><Check size={14} /></div>
            </div>
          </article>

          <FlowArrow />

          <article className="step-card winner-card">
            <div className="step-head">
              <span>04</span>
              <Trophy size={20} />
            </div>
            <div className="winner-kicker">WINNING MODEL</div>
            <strong>Random Forest</strong>
            <div className="metric-strip">
              <div><b>93.2%</b><span>Recall</span></div>
              <div><b>95.1%</b><span>Precision</span></div>
              <div><b>0.988</b><span>ROC-AUC</span></div>
            </div>
            <p>Validated once on 500 unseen customers</p>
          </article>
        </div>

        <div className="interpretation-line">
          <span><BrainCircuit size={17} /> Model signals</span>
          <ArrowRight size={17} />
          <span><Search size={17} /> Pattern analysis</span>
          <ArrowRight size={17} />
          <span>Business interpretation</span>
        </div>
      </section>

      <section className="patterns-section">
        <div className="section-heading pattern-heading">
          <div>
            <div className="section-label">02 · UNDERSTAND WHAT DRIVES RISK</div>
            <h2>Historical churn patterns</h2>
          </div>
        </div>

        <div className="pattern-list">
          {patterns.map((pattern, index) => (
            <article className="pattern-card" key={pattern.title}>
              <span className="pattern-index">0{index + 1}</span>
              <h3>{pattern.title}</h3>
              <div className="pattern-evidence">
                <div><strong>{pattern.churn}</strong><span>churn</span></div>
                <div><strong>{pattern.lift}</strong><span>baseline lift</span></div>
                <div><strong>{pattern.accounts}</strong><span>support</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="current-section">
        <div className="section-heading current-heading">
          <div>
            <div className="section-label">03 · SCORE TODAY'S PORTFOLIO</div>
            <h2>200 current customers enter the same trained model</h2>
          </div>
          <p>
            Their churn outcome is unknown. The model scores probability so
            Customer Success can focus human attention where it matters most.
          </p>
        </div>

        <div className="current-flow">
          <span><Users size={18} /> 200 current accounts</span>
          <ArrowRight size={18} />
          <span><BrainCircuit size={18} /> Random Forest</span>
          <ArrowRight size={18} />
          <span>Risk prioritization</span>
        </div>

        <div className="result-hero">
          <div className="risk-focus">
            <div className="risk-label"><AlertTriangle size={18} /> CHURN RISK</div>
            <div className="risk-number">18</div>
            <h3>of 200 customers identified for immediate review</h3>
            <p>
              The model narrows the portfolio to the accounts that deserve the
              fastest CSM validation and intervention.
            </p>
          </div>

          <div className="secondary-results">
            <article>
              <span>WATCH</span>
              <strong>47</strong>
              <p>Investigate emerging signals</p>
            </article>
            <article>
              <span>HEALTHY</span>
              <strong>135</strong>
              <p>Monitor through normal cadence</p>
            </article>
            <article className="arr-result">
              <span>ARR IN CHURN-RISK ACCOUNTS</span>
              <strong>$1.93M</strong>
              <p>Prioritized for Customer Success review</p>
            </article>
          </div>
        </div>
      </section>

      <section className="action-section">
        <div className="section-label">04 · TURN PREDICTION INTO ACTION</div>
        <div className="action-flow">
          <span>AI prioritizes</span>
          <ArrowRight size={19} />
          <span>CSM validates context</span>
          <ArrowRight size={19} />
          <span>CSM takes action</span>
        </div>
      </section>

      <section className="colab-cta">
        <div>
          <span>EXPLORE THE FULL MODEL</span>
          <h2>See the workflow run step-by-step in Google Colab</h2>
          <p>
            Inspect the data split, model competition, unseen-test validation,
            pattern analysis and current-customer scoring.
          </p>
        </div>
        <a href={COLAB_URL} target="_blank" rel="noreferrer">
          Open Google Colab <ExternalLink size={17} />
        </a>
      </section>

      <footer>
        Synthetic portfolio project. No proprietary customer data is used.
      </footer>
    </main></div>
  );
}


function ModelSelector({active, setActive}) {
  return (
    <section className="model-switch-shell">
      <div className="model-options" role="tablist" aria-label="Choose churn risk model">
        <button
          className={`model-option ${active === "weighted" ? "active" : ""}`}
          onClick={() => setActive("weighted")}
          role="tab"
          aria-selected={active === "weighted"}
        >
          <div className="option-icon"><Scale size={17}/></div>
          <div className="option-copy">
            <div className="option-meta"><span>MODEL 01 · RULES-BASED</span></div>
            <strong>Weighted Customer Health Index</strong>
          </div>
          <div className="option-state">{active === "weighted" ? "Viewing" : "Open"}</div>
        </button>

        <button
          className={`model-option ${active === "ai" ? "active" : ""}`}
          onClick={() => setActive("ai")}
          role="tab"
          aria-selected={active === "ai"}
        >
          <div className="option-icon"><Sparkles size={17}/></div>
          <div className="option-copy">
            <div className="option-meta">
              <span>MODEL 02 · PREDICTIVE AI</span>
              <em>AI-enabled ✨</em>
            </div>
            <strong>AI-Powered Churn Risk Intelligence</strong>
          </div>
          <div className="option-state">{active === "ai" ? "Viewing" : "Open"}</div>
        </button>
      </div>

      <div className="switch-divider">
        <span>{active === "weighted" ? "MODEL 01 · WEIGHTED CHI" : "MODEL 02 · AI CHURN INTELLIGENCE"}</span>
      </div>
    </section>
  );
}

export function ChurnRiskModelsCombined() {
  const [active, setActive] = useState("weighted");

  return (
    <main className="churn-risk-models">
      <ModelSelector active={active} setActive={setActive} />
      <div className="model-stage">
        {active === "weighted" ? <WeightedModel /> : <AIModel />}
      </div>
    </main>
  );
}
