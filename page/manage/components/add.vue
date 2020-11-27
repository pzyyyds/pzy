<template>
  <div>
    <el-dialog
      :title="info.isAdd ? '添加管理员' : '修改管理员'"
      :visible.sync="info.isShow"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="所属角色">
          <el-select v-model="form.roleid" placeholder="请选择上级角色">
            <el-option label="请选择" :value="0"></el-option>
            <el-option
              v-for="item in list"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch
            v-model="form.status"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="cancel">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  reqManageAdd,
  reqManageOne,
  reqManageUpdate,
} from "../../../util/request";
import { successAlert, warningAlert } from "../../../util/alert";
export default {
  props: ["info"],
  components: {},
  data() {
    return {
      form: {
        roleid: 0,
        username: "",
        password: "",
        status: 1,
      },
    };
  },
  computed: {
    ...mapGetters({
      list: "role/list",
    }),
  },
  methods: {
    ...mapActions({
      reqChangeList: "role/reqChangeList",
      reqManageList: "manage/reqChangeList",
      reqChangeTotal: "manage/reqChangeTotal",
    }),
    cancel() {
      this.info.isShow = false;
      this.empty();
    },
    empty() {
      this.form = {
        roleid: 0,
        username: "",
        password: "",
        status: 1,
      };
    },
    add() {
      console.log(this.form);
      reqManageAdd(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.reqManageList();
          this.reqChangeTotal();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
    getOne(uid) {
      reqManageOne(uid).then((res) => {
        this.form = res.data.list;
        this.form.roleid = res.data.list.roleid;
        this.form.password = "";
      });
    },
    update() {
      reqManageUpdate(this.form).then((res) => {
        if (res.data.code === 200) {
          successAlert(res.data.msg);
          this.cancel();
          this.reqManageList();
        } else {
          warningAlert(res.data.msg);
        }
      });
    },
  },
  mounted() {
    if (this.list.length === 0) {
      this.reqChangeList();
    }
  },
};
</script>
<style scoped>
</style>
