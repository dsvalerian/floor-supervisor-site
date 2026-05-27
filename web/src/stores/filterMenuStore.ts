import { atom } from "nanostores";

export const filterMenuOpen = atom(false);

export const toggleFilterMenu = () => {
	filterMenuOpen.set(!filterMenuOpen.get());
};
