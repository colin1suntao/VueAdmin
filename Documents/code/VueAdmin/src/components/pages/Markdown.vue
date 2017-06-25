<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> Markdown表单</el-breadcrumb-item>
        <el-breadcrumb-item>markdown</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <markdown-editor v-model="source" ref="markdownEditor"></markdown-editor>
    <el-card class="box-card">
      <div>预览效果</div>
      <vue-markdown class="result-html full-height" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
      :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
      :emoji="emoji" :typographer="typographer" :toc="toc"
      toc-id="toc"></vue-markdown>
      <pre>             
      </pre>
    </el-card>
  </div>
</template>

<script>
import { markdownEditor } from 'vue-simplemde';
import VueMarkdown from 'vue-markdown';
export default {
  data () {
    return {
      source: "## 可以开始编写您的Markdown文档了！",
      show: true,
      html: true,
      breaks: true,
      linkify: true,
      emoji: true,
      typographer: true,
      toc: false
      
    }
  },
  components: {
    markdownEditor,
    VueMarkdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
