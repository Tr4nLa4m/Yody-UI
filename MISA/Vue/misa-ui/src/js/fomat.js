export class Fomat {
  constructor() {}

  /************
   * Hàm format ngày tháng về dạng DD/MM/YYYY (Ví dụ : 23/06/2011)
   * @param Date
   * Author: TNLAM (01-07-2022)
   */
  formatDate(date) {
    let dateConvert = new Date(date);
    if (date && dateConvert instanceof Date && !isNaN(dateConvert)) {
      date = new Date(date);
      let day = date.getDate();
      day = day < 10 ? `0${day}` : day;
      let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
      let year = date.getFullYear();

      date = `${day}/${month}/${year}`;
      return date;
    } else {
      return "";
    }
  }

  /************
   * Hàm format ngày tháng về dạng YYYY-MM-DD cho kiểu input[type='date'] (Ví dụ : 2011-06-23)
   * @param Date
   * Author: TNLAM (01-07-2022)
   */
   formatDateForInput(date) {
    let dateConvert = new Date(date);
      if (date && dateConvert instanceof Date && !isNaN(dateConvert)) {
        date = new Date(date);
        let day = date.getDate();
        day = day < 10 ? `0${day}` : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let year = date.getFullYear();

        date = `${year}-${month}-${day}`;
        return date;
      } else {
        return "";
      }
  }
  /***********
   * Hàm format giới tính về dạng chuẩn
   * @param: int (0 - nữ , 1- nam , 2 - khác)
   * Author : TNLAM (01 - 07 - 2022)
   */
  formatGender(gender){
    let res;
    if (gender !== null) {
      switch (gender) {
        case 1:
          res = "Nam";
          break;
        case 0:
          res = "Nữ";
          break;
        case 2:
          res = "Khác";
          break;
        default:
          res = "";
          break;
      }

      return res;
    } else {
      return "";
    }
  }
}
