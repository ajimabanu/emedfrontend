/*
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { Pagin } from "./pagination";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
backgroundColor:"#90B2D8",
padding: "0px 12px 0px 0px",

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height:1
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    height:1
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    height:1
  },
}));


export default function NeoplasmTable() {
  console.log("neo enter");
 // console.log(global.values.code);
  const [neo, setNeo] = useState(null);
  const [codes, setCodes] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try  {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/neoplasm`);
          if (response.ok) {
            const data = await response.json();
            setNeo(data);
            const codeValues = global.values.code.split(",");
            setCodes(codeValues);
          } else {
            console.error("Failed to fetch data");
          }
        }else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values?.code]);
  console.log("our neo is", neo);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
    <Box
              sx={{
                height: "20px",
                width: "100%",
                textAlign: "left",
                mt: "200px",
                ml: "10px",
              }}
            >
             <Pagin/>    
            </Box>
      <TableContainer
        sx={{
          mt: "60px",
          display: "flex",
          position: "absolute",
          width: "830px",
          ml: "-115px",
          height: "400px",
          overflowY:"scroll"
          
        }}
      >
        <Table sx={{  height: "5px" }}>
          <TableHead sx={{height:"5px",minHeight:"10px"}}>
            <TableRow>


            <div >
     
     <div className="table">
       <Box
         sx={{
           width: "100px",
           height: "20%",
        
         }}
       >
         <Stack direction={"row"}>
         <Box sx={{width:"120px",height:"4px" ,marginTop:"1px"}}>
      <TextField   sx={{width:"120px", "& input": {
                  height: "4px",
                  bgcolor: "background.paper",
                  color: (theme) =>
                    theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                },}}
       placeholder="filter"
              onChange={(e) => setSearch(e.target.value)}
            />
            </Box>
           <Box>
             {" "}
             <Typography
               variant="subtitle1"
               sx={{
                 backgroundColor: "#c8e2dd",
                 width: "168px",
                 textAlign: "center",
                 height: "37px",
               }}
             >
               maligant
             </Typography>
           </Box>
           <div className="box1">
             <Box
               sx={{
                 height: "30px",
                 width: "100px",
                 backgroundColor: "white",
                 border: "1px solid black",
                 height: "35px",
               }}
             ></Box>
           </div>
           <div>
             <Box
               sx={{
                 height: "30px",
                 width: "100px",
                 backgroundColor: "white",
                 border: "1px solid black",
                 height: "35px",
               }}
             ></Box>
           </div>

           <Box>
             <Typography
               variant="subtitle1"
               color="black"
               sx={{
                 backgroundColor: "#c8e2dd",
                 width: "180px",
                 textAlign: "center",
                 height: "37px",
               }}
             >
               Behaviour
             </Typography>
           </Box>
         </Stack>
       </Box>
     </div>
   </div>
            </TableRow>


          </TableHead>
          
          <TableHead sx={{height:"20px",border: "1px solid grey"}}>

            <TableRow sx={{
                border: "1px solid grey",
                height:"20px"
                
              }}>
              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}>N-Term</StyledTableCell>


              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">Primary</StyledTableCell>


              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">Secondary</StyledTableCell>


              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">Cainsitu</StyledTableCell>

              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">benigin</StyledTableCell>

              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">unsertain</StyledTableCell>

              <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              
              }}align="right">unspecified</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {neo?.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.title.toLowerCase().includes(search);
              }).map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>

                {row.code.split(',').map((value, index) => (
          <StyledTableCell key={index} sx={{
            border: "1px solid grey",
            height: "20px"
          }} 
          
          align="right">
            {value.trim()}
          </StyledTableCell>
        ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
*/

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Autocomplete, Box, Stack, TextField, Typography } from "@mui/material";
import { Pagin } from "./pagination";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../App.css"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    backgroundColor: "#90B2D8",
    padding: "0px 12px 0px 0px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    height: 1,
    border: "1px solid grey",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    height: 1,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    height: 1,
  },
}));
export default function NeoplasmTable() {
  console.log("neo enter");
  // console.log(global.values.code);
  const [neo, setNeo] = useState(null);
  const [codes, setCodes] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code) {
          const response = await fetch(`/codes/${global.values.code}/neoplasm`);
          if (response.ok) {
            const data = await response.json();
            setNeo(data);
            const codeValues = global.values.code.split(",");
            setCodes(codeValues);
          } else {
            console.error("Failed to fetch data");
          }
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values?.code]);
  console.log("our neo is", neo);
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
  const [search, setSearch] = useState("");
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <>
      <Box
        sx={{
          height: "20px",
          width: "100%",
          textAlign: "left",
          ml: "10px",
          mt:"200px"
        }}
      >
        <Pagin />
      </Box>
      <TableContainer
        sx={{
          mt: "60px",
          display: "flex",
          position: "absolute",
          width: "830px",
          ml: "-115px",
          overflowY: "scroll",
        }}
      >
        <Table sx={{ height: "5px" }}>
          <TableHead sx={{ height: "5px", minHeight: "10px" }}>
            <TableRow>
              <div>
                <div className="table">
                  <Box
                    sx={{
                      width: "100px",
                      height: "20%",
                    }}
                  >
                    <Stack direction={"row"}>
                      <Box
                        sx={{ width: "120px", height: "4px", marginTop: "1px" }}
                      >
                        <TextField
                          sx={{
                            width: "120px",
                            "& input": {
                              height: "4px",
                              bgcolor: "background.paper",
                              color: (theme) =>
                                theme.palette.getContrastText(
                                  theme.palette.background.paper
                                ),
                            },
                          }}
                          placeholder="filter"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </Box>
                      <Box>
                        {" "}
                        <Typography
                          variant="subtitle1"
                          sx={{
                            backgroundColor: "#C8E2DD",
                            width: "190px",
                            textAlign: "center",
                            height: "37px",
                          }}
                        >
                          maligant
                        </Typography>
                      </Box>
                      <div className="box1">
                        <Box
                          sx={{
                            height: "30px",
                            width: "100px",
                            backgroundColor: "white",
                            border: "1px solid black",
                            height: "35px",
                          }}
                        ></Box>
                      </div>
                      <div>
                        <Box
                          sx={{
                            height: "30px",
                            width: "100px",
                            backgroundColor: "white",
                            border: "1px solid black",
                            height: "35px",
                          }}
                        ></Box>
                      </div>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          color="black"
                          sx={{
                            backgroundColor: "#C8E2DD",
                            width: "180px",
                            textAlign: "center",
                            height: "37px",
                          }}
                        >
                          Behaviour
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </div>
              </div>
            </TableRow>
          </TableHead>
          <TableHead sx={{ height: "20px", border: "1px solid grey" }}>
            <TableRow
              sx={{
                border: "1px solid grey",
                height: "20px",
              }}
            >
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
              >
                N-Term
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Primary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Secondary
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                Cainsitu
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                benigin
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unsertain
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  border: "1px solid grey",
                  height: "20px",
                }}
                align="right"
              >
                unspecified
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {neo
              ?.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((row) => (
                <StyledTableRow key={row.id} >
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell >
                  {row.code.split(",").map((value, index) => (
                    <StyledTableCell 
                      key={index}
                      sx={{
                        border: "1px solid grey",
                        height: "auto",
                      }}
                      align="right"
                    >
                      {value.trim()}{" "}
                      {/* Use .trim() to remove any leading/trailing spaces */}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}










