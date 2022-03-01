import moment from "moment";
import Rating from "react-rating";
import { Column } from "react-table";

import { TwoMouseEventActionButtons, IDefaultActionButtons } from "components/widgets";

import { BestPractice } from "types";
import { DATE_FILTER_FORMAT } from "variables/app.consts";

export const bestPracticesTableColumns = ({
  onDetailsButtonClick,
  onRemoveButtonClick,
}: IDefaultActionButtons) => {
  return [
    {
      accessor: "id",
      Header: "id",
    },
    {
      accessor: "title",
      Header: "Title",
    },
    {
      accessor: "description",
      Header: "Description",
    },
    {
      accessor: "author",
      Header: "Author",
    },
    {
      accessor: "tags",
      Header: "Tags",
      Cell: ({ row }) => {
        // cell should return array of strings or [] array when there are no tags
        // but it returns empty string
        // this is a temporary fix
        let { tags = [] } = row.original as BestPractice;
        console.log("tags1234", tags);

        // @ts-ignore
        if (tags === "") {
          tags = [];
        }
        return (
          <>
            {tags.map((tag: string, i: number) => (
              <div key={i}>{tag} </div>
            ))}
          </>
        );
      },
    },
    {
      accessor: "rating",
      Header: "Rating",
      Cell: ({ row }) => {
        const { rating } = row.original as BestPractice;
        return (
          <Rating
            initialRating={rating}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            readonly
          />
        );
      },
    },
    {
      accessor: "publishDate",
      Header: "Publish Date",
      Cell: ({ row }) => {
        const { publishDate } = row.original as BestPractice;
        return <>{moment(publishDate, DATE_FILTER_FORMAT).format(DATE_FILTER_FORMAT)}</>;
      },
    },
    TwoMouseEventActionButtons({ onDetailsButtonClick, onRemoveButtonClick }),
  ] as Array<Column>;
};
