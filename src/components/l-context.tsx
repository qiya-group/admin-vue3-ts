
import {defineComponent, computed, watch, ref, h} from 'vue'
export default defineComponent({
    props:{
        name: {
            type: String,
            default: ''
        },
        list: Array
    },
    setup(props){
        const slots = {
            dropdown: (props:any) => {
                console.log(props)
                return <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
            }
          };
        const list = '34353535354'.split('');
        return ()=> <div>
            <el-button>{props.name}</el-button>
            <div>
                <el-dropdown v-slots={slots} >
                    <span class="el-dropdown-link">
                    Dropdown List
                   
                    </span>
                </el-dropdown>
            </div>
            
            {list.map(v=>{
                return <div>{v}</div>
            })}
        </div>
    }
})



