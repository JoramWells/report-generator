/* eslint-disable import/prefer-default-export */
export const getStudents = () => {
  const data = localStorage.getItem('studentData');
  return JSON.parse(data) || [];
};
