<template>
  <header>
    <div class="header container">
      <div class="logo">
        <p>Muhammad Talha.</p>
      </div>

      <div class="controls">
        <div class="nav-links">
          <a href="#" @click="lenis.scrollTo('#about')" class="nav-link">
            {{ $t("about") }}</a
          >
          <a href="#" @click="lenis.scrollTo('#work')" class="nav-link">
            {{ $t("work") }}</a
          >
          <a href="#" @click="lenis.scrollTo('#skills')" class="nav-link">
            {{ $t("skills") }}</a
          >
          <a href="#" @click="lenis.scrollTo('#contact')" class="nav-link">
            {{ $t("contact") }}</a
          >
        </div>
        <div class="header-buttons">
          <a target="_blank" href="/Muhammad Talha (Resume).pdf">
            <button type="button" class="btn btn_download">
              <span>DOWNLOAD RESUME</span>
            </button>
          </a>
        </div>

        <div @click="toggleLight()" class="switch">
          <Switch />
        </div>

        <div @click="toggleNav()" class="hamburger">
          <Hamburger :active="mobileNavActive" />
        </div>

        <!-- Language Selector Dropdown -->
        <div class="language-selector">
          <select @change="changeLanguage($event)" v-model="selectedLanguage">
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        
      </div>
    </div>
  </header>
  <MobileNav @toggleActive="toggleNav()" :active="mobileNavActive" />
</template>

<script setup>
import Switch from "./icons/Switch.vue";
import Hamburger from "./icons/Hamburger.vue";
import MobileNav from "./MobileNav.vue";
import { onMounted, ref } from "vue";
import { useI18n } from 'vue-i18n'; 
import { lenis } from "../helpers/animations";

const mobileNavActive = ref(false);

const { locale } = useI18n();

const selectedLanguage = ref(locale.value);

function toggleLight() {
  document.querySelector("body").classList.toggle("light");
}

function toggleNav() {
  mobileNavActive.value = !mobileNavActive.value;
  document.querySelector("header").classList.toggle("fixed");
}

function changeLanguage(event) {
  const language = event.target.value;
  locale.value = language;  
  selectedLanguage.value = language; 
}

onMounted(() => {});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

header.fixed {
  position: fixed;
  z-index: 10;
  width: 100%;
  background: $black;
  transition: all 0.5s ease;
}

.switch {
  @media (max-width: $small) {
    display: none;
  }
}

/* Style for the language selector */
.language-selector select {
  background-color: transparent;
  border: none;
  color: white;
  font-size: 14px;
  
  cursor: pointer;
  padding: 5px;
}

.language-selector select:focus {
  outline: none;
}
</style>
