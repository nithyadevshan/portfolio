/* Portfolio interactions stay dependency-free and respect reduced-motion settings. */
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = [...document.querySelectorAll("main section[id]")];
  const typedWord = document.querySelector(".typed-word");
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");
  const profilePhoto = document.querySelector(".profile-photo");
  const portraitArt = document.querySelector(".portrait-art");
  const projectDialog = document.querySelector(".project-dialog");
  const projectDetails = {
    hr: {
      title: "Human Resource Analytics Dashboard",
      category: "PEOPLE ANALYTICS / POWER BI",
      description: "A centralized workforce view for headcount, attrition, promotion readiness, demographics, and employee satisfaction.",
      requirement: "HR teams need a shared platform to monitor attrition, workforce demographics, promotion eligibility, and employee satisfaction for data-driven decisions.",
      solution: "Integrated HR datasets into an interactive Power BI dashboard with workforce KPIs, drillable views, DAX measures, and role-level security.",
      impact: "Helps HR teams identify workforce trends, strengthen retention strategies, and make informed decisions using current reporting.",
      features: ["Headcount analysis", "Attrition monitoring", "Employee satisfaction", "Promotion readiness", "Gender diversity insights", "Workforce distribution", "Power Query data modeling", "DAX calculations", "Role-level security", "Power BI Service deployment"],
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "RLS"],
      screenshots: ["assets/hr-analytics-dashboard.png"]
    },
    weather: {
      title: "Weather Analysis Dashboard",
      category: "REAL-TIME DATA / POWER BI",
      description: "An interactive weather analytics dashboard combining current conditions, forecast data, air quality, and environmental indicators across cities.",
      requirement: "Provide a centralized view of real-time weather conditions, forecasts, air quality, and environmental indicators across multiple cities.",
      solution: "Integrated live weather API data into Power BI visuals and KPI monitoring for current conditions, forecast trends, air quality, and city comparisons.",
      impact: "Provides real-time weather and environmental insights with forecast visibility to support informed planning and decision-making.",
      features: ["Live temperature monitoring", "Weather forecast analysis", "Air quality monitoring", "Sunrise and sunset tracking", "Rain probability analysis", "Wind and humidity monitoring", "Multi-city comparison"],
      tools: ["Power BI", "Weather API", "DAX", "Power Query"],
      screenshots: ["assets/weather-analysis-dashboard.png"]
    },
    uber: {
      title: "Uber Trip Analysis Dashboard",
      category: "MOBILITY ANALYTICS / POWER BI",
      description: "An interactive ride-sharing analytics solution for trip performance, booking patterns, customer demand, revenue, and vehicle utilization.",
      requirement: "Monitor trip performance, booking patterns, customer demand, revenue generation, and vehicle utilization in one analytics solution.",
      solution: "Transformed ride-sharing data with Power Query and developed DAX measures, data models, and interactive Power BI views for operational analysis.",
      impact: "Improved operational visibility and decision-making while clarifying customer demand and ride-sharing performance patterns.",
      features: ["Booking trend analysis", "Revenue monitoring", "Trip distance analysis", "Vehicle performance tracking", "Payment method analysis", "Demand pattern identification", "Location-based analytics", "Interactive KPI monitoring"],
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      screenshots: ["assets/uber-trip-analysis-dashboard.png"]
    },
    coffee: {
      title: "Coffee Shop Sales Dashboard",
      category: "RETAIL ANALYTICS / POWER BI",
      showGithub: false,
      description: "An interactive dashboard for sales performance, customer behavior, product category trends, and store revenue metrics.",
      requirement: "Analyze store sales, customer behavior, product trends, and revenue metrics through a single interactive Power BI experience.",
      solution: "Combined date and store filters, sales trends, category and product rankings, store comparisons, and hourly patterns in one report.",
      impact: "Supports sales strategy, best-seller discovery, peak-hour staffing decisions, store monitoring, and business planning.",
      features: ["Total sales and orders", "Average order value", "Best-selling product", "Top performing store", "Peak sales hour", "Interactive filters", "Sales trend analysis", "Store comparison", "Product category analysis", "Customer insights", "Revenue monitoring"],
      tools: ["Power BI", "DAX", "Power Query"],
      screenshots: ["assets/coffee-shop-dashboard.png"]
    },
    ott: {
      title: "OTT Platform Analytics Dashboard",
      category: "CONTENT ANALYTICS / POWER BI",
      description: "An interactive analysis of OTT content performance, audience preferences, IMDb ratings, genre popularity, and release trends across movies and series.",
      requirement: "Monitor content performance, viewer preferences, release trends, ratings, and genre popularity across movies and series.",
      solution: "Developed an interactive Power BI dashboard to analyze content, audience trends, IMDb ratings, genre distribution, and release performance.",
      impact: "Provided actionable insights into content trends and audience preferences to support content strategy and performance analysis.",
      features: ["Movies vs. series analysis", "IMDb rating insights", "Genre performance analysis", "Yearly release trends", "Awards tracking", "Viewer rating distribution", "Show duration analysis", "Interactive filtering"],
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      screenshots: ["assets/ott-platform-dashboard.png"]
    },
    tranquil: {
      title: "TranquilPath – Fashion Storefront Website",
      category: "WEB DEVELOPMENT / E-COMMERCE",
      description: "A responsive fashion storefront built with HTML, CSS, and JavaScript, featuring home, collections, and contact pages.",
      requirement: "Create a responsive storefront for discovering collections and contacting the brand across screen sizes.",
      solution: "Built a multi-page storefront concept with product search, responsive navigation, product presentation, and a contact form.",
      impact: "Enhanced the customer browsing experience with a responsive, visually appealing fashion storefront.",
      features: ["Responsive design", "Fashion product showcase", "Real-time product search", "Mobile navigation menu", "Contact form", "Google Fonts", "Font Awesome icons", "Future scope: cart, payments, authentication, and database"],
      tools: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
      screenshots: ["assets/tranquilpath-fashion-storefront.png"]
    },
    banking: {
      title: "Banking Analytics Dashboard",
      category: "BANKING ANALYTICS / POWER BI",
      description: "An interactive banking analytics dashboard for loan performance, NPA trends, fraud indicators, financial KPIs, and recovery operations.",
      requirement: "Centralize monitoring of loan performance, NPA trends, fraud indicators, financial KPIs, and recovery operations across banking portfolios.",
      solution: "Built an interactive Power BI dashboard that transforms financial and operational data into actionable insights through dynamic visualizations and KPI monitoring.",
      impact: "Provided visibility into banking operations to help stakeholders improve risk management, recovery performance, and decision-making.",
      features: ["Loan recovery analysis", "NPA monitoring", "Fraud detection insights", "Financial KPI tracking", "Branch performance analysis", "Risk analysis", "Interactive reporting"],
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      screenshots: ["assets/banking-analytics-dashboard.png"]
    },
    instagram: {
      title: "Instagram UI Recreation",
      category: "INTERFACE DESIGN / FIGMA",
      description: "An Instagram-inspired mobile interface recreated in Figma with a responsive layout and an interactive prototype.",
      requirement: "Recreate a coherent social app journey across entry, discovery, profile, and messaging screens.",
      solution: "Designed a connected Figma flow from splash and login through feed, explore, stories, profile, and messages.",
      impact: "Demonstrates a consistent mobile experience and connected navigation across the main user journeys.",
      features: ["Responsive design", "Modern UI", "Interactive prototype", "Clean user experience"],
      tools: ["Figma", "UI design", "UX design", "Prototyping"],
      screenshots: ["assets/instagram-ui-flow.png"]
    },
    whatsapp: {
      title: "WhatsApp UI Recreation",
      category: "PROTOTYPE / FIGMA",
      description: "A WhatsApp-inspired mobile application prototype focused on chat, modern visual design, and intuitive navigation.",
      requirement: "Map an intuitive messaging journey from onboarding and verification to chats, calls, and status.",
      solution: "Created a connected Figma flowboard covering onboarding, phone and OTP entry, profile, chat, calls, and status.",
      impact: "Makes the app journey and key interaction states easy to review as one connected product flow.",
      features: ["Chat interface", "Modern design", "User experience optimization", "Interactive navigation"],
      tools: ["Figma", "UI design", "UX design", "Prototyping"],
      screenshots: ["assets/whatsapp-ui.png"]
    }
  };

  // Set this to the portfolio owner's email to enable the mail-app form handoff.
  const contactEmail = "nithyadevishanmugasundaram2004@gmail.com";

  const currentYear = document.querySelector("#current-year");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());

  if (profilePhoto && portraitArt) {
    const showProfilePhoto = () => portraitArt.classList.add("has-photo");
    profilePhoto.addEventListener("load", showProfilePhoto, { once: true });
    if (profilePhoto.complete && profilePhoto.naturalWidth > 0) showProfilePhoto();
  }

  // Reveal elements only when JavaScript is available, so the page remains readable without it.
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    document.body.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  }

  // Keep the mobile menu keyboard-friendly and close it as soon as a destination is chosen.
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    navMenu.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (!visibleSections.length) return;
      const currentSection = visibleSections.sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
      navLinks.forEach((link) => {
        const isActive = link.hash === `#${currentSection.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { threshold: [0.15, 0.35, 0.6], rootMargin: "-18% 0px -48% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const hrCase = document.querySelector(".hr-case");
  const hrCaseToggle = document.querySelector(".hr-case-toggle");
  if (hrCase && hrCaseToggle) {
    hrCaseToggle.addEventListener("click", () => {
      const isExpanded = hrCase.classList.toggle("is-expanded");
      hrCaseToggle.setAttribute("aria-expanded", String(isExpanded));
      hrCaseToggle.firstChild.textContent = isExpanded ? "Close Case Study " : "View Project ";
      hrCaseToggle.querySelector("span").textContent = isExpanded ? "−" : "＋";
    });
  }

  const coffeeCase = document.querySelector(".coffee-case");
  const coffeeCaseToggle = document.querySelector(".coffee-case-toggle");
  if (coffeeCase && coffeeCaseToggle) {
    coffeeCaseToggle.addEventListener("click", () => {
      const isExpanded = coffeeCase.classList.toggle("is-expanded");
      coffeeCaseToggle.setAttribute("aria-expanded", String(isExpanded));
      coffeeCaseToggle.firstChild.textContent = isExpanded ? "Close Case Study " : "View Project ";
      coffeeCaseToggle.querySelector("span").textContent = isExpanded ? "−" : "＋";

      if (isExpanded) {
        coffeeCase.querySelectorAll("[data-count]").forEach((counter) => {
          if (counter.dataset.countAnimated) return;
          counter.dataset.countAnimated = "true";
          animateCounter(counter);
        });
      }
    });
  }

  const projectIds = Object.keys(projectDetails);
  let activeProjectId = "";
  let activeScreenshotIndex = 0;
  const dialogImage = projectDialog.querySelector(".dialog-project-image");
  const dialogPreview = projectDialog.querySelector(".dialog-project-preview");
  const dialogNoImage = projectDialog.querySelector(".dialog-no-image");
  const dialogImageCount = projectDialog.querySelector(".dialog-image-count");

  const renderProject = (projectId) => {
    const project = projectDetails[projectId];
    if (!project) return;
    activeProjectId = projectId;
    activeScreenshotIndex = 0;
    projectDialog.dataset.projectId = projectId;
    projectDialog.querySelector("#project-dialog-title").textContent = project.title;
    projectDialog.querySelector("#project-dialog-category").textContent = project.category;
    projectDialog.querySelector(".dialog-description").textContent = project.description;
    projectDialog.querySelector(".dialog-requirement").textContent = project.requirement || "Review the project focus and available analysis needs.";
    projectDialog.querySelector(".dialog-solution").textContent = project.solution || project.description;
    projectDialog.querySelector(".dialog-impact").textContent = project.impact || "Provides a clearer, more accessible view of the project information.";

    const featureList = projectDialog.querySelector(".dialog-features ul");
    const projectTags = projectDialog.querySelector(".dialog-tags");
    featureList.replaceChildren(...project.features.map((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      return item;
    }));
    projectTags.replaceChildren(...project.tools.map((tool) => {
      const tag = document.createElement("span");
      tag.textContent = tool;
      return tag;
    }));
    projectDialog.querySelector(".dialog-github").hidden = project.showGithub === false;

    const screenshots = project.screenshots || [];
    if (screenshots.length) {
      dialogImage.hidden = false;
      dialogPreview.hidden = true;
      dialogNoImage.hidden = true;
      dialogImage.src = screenshots[0];
      dialogImage.alt = `${project.title} project screenshot`;
      dialogImageCount.textContent = screenshots.length > 1 ? `01 / ${String(screenshots.length).padStart(2, "0")}` : "PROJECT PREVIEW";
    } else {
      const sourceVisual = [...document.querySelectorAll(".project-card")]
        .find((card) => card.querySelector(`[data-open-project="${projectId}"]`))
        ?.querySelector(".project-visual");
      dialogImage.hidden = true;
      if (sourceVisual) {
        dialogPreview.replaceChildren(sourceVisual.cloneNode(true));
        dialogPreview.hidden = false;
        dialogNoImage.hidden = true;
        const deviceStage = dialogPreview.querySelector("[data-auto-device]");
        if (deviceStage) {
          const frames = [...deviceStage.querySelectorAll("[data-device]")];
          const selectors = [...deviceStage.parentElement.querySelectorAll("[data-device-select]")];
          selectors.forEach((button) => button.addEventListener("click", () => {
            frames.forEach((frame) => frame.classList.toggle("is-active", frame.dataset.device === button.dataset.deviceSelect));
            selectors.forEach((selector) => selector.setAttribute("aria-pressed", String(selector === button)));
          }));
        }
      } else {
        dialogPreview.hidden = true;
        dialogNoImage.hidden = false;
      }
      dialogImageCount.textContent = "PROJECT PREVIEW";
    }

    const galleryControls = projectDialog.querySelector(".dialog-image-controls");
    galleryControls.hidden = screenshots.length < 2;
    projectDialog.querySelector(".dialog-image-previous").disabled = screenshots.length < 2;
    projectDialog.querySelector(".dialog-image-next").disabled = screenshots.length < 2;
    projectDialog.querySelector(".dialog-previous").disabled = projectIds.length < 2;
    projectDialog.querySelector(".dialog-next").disabled = projectIds.length < 2;
  };

  const openProject = (projectId) => {
    if (!projectDetails[projectId]) return;
    renderProject(projectId);
    projectDialog.showModal();
  };

  const moveScreenshot = (direction) => {
    const screenshots = projectDetails[activeProjectId]?.screenshots || [];
    if (screenshots.length < 2) return;
    activeScreenshotIndex = (activeScreenshotIndex + direction + screenshots.length) % screenshots.length;
    dialogImage.src = screenshots[activeScreenshotIndex];
    dialogImage.alt = `${projectDetails[activeProjectId].title} project screenshot ${activeScreenshotIndex + 1}`;
    dialogImageCount.textContent = `${String(activeScreenshotIndex + 1).padStart(2, "0")} / ${String(screenshots.length).padStart(2, "0")}`;
  };

  document.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.openProject));
  });

  document.querySelectorAll(".project-card").forEach((card) => {
    const visual = card.querySelector(".project-visual");
    const sourceButton = card.querySelector(".project-link[data-open-project]");
    if (!visual || !sourceButton || visual.classList.contains("tranquil-preview") || visual.querySelector(".project-image-open")) return;

    const projectId = sourceButton.dataset.openProject;
    const previewButton = document.createElement("button");
    previewButton.type = "button";
    previewButton.className = "project-preview-trigger";
    previewButton.setAttribute("aria-label", `View ${projectDetails[projectId].title} case study`);
    const title = document.createElement("strong");
    title.textContent = projectDetails[projectId].title;
    const stack = document.createElement("span");
    stack.textContent = projectDetails[projectId].tools.join(" · ");
    const command = document.createElement("b");
    command.textContent = "VIEW PROJECT  ↗";
    previewButton.append(title, stack, command);
    previewButton.addEventListener("click", () => openProject(projectId));
    visual.append(previewButton);
  });

  const moveProject = (direction) => {
    const currentIndex = projectIds.indexOf(activeProjectId);
    const nextIndex = (currentIndex + direction + projectIds.length) % projectIds.length;
    renderProject(projectIds[nextIndex]);
  };

  projectDialog.querySelector(".dialog-previous").addEventListener("click", () => moveProject(-1));
  projectDialog.querySelector(".dialog-next").addEventListener("click", () => moveProject(1));
  projectDialog.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
  projectDialog.querySelector(".dialog-image-previous").addEventListener("click", () => moveScreenshot(-1));
  projectDialog.querySelector(".dialog-image-next").addEventListener("click", () => moveScreenshot(1));
  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
  });

  document.addEventListener("keydown", (event) => {
    if (!projectDialog.open) return;
    if (event.key === "ArrowLeft") moveProject(-1);
    if (event.key === "ArrowRight") moveProject(1);
  });

  const imageLightbox = document.querySelector(".image-lightbox");
  const lightboxImage = imageLightbox.querySelector(".lightbox-image");
  const lightboxCaption = imageLightbox.querySelector("#lightbox-caption");
  const lightboxSlides = [...new Map([...document.querySelectorAll("[data-lightbox-src]")].map((button) => [button.dataset.lightboxSrc, {
    src: button.dataset.lightboxSrc,
    alt: button.dataset.lightboxAlt || "Project screenshot"
  }])).values()];
  let activeLightboxIndex = 0;

  const showLightboxSlide = (index) => {
    if (!lightboxSlides.length) return;
    activeLightboxIndex = (index + lightboxSlides.length) % lightboxSlides.length;
    const slide = lightboxSlides[activeLightboxIndex];
    lightboxImage.src = slide.src;
    lightboxImage.alt = slide.alt;
    lightboxCaption.textContent = `${slide.alt} · ${activeLightboxIndex + 1}/${lightboxSlides.length}`;
  };

  dialogImage.addEventListener("click", () => {
    if (dialogImage.hidden || !dialogImage.src) return;
    const imageIndex = lightboxSlides.findIndex((slide) => slide.src === dialogImage.getAttribute("src"));
    if (imageIndex < 0) {
      lightboxSlides.push({ src: dialogImage.getAttribute("src"), alt: dialogImage.alt });
      showLightboxSlide(lightboxSlides.length - 1);
    } else {
      showLightboxSlide(imageIndex);
    }
    imageLightbox.showModal();
  });

  document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = lightboxSlides.findIndex((slide) => slide.src === button.dataset.lightboxSrc);
      showLightboxSlide(index < 0 ? 0 : index);
      imageLightbox.showModal();
    });
  });
  imageLightbox.querySelector(".lightbox-previous").addEventListener("click", () => showLightboxSlide(activeLightboxIndex - 1));
  imageLightbox.querySelector(".lightbox-next").addEventListener("click", () => showLightboxSlide(activeLightboxIndex + 1));
  imageLightbox.querySelector(".lightbox-close").addEventListener("click", () => imageLightbox.close());
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) imageLightbox.close();
  });
  document.addEventListener("keydown", (event) => {
    if (!imageLightbox.open) return;
    if (event.key === "ArrowLeft") showLightboxSlide(activeLightboxIndex - 1);
    if (event.key === "ArrowRight") showLightboxSlide(activeLightboxIndex + 1);
  });

  document.querySelectorAll(".flowboard-shell").forEach((shell) => {
    const imageButton = shell.querySelector(".flowboard-image");
    const image = imageButton.querySelector("img");
    const viewButtons = [...shell.querySelectorAll("[data-flow-step]")];
    const views = viewButtons.map((button) => button.dataset.flowStep);
    const focalPoints = {
      overview: { scale: 1, origin: "center center" },
      entry: { scale: 1.75, origin: "top left" },
      onboarding: { scale: 1.9, origin: "top left" },
      feed: { scale: 1.7, origin: "50% 48%" },
      chats: { scale: 1.75, origin: "bottom left" },
      profile: { scale: 1.7, origin: "bottom center" },
      calls: { scale: 1.7, origin: "bottom right" }
    };
    let activeViewIndex = 0;
    let pointerStartX = null;
    let suppressOpenUntil = 0;

    const setView = (index) => {
      activeViewIndex = (index + views.length) % views.length;
      const view = views[activeViewIndex];
      const focal = focalPoints[view] || focalPoints.overview;
      image.style.transformOrigin = focal.origin;
      image.style.transform = `scale(${focal.scale})`;
      imageButton.dataset.activeView = view;
      shell.dataset.activeView = view;
      viewButtons.forEach((button, buttonIndex) => button.setAttribute("aria-pressed", String(buttonIndex === activeViewIndex)));
    };

    viewButtons.forEach((button, index) => button.addEventListener("click", () => setView(index)));
    imageButton.addEventListener("pointerdown", (event) => { pointerStartX = event.clientX; });
    imageButton.addEventListener("pointerup", (event) => {
      if (pointerStartX === null) return;
      const distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) < 50) return;
      suppressOpenUntil = performance.now() + 500;
      setView(activeViewIndex + (distance < 0 ? 1 : -1));
    });
    imageButton.addEventListener("click", (event) => {
      if (performance.now() > suppressOpenUntil) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
    setView(0);
  });

  document.querySelectorAll("[data-auto-device]").forEach((stage) => {
    const frames = [...stage.querySelectorAll("[data-device]")];
    const selectors = [...stage.parentElement.querySelectorAll("[data-device-select]")];
    if (!frames.length || !selectors.length) return;
    let activeIndex = 0;
    let cycleTimer = 0;
    let isVisible = false;

    const setDevice = (index) => {
      activeIndex = (index + frames.length) % frames.length;
      frames.forEach((frame, frameIndex) => frame.classList.toggle("is-active", frameIndex === activeIndex));
      selectors.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.deviceSelect === frames[activeIndex].dataset.device)));
    };
    const stopCycle = () => window.clearInterval(cycleTimer);
    const startCycle = () => {
      stopCycle();
      if (reducedMotion.matches || !isVisible) return;
      cycleTimer = window.setInterval(() => setDevice(activeIndex + 1), 4800);
    };

    selectors.forEach((button) => button.addEventListener("click", () => {
      setDevice(frames.findIndex((frame) => frame.dataset.device === button.dataset.deviceSelect));
      startCycle();
    }));
    stage.parentElement.addEventListener("pointerenter", stopCycle);
    stage.parentElement.addEventListener("pointerleave", startCycle);
    stage.parentElement.addEventListener("focusin", stopCycle);
    stage.parentElement.addEventListener("focusout", startCycle);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        startCycle();
      }, { threshold: 0.35 }).observe(stage);
    }
    setDevice(0);
  });

  const animateCounter = (counter) => {
    const endValue = Number(counter.dataset.count);
    const decimals = Number(counter.dataset.decimals || 0);
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";
    const startTime = performance.now();
    const duration = reducedMotion.matches ? 0 : 950;
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    const drawFrame = (now) => {
      const progress = duration === 0 ? 1 : Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = endValue * eased;
      counter.textContent = `${prefix}${formatter.format(currentValue)}${suffix}`;
      if (progress < 1) window.requestAnimationFrame(drawFrame);
    };

    window.requestAnimationFrame(drawFrame);
  };

  const counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(animateCounter);
  }

  // Rotate a short set of role descriptors without adding a typing library.
  if (typedWord && !reducedMotion.matches) {
    const phrases = ["data-driven experiences", "clearer business insights", "thoughtful interfaces", "better reporting tools"];
    let phraseIndex = 0;
    let characterIndex = phrases[phraseIndex].length;
    let isDeleting = true;

    const typeNextCharacter = () => {
      const phrase = phrases[phraseIndex];
      characterIndex += isDeleting ? -1 : 1;
      typedWord.textContent = phrase.slice(0, characterIndex);

      if (characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        window.setTimeout(typeNextCharacter, 250);
        return;
      }
      if (characterIndex === phrases[phraseIndex].length) {
        isDeleting = true;
        window.setTimeout(typeNextCharacter, 1700);
        return;
      }
      window.setTimeout(typeNextCharacter, isDeleting ? 31 : 55);
    };

    window.setTimeout(typeNextCharacter, 1900);
  }

  // Render a restrained canvas starfield at a capped device scale for lower GPU cost.
  const starCanvas = document.querySelector(".starfield");
  const starContext = starCanvas.getContext("2d", { alpha: true });
  let stars = [];
  let animationFrame = 0;
  let lastFrameTime = 0;
  let meteor = null;
  let nextMeteorAt = 5200;

  const resizeStarfield = () => {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = window.innerWidth;
    const height = window.innerHeight;
    starCanvas.width = Math.round(width * pixelRatio);
    starCanvas.height = Math.round(height * pixelRatio);
    starCanvas.style.width = `${width}px`;
    starCanvas.style.height = `${height}px`;
    starContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    const starCount = Math.min(170, Math.max(65, Math.round((width * height) / 7800)));
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.15 + 0.3,
      opacity: Math.random() * 0.4 + 0.18,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.005 + 0.0015
    }));
    if (reducedMotion.matches) drawStars(0);
  };

  const drawStars = (time) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    starContext.clearRect(0, 0, width, height);
    stars.forEach((star) => {
      const twinkle = reducedMotion.matches ? 0.86 : (Math.sin(time * star.speed + star.phase) + 1) * 0.2 + 0.55;
      starContext.beginPath();
      starContext.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starContext.fillStyle = `rgba(201, 220, 255, ${star.opacity * twinkle})`;
      starContext.fill();
    });

    if (reducedMotion.matches) return;
    if (!meteor && time >= nextMeteorAt) {
      meteor = {
        startedAt: time,
        x: Math.random() * width * 0.68,
        y: Math.random() * height * 0.24,
        duration: 950 + Math.random() * 350
      };
      nextMeteorAt = time + 7000 + Math.random() * 9000;
    }
    if (meteor) {
      const progress = (time - meteor.startedAt) / meteor.duration;
      if (progress >= 1) {
        meteor = null;
      } else {
        const x = meteor.x + progress * width * 0.34;
        const y = meteor.y + progress * height * 0.29;
        const tail = 105;
        const gradient = starContext.createLinearGradient(x - tail, y - tail * 0.72, x, y);
        const alpha = Math.sin(progress * Math.PI) * 0.72;
        gradient.addColorStop(0, "rgba(124, 170, 255, 0)");
        gradient.addColorStop(1, `rgba(215, 232, 255, ${alpha})`);
        starContext.beginPath();
        starContext.moveTo(x - tail, y - tail * 0.72);
        starContext.lineTo(x, y);
        starContext.strokeStyle = gradient;
        starContext.lineWidth = 1.4;
        starContext.stroke();
        starContext.beginPath();
        starContext.arc(x, y, 1.5, 0, Math.PI * 2);
        starContext.fillStyle = `rgba(232, 242, 255, ${alpha})`;
        starContext.fill();
      }
    }
  };

  const animateStars = (time) => {
    if (time - lastFrameTime > 32) {
      drawStars(time);
      lastFrameTime = time;
    }
    animationFrame = window.requestAnimationFrame(animateStars);
  };

  const startStarfield = () => {
    window.cancelAnimationFrame(animationFrame);
    if (reducedMotion.matches) drawStars(0);
    else animationFrame = window.requestAnimationFrame(animateStars);
  };

  resizeStarfield();
  startStarfield();
  window.addEventListener("resize", resizeStarfield, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.cancelAnimationFrame(animationFrame);
    else startStarfield();
  });
  reducedMotion.addEventListener?.("change", startStarfield);

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactEmail) {
      formStatus.textContent = "Email sending is not configured yet. Add your email address in script.js to enable this form.";
      formStatus.classList.remove("is-ready");
      formStatus.classList.add("is-error");
      return;
    }

    const formData = new FormData(contactForm);
    const subject = `Portfolio message from ${formData.get("name")}`;
    const body = `${formData.get("message")}\n\nFrom: ${formData.get("name")} (${formData.get("email")})`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    formStatus.textContent = "Your email app should open with the message ready to send.";
    formStatus.classList.remove("is-error");
    formStatus.classList.add("is-ready");
  });
})();