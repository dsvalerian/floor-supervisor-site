import { createPortal } from "react-dom";
import CloseButton from "../CloseButton/CloseButton";
import styles from "./FilterMenu.module.css";
import { selectedCategories } from "../../../stores/categoriesStore";
import { useStore } from "@nanostores/react";

interface FilterMenuProps {
	categories: string[];
	setIsFilterOpen: (open: boolean) => void;
}

const FilterMenu = ({ categories, setIsFilterOpen }: FilterMenuProps) => {
	const selected = useStore(selectedCategories);

	const toggleCategory = (category: string) => {
		const newCategories = selected.includes(category)
			? selected.filter(c => c !== category)
			: [...selected, category];

		selectedCategories.set(newCategories);
	};

	return createPortal(
		<aside className={styles["filter-drawer"]}>
			<div className={styles["filter-drawer-content"]} aria-label="Post filters">
				<CloseButton onClick={() => setIsFilterOpen(false)} />
				<fieldset className={styles["category-fieldset"]}>
					<div className={styles["category-legend-wrapper"]}>
						<legend className={styles["category-legend"]}>SHOW POSTS</legend>
					</div>
					<ul className={styles["category-list"]}>
						{categories.map(category => (
							<li key={category} className={styles["list-item"]}>
								<label className={styles["category-label"]}>
									<span className={styles["category-text"]}>{category}</span>
									<input
										type="checkbox"
										className={styles["category-checkbox"]}
										checked={selected.includes(category)}
										onChange={() => toggleCategory(category)}
									/>
								</label>
							</li>
						))}
					</ul>
				</fieldset>
			</div>
			<div className={styles["filter-footer"]}>
				<p className={styles["footer-copyright"]}>© {new Date().getFullYear()} Floor Supervisor</p>
				<p className={styles["footer-siteby"]}>Site by Dmitri Salov</p>
			</div>
		</aside>,
		document.body,
	);
};

export default FilterMenu;
