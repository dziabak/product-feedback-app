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
}: {
	selected: string | undefined;
	setSelected: (...event: any[]) => void;
	listboxData: string[];
}) => {
	const data = listboxData;

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className="relative mt-1">
				<Listbox.Button className="relative w-full cursor-default text-left py-3 px-6 rounded-md border outline-none bg-c-light-gray border-c-light-gray focus:border-c-light-blue">
					<span className="block truncate">{capitalizeString(selected)}</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6">
						<img src={arrowIcon} alt="Arrow icon" />
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<Listbox.Options className="absolute z-20 mt-4 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
						{data.map((item, itemIndex) => (
							<Listbox.Option
								key={itemIndex}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-6 border-b text-base last:border-b-0 ${
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
