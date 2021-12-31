// VARIABLES

const accordionDropdowns = document.getElementsByClassName(
  "create__accordion-item-btn"
);

const optionCards = getElementsByClassName("create__accordion-item-option");

// Dropdown Click

let dropdownsCount = accordionDropdowns.length;
for (let i = 0; i < dropdownsCount; i++) {
  // ON click for each dropdown
  let dropdownSelection = accordionDropdowns[i];
  dropdownSelection.onClick = (e) => {
    // Open / close dropdown
    let category =
      e.target.type === "submit" ? e.target.value : e.target.parentNode.value;

    // Toggle options and sidebar highlight
    document.getElementById("options");
  };
}
