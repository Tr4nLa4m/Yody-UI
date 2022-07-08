<template>
    <div class="menu" id="menu">

        <!-- Logo Start -->
        <div class="logo__container">
            <a href="#" class="logo__container-option icon_24 icon_option icon"></a>
            <a href="#" class="logo__container-content">
                <img src="../../assets/Resource/img/Logo_Module_TiengViet_White.66947422.svg" alt="">
            </a>
        </div>
        <!-- Logo End -->

        <!-- Menu list Start -->
        <div class="menu__list">
            <div class="menu__list-item">
                <router-link to="/overview">
                    <div class="menu__item-icon">
                        <div class="icon icon_24 icon_dashboard"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Tổng quan">Tổng quan</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/cash" class="active">
                    <div class="menu__item-icon">
                        <div class="icon icon_24 icon_cash"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Tiền mặt">Tiền mặt</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/deposits" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_bank icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Tiền gửi">Tiền gửi</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/buying" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_pu icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Mua hàng">Mua hàng</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/selling" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_sale icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Bán hàng">Bán hàng</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/invoice" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_invoice icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Quản lý hóa đơn">Quản lý hóa đơn</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/stock" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_stock icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Kho">Kho</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/tools" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_tool icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Công cụ dụng cụ">Công cụ dụng cụ</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/assets" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_assets icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Tài sản cố định">Tài sản cố định</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/tax" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_tax icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Thuế">Thuế</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="price" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_price icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Giá thành">Giá thành</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/general" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_general icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Tổng hợp">Tổng hợp</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <router-link to="/budget" href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_budget icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Ngân sách">Ngân sách</span>
                    </div>
                </router-link>
            </div>

            <div class="menu__list-item">
                <a href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_report icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Báo cáo">Báo cáo</span>
                    </div>
                </a>
            </div>

            <div class="menu__list-item">
                <a href="#">
                    <div class="menu__item-icon">
                        <div class="icon icon_finance icon_24"></div>
                    </div>

                    <div class="menu__item-title">
                        <span title="Phân tích tài chính">Phân tích tài chính</span>
                    </div>
                </a>
            </div>
        </div>
        <!-- Menu list End -->

        <!-- License Start -->
        <div class="full-license">

        </div>
        <!-- License End -->
    </div>
</template>
<style>
@import url(../../css/layout/menu.css);
</style>