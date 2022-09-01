import raw from "$data/data_extended.csv";
import _ from "lodash";

const data = raw.map((d) =>
	_.mapValues(d, (value, key) => {
		if (key !== "genre") return +value;
		return value;
	})
);

export const getBarData = (scrollValue) => {
	const needed = ["genre", "female_year_2022", "female_listeners_2020"];
	const filterKeys = (d) => _.pick(d, needed);
	if (scrollValue < 2 || scrollValue === undefined) return data.map(filterKeys);
	else return _.orderBy(data, (d) => d.female_year_2022).map(filterKeys);
};

export const getLineData = (genre) => {
	const row = data.filter((d) => d.genre === genre)[0];

	const keys = Object.keys(row).filter((d) =>
		d.startsWith("female_performers")
	);

	const result = keys.map((key) => {
		const dateString = key.replace("female_performers_", "");
		const date = new Date(
			dateString.substring(0, 4),
			dateString.substring(4, 6),
			dateString.substring(6, 8)
		);
		return { date, value: row[key] };
	});

	return result;
};
