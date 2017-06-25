<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 文本编辑器</el-breadcrumb-item>
        <el-breadcrumb-item>编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <quill-editor v-model="content" ref="myTextEditor" :option="editorOption">
    </quill-editor>
    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
export default {
  data () {
    return {
      content: '<p> Vue Example </p>',
      editorOption:{
        //some option
      }
    }
  },
  components: {
    quillEditor
  },
  computed: {
    editor() {
        return this.$refs.myQuillEditor.quill
      }
  },
  methods: {
    onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
    },
    submit() {
      console.log(this.content);
      this.$message.success('提交成功!');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
