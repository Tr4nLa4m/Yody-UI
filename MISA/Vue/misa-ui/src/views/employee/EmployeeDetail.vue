<template>
  <!-- Dialog Employee Start -->
  <div class="pop_up" id="pop_up">
    <div class="pop_up-container">
      <!-- Pop up add employee Start-->
      <div class="flex center h100p">
        <div class="p-add_emp flex f-column" id="p-add_emp">
          <!-- Header Popup -->
          <div class="p-add_emp-header flex space-bw">
            <div class="p-add_emp-title flex f-start">
              <div class="title-popup">Thông tin nhân viên</div>

              <label class="checkbox-component">
                <input type="checkbox" id="isCustomer" class="input_checkbox" />
                <span class="checkbox">
                  <div class="icon icon_16 icon_checked"></div>
                </span>

                <span class="checkbox-title">Là khách hàng</span>
              </label>

              <label class="checkbox-component">
                <input type="checkbox" id="isSupplier" class="input_checkbox" />
                <span class="checkbox">
                  <div class="icon icon_16 icon_checked"></div>
                </span>

                <span class="checkbox-title">Là nhà cung cấp</span>
              </label>
            </div>

            <div class="p-add_emp-closeBtn" @click="btnCloseDialog">
              <button id="help-add_emp-btn">
                <div class="icon icon_24 icon_help"></div>
              </button>

              <button id="close-add_emp-btn">
                <div class="icon icon_24 icon_close"></div>
              </button>
            </div>
          </div>
          <!-- Body Popup -->
          <div class="p-add_emp-body pl32 pr32">
            <div class="flex">
              <div class="w50p pr26 flex f-column">
                <div class="pb12 w100p flex">
                  <div class="w40p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Mã</div>
                        <div class="title-required">&nbsp;*</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="EmployeeCode"
                          id="txtEmpCode"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.EmployeeCode"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w60p">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Tên</div>
                        <div class="title-required">&nbsp;*</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="EmployeeName"
                          id="txtEmpName"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.EmployeeName"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pb12 w100p">
                  <div class="component-box-select">
                    <div class="flex">
                      <div class="b pb4">Đơn vị</div>
                      <div class="title-required">&nbsp;*</div>
                    </div>
                    <div class="main-combobox">
                      <select
                        propName="DepartmentId"
                        class="select"
                        name="selDepartment"
                        id="selDepartment"
                        v-model="employee.DepartmentId"
                      >
                        <option value="19165ed7-212e-21c4-0428-030d4265475f">
                          Phòng truyền thông
                        </option>
                        <option value="2924c34d-68f1-1d0a-c9c7-6c0aeb6ec302">
                          Phòng phát triển
                        </option>
                        <option value="3631011e-4559-4ad8-b0ad-cb989f2177da">
                          Phòng kế toán
                        </option>
                        <option value="48ca9c4a-f94e-11ec-82ee-0259e1bc84a2">
                          Phòng đào tạo
                        </option>
                        <option value="4cf2dd43-5f4b-71b6-e212-ebbbcf065d1c">
                          Phòng nhân sự
                        </option>
                        <option value="7a0b757e-41eb-4df6-c6f8-494a84b910f4">
                          Phòng đào tạo
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="pb12 w100p">
                  <div class="component-box_input">
                    <div class="flex">
                      <div class="b pb4">Chức danh</div>
                    </div>
                    <div class="w100p">
                      <input
                        propName="PositionName"
                        id="txtEmpPosition"
                        type="text"
                        class="w100p input_normal input-height32"
                        v-model="employee.PositionName"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w50p">
                <div class="pb12 w100p flex">
                  <div class="w40p pr6">
                    <div class="component-box_calendar">
                      <div class="flex">
                        <div class="b pb4">Ngày sinh</div>
                      </div>
                      <div class="w100p">
                        <div class="form-calendar">
                          <input
                            propName="DateOfBirth"
                            id="dateOfBirth"
                            type="date"
                            placeholder="DD/MM/YYYY"
                            v-model="employee.DateOfBirth"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="w60p pl10">
                    <div class="component-box_radio">
                      <div class="flex">
                        <div class="b pb4">Giới tính</div>
                      </div>
                      <div class="w100p">
                        <div class="radio_group-ver">
                          <label class="btn-radio">
                            <input
                              type="radio"
                              propName="Gender"
                              checked
                              class="input-radio"
                              value="1"
                              name="gender"
                            />
                            <span class="span-radio">
                              <span class="radio-border"></span>
                              <span class="radio-checked"></span>
                            </span>
                            <span class="radio-title">Nam</span>
                          </label>

                          <label class="btn-radio">
                            <input
                              type="radio"
                              propName="Gender"
                              class="input-radio"
                              name="gender"
                              value="0"
                            />
                            <span class="span-radio">
                              <span class="radio-border"></span>
                              <span class="radio-checked"></span>
                            </span>
                            <span class="radio-title">Nữ</span>
                          </label>

                          <label class="btn-radio">
                            <input
                              type="radio"
                              propName="Gender"
                              class="input-radio"
                              value="2"
                              name="gender"
                            />
                            <span class="span-radio">
                              <span class="radio-border"></span>
                              <span class="radio-checked"></span>
                            </span>
                            <span class="radio-title">Khác</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pb12 w100p flex">
                  <div class="w60p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Số CMND</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="IdentityNumber"
                          id="txtIdentityCode"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.IdentityNumber"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w40p">
                    <div class="component-box_calendar">
                      <div class="flex">
                        <div class="b pb4">Ngày cấp</div>
                      </div>
                      <div class="w100p">
                        <div class="form-calendar">
                          <input
                            propName="IdentityDate"
                            id="dateOfIdentity"
                            type="date"
                            placeholder="DD/MM/YYYY"
                            v-model="employee.IdentityDate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pb12 w100p">
                  <div class="component-box_input">
                    <div class="flex">
                      <div class="b pb4">Nơi cấp</div>
                    </div>
                    <div class="w100p">
                      <input
                        propName="IdentityPlace"
                        id="txtIdentityPlace"
                        type="text"
                        class="w100p input_normal input-height32"
                        v-model="employee.IdentityPlace"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex">
              <div class="w100p contact-container flex f-column">
                <!-- <div class="tab_group w100p">

                                                        <div class="flex align-end h100p">
                                                            <div class="tab active">Liên hệ</div>
                                                            <div class="tab ml1">Tài khoản ngân hàng</div>
                                                        </div>
                                                    </div>

                                                    <div class="tab-container">
                                                        <div class="w100p">
                                                            <div class="contact-content tab-content">
                                                                <div class="flex f-column">
                                                                    <div class="address w100p pb12">
                                                                        <div class="component-box_input">
                                                                            <div class="flex">
                                                                                <div class="b pb4">Địa chỉ</div>
                                                                            </div>
                                                                            <div class="w100p">
                                                                                <input type="text" class="w100p input_normal input-height32">
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="flex w100p pb12">
                                                                        <div class="w25p mr6">
                                                                            <div class="component-box_input">
                                                                                <div class="flex">
                                                                                    <div class="b pb4">ĐT di động</div>
                                                                                </div>
                                                                                <div class="w100p">
                                                                                    <input type="text" class="w100p input_normal input-height32">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="w25p mr6">
                                                                            <div class="component-box_input">
                                                                                <div class="flex">
                                                                                    <div class="b pb4">ĐT cố định</div>
                                                                                </div>
                                                                                <div class="w100p">
                                                                                    <input type="text" class="w100p input_normal input-height32">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="w25p mr6">
                                                                            <div class="component-box_input">
                                                                                <div class="flex">
                                                                                    <div class="b pb4">Email</div>
                                                                                </div>
                                                                                <div class="w100p">
                                                                                    <input type="text" class="w100p input_normal input-height32">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div class="bank-content tab-content">
                                                                <div class="table_data-container">
                                                                    <table class="w100p">
                                                                        <thead>
                                                                            <tr>
                                                                                <div class="th_content">
                                                                                    <th class="thead-td2" style="min-width: 150px; width: 150px">
                                                                                        <div class="col-draggable">
                                                                                            <span class="flex justify-left thead-title">Số tài khoản</span>
                                                                                            <div class="icon icon_16 icon_thead_option thead-icon"></div>
                                                                                        </div>
                                                                                    </th>
                                
                                                                                    <th class="thead-td2" style="min-width: 200px; width: 200px">
                                                                                        <div class="col-draggable">
                                                                                            <span class="flex justify-left thead-title">Tên ngân hàng</span>
                                                                                            <div class="icon icon_16 icon_thead_option thead-icon"></div>
                                                                                        </div>
                                                                                    </th>
                                
                                                                                    <th class="thead-td2" style="min-width: 180px; width: 180px">
                                                                                        <div class="col-draggable">
                                                                                            <span class="flex justify-left thead-title">Chi nhánh</span>
                                                                                            <div class="icon icon_16 icon_thead_option thead-icon"></div>
                                                                                        </div>
                                                                                    </th>

                                                                                    <th class="thead-td2" style="min-width: 220px; width: 220px">
                                                                                        <div class="col-draggable">
                                                                                            <span class="flex justify-left thead-title">tỉnh/tp của ngân hàng</span>
                                                                                            <div class="icon icon_16 icon_thead_option thead-icon"></div>
                                                                                        </div>
                                                                                    </th>
                                                                                    
                                                                                </div>
                                                                                <th class="tool thead-td2" style="min-width: 40px; width: 40px">
                                                                                    <span class="thead-title"></span>
                                                                                </th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr class="tr-selected">
                                                                                <td>
                                                                                    <div class="editor flex align-item">
                                                                                        <input type="text" style="width: 130px; min-width: 130px" class="input_normal">
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="editor flex align-item">
                                                                                        <input type="text" style="width: 180px; min-width: 180px" class="input_normal">
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="editor flex align-item">
                                                                                        <input type="text" style="width: 160px; min-width: 160px" class="input_normal">
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="editor flex align-item">
                                                                                        <input type="text" style="width: 200px; min-width: 200px" class="input_normal">
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div class="flex center ">
                                                                                        <div class="icon icon_16 icon_delete"></div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>

                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div class="bank-table-control w100p">
                                                                    <div class="flex pt10 pb10">
                                                                        <button class="size-small">Thêm dòng</button>
                                                                        <button class="size-small">Xóa hết dòng</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> -->
                <div class="w100p pb12">
                  <div class="component-box_input">
                    <div class="flex">
                      <div class="b pb4">Địa chỉ</div>
                    </div>
                    <div class="w100p">
                      <input
                        propName="Address"
                        id="txtEmpAddress"
                        type="text"
                        class="w100p input_normal input-height32"
                        v-model="employee.Address"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex w100p pb12">
                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">ĐT di động</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="PhoneNumber"
                          id="txtMobilePhone"
                          type="tel"
                          class="w100p input_normal input-height32"
                          v-model="employee.PhoneNumber"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">ĐT cố định</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="TelephoneNumber"
                          id="txtLandlinePhone"
                          type="tel"
                          class="w100p input_normal input-height32"
                          v-model="employee.LandlineNumber"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Email</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="Email"
                          id="txtEmpEmail"
                          type="email"
                          class="w100p input_normal input-height32"
                          v-model="employee.Email"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex w100p pb12">
                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">TK ngân hàng</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="BankAccountNumber"
                          id="txtBankAccount"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.BankAccountNumber"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Tên ngân hàng</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="BankName"
                          id="txtBankName"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.BankName"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="w25p pr6">
                    <div class="component-box_input">
                      <div class="flex">
                        <div class="b pb4">Chi nhánh</div>
                      </div>
                      <div class="w100p">
                        <input
                          propName="BankBranchName"
                          id="txtBankBranch"
                          type="text"
                          class="w100p input_normal input-height32"
                          v-model="employee.BankBranchName"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer Popup -->
          <div class="p-add_emp-footer pl32 pr32 pb20">
            <div class="divide"></div>
            <div class="footer-btns">
              <div class="flex space-bw">
                <button class="button-default" @click="btnCloseDialog">
                  Hủy
                </button>
                <div class="flex">
                  <button
                    class="button-default ml10"
                    @click="btnSaveEmployee(employee)"
                  >
                    Cất
                  </button>
                  <button
                    id="saveAndAddBtn"
                    class="button-default primary ml10"
                    @click="btnSaveEmployee(employee)"
                  >
                    Cất và Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pop up add employee End-->
    </div>
  </div>

  <!-- Dialog Employee End-->
  <MModal
    v-if="IsError"
    :errMsg="errMsg"
    :ErrorMode="ErrorMode"
    @closeModal="showModal"
  />
