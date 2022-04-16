const single = document.querySelector(".js-choice");
const singleSelect = new Choices(single);

const multiple = document.querySelector(".js-choice[multiple]");
const multiChoices = new Choices(multiple, {
  removeItemButton: true,
});

const customSingle = document.querySelectorAll(".custom-single");
customSingle.forEach(el => {
  new Choices(el);
});

const customMultiple = document.querySelectorAll(".custom-multiple");
customMultiple.forEach(el => {
  new Choices(el);
});

const customTagsMultiple = document.querySelector("#custom-tags-select");
const customTagsMultiChoices = new Choices(customTagsMultiple, {
  allowHTML: true,
});

// popup
const openPopupBtns = document.querySelectorAll('[data-popup-open]');
const closePopupBtns = document.querySelectorAll('[data-popup-close]');

openPopupBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.closest('[data-popup-parent]').classList.add('popup-is-open');
  });
});

closePopupBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    btn.closest('[data-popup-parent]').classList.remove('popup-is-open');
  });
});


// datepicker

let dpMin, dpMax;

dpMin = new AirDatepicker("#dateMin", {
  dateFormat: "dd, MM, yyyy",
  onSelect({
    date
  }) {
    dpMax.update({
      minDate: date,
    });
  },
});

dpMax = new AirDatepicker("#dateMax", {
  dateFormat: "dd, MM, yyyy",
  onSelect({
    date
  }) {
    dpMin.update({
      maxDate: date,
    });
  },
});

// const customTemplates = new Choices(
//   document.getElementById('choices-single-custom-templates'), {
//     allowHTML: true,
//     callbackOnCreateTemplates: function (strToEl) {
//       const classNames = this.config.classNames;
//       const itemSelectText = this.config.itemSelectText;
//       return {
//         item: function ({classNames}, data) {
//           return strToEl(
//             `<div class="${classNames.item} ${classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ''} ${data.disabled ? 'aria-disabled="true"' : ''}>
//               <span style = "display: block; width: 20px; height: 20px; background: ${data.label}"></span>
//             </div>`
//           );
//         },
//         choice: function ({classNames}, data) {
//           return strToEl(
//             `<div class="${classNames.item} ${classNames.itemChoice} ${classNames.groupHeading}" data-select-text="${itemSelectText}" data-choice ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable'}>
//               <span style="display: block; width: 20px; height: 20px; background: ${data.label}"></span>
//             </div>`
//           );
//         },
//       };
//     },
//   }
// );
