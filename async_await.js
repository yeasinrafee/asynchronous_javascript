const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetDetails = {
      name: 'Important meeting',
      time: '12:30 am',
      host: 'Yeasin Rafee',
    };
    resolve(meetDetails);
  } else {
    reject(new Error('There is no meeting!'));
  }
});

const addToCalendar = (meeting) => {
  const calendar = `${meeting.name} by ${meeting.host} at ${meeting.time}.`;

  return Promise.resolve(calendar);
};

// meeting
//   .then(addToCalendar)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

async function friendlyFunc() {
  try {
    const aboutMeeting = await meeting;
    const calendar = await addToCalendar(aboutMeeting);
    console.log(calendar);
  } catch {
    console.log('There is an Error');
  }
}
friendlyFunc();
console.log('Hello Universe!');
