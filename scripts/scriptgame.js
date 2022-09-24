$(document).ready(function () {
  drawNotesView();
  animateTapNotes();
});

var drawNotesView = () => {
  let notes = [];
  let positions = ["2%", "28%", "54%", "80%"];
  for (let i = 1; i <= 4; i++) {
    notes[i] = document.createElement("div");
    notes[i].className = "note-type" + ((i % 2) + 1); // 1, 2, 1, 2
    notes[i].id = "note" + i;
    $("#notesframe").append(notes[i]);

    $("#note" + i).css("left", positions[i - 1]);
  }

  //automatiser avec une boucle ?
  //   let note1 = document.createElement("div");
  //   note1.className = "note-type1";
  //   note1.id = "note1";

  //   let note2 = document.createElement("div");
  //   note2.className = "note-type2";
  //   note2.id = "note2";

  //   let note3 = document.createElement("div");
  //   note3.className = "note-type1";
  //   note3.id = "note3";

  //   let note4 = document.createElement("div");
  //   note4.className = "note-type2";
  //   note4.id = "note4";

  //   $("#notesframe").append(note1);
  //   $("#notesframe").append(note2);
  //   $("#notesframe").append(note3);
  //   $("#notesframe").append(note4);

  //   $("#note1").css("left", "2%");
  //   $("#note2").css("left", "28%");
  //   $("#note3").css("left", "54%");
  //   $("#note4").css("left", "80%");
};

//function for animating tapnotes when key pressed
var animateTapNotes = () => {
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
      default:
        break;
    }
  });
};
