import { Option, Options } from "@/feature/transversal/types";
import { CheckboxField } from "@/feature/transversal/components/Form";

interface DropdownProps {
  options: Options
  onFliter: (option: Option) => void
}

export const Dropdown = ({ options, onFliter }: DropdownProps) => {
  return (
    <div className="w-full lg:w-11/12 mx-auto bg-white rounded-lg drop-shadow-lg">
      <div className="w-full border-b-2 border-b-teal-400">
        <h2 className="text-teal-500 text-xl mx-5 py-6 ">Nuestros Tags</h2>
      </div>
      <ul className="h-32 md:h-80 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-teal-200" aria-labelledby="dropdownSearchButton">
        <li>
          {options.map(({ id, name }) => (
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-teal-500" key={id}>
              <CheckboxField onChange={() => (onFliter({ id, name }))} />
              <label className="w-full py-2 ms-2 text-sm font-medium text-gray-800 rounded dark:text-gray-300">{name}</label>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
