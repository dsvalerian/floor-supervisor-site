import { useStore } from "@nanostores/react";
import { filterMenuOpen } from "../../../stores/filterMenuStore";
import FilterMenu from "./FilterMenu";

type FilterMenuContainerProps = {
	categories: string[];
};

const FilterMenuContainer = ({ categories }: FilterMenuContainerProps) => {
	const isOpen = useStore(filterMenuOpen);

	if (!isOpen || typeof document === "undefined") {
		return null;
	}

	return (
		<FilterMenu
			categories={categories}
			setIsFilterOpen={open => filterMenuOpen.set(open)}
		/>
	);
};

export default FilterMenuContainer;
