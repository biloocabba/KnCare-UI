import moment from "moment";
import { ColumnDescription } from "react-bootstrap-table-next";
import Rating from "react-rating";

import { BestPractice } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

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
    // BestPractice["tags"]
    formatter: (cell: any) => {
      // cell should return array of strings or [] array when there are no tags
      // but it returns empty string
      // this is a temporary fix
      if (cell === "") {
        cell = [];
      }
      return (
        <>
          {cell.map((tag: string, i: number) => (
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
      return <>{moment(cell).format(DATE_FILTER_FORMAT)}</>;
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
