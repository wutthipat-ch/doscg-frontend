<template>
  <div class='container'>
    <img :src='resumeImg' class="card-img-top">
  </div>
</template>

<script>
import resumeImg from '../assets/WutthipatCV.jpg'
export default {
  data: function(){
    return {
      resumeImg
    }
  }
}
</script>