import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import axios from "axios";
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";
import "./pts.css";
import MaterialTable, { MTableToolbar } from "material-table";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";

export default function App() {
  const [data, setData] = useState([]);
  const [rank, setRank] = useState("1");

  // useEffect(() => {
  //   // Tabletop.init({
  //   //   key: "1h17MmiTn0MFZXA9TLkEWoficQCb95nqngccKSUbwTN4",
  //   //   simpleSheet: true,
  //   // })
  //   console.log("hello");
  //   axios
  //     .get("/api/ca/all")
  //     .then((data) => setData(data.data))
  //     .catch((err) => console.warn(err));
  //   console.log(data);
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/ca/all");
      console.log(response.data);
      const usersList = response.data;
      let rank = 1;
      usersList.forEach((obj) => (obj["rank"] = rank++));
      setData(usersList);
    };
    fetchData();
  }, []);

  return (
    <>
      <ExamplesNavbar />
      <div style={{ backgroundColor: "black" }}>
        <br />
        <br />
        <br />
        <br />
      </div>

      <div
        className="mt-20 min-h-screen w-full"
        style={{ padding: "10px", backgroundColor: "black" }}
      >
        <Grow in>
          <Box m={1.5}>
            <Grow in={true}>
              <MaterialTable
                title="Leaderboard"
                components={{
                  Toolbar: (props) => (
                    <div
                      style={{
                        backgroundColor: "black",
                      }}
                    >
                      <MTableToolbar {...props} />
                    </div>
                  ),
                }}
                columns={[
                  {
                    title: "Rank",
                    field: "rank",
                    align: "center",
                    width: 20,
                    render: (rowData) => {
                      return (
                        <span>
                          <h3> {rowData.rank}</h3>
                        </span>
                      );
                    },
                    headerStyle: { whiteSpace: "pre" },
                  },
                  {
                    title: "     Name",
                    field: "name",
                    align: "center",
                    width: 20,
                    render: (rowData) => {
                      return (
                        <span>
                          {/* <GitHubIcon fontSize="small" /> */}
                          <h3> {rowData.name}</h3>
                        </span>
                      );
                    },
                  },
                  {
                    title: "Id",
                    field: "Celesta Id",
                    align: "center",
                    width: 20,
                    render: (rowData) => {
                      return (
                        <span>
                          {/* <GitHubIcon fontSize="small" /> */}
                          <h3> {rowData.celestaId}</h3>
                        </span>
                      );
                    },
                  },
                  // {
                  //   title: "  College",
                  //   field: "college",
                  //   align: "center",
                  //   width: 20,
                  //   render: (rowData) => {
                  //     return (
                  //       <span>
                  //         {/* <GitHubIcon fontSize="small" /> */}
                  //         <h3> {rowData.college}</h3>
                  //       </span>
                  //     );
                  //   },
                  // },
                  {
                    title: "Points",
                    field: "points",
                    align: "center",

                    render: (rowData) => {
                      return (
                        <span>
                          {/* <GitHubIcon fontSize="small" /> */}
                          <h3> {rowData.points}</h3>
                        </span>
                      );
                    },
                  },
                ]}
                data={data}
                options={{
                  rowStyle: (x) => {
                    if (x.tableData.id === 0) {
                      return {
                        backgroundColor: "#006B38",
                        fontSize: "5px",
                        textAlign: "center",
                      };
                    }
                    if (x.tableData.id === 1) {
                      return {
                        backgroundColor: "#006B38",
                        fontSize: "5px",
                        textAlign: "center",
                      };
                    }
                    if (x.tableData.id === 2) {
                      return {
                        backgroundColor: "#006B38",
                        fontSize: "5px",
                        textAlign: "center",
                      };
                    } else if (x.tableData.id % 2 === 0) {
                      return {
                        backgroundColor: "#848a84 ",
                        fontSize: "5px",
                        textAlign: "center",
                      };
                    } else {
                      return {
                        fontSize: "5px",
                        backgroundColor: "black",
                        textAlign: "center",
                      };
                    }
                  },

                  searchFieldStyle: {
                    color: "white",
                  },
                  columnResizable: true,
                  showTitle: false,
                  //search: false,
                  //toolbar: false,

                  headerStyle: {
                    fontSize: "18px !important",
                    backgroundColor: "black",
                    color: "#FFF",
                    align: "center",
                  },
                  pageSize: 10,
                  pageSizeOptions: [
                    Math.floor(data.length / 3),
                    Math.floor(data.length / 2),
                    data.length,
                  ],
                }}
              />
            </Grow>
          </Box>
        </Grow>
      </div>

      <Footer />
    </>
  );
}
