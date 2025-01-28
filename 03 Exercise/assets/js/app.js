"use strict";

$(document).ready(function () {
  const form = document.querySelector("form");
  $("#reg").on("click", function (e) {
    /*****/
    e.preventDefault();
    if (!form.checkValidity()) {
      $("form").addClass("was-validated");
      $("select").val() == "" ? $("select ~ .valid-feedback").hide() : "";
    }
  });
});
