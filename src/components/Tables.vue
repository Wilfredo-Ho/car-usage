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
                @on-row-click='handleRowClick'
            />
        </div>
        <div class="page-wpt">
            <Page 
                show-elevator
                show-sizer
                :total='total'
                :current='pagination.number'
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
            tableData: [],
            loading: false,
            total: 100,
            selectedRow: null,
            pagination: {
                number: 1,
                size: 10,
            }
        }   
    },
    methods: {
        handleRowClick (row, index) {
            this.selectedRow = row
        },
        handlePageNumberChange (number) {
            let pagination = {
                ...this.pagination,
                number
            }
            this.handlePageChange();
        },
        handlePageSizeChange (size) {
            let pagination = {
                ...this.pagination,
                size
            }
            this.handlePageChange();
        },
        handlePageChange () {
            $post(this.url, {...this.pagination}, (res) => {
                this.total = res.total;
                this.data = res.rows;
            })
        }
    }
}
</script>

