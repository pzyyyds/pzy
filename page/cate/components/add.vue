<template>
    <div>
        <el-dialog :title="info.isAdd?'添加商品分类':'修改商品分类'" :visible.sync="info.isShow" @close="close">
            <el-form ref="form" :model="form" label-position="80px">
                <el-form-item label="上级分类">
                    <el-select v-model="form.pid" placeholder="请选择上级分类">
                        <el-option label="顶级分类" :value="0"></el-option>
                        <el-option v-for="item in list" :key="item.id" :label="item.catename" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="分类名称">
                    <el-input v-model="form.catename"></el-input>
                </el-form-item>
                
            </el-form>
        </el-dialog>
    </div>
</template>