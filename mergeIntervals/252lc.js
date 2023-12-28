/*
Given an array of intervals representingN appointments, find out if a person can attend all the appointments.
*/

//TC - O(N*LogN)
function canAttendAllAppointments(meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i][0] < meetings[i - 1][1]) {
      return false;
    }
  }
  return true;
}

let case1 = canAttendAllAppointments([
  [1, 4],
  [2, 5],
  [7, 9],
]); //false, Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
let case2 = canAttendAllAppointments([
  [6, 7],
  [2, 4],
  [8, 12],
]); //true, None of the appointments overlap, therefore a person can attend all of them.
let case3 = canAttendAllAppointments([
  [4, 5],
  [2, 3],
  [3, 6],
]); //false, Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.
