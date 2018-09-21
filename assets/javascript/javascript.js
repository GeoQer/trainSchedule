//this is not complete. Hopefully I will have it updated and working by the time to pull it. If not...one momre to do on fall and/or winter break.
$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBu_mDEhaG0IzAQP7cnteiOEkhSq73X3Ps",
        authDomain: "train-schedule-project-8bf0a.firebaseapp.com",
        databaseURL: "https://train-schedule-project-8bf0a.firebaseio.com",
        projectId: "train-schedule-project-8bf0a",
        storageBucket: "train-schedule-project-8bf0a.appspot.com",
        messagingSenderId: "109283625995"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('#add-train-btn').on('click', function (event) {
        event.preventDefault();

        var trainName = $('#train-name-input').val().trim();
        var trainDestination = $('#destination-input').val().trim();
        var trainFrequency = $('#frequency-input').val().trim();
        var trainFirstStop = $('#first-stop-input').val().trim();

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            frequency: trainFrequency,
            firstStop: trainFirstStop
        };

        database.ref().push(newTrain);

        console.log(newTrain.name);
        console.log(newTrain.destination);
        console.log(newTrain.frequency);
        console.log(newTrain.firstStop);

        $('#train-name-input').val('');
        $('#destination-input').val('');
        $('#frequency-input').val('');
        $('#first-stop-input').val('');
    });


    /*  '<tr>'
     '<th scope="row">' + rowCount + '</th>'
     '<td>' + trainName[rowCount] + '</td>'
     '<td>' + destination[rowCount] + '</td>'
     '<td>' + frequency[rowCount] + '</td>'
     '<td>' + nextArrival[rowCount] + '</td>'
     '<td>' + '</td>'
     '</tr>' */
});