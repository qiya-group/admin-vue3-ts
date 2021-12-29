
import {defineComponent, computed, watch, ref, h, reactive, PropType} from 'vue'

interface FormQueryProps {
    options: any[]
}

interface FormOption {
    type: string;
    prop: string;
    label: string;
    placeholder?: string;
    options?: any[];
    min?: number;
    max?: number;
    border: boolean;
}

interface FormTypes {
    [index: string | number | symbol ]: any;
}

export default defineComponent({
    props: {
        options: {
            type: Array,
            default: ()=> []
        }
    },
    setup(props){
        const { options } = props;
        const _formData:any =   {};
        options.forEach((v: any) =>{
            _formData[v.prop] =  v.default || '';
        })
        const form = reactive<FormTypes>(_formData)
        const handleItem = (item: FormOption)=>{
            return <el-form-item label={item.label}>
                {getComp(item)}
            </el-form-item>
        }

        const getComp = (option: FormOption)=> {
            let comp = null;
            if(option.type === 'input'){
                comp =  <el-input v-model={form[option.prop]} placeholder={option.placeholder}></el-input>
            }
            
            if(option.type === 'input-number'){
                comp =  <el-input-number v-model={form[option.prop]} min={option.min || 0} max={option.max || 99999}></el-input-number>
            }

            if(option.type === 'radio'){
                comp =  <el-radio-group v-model={form[option.prop]}>
                            {
                                option.options && option.options.map(v=>{
                                    return   <el-radio border={option.border} label={v.value}>{v.label}</el-radio>
                                })
                            }
                        </el-radio-group>
            }

            if(option.type === 'checkbox') {
                comp =  <el-checkbox-group v-model={form[option.prop]}>
                        {
                            option.options && option.options.map(v=>{
                                return  <el-checkbox label={v.value}></el-checkbox>
                            })
                        }
                        
                </el-checkbox-group>
            }
            if(option.type === 'date'){
                comp = <el-date-picker
                    v-model={form[option.prop]}
                    type="date"
                    placeholder="Pick a day"
                    //disabled-date="disabledDate"
                    //shortcuts="shortcuts"
                    >
                </el-date-picker>
            }

            if(option.type.indexOf('date') !== -1){
                if(option.type.indexOf('range') !== -1){
                    comp = <el-date-picker
                        v-model={form[option.prop]}
                        type={option.type}
                        placeholder="Pick a day"
                        //disabled-date="disabledDate"
                        //shortcuts="shortcuts"
                        >
                    </el-date-picker>
                }else {
                    comp =  <el-date-picker
                        v-model={form[option.prop]}
                        type={option.type}
                        range-separator="To"
                        start-placeholder="开始"
                        end-placeholder="借宿"
                    ></el-date-picker>
                }
                
            }
            return comp;
        }


        return ()=> {
            return  <el-form ref='form' inline='true' model={form} label-width="100px">
                {
                    options && options.map(item=> handleItem(item as FormOption))
                }
            </el-form>
        }
    }
})



