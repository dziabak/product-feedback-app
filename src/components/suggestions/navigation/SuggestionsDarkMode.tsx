// EXTERNAL IMPORTS
import { useDarkMode } from "usehooks-ts";
// INTERNAL IMPORTS
import BackgroundFrame from "../../ui/BackgroundFrame";

const SuggestionsDarkMode = () => {
	const { isDarkMode, toggle } = useDarkMode();

	if (isDarkMode) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}

	return (
		<BackgroundFrame>
			<label
				htmlFor="themeSwitcher"
				className="relative inline-flex items-center cursor-pointer">
				<input
					className="sr-only peer"
					type="checkbox"
					id="themeSwitcher"
					checked={isDarkMode}
					onChange={toggle}
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					Dark mode
				</span>
			</label>
		</BackgroundFrame>
	);
};

export default SuggestionsDarkMode;
