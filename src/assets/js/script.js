// document.addEventListener("DOMContentLoaded", function () {
//   const modalOpen = document.querySelectorAll(".twg-modal-open");
//   const modals = document.querySelectorAll(".twg-model");
//   const modalCloses = document.querySelectorAll(".twg-model-close");
//   const body = document.querySelector("body");
//   const headerSearchModal = document.querySelector(".twg-header-search-modal");
//   const overlay = document.querySelector(".twg-overlay");
//   const messageWrapper = document.querySelector(".twg-message-wrapper");
//   const messageSidebar = document.querySelector(".twg-message-sidebar");
//   const headerSidebarButton = document.querySelector(
//     ".twg-header-sidebar-button"
//   );
//   const mainSidebar = document.querySelector(".twg-main-aside");
//   const header = document.querySelector("header");
//   const headerSearchModalButton = document.querySelector(
//     ".twg-header-search-modal-button"
//   );
//   const headerSearchModalButtonClose = document.querySelector(
//     ".twg-header-search-modal-button-close"
//   );

//   modalOpen?.forEach((btn) => {
//     btn.onclick = (e) => {
//       e.preventDefault();
//       const modalId = btn.getAttribute("data-target");
//       const modal = document.getElementById(modalId);
//       // Hide all other modals
//       modals.forEach((mod) => {
//         if (mod !== modal) {
//           mod.classList.add("twg-hidden");
//           mod.classList.remove("twg-grid");
//         }
//       });

//       // Show the selected modal
//       if (modal) {
//         modal.classList.remove("twg-hidden");
//         modal.classList.add("twg-grid");
//         body.classList.add("twg-overflow-hidden");
//       }
//     };
//   });

//   modalCloses?.forEach((btn) => {
//     btn.addEventListener("click", hideModal);
//   });
//   modals.forEach((modal) => {
//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         hideModal();
//       }
//     });
//   });

//   function hideModal() {
//     modals.forEach((modal) => {
//       modal.classList.add("twg-hidden");
//       modal.classList.remove("twg-grid");
//     });
//     body.classList.remove("twg-overflow-hidden");
//   }

//   if (headerSearchModalButton) {
//     headerSearchModalButton.addEventListener("click", () => {
//       headerSearchModal.classList.remove("twg-hidden");
//     });
//   }
//   if (headerSearchModalButtonClose) {
//     headerSearchModalButtonClose.addEventListener("click", () => {
//       headerSearchModal.classList.add("twg-hidden");
//     });
//   }
//   let isSidebarVisible = false;

//   function toggleSidebar() {
//     isSidebarVisible ? hideSidebar() : showSidebar();
//     isSidebarVisible = !isSidebarVisible;
//   }

//   function showSidebar() {
//     mainSidebar.classList.remove("max-lg:-twg-translate-x-300px");
//     overlay.classList.remove("twg-hidden");
//     header.classList.add("twg-border-b", "twg-border-b-dark-100/20");
//     updateButtonIcon("fa-xmark", "fa-bars");
//   }

//   function hideSidebar() {
//     mainSidebar.classList.add("max-lg:-twg-translate-x-300px");
//     overlay.classList.add("twg-hidden");
//     header.classList.remove("twg-border-b", "twg-border-b-dark-100/20");
//     updateButtonIcon("fa-bars", "fa-xmark");
//   }

//   function updateButtonIcon(addClass, removeClass) {
//     const icon = headerSidebarButton.querySelector("i");
//     icon.classList.add(addClass);
//     icon.classList.remove(removeClass);
//   }
//   if (headerSidebarButton) {
//     headerSidebarButton.addEventListener("click", toggleSidebar);
//   }

//   if (overlay) {
//     overlay.addEventListener("click", hideSidebar);
//   }

