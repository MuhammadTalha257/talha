<template>
  <section class="about-section" id="about">
    <SectionHeader :text="$t('about.title')" />
    <div class="container">
      <div class="image">
        <p class="disclaimer">
          <span>{{ $t('about.disclaimer') }}</span>
        </p>
        
        <div class="image-border"></div>
        <img class="light" style="width: 90%;" alt="Man Looking Up" src="/images/person.png" />
        <img class="dark" style="width: 90%;" alt="Man Looking Up" src="/images/person.png" />
      </div>

      <div class="text">
        <p>
          {{ $t('about.description1') }} <b>{{ $t('about.description2') }}</b> {{ $t('about.description3') }}
          <br />
          {{ $t('about.description4') }} <br />
          {{ $t('about.description5') }} <br />
          {{ $t('about.description6') }} <br />
          {{ $t('about.description7') }}
        </p>

        <button @click.prevent="lenis.scrollTo('#contact')" type="button" class="btn btn_about">
          <span>{{ $t('about.buttonText') }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import { lenis } from "../helpers/animations";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {});
</script>

<style lang="scss" scoped></style>
