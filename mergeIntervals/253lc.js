/*
Given a list of intervals representing the start and endTime ofN meetings, find the minimum number of rooms required to hold all the meetings.
Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
*/

/* Similar Problem
Given a list of intervals representing the arrival and departure times of trains to a train station, our goal is to find the minimum number of platforms required for the train station so that no train has to wait.
*/

//TC - O(N logN)

function minMeetingRooms(meetings) {
  if (!meetings) return 0;
  if (meetings.length <= 1) return meetings.length;

  //Sort according to start time
  meetings.sort((a, b) => a[0] - b[0]);

  let rooms = [meetings[0]];
  //Get the room according to end time
  function getEarliestRoom(rooms) {
    rooms.sort((a, b) => a[1] - b[1]);
    return rooms[0];
  }

  for (let i = 1; i < meetings.length; i++) {
    let earliestRoom = getEarliestRoom(rooms);
    let currentTime = meetings[i];

    if (earliestRoom[1] > currentTime[0]) {
      rooms.push(currentTime);
    } else {
      earliestRoom[1] = currentTime[1];
    }
  }
  return rooms.length;
}

minMeetingRooms();
minMeetingRooms([[1, 4]]);
let c1 = minMeetingRooms([
  [1, 4],
  [2, 5],
  [7, 9],
]); //2, Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can occur in any of the two rooms later.
let c2 = minMeetingRooms([
  [6, 7],
  [2, 4],
  [8, 12],
]); //1, None of the meetings overlap, therefore we only need one room to hold all meetings.
let c3 = minMeetingRooms([
  [1, 4],
  [2, 3],
  [3, 6],
]); //2, Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to hold all the meetings.
let c4 = minMeetingRooms([
  [4, 5],
  [2, 3],
  [2, 4],
  [3, 5],
]); //2, We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
