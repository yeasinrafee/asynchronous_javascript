const hasMeeting = true;

const meeting = new Promise((resolve, reject) =>{
    if(hasMeeting){
        const meetDetails = {
            name: "Important meeting",
            time: "12:30 am",
            host: "Yeasin Rafee",
        };
        resolve(meetDetails);
    }else{
        reject(new Error("There is no meeting!"));
    }
});

meeting.then((res) =>{
    console.log(JSON.stringify(res));
}).catch(err =>{
    console.log(err.message);
})