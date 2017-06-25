<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item><i class="el-icon-date"> 图表</i></el-breadcrumb-item>
        <el-breadcrumb-item>基础图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="e-charts">
      <div class="content-title">折线图</div>
      <ve-line :data="chartData1"></ve-line>
      <div class="content-title">条形图</div>
      <ve-bar :data="chartData2"></ve-bar>
      <div class="content-title">柱状图</div>
      <ve-histogram :data="chartData3"></ve-histogram>
      <div class="content-title">饼状图</div>
      <ve-pie :data="chartData4"></ve-pie>
      <div class="content-title">环形图</div>
      <ve-ring :data="chartData5"></ve-ring>
      <div class="content-title">瀑布图</div>
      <ve-waterfall :data="chartData6"></ve-waterfall>
      <div class="content-title">漏斗图</div>
      <ve-funnel :data="chartData7"></ve-funnel>
      <div class="content-title">雷达图</div>
      <ve-radar :data="chartData8"></ve-radar>

    </div>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line';
import VeBar from 'v-charts/lib/bar';
import VeHistogram from 'v-charts/lib/bar';
import VePie from 'v-charts/lib/pie';
import VeRing from 'v-charts/lib/ring';
import VeWaterfall from 'v-charts/lib/waterfall';
import VeRadar from 'v-charts/lib/radar';
import VeFunnel from 'v-charts/lib/funnel';
export default {
  components: {
    VeLine,
    VeBar,
    VeHistogram,
    VePie,
    VeRing,
    VeWaterfall,
    VeRadar,
    VeFunnel
  },
  data () {
    return {
      
    }
  },
  created() {
    this.chartData1 = {
      columns: ['日期','销售量'],
      rows: [
        { '日期': '1月1日', '销售量': 123 },
        { '日期': '1月2日', '销售量': 1223 },
        { '日期': '1月3日', '销售量': 2123 },
        { '日期': '1月4日', '销售量': 4123 },
        { '日期': '1月5日', '销售量': 3123 },
        { '日期': '1月6日', '销售量': 7123 }
      ]
    },
    this.chartData2 = {
      columns: ['日期', '余额', '年龄'],
      rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
      ]
    },
    this.chartData3 = {
      columns: ['日期', '余额', '年龄'],
      rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
    },
    this.chartData4 = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
    },
    this.chartData5 = {
        columns: ['日期', '余额', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.1 },
          { '日期': '1-2', '余额': 1223, '比率': 0.2 },
          { '日期': '1-3', '余额': 2123, '比率': 0.3 },
          { '日期': '1-4', '余额': 4123, '比率': 0.4 },
          { '日期': '1-5', '余额': 3123, '比率': 0.5 },
          { '日期': '1-6', '余额': 7123, '比率': 0.6 }
        ]
    },
    this.chartData6 = {
        columns: ['活动', '时间'],
        rows: [
          { '活动': '吃饭', '时间': 4 },
          { '活动': '睡觉', '时间': 10 },
          { '活动': '打豆豆', '时间': 5 }
        ]
    },
    this.chartData7 = {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '展示', '数值': 900 },
          { '状态': '访问', '数值': 600 },
          { '状态': '点击', '数值': 300 },
          { '状态': '订单', '数值': 100 }
        ]
    },
    this.chartData8 = {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' }
        ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
