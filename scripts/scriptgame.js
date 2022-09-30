var audio = new Audio("song/nowhere.mp3");
var audioPlaying = true;

$(document).ready(function () {
  drawNotesView();
  keyListener();
  audio.play();
});

var drawNotesView = () => {
  let notes = [];
  let positions = ["2%", "28%", "54%", "80%"];
  for (let i = 1; i <= 4; i++) {
    notes[i] = document.createElement("div");
    notes[i].className = "note-type" + ((i % 2) + 1); // 1, 2, 1, 2
    notes[i].id = "note" + i;
    $("#notesframe").append(notes[i]);

    $("#note" + i).css(positions[i - 1]);
  }
};

//function for key listening
var keyListener = () => {
  $("body").keypress(function (event) {
    console.log(event);
    switch (event.key) {
      case "s":
        $("#note1").removeClass("note-type1");
        $("#note1").addClass("note-type-active");
        break;
      case "d":
        $("#note2").removeClass("note-type1");
        $("#note2").addClass("note-type-active");
        break;
      case "k":
        $("#note3").removeClass("note-type1");
        $("#note3").addClass("note-type-active");
        break;
      case "l":
        $("#note4").removeClass("note-type1");
        $("#note4").addClass("note-type-active");
        break;
      default:
        break;
    }
  });

  $("body").keyup(function (event) {
    console.log(event);
    switch (event.key) {
      case "s":
        $("#note1").addClass("note-type1");
        $("#note1").removeClass("note-type-active");
        break;
      case "d":
        $("#note2").addClass("note-type1");
        $("#note2").removeClass("note-type-active");
        break;
      case "k":
        $("#note3").addClass("note-type1");
        $("#note3").removeClass("note-type-active");
        break;
      case "l":
        $("#note4").addClass("note-type1");
        $("#note4").removeClass("note-type-active");
        break;
      case "Escape":
        audioPlaying ? audio.pause() : audio.play();
        audioPlaying = !audioPlaying;
        break;
      default:
        break;
    }
  });
};
