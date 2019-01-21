<template>
    <div class="home-wpt">
        <Row :gutter="30">
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon icon-border"><Icon type="md-pulse" size="30" color='#003782' /></span>
                        <span class="sub-title pull-right">实时监测</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">当前在线车辆数</span>
                        <span class="number pull-right">{{ $util.thousandBitSeparator(serverData.showTwo.onLineCarCount) }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon icon-border"><Icon type="md-podium" size="30" color='#003782' /></span>
                        <span class="sub-title pull-right">持续统计中</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">系统总车辆数</span>
                        <span class="number pull-right">{{ $util.thousandBitSeparator(serverData.showTwo.allCarCount) }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon"><Icon type="md-speedometer" size="32" color='#003782' /></span>
                        <span class="sub-title pull-right">里程统计(KM)</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">车辆运行总里程</span>
                        <span class="number pull-right">{{ $util.thousandBitSeparator($util.extNumber(serverData.showTwo.totolMile)) }}</span>  
                    </div>
                </div>
            </Col>
            <Col span="6">
                <div class="list-item">
                    <div class="list-item-top clearfix">
                        <span class="icon"><Icon type="md-time" size="32" color='#003782' /></span>
                        <span class="sub-title pull-right">总工作时长(HOUR)</span>  
                    </div>
                    <div class="list-item-bottom clearfix">
                        <span class="title">车辆运行总时间</span>
                        <span class="number pull-right">{{ $util.thousandBitSeparator($util.extNumber(serverData.showTwo.totolTime)) }}</span>  
                    </div>
                </div>
            </Col>
        </Row>
        <Row :gutter="30" class-name='row-gutter'>
            <Col span="14">
                <Charts :option="option1" :loading="loading" :height="12.1875" class='chart-wpt'/>
                <Charts :option="option2" :loading="loading" :height="12.1875" class='chart-wpt row-gutter' />
                <Charts :option="option3" :loading="loading" :height="12.1875" class='chart-wpt row-gutter' />
            </Col>
            <Col span="10">
                <Row :gutter="30">
                    <Col span="12">
                        <Charts :option="option4" :loading="loading" :height="22.5" class='chart-wpt'/>
                    </Col>
                    <Col span="12">
                        <Charts :option="option5" :loading="loading" :height="22.5" class='chart-wpt'/>
                    </Col>
                </Row>
                <Carousel 
                    dots="none"
                    arrow='always'
                    class='carousel-wpt'>
                    <CarouselItem v-for="(item, index) in serverData.showFive" :key='index'>
                        <div class="carousel-item">
                            <div class="time-stampt">{{ item.CreateTime }}</div>
                            <div class="content">{{ item.Content }}</div>
                        </div>
                    </CarouselItem>
                </Carousel>
            </Col>
        </Row>
    </div>
</template>

<script>
import Charts from '../components/Charts'
const option_init = {
    color: [],
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter: function(params){
            var value = 0;
            params.map(function(item) {
                value += item.data;
            });
            return params[0].name + ' : ' + value;
        }
    },
    title: {
        text: '',
        left: '3%',
        top: 16,
        textStyle: {
            fontSize: 14
        }
    },
    grid: {
        left: '7%',
        right: '7%',
        top: '30%',
        bottom: '20%'
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['日均', '昨日']
    },
    series: []
};
export default {
    computed: {
        option1 () {
            if(this.loading) return {}
            return {
                ...option_init,
                ...{
                    color: ['#ff8516', '#909090'],
                    title: {
                        text: '在线车辆数据统计分析（单位：辆）',
                        left: '3%',
                        top: 16,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    series: [{
                        type: 'bar',
                        name: '日均',
                        barGap: '-100%',
                        data: [this.serverData.showFour.monthCarCount, 0]
                    },
                    {
                        type: 'bar',
                        name: '昨日',
                        barGap: '-100%',
                        data: [0, this.serverData.showFour.yesterdayCarCount]
                    }]
                }
            }
        },
        option2 () {
            if(this.loading) return {}
            return {
                ...option_init,
                ...{
                    color: ['#023b84', '#909090'],
                    title: {
                        text: '运行总里程数据统计分析（单位：KM）',
                        left: '3%',
                        top: 16,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    series: [{
                        type: 'bar',
                        name: '日均',
                        barGap: '-100%',
                        data: [this.serverData.showFour.monthRunMile, 0]
                    },
                    {
                        type: 'bar',
                        name: '昨日',
                        barGap: '-100%',
                        data: [0, this.serverData.showFour.yesterdayRunMile]
                    }]
                }
            }
        },
        option3 () {
            return {
                ...option_init,
                ...{
                    color: ['#ff4558', '#909090'],
                    title: {
                        text: '运行总时间数据统计分析（单位：小时）',
                        left: '3%',
                        top: 16,
                        textStyle: {
                            fontSize: 14
                        }
                    },
                    series: [{
                        type: 'bar',
                        name: '日均',
                        barGap: '-100%',
                        data: [this.serverData.showFour.monthRunTime, 0]
                    },
                    {
                        type: 'bar',
                        name: '昨日',
                        barGap: '-100%',
                        data: [0, this.serverData.showFour.yesterdayRunTime]
                    }]
                }
            }
        },
        option4 () {
            if(this.loading) return {}
            let usage = this.serverData.showThree.usage.map(function(item) {
                return {
                    name: item.usageName,
                    value: Number(item.carCount)
                };
            });

            return {
                color: ['#ff77d3', '#91c4ec', '#00a84f', '#ff851b', '#00a5a8', '#ff4558'],
                backgroundColor: '#fff',
                title: {
                    text: '接入平台车辆使用类型分布',
                    left: '3%',
                    top: 14,
                    textStyle: {
                        fontSize: 14
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}辆 ({d}%)"
                },
                series: [
                    {
                        name: '使用类型分布',
                        type: 'pie',
                        roseType: 'radius',
                        radius : ['40%', '60%'],
                        center : ['50%', '50%'],
                        data: usage,
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    }
                ]
            }
        },
        option5 () {
            if(this.loading) return {}
            let obj = this.serverData.showThree
            let alarm = [
                { name: '合格车辆', value: obj.alarm.allCarCount - obj.alarm.alarmCarCount},
                { name: '告警车辆', value: obj.alarm.alarmCarCount}
            ];

            return {
                color: ['#0077d3', '#ff851b'],
                backgroundColor: '#fff',
                title: {
                    text: '故障告警车辆占比分布',
                    left: '3%',
                    top: 14,
                    textStyle: {
                        fontSize: 14
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}辆 ({d}%)"
                },
                series: [
                    {
                        name: '故障告警分布',
                        type: 'pie',
                        roseType: 'radius',
                        radius : ['40%', '60%'],
                        center : ['50%', '50%'],
                        data: alarm,
                        label: {
                            normal: {
                                show: false,
                            }
                        }
                    }
                ]
            }
        }
    },
    data () {
        return {
            loading: false,
            serverData:{
                "showOne": {
                    "userName": "admin"
                },
                "showTwo": {
                    "allCarCount": 98,
                    "onLineCarCount": 21,
                    "totolMile": "305435.91km",
                    "totolTime": "19774.9h"
                },
                "showThree": {
                    "usage": [{
                        "carCount": "4",
                        "usageName": "公交车"
                    }, {
                        "carCount": "6",
                        "usageName": "商务巴士"
                    }, {
                        "carCount": "1",
                        "usageName": "挖掘机"
                    }, {
                        "carCount": "8",
                        "usageName": "混凝土运输车"
                    }, {
                        "carCount": "1",
                        "usageName": "渣土车"
                    }, {
                        "carCount": "19",
                        "usageName": "物流车"
                    }, {
                        "carCount": "42",
                        "usageName": "环卫车"
                    }, {
                        "carCount": "12",
                        "usageName": "邮政车"
                    }],
                    "alarm": {
                        "allCarCount": 98,
                        "alarmCarCount": 87
                    }
                },
                "showFour": {
                    "yesterdayCarCount": 86,
                    "yesterdayRunMile": 9296.36,
                    "yesterdayRunTime": 532.39,
                    "monthCarCount": 41.93,
                    "monthRunMile": 3664.36,
                    "monthRunTime": 222.23
                },
                "showFive": [{
                    "keyID": "52",
                    "Content": "截止到2018年10月25日，平台共计接入车辆69辆。",
                    "CreateTime": "2018/10/26 15:43:43"
                }]
            }
        }
    },
    components: {
        Charts
    },
    mounted () {
        
    }
}
</script>


<style scoped>
.home-wpt{
    padding: 14px 0;
}
.list-item{
    background: #fff;
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    padding: 1.25rem;

}
.icon-border {
    border: 1px solid #073f87;
    border-radius: 50%;
    width: 31px;
    height: 31px;
    display: inline-block;
}
.sub-title {
    color: #cacaca;
    font-size: .8125rem;
}
.list-item-bottom{
    /* margin-top: 10px; */
}
.list-item .title {
    margin-top: .58rem;
    display: inline-block;
    font-size:  .9375rem;
}
.number {
    color: #003782;
    font-size: 1.3125rem;
    font-weight: 700;
}
.row-gutter{
    margin-top: 1.875rem;
}
.chart-wpt {
    border-radius: 6px;
    border: 1px solid #dfdfdf;
    overflow: hidden;
}
.carousel-wpt{
    margin-top: 1.875rem;
    height: 16rem;
    background: #073F87;
    border-radius: 6px;
}
.carousel-item{
    color: #fff;
    height: 16rem;
    line-height: 7;
    text-align: center;
}
.carousel-item .time-stampt {
    height: 4rem;
    /* line-height: 8rem; */
    font-size: 1rem;
}
.carousel-item .content{
    height: 12rem;
    font-size: 1.1rem;
}
</style>


