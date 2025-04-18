var app = {
        id: "#app",
        class: "app",
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 767,
        darkMode: { attr: "data-bs-theme", value: "dark", eventName: "theme-reload" },
        themePanel: {
            class: "theme-panel",
            toggleAttr: 'data-toggle="theme-panel-expand"',
            cookieName: "theme-panel-expand",
            activeClass: "active",
            themeListCLass: "theme-list",
            themeListItemCLass: "theme-list-item",
            theme: { toggleAttr: 'data-toggle="theme-selector"', cookieName: "app-theme", activeClass: "active", classAttr: "data-theme-class" },
            themeDarkMode: { class: "dark-mode", toggleAttr: 'name="app-theme-dark-mode"', cookieName: "app-theme-dark-mode" },
        },
        font: {},
        color: {},
        variablePrefix: "bs-",
        variableFontList: ["body-font-family", "body-font-size", "body-font-weight", "body-line-height"],
        variableColorList: [
            "theme",
            "theme-rgb",
            "theme-color",
            "theme-color-rgb",
            "component-color",
            "component-color-rgb",
            "component-bg",
            "component-bg-rgb",
            "component-secondary-bg",
            "component-bg-rgb",
            "component-tertiary-bg",
            "component-tertiary-bg-rgb",
            "default",
            "default-rgb",
            "primary",
            "primary-rgb",
            "primary-bg-subtle",
            "primary-text",
            "primary-border-subtle",
            "secondary",
            "secondary-rgb",
            "secondary-bg-subtle",
            "secondary-text",
            "secondary-border-subtle",
            "success",
            "success-rgb",
            "success-bg-subtle",
            "success-text",
            "success-border-subtle",
            "warning",
            "warning-rgb",
            "warning-bg-subtle",
            "warning-text",
            "warning-border-subtle",
            "info",
            "info-rgb",
            "info-bg-subtle",
            "info-text",
            "info-border-subtle",
            "danger",
            "danger-rgb",
            "danger-bg-subtle",
            "danger-text",
            "danger-border-subtle",
            "light",
            "light-rgb",
            "light-bg-subtle",
            "light-text",
            "light-border-subtle",
            "dark",
            "dark-rgb",
            "dark-bg-subtle",
            "dark-text",
            "dark-border-subtle",
            "black",
            "black-rgb",
            "blue",
            "blue-rgb",
            "inverse",
            "inverse-rgb",
            "white",
            "white-rgb",
            "red",
            "red-rgb",
            "teal",
            "teal-rgb",
            "indigo",
            "indigo-rgb",
            "orange",
            "orange-rgb",
            "purple",
            "purple-rgb",
            "yellow",
            "yellow-rgb",
            "green",
            "green-rgb",
            "pink",
            "pink-rgb",
            "cyan",
            "cyan-rgb",
            "gray",
            "gray-rgb",
            "lime",
            "lime-rgb",
            "gray-100",
            "gray-200",
            "gray-300",
            "gray-400",
            "gray-500",
            "gray-600",
            "gray-700",
            "gray-800",
            "gray-900",
            "gray-100-rgb",
            "gray-200-rgb",
            "gray-300-rgb",
            "gray-400-rgb",
            "gray-500-rgb",
            "gray-600-rgb",
            "gray-700-rgb",
            "gray-800-rgb",
            "gray-900-rgb",
            "muted",
            "muted-rgb",
            "emphasis-color",
            "emphasis-color-rgb",
            "heading-color",
            "body-bg",
            "body-bg-rgb",
            "body-color",
            "body-color-rgb",
            "secondary-color",
            "secondary-color-rgb",
            "secondary-bg",
            "secondary-bg-rgb",
            "tertiary-color",
            "tertiary-color-rgb",
            "tertiary-bg",
            "tertiary-bg-rgb",
            "link-color",
            "link-color-rgb",
            "link-hover-color",
            "link-hover-color-rgb",
            "border-color",
            "border-color-translucent",
        ],
        breakpoints: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400, xxxl: 1800 },
    },
    slideUp = function (e, t = app.animation.speed) {
        e.classList.contains("transitioning") ||
            (e.classList.add("transitioning"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.boxSizing = "border-box"),
            (e.style.height = e.offsetHeight + "px"),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = 0),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
                (e.style.display = "none"),
                    e.style.removeProperty("height"),
                    e.style.removeProperty("padding-top"),
                    e.style.removeProperty("padding-bottom"),
                    e.style.removeProperty("margin-top"),
                    e.style.removeProperty("margin-bottom"),
                    e.style.removeProperty("overflow"),
                    e.style.removeProperty("transition-duration"),
                    e.style.removeProperty("transition-property"),
                    e.classList.remove("transitioning");
            }, t));
    },
    slideDown = function (e, t = app.animation.speed) {
        if (!e.classList.contains("transitioning")) {
            e.classList.add("transitioning"), e.style.removeProperty("display");
            let a = window.getComputedStyle(e).display;
            "none" === a && (a = "block"), (e.style.display = a);
            let o = e.offsetHeight;
            (e.style.overflow = "hidden"),
                (e.style.height = 0),
                (e.style.paddingTop = 0),
                (e.style.paddingBottom = 0),
                (e.style.marginTop = 0),
                (e.style.marginBottom = 0),
                e.offsetHeight,
                (e.style.boxSizing = "border-box"),
                (e.style.transitionProperty = "height, margin, padding"),
                (e.style.transitionDuration = t + "ms"),
                (e.style.height = o + "px"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                window.setTimeout(() => {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("transitioning");
                }, t);
        }
    },
    slideToggle = function (e, t = app.animation.speed) {
        return "none" === window.getComputedStyle(e).display ? slideDown(e, t) : slideUp(e, t);
    },
    setCookie = function (e, t) {
        var a = new Date(),
            o = a.getTime() + 36e6;
        a.setTime(o), (document.cookie = e + "=" + t + ";expires=" + a.toUTCString() + ";path=/");
    },
    getCookie = function (e) {
        let t = e + "=",
            a = decodeURIComponent(document.cookie).split(";");
        for (let e = 0; e < a.length; e++) {
            let o = a[e];
            for (; " " == o.charAt(0); ) o = o.substring(1);
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
        }
        return "";
    },
    handleHomeContentHeight = function () {
        $("#home").height($(window).height()),
            $(window).on("resize", function () {
                $("#home").height($(window).height());
            });
    },
    handleHeaderNavigationState = function () {
        $(window).on("scroll load", function () {
            "disabled" != $("#header").attr("data-state-change") && ($(window).scrollTop() > $("#header").height() ? $("#header").addClass("navbar-sm") : $("#header").removeClass("navbar-sm"));
        });
    },
    handleAddCommasToNumber = function (e) {
        return e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    },
    handlePageContainerShow = function () {
        $("#page-container").addClass("show");
    },
    handlePageScrollContentAnimation = function () {
        $('[data-scrollview="true"]').each(function () {
            var e = $(this);
            scrollMonitor.create(e, 60).enterViewport(function () {
                $(e)
                    .find("[data-animation=true]")
                    .each(function () {
                        var e = $(this).attr("data-animation-type"),
                            t = $(this);
                        if (!$(t).hasClass("contentAnimated"))
                            if ("number" == e) {
                                var a = parseInt($(t).attr("data-final-number"));
                                $({ animateNumber: 0 }).animate(
                                    { animateNumber: a },
                                    {
                                        duration: 1e3,
                                        easing: "swing",
                                        step: function () {
                                            var e = handleAddCommasToNumber(Math.ceil(this.animateNumber));
                                            $(t).text(e).addClass("contentAnimated");
                                        },
                                    }
                                );
                            } else
                                $(this).addClass(e + " contentAnimated"),
                                    setTimeout(function () {
                                        $(t).addClass("finishAnimated");
                                    }, 1500);
                    });
            });
        });
    },
    handleHeaderScrollToAction = function () {
        $(document).on("click", "[data-click=scroll-to-target]", function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = !(t = $(this).attr("data-scroll-target") ? $(this).attr("data-scroll-target") : "") && $(this).attr("href") ? $(this).attr("href") : t,
                a = $(this).closest(".header").length;
            $("html, body").animate({ scrollTop: $(t).offset().top - 50 }, 500);
            var o = $(this).closest(".nav-item");
            $(o).hasClass("dropdown") && ($(o).hasClass("open") ? $(o).removeClass("open") : $(o).addClass("open")), $(window).width() < 769 && !$(o).hasClass("dropdown") && a && $('#header [data-toggle="collapse"]').trigger("click");
        }),
            $(document).click(function (e) {
                !e.isPropagationStopped() && $(window).width() > 768 && $(".dropdown.open").removeClass("open");
            });
    },
    handleTooltipActivation = function () {
        0 !== $("[data-bs-toggle=tooltip]").length && $("[data-bs-toggle=tooltip]").tooltip();
    },
    handleThemePanel = function () {
        var e, t;
        ((t = document.querySelector("[" + app.themePanel.toggleAttr + "]")) &&
            (t.onclick = function (e) {
                e.preventDefault();
                var t = document.querySelector("." + app.themePanel.class),
                    a = !t.classList.contains(app.themePanel.activeClass);
                t.classList.toggle(app.themePanel.activeClass), setCookie(app.themePanel.cookieName, a);
            }),
        (e = [].slice.call(document.querySelectorAll("." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + "]"))) &&
            e.map(function (e) {
                e.onclick = function () {
                    for (var t = this.getAttribute(app.themePanel.theme.classAttr), a = 0; a < document.body.classList.length; a++) {
                        var o = document.body.classList[a];
                        o.search("theme-") > -1 && document.body.classList.remove(o);
                    }
                    t && document.body.classList.add(t),
                        [].slice.call(document.querySelectorAll("." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + "]")).map(function (t) {
                            t != e ? t.closest("." + app.themePanel.themeListItemCLass).classList.remove(app.themePanel.theme.activeClass) : t.closest("." + app.themePanel.themeListItemCLass).classList.add(app.themePanel.theme.activeClass);
                        }),
                        setCookie(app.themePanel.theme.cookieName, t);
                };
            }),
        (e = [].slice.call(document.querySelectorAll("." + app.themePanel.class + " [" + app.themePanel.themeDarkMode.toggleAttr + "]"))).map(function (e) {
            e.onchange = function () {
                this.checked ? document.querySelector("html").setAttribute(app.darkMode.attr, app.darkMode.value) : document.querySelector("html").removeAttribute(app.darkMode.attr),
                    App.initVariable(),
                    setCookie(app.themePanel.themeDarkMode.cookieName, this.checked ? app.themePanel.themeDarkMode.class : ""),
                    document.dispatchEvent(new CustomEvent(app.darkMode.eventName));
            };
        }),
        getCookie(app.themePanel.cookieName) && "true" == getCookie(app.themePanel.cookieName)) &&
            (t = document.querySelector("." + app.themePanel.class + " [" + app.themePanel.toggleAttr + "]")) &&
            t.click();
        getCookie(app.themePanel.theme.cookieName) &&
            (t = document.querySelector("." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + "][" + app.themePanel.theme.classAttr + '="' + getCookie(app.themePanel.theme.cookieName) + '"]')) &&
            t.click();
        getCookie(app.themePanel.themeDarkMode.cookieName) && (t = document.querySelector("." + app.themePanel.class + " [" + app.themePanel.themeDarkMode.toggleAttr + "]")) && ((t.checked = !0), t.onchange());
    },
    handleParoller = function () {
        void 0 !== $.fn.paroller && 0 !== $('[data-paroller="true"]').length && $('[data-paroller="true"]').paroller();
    },
    handleCssVariable = function () {
        var e = getComputedStyle(document.body);
        if (app.variableFontList && app.variablePrefix)
            for (var t = 0; t < app.variableFontList.length; t++) app.font[app.variableFontList[t].replace(/-([a-z|0-9])/g, (e, t) => t.toUpperCase())] = e.getPropertyValue("--" + app.variablePrefix + app.variableFontList[t]).trim();
        if (app.variableColorList && app.variablePrefix)
            for (t = 0; t < app.variableColorList.length; t++) app.color[app.variableColorList[t].replace(/-([a-z|0-9])/g, (e, t) => t.toUpperCase())] = e.getPropertyValue("--" + app.variablePrefix + app.variableColorList[t]).trim();
    },
    App = (function () {
        "use strict";
        return {
            init: function () {
                handleHomeContentHeight(),
                    handleHeaderNavigationState(),
                    handlePageContainerShow(),
                    handlePageScrollContentAnimation(),
                    handleHeaderScrollToAction(),
                    handleTooltipActivation(),
                    handleThemePanel(),
                    handleParoller(),
                    this.initVariable();
            },
            initVariable: function () {},
        };
    })();
$(document).ready(function () {
    App.init();
});
