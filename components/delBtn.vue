<template>
  <el-button type="danger" @click="del">删除</el-button>
</template>
<script>
export default {
  methods: {
    del(id) {
      this.$confirm("确认删除么？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$emit("del2");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style scoped>
</style>