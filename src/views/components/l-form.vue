<template>
    <div style="width: 500px; text-align: left">
        <el-form ref="form"  :model="model" label-width="120px">
            <el-form-item label="Activity name">
            <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
            <el-select v-model="model.region" placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
            <el-col :span="11">
                <el-date-picker
                v-model="model.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
                ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-time-picker
                v-model="model.date2"
                placeholder="Pick a time"
                style="width: 100%"
                ></el-time-picker>
            </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
            <el-switch v-model="model.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="Activity type">
            <el-checkbox-group v-model="model.type">
                <el-checkbox label="Online activities" name="type"></el-checkbox>
                <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                <el-checkbox label="Offline activities" name="type"></el-checkbox>
                <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
            <el-radio-group v-model="model.resource">
                <el-radio label="Sponsor"></el-radio>
                <el-radio label="Venue"></el-radio>
            </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
            <el-input v-model="model.desc" type="textarea"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { Edit } from '@element-plus/icons'
import { reactive, ref } from 'vue'
const form = ref(null);
const model = reactive<any>({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      })
const onSubmit = () => {
      console.log('submit!')
      console.log(model)
    };
const a = ref('');

</script>

<route lang="yaml">
name:  表单
path: /components/form
meta:
  requiresAuth: true
</route>