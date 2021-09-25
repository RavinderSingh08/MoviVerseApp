import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            padding: "20px 0px",
        }}>
            <Pagination
                count={numOfPages}
                color="primary"
                // shape="rounded"
                size="large"
                hideNextButton
                hidePrevButton
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
        </div>
    );
};

export default CustomPagination;
