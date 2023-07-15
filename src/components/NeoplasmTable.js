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
import { Fragment } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
backgroundColor:"#90B2D8",
height:1

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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
export default function NeoplasmTable() {
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [word, setWord] = useState("");
  const [isValueSelected, setIsValueSelected] = useState(false);
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
        <Table sx={{ minWidth: "100px", height: "450px" }}>
          <TableHead>
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
         <Box>
            <Autocomplete
              id="users"
              defaultValue={null}
              getOptionLabel={(result) => `${result.id} ${result.description}`}
          options={result}
              sx={{
                width: "150px",
                backgroundColor: "white",
                mt: "0.5px",
                ml: "0.1px",
                display: "inline-block",
                "& input": {
                  height: "5px",
                  bgcolor: "background.paper",
                  color: (theme) =>
                    theme.palette.getContrastText(
                      theme.palette.background.paper
                    ),
                },
              }}
              isoptionequalToValue={(option, value) =>
                option.description === value.description
              }
              noOptionsText={"PLEASE ENTER VALID CODES"}
              open={open}
              onInputChange={(_, value) => {
                if (value.length === 0) {
                  if (open) setOpen(false);
                } else {
                  if (!open) setOpen(true);
                }
              }}
              onClose={() => setOpen(false)}
              popupIcon={
                <SearchIcon sx={{ marginLeft:"60px" }} />
              }
              onChange={(event, newValue) => {
                setFirst(newValue);
                setIsValueSelected(true);
              }}
              autoSelect
              renderOption={(props, result) => (
                <Box {...props} key={result.id}>
                  {result.id} {result.description}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={handleChange}
                  placeholder="filter"
                />
              )}
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
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {}
                </StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }}align="right">{}</StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }} align="right">{}</StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }} align="right">{}</StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }} align="right">{}</StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }} align="right">{}</StyledTableCell>
                <StyledTableCell sx={{
                border: "1px solid grey",
                height:"20px"
              }} align="right">{}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

