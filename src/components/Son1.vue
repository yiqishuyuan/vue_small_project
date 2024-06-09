<template>
    <!-- 此处通过ref来标记 -->
    <div ref="myechart" class="box" >

    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    mounted() {
        // 在此处使用$ref来获取准确的dom值  (this.$refs.ref标记的名字)
        var myChart =  echarts.init(this.$refs.myechart);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
}
</script>

<style scoped>
.box {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid black;
}
</style>