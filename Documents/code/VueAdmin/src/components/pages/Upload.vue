<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 文件上传</el-breadcrumb-item>
        <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="content-title">支持拖拽</div>
    <el-upload
      class="upload-demo"
      drag
      action="/api/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div class="content-title">支持裁剪</div>
    <img class="pre-img" :src="src" alt="">
    <!--<vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               text="上传图片"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError">
    </vue-core-image-upload>-->
  </div>
</template>

<script>
// import VueCoreImageUpload  from 'vue-core-image-upload';
export default {
  data () {
    return {
      src: '../../../static/img/img.jpg',
      fileList: []
    }
  },
  components: {
    // VueCoreImageUpload
  },
  methods: {
    imageuploaded(res) {
      console.log(res)
    },
    handleError(){
      this.$notify.error({
        title: '上传失败',
          message: '图片上传接口上传失败，可更改为自己的服务器接口'
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    .pre-img{
        width:250px;
        height: 250px;
        margin-bottom: 20px;
    }
</style>
