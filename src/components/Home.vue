<template>
  <div class='container'>
    <div class='col-xs-1 align-items-center'>
      <div class="card mx-auto" style="width: 18rem;">
        <img :src='personalImg' class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Hi guys</h5>
          <p class="card-text">I would like to show you guys the assignment presentation, hopefully you all like it.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personalImg from '../assets/personal.jpg'
export default {
  data: function(){
    return {
      personalImg
    }
  }
}
</script>
