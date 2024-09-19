import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Student } from "../Utils/Interface";
import Input from '@mui/material/Input';

const StudentModalBody = ({selectedStudent}: {selectedStudent: Student | null}) => {
    console.log("selectedStudent ", selectedStudent);
    
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" style={{textAlign: "center"}}>
          Edit Student
        </Typography>
        
        
      </Box>
    </div>
  );
};

export default StudentModalBody;
