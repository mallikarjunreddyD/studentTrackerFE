export const users = [
  { id: 1, name: 'Ananya Sharma', email: 'ananya.sharma@campus.edu', role: 'STUDENT' },
  { id: 2, name: 'Dr. Vikram Rao', email: 'vikram.rao@campus.edu', role: 'FACULTY' },
  { id: 3, name: 'Rohan Mehta', email: 'rohan.mehta@campus.edu', role: 'STUDENT' },
  { id: 4, name: 'Prof. Neha Iyer', email: 'neha.iyer@campus.edu', role: 'FACULTY' },
  { id: 5, name: 'Kavya Nair', email: 'kavya.nair@campus.edu', role: 'ADMIN' },
]

export const projects = [
  { id: 'PRJ-101', type: 'HONORS', faculty: 'Dr. Vikram Rao', students: 3, semester: '14', status: 'ACTIVE' },
  { id: 'PRJ-102', type: 'BTP', faculty: 'Prof. Neha Iyer', students: 2, semester: '34', status: 'ACTIVE' },
  { id: 'PRJ-103', type: 'AP', faculty: 'Dr. Vikram Rao', students: 4, semester: '2', status: 'ACTIVE' },
  { id: 'PRJ-104', type: 'BTP', faculty: 'Prof. Neha Iyer', students: 2, semester: '12', status: 'COMPLETED' },
]

export const meetings = [
  { id: 1, project: 'PRJ-101', date: '18 Sep 2026', faculty: 'Dr. Vikram Rao', notes: 'Reviewed literature survey and finalized the next milestone.' },
  { id: 2, project: 'PRJ-102', date: '15 Sep 2026', faculty: 'Prof. Neha Iyer', notes: 'Discussed prototype progress and testing requirements.' },
  { id: 3, project: 'PRJ-103', date: '11 Sep 2026', faculty: 'Dr. Vikram Rao', notes: 'Approved the initial problem statement and project scope.' },
  { id: 4, project: 'PRJ-101', date: '04 Sep 2026', faculty: 'Dr. Vikram Rao', notes: 'Assigned research papers and documentation tasks.' },
]
