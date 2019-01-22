export default [
    {
        type: 'index',
        title: '#',
        fixed: 'left',
        align: 'center',
    }, {
        key: 'carNum',
        title: '车牌号',
        fixed: 'left',
    }, {
        filed: 'operate_single',
        title: '单车查看',
        fixed: 'left',
        align: 'center',
        render: (h, params) => {
            return h('Button', {
                props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'md-locate'
                },
                on: {
                    click: () => {
                        this.monitorSingle(params.index)
                    }
                }
            })
        }
    }, {
        filed: 'operate_info',
        title: '车辆信息',
        fixed: 'left',
        align: 'center',
        render: (h, params) => {
            return h('Button', {
                props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'md-grid'
                },
                on: {
                    click: () => {
                        this.monitorSingle(params.index)
                    }
                }
            })
        }
    }, {
        filed: 'operate_history',
        title: '历史查看',
        fixed: 'left',
        align: 'center',
        render: (h, params) => {
            return h('Button', {
                props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'md-map',
                },
                on: {
                    click: () => {
                        this.monitorSingle(params.index)
                    }
                }
            })
        }
    }, {
        key: 'isonline',
        title: '是否在线',
        align: 'center',
        render: (h, params) => {
            switch (params.row.isonline) {
                case "1":
                    return h('span', {
                        style: {
                            color: '#337ab7'
                        }
                    }, '在线');
                case "0":
                    return h('span', {
                        style: {
                            color: '#e49479'
                        }
                    }, '离线');
                default:
                    return h('span', '-');
            }
        }
    }, {
        key: 'ownerName',
        title: '所有人',
    }, {
        key: 'usageName',
        title: '使用类型',
    }, {
        key: 'carTypeName',
        title: '车辆类型',
    }, {
        key: 'cityName',
        title: '城市',
    }, {
        key: 'driveName',
        title: '动力类型',
    }, {
        key: 'emissionName',
        title: '排放阶段',
    }, {
        key: 'carModel',
        title: '车辆型号',
    }, {
        key: 'motorType',
        title: '发动机型号',
    }, {
        key: 'VIN',
        title: 'VIN码',
    }, {
        key: 'motorOutPut',
        title: '发动机排量',
    }, {
        key: 'createDate',
        title: '车辆注册登记时间',
    }, {
        key: 'createMileage',
        title: '车辆初始里程',
    }, {
        key: 'ownerPhone',
        title: '车辆所有人联系电话',
    }, {
        key: 'GarageName',
        title: '大户名称',
    }, {
        key: 'EPDeptName',
        title: '所属行政部门',
    }, {
        key: 'PNO',
        title: '终端号',
    }, {
        key: 'terminalBrand',
        title: '终端品牌',
    }, {
        key: 'terminalType',
        title: '终端型号',
    }, {
        key: 'SupplierName',
        title: '终端供应商',
    }, {
        key: 'speed',
        title: '车速（km/h）',
    }, {
        key: 'zs',
        title: '发动机转速（rpm）',
    }, {
        key: 'charge',
        title: '计算负荷',
    }, {
        key: 'motor',
        title: '发动机燃料流量',
    }, {
        key: 'air',
        title: '空气质量流量',
    }, {
        key: 'DPFFront',
        title: 'SCR前温（℃）',
    }, {
        key: 'DPFBehind',
        title: 'SCR后温（℃）',
    }, {
        key: 'NOX',
        title: 'NOx浓度(前端)',
    }, {
        key: 'SCRBehind',
        title: 'NOx浓度(后端)',
    }, {
        key: 'glowplateIgnition',
        title: '电加热点火状态',
        render: (h, params) => {
            let str = '-'
            switch (Number(params.row.glowplateIgnition)) {
                case 0:
                    str = "否";
                    break;
                case 1:
                    str = "是";
                    break;
                default:
                    str = '-';
            }
            return h('span', str);
        }
    }, {
        key: 'burnerStatus',
        title: '燃烧器喷油状态',
    }, {
        key: 'burnerFuel',
        title: '燃烧器喷油量',
    }, {
        key: 'NoxPosition',
        title: '尿素液位',
    }, {
        key: 'NOXConversionRate',
        title: 'NOx转化效率',
    }, {
        key: 'errorCode',
        title: '故障代码',
    }, {
        key: 'altitude',
        title: '海拔',
    }, {
        key: 'lng',
        title: '经度',
    }, {
        key: 'lat',
        title: '纬度',
    }, 
    /* {
        key: 'carposition',
        title: '位置',
        formatter: function (value, row, index) {
            var addr = "";
            var myGeo = new BMap.Geocoder();
            var _row = JSON.stringify(row);
            var obj = eval('(' + _row + ')');
            var Points = new BMap.Point(obj.lng, obj.lat);

            var num = obj.VIN;
            //console.log(num);
            myGeo.getLocation(Points, function (result) {
                if (result) {
                    data = result.address;
                    var nums = "#" + num;
                    $(nums).text(data);
                }
            });
            return "<span id='" + num + "'></span>";
        }
    }, */
    {
        key: 'GetJSONDataTime',
        title: '时间',
    }
]