import { useId } from 'react';

import type { Diagnosis } from '../types/patient';
import { Card, CardTitle } from './Card';

const COLUMNS = [
  { key: 'name', label: 'Problem/Diagnosis', className: 'basis-1/5' },
  { key: 'description', label: 'Description', className: 'basis-1/2' },
  { key: 'status', label: 'Status', className: 'basis-1/6' },
] as const satisfies readonly { key: keyof Diagnosis; label: string; className: string }[];

// ARIA roles instead of <table>: the pill-shaped header sits outside the scrolling body.
export function DiagnosticList({ diagnoses }: { diagnoses: readonly Diagnosis[] }) {
  const titleId = useId();

  return (
    <Card className="mt-8 w-[766px] p-5">
      <CardTitle id={titleId} className="mb-10">
        Diagnostic List
      </CardTitle>
      <div role="table" aria-labelledby={titleId}>
        <div role="rowgroup">
          <div
            role="row"
            className="flex h-12 items-center justify-between rounded-full bg-page px-4 text-body font-bold"
          >
            {COLUMNS.map(({ key, label, className }) => (
              <div key={key} role="columnheader" className={className}>
                {label}
              </div>
            ))}
          </div>
        </div>
        <div role="rowgroup" className="max-h-[160px] overflow-y-scroll">
          {diagnoses.map((diagnosis, index) => (
            <div
              // Diagnosis names repeat in the API data.
              key={`${diagnosis.name}-${index}`}
              role="row"
              className="flex items-center justify-between border-b border-page px-4 py-2.5 text-body last:border-b-0"
            >
              {COLUMNS.map(({ key, className }) => (
                <div key={key} role="cell" className={className}>
                  {diagnosis[key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