//   document.querySelectorAll(".dropdown-action").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.stopPropagation(); // Prevent triggering the document click event
//       const dropdownMenu = button.nextElementSibling;
//       dropdownMenu.classList.toggle("twg-hidden");
//       const dropdownIcon = button.querySelector(".dropdown-action-icon");
//       if (dropdownIcon) {
//         dropdownIcon.classList.toggle("twg-rotate-180");
//       }

//       // Hide all other open dropdowns
//       document
//         .querySelectorAll(".dropdown-menu:not(.dropdown-menu-always-open)")
//         .forEach((menu) => {
//           if (menu !== dropdownMenu) {
//             menu.classList.add("twg-hidden");
//           }
//         });
//     });
//   });

//   document.addEventListener("click", (event) => {
//     document
//       .querySelectorAll(".dropdown-menu:not(.dropdown-menu-always-open)")
//       .forEach((menu) => {
//         if (
//           !menu.classList.contains("twg-hidden") &&
//           !menu.contains(event.target)
//         ) {
//           menu.classList.add("twg-hidden");
//         }
//       });
//   });

//   document.querySelectorAll(".password-viewer-button").forEach((button) => {
//     button.addEventListener("click", () => {
//       const target = document.getElementById(button.dataset.target);
//       const icon = button.querySelector("i");
//       if (target.type === "password") {
//         target.type = "text";
//         icon.classList.remove("fa-eye");
//         icon.classList.add("fa-eye-slash");
//       } else {
//         target.type = "password";
//         icon.classList.remove("fa-eye-slash");
//         icon.classList.add("fa-eye");
//       }
//     });
//   });
//   const toggles = document.querySelectorAll(".twg-toggle");
//   toggles.forEach((toggle) => {
//     const input = toggle.querySelector(".twg-input");
//     const track = toggle.querySelector(".twg-track");
//     const thumb = toggle.querySelector(".twg-thumb");

//     input.addEventListener("change", () => {
//       if (input.checked) {
//         track.classList.replace("twg-bg-accent-400", "twg-bg-dark-100");
//         thumb.classList.add("twg-translate-x-21px");
//       } else {
//         track.classList.replace("twg-bg-dark-100", "twg-bg-accent-400");
//         thumb.classList.remove("twg-translate-x-21px");
//       }
//     });
//   });

//   document.querySelectorAll(".twg-message-open-btn").forEach((button) => {
//     button.addEventListener("click", () => {
//       messageSidebar.classList.toggle("twg-hidden");
//       messageWrapper.classList.toggle("max-md:twg-hidden");
//     });
//   });
//   document.querySelectorAll(".twg-message-close-btn").forEach((button) => {
//     button.addEventListener("click", () => {
//       messageSidebar.classList.remove("twg-hidden");
//       messageWrapper.classList.add("max-md:twg-hidden");
//     });
//   });

//   // const sidebarItems = document.querySelectorAll(".twg-sidebar-item");
//   // const contentSections = document.querySelectorAll(".twg-main-wrapper-content");

//   // sidebarItems?.forEach((item) => {
//   //   item.addEventListener("click", () => {
//   //     contentSections.forEach((section) => {
//   //       section.classList.add("twg-hidden");
//   //     });
//   //     const allSidebarLinks = document.querySelectorAll(".twg-sidebar-link");
//   //     allSidebarLinks?.forEach((link) => {
//   //       link.classList.remove("active");
//   //     });

//   //     const targetClass = item.getAttribute("data-target");
//   //     const targetElements = document.querySelectorAll(`.${targetClass}`);
//   //     targetElements.forEach((targetElement) => {
//   //       targetElement.classList.remove("twg-hidden");
//   //     });
//   //     const parentElement = item.closest(".twg-sidebar-link");
//   //     if (parentElement) {
//   //       parentElement.classList.add("active");
//   //     }
//   //   });
//   // });

