<template>
  <div class="content_area">
    <!-- Header Content Start -->
    <div class="header_list" id="header_list">
      <div class="header_box flex space-bw">
        <div class="header_box-title">Nhân viên</div>
        <div class="header_box-button flex space-bw align-item">
          <button
            class="
              utilities
              btn-mr12 btn-padding
              btn-border_black btn-border_radius
              btn-h36
            "
          >
            <div class="flex align-item">
              <span>Tiện ích</span>
              <div class="icon icon_16 icon_arrow_down"></div>
            </div>
          </button>
          <div class="add_emp flex">
            <button
              id="addEmpBtn"
              class="button-default primary add_emp-title btn-padding"
              @click="btnNewEmpDialog"
            >
              <span>Thêm</span>
            </button>
            <button class="button-default primary add_emp-icon btn-padding">
              <div class="divider"></div>
              <div class="icon icon_16 icon_arrow_down-white"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="all_categories flex align-item">
        <div class="icon icon_16 icon_chevron_left"></div>
        <a href="#">Tất cả danh mục</a>
      </div>
    </div>
    <!-- Header Content End -->

    <!-- Table data Start -->
    <div class="content_body">
      <div class="filters">
        <div class="filters_box flex">
          <div class="flex-grow">
            <button
              class="
                btn-mr12 btn-padding
                btn-border_black btn-border_radius
                btn-h36
              "
            >
              <div class="flex align-item">
                <span>Thực hiện hàng loạt</span>
                <div class="icon icon_16 icon_arrow_down"></div>
              </div>
            </button>
          </div>

          <div class="filters_box-search search">
            <input
              type="text"
              class="input_normal icon_after_input input-height32"
              placeholder="Tìm theo mã, tên nhân viên"
            />
            <div class="icon icon_16 icon_search"></div>
          </div>

          <div class="filters_box-buttons flex align-item">
            <div title="Lấy lại dữ liệu" class="filters_box-button">
              <div class="icon icon_24 icon_refresh"></div>
            </div>

            <div title="Xuất ra Excel" class="filters_box-button">
              <div class="icon icon_24 icon_excel"></div>
            </div>

            <div title="Tùy chỉnh giao diện" class="filters_box-button">
              <div class="icon icon_24 icon_setting-second"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="table_data">
        <div class="table_data-container">
          <table class="employee_data">
            <thead>
              <tr>
                <th class="left_out-white"></th>
                <th class="check_all thead-td">
                  <label for="check-all" class="flex center relative">
                    <input
                      type="checkbox"
                      id="check-all"
                      class="input_checkbox"
                    />
                    <span class="checkbox">
                      <div class="icon icon_16 icon_checked"></div>
                    </span>
                  </label>
                </th>
                <th class="thead-td" style="min-width: 143px; width: 143px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Mã Nhân Viên</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 190px; width: 190px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Tên Nhân Viên</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 116px; width: 116px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title">giới tính</span>
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 125px; width: 125px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title">Ngày sinh</span>
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 69px; width: 69px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title">Chức danh</span>
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 173px; width: 173px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Tên đơn vị</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 150px; width: 150px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Số tài khoản</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 250px; width: 250px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Tên ngân hàng</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>

                <th class="thead-td" style="min-width: 250px; width: 250px">
                  <div class="col-draggable">
                    <span class="flex justify-left thead-title"
                      >Chi nhánh ngân hàng</span
                    >
                    <div
                      class="icon icon_16 icon_thead_option thead-icon"
                    ></div>
                  </div>
                </th>
                <th
                  class="function thead-td"
                  style="right: 30px; min-width: 120px; width: 120px"
                >
                  <span class="thead-title">Chức năng</span>
                </th>
                <th class="right_out-white"></th>
                <th class="right_out-grey"></th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="emp in employees"
                :key="emp.EmployeeId"
                @dblclick="btnShowEmpDetail(emp)"
              >
                <td class="left_out-white"></td>
                <td class="check">
                  <label for="" class="flex center relative">
                    <input type="checkbox" class="input_checkbox" />
                    <span class="checkbox">
                      <div class="icon icon_16 icon_checked"></div>
                    </span>
                  </label>
                </td>
                <td>{{ emp.EmployeeCode }}</td>
                <td>{{ emp.EmployeeName }}</td>
                <td>{{ formatGender(emp.Gender) }}</td>
                <td>{{ formatDate(emp.DateOfBirth) }}</td>
                <td>{{ emp.PositionName }}</td>
                <td>{{ emp.DepartmentName }}</td>
                <td>{{ emp.BankAccountNumber }}</td>
                <td>{{ emp.BankName }}</td>
                <td>{{ emp.BankBranchName }}</td>
                <td class="function">
                  <div class="func_btn flex center">
                    <button @click="btnShowEmpDetail(emp)">Sửa</button>
                    <div class="">
                      <button class="fixed_icon">
                        <div class="icon icon_16 icon_arrow_down-blue"></div>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="right_out-white"></td>
                <td class="right_out-grey"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="table_data-footer" id="table_data-footer">
        <div class="flex space-bw align-item">
          <div class="num_record">
            Tổng số : <span class="b">{{ employees.length }}</span> bản ghi
          </div>

          <div class="pagination flex align-item space-bw">
            <div class="record_in_page">
              <div class="record_in_page-content flex align-item space-bw">
                <span>20 bản ghi trên 1 trang</span>
                <div class="action">
                  <div class="icon icon_16 icon_arrow_down"></div>
                </div>
              </div>
            </div>

            <div class="pagination_content flex align-center">
              <div class="mr16">Trước</div>
              <div class="page_index">
                <span class="pl6 pr6 selected">1</span>
                <span class="pl6 pr6">2</span>
                <span class="pl6 pr6">3</span>
                <span class="pl6 pr6">4</span>
              </div>
              <div class="ml16">Sau</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Table data End -->
  </div>

  <EmployeeDetail
    v-if="IsShowDialog"
    :EditMode="EditMode"
    :employeeSelected="employeeSelected"
    @closeDialog="showDialog"
    @loadData="loadData"
  />
  <MLoading v-if="IsLoading" />