</template>

<script>
import axios from "axios";
import MModal from "../../components/base/Modal.vue";
import { Fomat } from "@/js/fomat";
import { useToast } from "vue-toastification";

var format = new Fomat();
const toast = useToast();

export default {
  name: "EmployeeDetail",
  components: {
    MModal,
  },
  data() {
    return {
      employee: {},
      IsError: false,
      errMsg: [],
      ErrorMode: 0,
    };
  },
  props: {
    employeeSelected: {
      type: Object,
    },
    EditMode: {
      type: Number,
      default: 0, // 0 -Thêm mới, 1- Sửa
      required: true,
    },
  },
  methods: {
    /****
     * Ẩn form nhân viên khi ấn nút Close
     * Author: Trần Lâm (28-06-2022)
     * @param:
     */
    btnCloseDialog() {
      this.$emit("closeDialog", false);
    },
    reloadData() {
      this.$emit("loadData");
    },
    /****
     * Lưu nhân viên vào trong database
     * Author: Trần Lâm (28-06-2022)
     * @param:
     */
    btnSaveEmployee(employee) {
      try {
        var me = this;
        // Validate dữ liệu
        let valid = me.validateEmployee(employee);
        debugger;
        if (valid) {
          if (me.EditMode == 0) {
            // Thực hiện thêm mới nhân viên
            axios
              .post("http://localhost:5174/api/v1/Employees", employee)
              .then(function (res) {
                toast.success("Thêm mới thành công");
                me.employee = {};
                me.$nextTick(function () {
                  me.btnCloseDialog();
                  me.reloadData();
                });
                console.log(res);
              })
              .catch((error) => console.log(error));
          } else if (me.EditMode == 1) {
            // Thực hiện chỉnh sửa nhân viên
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    /****
     * Validate dữ liệu nhân viên
     * Author: Trần Lâm (28-06-2022)
     * @param:employee
     */
    validateEmployee(employee) {
      var me = this;
      me.errMsg = [];
      let isValid = true;
      debugger;
      try {
        // 1. Kiểm tra các trường bắt buộc
        if (!employee.EmployeeCode) {
          isValid = false;
          me.errMsg.push("Mã nhân viên không được để trống");
        }

        if (!employee.EmployeeName) {
          isValid = false;
          me.errMsg.push("Tên nhân viên không được để trống");
        }

        if (!employee.DepartmentId) {
          isValid = false;
          me.errMsg.push("Đơn vị không được để trống");
        }
        // 2. Kiểm tra các trường liên quan đến ngày tháng

        // 3. Kiểm tra dữ liệu có đúng định dạng không (VD : email,...)

        // 4. Kiểm tra các thông tin có đúng hay không (VD : Phòng ban có tồn tại trong hệ thống hay không)

        // 5. Kiểm tra xem còn lỗi validate hay không

        if (!isValid) {
          //Hiển thị thông báo lỗi
          me.showModal(true);

          return isValid;
        }
        return isValid;
      } catch (error) {
        console.log(error);
      }
    },
    showModal(IsShow) {
      this.IsError = IsShow;
    },
    formatDate(date) {
      return format.formatDateForInput(date);
    },
    getNewEmployeeCode() {
      var me = this;
      // Gọi API lấy mã nhân viên mới
      axios
        .get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then(function (res) {
          let newEmployeeCode = res.data;
          me.employeeSelected.EmployeeCode = newEmployeeCode;
          me.employee = me.employeeSelected;
          // Focus vào mã nhân viên
          me.$nextTick(function () {
            me.focusInput("#txtEmpCode");
          });
        })
        .catch(function (res) {
          console.log(res);
        });
    },
    focusInput(input) {
      // Focus vào ô nhập liệu
      document.querySelector(input).focus();
      document.querySelector(input).select();
    },
    checkInRadios(nameElement, value) {
      const radioButtons = document.querySelectorAll(nameElement);
      for (const radioButton of radioButtons) {
        if (radioButton.value == value) {
          radioButton.checked = true;
          break;
        }
      }
    },
    checkInCheckBoxs(nameElement) {
      document.querySelector(nameElement).checked = true;
    },
  },
  created() {
    var me = this;
    // Kiểm tra xem là thêm mới hay sửa dữ liệu
    if (me.EditMode == 0) {
      // Lấy mã nhân viên mới và focus vào mã nhân viên
      me.getNewEmployeeCode();
    } else {
      me.employeeSelected.DateOfBirth = me.formatDate(
        me.employeeSelected.DateOfBirth
      );
      me.employeeSelected.IdentityDate = me.formatDate(
        me.employeeSelected.IdentityDate
      );
      me.employee = me.employeeSelected;
      me.$nextTick(function () {
        // Focus vào mã nhân viên
        me.focusInput("#txtEmpCode");
        // Check vào radio button tương ứng
        me.checkInRadios('input[name="gender"]', me.employeeSelected.Gender);
        // Check vào ô checkbox tương ứng
        if (me.employee.IsCustomer == 1) {
          me.checkInCheckBoxs("#isCustomer");
        }
        if (me.employee.IsSupplier == 1) {
          me.checkInCheckBoxs("#isSupplier");
        }
      });
    }
  },
  beforeUnmount() {
    console.log("beforeUnmunted");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
@import url(../../css/main.css);
</style>