//   const chartData = [
//     { day: "Mon", value: 10 },
//     { day: "Tue", value: 50 },
//     { day: "Wed", value: 30 },
//     { day: "Thu", value: 70 },
//     {
//       day: "Fri",
//       values: [30, 40, 20], // Steps for Friday
//     },
//     { day: "Sat", value: 60 },
//   ];

//   const ctx = document.getElementById("weeklyChart");

//   if (ctx) {
//     ctx.getContext("2d");
//   }

//   const labels = chartData.map((item) => item.day);

//   const datasets = chartData.map((item) => {
//     if (item.day === "Fri") {
//       return item.values.map((stepValue, stepIndex) => ({
//         label: `Step ${stepIndex + 1}`,
//         data: labels.map((day) => (day === "Fri" ? stepValue : 0)),
//         backgroundColor:
//           stepIndex === 0
//             ? "rgba(116, 77, 230, 1)" // First step color
//             : stepIndex === 1
//             ? "rgba(250, 149, 243, 1)" // Second step color
//             : "rgba(250, 219, 92, 1)", // Third step color
//         barThickness: "flex", // Adjust automatically
//         maxBarThickness: 100, // Prevent bars from exceeding 100px
//         borderRadius: stepIndex === 2 ? { topLeft: 10, topRight: 10 } : 0,
//         borderWidth: 1, // Completely remove borders
//         borderSkipped: false, // Disable border rendering
//         borderColor: "#FFFFFF",
//       }));
//     } else {
//       return {
//         label: item.day,
//         data: labels.map((day) => (day === item.day ? item.value : 0)),
//         backgroundColor: "rgba(116, 77, 230, 0.3)",
//         barThickness: "flex",
//         maxBarThickness: 100,
//         borderRadius: 10,
//         borderWidth: 1, // Completely remove borders
//         borderSkipped: false, // Disable border rendering
//         borderColor: "#FFFFFF",
//       };
//     }
//   });

//   // Flatten datasets to merge "Fri" steps into one array
//   const flatDatasets = datasets.flat();

//   const weeklyChart = new Chart(ctx, {
//     type: "bar",
//     data: {
//       labels: labels,
//       datasets: flatDatasets,
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: { display: false },
//       },
//       layout: {
//         padding: 0, // Remove chart padding to avoid gaps
//       },
//       scales: {
//         x: {
//           stacked: true, // Allow stacking for the x-axis
//           grid: { display: false },
//           ticks: { color: "#6B7280" },
//         },
//         y: {
//           stacked: true, // Allow stacking for the y-axis
//           grid: {
//             borderDash: [5, 5], // Dashed line with 5px dashes and 5px gaps
//             color: "#D1D5DB", // Light gray color for the dashed grid lines
//           },
//           ticks: { display: false }, // Hide y-axis ticks if not needed
//         },
//       },
//     },
//   });

//   const ctxBarChart = document.getElementById("stackedBarChart");

//   if (ctxBarChart) {
//     ctxBarChart.getContext("2d");
//   }

//   // Labels for the x-axis
//   const labelsBarChart = ["00-06", "06-12", "12-18", "18-00"];

//   // Data for the datasets
//   const dataPurple = [100, 80, 60, 90];
//   const dataPink = [60, 40, 30, 70];
//   const dataYellow = [30, 20, 10, 40];

//   // Colors for the datasets
//   const purpleColor = "rgba(116, 77, 230, 1)";
//   const pinkColor = "rgba(250, 149, 243, 1)";
//   const yellowColor = "rgba(250, 219, 92, 1)";

//   // Dashed gridline settings
//   const gridDashPattern = [5, 5]; // Dash pattern for gridlines
//   const gridColor = "#D1D5DB"; // Light gray color for gridlines

//   // Text color for ticks
//   const tickColor = "#9CA3AF"; // Light gray color for x and y labels

