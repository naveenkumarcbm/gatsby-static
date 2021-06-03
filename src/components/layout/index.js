import React, { useEffect } from "react";
import Helmet from "react-helmet";
import $ from "jquery";

//All Global Styles
import "../../styles/bootstrap.min.css";
import "../../styles/style.css";
import "../../styles/style-footer.css";
import "../../styles/visitor.css";
import "../../styles/blocks.style.build.css";
// Shared components
import Header from "../header";
import Footer from "../footer";

export default function Layout({ headerclassName = "", children }) {
  useEffect(() => {
    ////////////////////////////////////////////////////////
    // submenu-js
    // Adds and removes "active" class to toggle dropdowns
    ////////////////////////////////////////////////////////

    // Dragging
    console.log("JQuery got in");
    var dragging = false;
    $("body").on("touchstart", function () {
      dragging = false;
    });
    $("body").on("touchmove", function () {
      dragging = true;
    });

    // Add sub menu toggle span
    $('<span class="sub-menu-toggle"></span>').appendTo(".submenu-js li.menu-item-has-children > a");

    // Add sub menu notch
    $('<span class="dropdown-notch"><span class="notch"></span></span>').insertBefore(".submenu-js li.menu-item-has-children > ul");

    // Mobile touch
    $(".mobile-navbar-menu.submenu-js li.menu-item-has-children > a").on("touchend", function (event) {
      if (!dragging && !$(this).parent().hasClass("active")) {
        $(this).parent().toggleClass("active");
        return false;
      }
    });

    // Mobile click
    $(".mobile-navbar-menu.submenu-js li.menu-item-has-children > a").click(function () {
      if (!$(this).parent().hasClass("active")) {
        $(this).parent().toggleClass("active");
        return false;
      }
    });

    // Desktop touch
    $(".desktop-navbar-menu.submenu-js li.menu-item-has-children > a").on("touchend", function (event) {
      if (!$(this).parent().hasClass("active")) {
        $(this).parent().parent().find("li.menu-item-has-children > a").not(this).parent().removeClass("active");
        $(this).parent().toggleClass("active");
        return false;
      }
    });

    // Desktop hover
    $(".desktop-navbar-menu.submenu-js li.menu-item-has-children").hover(
      function () {
        $(this).parent().find("li.menu-item-has-children").not(this).removeClass("active");
        $(this).addClass("active");
      },
      function () {
        $(this).removeClass("active");
      }
    );

    // Sub menu toggler
    $(".submenu-js li.menu-item-has-children > a > .sub-menu-toggle").on("touchend", function (event) {
      if (!dragging) {
        $(this).parent().parent().toggleClass("active");
        return false;
      }
    });
    $(".submenu-js li.menu-item-has-children > a > .sub-menu-toggle").click(function () {
      $(this).parent().parent().toggleClass("active");
      return false;
    });

    // Click touch away
    $(document).on("click touchend", function (event) {
      if (!dragging && !$(event.target).closest(".menu-item-has-children").length) {
        $(".desktop-navbar-menu li.menu-item-has-children").removeClass("active");
      }
    });

    /////////////////////////////////////////////
    // Search toggle
    /////////////////////////////////////////////

    $(".desktop-flyout-search-open, .desktop-flyout-search-form .button-close").click(function () {
      $(".desktop-search-hide").fadeToggle();
      $(".desktop-flyout-search-form").fadeToggle();

      return false;
    });

    $(".desktop-flyout-search-open").click(function () {
      $(".desktop-flyout-search-form .form-control").focus();
      return false;
    });

    $(document).on("click touchend", function (event) {
      if (!dragging && !$(event.target).closest(".desktop-flyout-search-form").length && $(".desktop-flyout-search-form").is(":visible")) {
        $(".desktop-search-hide").fadeToggle();
        $(".desktop-flyout-search-form").fadeToggle();
      }
    });

    /////////////////////////////////////////////
    // Height sizer
    /////////////////////////////////////////////

    function heightSizer() {
      var allHeightSizers = $('[class*="height-sizer"]');
      var sized = [];

      if (allHeightSizers.length) {
        allHeightSizers.each(function () {
          var height = 0;
          var classes = $(this).attr("class");
          var start = classes.indexOf("height-sizer");
          var end = classes.indexOf(" ", start);
          if (end == -1) {
            var target = classes.substr(start);
          } else {
            var target = classes.substr(start, end - start);
          }
          var set = $("." + target);

          if (sized.indexOf(target) == -1) {
            set.css("height", "");
            set.each(function () {
              if ($(this).height() > height) height = $(this).height();
            });
            set.height(height);
            sized.push(target);
          }
        });
      }
    }
    setTimeout(function () {
      heightSizer();
    }, 1000);

    /////////////////////////////////////////////
    // Boostrap form validation for PHP forms
    // Taken from here https://getbootstrap.com/docs/4.0/components/forms/#custom-styles
    /////////////////////////////////////////////

    (function () {
      "use strict";
      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    })();

    /////////////////////////////////////////////
    // Bootstrap custom file browser
    // https://www.npmjs.com/package/bs-custom-file-input
    /////////////////////////////////////////////

    //bsCustomFileInput.init();

    /////////////////////////////////////////////
    // Sticky Nav
    /////////////////////////////////////////////

    function stickyNav() {
      if ($(window).scrollTop() >= 100) {
        $(".desktop-header").addClass("header-sticky");
      } else {
        $(".desktop-header").removeClass("header-sticky");
      }
    }
    stickyNav();

    /////////////////////////////////////////////
    // Homepage Number Animation
    /////////////////////////////////////////////

    function homepageStatCounter() {
      $(".stat-count").each(function () {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var countOffsetTop = $(this).offset().top;
        var countDistanceFromTop = countOffsetTop - windowScrollTop;

        if (!$(this).hasClass("stats-counted") && countDistanceFromTop < windowHeight / 2) {
          $(this).addClass("stats-counted");

          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        }
      });
    }

    /////////////////////////////////////////////
    // Binding events
    /////////////////////////////////////////////

    $(window).scroll(function () {
      stickyNav();
      homepageStatCounter();
    });
    $(window).resize(function () {
      heightSizer();
      stickyNav();
      homepageStatCounter();
    });

    /////////////////////////////////////////////
    // Cookie Monster
    /////////////////////////////////////////////

    function setCookie(name, value, expires, domain) {
      var cookie = name + "=" + value + ";";
      if (expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        cookie += "expires=" + d.toUTCString() + ";";
      }
      cookie += "domain=" + domain + ";";
      cookie += "path=/";
      document.cookie = cookie;
    }

    function getCookie(name) {
      var name = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
      }
      return "";
    }

    /////////////////////////////////////////////
    // Site Notification
    /////////////////////////////////////////////

    var coenotification = getCookie("coe_notification");

    if (!coenotification) {
      $(".website-notification").addClass("active");
    }

    $(".website-notification .fa-times").click(function () {
      $(".website-notification").removeClass("active");
      setCookie("coe_notification", 1, 5, window.location.hostname);
    });
  }, []);

  return (
    <div className="page-template page-template-template-about page-template-template-about-php page page-id-34 page-parent" cz-shortcut-listen="true">
      <Helmet>
        <script src="https://kit.fontawesome.com/3eb82edf25.js" crossorigin="anonymous" />
      </Helmet>
      <Header headerclassName={headerclassName} />
      {children}
      <Footer />
    </div>
  );
}
