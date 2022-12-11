<template>
  <div id="comments"></div>
</template>

<script>
export default {
  mounted() {
    this.initGiscus();
  },
  methods: {
    initGiscus(){
      const dom = window.document.getElementById('comments');
      const giscus = document.createElement("script");
      giscus.type = "text/javascript";
      giscus.async = true;
      giscus.crossorigin = "anonymous";
      giscus.src = "https://giscus.app/client.js";

      giscus.setAttribute("data-repo", "101front/101-Front-Study");
      giscus.setAttribute("data-theme", "light");

      if (dom.hasChildNodes()) {
        dom.innerHTML = '';
      }

      dom.appendChild(giscus) 
    }
  }
}
</script>