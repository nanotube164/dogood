<template>
    <Content :style="{padding: '24px', minHeight: '280px', background: '../'}">             
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="mider-form">
            <FormItem label="材料編號" prop="name">
                <Input v-model="formValidate.name" placeholder="請輸入工程材料編號"></Input>
            </FormItem>
            <FormItem label="中文品名" prop="name">
                <Input v-model="formValidate.name" placeholder="請輸入中文品名"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">查詢</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>
        Content
        <Table :columns="columns" :data="data" border height="700"></Table>
        <Page :total="100"/>
    </Content>
</template>

<script>
export default {
  name: 'ContentPart',
  setup() {
  },
  methods: {
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
            } else {
                this.$Message.error('Fail!');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    },
    handleClick() {
      this.$Message.info('Welcome to View UI Plus Demo!')
    },
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
      })
    },
    remove(index) {
      this.data.splice(index, 1)
    }
  },
  data() {
    return {
        columns: [
                    {
                        title: '項次',
                        key: 'P_ITEM_1',
                        align: 'center',
                        width: 200,
                        fixed: 'left',
                        filters: [
                            {
                                label: 'Joe',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name === 'Joe';
                            } else if (value === 2) {
                                return row.name === 'John Brown';
                            }
                        }
                    },
                    {
                        title: 'Other',
                        align: 'center',
                        children: [
                            {
                                title: '材料編號',
                                key: 'P_ITEM_2',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '設計終版數量',
                                key: 'P_ITEM_3',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '預算量工料分析量',
                                key: 'P_ITEM_4',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '預算編列廠商帶料量',
                                key: 'P_ITEM_5',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '調撥入本工號數量',
                                key: 'P_ITEM_6',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '代用料號',
                                key: 'P_ITEM_7',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '代用數量',
                                key: 'P_ITEM_8',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '請購量',
                                key: 'P_ITEM_9',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '訂購量',
                                key: 'P_ITEM_10',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '差異量',
                                key: 'P_ITEM_11',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '已交貨量',
                                key: 'P_ITEM_12',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '已領用',
                                key: 'P_ITEM_13',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '庫存量',
                                key: 'P_ITEM_14',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '可轉為施工中餘料量',
                                key: 'P_ITEM_15',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '目前可調撥量',
                                key: 'P_ITEM_16',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '已調撥至他案成功量',
                                key: 'P_ITEM_17',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: '本案實際使用數量',
                                key: 'P_ITEM_18',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                        ]
                    },
                    
                    {
                        title: '中文品名',
                        key: 'P_ITEM_19',
                        align: 'center',
                        width: 400,
                        fixed: 'right'
                    }
                ],
        formValidate: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            desc: ''
        },
        ruleValidate: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
                { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
            city: [
                { required: true, message: 'Please select the city', trigger: 'change' }
            ],
            gender: [
                { required: true, message: 'Please select gender', trigger: 'change' }
            ],
            interest: [
                { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
            ],
            date: [
                { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
            ],
            time: [
                { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
            ],
            desc: [
                { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
        },
      data: []
    }
    }
}

</script>

<style>
.mider-form{
    width: 100%;
    height: 200px;
    background: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 20px;
    left: 0px;
}
</style>