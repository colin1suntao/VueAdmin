<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
        <el-breadcrumb-item>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-button class="handle-del">批量删除</el-button>
      <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select">
        <el-option key="1" label="广东省" value="1"></el-option>
        <el-option key="2" label="江苏省" value="2"></el-option>
        <el-option key="3" label="黑龙江省" value="3"></el-option>
        <el-option key="4" label="吉林省" value="4"></el-option>
        <el-option key="5" label="江西省" value="5"></el-option>
      </el-select>
      <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input"></el-input>
      <el-button type="primary" icon="search">搜索</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%" ref="multipleTable">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="日期"  sortable width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" ></el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: '../../../static/vuetable.json',
      select_cate: '',
      select_word: '',
      tableData: [{
        "date": "1997-11-11",
        "name": "林丽",
        "address": "吉林省 辽源市 龙山区"
    }, {
        "date": "1987-09-24",
        "name": "文敏",
        "address": "江西省 萍乡市 芦溪县"
    }, {
        "date": "1996-08-08",
        "name": "杨秀兰",
        "address": "黑龙江省 黑河市 五大连池市"
    }, {
        "date": "1978-06-18",
        "name": "魏强",
        "address": "广东省 韶关市 始兴县"
    }, {
        "date": "1977-07-09",
        "name": "石秀兰",
        "address": "江苏省 宿迁市 宿豫区"
    }, {
        "date": "1994-09-20",
        "name": "朱洋",
        "address": "海外 海外 -"
    }, {
        "date": "1980-01-22",
        "name": "傅敏",
        "address": "海外 海外 -"
    }, {
        "date": "1985-10-10",
        "name": "毛明",
        "address": "内蒙古自治区 包头市 九原区"
    }, {
        "date": "1975-09-08",
        "name": "何静",
        "address": "西藏自治区 阿里地区 普兰县"
    }, {
        "date": "1970-06-07",
        "name": "郭秀英",
        "address": "四川省 巴中市 恩阳区"
    }]
    }
  },
  methods:{
    handleEdit(index,row) {
      this.$message('编辑第'+(index+1)+'行');
    },
    handleDelete(index,row) {
      this.$message.error('删除第'+(index+1)+'行');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-del {
    border-color: #bfcbd9;
    color: #999;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}

</style>
