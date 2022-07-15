import { FC } from "react";

type ListProp = {
  names: string[];
  order: "ASC" | "DESC";
};

/**
 *
 * @param param {ListProp}
 * @returns
 */
export const ListNicknames: FC<ListProp> = ({ names, order }) => {
  names.sort((a, b) =>
    order === "ASC"
      ? a.trim().localeCompare(b.trim(), "es", { sensitivity: "base" })
      : b.trim().localeCompare(a.trim(), "es", { sensitivity: "base" })
  );

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
