import { ArrowRight } from "lucide-react";
import styles from "./knowledge-base.module.css";

export type FlowStep = { label: string; note?: string; human?: boolean };

export function Flow({ steps, label }: { steps: FlowStep[]; label: string }) {
  return <ol className={styles.flow} aria-label={label}>
    {steps.map((step, index) => <li key={step.label}>
      {index > 0 && <ArrowRight aria-hidden="true" className={styles.arrow} size={16} />}
      <div className={`${styles.node} ${step.human ? styles.human : ""}`}>
        <span>{step.label}</span>{step.note && <small>{step.note}</small>}
      </div>
    </li>)}
  </ol>;
}
