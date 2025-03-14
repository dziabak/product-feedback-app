// REACT
import { Fragment } from "react";
// LIBRARIES
import { Listbox, Transition } from "@headlessui/react";
// HELPERS
import { capitalizeString } from "../../../utils/helpers";
// IMAGES
import arrowIcon from "../../../assets/icons/icon-arrow-down.svg";
import checkIcon from "../../../assets/icons/icon-check.svg";

const FormListbox = ({
	selected,
	setSelected,
	listboxData,
	label,
}: {
	selected: string | undefined;
	setSelected: (...event: string[]) => void;
	listboxData: string[];
	label: JSX.Element;
}) => {
	const data = listboxData;

	return (
		<Listbox value={selected ?? ""} onChange={setSelected}>
			<Listbox.Label>{label}</Listbox.Label>
			<div className="relative">
				<Listbox.Button
					data-cy="feedback-form-category-list"
					className="z-0 relative w-full cursor-default text-left py-3 px-6 rounded-[10px] border outline-none bg-c-light-gray border-c-light-gray focus:border-c-light-blue">
					<span className="block truncate text-sm md:text-base">
						{capitalizeString(selected)}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
						<img src={arrowIcon} alt="Arrow icon" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute z-20 mt-4 max-h-60 w-full overflow-auto rounded-[10px] bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none md:text-base">
						{data.map((item, itemIndex) => (
							<Listbox.Option
								data-cy={`feedback-form-category-${item}`}
								key={itemIndex}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-6 border-b text-sm last:border-b-0 md:text-base ${
										active ? "text-c-magenta" : "text-c-dark-gray"
									}`
								}
								value={item}>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}>
											{capitalizeString(item)}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 right-0 flex items-center pr-6">
												<img src={checkIcon} alt="Check icon" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

export default FormListbox;
