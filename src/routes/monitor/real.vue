<template>
    <div class='page-wpt'>
        <div class="page-header">

        </div>
        <div class="page-option">

        </div>
        <div class="page-content">
            <Tables 
                url='/selectAllUnitData'
                :columns='columns'
                @rowChecked='handleRowChecked'
            />
        </div>
    </div>
</template>

<script>
import Tables from '../../components/Tables'
import columns from '../../config/columns/monitorReal.js'
export default {
    data () {
        return {
            columns: columns
        }
    },
    methods: {
        handleRowChecked (row) {
            console.log(row)
        }
    },
    components: {
        Tables,
    }
}
</script>

