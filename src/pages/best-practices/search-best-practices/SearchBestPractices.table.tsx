import moment from "moment";
import { ColumnDescription } from "react-bootstrap-table-next";
import Rating from "react-rating";

import { BestPractice } from "types";

export const bestPracticesTableColumns: ColumnDescription<any, BestPractice>[] = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "description",
    text: "Description",
    sort: true,
  },
  {
    dataField: "author",
    text: "Author",
    sort: true,
  },
  {
    dataField: "tags",
    text: "Tags",
    sort: true,
    formatter: (cell: BestPractice["tags"]) => {
      return (
        <>
          {cell.map((tag, i) => (
            <div key={i}>{tag} </div>
          ))}
        </>
      );
    },
  },
  {
    dataField: "rating",
    text: "Rating",
    sort: true,
    formatter: (cell: BestPractice["rating"]) => {
      return (
        <Rating
          initialRating={cell}
          emptySymbol="fa fa-star-o fa-2x"
          fullSymbol="fa fa-star fa-2x"
          readonly
        />
      );
    },
  },
  {
    dataField: "publishDate",
    text: "Publish Date",
    sort: true,
    formatter: (cell: BestPractice["publishDate"]) => {
      return <>{moment(cell).format("YYYY-MM-DD")}</>;
    },
  },
  {
    dataField: "action",
    text: "",
    formatter: () => {
      return <></>;
    },
  },
];