</template>

<script>
import axios from "axios";
import { Fomat } from "@/js/fomat";
import EmployeeDetail from "./EmployeeDetail.vue";
var fomat = new Fomat();
export default {
  name: "EmployeeList",
  components: {
    EmployeeDetail,
  },
  data() {
    return {
      FullName: "Trần Ngọc Lâm",
      employees: [],
      employeeSelected: {},
      IsShowDialog: false,
      EditMode: 0,
      IsLoading: false,
    };
  },

  methods: {
    /****
     * Hiện form thêm mới nhân viên khi ấn nút Thêm
     * Author: Trần Lâm (28-06-2022)
     * @param:
     */
    btnNewEmpDialog() {
      var me = this;

      // Hiển thị form nhân viên mới
      me.showDialog(true);
      // Chuyển EditMode về thêm
      me.EditMode = 0;
      me.employeeSelected = {};
    },
    /****
     * Hiện form nhân viên khi ấn đúp vào hàng
     * Author: Trần Lâm (28-06-2022)
     * @param: employee
     */
    btnShowEmpDetail(employee) {
      this.employeeSelected = employee;
      // Chuyển EditMode về sửa
      this.EditMode = 1;
      //Hiển thị form nhân viên
      this.showDialog(true);
    },
    formatDate(date) {
      return fomat.formatDate(date);
    },
    formatGender(gender) {
      return fomat.formatGender(gender);
    },
    showDialog(IsShow) {
      this.IsShowDialog = IsShow;
    },
    loadData() {
      try {
        var me = this;
        // Hiển thị loading
        me.IsLoading = true;
        axios
          .get("http://localhost:5174/api/v1/Employees")
          .then(function (response) {
            me.employees = response.data;

            // Ẩn hiện loading
            me.IsLoading = false;
          })
          .catch(function (response) {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  // 1. BeforeCreated
  beforeCreate() {
    console.log("1. BeforeCreated");
  },
  // 2. Created
  created() {
    console.log("2. Created");
    var me = this;
    me.loadData();
  },
  // 3. beforeMounted
  beforeMount() {
    console.log("3. beforeMounted");
  },
  // 4. mounted
  mounted() {
    console.log("4. mounted");
  },
  // 5. beforeUpdated
  beforeUpdate() {
    console.log("5. beforeUpdated");
  },
  // 6. Updated
  updated() {
    console.log("6. Updated");
  },
  // 7. beforeUnmounted
  beforeUnmount() {
    console.log("7. beforeUnmounted");
  },
  // 8. unmounted
  unmounted() {
    console.log("8. unmounted");
  },
};
</script>

