import { useMemo, useState } from "react";

const formatEuro = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

export function RoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(14);
  const [leadValue, setLeadValue] = useState(180);
  const [closeRate, setCloseRate] = useState(25);

  const monthlyLeak = useMemo(() => {
    return Math.round(missedCalls * 4.33 * leadValue * (closeRate / 100));
  }, [missedCalls, leadValue, closeRate]);

  return (
    <div className="rounded-[2rem] border border-mist/10 bg-panel p-6">
      <div className="rounded-3xl bg-mist p-6 text-ink">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/55">Fuite mensuelle estimée</p>
        <p className="mt-3 text-5xl font-black">{formatEuro.format(monthlyLeak)}</p>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          Estimation basée sur vos appels manqués, la valeur moyenne d&apos;un client et votre taux de transformation.
        </p>
      </div>
      <div className="mt-6 grid gap-5">
        <Control
          label="Appels manqués par semaine"
          value={missedCalls}
          min={1}
          max={60}
          suffix=" appels"
          onChange={setMissedCalls}
        />
        <Control
          label="Valeur moyenne d'un client"
          value={leadValue}
          min={50}
          max={1500}
          step={10}
          suffix=" EUR"
          onChange={setLeadValue}
        />
        <Control
          label="Taux de transformation estimé"
          value={closeRate}
          min={5}
          max={80}
          suffix=" %"
          onChange={setCloseRate}
        />
      </div>
    </div>
  );
}

type ControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix: string;
  onChange: (value: number) => void;
};

function Control({ label, value, min, max, step = 1, suffix, onChange }: ControlProps) {
  return (
    <label className="grid gap-3">
      <span className="flex items-center justify-between gap-4 text-sm font-semibold">
        {label}
        <strong className="text-lime">
          {value}
          {suffix}
        </strong>
      </span>
      <input
        className="accent-lime"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
