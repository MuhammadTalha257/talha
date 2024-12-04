<template>
  <section class="work-section" id="work">
    <SectionHeader :text="'WORK'" />
    <div class="">
      <div class="projects">
        <div
          @click="openTab('https://aeo.com.pk/')"
          class="project"
        >
          <div class="container">
            <div class="dot"></div>
            <h3>AEO pakistan</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">Laravel</span>
              <span style="--i: 4">Jqury</span>
            </div>
          </div>
          <div class="image">
            <a
              name="project-ogClothiers"
              target="_blank"
              href="https://aeo.com.pk/"
              ><img alt="Aeo Pakistan" src="/images/aeo.png" />
            </a>
          </div>
        </div>

        <div @click="openTab('http://paperwork.kyhelpinghands.org/')" class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>Paperwork</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">Laravel</span>
            </div>
          </div>
          <div style="background-color: #111119" class="image">
            <a
              name="project-zenpad"
              target="_blank"
              href="http://paperwork.kyhelpinghands.org/"
            >
              <img alt="Paperwork" src="/images/paperwork.png" />
            </a>
            <div class="cursor"><p>View Site</p></div>
          </div>
        </div>

        <div @click="openTab('https://kyhelpinghands.org/')" class="project">
          <div class="container">
            <div class="dot"></div>
            <h3>kyhelpinghands</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 3">JAVASCRIPT</span>
              <span style="--i: 4">codeigniter 3</span>
              <!-- <span style="--i: 5">LENIS</span> -->
            </div>
          </div>
          <div style="background-color: #131313" class="image">
            <a
              name="project-portfolio"
              target="_blank"
              href="https://kyhelpinghands.org/"
              ><img alt="kyhelpinghands" src="/images/kyhelping.png"
            /></a>
          </div>
        </div>
        <div
          @click="openTab('https://cosmochat.ai/')"
          class="project"
        >
          <div class="container">
            <div class="dot"></div>
            <h3>Cosmochat</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">PHP</span>
            </div>
          </div>
          <div class="image">
            <a
              name="project-vrClassroom"
              target="_blank"
              href="https://cosmochat.ai/"
              ><img alt="Cosmochat Ai" src="/images/cosmochat.png" />
            </a>
          </div>
        </div>

        <div
          @click="openTab('https://github.com/healmb1/inventory')"
          v-show="more"
          class="project more"
        >
          <div class="container">
            <div class="dot"></div>
            <h3>ArmaStack Inventory</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">codeigniter 4</span>
            </div>
          </div>
          <div style="background-color: white" class="image">
            <a
              name="project-sabali"
              target="_blank"
              href="https://github.com/healmb1/inventory"
            >
              <img alt="ArmaStack Inventory" src="/images/Inventory.png" />
            </a>
          </div>
        </div>
        <div
          @click="openTab('https://makandubai.ae/')"
          v-show="more"
          class="project more"
        >
          <div class="container">
            <div class="dot"></div>
            <h3>Makan Dubai</h3>
          </div>
          <div class="container">
            <div class="skills">
              <span style="--i: 0">HTML</span>
              <span style="--i: 1">CSS</span>
              <span style="--i: 2">JAVASCRIPT</span>
              <span style="--i: 3">Laravel</span>

            </div>
          </div>
          <div class="image">
            <a
              name="project-tranzaqt"
              target="_blank"
              href="https://makandubai.ae/"
              ><img alt="Makan Dubai" src="/images/makandubai.png" />
            </a>
          </div>
        </div>

        <div @click="toggleLoadMore()" class="load-more">
          <p>SEE MORE</p>
          <div class="plus">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { start } from "repl";
gsap.registerPlugin(ScrollTrigger);

let more = ref(false);

const mediaQuery = window.matchMedia("(max-width: 800px)");
function handleTabletChange(e) {
  e.matches ? (more.value = false) : (more.value = true);
}

// Register event listener
mediaQuery.addEventListener("change", handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

function openTab(link) {
  window.open(`${link}`, "_blank");
}

function toggleLoadMore() {
  more.value = !more.value;
  more.value
    ? (document.querySelector(".load-more p").innerHTML = "SEE LESS")
    : (document.querySelector(".load-more p").innerHTML = "SEE MORE");

  gsap.to(".projects", {
    height: "auto",
    duration: 2,
  });
}

onMounted(() => {
  gsap.set(".projects .project", {
    y: "50%",
    zIndex: 1,
    opacity: 0,
  });
  // const workTl = gsap.timeline({});

  gsap.to(".projects .project", {
    y: "0%",
    stagger: {
      amount: 1,
    },
    opacity: 1,
    scrollTrigger: {
      trigger: ".projects .project",
      start: "top bottom-=100",
      end: "bottom top+=300",
      scrub: true,
    },
  });
});
</script>

<style lang="scss" scoped></style>