//   // Create the chart
//   const stackedBarChart = new Chart(ctxBarChart, {
//     type: "bar",
//     data: {
//       labels: labelsBarChart,
//       datasets: [
//         {
//           label: "Purple",
//           data: dataPurple,
//           backgroundColor: purpleColor,
//           barThickness: 10,
//         },
//         {
//           label: "Pink",
//           data: dataPink,
//           backgroundColor: pinkColor,
//           barThickness: 10,
//         },
//         {
//           label: "Yellow",
//           data: dataYellow,
//           backgroundColor: yellowColor,
//           barThickness: 10,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       borderRadius: 3,
//       borderWidth: 1, // Completely remove borders
//       borderSkipped: false, // Disable border rendering
//       borderColor: "#FFFFFF",
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       scales: {
//         x: {
//           stacked: true,
//           grid: {
//             display: false,
//           },
//           ticks: {
//             color: tickColor,
//           },
//         },
//         y: {
//           stacked: true, // Enables vertical stacking
//           grid: {
//             borderDash: gridDashPattern, // Dashed gridlines
//             color: gridColor, // Gridline color
//           },
//           ticks: {
//             callback: function (value) {
//               return `${value}%`; // Add % symbol to y-axis ticks
//             },
//             color: tickColor, // Color for y-axis labels
//             display: false,
//           },
//         },
//       },
//     },
//   });

//   const radialChartCtx = document.getElementById("radialChart");
//   if (radialChartCtx) {
//     radialChartCtx.getContext("2d");
//   }
//   const data = {
//     datasets: [
//       {
//         label: "Lessons Completed",
//         data: [70, 30], // 70% completed, 30% not completed
//         backgroundColor: ["#6C63FF", "#EDEDED"], // Purple and gray
//         hoverOffset: 4,
//         cutout: "70%", // Hollow center
//       },
//       {
//         label: "Time Spent Practicing",
//         data: [50, 50], // 50% completed, 50% not completed
//         backgroundColor: ["#FFD700", "#EDEDED"], // Yellow and gray
//         hoverOffset: 4,
//         cutout: "80%", // Slightly smaller hollow center
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: false, // Hide legend for a cleaner look
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   new Chart(radialChartCtx, {
//     type: "doughnut",
//     data,
//     options,
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const selectors = {
    modalOpen: ".twg-modal-open",
    modals: ".twg-model",
    modalCloses: ".twg-model-close",
    body: "body",
    headerSearchModal: ".twg-header-search-modal",
    overlay: ".twg-overlay",
    messageWrapper: ".twg-message-wrapper",
    messageSidebar: ".twg-message-sidebar",
    headerSidebarButton: ".twg-header-sidebar-button",
    mainSidebar: ".twg-main-aside",
    header: "header",
    headerSearchModalButton: ".twg-header-search-modal-button",
    headerSearchModalButtonClose: ".twg-header-search-modal-button-close",
    dropdownAction: ".dropdown-action",
    dropdownMenu: ".dropdown-menu",
    passwordViewerButton: ".password-viewer-button",
    twgToggle: ".twg-toggle",
    twgInput: ".twg-input",
    twgTrack: ".twg-track",
    twgThumb: ".twg-thumb",
    messageOpenBtn: ".twg-message-open-btn",
    messageCloseBtn: ".twg-message-close-btn",
  };

  const elements = {
    modalOpen: document.querySelectorAll(selectors.modalOpen),
    modals: document.querySelectorAll(selectors.modals),
    modalCloses: document.querySelectorAll(selectors.modalCloses),
    body: document.querySelector(selectors.body),
    headerSearchModal: document.querySelector(selectors.headerSearchModal),
    overlay: document.querySelector(selectors.overlay),
    messageWrapper: document.querySelector(selectors.messageWrapper),
    messageSidebar: document.querySelector(selectors.messageSidebar),
    headerSidebarButton: document.querySelector(selectors.headerSidebarButton),
    mainSidebar: document.querySelector(selectors.mainSidebar),
    header: document.querySelector(selectors.header),
    headerSearchModalButton: document.querySelector(
      selectors.headerSearchModalButton
    ),
    headerSearchModalButtonClose: document.querySelector(
      selectors.headerSearchModalButtonClose
    ),
  };

  const toggleClass = (element, className) => {
    element?.classList.toggle(className);
  };

  const addClass = (element, className) => {
    element?.classList.add(className);
  };

  const removeClass = (element, className) => {
    element?.classList.remove(className);
  };

  const setupModalHandlers = () => {
    elements.modalOpen?.forEach((btn) => {
      btn.onclick = (e) => {
        e.preventDefault();
        const modalId = btn.getAttribute("data-target");
        const modal = document.getElementById(modalId);

        elements.modals.forEach((mod) => {
          if (mod !== modal) {
            addClass(mod, "twg-hidden");
            removeClass(mod, "twg-grid");
          }
        });

        if (modal) {
          removeClass(modal, "twg-hidden");
          addClass(modal, "twg-grid");
          addClass(elements.body, "twg-overflow-hidden");
        }
      };
    });

    elements.modalCloses?.forEach((btn) =>
      btn.addEventListener("click", hideModal)
    );

    elements.modals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
      });
    });

    function hideModal() {
      elements.modals.forEach((modal) => {
        addClass(modal, "twg-hidden");
        removeClass(modal, "twg-grid");
      });
      removeClass(elements.body, "twg-overflow-hidden");
    }
  };

  const setupSearchModalHandlers = () => {
    elements.headerSearchModalButton?.addEventListener("click", () => {
      removeClass(elements.headerSearchModal, "twg-hidden");
    });

    elements.headerSearchModalButtonClose?.addEventListener("click", () => {
      addClass(elements.headerSearchModal, "twg-hidden");
    });
  };

  const setupSidebarHandlers = () => {
    let isSidebarVisible = false;

    const toggleSidebar = () => {
      isSidebarVisible ? hideSidebar() : showSidebar();
      isSidebarVisible = !isSidebarVisible;
    };

    const showSidebar = () => {
      removeClass(elements.mainSidebar, "max-lg:-twg-translate-x-300px");
      removeClass(elements.overlay, "twg-hidden");
      addClass(elements.header, "twg-border-b");
      updateButtonIcon("fa-xmark", "fa-bars");
    };

    const hideSidebar = () => {
      addClass(elements.mainSidebar, "max-lg:-twg-translate-x-300px");
      addClass(elements.overlay, "twg-hidden");
      removeClass(elements.header, "twg-border-b");
      updateButtonIcon("fa-bars", "fa-xmark");
    };

    const updateButtonIcon = (addClass, removeClass) => {
      const icon = elements.headerSidebarButton.querySelector("i");
      icon?.classList.add(addClass);
      icon?.classList.remove(removeClass);
    };

    elements.headerSidebarButton?.addEventListener("click", toggleSidebar);
    elements.overlay?.addEventListener("click", hideSidebar);
  };

  const setupDropdownHandlers = () => {
    document.querySelectorAll(selectors.dropdownAction).forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const dropdownMenu = button.nextElementSibling;
        toggleClass(dropdownMenu, "twg-hidden");

        document
          .querySelectorAll(
            `${selectors.dropdownMenu}:not(.dropdown-menu-always-open)`
          )
          .forEach((menu) => {
            if (menu !== dropdownMenu) addClass(menu, "twg-hidden");
          });
      });
    });

    document.addEventListener("click", () => {
      document
        .querySelectorAll(
          `${selectors.dropdownMenu}:not(.dropdown-menu-always-open)`
        )
        .forEach((menu) => {
          addClass(menu, "twg-hidden");
        });
    });
  };

  const setupPasswordViewerHandlers = () => {
    document
      .querySelectorAll(selectors.passwordViewerButton)
      .forEach((button) => {
        button.addEventListener("click", () => {
          const target = document.getElementById(button.dataset.target);
          const icon = button.querySelector("i");
          if (target.type === "password") {
            target.type = "text";
            toggleClass(icon, "fa-eye");
            toggleClass(icon, "fa-eye-slash");
          } else {
            target.type = "password";
            toggleClass(icon, "fa-eye-slash");
            toggleClass(icon, "fa-eye");
          }
        });
      });
  };
  const setUpToggleHandlers = () => {
    document.querySelectorAll(selectors.twgToggle).forEach((toggle) => {
      const input = toggle.querySelector(".twg-input");
      const track = toggle.querySelector(".twg-track");
      const thumb = toggle.querySelector(".twg-thumb");

      if (input && track && thumb) {
        input.addEventListener("change", () => {
          if (input.checked) {
            track.classList.replace("twg-bg-accent-400", "twg-bg-dark-100");
            thumb.classList.add("twg-translate-x-21px");
          } else {
            track.classList.replace("twg-bg-dark-100", "twg-bg-accent-400");
            thumb.classList.remove("twg-translate-x-21px");
          }
        });
      } else {
        console.warn("Toggle DOM structure is missing required elements.");
      }
    });
  };
  
  setupModalHandlers();
  setupSearchModalHandlers();
  setupSidebarHandlers();
  setupDropdownHandlers();
  setupPasswordViewerHandlers();
  setUpToggleHandlers();
});
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all charts
  initWeeklyChart();
  initStackedBarChart();
  initRadialChart();

  // Function to initialize the Weekly Chart
  function initWeeklyChart() {
    const chartData = [
      { day: "Mon", value: 10 },
      { day: "Tue", value: 50 },
      { day: "Wed", value: 30 },
      { day: "Thu", value: 70 },
      { day: "Fri", values: [30, 40, 20] },
      { day: "Sat", value: 60 },
    ];

    const ctx = document.getElementById("weeklyChart");
    if (!ctx) return;

    const labels = chartData.map((item) => item.day);
    const datasets = chartData.flatMap((item) =>
      item.values
        ? item.values.map((stepValue, stepIndex) => ({
            label: `Step ${stepIndex + 1}`,
            data: labels.map((day) => (day === "Fri" ? stepValue : 0)),
            backgroundColor:
              stepIndex === 0
                ? "rgba(116, 77, 230, 1)"
                : stepIndex === 1
                ? "rgba(250, 149, 243, 1)"
                : "rgba(250, 219, 92, 1)",
            barThickness: "flex",
            maxBarThickness: 100,
            borderRadius: stepIndex === 2 ? { topLeft: 10, topRight: 10 } : 0,
            borderWidth: 1,
            borderColor: "#FFFFFF",
          }))
        : {
            label: item.day,
            data: labels.map((day) => (day === item.day ? item.value : 0)),
            backgroundColor: "rgba(116, 77, 230, 0.3)",
            barThickness: "flex",
            maxBarThickness: 100,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#FFFFFF",
          }
    );

    new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: "#6B7280" },
          },
          y: {
            stacked: true,
            grid: { color: "#D1D5DB", borderDash: [5, 5] },
            ticks: { display: false },
          },
        },
      },
    });
  }

  // Function to initialize the Stacked Bar Chart
  function initStackedBarChart() {
    const ctx = document.getElementById("stackedBarChart");
    if (!ctx) return;

    const labels = ["00-06", "06-12", "12-18", "18-00"];
    const datasets = [
      {
        label: "Purple",
        data: [100, 80, 60, 90],
        backgroundColor: "rgba(116, 77, 230, 1)",
        barThickness: 10,
      },
      {
        label: "Pink",
        data: [60, 40, 30, 70],
        backgroundColor: "rgba(250, 149, 243, 1)",
        barThickness: 10,
      },
      {
        label: "Yellow",
        data: [30, 20, 10, 40],
        backgroundColor: "rgba(250, 219, 92, 1)",
        barThickness: 10,
      },
    ];

    new Chart(ctx, {
      type: "bar",
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: "#9CA3AF" },
          },
          y: {
            stacked: true,
            grid: { color: "#D1D5DB", borderDash: [5, 5] },
            ticks: {
              callback: (value) => `${value}%`,
              color: "#9CA3AF",
              display: false,
            },
          },
        },
      },
    });
  }

  // Function to initialize the Radial Chart
  function initRadialChart() {
    const outerCtx = document.getElementById("outerChart");
    if (!outerCtx) return;
    new Chart(outerCtx, {
      type: "doughnut",
      data: {
        labels: ["Lessons Completed", "Remaining"],
        datasets: [
          {
            data: [70, 30],
            backgroundColor: ["#744DE6", "#E5E7EB"],
            hoverOffset: 4,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        cutout: "70%",
      },
    });

    // Inner ring (Time spent practicing)
    const innerCtx = document.getElementById("innerChart");
    if (!innerCtx) return;
    new Chart(innerCtx, {
      type: "doughnut",
      data: {
        labels: ["Practice Time", "Remaining"],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: ["#FFD700", "#E5E7EB"],
            hoverOffset: 4,
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        cutout: "85%",
      },
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'title',
        center: 'monthDropdown',
        right: 'scheduleButton searchButton menuButton',
      },
      customButtons: {
        monthDropdown: {
          text: 'Month',
        },
        scheduleButton: {
          text: 'SCHEDULE',
          click: function () {
            alert('Schedule button clicked');
          },
        },
        searchButton: {
          text: '',
          click: function () {
            alert('Search button clicked');
          },
        },
        menuButton: {
          text: '',
          click: function () {
            alert('Menu button clicked');
          },
        },
      },
      events: [
        {
          title: 'Meeting',
          start: '2024-12-28T08:00:00',
          end: '2024-12-28T10:00:00',
        },
        {
          title: 'Meeting',
          start: '2024-12-28T04:00:00',
          end: '2024-12-28T06:00:00',
        },
        {
          title: 'Meeting',
          start: '2024-12-28T00:00:00',
          end: '2024-12-28T01:00:00',
        },
        {
          title: 'Conference',
          start: '2024-12-15',
        },
        {
          title: 'Webinar',
          start: '2024-12-25T14:00:00',
          end: '2024-12-25T16:00:00',
        },
        {
          title: 'Team Lunch',
          start: '2024-12-12T12:00:00',
          end: '2024-12-12T13:00:00',
        },
      ],
      eventDisplay: 'block', // Display events as blocks
      dayMaxEvents: 2, // Show a maximum of 2 events per day
      eventDidMount: function (info) {
        // Add custom styling or functionality to events if needed
      },
      eventContent: function (info) {
        // Customize the content of events
        return { html: `<span>${info.event.title}</span>` };
      },
      moreLinkClick: 'popover', // Show extra events in a dropdown (popover)
    });

  // Render the custom month dropdown manually
  setTimeout(() => {
    const toolbar = document.querySelector('.fc-toolbar-chunk');
    // toolbar.classList.add('twg-flex twg-gap-3');
    const selectEl = document.createElement('select');
    selectEl.id = 'month-dropdown';
    selectEl.className = 'calendar-select';
  
    const currentMonthIndex = new Date().getMonth();
    // Add month options to the select box
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    months.forEach((month, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = month;
      if (index === currentMonthIndex) {
        option.selected = true;
      }
      selectEl.appendChild(option);
    });
  
    // Append the select box to the toolbar center
    toolbar.appendChild(selectEl);
  
    // Event listener for month change
    selectEl.addEventListener('change', function (event) {
      const selectedMonth = event.target.value;
      calendar.gotoDate(new Date(2024, selectedMonth, 1)); // Change to the selected month
    });
  }, 200);

  calendar.render();
});
