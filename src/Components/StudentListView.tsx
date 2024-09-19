import React from 'react';
import StudentForm from './StudentForm';
import useStudentListLogic from './UseStudentListLogic'
import Modal from '@mui/material/Modal';

import StudentModalBody from './StudentModalBody';


const StudentListView = () => {
    const {
        students,
        selectedStudent,
        studentModalIsOpen,
        openStudentModal,
        closeStudentModal,
        handleEdit,
        handleSelectStudent,
        setSelectedStudent
    } = useStudentListLogic();


    return (
        <div>
            <h1>Student List</h1>
            <button onClick={openStudentModal}>Add Student</button>
            <ul>
                {students.map(student => (
                    <li key={student.studentId}>
                        {student.studentName} | &nbsp;
                        <button onClick={() => handleEdit(student)}>Edit</button> | &nbsp;
                        <button onClick={() => handleSelectStudent(student.studentId)}>View Details</button>
                    </li>
                ))}
            </ul>
            {studentModalIsOpen && (
                <Modal
                open={studentModalIsOpen}
                onClose={closeStudentModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <StudentModalBody selectedStudent={selectedStudent}/>
              </Modal>
                
            )}
        </div>
    );
};

export default StudentListView;

