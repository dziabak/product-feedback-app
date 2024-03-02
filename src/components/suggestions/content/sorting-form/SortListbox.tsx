// REACT
import { Fragment, useState } from "react";
// LIBRARIES
import { Listbox, Transition } from "@headlessui/react";
// DATA
import { sortFormData } from "../../../../lib/data";
// IMAGES
import checkIcon from "../../../../assets/icons/icon-check.svg";

const SortListbox = ({
	selected,
	setSelected,
}: {
	selected: string;
	setSelected: (selectedOption: string) => void;
}) => {
	const sortData = sortFormData;

	const [userInteracted, setUserInteracted] = useState(false);

	const handleSelection = (value: string) => {
		setSelected(value);
		setUserInteracted(true);
	};

	return (
		<Listbox value={selected} onChange={handleSelection}>
			<div className="relative">
				<Listbox.Button className="relative w-full cursor-default text-left text-sm pr-4 rounded-[10px] text-c-gray transition-colors border outline-none bg-c-dark-blue border-c-dark-blue focus:border-c-dark-blue group-hover:text-c-gray/75">
					<span className="block truncate capitalize font-bold">
						{selected}
					</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0">
						<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 1l4 4 4-4"
								stroke="#4661E6"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
								className="transition-colors stroke-c-gray group-hover:stroke-c-gray/75"
							/>
						</svg>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute -left-14 mt-4 max-h-60 w-64 overflow-auto rounded-[10px] bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none md:text-base">
						{sortData.map((item, itemIndex) => (
							<Listbox.Option
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
											className={`block truncate capitalize ${
												selected ? "font-medium" : "font-normal"
											}`}>
											{item}
										</span>
										{selected && userInteracted ? (
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

export default SortListbox;
