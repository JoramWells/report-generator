/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getStudentSubjects, saveStudentSubjects } from '../utils/getStudents';

/* eslint-disable import/prefer-default-export */
export const useSubjectApi = (inputValues) => {
  const [savedSubjects, setSubjects] = useState(getStudentSubjects());
  const [studentSubjects, setStudentSubjects] = useState(getStudentSubjects());

  const [studentSubjectByID, setStudentSubjectByID] = useState([]);

  const saveStudentSubjectByID = () => {
    const newSubjects = [...savedSubjects, inputValues];
    setSubjects(newSubjects);
    saveStudentSubjects(newSubjects);
  };

  const { id } = useParams();

  const getStudentSubjectById = () => {
    const subjectResults = savedSubjects.filter(
      (subject) => subject.studentId.toLowerCase().includes(id.toLowerCase()),
    );

    setStudentSubjects(subjectResults);
    setStudentSubjectByID(subjectResults);
  };

  const deleteStudentSubject = (subjectId) => {
    setStudentSubjectByID(studentSubjectByID.filter((subject) => subject.id !== subjectId));
    localStorage.setItem('studentSubjects', JSON.stringify(studentSubjectByID));
  };

  useEffect(() => {
    getStudentSubjectById(id);
  }, [id]);

  return {
    saveStudentSubjectByID,
    studentSubjects,
    savedSubjects,
    studentSubjectByID,
    deleteStudentSubject,

  };
};
