import React from 'react'

 function ReactInterview1() {
  const students = [4]
  return (
   <>
   {/* issue */}
   {/* <p>{students.length && "No students found"}</p>   */}
   {/* 1st solution */}
   {/* <p>{!students.length && "No students found"}</p>  */}
   {/* <p>Number of students : {students.length}</p> */}
   {/* 2nd solution */}
   {/* <p>{students.length === 0 && "No students found"}</p>  */}
   {/* <p>Number of students : {students.length}</p> */}
   {/* 3rd solution */}
   <p>{Boolean(!students.length) && "No students found"}</p> 
   <p>Number of students : {students.length}</p>
    
   </>
  )
}

export default ReactInterview1
