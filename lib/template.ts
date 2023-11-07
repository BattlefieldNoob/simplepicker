function repeat(str: string, times: number): string {
  let repeated = '';
  for (let i = 1; i <= times; i++) {
    repeated += str;
  }

  return repeated;
}

function localize(lang: string, str: string): string {
  //localize days in italian if lang is it
  if (lang === 'it') {
    if (str === 'Sun') {
      return 'Dom';
    }
    if (str === 'Mon') {
      return 'Lun';
    }
    if (str === 'Tue') {
      return 'Mar';
    }
    if (str === 'Wed') {
      return 'Mer';
    }
    if (str === 'Thu') {
      return 'Gio';
    }
    if (str === 'Fri') {
      return 'Ven';
    }
    if (str === 'Sat') {
      return 'Sab';
    }
  }
  return str;
}

export function htmlTemplate(lang: string) {
  return `
<div class="simplepicker-wrapper">
  <div class="simpilepicker-date-picker">
    <div class="simplepicker-day-header"></div>
      <div class="simplepicker-date-section">
        <div class="simplepicker-month-and-year"></div>
        <div class="simplepicker-date"></div>
      </div>
      <div class="simplepicker-picker-section">
        <div class="simplepicker-calender-section">
          <div class="simplepicker-month-switcher simplepicker-select-pane">
            <button type="button" class="simplepicker-icon simplepicker-icon-previous"></button>
            <div class="simplepicker-selected-date"></div>
            <button type="button" class="simplepicker-icon simplepicker-icon-next"></button>
          </div>
          <div class="simplepicker-calender">
            <table>
              <thead>
                <tr><th>${localize(lang,"Sun")}</th><th>${localize(lang,"Mon")}</th><th>${localize(lang,"Tue")}</th><th>${localize(lang,"Wed")}</th><th>${localize(lang,"Thu")}</th><th>${localize(lang,"Fri")}</th><th>${localize(lang,"Sat")}</th></tr>
              </thead>
              <tbody>
                ${repeat('<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>', 5)}
              </tbody>
            </table>
          </div>
          <div class="simplepicker-time-section">
            <!--<input type="time" value="12:00" autofocus="false">-->
            <input type="number" class="simplepicker-hour" style="display:none" min="0" max="23" value="12">
            <table>
            <tbody>
              <tr>
                <td>
                  <a href="#" tabindex="-1" title="Increment Hour" class="btn" data-action="incrementHours">
                    <span class="glyphicon glyphicon-chevron-up">
                    </span>
                  </a>
                </td>
              </tr>
              <tr>  
                <td>
                  <span class="timepicker-hour" data-time-component="hours" class="btn" title="Pick Hour" data-action="showHours">09:00</span>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#" tabindex="-1" title="Decrement Hour" class="btn" data-action="decrementHours">
                    <span class="glyphicon glyphicon-chevron-down"></span>
                  </a>
                </td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="simplepicker-bottom-part">
        <button type="button" class="simplepicker-cancel-btn simplepicker-btn" title="Cancel">Cancel</button>
        <button type="button" class="simplepicker-ok-btn simplepicker-btn" title="OK">OK</button>
      </div>
  </div>
</div>
`}
