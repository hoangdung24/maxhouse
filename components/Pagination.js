import { Pagination as MuiPagination, PaginationItem } from "@mui/material";

const LIMIT = 6;

const Pagination = ({ data, onChange, currentPage }) => {
  console.log("PaginationPagination", data);
  console.log("PaginationPagination", data.length);
  const count = Math.round(data.length / LIMIT);
  console.log("countcountcountcount", count);

  return (
    <MuiPagination
      count={Math.round(data.length / LIMIT)}
      variant="outlined"
      onChange={onChange}
      page={currentPage}
      sx={{
        ["& .MuiPagination-ul"]: {
          justifyContent: "center",
        },
      }}
      renderItem={(props) => {
        const { type } = props;
        if (type === "page") {
          return null;
        }
        return <PaginationItem {...props} />;
      }}
    />
  );
};

export default Pagination;
