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
      giscus.setAttribute("data-repo-id","R_kgDOIG04Jw");
      giscus.setAttribute("data-category","General");
      giscus.setAttribute("data-category-id","DIC_kwDOIG04J84CTA7R");
      giscus.setAttribute("data-input-position","bottom");
      giscus.setAttribute("data-lang", "ko");
      giscus.setAttribute("data-theme", "light");
      giscus.setAttribute("data-mapping", "pathname");

      if (dom.hasChildNodes()) {
        dom.innerHTML = '';
      }

      dom.appendChild(giscus) 
    }
  },
}
</script>