import downloadIcon from '../assets/icons/download.svg';
import { Card, CardTitle } from './Card';

export function LabResults({ results }: { results: readonly string[] }) {
  return (
    <Card className="mt-8 ml-[33px] max-h-[296px] w-[367px]">
      <CardTitle className="pt-5 pb-[27px] pl-5">Lab Results</CardTitle>
      <ul className="mr-[22px] max-h-[176px] overflow-y-auto pb-[7px]">
        {results.map((result) => (
          <li
            key={result}
            className="ml-[22px] flex h-10 items-center justify-between px-4 hover:bg-page"
          >
            <span className="text-caption">{result}</span>
            <button type="button" aria-label={`Download ${result}`}>
              <img src={downloadIcon} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
