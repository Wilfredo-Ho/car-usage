<template>
    <div class="table-page-wpt">
        <div class="table-wpt">
            <Table 
                :data='tableData'
                :columns='columns'
                :loading='loading'
                :stripe='true'
                :border='true'
                :highlight-row='true'
                @on-current-change='handleSelectedRowChange'
            />
        </div>
        <div class="page-wpt">
            <Page 
                show-elevator
                show-sizer
                show-total
                :total='total'
                :current='pagination.number'
                :page-size='pagination.size'
                :page-size-opts='[15, 30, 50, 100]'
                @on-change='handlePageNumberChange'
                @on-page-size-change='handlePageSizeChange'
            />
        </div>
    </div>
</template>

<script>
import { $post } from '../util'

export default {
    props: {
        url: {
            required: true,
            type: String
        },
        columns: {
            required: true,
            type: Array
        }
    },
    data () {
        return {
            loading: true,
            tableData: [],
            total: 100,
            // selectedRow: null,
            pagination: {
                number: 1,
                size: 15,
            }
        }   
    },
    methods: {
        handleSelectedRowChange (currentRow) {
            this.$emit('rowChecked', currentRow)
        },
        handlePageNumberChange (number) {
            this.pagination = {
                ...this.pagination,
                number
            }
            this.handlePageChange();
        },
        handlePageSizeChange (size) {
            this.pagination = {
                ...this.pagination,
                size
            }
            this.handlePageChange();
        },
        handlePageChange () {
            this.loading = true
            let user = {
                UserID: 1,
                RoleID: 1,
                page: this.pagination.number,
                row: this.pagination.size
            }
            console.log(this.pagination.number)
            $post(this.url, user, (res) => {
                console.log(res)
                this.total = res.total;
                this.tableData = res.rows;
                this.loading = false;
            })
        }
    },
    mounted () {
        this.handlePageChange();
    }
}
</script>

<style scoped>
.table-wpt >>> .ivu-table-cell {
    white-space: nowrap;
    word-break: normal;
    padding-left: 8px;
    padding-right: 8px;
}

.table-wpt >>> .ivu-table td, .table-wpt >>> .ivu-table th {
    height: 40px;
}

.page-wpt {
    margin-top: .5rem;
}
</style>


