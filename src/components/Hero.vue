<template>
  <section class="hero-section">
    <div class="container">
      <div class="text-content">
        <div class="t1">
          <h2>
            <span>{{ $t('heroTitle') }}</span>
          </h2>
       
        </div>
        <h2>
          {{ $t('heroSubtitle') }}<br />
        </h2>
      </div>
      <div class="scroller">
        <div class="bg">
          <div class="circle">
            <img
              alt="arrow down"
              class="arrowDown"
              src="@/assets/arrowDown.svg"
            />
            <div class="roundText" id="text">
              <p>{{ $t("scrollText") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import gsap from "gsap";
import i18next from "i18next";

const image = ref(0);
const images = ref([
  "aeo.png",
  "paperwork.png",
  "kyhelping.png",
  "cosmochat.png",
  "Inventory.png",
  "makandubai.png",
]);

// Timer for changing images
function timer() {
  image.value < 3 ? image.value++ : (image.value = 0);
  setTimeout(() => timer(), 1300);
}

onMounted(() => {
  const roundText = document.querySelector(".roundText p");
  roundText.innerHTML = roundText.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
    )
    .join("");

  timer();

  const arrowTl = gsap.timeline({
    yoyo: true,
    repeat: -1,
  });

  arrowTl.fromTo(
    ".arrowDown",
    { y: -10 },
    { y: 10, duration: 1, yoyoEase: true }
  );
});

// Watch for language change and update the component
watch(() => i18next.language, (newLang) => {
  console.log('Language changed to:', newLang);
  // This will trigger the reactivity of $t for translations
});
</script>

