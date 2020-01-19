let data = {
    name: "request3",
    category: "clothing",
    completed: false,
    location: (0,0),
    message: "example request need clothing",
    timestamp: ("3PM 1/19 (this should be geopoint instead of string but I ran out of time")
}

let setDoc = db.collection("Requests").doc("misc").set(data);